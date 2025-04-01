import React from 'react';
import { Paper, Typography, useTheme, Fade, Chip, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useOpeningStore } from '../../store/openingStore';

const AnalysisContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),
  backgroundColor: '#FFF9E6',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(255, 182, 193, 0.2)',
  minHeight: '120px',
  border: '2px solid #FFB6C1',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 6px 16px rgba(255, 182, 193, 0.3)',
    transform: 'translateY(-2px)',
  },
}));

const AnalysisTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Comic Sans MS", cursive',
  fontSize: '1.2rem',
  fontWeight: 600,
  color: '#FF6B6B',
  marginBottom: theme.spacing(1),
  textAlign: 'center',
}));

const MoveNotation = styled(Typography)(({ theme }) => ({
  fontFamily: '"Comic Sans MS", cursive',
  fontWeight: 600,
  fontSize: '1.3rem',
  color: '#4A90E2',
  marginBottom: theme.spacing(1),
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  '&:hover': {
    color: '#FF6B6B',
    transform: 'scale(1.05)',
  },
}));

const StrategicIdea = styled(Typography)(({ theme }) => ({
  fontFamily: '"Comic Sans MS", cursive',
  fontSize: '1rem',
  lineHeight: 1.6,
  color: '#2C3E50',
  fontStyle: 'italic',
  marginTop: theme.spacing(1),
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
}));

const AnalysisChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: '#FFFFFF',
  '& .MuiChip-icon': {
    color: '#FFFFFF',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const WarningChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#FF9800',
  color: '#FFFFFF',
  '& .MuiChip-icon': {
    color: '#FFFFFF',
  },
  '&:hover': {
    backgroundColor: '#F57C00',
  },
}));

const IconWrapper = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  marginRight: '8px',
});

export const MoveAnalysis: React.FC = () => {
  const { getCurrentMoveAnalysis, currentMoveIndex, currentNode } = useOpeningStore();
  const { move, strategicIdea, stepNumber, notation } = getCurrentMoveAnalysis();

  const getFriendlyMove = (move: string) => {
    // 如果是初始局面，直接返回"开始局面"，不显示回合数
    if (move === '初始局面' || currentMoveIndex === 0) {
      return '开始局面';
    }
    
    // 计算当前回合数（从1开始）
    const turnNumber = Math.floor((stepNumber + 1) / 2);
    
    // 判断是白方还是黑方的走子
    const isWhiteMove = stepNumber % 2 === 0;
    
    // 构建回合显示文本，使用点号代替省略号
    if (isWhiteMove) {
      return `第${turnNumber}回合：...${move}`;
    } else {
      return `第${turnNumber}回合：${move}...`;
    }
  };

  const getFriendlyStrategy = (strategy: string) => {
    if (!strategy) return null;
    return `策略分析：${strategy}`;
  };

  return (
    <AnalysisContainer>
      <MoveNotation>
        {getFriendlyMove(move)}
      </MoveNotation>
      {/* 只在非初始状态下显示棋谱 */}
      {move !== '初始局面' && currentMoveIndex > 0 && notation && (
        <Typography 
          sx={{ 
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            color: '#666',
            mt: 1,
            mb: 1,
            padding: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            borderRadius: 1,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}
        >
          {notation}
        </Typography>
      )}
      {strategicIdea && (
        <StrategicIdea variant="body2">
          {getFriendlyStrategy(strategicIdea)}
        </StrategicIdea>
      )}
    </AnalysisContainer>
  );
};