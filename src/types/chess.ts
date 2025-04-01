// 开局数据库的类型定义

// ECO（国际象棋开局百科全书）分类代码
export type ECOCode = string; // 例如: 'B90' 表示西西里防御

// 棋步的类型定义
export interface ChessMove {
  from: string;      // 起始格子，例如: 'e2'
  to: string;        // 目标格子，例如: 'e4'
  piece: string;     // 棋子类型，例如: 'p'(兵), 'n'(马), 'b'(象), 'r'(车), 'q'(后), 'k'(王)
  san: string;       // 标准代数记号，例如: 'e4'
  comment?: string;  // 这步棋的注释说明
  warning?: string;  // 陷阱或警告提示
}

// 变例节点，用于构建开局树
export interface VariationNode {
  id: string;           // 节点唯一标识
  move: ChessMove;      // 当前节点的走法
  fen: string;          // 当前局面的FEN字符串
  children: VariationNode[]; // 子变例
  evaluation?: string;  // 局面评估
  strategicIdea?: string; // 战略思想说明
}

// 开局变例的完整信息
export interface Opening {
  ecoCode: ECOCode;    // ECO代码
  name: string;        // 开局名称
  category: string;    // 分类（王翼开局、后翼开局等）
  description: string; // 开局简介
  mainLine: VariationNode; // 主要变例树
  strategicThemes: string[]; // 主要战略主题
  commonTraps: string[]; // 常见陷阱说明
  players?: {
    white: string;     // 白方棋手ID
    black: string;     // 黑方棋手ID
    scores?: {         // 比分（可选）
      white: number;   // 白方得分
      black: number;   // 黑方得分
    }
  };
}

// 用户学习进度
export interface LearningProgress {
  openingId: string;   // 开局ID
  lastPosition: string; // 最后学习到的局面（FEN）
  masteryLevel: number; // 掌握程度（0-100）
  completedVariations: string[]; // 已完成的变例ID
  lastReviewDate: Date; // 最后复习日期
  nextReviewDate: Date; // 下次复习日期
}

// 练习模式类型
export enum PracticeMode {
  FOLLOW_STEPS = 'follow_steps',   // 步骤跟随模式
  FREE_PRACTICE = 'free_practice', // 自由练习模式
  TEST = 'test'                    // 测试模式
}

// 练习会话状态
export interface PracticeSession {
  openingId: string;      // 当前练习的开局ID
  mode: PracticeMode;     // 练习模式
  currentPosition: string; // 当前局面（FEN）
  targetVariation: string; // 目标变例ID
  mistakes: ChessMove[];  // 错误走法记录
  startTime: Date;        // 开始时间
  endTime?: Date;         // 结束时间
  score?: number;         // 练习得分
}