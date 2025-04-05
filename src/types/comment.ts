// 定义留言类型
export interface Comment {
  id: string;           // 留言唯一ID
  content: string;      // 留言内容
  username?: string;    // 留言者名称，可选
  timestamp: number;    // 时间戳
}

// 留言相关操作类型
export type CommentAction = 
  | { type: 'ADD_COMMENT'; payload: Omit<Comment, 'id' | 'timestamp'> }
  | { type: 'DELETE_COMMENT'; payload: string }
  | { type: 'LOAD_COMMENTS'; payload: Comment[] }; 