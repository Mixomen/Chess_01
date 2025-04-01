// 棋手信息的类型定义

export interface Player {
  id: string;         // 棋手唯一标识
  name: string;       // 棋手全名
  shortName?: string; // 棋手简称（可选）
  country: string;    // 国籍
  rating?: number;    // 等级分（可选）
  title?: string;     // 头衔（可选）
  avatarUrl: string;  // 头像图片URL
  bio?: string;       // 棋手简介（可选）
}