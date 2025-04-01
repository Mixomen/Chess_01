import { Player } from '../types/player';

// 棋手数据
export const players: Record<string, Player> = {
  'anderssen': {
    id: 'anderssen',
    name: 'Anderssen, Adolf',
    shortName: 'Anderssen',
    country: '波兰',
    title: '国际象棋大师',
    avatarUrl: '/assets/players/anderssen.svg',
    bio: 'Adolf Anderssen (1818-1879) 是19世纪最强大的棋手之一，以其富有创造性和进攻性的棋风著称。'
  },
  'zukertort': {
    id: 'zukertort',
    name: 'Zukertort, Johannes Hermann',
    shortName: 'Zukertort',
    country: '波兰',
    title: '国际象棋大师',
    avatarUrl: '/assets/players/zukertort.svg',
    bio: 'Johannes Zukertort (1842-1888) 是19世纪后期的顶尖棋手，曾与Wilhelm Steinitz进行过首届官方世界冠军赛。'
  },
  'morphy': {
    id: 'morphy',
    name: 'Morphy, Paul',
    shortName: 'Morphy',
    country: '美国',
    title: '国际象棋大师',
    avatarUrl: '/assets/players/anderssen.svg', // 暂用现有头像
    bio: 'Paul Morphy (1837-1884) 被认为是非官方的世界冠军，以其开放式对局和战术天才著称。'
  },
  'steinitz': {
    id: 'steinitz',
    name: 'Steinitz, Wilhelm',
    shortName: 'Steinitz',
    country: '奥地利',
    title: '首位官方世界冠军',
    avatarUrl: '/assets/players/zukertort.svg', // 暂用现有头像
    bio: 'Wilhelm Steinitz (1836-1900) 是首位官方世界冠军，被认为是现代国际象棋理论的奠基人。'
  },
  'capablanca': {
    id: 'capablanca',
    name: 'Capablanca, José Raúl',
    shortName: 'Capablanca',
    country: '古巴',
    title: '世界冠军',
    avatarUrl: '/assets/players/anderssen.svg', // 暂用现有头像
    bio: 'José Raúl Capablanca (1888-1942) 是国际象棋历史上最伟大的棋手之一，以其精确的终局技术和自然流畅的棋风著称。'
  },
  'alekhine': {
    id: 'alekhine',
    name: 'Alekhine, Alexander',
    shortName: 'Alekhine',
    country: '俄罗斯',
    title: '世界冠军',
    avatarUrl: '/assets/players/zukertort.svg', // 暂用现有头像
    bio: 'Alexander Alekhine (1892-1946) 是一位攻击型棋手，以其复杂的组合和战术能力著称，曾两次获得世界冠军。'
  },
  'tal': {
    id: 'tal',
    name: 'Tal, Mikhail',
    shortName: 'Tal',
    country: '拉脱维亚',
    title: '世界冠军',
    avatarUrl: '/assets/players/anderssen.svg', // 暂用现有头像
    bio: 'Mikhail Tal (1936-1992) 被称为"魔术师"，以其富有创造性和牺牲式的进攻著称。'
  }
}