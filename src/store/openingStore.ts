import { create } from 'zustand';
import { Opening, LearningProgress, PracticeSession, PracticeMode, VariationNode } from '../types/chess';
import { openings } from '../data/openings';

// 从开局数据中提取走法列表
const getMovesList = (opening: Opening | null): string[] => {
  if (!opening || !opening.mainLine) return [];
  
  const moves: string[] = [];
  let currentNode = opening.mainLine;
  
  // 如果当前节点有走法，添加到列表中
  if (currentNode.move?.san) {
    moves.push(currentNode.move.san);
  }
  
  // 遍历主线路径，收集所有走法
  while (currentNode.children && currentNode.children.length > 0) {
    currentNode = currentNode.children[0];
    if (currentNode.move?.san) {
      moves.push(currentNode.move.san);
    }
  }
  
  return moves;
};

interface OpeningStore {
  // 开局数据
  openings: Opening[];
  selectedOpening: Opening | null;
  currentPosition: string;
  currentNode: VariationNode | null;
  // 历史记录
  moveHistory: {position: string; node: VariationNode | null}[];
  // 学习进度
  learningProgress: Record<string, LearningProgress>;
  currentSession: PracticeSession | null;
  moves: string[];
  currentMoveIndex: number;
  
  // 操作方法
  selectOpening: (opening: Opening) => void;
  updatePosition: (position: string) => void;
  startPractice: (openingId: string, mode: PracticeMode) => void;
  endPractice: (score?: number) => void;
  recordMistake: (move: string) => void;
  updateProgress: (openingId: string, progress: Partial<LearningProgress>) => void;
  nextMove: () => void;
  previousMove: () => void;
  resetPosition: () => void;
  setCurrentMoveIndex: (index: number) => void;
  getCurrentMoveAnalysis: () => {
    move: string;
    strategicIdea: string;
    stepNumber: number;
    notation: string;
  };
}

export const useOpeningStore = create<OpeningStore>((set, get) => ({
  openings,
  selectedOpening: openings[0],
  currentPosition: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', // 标准初始局面
  currentNode: openings[0].mainLine,
  moveHistory: [], // 初始化空的历史记录
  learningProgress: {},
  currentSession: null,
  moves: ['初始局面', ...getMovesList(openings[0])],
  currentMoveIndex: 0,

  selectOpening: (opening) => set({
    selectedOpening: opening,
    currentPosition: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    currentNode: opening.mainLine,
    moveHistory: [],
    currentSession: null,
    moves: ['初始局面', ...getMovesList(opening)],
    currentMoveIndex: 0,
  }),

  updatePosition: (position) => set({ currentPosition: position }),

  startPractice: (openingId, mode) => set({
    currentSession: {
      openingId,
      mode,
      currentPosition: 'start',
      targetVariation: '',
      mistakes: [],
      startTime: new Date(),
    },
  }),

  endPractice: (score) => set((state) => {
    if (!state.currentSession) return state;

    const session = state.currentSession;
    session.endTime = new Date();
    if (score !== undefined) session.score = score;

    // 更新学习进度
    const progress = state.learningProgress[session.openingId] || {
      openingId: session.openingId,
      lastPosition: session.currentPosition,
      masteryLevel: 0,
      completedVariations: [],
      lastReviewDate: new Date(),
      nextReviewDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24小时后复习
    };

    return {
      currentSession: null,
      learningProgress: {
        ...state.learningProgress,
        [session.openingId]: progress,
      },
    };
  }),

  recordMistake: (move) => set((state) => {
    if (!state.currentSession) return state;

    return {
      currentSession: {
        ...state.currentSession,
        mistakes: [...state.currentSession.mistakes, { san: move } as any],
      },
    };
  }),

  updateProgress: (openingId, progress) => set((state) => ({
    learningProgress: {
      ...state.learningProgress,
      [openingId]: {
        ...state.learningProgress[openingId],
        ...progress,
      },
    },
  })),

  resetPosition: () => set((state) => {
    if (!state.selectedOpening) return state;
    
    return {
      currentPosition: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      currentNode: state.selectedOpening.mainLine,
      moveHistory: [],
      currentMoveIndex: 0
    };
  }),

  nextMove: () => set((state) => {
    if (!state.selectedOpening || !state.currentNode || !state.currentNode.children || state.currentNode.children.length === 0) {
      return state;
    }
    
    // 在移动到下一步之前，保存当前状态到历史记录
    const currentState = {
      position: state.currentPosition,
      node: state.currentNode
    };
    
    // 获取当前节点的第一个子节点
    const nextNode = state.currentNode.children[0];
    
    // 检查当前FEN字符串是否是初始局面
    const isInitialPosition = state.currentPosition === 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' || 
                             state.currentPosition === 'start';
    
    // 如果是初始局面，我们需要特殊处理，只执行白方的第一步
    if (isInitialPosition) {
      // 获取主线的第一步（白方）
      const firstNode = state.selectedOpening.mainLine;
      return {
        currentPosition: firstNode.fen,
        currentNode: firstNode,
        moveHistory: [...state.moveHistory, currentState],
        currentMoveIndex: state.currentMoveIndex + 1
      };
    }
    
    return {
      currentPosition: nextNode.fen,
      currentNode: nextNode,
      moveHistory: [...state.moveHistory, currentState],
      currentMoveIndex: state.currentMoveIndex + 1
    };
  }),
  
  previousMove: () => set((state) => {
    // 如果历史记录为空，则无法返回上一步
    if (state.moveHistory.length === 0) {
      return state;
    }
    
    // 获取历史记录中的最后一个状态
    const lastState = state.moveHistory[state.moveHistory.length - 1];
    
    // 更新当前状态为历史记录中的最后一个状态，并移除该历史记录
    return {
      currentPosition: lastState.position,
      currentNode: lastState.node,
      moveHistory: state.moveHistory.slice(0, -1),
      currentMoveIndex: Math.max(0, state.currentMoveIndex - 1)
    };
  }),

  setCurrentMoveIndex: (index: number) => set({ currentMoveIndex: index }),

  getCurrentMoveAnalysis: () => {
    const { moves, currentMoveIndex, selectedOpening, currentNode } = get();
    let move = moves[currentMoveIndex];
    let strategicIdea = '';
    const displayStepNumber = currentMoveIndex;

    // 根据不同的走法返回对应的战略思想
    if (selectedOpening) {
      if (currentNode) {
        // 如果有当前节点，使用节点的策略分析
        strategicIdea = currentNode.strategicIdea || '这是一个很好的开局选择！';
        // 使用节点的走法
        move = currentNode.move?.san || move;
      } else {
        // 如果没有当前节点，使用默认分析
        switch (move) {
          case '初始局面':
            strategicIdea = `这是${selectedOpening.name}的起始局面，白方先手。`;
            break;
          case 'e4':
            strategicIdea = '白方第一步走e4，控制中心并打开象和皇后的线路。';
            break;
          case 'e5':
            strategicIdea = '黑方回应e5，对称地控制中心。';
            break;
          case 'Nf3':
            strategicIdea = '白方发展马到f3，准备控制中心并保护e4兵。';
            break;
          case 'Nc6':
            strategicIdea = '黑方发展马到c6，保护e5兵并控制中心。';
            break;
          default:
            strategicIdea = '这是一个重要的战略走法。';
        }
      }
    } else {
      strategicIdea = '请选择一个开局开始学习。';
    }

    // 只在非初始状态下生成棋谱记录
    let notation = '';
    if (move !== '初始局面' && currentMoveIndex > 0) {
      notation = moves.slice(1, currentMoveIndex + 1).reduce((acc, m, idx) => {
        const turnNumber = Math.floor(idx / 2) + 1;
        const isWhiteMove = idx % 2 === 0;
        
        if (isWhiteMove) {
          return `${acc}${turnNumber}.${m} `;
        } else {
          return `${acc}${m} `;
        }
      }, '').trim();
    }

    return {
      move,
      strategicIdea,
      stepNumber: displayStepNumber,
      notation,
    };
  },
}));