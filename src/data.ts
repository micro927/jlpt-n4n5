import type {
  Level,
  Tab,
  VocabItem,
  KanjiItem,
  StudyItem,
  VocabCategory,
  OverallItem
} from './types';
import { GRAMMAR_N4, GRAMMAR_N5 } from './grammar_data';
import { vocab as EXTERNAL_VOCAB } from './data_vocab_external';
import cheatsheet from './testing_cheatsheet.json';

const VOCAB_N4: VocabItem[] = [
  { jp: '週末', furi: 'しゅうまつ', rom: 'shuumatsu', th: 'สุดสัปดาห์', cat: 'time' },
  { jp: '来週', furi: 'らいしゅう', rom: 'raishuu', th: 'สัปดาห์หน้า', cat: 'time' },
  { jp: '先週', furi: 'せんしゅう', rom: 'senshuu', th: 'สัปดาห์ที่แล้ว', cat: 'time' },
  { jp: '来月', furi: 'らいげつ', rom: 'raigetsu', th: 'เดือนหน้า', cat: 'time' },
  { jp: '先月', furi: 'せんげつ', rom: 'sengetsu', th: 'เดือนที่แล้ว', cat: 'time' },
  { jp: '去年', furi: 'きょねん', rom: 'kyonen', th: 'ปีที่แล้ว', cat: 'time' },
  { jp: '来年', furi: 'らいねん', rom: 'rainen', th: 'ปีหน้า', cat: 'time' },
  { jp: '最近', furi: 'さいきん', rom: 'saikin', th: 'เร็ว ๆ นี้ / ช่วงนี้', cat: 'time' },
  { jp: '以前', furi: 'いぜん', rom: 'izen', th: 'ก่อนหน้านี้', cat: 'time' },
  { jp: '以後', furi: 'いご', rom: 'igo', th: 'หลังจากนี้', cat: 'time' },
  { jp: '午前', furi: 'ごぜん', rom: 'gozen', th: 'ก่อนเที่ยง / AM', cat: 'time' },
  { jp: '午後', furi: 'ごご', rom: 'gogo', th: 'บ่าย / PM', cat: 'time' },
  { jp: '期間', furi: 'きかん', rom: 'kikan', th: 'ระยะเวลา', cat: 'time' },
  { jp: '準備', furi: 'じゅんび', rom: 'junbi', th: 'การเตรียม', cat: 'daily' },
  { jp: 'お釣り', furi: 'おつり', rom: 'otsuri', th: 'เงินทอน', cat: 'daily' },
  { jp: 'お土産', furi: 'おみやげ', rom: 'omiyage', th: 'ของฝาก', cat: 'daily' },
  { jp: 'ごみ', furi: 'ごみ', rom: 'gomi', th: 'ขยะ', cat: 'daily' },
  { jp: '洗濯', furi: 'せんたく', rom: 'sentaku', th: 'การซักผ้า', cat: 'daily' },
  { jp: '掃除', furi: 'そうじ', rom: 'souji', th: 'การทำความสะอาด', cat: 'daily' },
  { jp: '買い物', furi: 'かいもの', rom: 'kaimono', th: 'การช้อปปิ้ง', cat: 'daily' },
  { jp: '料理', furi: 'りょうり', rom: 'ryouri', th: 'การทำอาหาร / อาหาร', cat: 'daily' },
  { jp: '食事', furi: 'しょくじ', rom: 'shokuji', th: 'มื้ออาหาร / การรับประทาน', cat: 'daily' },
  { jp: '入浴', furi: 'にゅうよく', rom: 'nyuuyoku', th: 'การอาบน้ำ', cat: 'daily' },
  { jp: 'お風呂', furi: 'おふろ', rom: 'ofuro', th: 'อ่างอาบน้ำ / ห้องน้ำ', cat: 'daily' },
  { jp: '生活', furi: 'せいかつ', rom: 'seikatsu', th: 'ชีวิตประจำวัน', cat: 'daily' },
  { jp: '習慣', furi: 'しゅうかん', rom: 'shuukan', th: 'นิสัย / ธรรมเนียม', cat: 'daily' },
  { jp: '経験', furi: 'けいけん', rom: 'keiken', th: 'ประสบการณ์', cat: 'daily' },
  { jp: '練習', furi: 'れんしゅう', rom: 'renshuu', th: 'การฝึกซ้อม', cat: 'daily' },
  { jp: '予定', furi: 'よてい', rom: 'yotei', th: 'กำหนดการ / แผน', cat: 'daily' },
  { jp: '連絡', furi: 'れんらく', rom: 'renraku', th: 'การติดต่อ', cat: 'daily' },
  { jp: '説明', furi: 'せつめい', rom: 'setsumei', th: 'คำอธิบาย', cat: 'daily' },
  { jp: '質問', furi: 'しつもん', rom: 'shitsumon', th: 'คำถาม', cat: 'daily' },
  { jp: '返事', furi: 'へんじ', rom: 'henji', th: 'การตอบ', cat: 'daily' },
  { jp: '会議', furi: 'かいぎ', rom: 'kaigi', th: 'การประชุม', cat: 'work' },
  { jp: '宿題', furi: 'しゅくだい', rom: 'shukudai', th: 'การบ้าน', cat: 'work' },
  { jp: '授業', furi: 'じゅぎょう', rom: 'jugyou', th: 'ชั้นเรียน / คาบเรียน', cat: 'work' },
  { jp: '試験', furi: 'しけん', rom: 'shiken', th: 'การสอบ', cat: 'work' },
  { jp: '成績', furi: 'せいせき', rom: 'seiseki', th: 'ผลการเรียน', cat: 'work' },
  { jp: '卒業', furi: 'そつぎょう', rom: 'sotsugyou', th: 'การจบการศึกษา', cat: 'work' },
  { jp: '入学', furi: 'にゅうがく', rom: 'nyuugaku', th: 'การเข้าเรียน', cat: 'work' },
  { jp: '留学', furi: 'りゅうがく', rom: 'ryuugaku', th: 'การเรียนต่อต่างประเทศ', cat: 'work' },
  { jp: '仕事', furi: 'しごと', rom: 'shigoto', th: 'งาน', cat: 'work' },
  { jp: '残業', furi: 'ざんぎょう', rom: 'zangyou', th: 'การทำงานล่วงเวลา', cat: 'work' },
  { jp: '休暇', furi: 'きゅうか', rom: 'kyuuka', th: 'วันหยุด / ลา', cat: 'work' },
  { jp: '給料', furi: 'きゅうりょう', rom: 'kyuuryou', th: 'เงินเดือน', cat: 'work' },
  { jp: '会社', furi: 'かいしゃ', rom: 'kaisha', th: 'บริษัท', cat: 'work' },
  { jp: '社員', furi: 'しゃいん', rom: 'shain', th: 'พนักงาน', cat: 'work' },
  { jp: '部長', furi: 'ぶちょう', rom: 'buchou', th: 'ผู้จัดการแผนก', cat: 'work' },
  { jp: '同僚', furi: 'どうりょう', rom: 'douryou', th: 'เพื่อนร่วมงาน', cat: 'work' },
  { jp: '嬉しい', furi: 'うれしい', rom: 'ureshii', th: 'ดีใจ', cat: 'emotion' },
  { jp: '悲しい', furi: 'かなしい', rom: 'kanashii', th: 'เศร้า', cat: 'emotion' },
  { jp: '寂しい', furi: 'さびしい', rom: 'sabishii', th: 'เหงา', cat: 'emotion' },
  { jp: '恥ずかしい', furi: 'はずかしい', rom: 'hazukashii', th: 'อาย', cat: 'emotion' },
  { jp: '心配', furi: 'しんぱい', rom: 'shinpai', th: 'กังวล', cat: 'emotion' },
  { jp: '驚く', furi: 'おどろく', rom: 'odoroku', th: 'ตกใจ / แปลกใจ', cat: 'emotion' },
  { jp: '怒る', furi: 'おこる', rom: 'okoru', th: 'โกรธ', cat: 'emotion' },
  { jp: '困る', furi: 'こまる', rom: 'komaru', th: 'ลำบากใจ / เป็นปัญหา', cat: 'emotion' },
  { jp: '楽しむ', furi: 'たのしむ', rom: 'tanoshimu', th: 'สนุกสนาน', cat: 'emotion' },
  { jp: '安心', furi: 'あんしん', rom: 'anshin', th: 'สบายใจ / โล่งใจ', cat: 'emotion' },
  { jp: '出発', furi: 'しゅっぱつ', rom: 'shuppatsu', th: 'การออกเดินทาง', cat: 'transport' },
  { jp: '到着', furi: 'とうちゃく', rom: 'touchaku', th: 'การมาถึง', cat: 'transport' },
  { jp: '乗り換え', furi: 'のりかえ', rom: 'norikae', th: 'การเปลี่ยนรถ/สาย', cat: 'transport' },
  { jp: '切符', furi: 'きっぷ', rom: 'kippu', th: 'ตั๋ว', cat: 'transport' },
  { jp: '路線', furi: 'ろせん', rom: 'rosen', th: 'เส้นทาง/สาย', cat: 'transport' },
  { jp: '駐車場', furi: 'ちゅうしゃじょう', rom: 'chuushajou', th: 'ที่จอดรถ', cat: 'transport' },
  { jp: '信号', furi: 'しんごう', rom: 'shingou', th: 'สัญญาณไฟจราจร', cat: 'transport' },
  { jp: '交差点', furi: 'こうさてん', rom: 'kousaten', th: 'สี่แยก', cat: 'transport' },
  { jp: '病気', furi: 'びょうき', rom: 'byouki', th: 'เจ็บป่วย / โรค', cat: 'body' },
  { jp: '熱', furi: 'ねつ', rom: 'netsu', th: 'ไข้', cat: 'body' },
  { jp: '咳', furi: 'せき', rom: 'seki', th: 'ไอ', cat: 'body' },
  { jp: '頭痛', furi: 'ずつう', rom: 'zutsuu', th: 'ปวดหัว', cat: 'body' },
  { jp: '腹痛', furi: 'ふくつう', rom: 'fukutsuu', th: 'ปวดท้อง', cat: 'body' },
  { jp: '薬', furi: 'くすり', rom: 'kusuri', th: 'ยา', cat: 'body' },
  { jp: '医者', furi: 'いしゃ', rom: 'isha', th: 'หมอ', cat: 'body' },
  { jp: '入院', furi: 'にゅういん', rom: 'nyuuin', th: 'การเข้าโรงพยาบาล', cat: 'body' },
  { jp: '手術', furi: 'しゅじゅつ', rom: 'shujutsu', th: 'การผ่าตัด', cat: 'body' },
  { jp: '季節', furi: 'きせつ', rom: 'kisetsu', th: 'ฤดูกาล', cat: 'nature' },
  { jp: '台風', furi: 'たいふう', rom: 'taifuu', th: 'พายุไต้ฝุ่น', cat: 'nature' },
  { jp: '地震', furi: 'じしん', rom: 'jishin', th: 'แผ่นดินไหว', cat: 'nature' },
  { jp: '気候', furi: 'きこう', rom: 'kikou', th: 'ภูมิอากาศ', cat: 'nature' },
  { jp: '森', furi: 'もり', rom: 'mori', th: 'ป่า', cat: 'nature' },
  { jp: '海岸', furi: 'かいがん', rom: 'kaigan', th: 'ชายฝั่ง', cat: 'nature' },
  { jp: '集める', furi: 'あつめる', rom: 'atsumeru', th: 'สะสม / เก็บรวบรวม', cat: 'action' },
  { jp: '比べる', furi: 'くらべる', rom: 'kuraberu', th: 'เปรียบเทียบ', cat: 'action' },
  { jp: '調べる', furi: 'しらべる', rom: 'shiraberu', th: 'ค้นหา / สืบค้น', cat: 'action' },
  { jp: '決める', furi: 'きめる', rom: 'kimeru', th: 'ตัดสินใจ', cat: 'action' },
  { jp: '変える', furi: 'かえる', rom: 'kaeru', th: 'เปลี่ยนแปลง', cat: 'action' },
  { jp: '続ける', furi: 'つづける', rom: 'tsuzukeru', th: 'ทำต่อไป', cat: 'action' },
  { jp: '始める', furi: 'はじめる', rom: 'hajimeru', th: 'เริ่มต้น', cat: 'action' },
  { jp: '終わる', furi: 'おわる', rom: 'owaru', th: 'จบสิ้น', cat: 'action' },
  { jp: '送る', furi: 'おくる', rom: 'okuru', th: 'ส่ง', cat: 'action' },
  { jp: '受け取る', furi: 'うけとる', rom: 'uketoru', th: 'รับ', cat: 'action' },
  { jp: '断る', furi: 'ことわる', rom: 'kotowaru', th: 'ปฏิเสธ', cat: 'action' },
  { jp: '迷う', furi: 'まよう', rom: 'mayou', th: 'ลังเล / หลงทาง', cat: 'action' },
  { jp: '気づく', furi: 'きづく', rom: 'kiduku', th: 'สังเกตเห็น / รู้ตัว', cat: 'action' },
  { jp: '諦める', furi: 'あきらめる', rom: 'akirameru', th: 'ยอมแพ้ / ล้มเลิก', cat: 'action' }
];

const KANJI_N4: KanjiItem[] = [
  {
    jp: '週',
    furi: 'しゅう／週',
    on: 'シュウ',
    kun: '–',
    th: 'สัปดาห์',
    ex: '来週（らいしゅう）・今週（こんしゅう）',
    cat: 'kanji'
  },
  {
    jp: '昨',
    furi: 'さく',
    on: 'サク',
    kun: '–',
    th: 'เมื่อวาน/ที่แล้ว',
    ex: '昨日（きのう）・昨年（さくねん）',
    cat: 'kanji'
  },
  {
    jp: '去',
    furi: 'きょ・さ',
    on: 'キョ',
    kun: 'さ（る）',
    th: 'ผ่านไป / ไปจาก',
    ex: '去年（きょねん）・去る（さる）',
    cat: 'kanji'
  },
  {
    jp: '代',
    furi: 'だい・か',
    on: 'ダイ／タイ',
    kun: 'か（わる）',
    th: 'แทน / ยุค / ค่าใช้จ่าย',
    ex: '時代（じだい）・代わる（かわる）',
    cat: 'kanji'
  },
  {
    jp: '新',
    furi: 'しん・あたら',
    on: 'シン',
    kun: 'あたら（しい）・あら（た）',
    th: 'ใหม่',
    ex: '新しい（あたらしい）・新幹線（しんかんせん）',
    cat: 'kanji'
  },
  {
    jp: '古',
    furi: 'こ・ふる',
    on: 'コ',
    kun: 'ふる（い）',
    th: 'เก่า',
    ex: '古い（ふるい）・古典（こてん）',
    cat: 'kanji'
  },
  {
    jp: '食',
    furi: 'しょく・た',
    on: 'ショク',
    kun: 'た（べる）・く（う）',
    th: 'กิน / อาหาร',
    ex: '食べる（たべる）・食事（しょくじ）',
    cat: 'kanji'
  },
  {
    jp: '飲',
    furi: 'いん・の',
    on: 'イン',
    kun: 'の（む）',
    th: 'ดื่ม',
    ex: '飲む（のむ）・飲み物（のみもの）',
    cat: 'kanji'
  },
  {
    jp: '見',
    furi: 'けん・み',
    on: 'ケン',
    kun: 'み（る）・み（える）',
    th: 'ดู / มองเห็น',
    ex: '見る（みる）・見物（けんぶつ）',
    cat: 'kanji'
  },
  {
    jp: '聞',
    furi: 'ぶん・き',
    on: 'ブン／モン',
    kun: 'き（く）・き（こえる）',
    th: 'ฟัง / ถาม / ได้ยิน',
    ex: '聞く（きく）・新聞（しんぶん）',
    cat: 'kanji'
  },
  {
    jp: '書',
    furi: 'しょ・か',
    on: 'ショ',
    kun: 'か（く）',
    th: 'เขียน',
    ex: '書く（かく）・書類（しょるい）',
    cat: 'kanji'
  },
  {
    jp: '読',
    furi: 'どく・よ',
    on: 'ドク',
    kun: 'よ（む）',
    th: 'อ่าน',
    ex: '読む（よむ）・読書（どくしょ）',
    cat: 'kanji'
  },
  {
    jp: '話',
    furi: 'わ・はな',
    on: 'ワ',
    kun: 'はな（す）・はなし',
    th: 'พูด / เรื่องเล่า',
    ex: '話す（はなす）・電話（でんわ）',
    cat: 'kanji'
  },
  {
    jp: '来',
    furi: 'らい・く',
    on: 'ライ',
    kun: 'く（る）・き（たる）',
    th: 'มา',
    ex: '来る（くる）・来年（らいねん）',
    cat: 'kanji'
  },
  {
    jp: '行',
    furi: 'こう・い',
    on: 'コウ／ギョウ',
    kun: 'い（く）・ゆ（く）',
    th: 'ไป',
    ex: '行く（いく）・旅行（りょこう）',
    cat: 'kanji'
  },
  {
    jp: '帰',
    furi: 'き・かえ',
    on: 'キ',
    kun: 'かえ（る）',
    th: 'กลับ',
    ex: '帰る（かえる）・帰国（きこく）',
    cat: 'kanji'
  },
  {
    jp: '出',
    furi: 'しゅつ・で',
    on: 'シュツ／スイ',
    kun: 'で（る）・だ（す）',
    th: 'ออก / นำออก',
    ex: '出る（でる）・出発（しゅっぱつ）',
    cat: 'kanji'
  },
  {
    jp: '入',
    furi: 'にゅう・はい',
    on: 'ニュウ',
    kun: 'はい（る）・い（れる）',
    th: 'เข้า',
    ex: '入る（はいる）・入学（にゅうがく）',
    cat: 'kanji'
  },
  {
    jp: '北',
    furi: 'ほく・きた',
    on: 'ホク',
    kun: 'きた',
    th: 'เหนือ',
    ex: '北（きた）・北海道（ほっかいどう）',
    cat: 'kanji'
  },
  {
    jp: '南',
    furi: 'なん・みなみ',
    on: 'ナン／ナ',
    kun: 'みなみ',
    th: 'ใต้',
    ex: '南（みなみ）・南米（なんべい）',
    cat: 'kanji'
  },
  {
    jp: '東',
    furi: 'とう・ひがし',
    on: 'トウ',
    kun: 'ひがし',
    th: 'ตะวันออก',
    ex: '東（ひがし）・東京（とうきょう）',
    cat: 'kanji'
  },
  {
    jp: '西',
    furi: 'せい・にし',
    on: 'セイ／サイ',
    kun: 'にし',
    th: 'ตะวันตก',
    ex: '西（にし）・関西（かんさい）',
    cat: 'kanji'
  },
  {
    jp: '駅',
    furi: 'えき',
    on: 'エキ',
    kun: '–',
    th: 'สถานี',
    ex: '駅（えき）・駅員（えきいん）',
    cat: 'kanji'
  },
  {
    jp: '電',
    furi: 'でん',
    on: 'デン',
    kun: '–',
    th: 'ไฟฟ้า',
    ex: '電車（でんしゃ）・電話（でんわ）',
    cat: 'kanji'
  },
  {
    jp: '車',
    furi: 'しゃ・くるま',
    on: 'シャ',
    kun: 'くるま',
    th: 'รถ',
    ex: '車（くるま）・電車（でんしゃ）',
    cat: 'kanji'
  },
  {
    jp: '校',
    furi: 'こう',
    on: 'コウ',
    kun: '–',
    th: 'โรงเรียน',
    ex: '学校（がっこう）・高校（こうこう）',
    cat: 'kanji'
  },
  {
    jp: '教',
    furi: 'きょう・おし',
    on: 'キョウ',
    kun: 'おし（える）・おそ（わる）',
    th: 'สอน / การศึกษา',
    ex: '教える（おしえる）・教室（きょうしつ）',
    cat: 'kanji'
  },
  {
    jp: '習',
    furi: 'しゅう・なら',
    on: 'シュウ',
    kun: 'なら（う）',
    th: 'เรียน / ฝึก',
    ex: '習う（ならう）・練習（れんしゅう）',
    cat: 'kanji'
  },
  {
    jp: '医',
    furi: 'い',
    on: 'イ',
    kun: '–',
    th: 'การแพทย์ / หมอ',
    ex: '医者（いしゃ）・医学（いがく）',
    cat: 'kanji'
  },
  {
    jp: '病',
    furi: 'びょう・やまい',
    on: 'ビョウ',
    kun: 'やまい',
    th: 'โรค',
    ex: '病気（びょうき）・病院（びょういん）',
    cat: 'kanji'
  },
  {
    jp: '薬',
    furi: 'やく・くすり',
    on: 'ヤク',
    kun: 'くすり',
    th: 'ยา',
    ex: '薬（くすり）・薬局（やっきょく）',
    cat: 'kanji'
  },
  {
    jp: '体',
    furi: 'たい・からだ',
    on: 'タイ／テイ',
    kun: 'からだ',
    th: 'ร่างกาย',
    ex: '体（からだ）・体育（たいいく）',
    cat: 'kanji'
  },
  {
    jp: '頭',
    furi: 'とう・あたま',
    on: 'トウ／ズ',
    kun: 'あたま・かしら',
    th: 'หัว',
    ex: '頭（あたま）・頭痛（ずつう）',
    cat: 'kanji'
  },
  {
    jp: '心',
    furi: 'しん・こころ',
    on: 'シン',
    kun: 'こころ',
    th: 'จิตใจ / หัวใจ',
    ex: '心（こころ）・心配（しんぱい）',
    cat: 'kanji'
  },
  {
    jp: '天',
    furi: 'てん',
    on: 'テン',
    kun: 'あめ・あま',
    th: 'ฟ้า / สวรรค์',
    ex: '天気（てんき）・天国（てんごく）',
    cat: 'kanji'
  },
  {
    jp: '気',
    furi: 'き・け',
    on: 'キ／ケ',
    kun: '–',
    th: 'อากาศ / ความรู้สึก',
    ex: '天気（てんき）・気持ち（きもち）',
    cat: 'kanji'
  },
  {
    jp: '海',
    furi: 'かい・うみ',
    on: 'カイ',
    kun: 'うみ',
    th: 'ทะเล',
    ex: '海（うみ）・海岸（かいがん）',
    cat: 'kanji'
  },
  {
    jp: '山',
    furi: 'さん・やま',
    on: 'サン',
    kun: 'やま',
    th: 'ภูเขา',
    ex: '山（やま）・登山（とざん）',
    cat: 'kanji'
  },
  {
    jp: '川',
    furi: 'せん・かわ',
    on: 'セン',
    kun: 'かわ',
    th: 'แม่น้ำ',
    ex: '川（かわ）・川沿い（かわぞい）',
    cat: 'kanji'
  },
  {
    jp: '花',
    furi: 'か・はな',
    on: 'カ',
    kun: 'はな',
    th: 'ดอกไม้',
    ex: '花（はな）・花見（はなみ）',
    cat: 'kanji'
  },
  {
    jp: '知',
    furi: 'ち・し',
    on: 'チ',
    kun: 'し（る）',
    th: 'รู้ / รู้จัก',
    ex: '知る（しる）・知識（ちしき）',
    cat: 'kanji'
  },
  {
    jp: '思',
    furi: 'し・おも',
    on: 'シ',
    kun: 'おも（う）',
    th: 'คิด / รู้สึก',
    ex: '思う（おもう）・思い出（おもいで）',
    cat: 'kanji'
  },
  {
    jp: '待',
    furi: 'たい・ま',
    on: 'タイ',
    kun: 'ま（つ）',
    th: 'รอ',
    ex: '待つ（まつ）・期待（きたい）',
    cat: 'kanji'
  },
  {
    jp: '使',
    furi: 'し・つか',
    on: 'シ',
    kun: 'つか（う）',
    th: 'ใช้',
    ex: '使う（つかう）・使い方（つかいかた）',
    cat: 'kanji'
  },
  {
    jp: '作',
    furi: 'さく・つく',
    on: 'サク／サ',
    kun: 'つく（る）',
    th: 'สร้าง / ทำ',
    ex: '作る（つくる）・作品（さくひん）',
    cat: 'kanji'
  },
  {
    jp: '持',
    furi: 'じ・も',
    on: 'ジ',
    kun: 'も（つ）',
    th: 'ถือ / มี',
    ex: '持つ（もつ）・気持ち（きもち）',
    cat: 'kanji'
  },
  {
    jp: '買',
    furi: 'ばい・か',
    on: 'バイ',
    kun: 'か（う）',
    th: 'ซื้อ',
    ex: '買う（かう）・買い物（かいもの）',
    cat: 'kanji'
  },
  {
    jp: '売',
    furi: 'ばい・う',
    on: 'バイ',
    kun: 'う（る）・う（れる）',
    th: 'ขาย',
    ex: '売る（うる）・売り場（うりば）',
    cat: 'kanji'
  },
  {
    jp: '急',
    furi: 'きゅう・いそ',
    on: 'キュウ',
    kun: 'いそ（ぐ）',
    th: 'รีบ / เร่งด่วน',
    ex: '急ぐ（いそぐ）・急行（きゅうこう）',
    cat: 'kanji'
  },
  {
    jp: '多',
    furi: 'た・おお',
    on: 'タ',
    kun: 'おお（い）',
    th: 'มาก',
    ex: '多い（おおい）・多分（たぶん）',
    cat: 'kanji'
  }
];

const VOCAB_N5: VocabItem[] = [
  { jp: '今日', furi: 'きょう', rom: 'kyou', th: 'วันนี้', cat: 'time' },
  { jp: '明日', furi: 'あした', rom: 'ashita', th: 'พรุ่งนี้', cat: 'time' },
  { jp: '昨日', furi: 'きのう', rom: 'kinou', th: 'เมื่อวาน', cat: 'time' },
  { jp: '今', furi: 'いま', rom: 'ima', th: 'ตอนนี้', cat: 'time' },
  { jp: '朝', furi: 'あさ', rom: 'asa', th: 'เช้า', cat: 'time' },
  { jp: '昼', furi: 'ひる', rom: 'hiru', th: 'กลางวัน', cat: 'time' },
  { jp: '夜', furi: 'よる', rom: 'yoru', th: 'กลางคืน', cat: 'time' },
  { jp: '今年', furi: 'ことし', rom: 'kotoshi', th: 'ปีนี้', cat: 'time' },
  { jp: '毎日', furi: 'まいにち', rom: 'mainichi', th: 'ทุกวัน', cat: 'time' },
  { jp: '毎週', furi: 'まいしゅう', rom: 'maishuu', th: 'ทุกสัปดาห์', cat: 'time' },
  { jp: '毎月', furi: 'まいつき', rom: 'maitsuki', th: 'ทุกเดือน', cat: 'time' },
  { jp: '毎年', furi: 'まいとし', rom: 'maitoshi', th: 'ทุกปี', cat: 'time' },
  { jp: '家', furi: 'いえ', rom: 'ie', th: 'บ้าน', cat: 'daily' },
  { jp: '部屋', furi: 'へや', rom: 'heya', th: 'ห้อง', cat: 'daily' },
  { jp: 'ドア', furi: 'ドア', rom: 'doa', th: 'ประตู', cat: 'daily' },
  { jp: '窓', furi: 'まど', rom: 'mado', th: 'หน้าต่าง', cat: 'daily' },
  { jp: '電話', furi: 'でんわ', rom: 'denwa', th: 'โทรศัพท์', cat: 'daily' },
  { jp: 'テレビ', furi: 'テレビ', rom: 'terebi', th: 'โทรทัศน์', cat: 'daily' },
  { jp: '新聞', furi: 'しんぶん', rom: 'shinbun', th: 'หนังสือพิมพ์', cat: 'daily' },
  { jp: '本', furi: 'ほん', rom: 'hon', th: 'หนังสือ', cat: 'daily' },
  { jp: 'お金', furi: 'おかね', rom: 'okane', th: 'เงิน', cat: 'daily' },
  { jp: '時間', furi: 'じかん', rom: 'jikan', th: 'เวลา', cat: 'daily' },
  { jp: '水', furi: 'みず', rom: 'mizu', th: 'น้ำ', cat: 'daily' },
  { jp: 'ご飯', furi: 'ごはん', rom: 'gohan', th: 'ข้าว / มื้ออาหาร', cat: 'daily' },
  { jp: '学校', furi: 'がっこう', rom: 'gakkou', th: 'โรงเรียน', cat: 'work' },
  { jp: '先生', furi: 'せんせい', rom: 'sensei', th: 'ครู / อาจารย์', cat: 'work' },
  { jp: '学生', furi: 'がくせい', rom: 'gakusei', th: 'นักเรียน', cat: 'work' },
  { jp: '教室', furi: 'きょうしつ', rom: 'kyoushitsu', th: 'ห้องเรียน', cat: 'work' },
  { jp: '友達', furi: 'ともだち', rom: 'tomodachi', th: 'เพื่อน', cat: 'work' },
  { jp: '会社員', furi: 'かいしゃいん', rom: 'kaishain', th: 'พนักงานบริษัท', cat: 'work' },
  { jp: '好き', furi: 'すき', rom: 'suki', th: 'ชอบ', cat: 'emotion' },
  { jp: '嫌い', furi: 'きらい', rom: 'kirai', th: 'ไม่ชอบ', cat: 'emotion' },
  { jp: '大好き', furi: 'だいすき', rom: 'daisuki', th: 'ชอบมาก', cat: 'emotion' },
  { jp: '楽しい', furi: 'たのしい', rom: 'tanoshii', th: 'สนุก / มีความสุข', cat: 'emotion' },
  { jp: 'おいしい', furi: 'おいしい', rom: 'oishii', th: 'อร่อย', cat: 'emotion' },
  { jp: '難しい', furi: 'むずかしい', rom: 'muzukashii', th: 'ยาก', cat: 'emotion' },
  { jp: '易しい', furi: 'やさしい', rom: 'yasashii', th: 'ง่าย', cat: 'emotion' },
  { jp: '駅', furi: 'えき', rom: 'eki', th: 'สถานี', cat: 'transport' },
  { jp: '電車', furi: 'でんしゃ', rom: 'densha', th: 'รถไฟฟ้า', cat: 'transport' },
  { jp: 'バス', furi: 'バス', rom: 'basu', th: 'รถบัส', cat: 'transport' },
  { jp: 'タクシー', furi: 'タクシー', rom: 'takushii', th: 'แท็กซี่', cat: 'transport' },
  { jp: '自転車', furi: 'じてんしゃ', rom: 'jitensha', th: 'จักรยาน', cat: 'transport' },
  { jp: '右', furi: 'みぎ', rom: 'migi', th: 'ขวา', cat: 'transport' },
  { jp: '左', furi: 'ひだり', rom: 'hidari', th: 'ซ้าย', cat: 'transport' },
  { jp: 'まっすぐ', furi: 'まっすぐ', rom: 'massugu', th: 'ตรงไป', cat: 'transport' },
  { jp: '目', furi: 'め', rom: 'me', th: 'ตา', cat: 'body' },
  { jp: '耳', furi: 'みみ', rom: 'mimi', th: 'หู', cat: 'body' },
  { jp: '口', furi: 'くち', rom: 'kuchi', th: 'ปาก', cat: 'body' },
  { jp: '手', furi: 'て', rom: 'te', th: 'มือ', cat: 'body' },
  { jp: '足', furi: 'あし', rom: 'ashi', th: 'เท้า / ขา', cat: 'body' },
  { jp: '頭', furi: 'あたま', rom: 'atama', th: 'หัว', cat: 'body' },
  { jp: '空', furi: 'そら', rom: 'sora', th: 'ท้องฟ้า', cat: 'nature' },
  { jp: '山', furi: 'やま', rom: 'yama', th: 'ภูเขา', cat: 'nature' },
  { jp: '川', furi: 'かわ', rom: 'kawa', th: 'แม่น้ำ', cat: 'nature' },
  { jp: '木', furi: 'き', rom: 'ki', th: 'ต้นไม้', cat: 'nature' },
  { jp: '花', furi: 'はな', rom: 'hana', th: 'ดอกไม้', cat: 'nature' },
  { jp: '雨', furi: 'あめ', rom: 'ame', th: 'ฝน', cat: 'nature' },
  { jp: '雪', furi: 'ゆき', rom: 'yuki', th: 'หิมะ', cat: 'nature' },
  { jp: '犬', furi: 'いぬ', rom: 'inu', th: 'สุนัข', cat: 'nature' },
  { jp: '猫', furi: 'ねこ', rom: 'neko', th: 'แมว', cat: 'nature' },
  { jp: '行く', furi: 'いく', rom: 'iku', th: 'ไป', cat: 'action' },
  { jp: '来る', furi: 'くる', rom: 'kuru', th: 'มา', cat: 'action' },
  { jp: '帰る', furi: 'かえる', rom: 'kaeru', th: 'กลับ', cat: 'action' },
  { jp: '食べる', furi: 'たべる', rom: 'taberu', th: 'กิน', cat: 'action' },
  { jp: '飲む', furi: 'のむ', rom: 'nomu', th: 'ดื่ม', cat: 'action' },
  { jp: '見る', furi: 'みる', rom: 'miru', th: 'ดู', cat: 'action' },
  { jp: '聞く', furi: 'きく', rom: 'kiku', th: 'ฟัง / ถาม', cat: 'action' },
  { jp: '話す', furi: 'はなす', rom: 'hanasu', th: 'พูด', cat: 'action' },
  { jp: '読む', furi: 'よむ', rom: 'yomu', th: 'อ่าน', cat: 'action' },
  { jp: '書く', furi: 'かく', rom: 'kaku', th: 'เขียน', cat: 'action' },
  { jp: '買う', furi: 'かう', rom: 'kau', th: 'ซื้อ', cat: 'action' },
  { jp: '売る', furi: 'うる', rom: 'uru', th: 'ขาย', cat: 'action' },
  { jp: '起きる', furi: 'おきる', rom: 'okiru', th: 'ตื่นนอน', cat: 'action' },
  { jp: '寝る', furi: 'ねる', rom: 'neru', th: 'นอน', cat: 'action' },
  { jp: '待つ', furi: 'まつ', rom: 'matsu', th: 'รอ', cat: 'action' },
  { jp: '会う', furi: 'あう', rom: 'au', th: 'พบ / เจอ', cat: 'action' },
  { jp: '使う', furi: 'つかう', rom: 'tsukau', th: 'ใช้', cat: 'action' },
  { jp: '作る', furi: 'つくる', rom: 'tsukuru', th: 'ทำ / สร้าง', cat: 'action' }
];

const KANJI_N5: KanjiItem[] = [
  {
    jp: '日',
    furi: 'にち・ひ',
    on: 'ニチ／ジツ',
    kun: 'ひ・か',
    th: 'วัน / ดวงอาทิตย์',
    ex: '日本（にほん）・毎日（まいにち）',
    cat: 'kanji'
  },
  {
    jp: '月',
    furi: 'つき・げつ',
    on: 'ゲツ／ガツ',
    kun: 'つき',
    th: 'เดือน / ดวงจันทร์',
    ex: '月曜日（げつようび）・今月（こんげつ）',
    cat: 'kanji'
  },
  {
    jp: '年',
    furi: 'ねん・とし',
    on: 'ネン',
    kun: 'とし',
    th: 'ปี',
    ex: '今年（ことし）・来年（らいねん）',
    cat: 'kanji'
  },
  {
    jp: '人',
    furi: 'じん・ひと',
    on: 'ジン／ニン',
    kun: 'ひと',
    th: 'คน',
    ex: '日本人（にほんじん）・一人（ひとり）',
    cat: 'kanji'
  },
  {
    jp: '大',
    furi: 'だい・おお',
    on: 'ダイ／タイ',
    kun: 'おお（きい）',
    th: 'ใหญ่',
    ex: '大きい（おおきい）・大学（だいがく）',
    cat: 'kanji'
  },
  {
    jp: '小',
    furi: 'しょう・ちい',
    on: 'ショウ',
    kun: 'ちい（さい）・こ',
    th: 'เล็ก',
    ex: '小さい（ちいさい）・小学校（しょうがっこう）',
    cat: 'kanji'
  },
  {
    jp: '中',
    furi: 'ちゅう・なか',
    on: 'チュウ',
    kun: 'なか',
    th: 'กลาง / ใน',
    ex: '中（なか）・中学校（ちゅうがっこう）',
    cat: 'kanji'
  },
  {
    jp: '上',
    furi: 'じょう・うえ',
    on: 'ジョウ',
    kun: 'うえ・うわ・かみ',
    th: 'บน / ข้างบน',
    ex: '上（うえ）・上手（じょうず）',
    cat: 'kanji'
  },
  {
    jp: '下',
    furi: 'か・した',
    on: 'カ／ゲ',
    kun: 'した・しも',
    th: 'ล่าง / ข้างล่าง',
    ex: '下（した）・地下（ちか）',
    cat: 'kanji'
  },
  {
    jp: '一',
    furi: 'いち・ひと',
    on: 'イチ／イツ',
    kun: 'ひと（つ）',
    th: 'หนึ่ง',
    ex: '一つ（ひとつ）・一月（いちがつ）',
    cat: 'kanji'
  },
  {
    jp: '二',
    furi: 'に・ふた',
    on: 'ニ',
    kun: 'ふた（つ）',
    th: 'สอง',
    ex: '二つ（ふたつ）・二月（にがつ）',
    cat: 'kanji'
  },
  {
    jp: '三',
    furi: 'さん・み',
    on: 'サン',
    kun: 'み（つ）',
    th: 'สาม',
    ex: '三つ（みっつ）・三月（さんがつ）',
    cat: 'kanji'
  },
  {
    jp: '四',
    furi: 'し・よ',
    on: 'シ',
    kun: 'よ（つ）・よん',
    th: 'สี่',
    ex: '四つ（よっつ）・四月（しがつ）',
    cat: 'kanji'
  },
  {
    jp: '五',
    furi: 'ご・いつ',
    on: 'ゴ',
    kun: 'いつ（つ）',
    th: 'ห้า',
    ex: '五つ（いつつ）・五月（ごがつ）',
    cat: 'kanji'
  },
  {
    jp: '六',
    furi: 'ろく・む',
    on: 'ロク',
    kun: 'む（つ）・むっ',
    th: 'หก',
    ex: '六つ（むっつ）・六月（ろくがつ）',
    cat: 'kanji'
  },
  {
    jp: '七',
    furi: 'しち・なな',
    on: 'シチ',
    kun: 'なな（つ）',
    th: 'เจ็ด',
    ex: '七つ（ななつ）・七月（しちがつ）',
    cat: 'kanji'
  },
  {
    jp: '八',
    furi: 'はち・や',
    on: 'ハチ',
    kun: 'や（つ）',
    th: 'แปด',
    ex: '八つ（やっつ）・八月（はちがつ）',
    cat: 'kanji'
  },
  {
    jp: '九',
    furi: 'く・きゅう',
    on: 'ク／キュウ',
    kun: 'ここの（つ）',
    th: 'เก้า',
    ex: '九つ（ここのつ）・九月（くがつ）',
    cat: 'kanji'
  },
  {
    jp: '十',
    furi: 'じゅう・とお',
    on: 'ジュウ／ジッ',
    kun: 'とお',
    th: 'สิบ',
    ex: '十（じゅう）・十月（じゅうがつ）',
    cat: 'kanji'
  },
  {
    jp: '百',
    furi: 'ひゃく',
    on: 'ヒャク',
    kun: '–',
    th: 'ร้อย',
    ex: '百円（ひゃくえん）・三百（さんびゃく）',
    cat: 'kanji'
  },
  {
    jp: '千',
    furi: 'せん',
    on: 'セン',
    kun: '–',
    th: 'พัน',
    ex: '千円（せんえん）・三千（さんぜん）',
    cat: 'kanji'
  },
  {
    jp: '万',
    furi: 'まん',
    on: 'マン／バン',
    kun: '–',
    th: 'หมื่น',
    ex: '一万（いちまん）・万国（ばんこく）',
    cat: 'kanji'
  },
  {
    jp: '火',
    furi: 'か・ひ',
    on: 'カ',
    kun: 'ひ',
    th: 'ไฟ',
    ex: '火曜日（かようび）・火事（かじ）',
    cat: 'kanji'
  },
  {
    jp: '水',
    furi: 'すい・みず',
    on: 'スイ',
    kun: 'みず',
    th: 'น้ำ',
    ex: '水曜日（すいようび）・水（みず）',
    cat: 'kanji'
  },
  {
    jp: '木',
    furi: 'もく・き',
    on: 'モク／ボク',
    kun: 'き・こ',
    th: 'ต้นไม้',
    ex: '木曜日（もくようび）・木（き）',
    cat: 'kanji'
  },
  {
    jp: '金',
    furi: 'きん・かね',
    on: 'キン／コン',
    kun: 'かね',
    th: 'ทอง / เงิน',
    ex: '金曜日（きんようび）・お金（おかね）',
    cat: 'kanji'
  },
  {
    jp: '土',
    furi: 'ど・つち',
    on: 'ド／ト',
    kun: 'つち',
    th: 'ดิน',
    ex: '土曜日（どようび）・土（つち）',
    cat: 'kanji'
  },
  {
    jp: '山',
    furi: 'さん・やま',
    on: 'サン',
    kun: 'やま',
    th: 'ภูเขา',
    ex: '山（やま）・富士山（ふじさん）',
    cat: 'kanji'
  },
  {
    jp: '川',
    furi: 'せん・かわ',
    on: 'セン',
    kun: 'かわ',
    th: 'แม่น้ำ',
    ex: '川（かわ）・川口（かわぐち）',
    cat: 'kanji'
  },
  {
    jp: '女',
    furi: 'じょ・おんな',
    on: 'ジョ／ニョ',
    kun: 'おんな・め',
    th: 'ผู้หญิง',
    ex: '女（おんな）・女性（じょせい）',
    cat: 'kanji'
  },
  {
    jp: '男',
    furi: 'だん・おとこ',
    on: 'ダン／ナン',
    kun: 'おとこ',
    th: 'ผู้ชาย',
    ex: '男（おとこ）・男性（だんせい）',
    cat: 'kanji'
  },
  {
    jp: '子',
    furi: 'こ・し',
    on: 'シ／ス',
    kun: 'こ',
    th: 'เด็ก',
    ex: '子供（こども）・女子（じょし）',
    cat: 'kanji'
  },
  {
    jp: '国',
    furi: 'こく・くに',
    on: 'コク',
    kun: 'くに',
    th: 'ประเทศ',
    ex: '日本国（にほんこく）・外国（がいこく）',
    cat: 'kanji'
  },
  {
    jp: '語',
    furi: 'ご・かた',
    on: 'ゴ',
    kun: 'かた（る）',
    th: 'ภาษา / คำ',
    ex: '日本語（にほんご）・語る（かたる）',
    cat: 'kanji'
  },
  {
    jp: '学',
    furi: 'がく・まな',
    on: 'ガク',
    kun: 'まな（ぶ）',
    th: 'เรียน / วิทยา',
    ex: '大学（だいがく）・学ぶ（まなぶ）',
    cat: 'kanji'
  },
  {
    jp: '校',
    furi: 'こう',
    on: 'コウ',
    kun: '–',
    th: 'โรงเรียน',
    ex: '学校（がっこう）・高校（こうこう）',
    cat: 'kanji'
  },
  {
    jp: '先',
    furi: 'せん・さき',
    on: 'セン',
    kun: 'さき',
    th: 'ก่อน / ปลาย',
    ex: '先生（せんせい）・先（さき）',
    cat: 'kanji'
  },
  {
    jp: '生',
    furi: 'せい・なま',
    on: 'セイ／ショウ',
    kun: 'い（きる）・なま',
    th: 'ชีวิต / เกิด',
    ex: '学生（がくせい）・先生（せんせい）',
    cat: 'kanji'
  },
  {
    jp: '右',
    furi: 'う・みぎ',
    on: 'ウ／ユウ',
    kun: 'みぎ',
    th: 'ขวา',
    ex: '右（みぎ）・右折（うせつ）',
    cat: 'kanji'
  },
  {
    jp: '左',
    furi: 'さ・ひだり',
    on: 'サ',
    kun: 'ひだり',
    th: 'ซ้าย',
    ex: '左（ひだり）・左折（させつ）',
    cat: 'kanji'
  },
  {
    jp: '口',
    furi: 'こう・くち',
    on: 'コウ／ク',
    kun: 'くち',
    th: 'ปาก',
    ex: '口（くち）・入口（いりぐち）',
    cat: 'kanji'
  },
  {
    jp: '目',
    furi: 'もく・め',
    on: 'モク／ボク',
    kun: 'め',
    th: 'ตา',
    ex: '目（め）・目標（もくひょう）',
    cat: 'kanji'
  },
  {
    jp: '耳',
    furi: 'じ・みみ',
    on: 'ジ',
    kun: 'みみ',
    th: 'หู',
    ex: '耳（みみ）・耳鼻科（じびか）',
    cat: 'kanji'
  },
  {
    jp: '手',
    furi: 'しゅ・て',
    on: 'シュ',
    kun: 'て',
    th: 'มือ',
    ex: '手（て）・上手（じょうず）',
    cat: 'kanji'
  },
  {
    jp: '足',
    furi: 'そく・あし',
    on: 'ソク',
    kun: 'あし・た（りる）',
    th: 'เท้า / ขา',
    ex: '足（あし）・足りる（たりる）',
    cat: 'kanji'
  }
];

const mapExternalToVocab = (item: Record<string, unknown>) => {
  const meaningRaw = item.th ?? item.meaning ?? '';
  let th = typeof meaningRaw === 'string' ? meaningRaw : '';
  if (th.startsWith('#')) {
    const parts = th.split(':');
    th = parts.length > 1 ? parts.slice(1).join(':').trim() : '';
  }

  let cat = (item.cat as string) || '';
  if (typeof cat === 'string' && cat.startsWith('#')) cat = 'none';
  const allowedCats = [
    'time',
    'daily',
    'work',
    'emotion',
    'transport',
    'body',
    'nature',
    'action',
    'none'
  ];
  if (!allowedCats.includes(cat)) cat = 'none';

  return {
    jp: item.word,
    furi: item.furigana || item.word || '',
    rom: item.romaji || '',
    th,
    cat: cat as VocabCategory
  } as VocabItem;
};

const EXTERNAL_MAPPED_N5 = EXTERNAL_VOCAB.filter((i) => i.level === 5).map(mapExternalToVocab);
const EXTERNAL_MAPPED_N4 = EXTERNAL_VOCAB.filter((i) => i.level === 4).map(mapExternalToVocab);

const createOverallItems = (level: Level): OverallItem[] => {
  const isN4 = level === 'n4';
  const exam = cheatsheet.exam_info;
  const schedule = cheatsheet.schedule;
  const tips = cheatsheet.tips;
  const partNames = (exam.parts ?? []).map((part) => part.name).join(' • ');

  const examSections = [
    {
      title: 'รูปแบบการสอบ',
      rows: [
        { label: 'จำนวนส่วน', value: `${exam.format.total_parts} ส่วน` },
        { label: 'จำนวนข้อทั้งหมด', value: `${exam.total.question_count} ข้อ` },
        { label: 'เวลาทั้งหมด', value: `${exam.total.duration_minutes} นาที` }
      ],
      list: (exam.format.notes ?? []).map((note: string) => note)
    },
    {
      title: 'ส่วนสอบ',
      rows: (exam.parts ?? []).map((part) => ({
        label: part.name,
        value: `${part.question_count} ข้อ • ${part.duration_minutes} นาที`
      }))
    },
    {
      title: 'ห้ามในห้องสอบ',
      list: exam.writing_in_exam?.prohibited ?? []
    }
  ];

  const extraTipSections = [
    {
      title: 'คำแนะนำก่อนสอบ',
      list: tips.before_exam ?? []
    },
    {
      title: 'อนุญาตในห้องสอบ',
      list: exam.writing_in_exam?.allowed ?? []
    },
    {
      title: 'กฎการฟังเสียง',
      list: exam.listening_rules ?? []
    },
    {
      title: 'การให้คะแนน',
      rows: [{ label: 'วิธี', value: exam.scoring?.method ?? '-' }],
      list: exam.scoring?.notes ?? []
    },
    {
      title: 'ระหว่างพัก',
      list: tips.during_break ?? []
    },
    {
      title: 'อุปกรณ์',
      list: tips.equipment ?? []
    },
    {
      title: 'ก่อนส่งคำตอบ',
      list: tips.before_submit ?? []
    },
    {
      title: 'กฎการกรอกคำตอบ',
      list: tips.answer_sheet ?? []
    }
  ];

  return [
    {
      title: cheatsheet.meta.title,
      subtitle: `${cheatsheet.meta.country} • ${cheatsheet.meta.language}`,
      description: `${exam.format.total_parts} ส่วน • ${exam.total.question_count} ข้อ • ${exam.total.duration_minutes} นาที`,
      bullets: [
        { label: 'ระดับ', value: isN4 ? 'JLPT N4' : 'JLPT N5' },
        { label: 'ส่วนสอบ', value: partNames }
      ],
      sections: examSections,
      cat: 'overall'
    },
    {
      title: 'แผนเวลา',
      sections: [
        {
          title: 'ตารางเวลา',
          rows: schedule.map((entry) => ({
            label: entry.time,
            value: entry.activity
          }))
        }
      ],
      cat: 'overall'
    },
    {
      title: 'เทคนิคตามส่วน',
      sections: (tips.by_part ?? []).map((part) => ({
        title: part.part_name,
        list: part?.sub_sections ? part?.sub_sections.flatMap((section) => section.tips) : part.tips
      })),
      cat: 'overall'
    },
    {
      title: 'คำแนะนำเพิ่มเติม',
      sections: extraTipSections,
      cat: 'overall'
    }
  ];
};

const STUDY_DATA = {
  n4: {
    overall: createOverallItems('n4'),
    vocab: [...VOCAB_N4, ...EXTERNAL_MAPPED_N4],
    kanji: KANJI_N4,
    grammar: GRAMMAR_N4
  },
  n5: {
    overall: createOverallItems('n5'),
    vocab: [...VOCAB_N5, ...EXTERNAL_MAPPED_N5],
    kanji: KANJI_N5,
    grammar: GRAMMAR_N5
  }
} as const;

export const getStudyData = (level: Level, tab: Tab): StudyItem[] => {
  const items = STUDY_DATA[level][tab] as StudyItem[];

  if (tab === 'vocab') {
    const seen = new Set<string>();
    const deduped = items.filter((it) => {
      const key = ('jp' in it && typeof it.jp === 'string' ? it.jp : '') ?? '';
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return deduped.sort((a, b) => {
      const left = 'furi' in a ? a.furi : '';
      const right = 'furi' in b ? b.furi : '';
      return left.localeCompare(right, 'ja');
    });
  }

  return items;
};
