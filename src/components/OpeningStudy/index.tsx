import React from 'react';
import { Typography, Button, IconButton, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ChessBoard } from '../ChessBoard';
import { MoveAnalysis } from '../MoveAnalysis';
import { useOpeningStore } from '../../store/openingStore';
import { Chess } from 'chess.js';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: '#F0F9FF', // 淡蓝色背景
  minHeight: '100vh',
}));

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: '#FFFFFF',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(255, 182, 193, 0.2)',
  border: '2px solid #FFB6C1',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: '"Comic Sans MS", cursive',
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#FF6B6B',
  textAlign: 'center',
  marginBottom: theme.spacing(1),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Comic Sans MS", cursive',
  fontSize: '1.1rem',
  color: '#4A90E2',
  textAlign: 'center',
}));

const MainContent = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flex: 1,
  minHeight: 0,
}));

const LeftPanel = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  flex: 1,
  minWidth: 0,
}));

const RightPanel = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '300px',
  minWidth: '300px',
}));

const ChessBoardContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(255, 182, 193, 0.2)',
  border: '2px solid #FFB6C1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const MoveListContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(255, 182, 193, 0.2)',
  border: '2px solid #FFB6C1',
  flex: 1,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const MoveListTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Comic Sans MS", cursive',
  fontSize: '1.2rem',
  fontWeight: 600,
  color: '#FF6B6B',
  marginBottom: theme.spacing(1),
  textAlign: 'center',
}));

const MoveList = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
}));

const MoveChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#E3F2FD',
  color: '#4A90E2',
  fontFamily: '"Comic Sans MS", cursive',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: '#BBDEFB',
    transform: 'scale(1.05)',
  },
  '&.Mui-selected': {
    backgroundColor: '#4A90E2',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#357ABD',
    },
  },
}));

const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: '"Comic Sans MS", cursive',
  backgroundColor: '#FFB6C1',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#FF99AC',
    transform: 'translateY(-2px)',
  },
  '&:disabled': {
    backgroundColor: '#FFE4E1',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#FFB6C1',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#FF99AC',
    transform: 'translateY(-2px)',
  },
  '&:disabled': {
    backgroundColor: '#FFE4E1',
  },
}));

export const OpeningStudy: React.FC = () => {
  const { currentPosition, moves, currentMoveIndex, setCurrentMoveIndex, updatePosition } = useOpeningStore();
  const chess = new Chess(currentPosition);

  const handleNextMove = () => {
    if (currentMoveIndex < moves.length - 1) {
      setCurrentMoveIndex(currentMoveIndex + 1);
    }
  };

  const handlePreviousMove = () => {
    if (currentMoveIndex > 0) {
      setCurrentMoveIndex(currentMoveIndex - 1);
    }
  };

  const handleMoveClick = (index: number) => {
    setCurrentMoveIndex(index);
  };

  const handlePieceDrop = (sourceSquare: string, targetSquare: string, piece: string): boolean => {
    try {
      // 检查移动是否合法
      const move = chess.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q' // 默认升变为皇后
      });
      
      if (move) {
        // 更新当前局面
        updatePosition(chess.fen());
        return true;
      }
      return false;
    } catch (error) {
      console.error('移动错误:', error);
      return false;
    }
  };

  return (
    <Container>
      <Header>
        <Title>
          国际象棋开局学习
        </Title>
        <Subtitle>
          让我们一起来学习国际象棋的开局吧！
        </Subtitle>
      </Header>
      <MainContent>
        <LeftPanel>
          <ChessBoardContainer>
            <ChessBoard position={currentPosition} onPieceDrop={handlePieceDrop} />
            <ButtonContainer>
              <StyledIconButton
                onClick={handlePreviousMove}
                disabled={currentMoveIndex === 0}
                size="large"
              >
                <ChevronLeftIcon />
              </StyledIconButton>
              <StyledButton
                variant="contained"
                onClick={handleNextMove}
                disabled={currentMoveIndex === moves.length - 1}
                startIcon={<ChevronRightIcon />}
              >
                下一步
              </StyledButton>
              <StyledIconButton
                onClick={handleNextMove}
                disabled={currentMoveIndex === moves.length - 1}
                size="large"
              >
                <ChevronRightIcon />
              </StyledIconButton>
            </ButtonContainer>
          </ChessBoardContainer>
          <MoveListContainer>
            <MoveListTitle>所有走法</MoveListTitle>
            <MoveList>
              {moves.map((move, index) => (
                <MoveChip
                  key={index}
                  label={move}
                  onClick={() => handleMoveClick(index)}
                  selected={index === currentMoveIndex}
                />
              ))}
            </MoveList>
          </MoveListContainer>
        </LeftPanel>
        <RightPanel>
          <MoveAnalysis />
        </RightPanel>
      </MainContent>
    </Container>
  );
}; 