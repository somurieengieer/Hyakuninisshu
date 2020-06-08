export class SongInfo {
  // !はnullではないという意味。初期化時にObject.assignで設定しているため!を付けないと初期化しろと怒られる
  public num!: number;
  public song!: string[];
  public singer!: string;
  public kimariji_kami!: string;
  public kimariji_shimo!: string;
  public song_hiragana?: string[];
  public path!: string;

  public constructor(songNumber: number) {
    Object.assign(this, allSongs.find(s => s.num === songNumber));
    Object.assign(this, allSongsHiragana.find(s => s.num === songNumber));
    const numStr = ('000' + songNumber).slice(-3);
    this.path = `${process.env.PUBLIC_URL}/songs/${numStr}番.m4a`;
  }

  public song_hiragana_shimo(): string {
    return this.song_hiragana?.slice(3, 5).join('') || ''
  }

  public songDisplay(): string {
    return this.song.join(' ')
  }
}

const allSongs = [
  {num: 0, song: ['難波津に', '咲くやこの花', '冬ごもり', '今を春べと', '咲くやこの花'], singer: '王仁博士', kimariji_kami: '', kimariji_shimo: ''},
  {
    num: 1,
    song: ['秋の田の', 'かりほの庵の', '苫をあらみ', 'わが衣手は', '露にぬれつつ'],
    singer: '天智天皇',
    kimariji_kami: 'あきの',
    kimariji_shimo: 'わがころもでは'
  },
  {
    num: 2,
    song: ['春すぎて', '夏来にけらし', '白妙の', '衣ほすてふ', '天の香具山'],
    singer: '持統天皇',
    kimariji_kami: 'はるす',
    kimariji_shimo: 'ころもほ'
  },
  {
    num: 3,
    song: ['あしびきの', '山鳥の尾の', 'しだり尾の', 'ながながし夜を', 'ひとりかも寝む'],
    singer: '柿本人麻呂',
    kimariji_kami: 'あし',
    kimariji_shimo: 'ながな'
  },
  {
    num: 4,
    song: ['田子の浦に', 'うち出でてみれば', '白妙の', '富士の高嶺に', '雪は降りつつ'],
    singer: '山部赤人',
    kimariji_kami: 'たご',
    kimariji_shimo: 'ふじ'
  },
  {
    num: 5,
    song: ['奥山に', '紅葉踏みわけ', '鳴く鹿の', '声きく時ぞ', '秋は悲しき'],
    singer: '猿丸大夫',
    kimariji_kami: 'おく',
    kimariji_shimo: 'こゑ'
  },
  {
    num: 6,
    song: ['かささぎの', '渡せる橋に', 'おく霜の', '白きをみれば', '夜ぞふけにける'],
    singer: '中納言家持',
    kimariji_kami: 'かさ',
    kimariji_shimo: 'しろ'
  },
  {
    num: 7,
    song: ['天の原', 'ふりさけ見れば', '春日なる', '三笠の山に', '出でし月かも'],
    singer: '安倍仲麿',
    kimariji_kami: 'あまの',
    kimariji_shimo: 'みかさ'
  },
  {
    num: 8,
    song: ['わが庵は', '都のたつみ', 'しかぞすむ', '世をうぢ山と', '人はいふなり'],
    singer: '喜撰法師',
    kimariji_kami: 'わがい',
    kimariji_shimo: 'よをう'
  },
  {
    num: 9,
    song: ['花の色は', 'うつりにけりな', 'いたづらに', 'わが身世にふる', 'ながめせしまに'],
    singer: '小野小町',
    kimariji_kami: 'はなの',
    kimariji_shimo: 'わがみよ'
  },
  {
    num: 10,
    song: ['これやこの', '行くも帰るも', '別れては', '知るも知らぬも', '逢坂の関'],
    singer: '蝉丸',
    kimariji_kami: 'これ',
    kimariji_shimo: 'しる'
  },
  {
    num: 11,
    song: ['わたの原', '八十島かけて', '漕ぎ出でぬと', '人には告げよ', '海人の釣舟'],
    singer: '参議篁',
    kimariji_kami: 'わたのはら　や',
    kimariji_shimo: 'ひとには'
  },
  {
    num: 12,
    song: ['天つ風', '雲の通ひ路', '吹き閉ぢよ', 'をとめの姿', 'しばしとどめむ'],
    singer: '僧正遍照',
    kimariji_kami: 'あまつ',
    kimariji_shimo: 'をと'
  },
  {
    num: 13,
    song: ['筑波嶺の', '峰より落つる', '男女川', '恋ぞつもりて', '淵となりぬる'],
    singer: '陽成院',
    kimariji_kami: 'つく',
    kimariji_shimo: 'こひぞ'
  },
  {
    num: 14,
    song: ['陸奥の', 'しのぶもぢずり', '誰ゆゑに', '乱れそめにし', 'われならなくに'],
    singer: '河原左大臣',
    kimariji_kami: 'みち',
    kimariji_shimo: 'みだれそ'
  },
  {
    num: 15,
    song: ['君がため', '春の野に出でて', '若菜つむ', 'わが衣手に', '雪は降りつつ'],
    singer: '光孝天皇',
    kimariji_kami: 'きみがため　は',
    kimariji_shimo: 'わがころもでに'
  },
  {
    num: 16,
    song: ['たち別れ', 'いなばの山の', '峰に生ふる', 'まつとし聞かば', '今帰り来む'],
    singer: '中納言行平',
    kimariji_kami: 'たち',
    kimariji_shimo: 'まつと'
  },
  {
    num: 17,
    song: ['ちはやぶる', '神代も聞かず', '竜田川', 'からくれなゐに', '水くくるとは'],
    singer: '在原業平朝臣',
    kimariji_kami: 'ちは',
    kimariji_shimo: 'から'
  },
  {
    num: 18,
    song: ['住の江の', '岸による波', 'よるさへや', '夢の通ひ路', '人めよくらむ'],
    singer: '藤原敏行朝臣',
    kimariji_kami: 'す',
    kimariji_shimo: 'ゆめ'
  },
  {
    num: 19,
    song: ['難波潟', 'みじかき芦の', 'ふしの間も', '逢はでこの世を', '過ぐしてよとや'],
    singer: '伊勢',
    kimariji_kami: 'なにはが',
    kimariji_shimo: 'あはで'
  },
  {
    num: 20,
    song: ['わびぬれば', '今はた同じ', '難波なる', 'みをつくしても', '逢はむとぞ思ふ'],
    singer: '元良親王',
    kimariji_kami: 'わび',
    kimariji_shimo: 'みをつくしても'
  },
  {
    num: 21,
    song: ['今来むと', '言ひしばかりに', '長月の', '有明の月を', '待ち出でつるかな'],
    singer: '素性法師',
    kimariji_kami: 'いまこ',
    kimariji_shimo: 'あり'
  },
  {
    num: 22,
    song: ['吹くからに', '秋の草木の', 'しをるれば', 'むべ山風を', '嵐といふらむ'],
    singer: '文屋康秀',
    kimariji_kami: 'ふ',
    kimariji_shimo: 'むべ'
  },
  {
    num: 23,
    song: ['月見れば', 'ちぢにものこそ', '悲しけれ', 'わが身一つの', '秋にはあらねど'],
    singer: '大江千里',
    kimariji_kami: 'つき',
    kimariji_shimo: 'わがみひ'
  },
  {
    num: 24,
    song: ['このたびは', 'ぬさもとりあへず', '手向山', '紅葉の錦', '神のまにまに'],
    singer: '菅家',
    kimariji_kami: 'この',
    kimariji_shimo: 'もみ'
  },
  {
    num: 25,
    song: ['名にしおはば', '逢坂山の', 'さねかづら', '人にしられで', 'くるよしもがな'],
    singer: '三条右大臣',
    kimariji_kami: 'なにし',
    kimariji_shimo: 'ひとにし'
  },
  {
    num: 26,
    song: ['小倉山', '峰のもみぢ葉', '心あらば', '今ひとたびの', 'みゆき待たなむ'],
    singer: '貞信公',
    kimariji_kami: 'を',
    kimariji_shimo: 'いまひとたびの　み'
  },
  {
    num: 27,
    song: ['みかの原', 'わきて流るる', '泉川', 'いつ見きとてか', '恋しかるらむ'],
    singer: '中納言兼輔',
    kimariji_kami: 'みかの',
    kimariji_shimo: 'いつ'
  },
  {
    num: 28,
    song: ['山里は', '冬ぞさびしさ', 'まさりける', '人目も草も', 'かれぬと思へば'],
    singer: '源宗于朝臣',
    kimariji_kami: 'やまざ',
    kimariji_shimo: 'ひとめ'
  },
  {
    num: 29,
    song: ['心あてに', '折らばや折らむ', '初霜の', '置きまどはせる', '白菊の花'],
    singer: '凡河内躬恒',
    kimariji_kami: 'こころあ',
    kimariji_shimo: 'おき'
  },
  {
    num: 30,
    song: ['有明の', 'つれなく見えし', '別れより', 'あかつきばかり', '憂きものはなし'],
    singer: '壬生忠岑',
    kimariji_kami: 'ありあ',
    kimariji_shimo: 'あか'
  },
  {
    num: 31,
    song: ['朝ぼらけ', '有明の月と', '見るまでに', '吉野の里に', '降れる白雪'],
    singer: '坂上是則',
    kimariji_kami: 'あさぼらけ　あ',
    kimariji_shimo: 'よし'
  },
  {
    num: 32,
    song: ['山川に', '風のかけたる', 'しがらみは', '流れもあへぬ', '紅葉なりけり'],
    singer: '春道列樹',
    kimariji_kami: 'やまが',
    kimariji_shimo: 'ながれ'
  },
  {
    num: 33,
    song: ['ひさかたの', '光のどけき', '春の日に', '静心なく', '花の散るらむ'],
    singer: '紀友則',
    kimariji_kami: 'ひさか',
    kimariji_shimo: 'しづ'
  },
  {
    num: 34,
    song: ['誰をかも', '知る人にせむ', '高砂の', '松も昔の', '友ならなくに'],
    singer: '藤原興風',
    kimariji_kami: 'たれ',
    kimariji_shimo: 'まつも'
  },
  {
    num: 35,
    song: ['人はいさ', '心も知らず', 'ふるさとは', '花ぞ昔の', '香ににほひける'],
    singer: '紀貫之',
    kimariji_kami: 'ひとは',
    kimariji_shimo: 'はなぞ'
  },
  {
    num: 36,
    song: ['夏の夜は', 'まだ宵ながら', '明けぬるを', '雲のいづこに', '月宿るらむ'],
    singer: '清原深養父',
    kimariji_kami: 'なつ',
    kimariji_shimo: 'くもの'
  },
  {
    num: 37,
    song: ['白露に', '風の吹きしく', '秋の野は', 'つらぬきとめぬ', '玉ぞ散りける'],
    singer: '文屋朝康',
    kimariji_kami: 'しら',
    kimariji_shimo: 'つ'
  },
  {
    num: 38,
    song: ['忘らるる', '身をば思はず', '誓ひてし', '人の命の', '惜しくもあるかな'],
    singer: '右近',
    kimariji_kami: 'わすら',
    kimariji_shimo: 'ひとの'
  },
  {
    num: 39,
    song: ['浅茅生の', '小野の篠原', 'しのぶれど', 'あまりてなどか', '人の恋しき'],
    singer: '参議等',
    kimariji_kami: 'あさぢ',
    kimariji_shimo: 'あまり'
  },
  {
    num: 40,
    song: ['しのぶれど', '色に出でにけり', 'わが恋は', '物や思ふと', '人の問ふまで'],
    singer: '平兼盛',
    kimariji_kami: 'しの',
    kimariji_shimo: 'もの'
  },
  {
    num: 41,
    song: ['恋すてふ', 'わが名はまだき', '立ちにけり', '人知れずこそ', '思ひそめしか'],
    singer: '壬生忠見',
    kimariji_kami: 'こひ',
    kimariji_shimo: 'ひとし'
  },
  {
    num: 42,
    song: ['契りきな', 'かたみに袖を', 'しぼりつつ', '末の松山', '波越さじとは'],
    singer: '清原元輔',
    kimariji_kami: 'ちぎりき',
    kimariji_shimo: 'す'
  },
  {
    num: 43,
    song: ['逢ひ見ての', 'のちの心に', 'くらぶれば', '昔は物を', '思はざりけり'],
    singer: '権中納言敦忠',
    kimariji_kami: 'あひ',
    kimariji_shimo: 'むか'
  },
  {
    num: 44,
    song: ['逢ふことの', '絶えてしなくは', 'なかなかに', '人をも身をも', '恨みざらまし'],
    singer: '中納言朝忠',
    kimariji_kami: 'あふ',
    kimariji_shimo: 'ひとを'
  },
  {
    num: 45,
    song: ['あはれとも', 'いふべき人は', '思ほえで', '身のいたづらに', 'なりぬべきかな'],
    singer: '謙徳公',
    kimariji_kami: 'あはれ',
    kimariji_shimo: 'みの'
  },
  {
    num: 46,
    song: ['由良のとを', '渡る舟人', 'かぢを絶え', 'ゆくへも知らぬ', '恋の道かな'],
    singer: '曾禰好忠',
    kimariji_kami: 'ゆら',
    kimariji_shimo: 'ゆく'
  },
  {
    num: 47,
    song: ['八重葎', 'しげれる宿の', 'さびしきに', '人こそ見えね', '秋は来にけり'],
    singer: '恵慶法師',
    kimariji_kami: 'やへ',
    kimariji_shimo: 'ひとこそみ'
  },
  {
    num: 48,
    song: ['風をいたみ', '岩うつ波の', 'おのれのみ', 'くだけて物を', '思ふころかな'],
    singer: '源重之',
    kimariji_kami: 'かぜを',
    kimariji_shimo: 'くだ'
  },
  {
    num: 49,
    song: ['みかきもり', '衛士のたく火の', '夜は燃え', '昼は消えつつ', '物をこそ思へ'],
    singer: '大中臣能宣',
    kimariji_kami: 'みかき',
    kimariji_shimo: 'ひる'
  },
  {
    num: 50,
    song: ['君がため', '惜しからざりし', '命さへ', '長くもがなと', '思ひけるかな'],
    singer: '藤原義孝',
    kimariji_kami: 'きみがため　を',
    kimariji_shimo: 'ながく'
  },
  {
    num: 51,
    song: ['かくとだに', 'えやはいぶきの', 'さしも草', 'さしも知らじな', '燃ゆる思ひを'],
    singer: '藤原実方朝臣',
    kimariji_kami: 'かく',
    kimariji_shimo: 'さ'
  },
  {
    num: 52,
    song: ['明けぬれば', '暮るるものとは', '知りながら', 'なほうらめしき', '朝ぼらけかな'],
    singer: '藤原道信朝臣',
    kimariji_kami: 'あけ',
    kimariji_shimo: 'なほう'
  },
  {
    num: 53,
    song: ['嘆きつつ', 'ひとり寝る夜の', '明くる間は', 'いかに久しき', 'ものとかは知る'],
    singer: '右大将道綱母',
    kimariji_kami: 'なげき',
    kimariji_shimo: 'いか'
  },
  {
    num: 54,
    song: ['忘れじの', '行く末までは', 'かたければ', '今日を限りの', '命ともがな'],
    singer: '儀同三司母',
    kimariji_kami: 'わすれ',
    kimariji_shimo: 'けふを'
  },
  {
    num: 55,
    song: ['滝の音は', '絶えて久しく', 'なりぬれど', '名こそ流れて', 'なほ聞こえけれ'],
    singer: '大納言公任',
    kimariji_kami: 'たき',
    kimariji_shimo: 'なこ'
  },
  {
    num: 56,
    song: ['あらざらむ', 'この世のほかの', '思ひ出に', '今ひとたびの', '逢ふこともがな'],
    singer: '和泉式部',
    kimariji_kami: 'あらざ',
    kimariji_shimo: 'いまひとたびの　あ'
  },
  {
    num: 57,
    song: ['めぐりあひて', '見しやそれとも', 'わかぬ間に', '雲がくれにし', '夜半の月かな'],
    singer: '紫式部',
    kimariji_kami: 'め',
    kimariji_shimo: 'くもが'
  },
  {
    num: 58,
    song: ['有馬山', '猪名の笹原', '風吹けば', 'いでそよ人を', '忘れやはする'],
    singer: '大弐三位',
    kimariji_kami: 'ありま',
    kimariji_shimo: 'いで'
  },
  {
    num: 59,
    song: ['やすらはで', '寝なましものを', 'さ夜更けて', 'かたぶくまでの', '月を見しかな'],
    singer: '赤染衛門',
    kimariji_kami: 'やす',
    kimariji_shimo: 'かた'
  },
  {
    num: 60,
    song: ['大江山', 'いく野の道の', '遠ければ', 'まだふみもみず', '天の橋立'],
    singer: '小式部内侍',
    kimariji_kami: 'おほえ',
    kimariji_shimo: 'まだ'
  },
  {
    num: 61,
    song: ['いにしへの', '奈良の都の', '八重桜', 'けふ九重に', 'にほひぬるかな'],
    singer: '伊勢大輔',
    kimariji_kami: 'いに',
    kimariji_shimo: 'けふこ'
  },
  {
    num: 62,
    song: ['夜をこめて', '鳥のそらねは', 'はかるとも', 'よに逢坂の', '関はゆるさじ'],
    singer: '清少納言',
    kimariji_kami: 'よを',
    kimariji_shimo: 'よに'
  },
  {
    num: 63,
    song: ['今はただ', '思ひ絶えなむ', 'とばかりを', '人づてならで', '言ふよしもがな'],
    singer: '左京大夫道雅',
    kimariji_kami: 'いまは',
    kimariji_shimo: 'ひとづ'
  },
  {
    num: 64,
    song: ['朝ぼらけ', '宇治の川霧', 'たえだえに', 'あらはれわたる', '瀬々の網代木'],
    singer: '権中納言定頼',
    kimariji_kami: 'あさぼらけ　う',
    kimariji_shimo: 'あら'
  },
  {
    num: 65,
    song: ['恨みわび', 'ほさぬ袖だに', 'あるものを', '恋に朽ちなむ', '名こそ惜しけれ'],
    singer: '相模',
    kimariji_kami: 'うら',
    kimariji_shimo: 'こひに'
  },
  {
    num: 66,
    song: ['もろともに', 'あはれと思へ', '山桜', '花よりほかに', '知る人もなし'],
    singer: '前大僧正行尊',
    kimariji_kami: 'もろ',
    kimariji_shimo: 'はなよ'
  },
  {
    num: 67,
    song: ['春の夜の', '夢ばかりなる', '手枕に', 'かひなく立たむ', '名こそ惜しけれ'],
    singer: '周防内侍',
    kimariji_kami: 'はるの',
    kimariji_shimo: 'かひ'
  },
  {
    num: 68,
    song: ['心にも', 'あらでうき世に', 'ながらへば', '恋しかるべき', '夜半の月かな'],
    singer: '三条院',
    kimariji_kami: 'こころに',
    kimariji_shimo: 'こいし'
  },
  {
    num: 69,
    song: ['嵐吹く', 'み室の山の', 'もみぢ葉は', '竜田の川の', '錦なりけり'],
    singer: '能因法師',
    kimariji_kami: 'あらし',
    kimariji_shimo: 'たつ'
  },
  {
    num: 70,
    song: ['さびしさに', '宿を立ち出でて', 'ながむれば', 'いづこも同じ', '秋の夕暮れ'],
    singer: '良暹法師',
    kimariji_kami: 'さ',
    kimariji_shimo: 'いづ'
  },
  {
    num: 71,
    song: ['夕されば', '門田の稲葉', 'おとづれて', '芦のまろやに', '秋風ぞ吹く'],
    singer: '大納言経信',
    kimariji_kami: 'ゆふ',
    kimariji_shimo: 'あし'
  },
  {
    num: 72,
    song: ['音に聞く', '高師の浜の', 'あだ波は', 'かけじや袖の', 'ぬれもこそすれ'],
    singer: '祐子内親王家紀伊',
    kimariji_kami: 'おと',
    kimariji_shimo: 'かけ'
  },
  {
    num: 73,
    song: ['高砂の', '尾の上の桜', '咲きにけり', '外山の霞', '立たずもあらなむ'],
    singer: '権中納言匡房',
    kimariji_kami: 'たか',
    kimariji_shimo: 'と'
  },
  {
    num: 74,
    song: ['憂かりける', '人を初瀬の', '山おろしよ', 'はげしかれとは', '祈らぬものを'],
    singer: '源俊頼朝臣',
    kimariji_kami: 'うか',
    kimariji_shimo: 'はげ'
  },
  {
    num: 75,
    song: ['契りおきし', 'させもが露を', '命にて', 'あはれ今年の', '秋もいぬめり'],
    singer: '藤原基俊',
    kimariji_kami: 'ちぎりお',
    kimariji_shimo: 'あはれ'
  },
  {
    num: 76,
    song: ['わたの原', '漕ぎ出でて見れば', 'ひさかたの', '雲居にまがふ', '沖つ白波', '・'],
    singer: '法性寺入道前関白太政大臣',
    kimariji_kami: 'わたのはら　こ',
    kimariji_shimo: 'くもゐ'
  },
  {
    num: 77,
    song: ['瀬をはやみ', '岩にせかるる', '滝川の', 'われても末に', 'あはむとぞ思ふ'],
    singer: '崇徳院',
    kimariji_kami: 'せ',
    kimariji_shimo: 'われ'
  },
  {
    num: 78,
    song: ['淡路島', 'かよふ千鳥の', '鳴く声に', 'いく夜寝覚めぬ', '須磨の関守'],
    singer: '源兼昌',
    kimariji_kami: 'あはぢ',
    kimariji_shimo: 'いく'
  },
  {
    num: 79,
    song: ['秋風に', 'たなびく雲の', '絶え間より', 'もれ出づる月の', '影のさやけさ'],
    singer: '左京大夫顕輔',
    kimariji_kami: 'あきか',
    kimariji_shimo: 'もれ'
  },
  {
    num: 80,
    song: ['長からむ', '心も知らず', '黒髪の', '乱れて今朝は', '物をこそ思へ'],
    singer: '待賢門院堀河',
    kimariji_kami: 'ながか',
    kimariji_shimo: 'みだれて'
  },
  {
    num: 81,
    song: ['ほととぎす', '鳴きつる方を', 'ながむれば', 'ただ有明の', '月ぞ残れる', '・・・'],
    singer: '後徳大寺左大臣',
    kimariji_kami: 'ほ',
    kimariji_shimo: 'ただ'
  },
  {
    num: 82,
    song: ['思ひわび', 'さても命は', 'あるものを', '憂きにたへぬは', '涙なりけり'],
    singer: '道因法師',
    kimariji_kami: 'おも',
    kimariji_shimo: 'うき'
  },
  {
    num: 83,
    song: ['世の中よ', '道こそなけれ', '思ひ入る', '山の奥にも', '鹿ぞ鳴くなる', '・・・'],
    singer: '皇太后宮大夫俊成',
    kimariji_kami: 'よのなかよ',
    kimariji_shimo: 'やま'
  },
  {
    num: 84,
    song: ['長らへば', 'またこのごろや', 'しのばれむ', '憂しと見し世ぞ', '今は恋しき'],
    singer: '藤原清輔朝臣',
    kimariji_kami: 'ながら',
    kimariji_shimo: 'うし'
  },
  {
    num: 85,
    song: ['夜もすがら', '物思ふころは', '明けやらで', '閨のひまさへ', 'つれなかりけり'],
    singer: '俊恵法師',
    kimariji_kami: 'よも',
    kimariji_shimo: 'ね'
  },
  {
    num: 86,
    song: ['嘆けとて', '月やは物を', '思はする', 'かこち顔なる', 'わが涙かな'],
    singer: '西行法師',
    kimariji_kami: 'なげけ',
    kimariji_shimo: 'かこ'
  },
  {
    num: 87,
    song: ['村雨の', '露もまだひぬ', '真木の葉に', '霧立ちのぼる', '秋の夕暮れ'],
    singer: '寂蓮法師',
    kimariji_kami: 'む',
    kimariji_shimo: 'き'
  },
  {
    num: 88,
    song: ['難波江の', '芦のかりねの', 'ひとよゆゑ', 'みをつくしてや', '恋ひわたるべき'],
    singer: '皇嘉門院別当',
    kimariji_kami: 'なにはえ',
    kimariji_shimo: 'みをつくしてや'
  },
  {
    num: 89,
    song: ['玉の緒よ', '絶えなば絶えね', 'ながらへば', '忍ぶることの', 'よわりもぞする'],
    singer: '式子内親王',
    kimariji_kami: 'たま',
    kimariji_shimo: 'しの'
  },
  {
    num: 90,
    song: ['見せばやな', '雄島のあまの', '袖だにも', 'ぬれにぞぬれし', '色はかはらず'],
    singer: '殷富門院大輔',
    kimariji_kami: 'みせ',
    kimariji_shimo: 'ぬ'
  },
  {
    num: 91,
    song: ['きりぎりす', '鳴くや霜夜の', 'さむしろに', '衣かたしき', 'ひとりかも寝む', '・・'],
    singer: '後京極摂政前太政大臣',
    kimariji_kami: 'きり',
    kimariji_shimo: 'ころもか'
  },
  {
    num: 92,
    song: ['わが袖は', '潮干に見えぬ', '沖の石の', '人こそ知らね', 'かわく間もなし'],
    singer: '二条院讃岐',
    kimariji_kami: 'わがそ',
    kimariji_shimo: 'ひとこそし'
  },
  {
    num: 93,
    song: ['世の中は', '常にもがもな', '渚こぐ', 'あまの小舟の', '綱手かなしも'],
    singer: '鎌倉右大臣',
    kimariji_kami: 'よのなかは',
    kimariji_shimo: 'あまの'
  },
  {
    num: 94,
    song: ['み吉野の', '山の秋風', 'さ夜更けて', 'ふるさと寒く', '衣うつなり'],
    singer: '参議雅経',
    kimariji_kami: 'みよ',
    kimariji_shimo: 'ふる'
  },
  {
    num: 95,
    song: ['おほけなく', 'うき世の民に', 'おほふかな', 'わが立つ杣に', '墨染の袖'],
    singer: '前大僧正慈円',
    kimariji_kami: 'おほけ',
    kimariji_shimo: 'わがた'
  },
  {
    num: 96,
    song: ['花さそふ', '嵐の庭の', '雪ならで', 'ふりゆくものは', 'わが身なりけり'],
    singer: '入道前太政大臣',
    kimariji_kami: 'はなさ',
    kimariji_shimo: 'ふり'
  },
  {
    num: 97,
    song: ['来ぬ人を', 'まつほの浦の', '夕なぎに', '焼くや藻塩の', '身もこがれつつ'],
    singer: '権中納言定家',
    kimariji_kami: 'こぬ',
    kimariji_shimo: 'やく'
  },
  {
    num: 98,
    song: ['風そよぐ', 'ならの小川の', '夕暮れは', 'みそぎぞ夏の', 'しるしなりける'],
    singer: '従二位家隆',
    kimariji_kami: 'かぜそ',
    kimariji_shimo: 'みそ'
  },
  {
    num: 99,
    song: ['人も惜し', '人も恨めし', 'あぢきなく', '世を思ふゆゑに', '物思ふ身は'],
    singer: '後鳥羽院',
    kimariji_kami: 'ひとも',
    kimariji_shimo: 'よをお'
  },
  {
    num: 100,
    song: ['ももしきや', '古き軒端の', 'しのぶにも', 'なほあまりある', '昔なりけり'],
    singer: '順徳院',
    kimariji_kami: 'もも',
    kimariji_shimo: 'なほあ'
  },
];

const allSongsHiragana = [
  {num: 1, song_hiragana: ['あきのたの', 'かりほのいほの', 'とまをあらみ', 'わがころもでは', 'つゆにぬれつつ']},
  {num: 2, song_hiragana: ['はるすぎて', 'なつきにけらし', 'しろたへの', 'ころもほすてふ', 'あまのかぐやま']},
  {num: 3, song_hiragana: ['あしびきの', 'やまどりのをの', 'しだりをの', 'ながながしよを', 'ひとりかもねむ']},
  {num: 4, song_hiragana: ['たごのうらに', 'うちいでてみれば', 'しろたへの', 'ふじのたかねに', 'ゆきはふりつつ']},
  {num: 5, song_hiragana: ['おくやまに', 'もみぢふみわけ', 'なくしかの', 'こゑきくときぞ', 'あきはかなしき']},
  {num: 6, song_hiragana: ['かささぎの', 'わたせるはしに', 'おくしもの', 'しろきをみれば', 'よぞふけにける']},
  {num: 7, song_hiragana: ['あまのはら', 'ふりさけみれば', 'かすがなる', 'みかさのやまに', 'いでしつきかも']},
  {num: 8, song_hiragana: ['わがいほは', 'みやこのたつみ', 'しかぞすむ', 'よをうぢやまと', 'ひとはいふなり']},
  {num: 9, song_hiragana: ['はなのいろは', 'うつりにけりな', 'いたづらに', 'わがみよにふる', 'ながめせしまに']},
  {num: 10, song_hiragana: ['これやこの', 'ゆくもかへるも', 'わかれては', 'しるもしらぬも', 'あふさかのせき']},
  {num: 11, song_hiragana: ['わたのはら', 'やそしまかけて', 'こぎいでぬと', 'ひとにはつげよ', 'あまのつりぶね']},
  {num: 12, song_hiragana: ['あまつかぜ', 'くものかよひぢ', 'ふきとぢよ', 'をとめのすがた', 'しばしとどめむ']},
  {num: 13, song_hiragana: ['つくばねの', 'みねよりおつる', 'みなのがは', 'こひぞつもりて', 'ふちとなりぬる']},
  {num: 14, song_hiragana: ['みちのくの', 'しのぶもぢずり', 'たれゆゑに', 'みだれそめにし', 'われならなくに']},
  {num: 15, song_hiragana: ['きみがため', 'はるののにいでて', 'わかなつむ', 'わがころもでに', 'ゆきはふりつつ']},
  {num: 16, song_hiragana: ['たちわかれ', 'いなばのやまの', 'みねにおふる', 'まつとしきかば', 'いまかへりこむ']},
  {num: 17, song_hiragana: ['ちはやぶる', 'かみよもきかず', 'たつたがは', 'からくれなゐに', 'みづくくるとは']},
  {num: 18, song_hiragana: ['すみのえの', 'きしによるなみ', 'よるさへや', 'ゆめのかよひぢ', 'ひとめよくらむ']},
  {num: 19, song_hiragana: ['なにはがた', 'みじかきあしの', 'ふしのまも', 'あはでこのよを', 'すぐしてよとや']},
  {num: 20, song_hiragana: ['わびぬれば', 'いまはたおなじ', 'なにはなる', 'みをつくしても', 'あはむとぞおもふ']},
  {num: 21, song_hiragana: ['いまこむと', 'いひしばかりに', 'ながつきの', 'ありあけのつきを', 'まちいでつるかな']},
  {num: 22, song_hiragana: ['ふくからに', 'あきのくさきの', 'しをるれば', 'むべやまかぜを', 'あらしといふらむ']},
  {num: 23, song_hiragana: ['つきみれば', 'ちぢにものこそ', 'かなしけれ', 'わがみひとつの', 'あきにはあらねど']},
  {num: 24, song_hiragana: ['このたびは', 'ぬさもとりあへず', 'たむけやま', 'もみぢのにしき', 'かみのまにまに']},
  {num: 25, song_hiragana: ['なにしおはば', 'あふさかやまの', 'さねかづら', 'ひとにしられで', 'くるよしもがな']},
  {num: 26, song_hiragana: ['をぐらやま', 'みねのもみぢば', 'こころあらば', 'いまひとたびの', 'みゆきまたなむ']},
  {num: 27, song_hiragana: ['みかのはら', 'わきてながるる', 'いづみがは', 'いつみきとてか', 'こひしかるらむ']},
  {num: 28, song_hiragana: ['やまざとは', 'ふゆぞさびしさ', 'まさりける', 'ひとめもくさも', 'かれぬとおもへば']},
  {num: 29, song_hiragana: ['こころあてに', 'をらばやをらむ', 'はつしもの', 'おきまどはせる', 'しらぎくのはな']},
  {num: 30, song_hiragana: ['ありあけの', 'つれなくみえし', 'わかれより', 'あかつきばかり', 'うきものはなし']},
  {num: 31, song_hiragana: ['あさぼらけ', 'ありあけのつきと', 'みるまでに', 'よしののさとに', 'ふれるしらゆき']},
  {num: 32, song_hiragana: ['やまがはに', 'かぜのかけたる', 'しがらみは', 'ながれもあへぬ', 'もみぢなりけり']},
  {num: 33, song_hiragana: ['ひさかたの', 'ひかりのどけき', 'はるのひに', 'しづごころなく', 'はなのちるらむ']},
  {num: 34, song_hiragana: ['たれをかも', 'しるひとにせむ', 'たかさごの', 'まつもむかしの', 'ともならなくに']},
  {num: 35, song_hiragana: ['ひとはいさ', 'こころもしらず', 'ふるさとは', 'はなぞむかしの', 'かににほひける']},
  {num: 36, song_hiragana: ['なつのよは', 'まだよひながら', 'あけぬるを', 'くものいづこに', 'つきやどるらむ']},
  {num: 37, song_hiragana: ['しらつゆに', 'かぜのふきしく', 'あきののは', 'つらぬきとめぬ', 'たまぞちりける']},
  {num: 38, song_hiragana: ['わすらるる', 'みをばおもはず', 'ちかひてし', 'ひとのいのちの', 'をしくもあるかな']},
  {num: 39, song_hiragana: ['あさぢふの', 'をののしのはら', 'しのぶれど', 'あまりてなどか', 'ひとのこひしき']},
  {num: 40, song_hiragana: ['しのぶれど', 'いろにいでにけり', 'わがこひは', 'ものやおもふと', 'ひとのとふまで']},
  {num: 41, song_hiragana: ['こひすてふ', 'わがなはまだき', 'たちにけり', 'ひとしれずこそ', 'おもひそめしか']},
  {num: 42, song_hiragana: ['ちぎりきな', 'かたみにそでを', 'しぼりつつ', 'すゑのまつやま', 'なみこさじとは']},
  {num: 43, song_hiragana: ['あひみての', 'のちのこころに', 'くらぶれば', 'むかしはものを', 'おもはざりけり']},
  {num: 44, song_hiragana: ['あふことの', 'たえてしなくは', 'なかなかに', 'ひとをもみをも', 'うらみざらまし']},
  {num: 45, song_hiragana: ['あはれとも', 'いふべき人は', '思ほえで', 'みのいたづらに', 'なりぬべきかな']},
  {num: 46, song_hiragana: ['ゆらのとを', 'わたるふなびと', 'かぢをたえ', 'ゆくへもしらぬ', 'こひのみちかな']},
  {num: 47, song_hiragana: ['やへむぐら', 'しげれるやどの', 'さびしきに', 'ひとこそみえね', 'あきはきにけり']},
  {num: 48, song_hiragana: ['かぜをいたみ', 'いはうつなみの', 'おのれのみ', 'くだけてものを', 'おもふころかな']},
  {num: 49, song_hiragana: ['みかきもり', 'ゑじのたくひの', 'よるはもえ', 'ひるはきえつつ', 'ものをこそおもへ']},
  {num: 50, song_hiragana: ['きみがため', 'をしからざりし', 'いのちさへ', 'ながくもがなと', 'おもひけるかな']},
  {num: 51, song_hiragana: ['かくとだに', 'えやはいぶきの', 'さしもぐさ', 'さしもしらじな', 'もゆるおもひを']},
  {num: 52, song_hiragana: ['あけぬれば', 'くるるものとは', 'しりながら', 'なほうらめしき', 'あさぼらけかな']},
  {num: 53, song_hiragana: ['なげきつつ', 'ひとりぬるよの', 'あくるまは', 'いかにひさしき', 'ものとかはしる']},
  {num: 54, song_hiragana: ['わすれじの', 'ゆくすゑまでは', 'かたければ', 'けふをかぎりの', 'いのちともがな']},
  {num: 55, song_hiragana: ['たきのおとは', 'たえてひさしく', 'なりぬれど', 'なこそながれて', 'なほきこえけれ']},
  {num: 56, song_hiragana: ['あらざらむ', 'このよのほかの', 'おもひでに', 'いまひとたびの', 'あふこともがな']},
  {num: 57, song_hiragana: ['めぐりあひて', 'みしやそれとも', 'わかぬまに', 'くもがくれにし', 'よはのつきかな']},
  {num: 58, song_hiragana: ['ありまやま', 'ゐなのささはら', 'かぜふけば', 'いでそよひとを', 'わすれやはする']},
  {num: 59, song_hiragana: ['やすらはで', 'ねなましものを', 'さよふけて', 'かたぶくまでの', 'つきをみしかな']},
  {num: 60, song_hiragana: ['おほえやま', 'いくののみちの', 'とほければ', 'まだふみもみず', 'あまのはしだて']},
  {num: 61, song_hiragana: ['いにしへの', 'ならのみやこの', 'やへざくら', 'けふここのへに', 'にほひぬるかな']},
  {num: 62, song_hiragana: ['よをこめて', 'とりのそらねは', 'はかるとも', 'よにあふさかの', 'せきはゆるさじ']},
  {num: 63, song_hiragana: ['いまはただ', 'おもひたえなむ', 'とばかりを', 'ひとづてならで', 'いふよしもがな']},
  {num: 64, song_hiragana: ['あさぼらけ', 'うぢのかはぎり', 'たえだえに', 'あらはれわたる', 'せぜのあじろぎ']},
  {num: 65, song_hiragana: ['うらみわび', 'ほさぬそでだに', 'あるものを', 'こひにくちなむ', 'なこそをしけれ']},
  {num: 66, song_hiragana: ['もろともに', 'あはれとおもへ', 'やまざくら', 'はなよりほかに', 'しるひともなし']},
  {num: 67, song_hiragana: ['はるのよの', 'ゆめばかりなる', 'たまくらに', 'かひなくたたむ', 'なこそをしけれ']},
  {num: 68, song_hiragana: ['こころにも', 'あらでうきよに', 'ながらへば', 'こひしかるべき', 'よはのつきかな']},
  {num: 69, song_hiragana: ['あらしふく', 'みむろのやまの', 'もみぢばは', 'たつたのかはの', 'にしきなりけり']},
  {num: 70, song_hiragana: ['さびしさに', 'やどをたちいでて', 'ながむれば', 'いづこもおなじ', 'あきのゆふぐれ']},
  {num: 71, song_hiragana: ['ゆふされば', 'かどたのいなば', 'おとづれて', 'あしのまろやに', 'あきかぜぞふく']},
  {num: 72, song_hiragana: ['おとにきく', 'たかしのはまの', 'あだなみは', 'かけじやそでの', 'ぬれもこそすれ']},
  {num: 73, song_hiragana: ['たかさごの', 'をのへのさくら', 'さきにけり', 'とやまのかすみ', 'たたずもあらなむ']},
  {num: 74, song_hiragana: ['うかりける', 'ひとをはつせの', 'やまおろしよ', 'はげしかれとは', 'いのらぬものを']},
  {num: 75, song_hiragana: ['ちぎりおきし', 'させもがつゆを', 'いのちにて', 'あはれことしの', 'あきもいぬめり']},
  {num: 76, song_hiragana: ['わたのはら', 'こぎいでてみれば', 'ひさかたの', 'くもゐにまがふ', 'おきつしらなみ']},
  {num: 77, song_hiragana: ['せをはやみ', 'いはにせかるる', 'たきがはの', 'われてもすゑに', 'あはむとぞおもふ']},
  {num: 78, song_hiragana: ['あはぢしま', 'かよふちどりの', 'なくこゑに', 'いくよねざめぬ', 'すまのせきもり']},
  {num: 79, song_hiragana: ['あきかぜに', 'たなびくくもの', 'たえまより', 'もれいづるつきの', 'かげのさやけさ']},
  {num: 80, song_hiragana: ['ながからむ', 'こころもしらず', 'くろかみの', 'みだれてけさは', 'ものをこそおもへ']},
  {num: 81, song_hiragana: ['ほととぎす', 'なきつるかたを', 'ながむれば', 'ただありあけの', 'つきぞのこれる']},
  {num: 82, song_hiragana: ['おもひわび', 'さてもいのちは', 'あるものを', 'うきにたへぬは', 'なみだなりけり']},
  {num: 83, song_hiragana: ['よのなかよ', 'みちこそなけれ', 'おもひいる', 'やまのおくにも', 'しかぞなくなる']},
  {num: 84, song_hiragana: ['ながらへば', 'またこのごろや', 'しのばれむ', 'うしとみしよぞ', 'いまはこひしき']},
  {num: 85, song_hiragana: ['よもすがら', 'ものおもふころは', 'あけやらで', 'ねやのひまさへ', 'つれなかりけり']},
  {num: 86, song_hiragana: ['なげけとて', 'つきやはものを', 'おもはする', 'かこちがほなる', 'わがなみだかな']},
  {num: 87, song_hiragana: ['むらさめの', 'つゆもまだひぬ', 'まきのはに', 'きりたちのぼる', 'あきのゆふぐれ']},
  {num: 88, song_hiragana: ['なにはえの', 'あしのかりねの', 'ひとよゆゑ', 'みをつくしてや', 'こひわたるべき']},
  {num: 89, song_hiragana: ['たまのをよ', 'たえなばたえね', 'ながらへば', 'しのぶることの', 'よわりもぞする']},
  {num: 90, song_hiragana: ['みせばやな', 'をじまのあまの', 'そでだにも', 'ぬれにぞぬれし', 'いろはかはらず']},
  {num: 91, song_hiragana: ['きりぎりす', 'なくやしもよの', 'さむしろに', 'ころもかたしき', 'ひとりかもねむ']},
  {num: 92, song_hiragana: ['わがそでは', 'しほひにみえぬ', 'おきのいしの', 'ひとこそしらね', 'かわくまもなし']},
  {num: 93, song_hiragana: ['よのなかは', 'つねにもがもな', 'なぎさこぐ', 'あまのをぶねの', 'つなでかなしも']},
  {num: 94, song_hiragana: ['みよしのの', 'やまのあきかぜ', 'さよふけて', 'ふるさとさむく', 'ころもうつなり']},
  {num: 95, song_hiragana: ['おほけなく', 'うきよのたみに', 'おほふかな', 'わがたつそまに', 'すみぞめのそで']},
  {num: 96, song_hiragana: ['はなさそふ', 'あらしのにはの', 'ゆきならで', 'ふりゆくものは', 'わがみなりけり']},
  {num: 97, song_hiragana: ['こぬひとを', 'まつほのうらの', 'ゆふなぎに', 'やくやもしほの', 'みもこがれつつ']},
  {num: 98, song_hiragana: ['かぜそよぐ', 'ならのをがはの', 'ゆふぐれは', 'みそぎぞなつの', 'しるしなりける']},
  {num: 99, song_hiragana: ['ひともをし', 'ひともうらめし', 'あぢきなく', 'よをおもふゆゑに', 'ものおもふみは']},
  {num: 100, song_hiragana: ['ももしきや', 'ふるきのきばの', 'しのぶにも', 'なほあまりある', 'むかしなりけり']},
];

