import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Divider,
  IconButton,
  Tooltip,
  Avatar,
  styled
} from '@mui/material';
import { SendRounded } from '@mui/icons-material';
import { useCommentStore } from '../../store/commentStore';
import { useLanguage } from '../../context/LanguageContext';
import { formatDistance } from 'date-fns';
import { zhCN } from 'date-fns/locale';

// 样式化组件
const CommentContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#FFFFFF',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
  border: '1px solid #E0E0E0',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  },
}));

const CommentTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  color: theme.palette.primary.main,
  fontSize: '1.2rem',
  marginBottom: theme.spacing(2),
  position: 'relative',
  paddingBottom: theme.spacing(1),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40px',
    height: '3px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '3px',
  },
}));

const CommentForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

const CommentItem = styled(ListItem)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  backgroundColor: '#F9F9F9',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#F0F0F0',
  },
}));

const EmptyMessage = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontStyle: 'italic',
}));

// 留言组件
export const CommentBox: React.FC = () => {
  const { t } = useLanguage();
  const { recentComments, addComment, loadComments } = useCommentStore();
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  // 组件挂载时加载留言
  useEffect(() => {
    loadComments();
  }, [loadComments]);

  // 格式化时间
  const formatTime = (timestamp: number) => {
    return formatDistance(
      new Date(timestamp),
      new Date(),
      { addSuffix: true, locale: zhCN }
    );
  };

  // 处理留言提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() === '') return;

    addComment(content, username.trim() || undefined);
    setContent('');
  };

  return (
    <CommentContainer>
      <CommentTitle>{t('commentBox.title')}</CommentTitle>
      
      {/* 留言列表 */}
      <List sx={{ maxHeight: '240px', overflow: 'auto' }}>
        {recentComments.length === 0 ? (
          <EmptyMessage>
            {t('commentBox.empty')}
          </EmptyMessage>
        ) : (
          recentComments.map((comment) => (
            <React.Fragment key={comment.id}>
              <CommentItem alignItems="flex-start">
                <Avatar 
                  sx={{ 
                    backgroundColor: 'primary.main', 
                    width: 32, 
                    height: 32,
                    mr: 1,
                    fontSize: '0.8rem'
                  }}
                >
                  {(comment.username || t('commentBox.guest')).substring(0, 1).toUpperCase()}
                </Avatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="subtitle2" component="div" fontWeight="bold">
                        {comment.username || t('commentBox.guest')}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatTime(comment.timestamp)}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ wordBreak: 'break-word', mt: 0.5 }}
                    >
                      {comment.content}
                    </Typography>
                  }
                />
              </CommentItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))
        )}
      </List>
      
      {/* 留言表单 */}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder={t('commentBox.namePlaceholder')}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 1 }}
        />
        <CommentForm>
          <TextField
            fullWidth
            multiline
            rows={2}
            placeholder={t('commentBox.placeholder')}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ minWidth: '88px' }}
            endIcon={<SendRounded />}
          >
            {t('commentBox.send')}
          </Button>
        </CommentForm>
      </Box>
    </CommentContainer>
  );
};

export default CommentBox; 