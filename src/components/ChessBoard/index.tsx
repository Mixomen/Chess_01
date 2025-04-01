import React from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import { Box, Paper, Button, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useOpeningStore } from '../../store/openingStore';

const ChessboardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#2F3542',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  maxWidth: '600px',
  margin: '0 auto',
  border: '4px solid #1E1E1E',
  position: 'relative',
}));

const CoordinateLabel = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  color: '#FFFFFF',
}));

// 创建坐标标签组件
const BoardCoordinates: React.FC = () => {
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
  
  return (
    <>
      {/* 文件坐标（底部a-h） */}
      {files.map((file, index) => (
        <CoordinateLabel
          key={`file-${file}`}
          sx={{
            bottom: -25,
            left: `calc(${12.5 * (index + 0.5)}% - 4px)`,
          }}
        >
          {file}
        </CoordinateLabel>
      ))}
      
      {/* 行坐标（左侧1-8） */}
      {ranks.map((rank, index) => (
        <CoordinateLabel
          key={`rank-${rank}`}
          sx={{
            left: -20,
            bottom: `calc(${12.5 * (index + 0.5)}% - 8px)`,
          }}
        >
          {rank}
        </CoordinateLabel>
      ))}
    </>
  );
};

interface ChessBoardProps {
  position?: string; // FEN字符串
  onPieceDrop?: (source: string, target: string, piece: string) => boolean;
}

export const ChessBoard: React.FC<ChessBoardProps> = ({ position = 'start', onPieceDrop }) => {
  const [game, setGame] = React.useState(new Chess(position));

  React.useEffect(() => {
    const newGame = new Chess(position);
    setGame(newGame);
  }, [position]);

  const { updatePosition } = useOpeningStore();

  const handlePieceDrop = (source: string, target: string, piece: string) => {
    if (onPieceDrop) {
      return onPieceDrop(source, target, piece);
    }

    try {
      const move = game.move({
        from: source,
        to: target,
        promotion: 'q', // 默认升变为皇后
      });

      if (move === null) {
        return false;
      }

      const newGame = new Chess(game.fen());
      setGame(newGame);
      updatePosition(newGame.fen());
      return true;
    } catch (error) {
      console.error('走子错误:', error);
      return false;
    }
  };

  const { nextMove, previousMove } = useOpeningStore();

  return (
    <ChessboardContainer>
      <BoardCoordinates />
      <Box sx={{ aspectRatio: '1/1', position: 'relative' }}>
        <Chessboard
          position={game.fen()}
          onPieceDrop={handlePieceDrop}
          customBoardStyle={{
            borderRadius: '4px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            border: '2px solid #8B4513',
          }}
          customDarkSquareStyle={{ backgroundColor: '#b58863' }} // 深色方格
          customLightSquareStyle={{ backgroundColor: '#f0d9b5' }} // 浅色方格
          customPieces={{
            // 可以在这里自定义棋子样式，如果需要的话
          }}
        />
      </Box>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={previousMove}
          sx={{ 
            minWidth: 120,
            backgroundColor: '#8B4513',
            '&:hover': {
              backgroundColor: '#6D351A',
            },
            fontFamily: '"Playfair Display", serif',
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          上一步
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={nextMove}
          sx={{ 
            minWidth: 120,
            backgroundColor: '#8B4513',
            '&:hover': {
              backgroundColor: '#6D351A',
            },
            fontFamily: '"Playfair Display", serif',
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          下一步
        </Button>
      </Box>
    </ChessboardContainer>
  );
};