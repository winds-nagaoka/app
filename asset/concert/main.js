const mainConcert = [
  {
//////////////////////////////////
////// 第1回定期演奏会データ //////
//////////////////////////////////
    id: 'main001',
    type: 'main',
    title: '第1回定期演奏会',
    time: {
      timestamp: 579625200,
      date: '1988年5月15日(日)'
    },
    conductor: [{name: '小川直記'}, {name: '若井一也'}],
    contents: [
      {label: '第1部', music: [0, 1, 2]},
      {label: '第2部', music: [3, 4, 5]},
      {label: '第3部', music: [6, 7]},
      {label: 'アンコール', music: [8, 9]}
    ],
    data: [
      {audio: 0, title: 'ウェールズの歌', composer: 'A.D.デイヴィス'},
      {audio: 1, title: 'カンタータ147番 主よ人の望みの喜びを', composer: 'J.S.バッハ'},
      {audio: 2, title: '北国の伝説', composer: 'A.リード'},
      {audio: 3, title: 'カレリア組曲より 行進曲風に', composer: 'J.シベリウス'},
      {audio: 4, title: '木管九重奏のための小交響曲より アンダンテ・カンタービレ', composer: 'C.F.グノー'},
      {audio: 5, title: '喜歌劇「どろぼうかささぎ」序曲', composer: 'G.A.ロッシーニ'},
      {audio: 6, title: 'アルメニアンダンス・パートI', composer: 'A.リード'},
      {audio: 7, title: 'アルメニアンダンス・パートII', composer: 'A.リード'},
      {audio: 8, title: 'カーニバルのマーチ', composer: '杉本幸一'},
      {audio: 9, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第2回定期演奏会データ //////
//////////////////////////////////
    id: 'main002',
    type: 'main',
    title: '第2回定期演奏会',
    time: {
      timestamp: 610470000,
      date: '1989年5月7日(日)'
    },
    conductor: [{name: '若井一也'}],
    contents: [
      {label: '第1部', music: [0, 1, 2]},
      {label: '第2部', music: [3, 4, 5]},
      {label: '第3部', music: [6, 7]},
      {label: 'アンコール', music: [8, 9, 10]}
    ],
    data: [
      {audio: 0, title: 'バレエ音楽「シルヴィア」より 行進とバッカスの行列', composer: 'L.ドリーブ'},
      {audio: 1, title: '歌劇「カヴァレリア・ルスティカーナ」より 交響的間奏曲', composer: 'P.マスカーニ'},
      {audio: 2, title: '歌劇「イーゴリ公」より ダッタン人の踊り', composer: 'A.ボロディン'},
      {audio: 3, title: '吹奏楽のための第一組曲', composer: 'G.ホルスト', movement: ['第1楽章 シャコンヌ', '第2楽章 間奏曲', '第3楽章 マーチ']},
      {audio: 6, title: '詩的間奏曲', composer: 'J.バーンズ'},
      {audio: 7, title: 'セント・アンソニー・ヴァリエーション', composer: 'W.H.ヒル'},
      {audio: 8, title: '海の肖像', composer: 'H.ガッシィー'},
      {audio: 9, title: '吹奏楽のための第2組曲', composer: 'A.リード', movement: ['I. ソン・モンテューノ', 'II. タンゴ', 'III. グワラチャ', 'IV. パソ・ドブレ']},
      {audio: 13, title: 'カンタータ147番 主よ人の望みの喜びを', composer: 'J.S.バッハ'},
      {audio: 14, title: 'シンコペーテッド・マーチ「明日に向って」', composer: '岩井直溥'},
      {audio: 15, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第3回定期演奏会データ //////
//////////////////////////////////
    id: 'main003',
    type: 'main',
    title: '第3回定期演奏会',
    time: {
      timestamp: 643129200,
      date: '1990年5月20日(日)'
    },
    place: ['長岡市立劇場'],
    conductor: [{name: '若井一也'}],
    contents: [
      {label: '第1部', music: [0, 1, 2, 3]},
      {label: '第2部', music: [4]},
      {label: '第3部', music: [5]},
      {label: 'アンコール', music: [6, 7, 8]}
    ],
    data: [
      {audio: 0, video: 0, title: '祝典序曲', composer: 'D.ショスタコーヴィチ'},
      {audio: 1, video: 1, title: '夢', composer: 'C.ドビュッシー'},
      {audio: 2, video: 2, title: 'シンフォニック・バンドのための序曲', composer: '兼田敏'},
      {audio: 3, video: 3, title: '呪文と踊り', composer: 'J.B.チャンス'},
      {audio: 4, video: 4, title: 'バレエ音楽「くるみ割り人形」より', composer: 'P.I.チャイコフスキー'},
      {audio: 12, video: 12, title: '吹奏楽のための交響曲「メキシコの祭り」', composer: 'O.リード'},
      {audio: 15, video: 15, title: 'Sheep May Safely Graze'},
      {audio: 16, video: 16, title: 'Barnum & Bailey\'s Favorite'},
      {audio: 17, video: 17, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第4回定期演奏会データ //////
//////////////////////////////////
    id: 'main004',
    type: 'main',
    title: '第4回定期演奏会',
    time: {
      timestamp: 675183600,
      date: '1991年5月26日(日)'
    },
    conductor: [{name: '若井一也'}],
    contents: [
      {label: '第1部', music: [0, 1, 2]},
      {label: '第2部', music: [3, 4, 5, 6]},
      {label: '第3部', music: [7, 8]},
      {label: 'アンコール', music: [9, 10, 11]}
    ],
    data: [
      {audio: 0, title: '歌劇「ルスランとリュドミラ」序曲', composer: 'M.グリンカ'},
      {audio: 1, title: '歌劇「椿姫」より 第一幕の前奏曲', composer: 'G.ヴェルディ'},
      {audio: 2, title: '歌劇「サムソンとデリラ」より バッカナール', composer: 'C.サン=サーンス'},
      {audio: 3, title: '序曲「バラの謝肉祭」', composer: 'C.オリヴァドッティ'},
      {audio: 4, title: '序奏とファンタジア', composer: 'R.ミッチェル'},
      {audio: 5, title: '聖歌と祭り', composer: 'F.W.マクベス'},
      {audio: 6, title: '吹奏楽のための民話', composer: 'J.A.カウディル'},
      {audio: 7, title: '第3組曲', composer: 'R.ジェイガー', movement: ['I. マーチ', 'II. ワルツ', 'III. ロンド']},
      {audio: 10, title: 'ドラゴンの年', composer: 'P.スパーク', movement: ['I.トッカータ', 'II. 間奏曲', 'III. 終曲']},
      {audio: 13, title: 'フォー・ゴットン・ドリーム', composer: 'L.アンダーソン'},
      {audio: 14, title: 'そよ風のマーチ', composer: '松尾善雄'},
      {audio: 15, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第5回定期演奏会データ //////
//////////////////////////////////
    id: 'main005',
    type: 'main',
    title: '第5回定期演奏会',
    time: {
      timestamp: 706028400,
      date: '1992年5月17日(日)'
    },
    place: ['長岡市立劇場'],
    conductor: [{name: '若井一也'}],
    contents: [
      {label: '第1部', music: [0, 1, 2, 3, 4, 5]},
      {label: '第2部', music: [6, 7]},
      {label: '第3部', music: [8, 9]},
      {label: 'アンコール', music: [10, 11]}
    ],
    data: [
      {audio: 0, video: 0, title: 'リバティ・ファンファーレ', composer: 'J.ウィリアムズ'},
      {audio: 1, video: 1, title: 'ヒズ・オーナー', composer: 'H.フィルモア'},
      {audio: 2, video: 2, title: 'ライツ・アウト・マーチ', composer: 'E.E.マッコイ'},
      {audio: 3, video: 3, title: '国民の象徴', composer: 'E.E.バグレイ'},
      {audio: 4, video: 4, title: '雷神', composer: 'J.P.スーザ'},
      {audio: 5, video: 5, title: '星条旗よ永遠なれ', composer: 'J.P.スーザ'},
      {audio: 6, video: 6, title: 'キャンディード序曲', composer: 'L.バーンスタイン'},
      {audio: 7, video: 7, title: '「ウェスト・サイド・ストーリー」より シンフォニック・ダンス', composer: 'L.バーンスタイン'},
      {audio: 8, video: 8, title: '吹奏楽のための木挽歌', composer: '小山清茂', movement: ['テーマ', '盆踊り', '朝のうた', 'フィナーレ']},
      {audio: 12, video: 12, title: 'スペイン奇想曲', composer: 'N.リムスキー=コルサコフ'},
      {audio: 13, video: 13, title: 'ゆかいな仲間の行進曲', composer: '坂本智'},
      {audio: 14, video: 14, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
    }, {
//////////////////////////////////
////// 第6回定期演奏会データ //////
//////////////////////////////////
    id: 'main006',
    type: 'main',
    title: '第6回定期演奏会',
    time: {
      timestamp: 738082800,
      date: '1993年5月23日(日)'
    },
    place: ['長岡市立劇場'],
    conductor: [{name: '篠田正弘'}, {name: '若井一也'}],
    contents: [
      {label: '第1部', music: [0, 1, 2, 3, 4]},
      {label: '第2部', music: [5, 6, 7]},
      {label: '第3部', music: [8, 9]},
      {label: 'アンコール', music: [10, 11]}
    ],
    data: [
      {audio: 0, video: 0, title: '行進曲「青空の下で」', composer: '坂本智'},
      {audio: 1, video: 1, title: 'フェリスタス', composer: '青木進'},
      {audio: 2, video: 2, title: '吹奏楽のための交響詩「波の見える風景」', composer: '真島俊夫'},
      {audio: 3, video: 3, title: 'カンティレーナ', composer: '保科 洋'},
      {audio: 4, video: 4, title: '吹奏楽のための「大阪俗謡による幻想曲」', composer: '大栗裕'},
      {audio: 5, video: 5, title: 'アレルヤ！ラウダムス・テ', composer: 'A.リード'},
      {audio: 6, video: 6, title: 'わが心の切なる願い', composer: 'J.S.バッハ'},
      {audio: 7, video: 7, title: '吹奏楽のための第3組曲「バレエの情景」', composer: 'A.リード', movement: ['I. ファンファーレと序奏', 'II. パ・ドゥ・ドゥ', 'III. 風変わりなポルカ', 'IV. 全員の踊り']},
      {audio: 11, video: 11, title: '歌劇「アルルの女」より 第2組曲', composer: 'G.ビゼー', movement: ['I. パストラール', 'II. 間奏曲', 'III. メヌエット', 'IV. ファランドール']},
      {audio: 15, video: 15, title: '歌劇「ローエングリン」より エルザの大聖堂への行列', composer: 'R.ワーグナー'},
      {audio: 16, video: 16, title: 'ウェールズの歌 第二楽章', composer: 'A.D.デイヴィス'},
      {audio: 17, video: 17, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第7回定期演奏会データ //////
//////////////////////////////////
    id: 'main007',
    type: 'main',
    title: '第7回定期演奏会',
    time: {
      timestamp: 769532400,
      date: '1994年5月22日(日)'
    },
    place: ['長岡市立劇場'],
    conductor: [{name: '若井一也'}, {name: '篠田正弘'}],
    contents: [
      {label: 'プレコン', music: [0]},
      {label: '第1部', music: [1, 2]},
      {label: '第2部', music: [3, 4, 5, 6]},
      {label: '第3部', music: [7]},
      {label: 'アンコール', music: [8, 9]}
    ],
    data: [
      {audio: 0, video: 0, title: 'プレコン'},
      {audio: 1, video: 1, title: '子供のマーチ「丘を越えてかなたに」', composer: 'P.A.グレンジャー'},
      {audio: 2, video: 2, title: '吹奏楽のための交響曲 第6番', composer: 'V.パーシケッティ', movement: ['第一楽章', '第二楽章', '第三楽章', '第四楽章']},
      {audio: 6, video: 6, title: '歌劇「ファウストの劫罰」より ラコッツィ行進曲', composer: 'H.ベルリオーズ'},
      {audio: 7, video: 7, title: 'アヴェ・ヴェルム・コルプス', composer: 'W.A.モーツァルト'},
      {audio: 8, video: 8, title: '喜歌劇「天国と地獄」序曲', composer: 'J.オッフェンバック'},
      {audio: 9, video: 9, title: 'ハンガリー狂詩曲 第2番', composer: 'F.リスト'},
      {audio: 10, video: 10, title: '吹奏楽のための交響詩「ぐるりよざ」', composer: '伊藤康英', movement: ['第1楽章 祈り', '第2楽章 唄', '第3楽章 祭り']},
      {audio: 13, video: 13, title: '歌劇「カヴァレリア・ルスティカーナ」より 間奏曲', composer: 'P.マスカーニ'},
      {audio: 14, video: 14, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第8回定期演奏会データ //////
//////////////////////////////////
    id: 'main008',
    type: 'main',
    title: '第8回定期演奏会',
    time: {
      timestamp: 799772400,
      date: '1995年5月7日(日)'
    },
    place: ['長岡市立劇場'],
    conductor: [{name: '広川美穂'}, {name: '篠田正弘'}],
    contents: [
      {label: 'プレコン', music: [0]},
      {label: '第1部', music: [1, 2, 3, 4]},
      {label: '第2部', music: [5]},
      {label: 'アンコール', music: [6, 7, 8]}
    ],
    data: [
      {audio: 0, video: 0, title: '「エルザの大聖堂への行列」より', composer: 'R.ワーグナー'},
      {audio: 1, video: 1, title: 'フラッシング・ウィンズ', composer: 'J.ヴァンデルロースト'},
      {audio: 2, video: 2, title: '吹奏楽のための序曲', composer: 'F.メンデルスゾーン'},
      {audio: 3, video: 3, title: 'ウェスト・ハイランドの想い出', composer: 'R.シェルドン', movement: ['第1楽章 高原にて', '第2楽章 ブラッドフォードのバラード', '第3楽章 ダーウェントウォーターにて']},
      {audio: 6, video: 6, title: 'バレエ組曲「コッペリア」', composer: 'L.ドリーブ'},
      {audio: 9, video: 9, title: '交響詩「ローマの松」', composer: 'O.レスピーギ', movement: ['第1部 ボルゲーゼ荘の松', '第2部 カタコンバ付近の松', '第3部 ジャニコロの松', '第4部 アッピア街道の松']},
      {audio: 13, video: 13, title: 'カンタータ「目覚めよと呼ぶ声が聞こえる」', composer: 'J.S.バッハ'},
      {audio: 14, video: 14, title: 'スプリング・マーチ', composer: '大石美香'},
      {audio: 15, video: 15, title: 'ブロックM', composer: 'J.H.ビリック'},
    ]
  }, {
//////////////////////////////////
////// 第9回定期演奏会データ //////
//////////////////////////////////
    id: 'main009',
    type: 'main',
    title: '第9回定期演奏会',
    time: {
      timestamp: 831826800,
      date: '1996年5月12日(日)'
    },
    place: ['長岡市立劇場'],
    conductor: [{name: '高橋直裕'}, {name: '篠田正弘'}],
    contents: [
      {label: 'プレコン', music: [0]},
      {label: '第1部', music: [1, 2, 3]},
      {label: '第2部', music: [4]},
      {label: 'アンコール', music: [5, 6]}
    ],
    data: [
      {audio: 0, video: 0, title: 'プレコン'},
      {audio: 1, video: 1, title: 'ウィーン市祝典音楽', composer: 'R.シュトラウス'},
      {audio: 2, video: 2, title: 'リンカーンシャーの花束', composer: 'P.A.グレンジャー', movement: ['I. リスボン', 'II. ホークストウの農場', 'III. ラフォード公園の密猟者', 'IV. 元気な若い水夫', 'V. メルボルン卿', 'VI. 行方不明の婦人が見つかった']},
      {audio: 8, video: 8, title: 'ヒロイック・サガ《英雄的伝説》', composer: 'R.ジェイガー'},
      {audio: 9, video: 9, title: 'バレエ音楽「ロメオとジュリエット」より', composer: 'S.プロコフィエフ'},
      {audio: 15, video: 15, title: 'マタイ受難曲54番 My Heart is Filled with Longing', composer: 'J.S.バッハ'},
      {audio: 16, video: 16, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第10回定期演奏会データ //////
//////////////////////////////////
    id: 'main010',
    type: 'main',
    title: '第10回定期演奏会',
    time: {
      timestamp: 863276400,
      date: '1997年5月11日(日)'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '篠田正弘'}, {name: '広川美穂'}],
    contents: [
      {label: '第1部', music: [0, 1, 2, 3]},
      {label: '第2部', music: [4, 5, 6]},
      {label: 'アンコール', music: [7, 8, 9]}
    ],
    data: [
      {audio: 0, video: 0, title: 'シンフォニック・オード', composer: '保科洋'},
      {audio: 1, video: 1, title: 'カンタベリー・コラール', composer: 'J.ヴァンデルロースト'},
      {audio: 2, video: 2, title: 'バレエ組曲「ロデオ」より 4つのエピソード', composer: 'A.コープランド', movement: ['1. カウボーイの休日', '2. 牧場の夜想曲', '3. 土曜の晩のワルツ', '4. 踊り']},
      {audio: 6, video: 6, title: 'リタージカルダンス', composer: 'D.ホールジンガー'},
      {audio: 7, video: 7, title: '市民のためのファンファーレ', composer: 'A.コープランド'},
      {audio: 8, video: 8, title: '小組曲', composer: 'C.ドビュッシー', movement: ['1. 小舟にて', '2. 行列', '3. メヌエット', '4. バレエ']},
      {audio: 12, video: 12, title: '大序曲「1812年」', composer: 'P.I.チャイコフスキー'},
      {audio: 13, video: 13, title: 'バレエ音楽「くるみ割り人形」より あし笛の踊り', composer: 'P.I.チャイコフスキー'},
      {audio: 14, video: 14, title: '1997年吹奏楽コンクール課題曲より 五月の風', composer: '真島俊夫'},
      {audio: 15, video: 15, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第11回定期演奏会データ //////
//////////////////////////////////
    id: 'main011',
    type: 'main',
    title: '第11回定期演奏会',
    time: {
      timestamp: 894294000,
      date: '1998年5月5日(火・祝)'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '篠田正弘'}, {name: '高島章悟'}],
    contents: [
      {label: '第1部', music: [0, 1, 2, 3]},
      {label: '第2部', music: [4, 5, 6]},
      {label: 'アンコール', music: [7, 8, 9]}
    ],
    data: [
      {audio: 0, video: 0, title: '百年祭序曲', composer: 'J.バーンズ'},
      {audio: 1, video: 1, title: '童夢', composer: '松尾善雄'},
      {audio: 2, video: 2, title: '歌劇「ファウスト」より バレエ音楽', composer: 'C.F.グノー', movement: ['1. ヌピア人の踊り', '2. ヌピア人の奴隷の踊り', '3. トロイの娘たちの踊り', '4. フリネの踊り']},
      {audio: 6, video: 6, title: '仮面幻想', composer: '大栗裕'},
      {audio: 7, video: 7, title: 'ソング・アンド・ダンス', composer: '鈴木英史', movement: ['第1曲 プレリュード、アンティフォナル・コールI', '第2曲 ソング・アンド・ダンス', '第3曲 ポストリュードアンティフォナル・コールII']},
      {audio: 10, video: 10, title: '二つの交響的断章', composer: 'V.ネリベル', movement: ['第1楽章', '第2楽章']},
      {audio: 12, video: 12, title: 'スター・ウォーズ・サガ', composer: 'J.ウィリアムズ'},
      {audio: 13, video: 13, title: 'ロマネスク', composer: 'J.スウェアリンジェン'},
      {audio: 14, video: 14, title: 'ラデツキー行進曲', composer: 'J.シュトラウスI世'},
      {audio: 15, video: 15, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第12回定期演奏会データ //////
//////////////////////////////////
    id: 'main012',
    type: 'main',
    title: '第12回定期演奏会',
    time: {
      timestamp: 926780400,
      date: '1999年5月16日(日)'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '篠田正弘'}, {name: '高島章悟'}],
    contents: [
      {label: '第1部', music: [0, 1, 2, 3]},
      {label: '第2部', music: [4]},
      {label: 'アンコール', music: [5, 6]}
    ],
    data: [
      {audio: 0, video: 0, title: 'シンフォニア・ノビリッシマ', composer: 'R.ジェイガー'},
      {audio: 1, video: 1, title: '天使の糧', composer: 'C.フランク'},
      {audio: 2, video: 2, title: '吹奏楽のためのバーレスク', composer: '大栗裕'},
      {audio: 3, video: 3, title: 'リシルド序曲', composer: 'G.バレ'},
      {audio: 4, video: 4, title: 'バレエ音楽「白鳥の湖」より', composer: 'P.I.チャイコフスキー'},
      {audio: 14, video: 6, title: 'ロマネスク', composer: 'J.スウェアリンジェン'},
      {audio: 15, video: 7, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第13回定期演奏会データ //////
//////////////////////////////////
    id: 'main013',
    type: 'main',
    title: '第13回定期演奏会',
    time: {
      timestamp: 958230000,
      date: '2000年5月14日(日)'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '近藤久敦'}],
    guest: [{name: '佛坂咲千生', instrument: 'トランペット'}],
    contents: [
      {label: '第1部', music: [0, 1, 2, 3]},
      {label: '第2部', music: [4, 5, 6, 7, 8]},
      {label: 'アンコール', music: [9, 10]}
    ],
    data: [
      {audio: 0, video: 0, title: '行進曲「フローレンティナー」', composer: 'J.フチーク'},
      {audio: 1, video: 1, title: '組曲「キャンディード」', composer: 'L.バーンスタイン', movement: ['1. この世は限りなく最良のもの', '2. ウェストファリア・コラールと戦いの場面', '3. 判決', '4. きらびやかに楽しく', '5. 我らの庭を耕そう']},
      {audio: 6, video: 6, title: 'デリー地方のアイルランド民謡', composer: 'P.A.グレンジャー'},
      {audio: 7, video: 7, title: '歌劇「笛吹きシュワンダ」より ポルカとフーガ', composer: 'W.ワインベルガー'},
      {audio: 8, video: 8, title: '道祖神の詩', composer: '福島弘和'},
      {audio: 9, video: 9, title: 'をどり唄', composer: '柏崎真一'},
      {audio: 10, video: 10, title: '英雄的音楽より', composer: 'G.P.テレマン', movement: ['No.5 Bellicoso', 'No.6 Amoroso', 'No.11 Risoluto']},
      {audio: 13, video: 13, title: '霧の中の乙女', composer: 'H.L.クラーク'},
      {audio: 14, video: 14, title: 'バレエ音楽「三角帽子」より', composer: 'M.ファリャ', movement: ['1. 隣人の踊り', '2. 粉屋の踊り', '3. 終幕の踊り']},
      {audio: 17, video: 17, title: 'スターダスト～煙が目にしみる', composer: 'Hoagy Carmichae & Jerome Kern'},
      {audio: 18, video: 18, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第14回定期演奏会データ //////
//////////////////////////////////
    id: 'main014',
    type: 'main',
    title: '第14回定期演奏会',
    time: {
      timestamp: 990284400,
      date: '2001年5月20日(日)'
    },
    conductor: [{name: '宮口弘明'}],
    contents: [
      {label: '第1部', music: [0, 1, 2]},
      {label: '第2部', music: [3]},
      {label: 'アンコール', music: [4, 5]}
    ],
    data: [
      {audio: 0, title: 'オールド・マタドール', composer: 'D.ボブロビッツ'},
      {audio: 1, title: 'ウェールズの歌', composer: 'A.D.デイヴィス', movement: ['第1楽章', '第2楽章', '第3楽章']},
      {audio: 4, title: '九州民謡による組曲 「風の詩」', composer: '飯島俊成', movement: ['1. 幻想曲(ひえつき節による)', '2. 奇想曲(佐賀の田植唄による)', '3. 哀歌(福連木の子守唄による)', '4. 頌歌(筑後酒造唄による)']},
      {audio: 8, title: '組曲「展覧会の絵」', composer: 'M.ムソルグスキー'},
      {audio: 9, title: 'アンパリト・ロカ', composer: 'J.テキシドール'},
      {audio: 10, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第15回定期演奏会データ //////
//////////////////////////////////
    id: 'main015',
    type: 'main',
    title: '第15回定期演奏会',
    time: {
      timestamp: 1035019800,
      date: '2002年10月19日(土)',
      time: '18:30',
      label: '開演'
    },
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/15th.jpg',
    contents: [
      {label: 'プレコン', music: [0]},
      {label: '第1部', music: [1, 2, 3, 4]},
      {label: '第2部', music: [5, 6, 7]},
      {label: 'アンコール', music: [8, 9]}
    ],
    data: [
      {audio: 0, title: 'Overture For Percussion Ensemble', composer: 'J.ベック'},
      {audio: 1, title: 'ダンス・セレブレーション', composer: '建部知弘'},
      {audio: 2, title: '風紋', composer: '保科洋'},
      {audio: 3, title: '東北地方の民謡によるコラージュ', composer: '櫛田胅之扶'},
      {audio: 4, title: 'シンフォニック・バンドのためのパッサカリア', composer: '兼田敏'},
      {audio: 5, title: '組曲「クィーン・シティ」', composer: 'C.カーター', movement: ['I. ファンファーレと式典行進', 'II. 草の道', 'III. 収穫祭']},
      {audio: 8, title: 'シンフォニック・プレリュード', composer: 'A.リード'},
      {audio: 9, title: 'オセロ', composer: 'A.リード', movement: ['I. 前奏曲「ヴェニス」', 'II. 朝の音楽「キプロス」', 'III. オセロとデスデモナ', 'IV. 廷臣たちの入場', 'V. デスデモナの死、終曲']},
      {audio: 14, title: '式典のための交響曲「栄光をたたえて」', composer: '内藤淳一'},
      {audio: 15, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第16回定期演奏会データ //////
//////////////////////////////////
    id: 'main016',
    type: 'main',
    title: '第16回定期演奏会',
    time: {
      timestamp: 1052578800,
      date: '2003年5月11日(日)'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    contents: [
      {label: '第1部', music: [0, 1, 2, 3, 4]},
      {label: '第2部', music: [5, 6, 7, 8]},
      {label: 'アンコール', music: [9, 10]}
    ],
    data: [
      {audio: 0, video: 0, title: 'マナティ・リリック序曲', composer: 'R.シェルドン'},
      {audio: 1, video: 1, title: '穏やかな雨', composer: 'R.W.スミス'},
      {audio: 2, video: 2, title: 'ガリバー旅行記', composer: 'B.アッペルモント', movement: ['I. リリパット', 'II. ブロブディングナグ', 'III. ラピュータ', 'IV. フィヌム']},
      {audio: 6, video: 6, title: '海の歌', composer: 'R.ミッチェル'},
      {audio: 7, video: 7, title: '喜歌劇「メリー・ウィドウ」セレクション', composer: 'F.レハール'},
      {audio: 8, video: 8, title: 'イギリス民謡による行進曲', composer: '高橋宏樹'},
      {audio: 9, video: 9, title: '行進曲「虹色の風」', composer: '松尾善雄'},
      {audio: 10, video: 10, title: 'マーチ「ベスト・フレンド」', composer: '松浦伸吾'},
      {audio: 11, video: 11, title: '「GR」より シンフォニック・セレクション', composer: '天野正道'},
      {audio: 12, video: 12, title: 'オンブラ・マイ・フ', composer: 'G.F.ヘンデル'},
      {audio: 13, video: 13, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第17回定期演奏会データ //////
//////////////////////////////////
    id: 'main017',
    type: 'main',
    title: '第17回定期演奏会',
    time: {
      timestamp: 1084078800,
      date: '2004年5月9日(日)',
      time: '14:00',
      label: '開演'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    poster: 'https://winds-n.com/image/poster/main/17th.jpg',
    conductor: [{name: '河本隆吉'}],
    guest: [{name: '池浦美咲', instrument: 'ソプラノ'}],
    contents: [
      {label: 'プレコン', music: [0]},
      {label: '第1部', music: [1, 2, 3, 4, 5]},
      {label: '第2部', music: [6, 7, 8, 9, 10]},
      {label: 'アンコール', music: [11, 12]}
    ],
    data: [
      {audio: 0, video: 0, title: 'オレカマ', composer: '千波清彦'},
      {audio: 1, video: 1, title: '威風堂々第1番', composer: 'E.エルガー'},
      {audio: 2, video: 2, title: 'イギリス民謡組曲', composer: 'R.ヴォーン=ウィリアムズ', movement: ['I. 行進曲「日曜日で17歳」', 'II. 間奏曲「マイ・ポニー・ボーイ」', 'III. 行進曲「サマーセットの民謡」']},
      {audio: 5, video: 3, title: '歌劇「ジャンニ・スキッキ」より 私のお父さん', composer: 'G.プッチーニ'},
      {audio: 6, video: 4, title: '組曲「ペール・ギュント」より ソルヴェイグの歌', composer: 'E.グリーグ'},
      {audio: 7, video: 5, title: 'フニクリ・フニクラ狂詩曲', composer: 'L.デンツァ'},
      {audio: 8, video: 6, title: '吹奏楽のための「風之舞」', composer: '福田洋介'},
      {audio: 9, video: 7, title: 'エアーズ', composer: '田嶋勉'},
      {audio: 10, video: 8, title: '祈りの旅', composer: '北爪道夫'},
      {audio: 11, video: 9, title: '船乗りと海の歌《海の男たちの歌》', composer: 'R.W.スミス'},
      {audio: 12, video: 10, title: '吹奏楽のための交響的印象「海響」', composer: '和田薫'},
      {audio: 13, video: 11, title: 'アメージング・グレイス', add: ['賛美歌']},
      {audio: 14, video: 12, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第18回定期演奏会データ //////
//////////////////////////////////
    id: 'main018',
    type: 'main',
    title: '第18回定期演奏会',
    time: {
      timestamp: 1116133200,
      date: '2005年5月15日(日)',
      time: '14:00',
      label: '開演'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    poster: 'https://winds-n.com/image/poster/main/18th.jpg',
    conductor: [{name: '河本隆吉'}],
    contents: [
      {label: 'プレコン', music: [0, 1, 2]},
      {label: '第1部', music: [3, 4, 5, 6]},
      {label: '第2部', music: [7, 8, 9, 10, 11, 12]},
      {label: 'アンコール', music: [13, 14, 15]}
    ],
    data: [
      {audio: 0, video: 0, title: 'バケツ'},
      {audio: 1, video: 1, title: '竹豊で東京バンブーボーイズ', composer: '千波清彦'},
      {audio: 2, video: 2, title: 'リトルシーゴングス', composer: 'G.ファー'},
      {audio: 3, video: 3, title: 'セドナ', composer: 'S.ライニキー'},
      {audio: 4, video: 4, title: 'バビロン川のほとりで', composer: 'E.ハックビー'},
      {audio: 5, video: 5, title: 'マスク', composer: 'W.F.マクベス'},
      {audio: 6, video: 6, title: '組曲「道化師」より', composer: 'D.カバレフスキー', movement: ['I. プロローグ', 'II. 道化師のギャロップ', 'V. パントマイム', 'VII. 小さな抒情的シーン', 'X. エピローグ']},
      {audio: 11, video: 11, title: 'パクス・ロマーナ', composer: '松尾善雄'},
      {audio: 12, video: 12, title: 'マーチ「春風」', composer: '南俊明'},
      {audio: 13, video: 13, title: 'ストリート・パフォーマーズ・マーチ', composer: '高橋宏樹'},
      {audio: 14, video: 14, title: 'サンライズマーチ', composer: '佐藤俊介'},
      {audio: 15, video: 15, title: '元禄', composer: '櫛田胅之扶'},
      {audio: 16, video: 16, title: '交響詩「スパルタクス」', composer: 'J.ヴァンデルロースト'},
      {audio: 17, video: 17, title: 'MAGIC SLIDES', composer: 'W.ラセロムズ'},
      {audio: 18, video: 18, title: 'アメージング・グレイス', add: ['賛美歌']},
      {audio: 19, video: 19, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第19回定期演奏会データ //////
//////////////////////////////////
    id: 'main019',
    type: 'main',
    title: '第19回定期演奏会',
    time: {
      timestamp: 1147582800,
      date: '2006年5月14日(日)',
      time: '14:00',
      label: '開演'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/19th.jpg',
    contents: [
      {label: 'プレコン', music: [0, 1]},
      {label: '第1部', music: [2, 3, 4, 5, 6, 7]},
      {label: '第2部', music: [8, 9, 10, 11]},
      {label: 'アンコール', music: [12, 13, 14]}
    ],
    data: [
      {audio: 0, video: 0, title: 'Fanfare for Tambourines'},
      {audio: 1, video: 1, title: 'You Just Wait'},
      {audio: 2, video: 2, title: 'シンコペーテッド・マーチ「明日に向って」', composer: '岩井直溥'},
      {audio: 3, video: 3, title: '架空の伝説のための前奏曲', composer: '山内雅弘'},
      {audio: 4, video: 4, title: '吹奏楽のための一章', composer: '堀内俊男'},
      {audio: 5, video: 5, title: 'パルセイション', composer: '木下牧子'},
      {audio: 6, video: 6, title: '海へ...吹奏楽の為に', composer: '三澤慶'},
      {audio: 7, video: 7, title: '組曲「惑星」より 木星', composer: 'G.ホルスト'},
      {audio: 8, video: 8, title: 'ミュージック・メーカーズ', composer: 'A.リード'},
      {audio: 9, video: 9, title: '序曲インペラトリクス', composer: 'A.リード'},
      {audio: 10, video: 10, title: 'グリーンスリーブズ', composer: 'イギリス民謡', arranger: 'A.リード'},
      {audio: 11, video: 11, title: 'エルサレム讃歌', composer: 'A.リード'},
      {audio: 12, video: 12, title: '歌劇「ラ・ボエーム」より ムゼッタの踊り', composer: 'G.プッチーニ'},
      {audio: 13, video: 13, title: '歌劇「トゥーランドット」より 誰も寝てはならぬ', composer: 'G.プッチーニ'},
      {audio: 14, video: 14, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第20回定期演奏会データ //////
//////////////////////////////////
    id: 'main020',
    type: 'main',
    title: '第20回定期演奏会',
    time: {
      timestamp: 1179032400,
      date: '2007年5月13日(日)',
      time: '14:00',
      label: '開演'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/20th.jpg',
    contents: [
      {label: 'ロビコン', music: [0, 1, 2]},
      {label: 'プレコン', music: [3, 4]},
      {label: '第1部', music: [5, 6, 7]},
      {label: '第2部', music: [8, 9, 10, 11, 12]},
      {label: '第3部', music: [13, 14]},
      {label: 'アンコール', music: [15, 16, 17]}
    ],
    data: [
      {audio: 0, video: 0, title: 'エンターテイナー', composer: 'S.ジョプリン'},
      {audio: 1, video: 1, title: 'ロンドンデリー・エアー', composer: 'アイルランド民謡'},
      {audio: 2, video: 2, title: 'バーナムとベイリーのお気に入り', composer: 'K.キング'},
      {audio: 3, video: 3, title: '千里馬'},
      {audio: 4, video: 4, title: '族'},
      {audio: 5, video: 5, title: '喜歌劇「軽騎兵」序曲', composer: 'F.スッペ'},
      {audio: 6, video: 6, title: '亡き王女のためのパヴァーヌ', composer: 'M.ラヴェル'},
      {audio: 7, video: 7, title: '交響組曲「風の谷のナウシカ」3章', composer: '久石譲'},
      {audio: 8, video: 8, title: 'ピッコロマーチ', composer: '田嶋勉'},
      {audio: 9, video: 9, title: 'コンサート・マーチ「光と風の通り道」', composer: '栗栖健一'},
      {audio: 10, video: 10, title: '憧れの街', composer: '南俊明'},
      {audio: 11, video: 11, title: 'マーチ「ブルースカイ」', composer: '高木登古'},
      {audio: 12, video: 12, title: 'ナジム・アラビー', composer: '松尾善雄'},
      {audio: 13, video: 13, title: 'アルメニアン・ダンス・パートI', composer: 'A.リード'},
      {audio: 14, video: 14, title: 'アルメニアン・ダンス・パートII', composer: 'A.リード'},
      {audio: 15, video: 15, title: '狩人の合唱', composer: 'C.M.ウェーバー'},
      {audio: 16, video: 16, title: 'オン・ブラ・マイ・フ', composer: 'G.ヘンデル'},
      {audio: 17, video: 17, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第21回定期演奏会データ //////
//////////////////////////////////
    id: 'main021',
    type: 'main',
    title: '第21回定期演奏会',
    time: {
      timestamp: 1209913200,
      date: '2008年5月5日(日)',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    contents: [
      {label: 'ロビコン', music: [0, 1]},
      {label: 'プレコン', music: [2, 3]},
      {label: '第1部', music: [4, 5, 6, 7, 8]},
      {label: '第2部', music: [9, 10]},
      {label: 'アンコール', music: [11, 12]}
    ],
    data: [
      {audio: 0, video: 0, title: 'パワー', composer: 'J.スティーブンス'},
      {audio: 1, video: 1, title: '42 Street', composer: 'H.ワーレン'},
      {audio: 2, video: 2, title: 'Higgledy-Piggledy', composer: '本多俊之'},
      {audio: 3, video: 3, title: 'Saxophone ParadiseよりII, III', composer: '本多俊之'},
      {audio: 4, video: 4, title: 'ブライアンの休日', composer: '内藤淳一', add: ['2008年度全日本吹奏楽コンクール課題曲より課題曲I']},
      {audio: 5, video: 5, title: 'マーチ晴天の風', composer: '糸谷良', add: ['2008年度全日本吹奏楽コンクール課題曲より課題曲II']},
      {audio: 6, video: 6, title: '天馬の道～吹奏楽の為に～', composer: '片岡寛晶', add: ['2008年度全日本吹奏楽コンクール課題曲より課題曲IV']},
      {audio: 7, video: 7, title: '吹奏楽の為の天使ミカエルの嘆き', composer: '藤田玄播'},
      {audio: 8, video: 8, title: '交響組曲「もののけ姫」3章', composer: '久石譲', movement: ['I. アシタカせっ記', 'II. TA・TA・RI・GAMI', 'III. もののけ姫']},
      {audio: 9, video: 9, title: '狂詩曲「スペイン」', composer: 'E.シャブリエ', arranger: '河本隆吉'},
      {audio: 10, video: 10, title: 'バレエ組曲「シバの女王ベルキス」', composer: 'O.レスピーギ', arranger: '河本隆吉', movement: ['I. ソロモンの夢', 'II. 夜明けのベルキスの踊り', 'III. 戦いの踊り', 'IV. 狂宴の踊り']},
      {audio: 11, video: 11, title: 'G線上のアリア', composer: 'J.S.バッハ'},
      {audio: 12, video: 12, title: 'ブロックM', composer: 'J.H.ビリック'},
    ]
  },
  {
//////////////////////////////////
////// 第22回定期演奏会データ //////
//////////////////////////////////
    id: 'main022',
    type: 'main',
    title: '第22回定期演奏会',
    time: {
      timestamp: 1255237200,
      date: '2009年10月11日(日)',
      time: '14:00',
      label: '開演'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/22nd.jpg',
    contents: [
      {label: 'プレコン', music: [0, 1, 2]},
      {label: '第1部', music: [3, 4, 5, 6]},
      {label: '第2部', music: [7]},
      {label: 'アンコール', music: [8, 9]}
    ],
    data: [
      {audio: 0, video: 0, title: 'プレコン(不明)'},
      {audio: 1, video: 1, title: 'プレコン(不明)'},
      {audio: 2, video: 2, title: 'プレコン(不明)'},
      {audio: 3, video: 3, title: 'ポップス描写曲「メイン・ストリートで」', composer: '岩井直溥'},
      {audio: 4, video: 4, title: '「魔女の宅急便」セレクション', composer: '久石譲', arranger: '森田一浩', add: ['《海の見える街～仕事はじめ～傷心のキキ～突風～旅立ち》']},
      {audio: 5, video: 5, title: '星の船', composer: '西邑由記子'},
      {audio: 6, video: 6, title: 'リバーダンス', composer: 'B.ウィーラン', arranger: 'C.ストロンメン', movement: ['I. 太陽を巡るリール', 'II. 心の叫び', 'III. 落雷', 'IV. リバーダンス・ファイナル']},
      {audio: 7, video: 7, title: '世俗カンタータ「カルミナ・ブラーナ」', composer: 'C.オルフ', arranger: 'J.クランス', movement: ['I. おお、運命の女神よ', 'II. 運命に傷つけられ', 'III. それ、ごらん!', 'IV. 踊り', 'V. 森は光り輝き', 'VI. たとえこの世界がみな', 'VII. 愛の神のそこかしこ…', 'VIII. 我は大修道院長様', 'IX. 酒場にいるときは', 'X. 天秤に心をかけて', 'XI. いとしの貴方', 'XII. アヴェ、最高に優美な女よ', 'XIII. おお、運命の女神よ']},
      {audio: 8, video: 8, title: 'NHK大河ドラマ「天地人」オープニングテーマ', composer: '大島ミチル'},
      {audio: 9, video: 9, title: 'ブロックM', composer: 'J.H.ビリック'},
    ]
  }, {
//////////////////////////////////
////// 第23回定期演奏会データ //////
//////////////////////////////////
    id: 'main023',
    type: 'main',
    title: '第23回定期演奏会',
    time: {
      timestamp: 1286686800,
      date: '2010年10月10日(日)',
      time: '14:00',
      label: '開演'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/23rd.jpg',
    contents: [
      {label: '第1部', music: [0, 1, 2, 3]},
      {label: '第2部', music: [4, 5]},
      {label: 'アンコール', music: [6, 7]}      
    ],
    data: [
      {audio: 0, video: 0, title: 'ミッドウェイ・マーチ', composer: 'J.ウィリアムズ', arranger: 'J.カーナウ'},
      {audio: 1, video: 1, title: '「千と千尋の神隠し」ハイライト', composer: '久石譲', arranger: '遠藤幸夫', add: ['あの夏へ～底なし穴～竜の少年～仕事はつらいぜ～ふたたび～帰る日']},
      {audio: 2, video: 2, title: 'バリ・ラプソディ《遺作初演》', composer: '川上秀則'},
      {audio: 3, video: 3, title: '大地と水と火と空の歌', composer: 'R.W.スミス'},
      {audio: 4, video: 4, title: '歌劇「トゥーランドット」より', composer: 'G.プッチーニ', arranger: '石津谷治法', add: ['あなたの出した3つの謎を～砥石よ回れ～この宮殿の中で～我らが皇帝陛下万歳']},
      {audio: 5, video: 5, title: '「第六の幸運をもたらす宿」～映画音楽による組曲', composer: 'M.アーノルド', arranger: '瀬尾宗利', movement: ['I. ロンドン・プレリュード', 'II. ロマンティック・インタリュード', 'III. ハッピー・エンディング']},
      {audio: 6, video: 6, title: 'アメージング・グレイス', add: ['賛美歌']},
      {audio: 7, video: 7, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第24回定期演奏会データ //////
//////////////////////////////////
    id: 'main024',
    type: 'main',
    title: '第24回定期演奏会',
    time: {
      timestamp: 1317531600,
      date: '2011年10月2日(日)',
      time: '14:00',
      label: '開演'
    },
    place: ['長岡リリックホール', 'シアター'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/24th.jpg',
    contents: [
      {label: '第1部', music: [0, 1, 2, 3]},
      {label: '第2部', music: [4, 5]},
      {label: 'アンコール', music: [6, 7, 8]},
    ],
    data: [
      {audio: 0, video: 0, title: '行進曲「フローレンティーナ」', composer: 'J.フチーク'},
      {audio: 1, video: 1, title: 'ブラジル: セレモニー、ソング・アンド・ダンス', composer: 'R.W.スミス'},
      {audio: 2, video: 2, title: '「ラピュタ」～キャッスル・イン・ザ・スカイ～', composer: '久石譲', arranger: '森田一浩'},
      {audio: 3, video: 3, title: '栄光への脱出', composer: 'E.ゴールド', arranger: 'A.リード'},
      {audio: 4, video: 4, title: 'ハイランド讃歌組曲', composer: 'P.スパーク', movement: ['第1楽章 アンドロス城', '第2楽章 アラデール', '第3楽章 ダンドネル']},
      {audio: 5, video: 5, title: '交響曲第4番より第4楽章', composer: 'P.I.チャイコフスキー', arranger: '宮口弘明'},
      {audio: 6, video: 6, title: '陽はまた昇る', composer: 'P.スパーク'},
      {audio: 7, video: 7, title: 'バリトン吹きの休日', composer: 'L.アンダーソン'},
      {audio: 8, video: 8, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  },{
//////////////////////////////////
////// 第25回定期演奏会データ //////
//////////////////////////////////
    id: 'main025',
    type: 'main',
    title: '第25回定期演奏会',
    time: {
      timestamp: 1349586000,
      date: '2012年10月7日(日)',
      time: '14:00',
      label: '開演',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster : 'https://winds-n.com/image/poster/main/25th.jpg',
    contents: [
      {label: 'プレコン', music: [0]},
      {label: '第1部', music: [1, 2, 3, 4]},
      {label: '第2部', music: [5]},
      {label: '第3部', music: [6, 7]},
      {label: 'アンコール', music: [8, 9]}
    ],
    data: [
      {audio: 0, video: 0, title: '情熱大陸', composer: '葉加瀬太郎'},
      {audio: 1, video: 1, title: 'ナヴァル・ブルー', composer: '真島俊夫'},
      {audio: 2, video: 2, title: '吹奏楽のための組曲第2番', composer: 'G.ホルスト', movement: ['第1楽章 マーチ', '第2楽章 無言歌', '第3楽章 鍛冶屋の歌', '第4楽章 ダーガソンによる幻想曲']},
      {audio: 3, video: 3, title: 'ムービング・オン', composer: '川上哲夫'},
      {audio: 4, video: 4, title: 'ウィークエンド・イン・ニューヨーク', composer: 'P.スパーク'},
      {audio: 5, video: 5, title: 'ボレロ', composer: 'J.M.ラヴェル'},
      {audio: 6, video: 6, title: '交響的序曲', composer: 'J.C.バーンズ'},
      {audio: 7, video: 7, title: 'アイーダ', composer: 'G.ヴェルディ'},
      {audio: 8, video: 8, title: 'ソング・フォー・ジャパン', composer: 'S.フェルヘルスト'},
      {audio: 9, video: 9, title: 'ブロックM', composer: 'J.H.ビリック'}
    ],
  }, {
//////////////////////////////////
////// 第26回定期演奏会データ //////
//////////////////////////////////
    id: 'main026',
    type: 'main',
    title: '第26回定期演奏会',
    time: {
      timestamp: 1381640400,
      date: '2013年10月13日(日)',
      time: '14:00',
      label: '開演'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/26th.jpg',
    contents: [
      {label: 'プレコン', music: [0, 1]},
      {label: '第1部', music: [2, 3, 4]},
      {label: '第2部', music: [5]},
      {label: 'アンコール', music: [6, 7]}
    ],
    data: [
      {audio: 0, video: 0, title: 'Somewhere Out There', composer: 'J.ホーナー & B.マン'},
      {audio: 1, video: 1, title: 'ロシュフォールの恋人たちより双子の姉妹たち', composer: 'M.ルグラン'},
      {audio: 2, video: 2, title: 'アルヴァマー序曲', composer: 'J.バーンズ'},
      {audio: 3, video: 3, title: 'ラシーヌ讃歌', composer: 'G.フォーレ'},
      {audio: 4, video: 4, title: 'イーストコーストの風景', composer: 'N.ヘス', movement: ['シェルター島', 'キャッツキル山地', 'ニューヨーク']},
      {audio: 7, video: 5, title: 'ローマの祭', composer: 'O.レスピーギ', movement: ['チルチェンセス', '五十年祭', '十月祭', '主顕祭']},
      {audio: 8, video: 6, title: '羊たちは安らかに草を食み', composer: 'J.S.バッハ'},
      {audio: 9, video: 7, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第27回定期演奏会データ //////
//////////////////////////////////
    id: 'main027',
    type: 'main',
    title: '第27回定期演奏会',
    time: {
      timestamp: 1413090000,
      date: '2014年10月12日(日)',
      time: '14:00',
      label: '開演',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/27th.jpg',
    contents: [
      {label: 'プレコン', music: [0, 1]},
      {label: '第1部', music: [2, 3, 4]},
      {label: '第2部', music: [5, 6]},
      {label: 'アンコール', music: [7, 8, 9]}
    ],
    data: [
      {audio: 0, video: 0, title: 'スペイン', composer: 'C.コリア', arranger: '今井優太'},
      {audio: 1, video: 1, title: 'リバーダンス', composer: 'B.ウィーラン', arranger: '大塚やよい'},
      {audio: 2, video: 2, title: 'ハンティンドン・セレブレーション', composer: 'P.スパーク'},
      {audio: 3, video: 3, title: 'ノーマン・ロックウェル組曲', composer: '広瀬勇人', movement: ['I. 婚姻届', 'II. シャッフルトンのバーバーショップ', 'III. クリスマス・ホームカミング']},
      {audio: 4, video: 4, title: 'エル・カミーノ・レアル', composer: 'A.リード'},
      {audio: 5, video: 5, title: 'ファンファーレ', composer: '鋒山 亘'},
      {audio: 6, video: 6, title: '火の鳥 1919年版', composer: 'I.ストラヴィンスキー', movement: ['I. 序奏', 'II. 火の鳥の踊り', 'III. 火の鳥のヴァリエーション', 'IV. 王女たちのロンド', 'V. 魔王カスチェイの凶悪な踊り', 'VI. 子守歌', 'VII. 終曲']},
      {audio: 10, video: 7, title: 'メリーゴーランド', composer: 'P.スパーク'},
      {audio: 11, video: 8, title: '美しきドゥーン川の岸辺', composer: 'P.グレンジャー'},
      {audio: 12, video: 9, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第28回定期演奏会データ //////
//////////////////////////////////
    id: 'main028',
    type: 'main',
    title: '第28回定期演奏会',
    time: {
      timestamp: 1444539600,
      date: '2015年10月11日(日)',
      time: '14:00',
      label: '開演'
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/28th.jpg',
    contents: [
      {label: 'ロビコン', music: [0, 1]},
      {label: '第1部', music: [2, 3, 4, 5]},
      {label: '第2部', music: [6, 7]},
      {label: 'アンコール', music: [8, 9, 10]}
    ],
    data: [
      {audio: 0, video: 0, title: '愛を見つけた場所', composer: '奥華子'},
      {audio: 1, video: 1, title: 'DREAM SOLISTER', composer: '加藤裕介'},
      {audio: 2, video: 2, title: 'グランドマーチ', composer: '小長谷宗一'},
      {audio: 3, video: 3, title: 'ラプソディック・エピソード', composer: 'C.カーター'},
      {audio: 4, video: 4, title: 'モーンダーレンの風景', composer: 'P.スパーク'},
      {audio: 5, video: 5, title: 'シー・オブ・ウィズダム～知恵を持つ海～', composer: '清水大輔'},
      {audio: 6, video: 6, title: '音楽祭のプレリュード', composer: 'A.リード'},
      {audio: 7, video: 7, title: '交響詩「モンタニャールの詩」', composer: 'J.ヴァンデルロースト'},
      {audio: 8, video: 8, title: 'プスタより第2楽章', composer: 'J.ヴァンデルロースト'},
      {audio: 9, video: 9, title: '花は咲く', composer: '菅野よう子'},
      {audio: 10, video: 10, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第29回定期演奏会データ //////
//////////////////////////////////
    id: 'main029',
    type: 'main',
    title: '第29回定期演奏会',
    time: {
      timestamp: 1475989200,
      date: '2016年10月9日(日)',
      time: '14:00',
      label: '開演',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/29th.jpg',
    contents: [
      {label: 'ロビコン', music: [0, 1]},
      {label: '第1部', music: [2, 3, 4, 5, 6]},
      {label: '第2部', music: [7, 8, 9]},
      {label: 'アンコール', music: [10, 11, 12]}
    ],
    data: [
      {audio: 0, video: 0, title: '展覧会の絵よりプロムナード', composer: 'M.ムソルグスキー', arranger: '石毛里佳'},
      {audio: 1, video: 1, title: 'DREAM SOLISTER', composer: '加藤裕介'},
      {audio: 2, video: 2, title: '鷲の舞うところ', composer: 'S.ライニキー'},
      {audio: 3, video: 3, title: 'さくらのうた', composer: '福田洋介'},
      {audio: 4, video: 4, title: '丘の上のレイラ', composer: '星出尚志'},
      {audio: 5, video: 5, title: 'スクーティン・オン・ハードロック', composer: 'D.R.ホルジンガー'},
      {audio: 6, video: 6, title: '斐伊川に流るるクシナダ姫の涙', composer: '樽屋雅徳'},
      {audio: 7, video: 7, title: '悪魔の踊り', composer: 'J.ヘルメスベルガー'},
      {audio: 8, video: 8, title: '吹奏楽のための第一組曲', composer: 'G.ホルスト', movement: ['第1楽章 シャコンヌ', '第2楽章 間奏曲', '第3楽章 マーチ']},
      {audio: 11, video: 9, title: '「アルプス交響曲」より', composer: 'R.シュトラウス', arranger: '河本隆吉'},
      {audio: 12, video: 10, title: 'メリーゴーランド', composer: 'P.スパーク'},
      {audio: 13, video: 11, title: '新日本紀行', composer: '冨田勲'},
      {audio: 14, video: 12, title: 'ブロックM', composer: 'J.H.ビリック'},
    ]
  }, {
//////////////////////////////////
////// 第30回定期演奏会データ //////
//////////////////////////////////
    id: 'main030',
    type: 'main',
    title: '第30回定期演奏会',
    time: {
      timestamp: 1507438800,
      date: '2017年10月8日(日)',
      time: '14:00',
      label: '開演',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    guest: [{name: '田端直美', instrument: 'サクソフォン', url: 'http://shion.jp/member/p/list/', blog: 'https://sns.emtg.jp/shion/iXjuraZCbM/mypage', belong: 'オオサカ・シオン・ウインドオーケストラ'}],
    poster: 'https://winds-n.com/image/poster/main/30th.jpg',
    guide: 'https://winds-n.com/30thconcert',
    contents: [
      {label: 'プレコン', music: [0]},
      {label: '第1部', music: [1, 2, 3, 4]},
      {label: '第2部', music: [5, 6, 7]},
      {label: 'アンコール', music: [8, 9, 10]},
    ],
    data: [
      {audio: 0, video: 0, title: 'オレカマ', composer: '仙波清彦'},
      {audio: 1, video: 1, title: 'ヴィヴァ・ムジカ！', composer: 'A.リード'},
      {audio: 2, video: 2, title: 'アルト・サクソフォンのためのファンタジア', composer: 'C.T.スミス'},
      {audio: 3, video: 3, title: 'シーガル～アルトサクソフォンと吹奏楽のためのバラード', composer: '真島俊夫'},
      {audio: 4, video: 4, title: 'オリエント急行', composer: 'P.スパーク'},
      {audio: 5, video: 5, title: 'スター・パズル・マーチ', composer: '小長谷宗一'},
      {audio: 6, video: 6, title: 'ウェールズの歌', composer: 'A.デイヴィス'},
      {audio: 7, video: 7, title: 'バレエ音楽「三角帽子」第二組曲', composer: 'M.ファリャ', movement: ['I. 近所の人々の踊り', 'II. 粉屋の踊り', 'III. 終幕の踊り']},
      {audio: 8, video: 8, title: 'Nimrod', composer: 'E.エルガー'},
      {audio: 9, video: 9, title: '青春の輝き', composer: 'R.カーペンター他', arranger: '森田一浩'},
      {audio: 10, video: 10, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第31回定期演奏会データ //////
//////////////////////////////////
    id: 'main031',
    type: 'main',
    title: '第31回定期演奏会',
    time: {
      timestamp: 1538888400,
      date: '2018年10月7日(日)',
      time: '14:00',
      label: '開演',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/31st.jpg',
    guide: 'https://winds-n.com/31stconcert',
    contents: [
      {label: 'プレコン', music: [0]},
      {label: '第1部', music: [1, 2, 3, 4]},
      {label: '第2部', music: [5, 6]},
      {label: 'アンコール', music: [7, 8, 9]},
    ],
    data: [
      {audio: 0, video: 0, title: 'スリー・ラテン・ダンス', composer: 'P.ヒケティック', movement: ['1. Charanga di Xiomara Reyes', '2. Merengue Sempre di Aychem Sunal', '3. Dansa Latino di Maria del Real']},
      {audio: 3, video: 3, title: '三日月の舞', composer: '松田彬人'},
      {audio: 4, video: 4, title: '大草原の歌', composer: 'R.ミッチェル'},
      {audio: 5, video: 5, title: '喜びの音楽を奏でて！', composer: 'J.スウェアリンジェン'},
      {audio: 6, video: 6, title: 'ウィズ・ハート・アンド・ヴォイス', composer: 'D.ギリングハム'},
      {audio: 7, video: 7, title: 'アルセナール', composer: 'J.ヴァンデルロースト'},
      {audio: 8, video: 8, title: 'メキシコの祭り', composer: 'H.O.リード', movement: ['第1楽章 プレリュードとアズテック・ダンス', '第2楽章 ミサ', '第3楽章 カーニヴァル']},
      {audio: 11, video: 11, title: 'マーチ「潮煙」', composer: '上岡洋一'},
      {audio: 12, video: 12, title: '狂詩曲「ノヴェナ」', composer: 'J.スウェアリンジェン'},
      {audio: 13, video: 13, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第32回定期演奏会データ //////
//////////////////////////////////
    id: 'main032',
    type: 'main',
    title: '第32回定期演奏会',
    time: {
      timestamp: 1570942800,
      date: '2019年10月13日(日)',
      time: '14:00',
      label: '開演',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/32nd.jpg',
    guide: 'https://winds-n.com/32ndconcert',
    contents: [
      {label: 'ロビコン', music: [0]},
      {label: 'プレコン', music: [1]},
      {label: '第1部', music: [2, 3, 4]},
      {label: '第2部', music: [5, 6]},
      {label: 'アンコール', music: [7, 8]},
    ],
    data: [
      {title: '組曲「水上の音楽」より', composer: 'G.ヘンデル', movement: ['第1楽章', '第3楽章']},
      {title: 'ブエノスアイレスの春', composer: 'A.ピアソラ'},
      {title: '五月の風', composer: '真島俊夫'},
      {title: '詩的間奏曲', composer: 'J.バーンズ'},
      {title: '祝典のための音楽', composer: 'P.スパーク', movement: ['第1楽章 con brio', '第2楽章 andantino', '第3楽章 vivo']},
      {title: '「スラヴ舞曲」より', composer: 'A.ドヴォルザーク', arranger: '河本隆吉', movement: ['作品46 第2番', '作品72 第2番', '作品46 第8番']},
      {title: '富士山～北斎の版画に触発されて～', composer: '真島俊夫'},
      {title: '「あんたがたどこさ」の主題による幻想曲', composer: '林大地'},
      {title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第33回定期演奏会データ //////
//////////////////////////////////
    id: 'main033',
    type: 'main',
    title: '第33回定期演奏会',
    time: {
      timestamp: 1602392400,
      date: '2020年10月11日(日)',
      time: '14:00',
      label: '開演',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/33rd.jpg',
    guide: 'https://winds-n.com/33rdconcert',
    contents: [
      {label: '第1部', music: [0, 1, 2]},
      {label: 'アンコール', music: [3, 4]},
    ],
    data: [
      {audio: 0, title: '五月の風', composer: '真島俊夫'},
      {audio: 1, title: '詩的間奏曲', composer: 'J.バーンズ'},
      {audio: 2, title: '「スラヴ舞曲」より', composer: 'A.ドヴォルザーク', arranger: '河本隆吉', movement: ['作品46 第2番', '作品72 第2番', '作品46 第8番']},
      {audio: 5, title: 'ロマネスク', composer: 'J.スウェアリンジェン'},
      {audio: 6, title: 'ブロックM', composer: 'J.H.ビリック'}
    ]
  }, {
//////////////////////////////////
////// 第34回定期演奏会データ //////
//////////////////////////////////
    id: 'main034',
    type: 'main',
    title: '第34回定期演奏会',
    time: {
      timestamp: 1633842000,
      date: '2021年10月10日(日)',
      time: '14:00',
      label: '開演',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{name: '河本隆吉'}],
    poster: 'https://winds-n.com/image/poster/main/34th.jpg',
    guide: 'https://winds-n.com/34thconcert',
    contents: [
      {label: '第1部', music: [0, 1, 2]},
      {label: '第2部', music: [3, 4]},
      {label: 'アンコール', music: [5, 6]},
    ],
    data: [
      {audio: 0, title: 'コンサート・プレリュード', composer: 'P.スパーク'},
      {audio: 1, title: '星の船', composer: '西邑由記子'},
      {audio: 2, title: '春の猟犬', composer: 'A.リード'},
      {audio: 3, title: '富士山', composer: '真島俊夫'},
      {audio: 4, title: '『海』管弦楽のための3つの交響的素描より', composer: 'C.ドビュッシー', arranger: '河本隆吉', movement: ['第3楽章 「風と海との対話」']},
      {audio: 5, title: '木陰の散歩道', composer: 'E.F.ゴールドマン'},
      {audio: 6, title: 'ブロックM', composer: 'J.H.ビリック'},
    ]
  }
]

module.exports = {
  mainConcert
}