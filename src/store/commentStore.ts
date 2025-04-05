import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Comment } from '../types/comment';
import { v4 as uuidv4 } from 'uuid';

// 留言存储接口
interface CommentStore {
  comments: Comment[];           // 所有留言列表
  recentComments: Comment[];     // 最近5条留言
  totalCount: number;            // 总留言数
  
  // 操作方法
  addComment: (content: string, username?: string) => void;
  deleteComment: (id: string) => void;
  loadComments: () => void;
}

// 创建留言存储
export const useCommentStore = create<CommentStore>()(
  persist(
    (set, get) => ({
      comments: [],
      recentComments: [],
      totalCount: 0,
      
      // 添加留言
      addComment: (content, username) => {
        // 创建新留言对象
        const newComment: Comment = {
          id: uuidv4(),
          content,
          username,
          timestamp: Date.now(),
        };
        
        // 更新状态
        set((state) => {
          // 检查是否已经达到2000条上限
          const comments = state.totalCount >= 2000 
            ? [...state.comments.slice(1), newComment] // 移除最旧的
            : [...state.comments, newComment];
          
          // 获取最新的5条留言
          const recentComments = [...comments].sort((a, b) => b.timestamp - a.timestamp).slice(0, 5);
          
          return {
            comments,
            recentComments,
            totalCount: Math.min(state.totalCount + 1, 2000),
          };
        });
      },
      
      // 删除留言
      deleteComment: (id) => {
        set((state) => {
          const comments = state.comments.filter(comment => comment.id !== id);
          const recentComments = [...comments].sort((a, b) => b.timestamp - a.timestamp).slice(0, 5);
          
          return {
            comments,
            recentComments,
            totalCount: state.totalCount - 1,
          };
        });
      },
      
      // 加载留言
      loadComments: () => {
        set((state) => {
          // 获取最新的5条留言
          const recentComments = [...state.comments]
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, 5);
          
          return { recentComments };
        });
      },
    }),
    {
      name: 'comment-storage', // 本地存储的键名
      partialize: (state) => ({ comments: state.comments, totalCount: state.totalCount }),
    }
  )
);

export default useCommentStore; 