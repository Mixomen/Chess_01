import * as React from 'react';
import { Box, Container, Grid, Paper, Typography, Avatar, Divider, Theme, useTheme, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChessBoard } from '../../components/ChessBoard';
import { openings } from '../../data/openings';
import { useOpeningStore } from '../../store/openingStore';
import { players } from '../../data/players';
import { MoveAnalysis } from '../../components/MoveAnalysis';
import { Opening } from '../../types/chess';
import { useLanguage } from '../../context/LanguageContext';
import CommentBox from '../../components/CommentBox';
import LanguageSwitcher from '../../components/LanguageSwitcher';

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  color: theme.palette.primary.main,
  fontSize: '1.1rem',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  borderLeft: `3px solid ${theme.palette.secondary.main}`,
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.secondary.main,
    transform: 'translateX(4px)',
  },
}));

const OpeningListContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),
  backgroundColor: '#FFFFFF',
  borderRadius: theme.spacing(1),
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  height: 'calc(100vh - 64px)', // 减去顶部导航栏高度
  overflowY: 'auto',
  border: '1px solid #E0E0E0',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#F5F5F5',
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#BDBDBD',
    borderRadius: '3px',
    '&:hover': {
      background: '#9E9E9E',
    },
  },
}));

const PlayerInfoContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f8f3e6',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(2),
}));

const PlayerAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  border: '2px solid #d2b48c',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}));

const PlayerName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  marginTop: theme.spacing(1),
}));

const PlayerInfo = styled(Typography)(({ theme }) => ({
  color: 'text.secondary',
  fontSize: '0.875rem',
}));

const OpeningItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0.8),
  marginBottom: theme.spacing(0.4),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E0E0E0',
  borderRadius: theme.spacing(0.6),
  position: 'relative',
  overflow: 'hidden',
  fontFamily: '"Roboto", sans-serif',
  fontSize: '0.95rem',
  color: theme.palette.text.primary,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s ease',
  },
  '&:hover': {
    backgroundColor: '#F5F5F5',
    borderColor: '#BDBDBD',
    transform: 'translateY(-1px)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '&::before': {
      transform: 'translateX(100%)',
    },
  },
  '&.selected': {
    backgroundColor: '#E3F2FD',
    borderColor: '#2196F3',
    boxShadow: '0 2px 8px rgba(33, 150, 243, 0.2)',
    transform: 'translateY(-1px)',
  },
}));

const InfoPanel = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),
  backgroundColor: '#FFFFFF',
  borderRadius: theme.spacing(1),
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  marginTop: theme.spacing(1.5),
  border: '1px solid #E0E0E0',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
  },
}));

const AnalysisSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5),
  backgroundColor: '#F8F9FA',
  borderRadius: theme.spacing(1),
  border: '1px solid #E0E0E0',
}));

const AnalysisTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '1rem',
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

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

const IconWrapper = styled('span')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  marginRight: '8px',
});

export const OpeningStudy: React.FC = () => {
  const theme = useTheme();
  const { t, language } = useLanguage();
  const [selectedOpening, setSelectedOpening] = React.useState(openings[0]);
  const { currentPosition, selectOpening, resetPosition } = useOpeningStore();

  // 按类别对开局进行分组
  const groupedOpenings = React.useMemo(() => {
    const groups: Record<string, Opening[]> = {};
    openings.forEach((opening: Opening) => {
      if (!groups[opening.category]) {
        groups[opening.category] = [];
      }
      groups[opening.category].push(opening);
    });
    return groups;
  }, []);

  const handleOpeningSelect = (opening: typeof openings[0]) => {
    setSelectedOpening(opening);
    selectOpening(opening);
    resetPosition();
  };

  // 获取棋手信息
  const getPlayerInfo = (playerId: string | undefined) => {
    if (!playerId || !players[playerId]) {
      return null;
    }
    return players[playerId];
  };

  const whitePlayer = selectedOpening.players?.white ? getPlayerInfo(selectedOpening.players.white) : null;
  const blackPlayer = selectedOpening.players?.black ? getPlayerInfo(selectedOpening.players.black) : null;

  return (
    <Container maxWidth="xl" sx={{ 
      py: 2,
      backgroundColor: '#F5F5F5',
      minHeight: '100vh',
    }}>
      {/* 标题部分 */}
      <Box 
        sx={{ 
          mb: 1,
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '100%',
          mb: 2
        }}>
          <Typography 
            variant="h3" 
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: theme.palette.primary.main,
              letterSpacing: '1px',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '10%',
                width: '80%',
                height: 3,
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 3,
              }
            }}
          >
            {t('mainTitle')}
          </Typography>
          <LanguageSwitcher />
        </Box>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontFamily: '"Roboto", sans-serif',
            color: 'text.secondary',
            fontStyle: 'italic',
            mb: 2
          }}
        >
          {t('subtitle')}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {/* 左侧：开局列表 */}
        <Grid item xs={12} md={3}>
          <OpeningListContainer>
            {Object.entries(groupedOpenings).map(([category, openings]) => (
              <Box key={category} sx={{ mb: 2 }}>
                <CategoryTitle variant="h6">
                  {t(`openingCategories.${category}`)}
                </CategoryTitle>
                {openings.map((opening) => (
                  <OpeningItem
                    key={opening.name}
                    onClick={() => handleOpeningSelect(opening)}
                    className={selectedOpening?.name === opening.name ? 'selected' : ''}
                  >
                    {t(`openingNames.${opening.name}`)}
                  </OpeningItem>
                ))}
              </Box>
            ))}
          </OpeningListContainer>
        </Grid>

        {/* 中间：棋盘和走法分析 */}
        <Grid item xs={12} md={6}>
          <ChessboardContainer>
            <ChessBoard position={currentPosition} />
          </ChessboardContainer>
        </Grid>

        {/* 右侧：开局介绍、走法分析和留言 */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <MoveAnalysis />
            <InfoPanel>
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                {t(`openingNames.${selectedOpening.name}`)}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                paragraph
                sx={{
                  fontFamily: '"Roboto", sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                }}
              >
                {t(`openingDescriptions.${selectedOpening.name}`) || selectedOpening.description}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography 
                variant="subtitle1" 
                gutterBottom 
                sx={{ 
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                {t('strategicThemes')}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedOpening.strategicThemes.map((themeName, index) => (
                  <Chip
                    key={index}
                    label={t(`strategicThemesTranslations.${themeName}`)}
                    size="small"
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      color: '#FFFFFF',
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: '0.85rem',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                      },
                    }}
                  />
                ))}
              </Box>
            </InfoPanel>
            {/* 添加留言组件 */}
            <CommentBox />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};