import React from 'react';
import { Box, Button, ButtonGroup, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChessBoard } from '../../components/ChessBoard';
import { useOpeningStore } from '../../store/openingStore';
import { PracticeMode as PracticeModeEnum } from '../../types/chess';

const PracticeModeContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f8f3e6',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const ModeButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  textTransform: 'none',
  padding: theme.spacing(1, 3),
}));

const InfoBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderRadius: theme.spacing(1),
}));

export const PracticeMode: React.FC = () => {
  const { selectedOpening, currentPosition, startPractice, endPractice } = useOpeningStore();
  const [mode, setMode] = React.useState<PracticeModeEnum | null>(null);

  const handleModeSelect = (selectedMode: PracticeModeEnum) => {
    setMode(selectedMode);
    if (selectedOpening) {
      startPractice(selectedOpening.ecoCode, selectedMode);
    }
  };

  const handlePieceDrop = (source: string, target: string, piece: string) => {
    // 在这里实现不同模式下的走子验证逻辑
    if (mode === PracticeModeEnum.FOLLOW_STEPS) {
      // 检查是否符合开局变例
      return true;
    }
    return true; // 自由练习模式允许任意走子
  };

  return (
    <PracticeModeContainer>
      <Typography variant="h6" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
        练习模式
      </Typography>
      <ButtonGroup variant="contained" color="primary" sx={{ mb: 2 }}>
        <ModeButton
          onClick={() => handleModeSelect(PracticeModeEnum.FOLLOW_STEPS)}
          variant={mode === PracticeModeEnum.FOLLOW_STEPS ? 'contained' : 'outlined'}
        >
          步骤跟随
        </ModeButton>
        <ModeButton
          onClick={() => handleModeSelect(PracticeModeEnum.FREE_PRACTICE)}
          variant={mode === PracticeModeEnum.FREE_PRACTICE ? 'contained' : 'outlined'}
        >
          自由练习
        </ModeButton>
        <ModeButton
          onClick={() => handleModeSelect(PracticeModeEnum.TEST)}
          variant={mode === PracticeModeEnum.TEST ? 'contained' : 'outlined'}
        >
          测试模式
        </ModeButton>
      </ButtonGroup>

      <ChessBoard position={currentPosition} onPieceDrop={handlePieceDrop} />

      <InfoBox>
        <Typography variant="subtitle1" gutterBottom sx={{ fontFamily: '"Playfair Display", serif' }}>
          当前模式说明
        </Typography>
        <Typography variant="body2">
          {mode === PracticeModeEnum.FOLLOW_STEPS && '按照标准开局步骤练习，系统会指导每一步的走法。'}
          {mode === PracticeModeEnum.FREE_PRACTICE && '自由探索不同的变化，尝试理解开局的战略思想。'}
          {mode === PracticeModeEnum.TEST && '检验你对开局的掌握程度，系统会记录和分析你的表现。'}
          {!mode && '请选择一个练习模式开始学习。'}
        </Typography>
      </InfoBox>
    </PracticeModeContainer>
  );
};