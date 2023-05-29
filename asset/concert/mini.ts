import type { MiniConcert } from '../types/types'

export const miniConcert: MiniConcert[] = [
  {
    ////////////////////////////////////
    ////// 2007年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2007',
    type: 'mini',
    title: '野外コンサート2007',
    time: {
      date: '2007年10月7日(日)',
      timestamp: 1191726000,
    },
    // place: ['千秋が原ふるさとの森', '野外音楽堂'],
    // conductor: [{name: '宮口弘明'}],
    contents: [
      { label: 'プレコン', music: [0, 1] },
      { label: 'プログラム', music: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
    ],
    data: [
      { audio: 0, title: 'ゆうがたクィンテット' },
      { audio: 1, title: 'いぬのおまわりさん' },
      { audio: 2, title: 'オーメンズ・オブ・ラブ' },
      { audio: 3, title: '名探偵コナン' },
      { audio: 4, title: 'アララの呪文' },
      { audio: 5, title: 'シンコペーテッドクロック' },
      { audio: 6, title: '童謡メドレー', arranger: '小島里美' },
      { audio: 7, title: 'マンボ No.5' },
      { audio: 8, title: '千の風になって' },
      { audio: 9, title: 'ディズニー・メドレー' },
      { audio: 10, title: 'ルパン三世' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2008年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2008',
    type: 'mini',
    title: '野外コンサート2008',
    time: {
      date: '2008年10月12日(日)',
      timestamp: 1223780400,
    },
    // place: ['千秋が原ふるさとの森', '野外音楽堂'],
    // conductor: [{name: '宮口弘明'}],
    contents: [{ label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7, 8] }],
    data: [
      { audio: 0, title: 'すきすきソング Brass Rock' },
      { audio: 1, title: '瞳～メインテーマ～' },
      { audio: 2, title: '君の瞳に恋してる' },
      { audio: 3, title: '赤とんぼ' },
      { audio: 4, title: '勇気100%' },
      { audio: 5, title: 'ちびまる子ちゃんメドレー' },
      { audio: 6, title: 'ジブリメドレー' },
      { audio: 7, title: 'サザンメドレー' },
      { audio: 8, title: '羞恥心' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2009年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2009',
    type: 'mini',
    title: '春のミニコンサート2009',
    time: {
      date: '2009年5月17日(日)',
      time: '12:00',
      label: '開演',
      timestamp: 1242529200,
    },
    place: ['千秋が原ふるさとの森', '野外音楽堂'],
    // conductor: [{name: '宮口弘明'}],
    contents: [
      { label: 'プレコン', music: [0, 1, 2] },
      { label: 'プログラム', music: [3, 4, 5, 6, 7, 8, 9, 10] },
      { label: 'アンコール', music: [11] },
    ],
    data: [
      { audio: 0, title: 'ルパン三世' },
      { audio: 1, title: 'ゴスペル・メドレー' },
      { audio: 2, title: '熱い・暑い・厚い・ラテン・メドレー' },
      { audio: 3, title: 'ヤッターマン Brass Rock', composer: '山本正之', arranger: '郷間幹男' },
      { audio: 4, title: 'ガムシャラな風になれ', composer: 'カナデフウビ', arranger: '建部知弘' },
      { audio: 5, title: 'NHK大河ドラマ「天地人」オープニングテーマ' },
      { audio: 6, title: '追憶のテーマ', composer: 'M.ハムリッシュ', arranger: '浦田健次郎' },
      { audio: 7, title: '四季折々の歌「童謡十二ヶ月」', arranger: '杉本幸一' },
      { audio: 8, title: 'きよしのズンドコ節', composer: '水森英夫', arranger: '小島里美' },
      { audio: 9, title: 'ブルー・バード', composer: '水野良樹', arranger: '本澤なおゆき' },
      { audio: 10, title: 'ジャパニーズ・グラフィティーVII ～キャンディーズ・メドレー～' },
      { audio: 11, title: 'ニホンノミカタ・ネバダカラキマシタ', composer: 'DJ OZMA', arranger: '山里佐和子' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2010年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2010',
    type: 'mini',
    title: '春のミニコンサート2010',
    time: {
      date: '2010年5月9日(日)',
      timestamp: 1273374000,
    },
    place: ['千秋が原ふるさとの森', '野外音楽堂'],
    conductor: [{ name: '宮口弘明' }],
    poster: 'https://winds-n.com/image/poster/mini/2010.jpg',
    contents: [{ label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7, 8] }],
    data: [
      { audio: 0, title: 'Someday (EXILE)' },
      { audio: 1, title: 'Dragon Soul (ドラゴンボール改 主題歌)' },
      { audio: 2, title: '夢をかなえてドラえもん' },
      { audio: 3, title: 'Clarinet Candy' },
      { audio: 4, title: 'ユー・レイズ・ミー・アップ(バンドとユーフォニアムのための)' },
      { audio: 5, title: 'ジャパニーズ・グラフィティXIV A・RA・SHI～Beautiful days' },
      { audio: 6, title: '故郷の空 in Swing' },
      { audio: 7, title: '名探偵コナン' },
      { audio: 8, title: 'Someday (EXILE)' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2011年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2011',
    type: 'mini',
    title: '春のミニコンサート2011',
    time: {
      date: '2011年5月22日(日)',
      timestamp: 1306033200,
    },
    place: ['千秋が原ふるさとの森', '野外音楽堂'],
    conductor: [{ name: '関矢忠志' }],
    poster: 'https://winds-n.com/image/poster/mini/2011.jpg',
    contents: [
      { label: 'JCKサクソフォンアンサンブル', music: [0, 1, 2] },
      { label: 'クラリネットアンサンブル', music: [3, 4] },
      { label: 'プログラム', music: [5, 6, 7, 8, 9, 10, 11, 12] },
      { label: 'アンコール', music: [13, 14] },
    ],
    data: [
      { audio: 0, title: "It's a small world" },
      { audio: 1, title: '美女と野獣' },
      { audio: 2, title: '星に願いを' },
      { audio: 3, title: 'バタフライ' },
      { audio: 4, title: 'チェリー' },
      { audio: 5, title: '勇気100%', composer: '馬飼野康二', arranger: '野崎雅久' },
      { audio: 6, title: '夢をかなえてドラえもん', composer: '黒須克彦', arranger: '本澤なおゆき' },
      { audio: 7, title: 'ありがとう', composer: '水野良樹', arranger: '小島里美' },
      { audio: 8, title: 'また君に恋してる', composer: '森正明' },
      { audio: 9, title: '青春の輝き', composer: 'R.カーペンター他', arranger: '森田一浩' },
      { audio: 10, title: 'アフリカン・シンフォニー', composer: 'V.マッコイ', arranger: '岩井直溥' },
      { audio: 11, title: 'ジュピター', composer: 'G.ホルスト' },
      { audio: 12, title: 'サザエさんアラカルト', composer: '筒美京平', arranger: '山里佐和子' },
      { audio: 13, title: '上を向いて歩こう', composer: '中村八大', arranger: '山下国俊' },
      { audio: 14, title: '勇気100%', composer: '馬飼野康二', arranger: '野崎雅久' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2012年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2012',
    type: 'mini',
    title: '春のミニコンサート2012',
    time: {
      date: '2012年5月20日(日)',
      timestamp: 1337482800,
    },
    place: ['千秋が原ふるさとの森', '野外音楽堂'],
    conductor: [{ name: '宮口弘明' }],
    poster: 'https://winds-n.com/image/poster/mini/2012.jpg',
    contents: [
      { label: 'プレコン', music: [0, 1] },
      { label: 'プログラム', music: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
      { label: 'アンコール', music: [11] },
    ],
    data: [
      { audio: 0, video: 0, title: 'アンパンマンメドレー' },
      { audio: 1, video: 1, title: '長崎は今日も雨だった' },
      { audio: 2, video: 2, title: 'ウィーアー！', composer: '田中公平', arranger: '山里佐和子' },
      { audio: 3, video: 3, title: 'ヘビーローテーション', composer: '山崎燿', arranger: '郷間幹男' },
      { audio: 4, video: 4, title: 'フライングゲット', composer: 'すみだしんや', arranger: '郷間幹男' },
      { audio: 5, video: 5, title: 'RISING SUN', composer: 'D.Thott他', arranger: '郷間幹男' },
      { audio: 6, video: 6, title: '全てをあなたに', composer: 'M.マッサー & G.ゴフィン', arranger: '森田一浩' },
      { audio: 7, video: 7, title: 'Dancing Queen', composer: 'B.アンダーソン他', arranger: '星出尚志' },
      { audio: 8, video: 8, title: '消臭力のうた', composer: '福井洋介', arranger: '長野雄行' },
      { audio: 9, video: 9, title: 'ひまわり', composer: '葉加瀬太郎', arranger: '郷間幹男' },
      { audio: 10, video: 10, title: 'Samba de Loves You', composer: '数原晋' },
      { audio: 11, video: 11, title: 'GIVE ME FIVE', composer: '笹渕大介', arranger: '郷間幹男' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2013年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2013',
    type: 'mini',
    title: '春のミニコンサート2013',
    time: {
      date: '2013年5月19日(日)',
      timestamp: 1368932400,
    },
    place: ['千秋が原ふるさとの森', '野外音楽堂'],
    conductor: [{ name: '宮口弘明' }],
    poster: 'https://winds-n.com/image/poster/mini/2013.jpg',
    contents: [
      { label: 'プレコン', music: [0] },
      { label: 'プログラム', music: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      { label: 'アンコール', music: [11] },
    ],
    data: [
      { audio: 0, video: 0, title: 'プレコン' },
      { audio: 1, video: 1, title: 'ゲバゲバ90分', composer: '宮川泰', arranger: '宮川彬良' },
      { audio: 2, video: 2, title: '夢をかなえてドラえもん', composer: '黒須克彦', arranger: '本澤なおゆき' },
      { audio: 3, video: 3, title: '女々しくて', composer: '鬼龍院翔', arranger: '木原塁' },
      { audio: 4, video: 4, title: "Let's go! スマイルプリキュア!", composer: '高取ヒデアキ', arranger: '佐藤丈治' },
      { audio: 5, video: 5, title: 'So long!', composer: '久次米真吾', arranger: '郷間幹男' },
      { audio: 6, video: 6, title: '名探偵コナン メインテーマ(Ver.1)', composer: '大野克夫', arranger: '宮川成治' },
      { audio: 7, video: 7, title: '黒いオルフェ', composer: 'L.ボンファ', arranger: '真島俊夫' },
      { audio: 8, video: 8, title: 'マジック', composer: '安藤まさひろ', arranger: '岩井直溥' },
      { audio: 9, video: 9, title: 'TV & シネマ・ヒッツ', composer: '佐藤直樹', arranger: '森田一浩' },
      { audio: 10, title: '勇気100%', composer: '馬飼野康二', arranger: '野崎雅久' },
      { audio: 11, title: '名探偵コナン メインテーマ(Ver.2)', composer: '大野克夫', arranger: '宮川成治' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2014年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2014',
    type: 'mini',
    title: '春のミニコンサート2014',
    time: {
      date: '2014年5月18日(日)',
      timestamp: 1400382000,
    },
    place: ['千秋が原ふるさとの森', '野外音楽堂'],
    conductor: [{ name: '植村昇' }],
    poster: 'https://winds-n.com/image/poster/mini/2014.jpg',
    contents: [
      { label: 'プレコン', music: [0] },
      { label: 'プログラム', music: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      { label: 'アンコール', music: [11, 12] },
    ],
    data: [
      { audio: 0, video: 0, title: 'ルパン三世のテーマ' },
      { audio: 1, video: 1, title: '夢をかなえてドラえもん', composer: '黒須克彦', arranger: '本澤なおゆき' },
      { audio: 2, video: 2, title: 'ひこうき雲', composer: '荒井由実', arranger: '郷間幹男' },
      { audio: 3, video: 3, title: 'アンパンマンのマーチ', composer: '三木たかし', arranger: '山下国俊' },
      { audio: 4, video: 4, title: '雨のち晴レルヤ', composer: '北川悠仁 & 佐藤和哉', arranger: '佐藤丈治' },
      { audio: 5, video: 5, title: 'サンバ・テンペラード', composer: '大野雄二', arranger: '金山徹' },
      { audio: 6, video: 6, title: '蛍', composer: '桑田佳祐', arranger: '郷間幹男' },
      { audio: 7, video: 7, title: 'レット・イット・ゴー', composer: 'K.A.ロペス & R.ロペス', arranger: '宮川成治' },
      { audio: 8, video: 8, title: 'セプテンバー(熱帯JAZZ楽団Ver.)', composer: 'M.ホワイト', arranger: '中路英明' },
      { audio: 9, video: 9, title: '恋するフォーチュンクッキー', composer: '伊藤心太郎', arranger: '郷間幹男' },
      { audio: 10, video: 10, title: 'アフリカン・シンフォニー', composer: 'V.マッコイ', arranger: '岩井直溥' },
      { audio: 11, video: 11, title: '名探偵コナン メインテーマ(Ver.1)', composer: '大野克夫', arranger: '宮川成治' },
      { audio: 12, video: 12, title: '恋するフォーチュンクッキー', composer: '伊藤心太郎', arranger: '郷間幹男' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2015年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2015',
    type: 'mini',
    title: '春のミニコンサート2015',
    time: {
      date: '2015年5月17日(日)',
      timestamp: 1431837000,
    },
    place: ['長岡リリックホール', 'ポケットステージ'],
    conductor: [{ name: '植村昇' }],
    poster: 'https://winds-n.com/image/poster/mini/2015.jpg',
    contents: [
      { label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      { label: 'アンコール', music: [11] },
    ],
    data: [
      { audio: 0, video: 0, title: '夢をかなえてドラえもん', composer: '黒須克彦', arranger: '本澤なおゆき' },
      { audio: 1, video: 1, title: '炎と森のカーニバル', composer: 'Fukase', arranger: '福田洋介' },
      { audio: 2, video: 2, title: '麦の歌', composer: '中島みゆき', arranger: '山里佐和子' },
      { audio: 3, video: 3, title: 'ジャパニーズ・グラフィティ X 時代劇絵巻', arranger: '星出尚志' },
      { audio: 4, video: 4, title: '76本のトロンボーン', composer: 'M.ウィルソン', arranger: '岩井直溥' },
      { audio: 5, video: 5, title: 'Story', composer: '2 Soul', arranger: '郷間幹男' },
      { audio: 6, video: 6, title: 'ようかい体操第一', composer: '菊谷知樹', arranger: '宮川成治' },
      { audio: 7, video: 7, title: '宝島', composer: '和泉宏隆', arranger: '真島俊夫' },
      { audio: 8, video: 8, title: '明日があるさ', composer: '中村八大', arranger: '山下国俊' },
      {
        audio: 9,
        video: 9,
        title: '情熱大陸コレクション',
        composer: '葉加瀬太郎',
        arranger: '石毛里佳',
        add: ['エトピリカ～情熱大陸'],
      },
      { audio: 10, video: 10, title: 'レット・イット・ゴー', composer: 'K.A.ロペス & R.ロペス', arranger: '宮川成治' },
      { audio: 11, video: 11, title: '名探偵コナン メインテーマ(Ver.1)', composer: '大野克夫', arranger: '宮川成治' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2016年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2016',
    type: 'mini',
    title: '春のミニコンサート2016',
    time: {
      date: '2016年5月14日(土)',
      timestamp: 1463202000,
    },
    place: ['長岡リリックホール', 'ポケットステージ'],
    conductor: [{ name: '植村昇' }],
    poster: 'https://winds-n.com/image/poster/mini/2016.jpg',
    contents: [
      { label: 'プレコン', music: [0] },
      { label: 'プログラム', music: [1, 2, 3, 4, 5, 6, 7, 8] },
      { label: 'アンコール', music: [9] },
    ],
    data: [
      { audio: 0, video: 0, title: '魔法つかいプリキュア' },
      { audio: 1, video: 1, title: 'In The Stone ～ Fantasy', arranger: '中路英明' },
      { audio: 2, video: 2, title: '夢をかなえてドラえもん', composer: '黒須克彦', arranger: '本澤なおゆき' },
      {
        audio: 3,
        video: 3,
        title: 'トロンボーンカルテットのための Sweet Memories',
        composer: '大村雅朗',
        arranger: '川嵜淳一',
      },
      { audio: 4, video: 4, title: '365日の紙飛行機', composer: '角野寿和 & 青葉紘季', arranger: '郷間幹男' },
      { audio: 5, video: 5, title: 'ルパン三世メドレー' },
      { audio: 6, video: 6, title: '海の声', composer: '島袋優', arranger: '宮川成治' },
      { audio: 7, video: 7, title: 'M.ルグランの世界', composer: 'M.ルグラン', arranger: '真島俊夫' },
      { audio: 8, video: 8, title: 'オーメンズ・オブ・ラブ', composer: '和泉宏隆', arranger: '真島俊夫' },
      { audio: 9, video: 9, title: '勇気100%', composer: '馬飼野康二', arranger: '野崎雅久' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2017年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2017',
    type: 'mini',
    title: '春のミニコンサート2017',
    time: {
      date: '2017年5月13日(土)',
      timestamp: 1494651600,
    },
    place: ['長岡リリックホール', '第一スタジオ'],
    conductor: [{ name: '今井優太' }],
    poster: 'https://winds-n.com/image/poster/mini/2017.png',
    guide: 'https://winds-n.com/mini2017',
    contents: [
      { label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { label: 'アンコール', music: [9, 10] },
    ],
    data: [
      { audio: 0, video: 0, title: '前前前世', composer: 'RADWINPS', arranger: '宮川成治' },
      { audio: 1, video: 1, title: '夢をかなえてドラえもん', composer: '黒須克彦', arranger: '本澤なおゆき' },
      { audio: 2, video: 2, title: '名探偵コナン メインテーマ(Ver.1)', composer: '大野克夫', arranger: '宮川成治' },
      { audio: 3, video: 3, title: 'ありがとう', composer: '水野良樹', arranger: '濱崎大吾' },
      { audio: 4, video: 4, title: '恋', composer: '星野源', arranger: '郷間幹男' },
      { audio: 5, video: 5, title: '花束を君に', composer: '宇多田ヒカル', arranger: '侘美秀俊' },
      { audio: 6, video: 6, title: 'トランペット吹きの休日', composer: 'L.アンダーソン' },
      { audio: 7, video: 7, title: 'ナイトバーズ', composer: 'SHAKATAK', arranger: '中川賢二' },
      {
        audio: 8,
        video: 8,
        title: 'ジャパニーズ・グラフィティーIV～弾厚作 作品集～',
        composer: '弾厚作',
        arranger: '磯崎敦博',
      },
      { audio: 9, video: 9, title: '勇気100％', composer: '馬飼野康二', arranger: '野崎雅久' },
      { audio: 10, video: 10, title: 'DREAM SOLISTER', composer: '加藤裕介', add: ['アニメ「響け!ユーフォニアム」OP'] },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2018年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2018',
    type: 'mini',
    title: '春のミニコンサート2018',
    time: {
      date: '2018年5月10日(土)',
      timestamp: 1525928400,
    },
    place: ['長岡リリックホール', '第一スタジオ'],
    conductor: [{ name: '今井優太' }],
    poster: 'https://winds-n.com/image/poster/mini/2018.png',
    guide: 'https://winds-n.com/mini2018',
    contents: [
      { label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { label: 'アンコール', music: [9, 10] },
    ],
    data: [
      { audio: 0, video: 0, title: 'セレブレイション', composer: 'R.E.ベル他', arranger: '森村献' },
      { audio: 1, video: 1, title: 'ダンシング・ヒーロー', composer: '荻野目洋子' },
      { audio: 2, video: 2, title: 'ひまわりの約束', composer: '秦基博', arranger: '西條太貴' },
      { audio: 3, video: 3, title: 'ムーンライト伝説', composer: '小諸鉄也', arranger: '小島里美' },
      { audio: 4, video: 4, title: 'やさしさに包まれたなら', composer: '荒井由実', arranger: '高橋宏樹' },
      { audio: 5, video: 5, title: 'ジャパニーズ・グラフィティXIX ドリフ', arranger: '星出尚志' },
      { audio: 6, video: 6, title: '若い広場', composer: '桑田佳祐', arranger: '郷間幹男' },
      {
        audio: 7,
        video: 7,
        title: 'オブラディ オブラダ',
        composer: 'J.レノン & P.マッカートニー',
        arranger: '岩井直溥',
      },
      { audio: 8, video: 8, title: '塔の上のラプンツェル・メドレー', composer: 'A.メンケン', arranger: '星出尚志' },
      { audio: 9, video: 9, title: '名探偵コナン メインテーマ(Ver.2)', composer: '大野克夫', arranger: '宮川成治' },
      { audio: 10, video: 10, title: 'ドラえもん', composer: '星野源' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2019年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2019',
    type: 'mini',
    title: '春のミニコンサート2019',
    time: {
      date: '2019年5月11日(土)',
      timestamp: 1557550800,
    },
    place: ['長岡リリックホール', 'ポケットステージ'],
    conductor: [{ name: '今井優太' }],
    poster: 'https://winds-n.com/image/poster/mini/2019.png',
    guide: 'https://winds-n.com/mini2019',
    contents: [
      { label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { label: 'アンコール', music: [9, 10] },
    ],
    data: [
      { audio: 0, video: 0, title: 'ディズニーセレブレーション' },
      { audio: 1, video: 1, title: '私のお気に入り', composer: '熱帯JAZZ楽団' },
      { audio: 2, video: 2, title: 'おどるポンポコリン' },
      { audio: 3, video: 3, title: '男の勲章' },
      { audio: 4, video: 4, title: 'Can You Celebrate?', composer: '安室奈美恵' },
      { audio: 5, video: 5, title: '恋するフォーチュンクッキー' },
      { audio: 6, video: 6, title: 'U.S.A.' },
      { audio: 7, video: 7, title: 'ど演歌えきすぷれす' },
      { audio: 8, video: 8, title: 'ジャパニーズ・グラフィティXII' },
      { audio: 9, video: 9, title: 'オーメンズ・オブ・ラブ' },
      { audio: 10, video: 10, title: 'アイデア', composer: '星野源' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2021年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2021',
    type: 'mini',
    title: '春のミニコンサート2021',
    time: {
      date: '2021年5月8日(土)',
      timestamp: 1620450000,
    },
    place: ['長岡リリックホール', 'ポケットステージ'],
    conductor: [{ name: '今井優太' }, { name: '髙橋亮' }],
    poster: 'https://winds-n.com/image/poster/mini/2021.png',
    guide: 'https://winds-n.com/mini2021',
    contents: [
      { label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7] },
      { label: 'アンコール', music: [8, 9] },
    ],
    data: [
      { audio: 0, title: 'Happiness', composer: '嵐' },
      { audio: 1, title: 'スペイン', composer: 'C.コリア', arranger: '熱帯JAZZ楽団' },
      { audio: 2, title: '炎', composer: 'LiSA' },
      {
        audio: 3,
        title: 'ディズニーヴィランズ・メドレー',
        composer: 'B.ヒーレー, B.ベーカー, M.ムソルグスキ, A.メンケン',
        arranger: '鈴木 英史',
      },
      { audio: 4, title: 'コンパス・オブ・ユア・ハート', composer: 'A.メンケン' },
      { audio: 5, title: 'Make you happy', composer: 'NiziU' },
      { audio: 6, title: '夜に駆ける', composer: 'YOASOBI' },
      { audio: 7, title: '「となりのトトロ」～コンサート・バンドのためのセレクション', composer: '後藤洋' },
      { audio: 8, title: '虹', composer: '菅田将暉' },
      { audio: 9, title: 'アフリカン・シンフォニー', composer: 'V.マッコイ' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2022年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2022',
    type: 'mini',
    title: '春のミニコンサート2022',
    time: {
      date: '2022年5月7日(土)',
      timestamp: 1651899600,
      time: '14:00',
    },
    place: ['長岡リリックホール', 'ポケットステージ'],
    conductor: [{ name: '今井優太' }, { name: '髙橋亮' }],
    poster: 'https://winds-n.com/image/poster/mini/2022.png',
    guide: 'https://winds-n.com/mini2022',
    contents: [
      { label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7] },
      { label: 'アンコール', music: [8, 9] },
    ],
    data: [
      { title: 'ドラゴンクエストより序曲', composer: 'すぎやまこういち' },
      { title: 'Dear Mr.Jones', arranger: '熱帯JAZZ楽団' },
      { title: 'ツバメ', composer: 'YOASOBI' },
      { title: 'ヒットソング・プレイバック90s' },
      { title: 'ディープパープルメドレー' },
      { title: 'アルデバラン', composer: 'AI' },
      { title: 'ルパン三世メドレー' },
      { title: 'ディズニーメドレーII' },
      { title: '白い恋人たち', composer: 'フランシス・レイ' },
      { title: 'マツケンサンバII', composer: '宮川彬良' },
    ],
  },
  {
    ////////////////////////////////////
    ////// 2023年春のミニコンサート //////
    ////////////////////////////////////
    id: 'mini2023',
    type: 'mini',
    title: '春のミニコンサート2023',
    time: {
      date: '2023年5月6日(土)',
      timestamp: 1683349200,
      time: '14:00',
    },
    place: ['長岡リリックホール', 'コンサートホール'],
    conductor: [{ name: '髙橋亮' }],
    poster: 'https://winds-n.com/image/poster/mini/2023.jpg',
    guide: 'https://winds-n.com/mini2023',
    contents: [
      { label: 'プログラム', music: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      { label: 'アンコール', music: [9, 10] },
    ],
    data: [
      { title: '『ポケットモンスター スカーレット・バイオレット』メインテーマ', arranger: '羽深由理' },
      { title: 'アンパンマンのマーチ', composer: '三木たかし', arranger: '山下国俊' },
      { title: 'ぼよよん行進曲', composer: '中西圭三', arranger: '郷間幹男' },
      { title: 'ジャンボリミッキー！', composer: 'Marco Marinangeli', arranger: '郷間幹男' },
      { title: 'ホール・ニュー・ワールド', composer: 'A.メンケン', arranger: '星出尚志' },
      {
        title: 'セレブレイション',
        composer:
          'Robert Earl Bell & Ronald Nathan Bell & George Melvin Brown & Robert Spike Mickens & Claydes Eugene Smith & Dennis Ronald Thomas & Earl Eugene Toon Jr & Eumir Deodato & James Warren Taylor',
        arranger: '森村 献 & 郷間幹男',
      },
      { title: 'フィール・ソー・グッド', composer: 'C.マンジョーネ', arranger: '岩井直溥' },
      { title: 'ミックスナッツ', composer: '藤原聡', arranger: '郷間幹男' },
      { title: 'お酒ソングコレクション〜酔奏楽のための〜', arranger: '辻峰拓' },
      { title: 'アルヴァマー序曲', composer: 'J.バーンズ' },
      { title: 'ジャンボリミッキー！', composer: 'Marco Marinangeli', arranger: '郷間幹男' },
    ],
  },
]
