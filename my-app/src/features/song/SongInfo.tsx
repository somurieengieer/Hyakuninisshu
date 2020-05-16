import React from 'react';

export class SongInfo {
  public num: number;
  public song: string[];
  public singer: string;
  public kimariji_kami: string;
  public kimariji_shimo: string;
  public path: string;

  public constructor(songNumber: number) {
    const songTmp = allSongs.find(s => s.num == songNumber);
    this.num = songNumber;
    // @ts-ignore
    this.song = songTmp.song;
    // @ts-ignore
    this.singer = songTmp.singer;
    // @ts-ignore
    this.kimariji_kami = songTmp.kimariji;
    // @ts-ignore
    this.kimariji_shimo = songTmp.shimo_kimariji;
    const numStr = ('000' + songNumber).slice(-3);
    this.path = `${process.env.PUBLIC_URL}/songs/${numStr}番.m4a`;
  }

  public songDisplay(): string {
    return this.song.join(' ')
  }
}

const allSongs = [
  {num: 0, song: ['難波津に', '咲くやこの花', '冬ごもり', '今を春べと', '咲くやこの花'], singer: '王仁博士', kimariji: '', shimo_kimariji: ''},
  {
    num: 1,
    song: ['秋の田の', 'かりほの庵の', '苫をあらみ', 'わが衣手は', '露にぬれつつ'],
    singer: '天智天皇',
    kimariji: 'あきの',
    shimo_kimariji: 'わがころもでは'
  },
  {num: 2, song: ['春すぎて', '夏来にけらし', '白妙の', '衣ほすてふ', '天の香具山'], singer: '持統天皇', kimariji: 'はるす', shimo_kimariji: 'ころもほ'},
  {
    num: 3,
    song: ['あしびきの', '山鳥の尾の', 'しだり尾の', 'ながながし夜を', 'ひとりかも寝む'],
    singer: '柿本人麻呂',
    kimariji: 'あし',
    shimo_kimariji: 'ながな'
  },
  {
    num: 4,
    song: ['田子の浦に', 'うち出でてみれば', '白妙の', '富士の高嶺に', '雪は降りつつ'],
    singer: '山部赤人',
    kimariji: 'たご',
    shimo_kimariji: 'ふじ'
  },
  {num: 5, song: ['奥山に', '紅葉踏みわけ', '鳴く鹿の', '声きく時ぞ', '秋は悲しき'], singer: '猿丸大夫', kimariji: 'おく', shimo_kimariji: 'こゑ'},
  {
    num: 6,
    song: ['かささぎの', '渡せる橋に', 'おく霜の', '白きをみれば', '夜ぞふけにける'],
    singer: '中納言家持',
    kimariji: 'かさ',
    shimo_kimariji: 'しろ'
  },
  {num: 7, song: ['天の原', 'ふりさけ見れば', '春日なる', '三笠の山に', '出でし月かも'], singer: '安倍仲麿', kimariji: 'あまの', shimo_kimariji: 'みかさ'},
  {
    num: 8,
    song: ['わが庵は', '都のたつみ', 'しかぞすむ', '世をうぢ山と', '人はいふなり'],
    singer: '喜撰法師',
    kimariji: 'わがい',
    shimo_kimariji: 'よをう'
  },
  {
    num: 9,
    song: ['花の色は', 'うつりにけりな', 'いたづらに', 'わが身世にふる', 'ながめせしまに'],
    singer: '小野小町',
    kimariji: 'はなの',
    shimo_kimariji: 'わがみよ'
  },
  {num: 10, song: ['これやこの', '行くも帰るも', '別れては', '知るも知らぬも', '逢坂の関'], singer: '蝉丸', kimariji: 'これ', shimo_kimariji: 'しる'},
  {
    num: 11,
    song: ['わたの原', '八十島かけて', '漕ぎ出でぬと', '人には告げよ', '海人の釣舟'],
    singer: '参議篁',
    kimariji: 'わたのはら　や',
    shimo_kimariji: 'ひとには'
  },
  {num: 12, song: ['天つ風', '雲の通ひ路', '吹き閉ぢよ', 'をとめの姿', 'しばしとどめむ'], singer: '僧正遍照', kimariji: 'あまつ', shimo_kimariji: ''},
  {num: 13, song: ['筑波嶺の', '峰より落つる', '男女川', '恋ぞつもりて', '淵となりぬる'], singer: '陽成院', kimariji: 'つく', shimo_kimariji: 'こひぞ'},
  {
    num: 14,
    song: ['陸奥の', 'しのぶもぢずり', '誰ゆゑに', '乱れそめにし', 'われならなくに'],
    singer: '河原左大臣',
    kimariji: 'みち',
    shimo_kimariji: 'みだれそ'
  },
  {
    num: 15,
    song: ['君がため', '春の野に出でて', '若菜つむ', 'わが衣手に', '雪は降りつつ'],
    singer: '光孝天皇',
    kimariji: 'きみがため　は',
    shimo_kimariji: 'わがころもでに'
  },
  {
    num: 16,
    song: ['たち別れ', 'いなばの山の', '峰に生ふる', 'まつとし聞かば', '今帰り来む'],
    singer: '中納言行平',
    kimariji: 'たち',
    shimo_kimariji: 'まつと'
  },
  {
    num: 17,
    song: ['ちはやぶる', '神代も聞かず', '竜田川', 'からくれなゐに', '水くくるとは'],
    singer: '在原業平朝臣',
    kimariji: 'ちは',
    shimo_kimariji: 'から'
  },
  {num: 18, song: ['住の江の', '岸による波', 'よるさへや', '夢の通ひ路', '人めよくらむ'], singer: '藤原敏行朝臣', kimariji: 'す', shimo_kimariji: 'ゆめ'},
  {
    num: 19,
    song: ['難波潟', 'みじかき芦の', 'ふしの間も', '逢はでこの世を', '過ぐしてよとや'],
    singer: '伊勢',
    kimariji: 'なにはが',
    shimo_kimariji: 'あはで'
  },
  {
    num: 20,
    song: ['わびぬれば', '今はた同じ', '難波なる', 'みをつくしても', '逢はむとぞ思ふ'],
    singer: '元良親王',
    kimariji: 'わび',
    shimo_kimariji: 'みをつくしても'
  },
  {
    num: 21,
    song: ['今来むと', '言ひしばかりに', '長月の', '有明の月を', '待ち出でつるかな'],
    singer: '素性法師',
    kimariji: 'いまこ',
    shimo_kimariji: 'あり'
  },
  {num: 22, song: ['吹くからに', '秋の草木の', 'しをるれば', 'むべ山風を', '嵐といふらむ'], singer: '文屋康秀', kimariji: 'ふ', shimo_kimariji: 'むべ'},
  {
    num: 23,
    song: ['月見れば', 'ちぢにものこそ', '悲しけれ', 'わが身一つの', '秋にはあらねど'],
    singer: '大江千里',
    kimariji: 'つき',
    shimo_kimariji: 'わがみひ'
  },
  {num: 24, song: ['このたびは', 'ぬさもとりあへず', '手向山', '紅葉の錦', '神のまにまに'], singer: '菅家', kimariji: 'この', shimo_kimariji: 'もみ'},
  {
    num: 25,
    song: ['名にしおはば', '逢坂山の', 'さねかづら', '人にしられで', 'くるよしもがな'],
    singer: '三条右大臣',
    kimariji: 'なにし',
    shimo_kimariji: 'ひとにし'
  },
  {
    num: 26,
    song: ['小倉山', '峰のもみぢ葉', '心あらば', '今ひとたびの', 'みゆき待たなむ'],
    singer: '貞信公',
    kimariji: 'を',
    shimo_kimariji: 'いまひとたびの　み'
  },
  {
    num: 27,
    song: ['みかの原', 'わきて流るる', '泉川', 'いつ見きとてか', '恋しかるらむ'],
    singer: '中納言兼輔',
    kimariji: 'みかの',
    shimo_kimariji: 'いつ'
  },
  {
    num: 28,
    song: ['山里は', '冬ぞさびしさ', 'まさりける', '人目も草も', 'かれぬと思へば'],
    singer: '源宗于朝臣',
    kimariji: 'やまざ',
    shimo_kimariji: 'ひとめ'
  },
  {
    num: 29,
    song: ['心あてに', '折らばや折らむ', '初霜の', '置きまどはせる', '白菊の花'],
    singer: '凡河内躬恒',
    kimariji: 'こころあ',
    shimo_kimariji: 'おき'
  },
  {
    num: 30,
    song: ['有明の', 'つれなく見えし', '別れより', 'あかつきばかり', '憂きものはなし'],
    singer: '壬生忠岑',
    kimariji: 'ありあ',
    shimo_kimariji: 'あか'
  },
  {
    num: 31,
    song: ['朝ぼらけ', '有明の月と', '見るまでに', '吉野の里に', '降れる白雪'],
    singer: '坂上是則',
    kimariji: 'あさぼらけ　あ',
    shimo_kimariji: 'よし'
  },
  {
    num: 32,
    song: ['山川に', '風のかけたる', 'しがらみは', '流れもあへぬ', '紅葉なりけり'],
    singer: '春道列樹',
    kimariji: 'やまが',
    shimo_kimariji: 'ながれ'
  },
  {num: 33, song: ['ひさかたの', '光のどけき', '春の日に', '静心なく', '花の散るらむ'], singer: '紀友則', kimariji: 'ひさか', shimo_kimariji: 'しづ'},
  {num: 34, song: ['誰をかも', '知る人にせむ', '高砂の', '松も昔の', '友ならなくに'], singer: '藤原興風', kimariji: 'たれ', shimo_kimariji: 'まつも'},
  {num: 35, song: ['人はいさ', '心も知らず', 'ふるさとは', '花ぞ昔の', '香ににほひける'], singer: '紀貫之', kimariji: 'ひとは', shimo_kimariji: 'はなぞ'},
  {
    num: 36,
    song: ['夏の夜は', 'まだ宵ながら', '明けぬるを', '雲のいづこに', '月宿るらむ'],
    singer: '清原深養父',
    kimariji: 'なつ',
    shimo_kimariji: 'くもの'
  },
  {num: 37, song: ['白露に', '風の吹きしく', '秋の野は', 'つらぬきとめぬ', '玉ぞ散りける'], singer: '文屋朝康', kimariji: 'しら', shimo_kimariji: 'つ'},
  {num: 38, song: ['忘らるる', '身をば思はず', '誓ひてし', '人の命の', '惜しくもあるかな'], singer: '右近', kimariji: 'わすら', shimo_kimariji: 'ひとの'},
  {
    num: 39,
    song: ['浅茅生の', '小野の篠原', 'しのぶれど', 'あまりてなどか', '人の恋しき'],
    singer: '参議等',
    kimariji: 'あさぢ',
    shimo_kimariji: 'あまり'
  },
  {num: 40, song: ['しのぶれど', '色に出でにけり', 'わが恋は', '物や思ふと', '人の問ふまで'], singer: '平兼盛', kimariji: 'しの', shimo_kimariji: 'もの'},
  {
    num: 41,
    song: ['恋すてふ', 'わが名はまだき', '立ちにけり', '人知れずこそ', '思ひそめしか'],
    singer: '壬生忠見',
    kimariji: 'こひ',
    shimo_kimariji: 'ひとし'
  },
  {num: 42, song: ['契りきな', 'かたみに袖を', 'しぼりつつ', '末の松山', '波越さじとは'], singer: '清原元輔', kimariji: 'ちぎりき', shimo_kimariji: 'す'},
  {
    num: 43,
    song: ['逢ひ見ての', 'のちの心に', 'くらぶれば', '昔は物を', '思はざりけり'],
    singer: '権中納言敦忠',
    kimariji: 'あひ',
    shimo_kimariji: 'むか'
  },
  {
    num: 44,
    song: ['逢ふことの', '絶えてしなくは', 'なかなかに', '人をも身をも', '恨みざらまし'],
    singer: '中納言朝忠',
    kimariji: 'あふ',
    shimo_kimariji: 'ひとを'
  },
  {
    num: 45,
    song: ['あはれとも', 'いふべき人は', '思ほえで', '身のいたづらに', 'なりぬべきかな'],
    singer: '謙徳公',
    kimariji: 'あはれ',
    shimo_kimariji: 'みの'
  },
  {num: 46, song: ['由良のとを', '渡る舟人', 'かぢを絶え', 'ゆくへも知らぬ', '恋の道かな'], singer: '曾禰好忠', kimariji: 'ゆら', shimo_kimariji: 'ゆく'},
  {
    num: 47,
    song: ['八重葎', 'しげれる宿の', 'さびしきに', '人こそ見えね', '秋は来にけり'],
    singer: '恵慶法師',
    kimariji: 'やへ',
    shimo_kimariji: 'ひとこそみ'
  },
  {
    num: 48,
    song: ['風をいたみ', '岩うつ波の', 'おのれのみ', 'くだけて物を', '思ふころかな'],
    singer: '源重之',
    kimariji: 'かぜを',
    shimo_kimariji: 'くだ'
  },
  {
    num: 49,
    song: ['みかきもり', '衛士のたく火の', '夜は燃え', '昼は消えつつ', '物をこそ思へ'],
    singer: '大中臣能宣',
    kimariji: 'みかき',
    shimo_kimariji: 'ひる'
  },
  {
    num: 50,
    song: ['君がため', '惜しからざりし', '命さへ', '長くもがなと', '思ひけるかな'],
    singer: '藤原義孝',
    kimariji: 'きみがため　を',
    shimo_kimariji: 'ながく'
  },
  {
    num: 51,
    song: ['かくとだに', 'えやはいぶきの', 'さしも草', 'さしも知らじな', '燃ゆる思ひを'],
    singer: '藤原実方朝臣',
    kimariji: 'かく',
    shimo_kimariji: 'さ'
  },
  {
    num: 52,
    song: ['明けぬれば', '暮るるものとは', '知りながら', 'なほうらめしき', '朝ぼらけかな', '・・・'],
    singer: '藤原道信朝臣',
    kimariji: 'あけ',
    shimo_kimariji: 'なほう'
  },
  {
    num: 53,
    song: ['嘆きつつ', 'ひとり寝る夜の', '明くる間は', 'いかに久しき', 'ものとかは知る'],
    singer: '右大将道綱母',
    kimariji: 'なげき',
    shimo_kimariji: 'いか'
  },
  {
    num: 54,
    song: ['忘れじの', '行く末までは', 'かたければ', '今日を限りの', '命ともがな'],
    singer: '儀同三司母',
    kimariji: 'わすれ',
    shimo_kimariji: 'けふを'
  },
  {
    num: 55,
    song: ['滝の音は', '絶えて久しく', 'なりぬれど', '名こそ流れて', 'なほ聞こえけれ'],
    singer: '大納言公任',
    kimariji: 'たき',
    shimo_kimariji: 'なこ'
  },
  {
    num: 56,
    song: ['あらざらむ', 'この世のほかの', '思ひ出に', '今ひとたびの', '逢ふこともがな'],
    singer: '和泉式部',
    kimariji: 'あらざ',
    shimo_kimariji: 'いまひとたびの　あ'
  },
  {
    num: 57,
    song: ['めぐりあひて', '見しやそれとも', 'わかぬ間に', '雲がくれにし', '夜半の月かな'],
    singer: '紫式部',
    kimariji: 'め',
    shimo_kimariji: 'くもが'
  },
  {num: 58, song: ['有馬山', '猪名の笹原', '風吹けば', 'いでそよ人を', '忘れやはする'], singer: '大弐三位', kimariji: 'ありま', shimo_kimariji: 'いで'},
  {
    num: 59,
    song: ['やすらはで', '寝なましものを', 'さ夜更けて', 'かたぶくまでの', '月を見しかな'],
    singer: '赤染衛門',
    kimariji: 'やす',
    shimo_kimariji: 'かた'
  },
  {num: 60, song: ['大江山', 'いく野の道の', '遠ければ', 'まだふみもみず', '天の橋立'], singer: '小式部内侍', kimariji: 'おほえ', shimo_kimariji: 'まだ'},
  {num: 61, song: ['いにしへの', '奈良の都の', '八重桜', 'けふ九重に', 'にほひぬるかな'], singer: '伊勢大輔', kimariji: 'いに', shimo_kimariji: 'けふこ'},
  {
    num: 62,
    song: ['夜をこめて', '鳥のそらねは', 'はかるとも', 'よに逢坂の', '関はゆるさじ'],
    singer: '清少納言',
    kimariji: 'よを',
    shimo_kimariji: 'よに'
  },
  {
    num: 63,
    song: ['今はただ', '思ひ絶えなむ', 'とばかりを', '人づてならで', '言ふよしもがな', '・・・'],
    singer: '左京大夫道雅',
    kimariji: 'いまは',
    shimo_kimariji: 'ひとづ'
  },
  {
    num: 64,
    song: ['朝ぼらけ', '宇治の川霧', 'たえだえに', 'あらはれわたる', '瀬々の網代木'],
    singer: '権中納言定頼',
    kimariji: 'あさぼらけ　う',
    shimo_kimariji: 'あら'
  },
  {
    num: 65,
    song: ['恨みわび', 'ほさぬ袖だに', 'あるものを', '恋に朽ちなむ', '名こそ惜しけれ'],
    singer: '相模',
    kimariji: 'うら',
    shimo_kimariji: 'こひに'
  },
  {
    num: 66,
    song: ['もろともに', 'あはれと思へ', '山桜', '花よりほかに', '知る人もなし'],
    singer: '前大僧正行尊',
    kimariji: 'もろ',
    shimo_kimariji: 'はなよ'
  },
  {
    num: 67,
    song: ['春の夜の', '夢ばかりなる', '手枕に', 'かひなく立たむ', '名こそ惜しけれ'],
    singer: '周防内侍',
    kimariji: 'はるの',
    shimo_kimariji: 'かひ'
  },
  {
    num: 68,
    song: ['心にも', 'あらでうき世に', 'ながらへば', '恋しかるべき', '夜半の月かな'],
    singer: '三条院',
    kimariji: 'こころに',
    shimo_kimariji: 'こいし'
  },
  {num: 69, song: ['嵐吹く', 'み室の山の', 'もみぢ葉は', '竜田の川の', '錦なりけり'], singer: '能因法師', kimariji: 'あらし', shimo_kimariji: 'たつ'},
  {
    num: 70,
    song: ['さびしさに', '宿を立ち出でて', 'ながむれば', 'いづこも同じ', '秋の夕暮れ'],
    singer: '良暹法師',
    kimariji: 'さ',
    shimo_kimariji: 'いづ'
  },
  {num: 71, song: ['夕されば', '門田の稲葉', 'おとづれて', '芦のまろやに', '秋風ぞ吹く'], singer: '大納言経信', kimariji: 'ゆふ', shimo_kimariji: 'あし'},
  {
    num: 72,
    song: ['音に聞く', '高師の浜の', 'あだ波は', 'かけじや袖の', 'ぬれもこそすれ', '・・・'],
    singer: '祐子内親王家紀伊',
    kimariji: 'おと',
    shimo_kimariji: 'かけ'
  },
  {num: 73, song: ['高砂の', '尾の上の桜', '咲きにけり', '外山の霞', '立たずもあらなむ'], singer: '権中納言匡房', kimariji: 'たか', shimo_kimariji: 'と'},
  {
    num: 74,
    song: ['憂かりける', '人を初瀬の', '山おろしよ', 'はげしかれとは', '祈らぬものを'],
    singer: '源俊頼朝臣',
    kimariji: 'うか',
    shimo_kimariji: 'はげ'
  },
  {
    num: 75,
    song: ['契りおきし', 'させもが露を', '命にて', 'あはれ今年の', '秋もいぬめり'],
    singer: '藤原基俊',
    kimariji: 'ちぎりお',
    shimo_kimariji: 'あはれ'
  },
  {
    num: 76,
    song: ['わたの原', '漕ぎ出でて見れば', 'ひさかたの', '雲居にまがふ', '沖つ白波', '・'],
    singer: '法性寺入道前関白太政大臣',
    kimariji: 'わたのはら　こ',
    shimo_kimariji: 'くもゐ'
  },
  {num: 77, song: ['瀬をはやみ', '岩にせかるる', '滝川の', 'われても末に', 'あはむとぞ思ふ'], singer: '崇徳院', kimariji: 'せ', shimo_kimariji: 'われ'},
  {num: 78, song: ['淡路島', 'かよふ千鳥の', '鳴く声に', 'いく夜寝覚めぬ', '須磨の関守'], singer: '源兼昌', kimariji: 'あはぢ', shimo_kimariji: 'いく'},
  {
    num: 79,
    song: ['秋風に', 'たなびく雲の', '絶え間より', 'もれ出づる月の', '影のさやけさ'],
    singer: '左京大夫顕輔',
    kimariji: 'あきか',
    shimo_kimariji: 'もれ'
  },
  {
    num: 80,
    song: ['長からむ', '心も知らず', '黒髪の', '乱れて今朝は', '物をこそ思へ'],
    singer: '待賢門院堀河',
    kimariji: 'ながか',
    shimo_kimariji: 'みだれて'
  },
  {
    num: 81,
    song: ['ほととぎす', '鳴きつる方を', 'ながむれば', 'ただ有明の', '月ぞ残れる', '・・・'],
    singer: '後徳大寺左大臣',
    kimariji: 'ほ',
    shimo_kimariji: 'ただ'
  },
  {num: 82, song: ['思ひわび', 'さても命は', 'あるものを', '憂きにたへぬは', '涙なりけり'], singer: '道因法師', kimariji: 'おも', shimo_kimariji: 'うき'},
  {
    num: 83,
    song: ['世の中よ', '道こそなけれ', '思ひ入る', '山の奥にも', '鹿ぞ鳴くなる', '・・・'],
    singer: '皇太后宮大夫俊成',
    kimariji: 'よのなかよ',
    shimo_kimariji: 'やま'
  },
  {
    num: 84,
    song: ['長らへば', 'またこのごろや', 'しのばれむ', '憂しと見し世ぞ', '今は恋しき'],
    singer: '藤原清輔朝臣',
    kimariji: 'ながら',
    shimo_kimariji: 'うし'
  },
  {
    num: 85,
    song: ['夜もすがら', '物思ふころは', '明けやらで', '閨のひまさへ', 'つれなかりけり'],
    singer: '俊恵法師',
    kimariji: 'よも',
    shimo_kimariji: 'ね'
  },
  {num: 86, song: ['嘆けとて', '月やは物を', '思はする', 'かこち顔なる', 'わが涙かな'], singer: '西行法師', kimariji: 'なげけ', shimo_kimariji: 'かこ'},
  {num: 87, song: ['村雨の', '露もまだひぬ', '真木の葉に', '霧立ちのぼる', '秋の夕暮れ'], singer: '寂蓮法師', kimariji: 'む', shimo_kimariji: 'き'},
  {
    num: 88,
    song: ['難波江の', '芦のかりねの', 'ひとよゆゑ', 'みをつくしてや', '恋ひわたるべき'],
    singer: '皇嘉門院別当',
    kimariji: 'なにはえ',
    shimo_kimariji: 'みをつくしてや'
  },
  {
    num: 89,
    song: ['玉の緒よ', '絶えなば絶えね', 'ながらへば', '忍ぶることの', 'よわりもぞする'],
    singer: '式子内親王',
    kimariji: 'たま',
    shimo_kimariji: 'しの'
  },
  {
    num: 90,
    song: ['見せばやな', '雄島のあまの', '袖だにも', 'ぬれにぞぬれし', '色はかはらず'],
    singer: '殷富門院大輔',
    kimariji: 'みせ',
    shimo_kimariji: 'ぬ'
  },
  {
    num: 91,
    song: ['きりぎりす', '鳴くや霜夜の', 'さむしろに', '衣かたしき', 'ひとりかも寝む', '・・'],
    singer: '後京極摂政前太政大臣',
    kimariji: 'き',
    shimo_kimariji: 'ころもか'
  },
  {
    num: 92,
    song: ['わが袖は', '潮干に見えぬ', '沖の石の', '人こそ知らね', 'かわく間もなし'],
    singer: '二条院讃岐',
    kimariji: 'わがそ',
    shimo_kimariji: 'ひとこそし'
  },
  {
    num: 93,
    song: ['世の中は', '常にもがもな', '渚こぐ', 'あまの小舟の', '綱手かなしも'],
    singer: '鎌倉右大臣',
    kimariji: 'よのなかは',
    shimo_kimariji: 'あまの'
  },
  {num: 94, song: ['み吉野の', '山の秋風', 'さ夜更けて', 'ふるさと寒く', '衣うつなり'], singer: '参議雅経', kimariji: 'みよ', shimo_kimariji: 'ふる'},
  {
    num: 95,
    song: ['おほけなく', 'うき世の民に', 'おほふかな', 'わが立つ杣に', '墨染の袖'],
    singer: '前大僧正慈円',
    kimariji: 'おほけ',
    shimo_kimariji: 'わがた'
  },
  {
    num: 96,
    song: ['花さそふ', '嵐の庭の', '雪ならで', 'ふりゆくものは', 'わが身なりけり', '・・・'],
    singer: '入道前太政大臣',
    kimariji: 'はなさ',
    shimo_kimariji: 'ふり'
  },
  {
    num: 97,
    song: ['来ぬ人を', 'まつほの浦の', '夕なぎに', '焼くや藻塩の', '身もこがれつつ'],
    singer: '権中納言定家',
    kimariji: 'こぬ',
    shimo_kimariji: 'やく'
  },
  {
    num: 98,
    song: ['風そよぐ', 'ならの小川の', '夕暮れは', 'みそぎぞ夏の', 'しるしなりける'],
    singer: '従二位家隆',
    kimariji: 'かぜそ',
    shimo_kimariji: 'みそ'
  },
  {
    num: 99,
    song: ['人も惜し', '人も恨めし', 'あぢきなく', '世を思ふゆゑに', '物思ふ身は'],
    singer: '後鳥羽院',
    kimariji: 'ひとも',
    shimo_kimariji: 'よをお'
  },
  {
    num: 100,
    song: ['ももしきや', '古き軒端の', 'しのぶにも', 'なほあまりある', '昔なりけり'],
    singer: '順徳院',
    kimariji: 'もも',
    shimo_kimariji: 'なほあ'
  },
];
