import React from 'react';
import { Paper, Typography, useTheme, Fade, Chip, Divider, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useOpeningStore } from '../../store/openingStore';
import { useLanguage } from '../../context/LanguageContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

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
  const { t, language } = useLanguage();
  const { 
    getCurrentMoveAnalysis, 
    currentMoveIndex, 
    currentNode, 
    nextMove, 
    previousMove, 
    resetPosition 
  } = useOpeningStore();
  const { move, strategicIdea, stepNumber, notation } = getCurrentMoveAnalysis();

  const getFriendlyMove = (move: string) => {
    // 如果是初始局面，直接返回"开始局面"，不显示回合数
    if (move === '初始局面' || currentMoveIndex === 0) {
      return t('moveAnalysis.title');
    }
    
    // 计算当前回合数（从1开始）
    const turnNumber = Math.floor((stepNumber + 1) / 2);
    
    // 判断是白方还是黑方的走子
    const isWhiteMove = stepNumber % 2 === 0;
    
    // 构建回合显示文本，使用点号代替省略号
    if (isWhiteMove) {
      return `${t('moveAnalysis.stepNumber')} ${turnNumber}: ...${move}`;
    } else {
      return `${t('moveAnalysis.stepNumber')} ${turnNumber}: ${move}...`;
    }
  };

  const getFriendlyStrategy = (strategy: string) => {
    if (!strategy) return null;
    
    // 尝试获取战略思想的翻译
    let translatedStrategy = strategy;
    if (language === 'de') {
      // 首先尝试从strategicIdeas翻译中查找完整匹配
      const fullTranslation = t(`strategicIdeas.${strategy}`);
      if (fullTranslation !== `strategicIdeas.${strategy}`) {
        translatedStrategy = fullTranslation;
      } else {
        // 如果没有找到完整匹配，可能是节点中的自定义策略
        // 这里我们可以尝试翻译一些常见的策略术语
        translatedStrategy = strategy
          .replace('白方', 'Weiß')
          .replace('黑方', 'Schwarz')
          .replace('中心', 'Zentrum')
          .replace('控制', 'kontrolliert')
          .replace('发展', 'entwickelt')
          .replace('骑士', 'Springer')
          .replace('主教', 'Läufer')
          .replace('皇后', 'Dame')
          .replace('国王', 'König')
          .replace('车', 'Turm')
          .replace('兵', 'Bauer')
          .replace('防御', 'Verteidigung')
          .replace('攻势', 'Angriff')
          .replace('占据', 'besetzt')
          .replace('保护', 'schützt')
          .replace('威胁', 'bedroht')
          .replace('战略', 'Strategie')
          .replace('战术', 'Taktik');
      }
    }
    
    return `${t('moveAnalysis.strategy')}: ${translatedStrategy}`;
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
      
      {/* 添加控制按钮 */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        mt: 2, 
        gap: 1 
      }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="small" 
          startIcon={<ArrowBackIcon />}
          onClick={previousMove}
          disabled={currentMoveIndex === 0}
          sx={{ flex: 1 }}
        >
          {t('moveAnalysis.prev')}
        </Button>
        <Button 
          variant="outlined" 
          color="secondary" 
          size="small" 
          startIcon={<RestartAltIcon />}
          onClick={resetPosition}
          sx={{ flex: 1 }}
        >
          {t('moveAnalysis.reset')}
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          size="small" 
          endIcon={<ArrowForwardIcon />}
          onClick={nextMove}
          sx={{ flex: 1 }}
        >
          {t('moveAnalysis.next')}
        </Button>
      </Box>
    </AnalysisContainer>
  );
};