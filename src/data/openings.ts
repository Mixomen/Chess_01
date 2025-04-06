import { Opening } from '../types/chess';

// 开局数据
export const openings: Opening[] = [
  // 开放性开局（1.e4 e5）
  {
    ecoCode: 'C50',
    name: '意大利开局',
    category: '开放性开局',
    description: '意大利开局是最古老的国际象棋开局之一，以1.e4 e5 2.Nf3 Nc6 3.Bc4为特征。白方快速发展象，瞄准黑方f7弱点。',
    players: {
      white: 'kasparov',
      black: 'karpov',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c50_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'c50_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c50_main_3',
              move: {
                from: 'g1',
                to: 'f3',
                piece: 'n',
                san: 'Nf3'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
              children: [
                {
                  id: 'c50_main_4',
                  move: {
                    from: 'b8',
                    to: 'c6',
                    piece: 'n',
                    san: 'Nc6'
                  },
                  fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
                  children: [
                    {
                      id: 'c50_main_5',
                      move: {
                        from: 'f1',
                        to: 'c4',
                        piece: 'b',
                        san: 'Bc4'
                      },
                      fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
                      children: [],
                      strategicIdea: '白方发展主教瞄准f7弱点'
                    }
                  ],
                  strategicIdea: '黑方发展骑士控制中心'
                }
              ],
              strategicIdea: '白方发展王翼骑士'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '快速发展子力',
      '控制中心',
      '瞄准f7弱点',
      '争夺开放线'
    ],
    commonTraps: [
      'f7弱点被攻击',
      '过早展开后翼攻势',
      '忽视中心控制'
    ]
  },
  {
    ecoCode: 'C51',
    name: '伊文思弃兵',
    category: '开放性开局',
    description: '伊文思弃兵是一个激进的开局变例，白方在意大利开局基础上牺牲b2兵换取快速发展和进攻机会。',
    players: {
      white: 'morphy',
      black: 'anderssen',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c51_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'c51_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c51_main_3',
              move: {
                from: 'g1',
                to: 'f3',
                piece: 'n',
                san: 'Nf3'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
              children: [
                {
                  id: 'c51_main_4',
                  move: {
                    from: 'b8',
                    to: 'c6',
                    piece: 'n',
                    san: 'Nc6'
                  },
                  fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
                  children: [
                    {
                      id: 'c51_main_5',
                      move: {
                        from: 'f1',
                        to: 'c4',
                        piece: 'b',
                        san: 'Bc4'
                      },
                      fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
                      children: [
                        {
                          id: 'c51_main_6',
                          move: {
                            from: 'b2',
                            to: 'b4',
                            piece: 'p',
                            san: 'b4'
                          },
                          fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4',
                          children: [],
                          strategicIdea: '白方牺牲b2兵换取发展优势'
                        }
                      ],
                      strategicIdea: '白方发展主教'
                    }
                  ],
                  strategicIdea: '黑方发展骑士'
                }
              ],
              strategicIdea: '白方发展王翼骑士'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '牺牲兵换取发展',
      '快速展开攻势',
      '时间优势利用',
      '开放线利用'
    ],
    commonTraps: [
      '过早接受兵的牺牲',
      '忽视王翼防御',
      '发展不足就反击'
    ]
  },
  {
    ecoCode: 'C60',
    name: '西班牙开局',
    category: '开放性开局',
    description: '西班牙开局（也称吕伊·洛佩兹开局）是最经典的开局之一，以1.e4 e5 2.Nf3 Nc6 3.Bb5为特征。白方用主教牵制黑方骑士，为控制中心做准备。',
    players: {
      white: 'carlsen',
      black: 'caruana',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c60_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'c60_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c60_main_3',
              move: {
                from: 'g1',
                to: 'f3',
                piece: 'n',
                san: 'Nf3'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
              children: [
                {
                  id: 'c60_main_4',
                  move: {
                    from: 'b8',
                    to: 'c6',
                    piece: 'n',
                    san: 'Nc6'
                  },
                  fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
                  children: [
                    {
                      id: 'c60_main_5',
                      move: {
                        from: 'f1',
                        to: 'b5',
                        piece: 'b',
                        san: 'Bb5'
                      },
                      fen: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
                      children: [],
                      strategicIdea: '白方牵制黑方骑士，为控制中心做准备'
                    }
                  ],
                  strategicIdea: '黑方发展骑士控制中心'
                }
              ],
              strategicIdea: '白方发展王翼骑士'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '牵制战术',
      '中心控制',
      '灵活的兵形结构',
      '王翼城堡的时机'
    ],
    commonTraps: [
      '过早解除牵制',
      '错误的兵形交换',
      '忽视王翼防御'
    ]
  },
  {
    ecoCode: 'C41',
    name: '菲利多尔防御',
    category: '开放性开局',
    description: '菲利多尔防御是一个古老的开局，以1.e4 e5 2.Nf3 d6为特征。黑方采用灵活的防御策略，但容易陷入被动。',
    players: {
      white: 'tal',
      black: 'larsen',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c41_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'c41_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c41_main_3',
              move: {
                from: 'g1',
                to: 'f3',
                piece: 'n',
                san: 'Nf3'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
              children: [
                {
                  id: 'c41_main_4',
                  move: {
                    from: 'd7',
                    to: 'd6',
                    piece: 'p',
                    san: 'd6'
                  },
                  fen: 'rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3',
                  children: [],
                  strategicIdea: '黑方加强中心控制，准备灵活防御'
                }
              ],
              strategicIdea: '白方发展王翼骑士'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '灵活防御',
      '中心控制',
      '子力活动',
      '王翼安全'
    ],
    commonTraps: [
      '过早展开攻势',
      '错误的兵形交换',
      '忽视发展'
    ]
  },
  {
    ecoCode: 'C40',
    name: '匈牙利防御',
    category: '开放性开局',
    description: '匈牙利防御以1.e4 e5 2.Nf3 Be7为特征。黑方采用非常规的主教发展，但可能导致发展迟缓。',
    players: {
      white: 'steinitz',
      black: 'chigorin',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c40_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'c40_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c40_main_3',
              move: {
                from: 'g1',
                to: 'f3',
                piece: 'n',
                san: 'Nf3'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
              children: [
                {
                  id: 'c40_main_4',
                  move: {
                    from: 'f8',
                    to: 'e7',
                    piece: 'b',
                    san: 'Be7'
                  },
                  fen: 'rnbqk1nr/ppppbppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
                  children: [],
                  strategicIdea: '黑方采用非常规的主教发展'
                }
              ],
              strategicIdea: '白方发展王翼骑士'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '非常规主教发展',
      '中心控制',
      '灵活防御',
      '发展速度'
    ],
    commonTraps: [
      '发展迟缓',
      '中心控制不足',
      '主教位置不佳'
    ]
  },

  // 半开放性开局（1.e4，黑方不走1...e5）
  {
    ecoCode: 'B20',
    name: '西西里防御',
    category: '半开放性开局',
    description: '西西里防御是黑方最锋锐的应对之一，通过c5反击白方的e4，争夺中心控制权。',
    players: {
      white: 'kasparov',
      black: 'karpov',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'b20_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'b20_main_2',
          move: {
            from: 'c7',
            to: 'c5',
            piece: 'p',
            san: 'c5'
          },
          fen: 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [],
          strategicIdea: '黑方以c5反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '争夺中心控制权',
      '不对称局面',
      '快速发展子力',
      '后翼反击'
    ],
    commonTraps: [
      '过早展开攻势',
      '忽视王翼防御',
      '错误的兵形交换'
    ]
  },
  {
    ecoCode: 'C10',
    name: '法兰西防御',
    category: '半开放性开局',
    description: '法兰西防御是一个稳健的开局，以1.e4 e6为特征。黑方建立稳固的兵链，但需要注意空间不足的问题。',
    players: {
      white: 'botvinnik',
      black: 'petrosian',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c10_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'c10_main_2',
          move: {
            from: 'e7',
            to: 'e6',
            piece: 'p',
            san: 'e6'
          },
          fen: 'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c10_main_3',
              move: {
                from: 'd2',
                to: 'd4',
                piece: 'p',
                san: 'd4'
              },
              fen: 'rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2',
              children: [],
              strategicIdea: '白方建立强大的中心'
            }
          ],
          strategicIdea: '黑方建立稳固的防御阵型'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '稳固防御',
      '中心控制',
      '兵链结构',
      '王翼安全'
    ],
    commonTraps: [
      '过早展开攻势',
      '错误的兵形交换',
      '空间不足'
    ]
  },
  {
    ecoCode: 'B10',
    name: '卡罗-康防御',
    category: '半开放性开局',
    description: '卡罗-康防御是一个坚实的开局，以1.e4 c6为特征。黑方准备用d5反击中心，建立稳固的兵形结构。',
    players: {
      white: 'karpov',
      black: 'korchnoi',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'b10_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
              children: [
                {
          id: 'b10_main_2',
          move: {
            from: 'c7',
            to: 'c6',
            piece: 'p',
            san: 'c6'
          },
          fen: 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [],
          strategicIdea: '黑方准备用d5反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '稳固的兵形结构',
      '中心反击',
      '灵活防御',
      '后翼展开'
    ],
    commonTraps: [
      '过早的d5推进',
      '错误的兵形交换',
      '忽视发展'
    ]
  },
  {
    ecoCode: 'B07',
    name: '皮尔兹防御',
    category: '半开放性开局',
    description: '皮尔兹防御以1.e4 d6为特征。黑方采用灵活的防御策略，准备在适当时机反击中心。',
    players: {
      white: 'spassky',
      black: 'fischer',
      scores: {
        white: 0,
        black: 1
      }
    },
    mainLine: {
      id: 'b07_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'b07_main_2',
          move: {
            from: 'd7',
            to: 'd6',
            piece: 'p',
            san: 'd6'
          },
          fen: 'rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [],
          strategicIdea: '黑方准备灵活防御'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '灵活防御',
      '中心反击',
      '王翼展开',
      '后翼攻势'
    ],
    commonTraps: [
      '过早展开攻势',
      '错误的发展次序',
      '空间不足'
    ]
  },
  {
    ecoCode: 'B04',
    name: '阿廖欣防御',
    category: '半开放性开局',
    description: '阿廖欣防御以1.e4 Nf6为特征。黑方立即挑战白方的中心控制，采用超现代开局思想。',
    players: {
      white: 'capablanca',
      black: 'alekhine',
      scores: {
        white: 0,
        black: 1
      }
    },
    mainLine: {
      id: 'b04_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'b04_main_2',
          move: {
            from: 'g8',
            to: 'f6',
            piece: 'n',
            san: 'Nf6'
          },
          fen: 'rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2',
          children: [],
          strategicIdea: '黑方立即挑战中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '超现代思想',
      '中心挑战',
      '灵活防御',
      '反击准备'
    ],
    commonTraps: [
      '过早推进中心兵',
      '错误的防御布局',
      '忽视发展'
    ]
  },
  {
    ecoCode: 'B01',
    name: '斯堪的纳维亚防御',
    category: '半开放性开局',
    description: '斯堪的纳维亚防御以1.e4 d5为特征。黑方立即挑战白方中心，采用积极的战术。',
    players: {
      white: 'larsen',
      black: 'spassky',
      scores: {
        white: 0,
        black: 1
      }
    },
    mainLine: {
      id: 'b01_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'b01_main_2',
                  move: {
                    from: 'd7',
                    to: 'd5',
                    piece: 'p',
                    san: 'd5'
                  },
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [],
          strategicIdea: '黑方直接挑战中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '积极反击',
      '中心争夺',
      '子力活动',
      '王翼安全'
    ],
    commonTraps: [
      '过早交换中心兵',
      '错误的发展次序',
      '忽视王翼防御'
    ]
  },

  // 封闭性开局（1.d4 d5）
  {
    ecoCode: 'D00',
    name: '后翼弃兵开局',
    category: '封闭性开局',
    description: '后翼弃兵是一个重要的战略性开局，白方牺牲c4兵以换取发展和中心控制权。',
    players: {
      white: 'botvinnik',
      black: 'petrosian',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'd00_main_1',
      move: {
        from: 'd2',
        to: 'd4',
        piece: 'p',
        san: 'd4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
                  children: [
                    {
          id: 'd00_main_2',
                      move: {
            from: 'd7',
            to: 'd5',
                        piece: 'p',
            san: 'd5'
                      },
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',
                      children: [
                        {
              id: 'd00_main_3',
              move: {
                from: 'c2',
                to: 'c4',
                piece: 'p',
                san: 'c4'
              },
              fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
              children: [],
              strategicIdea: '白方提供c4兵的牺牲'
            }
          ],
          strategicIdea: '黑方建立中心存在'
        }
      ],
      strategicIdea: '白方控制中心'
    },
    strategicThemes: [
      '中心控制',
      '兵链结构',
      '战略性牺牲',
      '空间优势'
    ],
    commonTraps: [
      '过早接受兵的牺牲',
      '错误的兵形交换',
      '忽视发展'
    ]
  },
  {
    ecoCode: 'D10',
    name: '斯拉夫防御',
    category: '封闭性开局',
    description: '斯拉夫防御是一个稳健的开局，以1.d4 d5 2.c4 c6为特征。黑方建立坚实的兵链结构，但需要注意空间和发展问题。',
    players: {
      white: 'kramnik',
      black: 'leko',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'd10_main_1',
      move: {
        from: 'd2',
        to: 'd4',
        piece: 'p',
        san: 'd4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'd10_main_2',
          move: {
            from: 'd7',
            to: 'd5',
            piece: 'p',
            san: 'd5'
          },
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'd10_main_3',
              move: {
                from: 'c2',
                to: 'c4',
                piece: 'p',
                san: 'c4'
              },
              fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
              children: [
                {
                  id: 'd10_main_4',
                          move: {
                            from: 'c7',
                    to: 'c6',
                            piece: 'p',
                    san: 'c6'
                  },
                  fen: 'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
                  children: [],
                  strategicIdea: '黑方建立坚实的兵链结构'
                }
              ],
              strategicIdea: '白方扩大中心控制'
            }
          ],
          strategicIdea: '黑方争夺中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '坚实的兵链结构',
      '中心控制',
      '子力活动',
      '后翼展开'
    ],
    commonTraps: [
      '过早的兵链破坏',
      '错误的子力交换',
      '发展受限'
    ]
  },

  // 半封闭性开局（1.d4，黑方不走1...d5）
  {
    ecoCode: 'E20',
    name: '尼姆佐印度防御',
    category: '半封闭性开局',
    description: '尼姆佐印度防御是最重要的印度防御之一，黑方用Bb4牵制白方的骑士，影响中心控制。',
    players: {
      white: 'fischer',
      black: 'spassky',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'e20_main_1',
      move: {
        from: 'd2',
        to: 'd4',
        piece: 'p',
        san: 'd4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
                          children: [
                            {
          id: 'e20_main_2',
          move: {
            from: 'g8',
            to: 'f6',
            piece: 'n',
            san: 'Nf6'
          },
          fen: 'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2',
          children: [
            {
              id: 'e20_main_3',
                              move: {
                                from: 'c2',
                to: 'c4',
                piece: 'p',
                san: 'c4'
              },
              fen: 'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
              children: [
                {
                  id: 'e20_main_4',
                  move: {
                    from: 'e7',
                    to: 'e6',
                    piece: 'p',
                    san: 'e6'
                  },
                  fen: 'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
                  children: [
                    {
                      id: 'e20_main_5',
                      move: {
                        from: 'b1',
                                to: 'c3',
                        piece: 'n',
                        san: 'Nc3'
                      },
                      fen: 'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3',
                      children: [
                        {
                          id: 'e20_main_6',
                          move: {
                            from: 'f8',
                            to: 'b4',
                            piece: 'b',
                            san: 'Bb4'
                          },
                          fen: 'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4',
                          children: [],
                          strategicIdea: '黑方牵制白方骑士'
                        }
                      ],
                      strategicIdea: '白方发展骑士'
                    }
                  ],
                  strategicIdea: '白方发展骑士'
                }
              ],
              strategicIdea: '黑方准备印度式防御'
            }
          ],
          strategicIdea: '黑方采用印度式防御系统'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '牵制战术',
      '灵活的兵形结构',
      '中心控制',
      '子力活动'
    ],
    commonTraps: [
      '过早解除牵制',
      '错误的兵形交换',
      '忽视王翼防御'
    ]
  },
  {
    ecoCode: 'E10',
    name: '新印度防御',
    category: '半封闭性开局',
    description: '新印度防御以1.d4 Nf6 2.c4 e6为特征。黑方采用灵活的防御体系，准备在适当时机反击中心。',
    players: {
      white: 'petrosian',
      black: 'larsen',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'e10_main_1',
      move: {
        from: 'd2',
        to: 'd4',
                                piece: 'p',
        san: 'd4'
                              },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
                              children: [
                                {
          id: 'e10_main_2',
                                  move: {
            from: 'g8',
            to: 'f6',
                                    piece: 'n',
            san: 'Nf6'
                                  },
          fen: 'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2',
                                  children: [
                                    {
              id: 'e10_main_3',
                                      move: {
                from: 'c2',
                to: 'c4',
                piece: 'p',
                san: 'c4'
              },
              fen: 'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
              children: [
                {
                  id: 'e10_main_4',
                  move: {
                    from: 'e7',
                    to: 'e6',
                    piece: 'p',
                    san: 'e6'
                  },
                  fen: 'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
                  children: [],
                  strategicIdea: '黑方建立灵活的防御体系'
                }
              ],
              strategicIdea: '白方扩大中心控制'
            }
          ],
          strategicIdea: '黑方发展骑士'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '灵活防御',
      '中心控制',
      '子力活动',
      '王翼城堡'
    ],
    commonTraps: [
      '过早的中心反击',
      '错误的发展次序',
      '忽视王翼防御'
    ]
  },
  {
    ecoCode: 'E60',
    name: '古印度防御',
    category: '半封闭性开局',
    description: '古印度防御以1.d4 Nf6 2.c4 g6为特征。黑方采用超现代开局思想，用翼攻策略影响中心。',
    players: {
      white: 'karpov',
      black: 'kasparov',
      scores: {
        white: 0,
        black: 1
      }
    },
    mainLine: {
      id: 'e60_main_1',
      move: {
        from: 'd2',
        to: 'd4',
        piece: 'p',
        san: 'd4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'e60_main_2',
          move: {
            from: 'g8',
            to: 'f6',
                                        piece: 'n',
            san: 'Nf6'
                                      },
          fen: 'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2',
                                      children: [
                                        {
              id: 'e60_main_3',
              move: {
                from: 'c2',
                to: 'c4',
                piece: 'p',
                san: 'c4'
              },
              fen: 'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
              children: [
                {
                  id: 'e60_main_4',
                  move: {
                    from: 'g7',
                    to: 'g6',
                    piece: 'p',
                    san: 'g6'
                  },
                  fen: 'rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
                  children: [],
                  strategicIdea: '黑方准备超现代式防御'
                }
              ],
              strategicIdea: '白方扩大中心控制'
            }
          ],
          strategicIdea: '黑方发展骑士'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '超现代开局',
      '翼攻策略',
      '中心控制',
      '王翼城堡'
    ],
    commonTraps: [
      '过早的中心反击',
      '错误的发展次序',
      '王翼防御不足'
    ]
  },
  {
    ecoCode: 'A43',
    name: '别诺尼防御',
    category: '半封闭性开局',
    description: '别诺尼防御以1.d4 c5为特征。黑方立即挑战白方中心，采用积极的战术。',
    players: {
      white: 'tal',
      black: 'fischer',
      scores: {
        white: 0,
        black: 1
      }
    },
    mainLine: {
      id: 'a43_main_1',
      move: {
        from: 'd2',
        to: 'd4',
        piece: 'p',
        san: 'd4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'a43_main_2',
                          move: {
                            from: 'c7',
                            to: 'c5',
                            piece: 'p',
                            san: 'c5'
                          },
          fen: 'rnbqkbnr/pp1ppppp/8/2p5/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',
          children: [],
          strategicIdea: '黑方立即挑战中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '积极反击',
      '中心争夺',
      '动态平衡',
      '子力活动'
    ],
    commonTraps: [
      '过早交换中心兵',
      '错误的发展次序',
      '忽视王翼防御'
    ]
  },
  {
    ecoCode: 'D70',
    name: '格林菲尔德防御',
    category: '半封闭性开局',
    description: '格林菲尔德防御以1.d4 Nf6 2.c4 g6 3.g3 d5为特征。黑方采用超现代开局思想，主动出击中心。',
    players: {
      white: 'botvinnik',
      black: 'bronstein',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'd70_main_1',
      move: {
        from: 'd2',
        to: 'd4',
        piece: 'p',
        san: 'd4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
                          children: [
                            {
          id: 'd70_main_2',
                                          move: {
                                            from: 'g8',
            to: 'f6',
                                            piece: 'n',
            san: 'Nf6'
          },
          fen: 'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2',
          children: [
            {
              id: 'd70_main_3',
                              move: {
                                from: 'c2',
                to: 'c4',
                                piece: 'p',
                san: 'c4'
                              },
              fen: 'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
                              children: [
                                {
                  id: 'd70_main_4',
                  move: {
                    from: 'g7',
                    to: 'g6',
                    piece: 'p',
                    san: 'g6'
                  },
                  fen: 'rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
                  children: [
                    {
                      id: 'd70_main_5',
                      move: {
                        from: 'g2',
                        to: 'g3',
                        piece: 'p',
                        san: 'g3'
                      },
                      fen: 'rnbqkb1r/pppppp1p/5np1/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3',
                      children: [
                        {
                          id: 'd70_main_6',
                          move: {
                            from: 'd7',
                            to: 'd5',
                            piece: 'p',
                            san: 'd5'
                          },
                          fen: 'rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq - 0 4',
                                          children: [],
                          strategicIdea: '黑方主动出击中心'
                        }
                      ],
                      strategicIdea: '白方准备超现代式发展'
                    }
                  ],
                  strategicIdea: '黑方准备超现代式防御'
                }
              ],
              strategicIdea: '白方扩大中心控制'
            }
          ],
          strategicIdea: '黑方发展骑士'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '超现代开局',
      '中心反击',
      '动态平衡',
      '翼攻策略'
    ],
    commonTraps: [
      '过早交换中心兵',
      '错误的发展次序',
      '忽视王翼防御'
    ]
  },

  // 其他开局
  {
    ecoCode: 'A10',
    name: '英国开局',
    category: '其他开局',
    description: '英国开局以1.c4开始，是一个灵活的开局系统，白方控制中心但保持灵活性。',
    players: {
      white: 'kramnik',
      black: 'anand',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'a10_main_1',
      move: {
        from: 'c2',
        to: 'c4',
        piece: 'p',
        san: 'c4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1',
      children: [],
      strategicIdea: '白方以灵活方式控制中心'
    },
    strategicThemes: [
      '灵活的开局系统',
      '多样的转换可能',
      '控制中心',
      '平衡发展'
    ],
    commonTraps: [
      '过早确定中心结构',
      '忽视发展',
      '错误的转换时机'
    ]
  },
  {
    ecoCode: 'A04',
    name: '列蒂开局',
    category: '其他开局',
    description: '列蒂开局以1.Nf3为特征，是一种灵活的开局，可以演变成多种不同的局面。白方通过控制中心来影响局面发展。',
    players: {
      white: 'reti',
      black: 'alekhine',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'a04_main_1',
      move: {
        from: 'g1',
        to: 'f3',
        piece: 'n',
        san: 'Nf3'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 0 1',
      children: [
        {
          id: 'a04_main_2',
          move: {
            from: 'd7',
            to: 'd5',
            piece: 'p',
            san: 'd5'
          },
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2',
          children: [
            {
              id: 'a04_main_3',
              move: {
                from: 'c2',
                to: 'c4',
                piece: 'p',
                san: 'c4'
              },
              fen: 'rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq - 0 2',
              children: [
                {
                  id: 'a04_main_4',
                  move: {
                    from: 'd5',
                    to: 'c4',
                    piece: 'p',
                    san: 'dxc4'
                  },
                  fen: 'rnbqkbnr/ppp1pppp/8/8/2p5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3',
                  children: [],
                  strategicIdea: '黑方接受弃兵'
                }
              ],
              strategicIdea: '白方展开后翼攻势'
            }
          ],
          strategicIdea: '黑方占据中心'
        }
      ],
      strategicIdea: '白方发展王翼骑士'
    },
    strategicThemes: [
      '灵活发展',
      '控制中心',
      '后翼空间优势',
      '中心控制'
    ],
    commonTraps: [
      '过早展开后翼攻势',
      '忽视中心控制',
      '发展不协调'
    ]
  },
  {
    ecoCode: 'C42',
    name: '彼得罗夫防御',
    category: '开放性开局',
    description: '彼得罗夫防御以1.e4 e5 2.Nf3 Nf6为特征。黑方采用对称性策略，试图立即反击白方中心。',
    players: {
      white: 'kramnik',
      black: 'kasparov',
      scores: {
        white: 0,
        black: 1
      }
    },
    mainLine: {
      id: 'c42_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'c42_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c42_main_3',
              move: {
                from: 'g1',
                to: 'f3',
                piece: 'n',
                san: 'Nf3'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
              children: [
                {
                  id: 'c42_main_4',
                  move: {
                    from: 'g8',
                    to: 'f6',
                    piece: 'n',
                    san: 'Nf6'
                  },
                  fen: 'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
                  children: [],
                  strategicIdea: '黑方立即反击中心'
                }
              ],
              strategicIdea: '白方发展王翼骑士'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '对称性策略',
      '中心反击',
      '快速发展',
      '王翼安全'
    ],
    commonTraps: [
      '过早交换中心兵',
      '错误的子力交换',
      '忽视发展'
    ]
  },
  {
    ecoCode: 'C44',
    name: '苏格兰开局',
    category: '开放性开局',
    description: '苏格兰开局以1.e4 e5 2.Nf3 Nc6 3.d4为特征。白方采用激进策略，立即打开中心。',
    players: {
      white: 'kasparov',
      black: 'karpov',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c44_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'c44_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c44_main_3',
              move: {
                from: 'g1',
                to: 'f3',
                piece: 'n',
                san: 'Nf3'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
              children: [
                {
                  id: 'c44_main_4',
                                  move: {
                                    from: 'b8',
                                    to: 'c6',
                                    piece: 'n',
                                    san: 'Nc6'
                                  },
                  fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
                                  children: [
                                    {
                      id: 'c44_main_5',
                      move: {
                        from: 'd2',
                        to: 'd4',
                        piece: 'p',
                        san: 'd4'
                      },
                      fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3',
                      children: [],
                      strategicIdea: '白方立即打开中心'
                    }
                  ],
                  strategicIdea: '黑方发展骑士控制中心'
                }
              ],
              strategicIdea: '白方发展王翼骑士'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '开放中心',
      '快速发展',
      '攻势准备',
      '子力活动'
    ],
    commonTraps: [
      '过早交换中心兵',
      '错误的发展次序',
      '忽视王翼安全'
    ]
  },
  {
    ecoCode: 'C46',
    name: '三马开局',
    category: '开放性开局',
    description: '三马开局以1.e4 e5 2.Nf3 Nc6 3.Nc3为特征。白方优先发展骑士，为后续攻势做准备。',
    players: {
      white: 'morphy',
      black: 'anderssen',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c46_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
                      children: [
                        {
          id: 'c46_main_2',
                          move: {
            from: 'e7',
            to: 'e5',
                            piece: 'p',
            san: 'e5'
                          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
                          children: [
                            {
              id: 'c46_main_3',
                                      move: {
                                        from: 'g1',
                                        to: 'f3',
                                        piece: 'n',
                                        san: 'Nf3'
                                      },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
                                      children: [
                                        {
                  id: 'c46_main_4',
                                          move: {
                    from: 'b8',
                    to: 'c6',
                                            piece: 'n',
                    san: 'Nc6'
                                  },
                  fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
                                  children: [
                                    {
                      id: 'c46_main_5',
                                      move: {
                                        from: 'b1',
                                        to: 'c3',
                                        piece: 'n',
                                        san: 'Nc3'
                                      },
                      fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 3 3',
                                          children: [],
                      strategicIdea: '白方发展第二个骑士，加强中心控制'
                    }
                  ],
                  strategicIdea: '黑方发展骑士控制中心'
                }
              ],
              strategicIdea: '白方发展王翼骑士'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '快速发展骑士',
      '中心控制',
      '攻势准备',
      '灵活机动'
    ],
    commonTraps: [
      '过早展开攻势',
      '忽视主教发展',
      '错误的发展次序'
    ]
  },
  {
    ecoCode: 'C47',
    name: '四马开局',
    category: '开放性开局',
    description: '四马开局以1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6为特征。双方都优先发展骑士，形成对称局面。',
    players: {
      white: 'steinitz',
      black: 'lasker',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c47_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
                                      children: [
                                        {
          id: 'c47_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c47_main_3',
              move: {
                from: 'g1',
                to: 'f3',
                piece: 'n',
                san: 'Nf3'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
              children: [
                {
                  id: 'c47_main_4',
                                          move: {
                                            from: 'b8',
                                            to: 'c6',
                                            piece: 'n',
                                            san: 'Nc6'
                                          },
                  fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
                  children: [
                    {
                      id: 'c47_main_5',
                      move: {
                        from: 'b1',
                        to: 'c3',
                        piece: 'n',
                        san: 'Nc3'
                      },
                      fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 3 3',
                      children: [
                        {
                          id: 'c47_main_6',
                          move: {
                            from: 'g8',
                            to: 'f6',
                            piece: 'n',
                            san: 'Nf6'
                          },
                          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4',
                                          children: [],
                          strategicIdea: '黑方完成骑士发展，形成对称局面'
                        }
                      ],
                      strategicIdea: '白方发展第二个骑士'
                    }
                  ],
                  strategicIdea: '黑方发展骑士控制中心'
                }
              ],
              strategicIdea: '白方发展王翼骑士'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '对称局面',
      '快速发展',
      '中心控制',
      '骑士机动'
    ],
    commonTraps: [
      '过早打破对称',
      '错误的发展次序',
      '忽视中心控制'
    ]
  },
  {
    ecoCode: 'C58',
    name: '双马防御',
    category: '开放性开局',
    description: '双马防御是一个古老而经典的开局，以1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6为特征。黑方采用积极的防御策略，直接挑战白方的中心控制。',
    players: {
      white: 'carlsen',
      black: 'anand',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c58_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'c58_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c58_main_3',
              move: {
                from: 'g1',
                to: 'f3',
                piece: 'n',
                san: 'Nf3'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2',
              children: [
                {
                  id: 'c58_main_4',
                  move: {
                    from: 'b8',
                    to: 'c6',
                    piece: 'n',
                    san: 'Nc6'
                  },
                  fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3',
                  children: [
                    {
                      id: 'c58_main_5',
                      move: {
                        from: 'f1',
                        to: 'c4',
                        piece: 'b',
                        san: 'Bc4'
                      },
                      fen: 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
                      children: [
                        {
                          id: 'c58_main_6',
                          move: {
                            from: 'g8',
                            to: 'f6',
                            piece: 'n',
                            san: 'Nf6'
                          },
                          fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4',
                          children: [],
                          strategicIdea: '黑方完成双马防御布局'
                        }
                      ],
                      strategicIdea: '白方发展主教到最活跃的位置'
                    }
                  ],
                  strategicIdea: '黑方发展骑士控制中心'
                }
              ],
              strategicIdea: '白方发展王翼骑士'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '双骑士防御',
      '中心控制争夺',
      '快速子力发展',
      '对称局面'
    ],
    commonTraps: [
      '过早进行中心交换',
      '忽视王翼安全',
      '错误的子力发展次序'
    ]
  },
  {
    ecoCode: 'C30',
    name: '王翼弃兵开局',
    category: '开放性开局',
    description: '王翼弃兵开局以1.e4 e5 2.f4为特征。白方牺牲f兵来获取更大的中心控制和进攻机会，是一个充满冒险精神的开局选择。',
    players: {
      white: 'morphy',
      black: 'anderssen',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c30_main_1',
      move: {
        from: 'e2',
        to: 'e4',
                    piece: 'p',
        san: 'e4'
                  },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
                  children: [
                    {
          id: 'c30_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c30_main_3',
              move: {
                from: 'f2',
                to: 'f4',
                piece: 'p',
                san: 'f4'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2',
              children: [],
              strategicIdea: '白方牺牲f兵以获取更大的中心控制'
            }
          ],
          strategicIdea: '黑方反击中心'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '王翼进攻',
      '中心控制',
      '兵形破坏',
      '牺牲战术'
    ],
    commonTraps: [
      '过早接受兵的牺牲',
      '忽视王翼防御',
      '错误的应对时机'
    ]
  },
  {
    ecoCode: 'D20',
    name: '拒后翼弃兵开局',
    category: '封闭性开局',
    description: '拒后翼弃兵开局以1.d4 d5 2.c4 dxc4 3.e3为特征。黑方拒绝白方在后翼的兵的牺牲，采取更加稳健的防御策略。',
    players: {
      white: 'anand',
      black: 'kramnik',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'd20_main_1',
                      move: {
                        from: 'd2',
                        to: 'd4',
                        piece: 'p',
                        san: 'd4'
                      },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
                      children: [
                        {
          id: 'd20_main_2',
                          move: {
            from: 'd7',
            to: 'd5',
                            piece: 'p',
            san: 'd5'
                          },
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',
                          children: [
                            {
              id: 'd20_main_3',
                              move: {
                from: 'c2',
                to: 'c4',
                piece: 'p',
                san: 'c4'
              },
              fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
              children: [
                {
                  id: 'd20_main_4',
                  move: {
                    from: 'd5',
                    to: 'c4',
                    piece: 'p',
                    san: 'dxc4'
                  },
                  fen: 'rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
                  children: [
                    {
                      id: 'd20_main_5',
                      move: {
                        from: 'e2',
                        to: 'e3',
                        piece: 'p',
                        san: 'e3'
                      },
                      fen: 'rnbqkbnr/ppp1pppp/8/8/2pP4/4P3/PP3PPP/RNBQKBNR b KQkq - 0 3',
                      children: [],
                      strategicIdea: '白方选择稳健的方式收回兵的牺牲'
                    }
                  ],
                  strategicIdea: '黑方接受后翼兵的牺牲'
                }
              ],
              strategicIdea: '白方提供c4兵的牺牲'
            }
          ],
          strategicIdea: '黑方建立中心存在'
        }
      ],
      strategicIdea: '白方控制中心'
    },
    strategicThemes: [
      '中心控制',
      '稳健发展',
      '兵形结构平衡',
      '子力灵活布置'
    ],
    commonTraps: [
      '过早的王翼城堡',
      '忽视c4兵的恢复',
      '错误的子力展开顺序'
    ]
  },
  {
    ecoCode: 'D27',
    name: '接受后翼弃兵开局',
    category: '封闭性开局',
    description: '接受后翼弃兵开局以1.d4 d5 2.c4 dxc4 3.Nf3 Nf6 4.e3 e6 5.Bxc4为特征。白方快速收回牺牲的兵，并发展子力。',
    players: {
      white: 'botvinnik',
      black: 'capablanca',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'd27_main_1',
      move: {
        from: 'd2',
                                to: 'd4',
        piece: 'p',
        san: 'd4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'd27_main_2',
          move: {
            from: 'd7',
            to: 'd5',
            piece: 'p',
            san: 'd5'
          },
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'd27_main_3',
              move: {
                from: 'c2',
                to: 'c4',
                piece: 'p',
                san: 'c4'
              },
              fen: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2',
              children: [
                {
                  id: 'd27_main_4',
                  move: {
                    from: 'd5',
                    to: 'c4',
                    piece: 'p',
                    san: 'dxc4'
                  },
                  fen: 'rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3',
                  children: [
                    {
                      id: 'd27_main_5',
                      move: {
                        from: 'g1',
                        to: 'f3',
                                piece: 'n',
                        san: 'Nf3'
                              },
                      fen: 'rnbqkbnr/ppp1pppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3',
                              children: [
                                {
                          id: 'd27_main_6',
                                  move: {
                                    from: 'g8',
                                    to: 'f6',
                                    piece: 'n',
                                    san: 'Nf6'
                                  },
                          fen: 'rnbqkb1r/ppp1pppp/5n2/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4',
                                  children: [
                                    {
                              id: 'd27_main_7',
                                      move: {
                                from: 'e2',
                                to: 'e3',
                                piece: 'p',
                                san: 'e3'
                              },
                              fen: 'rnbqkb1r/ppp1pppp/5n2/8/2pP4/4PN2/PP3PPP/RNBQKB1R b KQkq - 0 4',
                                      children: [
                                        {
                                  id: 'd27_main_8',
                                          move: {
                                    from: 'e7',
                                    to: 'e6',
                                    piece: 'p',
                                    san: 'e6'
                                  },
                                  fen: 'rnbqkb1r/ppp2ppp/4pn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 0 5',
                                  children: [
                                    {
                                      id: 'd27_main_9',
                                      move: {
                                        from: 'f1',
                                        to: 'c4',
                                        piece: 'b',
                                        san: 'Bxc4'
                                      },
                                      fen: 'rnbqkb1r/ppp2ppp/4pn2/8/2BP4/4PN2/PP3PPP/RNBQK2R b KQkq - 0 5',
                                      children: [],
                                      strategicIdea: '白方收回牺牲的兵，并发展主教'
                                    }
                                  ],
                                  strategicIdea: '黑方巩固王翼防御'
                                }
                              ],
                              strategicIdea: '白方为夺回c4兵做准备'
                            }
                          ],
                          strategicIdea: '黑方发展王翼骑士'
                        }
                      ],
                      strategicIdea: '白方发展骑士，准备收回c4兵'
                    }
                  ],
                  strategicIdea: '黑方接受后翼兵的牺牲'
                }
              ],
              strategicIdea: '白方提供c4兵的牺牲'
            }
          ],
          strategicIdea: '黑方建立中心存在'
        }
      ],
      strategicIdea: '白方控制中心'
    },
    strategicThemes: [
      '主动收回兵权',
      '快速发展子力',
      '中心控制',
      '王翼安全'
    ],
    commonTraps: [
      '过早的兵形交换',
      '忽视中心控制',
      '错误的子力发展顺序'
    ]
  },
  {
    ecoCode: 'A80',
    name: '荷兰防御',
    category: '半封闭性开局',
    description: '荷兰防御以1.d4 f5为特征。黑方采用非常规手段争夺中心控制权，同时为王翼攻势做准备。这是一种积极的防御策略。',
    players: {
      white: 'anand',
      black: 'timman',
      scores: {
        white: 0,
        black: 1
      }
    },
    mainLine: {
      id: 'a80_main_1',
      move: {
        from: 'd2',
        to: 'd4',
        piece: 'p',
        san: 'd4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'a80_main_2',
          move: {
            from: 'f7',
            to: 'f5',
            piece: 'p',
            san: 'f5'
          },
          fen: 'rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'a80_main_3',
              move: {
                from: 'g2',
                to: 'g3',
                piece: 'p',
                san: 'g3'
              },
              fen: 'rnbqkbnr/ppppp1pp/8/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq - 0 2',
              children: [
                {
                  id: 'a80_main_4',
                  move: {
                    from: 'g8',
                    to: 'f6',
                                            piece: 'n',
                    san: 'Nf6'
                  },
                  fen: 'rnbqkb1r/ppppp1pp/5n2/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR w KQkq - 1 3',
                  children: [
                    {
                      id: 'a80_main_5',
                      move: {
                        from: 'f1',
                        to: 'g2',
                        piece: 'b',
                        san: 'Bg2'
                      },
                      fen: 'rnbqkb1r/ppppp1pp/5n2/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR b KQkq - 2 3',
                                          children: [],
                      strategicIdea: '白方采用超现代开局思想，控制中心'
                    }
                  ],
                  strategicIdea: '黑方发展王翼骑士'
                }
              ],
              strategicIdea: '白方准备超现代式防御'
            }
          ],
          strategicIdea: '黑方立即争夺e4格，为王翼攻势做准备'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '非正统中心控制',
      '王翼攻势',
      '战略性进攻',
      '灵活的兵形结构'
    ],
    commonTraps: [
      '早期中心失控',
      '王翼过度脆弱',
      '发展不足就攻击'
    ]
  },
  {
    ecoCode: 'A02',
    name: '伯德开局',
    category: '其他开局',
    description: '伯德开局以1.f4为特征，白方快速控制e5格，是一种侧翼开局。这种开局由19世纪英国棋手亨利·伯德推广，可以转换为多种变体。',
    players: {
      white: 'larsen',
      black: 'spassky',
      scores: {
        white: 0,
        black: 1
      }
    },
    mainLine: {
      id: 'a02_main_1',
      move: {
        from: 'f2',
        to: 'f4',
        piece: 'p',
        san: 'f4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'a02_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'a02_main_3',
              move: {
                from: 'f4',
                to: 'e5',
                piece: 'p',
                san: 'fxe5'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4P3/8/8/PPPPP1PP/RNBQKBNR b KQkq - 0 2',
              children: [],
              strategicIdea: '白方获得中心优势，但黑方有多种反击方式'
            }
          ],
          strategicIdea: '黑方立即挑战白方的f4兵，这是最积极的应对'
        }
      ],
      strategicIdea: '白方控制e5关键格，为王翼攻势做准备'
    },
    strategicThemes: [
      '侧翼控制',
      '非正统中心战略',
      '王翼攻势准备',
      '战术丰富的局面'
    ],
    commonTraps: [
      '忽视中心发展',
      '王翼提前攻击',
      '过早交换中央兵'
    ]
  },
  {
    ecoCode: 'C21',
    name: '丹麦弃兵开局',
    category: '其他开局',
    description: '丹麦弃兵开局是国际象棋中一种古老而冒险的开局，以1.e4 e5 2.d4 exd4 3.c3为特征。白方牺牲一个兵来换取快速发展和开放线的优势。',
    players: {
      white: 'blackburne',
      black: 'steinitz',
      scores: {
        white: 1,
        black: 0
      }
    },
    mainLine: {
      id: 'c21_main_1',
      move: {
        from: 'e2',
        to: 'e4',
        piece: 'p',
        san: 'e4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'c21_main_2',
          move: {
            from: 'e7',
            to: 'e5',
            piece: 'p',
            san: 'e5'
          },
          fen: 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'c21_main_3',
              move: {
                from: 'd2',
                to: 'd4',
                piece: 'p',
                san: 'd4'
              },
              fen: 'rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2',
              children: [
                {
                  id: 'c21_main_4',
                  move: {
                    from: 'e5',
                    to: 'd4',
                    piece: 'p',
                    san: 'exd4'
                  },
                  fen: 'rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3',
                  children: [
                    {
                      id: 'c21_main_5',
                      move: {
                        from: 'c2',
                        to: 'c3',
                        piece: 'p',
                        san: 'c3'
                      },
                      fen: 'rnbqkbnr/pppp1ppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3',
                      children: [],
                      strategicIdea: '白方牺牲一个兵来获取快速发展和中心控制'
                    }
                  ],
                  strategicIdea: '黑方接受中心兵的交换'
                }
              ],
              strategicIdea: '白方立即挑战中心'
            }
          ],
          strategicIdea: '黑方争夺中心控制'
        }
      ],
      strategicIdea: '白方建立中心存在'
    },
    strategicThemes: [
      '中心控制',
      '提前牺牲',
      '快速发展',
      '开放线利用'
    ],
    commonTraps: [
      '拒绝接受牺牲',
      '错误的兵型发展',
      '后翼发展不足'
    ]
  },
  {
    ecoCode: 'D00',
    name: '乌菲姆采夫防御',
    category: '其他开局',
    description: '乌菲姆采夫防御以1.d4 d5 2.e4为特征，白方采用激进策略直接挑战黑方的中心兵。这是一种不常见但充满活力的开局，由俄罗斯大师乌菲姆采夫(Ufimtsev)研究推广。',
    players: {
      white: 'karpov',
      black: 'kasparov',
      scores: {
        white: 0,
        black: 1
      }
    },
    mainLine: {
      id: 'd00_main_1',
      move: {
        from: 'd2',
        to: 'd4',
        piece: 'p',
        san: 'd4'
      },
      fen: 'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
      children: [
        {
          id: 'd00_main_2',
          move: {
            from: 'd7',
            to: 'd5',
            piece: 'p',
            san: 'd5'
          },
          fen: 'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',
          children: [
            {
              id: 'd00_main_3',
              move: {
                from: 'e2',
                to: 'e4',
                piece: 'p',
                san: 'e4'
              },
              fen: 'rnbqkbnr/ppp1pppp/8/3p4/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2',
              children: [],
              strategicIdea: '白方直接挑战黑方的中心兵，形成尖锐局面'
            }
          ],
          strategicIdea: '黑方建立中心存在'
        }
      ],
      strategicIdea: '白方占据中心'
    },
    strategicThemes: [
      '积极的中心控制',
      '尖锐战术性局面',
      '不对称兵型',
      '激进的发展思路'
    ],
    commonTraps: [
      '过早接受中心交换',
      '忽视发展速度',
      '错误的子力布局'
    ]
  }
];