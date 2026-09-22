// 5人家族向け食費節約レシピデータベース（ウェブ上の殿堂入り・人気節約レシピを反映）
// 各材料は「1人前基準の量」を定義（人数倍率を掛けて合算）
// cuisine: 'japanese' (和風), 'western' (洋風), 'chinese' (中華)
// proteinType: 'chicken' (鶏肉), 'pork' (豚肉), 'mince' (ひき肉), 'fish' (魚), 'soy' (大豆製品・その他)

const COMMON_DISLIKES = [
  { id: "ピーマン", label: "ピーマン", icon: "🫑" },
  { id: "なす", label: "なす", icon: "🍆" },
  { id: "きのこ", label: "きのこ類（えのき・しめじ等）", icon: "🍄" },
  { id: "トマト", label: "トマト", icon: "🍅" },
  { id: "魚", label: "魚（サバ・鮭等）", icon: "🐟" },
  { id: "長ネギ", label: "長ネギ・ネギ類", icon: "🧅" },
  { id: "豆苗", label: "豆苗・青菜", icon: "🌱" },
  { id: "かぼちゃ", label: "かぼちゃ", icon: "🎃" }
];

const COMMON_FLAVORS = [
  { id: "curry", label: "カレー味", icon: "🍛" },
  { id: "stew", label: "シチュー・クリーム系", icon: "🍲" },
  { id: "spicy", label: "辛い味付け（豆板醤等）", icon: "🌶️" },
  { id: "sour", label: "酸っぱい味（お酢・ポン酢）", icon: "🍋" },
  { id: "mayo", label: "マヨネーズ味", icon: "🥚" }
];

const RECIPES_DATA = [
  // =================================================================
  // 【主菜 (Main)】- 全20品（鶏・豚・挽肉・魚・大豆の多彩なバリエーション）
  // =================================================================
  {
    id: "main_01",
    title: "豆腐でふわふわ！節約ビッグ煮込みハンバーグ",
    category: "main",
    cuisine: "western",
    proteinType: "mince",
    time: "25分",
    approxCostPerPerson: 160,
    tags: ["かさ増し", "子供大人気", "フライパン1つ", "洋風"],
    containsDislikes: [],
    description: "木綿豆腐でボリューム2倍！冷めても柔らかく、甘めのケチャップ煮込みソースで子どもたちのご飯が止まりません。",
    kidsTip: "豆腐が入ることでパサつかず、ハンバーグが苦手な小さいお子様でもペロリと食べられます。",
    tip: "豆腐は水切りをしっかりするか、パン粉に水分を吸わせると崩れずふんわり仕上がります！",
    ingredients: [
      { name: "合挽き肉", amount: 70, unit: "g", aisle: "肉・魚" },
      { name: "木綿豆腐", amount: 60, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "玉ねぎ", amount: 0.25, unit: "個", aisle: "野菜" },
      { name: "卵", amount: 0.2, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "パン粉", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "ケチャップ", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "ウスターソース", amount: 10, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "玉ねぎはみじん切りにし、耐熱容器に入れてレンジで1分半加熱して冷ます。",
      "ボウルに合挽き肉、軽く水切りした木綿豆腐、玉ねぎ、卵、パン粉、塩こしょう少々を入れて粘りが出るまでよく練る。",
      "人数分に成形し、中央を少し凹ませる。",
      "フライパンに油を熱し、強めの中火で両面に焼き色をつける。",
      "ケチャップ、ウスターソース、水（大さじ2程度）、砂糖少々を加え、フタをして弱火で約7〜8分煮込む。"
    ]
  },
  {
    id: "main_02",
    title: "鶏むね肉でしっとり柔らか！特製チキン南蛮風",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    time: "20分",
    approxCostPerPerson: 130,
    tags: ["鶏むね", "高たんぱく", "子供大人気", "和風"],
    containsDislikes: [],
    description: "パサつきがちな鶏むね肉がフォーク刺し＆マヨ下味で驚きの柔らかさ！手作りタルタルでごちそう感UP。",
    kidsTip: "マヨネーズと卵の甘めタルタルソースがお子様に大好評！酸味が苦手な場合はポン酢に少し砂糖を足して甘口に。",
    tip: "肉の繊維を断ち切るようにそぎ切りにするのが最大の柔らかポイントです。",
    ingredients: [
      { name: "鶏むね肉", amount: 90, unit: "g", aisle: "肉・魚" },
      { name: "卵", amount: 0.4, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "マヨネーズ", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "キャベツ", amount: 40, unit: "g", aisle: "野菜" },
      { name: "ポン酢", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 10, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉は一口大のそぎ切りにし、酒・塩こしょう少々とマヨネーズ少量をもみ込んで10分置く。",
      "片栗粉をまぶし、多めの油を熱したフライパンで両面こんがり揚げ焼きにする。",
      "熱いうちにポン酢（＋お好みで砂糖少量）を回しかけて絡める。",
      "ゆで卵をつぶしてマヨネーズと塩こしょうを混ぜた即席タルタルソースをたっぷりかけ、千切りキャベツを添える。"
    ]
  },
  {
    id: "main_03",
    title: "豚こまとキャベツのこってり甘辛味噌炒め（回鍋肉風）",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    time: "15分",
    approxCostPerPerson: 150,
    tags: ["豚こま", "ご飯が進む", "中華風", "時短"],
    containsDislikes: ["ピーマン"],
    description: "キャベツをたっぷり消費できる定番おかず。味噌とみりんの甘辛だれが豚こまの旨味を吸って最高！",
    kidsTip: "辛みゼロの味噌だれで子供も食べやすい！ピーマン苦手なお子様がいる場合はピーマンを抜いてキャベツ増量でOK。",
    tip: "キャベツは強火でサッと炒めて一度取り出すと、シャキシャキ感が残って水っぽくなりません。",
    ingredients: [
      { name: "豚こま肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "キャベツ", amount: 80, unit: "g", aisle: "野菜" },
      { name: "ピーマン", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "人参", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "味噌", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツはざく切り、ピーマンは乱切り、人参は短冊切りにする。",
      "フライパンに油を熱し、豚こま肉を炒めて色が変わったら野菜を一気に加えて強火で炒める。",
      "味噌、みりん、醤油、砂糖小さじ1を混ぜ合わせたタレを回し入れ、全体に手早く絡める。"
    ]
  },
  {
    id: "main_04",
    title: "豚こまギュッと丸めて！節約カリカリ酢豚風",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    time: "20分",
    approxCostPerPerson: 155,
    tags: ["かさ増し", "豚こま", "子供大人気", "中華風"],
    containsDislikes: ["ピーマン"],
    description: "高い角切り肉は不要！豚こまを一口大にギュッと丸めて揚げ焼きにするとジューシーで柔らかい絶品酢豚に。",
    kidsTip: "ブロック肉より柔らかくて噛み切りやすいので、小さなお子様にも大好評です！",
    tip: "豚こまを丸めるときに片栗粉を少し揉み込んでおくと崩れずふっくら揚がります。",
    ingredients: [
      { name: "豚こま肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "玉ねぎ", amount: 0.25, unit: "個", aisle: "野菜" },
      { name: "人参", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "ピーマン", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "ケチャップ", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "ポン酢", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "豚こま肉に酒・塩少々をもみ込み、ぎゅっと一口大の団子状に丸めて片栗粉をまぶす。",
      "フライパンに多めの油を熱し、豚肉団子を転がしながらこんがり揚げ焼きにして一度取り出す。",
      "同じフライパンで乱切りにした玉ねぎ、人参、ピーマンを炒める。",
      "ケチャップ、ポン酢、砂糖小さじ1、水大さじ1を混ぜた甘酢タレを加え、肉を戻して一気に絡める。"
    ]
  },
  {
    id: "main_05",
    title: "フライパンで一発！包まないBIGパリパリ餃子",
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    time: "20分",
    approxCostPerPerson: 135,
    tags: ["時短", "子供大人気", "もやし", "フライパン1つ"],
    containsDislikes: [],
    description: "5人分の餃子を1つずつ包む手間はゼロ！もやしでかさ増ししたタネを敷き詰め、皮を並べて焼くだけの豪快メイン。",
    kidsTip: "みんなでフライパンからスプーンで取り分けるライブ感に子供たち大喜び！",
    tip: "もやしをみじん切りにしてタネに混ぜるとシャキッとした食感＆驚きの節約になります。",
    ingredients: [
      { name: "豚ひき肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "もやし", amount: 0.4, unit: "袋", aisle: "野菜" },
      { name: "キャベツ", amount: 50, unit: "g", aisle: "野菜" },
      { name: "餃子の皮", amount: 4, unit: "枚", aisle: "調味料・その他" },
      { name: "ごま油", amount: 5, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツともやしは粗みじん切りにする。",
      "ボウルに豚ひき肉、野菜、醤油、ごま油、鶏ガラスープの素少々を入れてよく練り合わせる。",
      "フライパンに餃子の皮の半量を敷き詰め、タネを全体に広げ、上に残りの皮を被せる。",
      "水（50ml）を回し入れ、フタをして中火で蒸し焼きにし、水分が飛んだらごま油を回し入れてカリッと焼き上げる。"
    ]
  },
  {
    id: "main_06",
    title: "鶏むね肉とじゃがいもの甘辛照りマヨ炒め",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    time: "20分",
    approxCostPerPerson: 135,
    tags: ["かさ増し", "子供大人気", "和風", "満腹"],
    containsDislikes: [],
    description: "ほくほくのじゃがいもでガッツリかさ増し！照り焼き×マヨネーズのコクで子供たちの箸が止まりません。",
    kidsTip: "ホクホクのポテトとお肉の組み合わせは子供人気ナンバーワン！",
    tip: "じゃがいもをレンジで下加熱しておくと炒め時間を大幅にカットできます。",
    ingredients: [
      { name: "鶏むね肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "じゃがいも", amount: 0.8, unit: "個", aisle: "野菜" },
      { name: "マヨネーズ", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 4, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいもは一口大に切り、耐熱ボウルに入れてふんわりラップし、600Wで3分加熱する。",
      "鶏むね肉は一口大のそぎ切りにして塩こしょう・片栗粉を薄くまぶす。",
      "フライパンに油を熱し、鶏肉を焼く。焼き色がついたらじゃがいもを加えて一緒に炒める。",
      "醤油、みりん、砂糖を絡め、火を止める直前にマヨネーズを加えてサッと混ぜ合わせる。"
    ]
  },
  {
    id: "main_07",
    title: "厚揚げと豚こま肉のボリューム甘辛生姜焼き風",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    time: "15分",
    approxCostPerPerson: 145,
    tags: ["かさ増し", "厚揚げ", "和風", "高コスパ"],
    containsDislikes: [],
    description: "安くて食べ応え抜群の厚揚げをイン！生姜控えめ・甘辛醤油タレでお肉が少なくても大満足。",
    kidsTip: "厚揚げはお肉のようなジューシーさがあり、噛みやすいため子供たちも大好きな食材です。",
    tip: "厚揚げはキッチンペーパーで油を軽く拭き取るとタレがしっかり染み込みます。",
    ingredients: [
      { name: "豚こま肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "厚揚げ", amount: 0.4, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "玉ねぎ", amount: 0.25, unit: "個", aisle: "野菜" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 4, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "厚揚げは一口大に切り、玉ねぎは薄切りにする。",
      "フライパンで豚こま肉を炒め、色が変わったら玉ねぎと厚揚げを投入する。",
      "厚揚げに焼き色がつくまで炒めたら、醤油、みりん、酒、砂糖を混ぜて回し入れ、タレを絡め煮詰める。"
    ]
  },
  {
    id: "main_08",
    title: "サクサク！鶏むね肉のジューシー甘辛唐揚げ",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    time: "25分",
    approxCostPerPerson: 125,
    tags: ["鶏むね", "子供大人気", "ごちそう", "和風"],
    containsDislikes: [],
    description: "マヨネーズとお酒のダブル効果でむね肉とは思えないジューシーさ！大皿に山盛り揚げて大満足。",
    kidsTip: "にんにく控えめ、ほんのり甘めの醤油味付けで、お代わりコールが止まりません！",
    tip: "片栗粉をたっぷりまぶして二度揚げ（余熱通し）すると冷めてもサックサク。",
    ingredients: [
      { name: "鶏むね肉", amount: 90, unit: "g", aisle: "肉・魚" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "マヨネーズ", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 20, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉は大きめの一口大に切り、フォークで数カ所刺す。",
      "ポリ袋に鶏肉、醤油、酒大さじ1、砂糖小さじ1、マヨネーズを入れてよく揉み込み15分置く。",
      "片栗粉をしっかりまぶし、170度の油で3〜4分揚げ、取り出して2分余熱で火を通す。",
      "最後に強火（180度）で1分カラッと二度揚げする。"
    ]
  },
  {
    id: "main_09",
    title: "鮭とキャベツのちゃんちゃん焼き風（味噌バター）",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    time: "20分",
    approxCostPerPerson: 170,
    tags: ["魚料理", "フライパン1つ", "子供大人気", "野菜たっぷり"],
    containsDislikes: ["魚"],
    description: "甘口の味噌とコク旨バターで野菜がモリモリ食べられる！北海道名物の定番ごちそう節約メニュー。",
    kidsTip: "味噌とバターの甘いコクで魚特有の生臭さが完全に消え、子供たちに一番人気の魚料理です！",
    tip: "野菜を下に敷いて鮭を上に乗せて蒸し焼きにすると、鮭がふっくら仕上がります。",
    ingredients: [
      { name: "生鮭切り身", amount: 0.6, unit: "切れ", aisle: "肉・魚" },
      { name: "キャベツ", amount: 70, unit: "g", aisle: "野菜" },
      { name: "もやし", amount: 0.3, unit: "袋", aisle: "野菜" },
      { name: "人参", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "味噌", amount: 12, unit: "g", aisle: "調味料・その他" },
      { name: "バター", amount: 5, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "キャベツはざく切り、人参は短冊切りにする。",
      "フライパンに野菜を敷き詰め、上に鮭を並べ、酒大さじ1を振る。",
      "フタをして弱中火で約7〜8分蒸し焼きにする。",
      "味噌、みりん、砂糖各小さじ2を混ぜたタレを回しかけ、最後にバターを落として全体に絡める。"
    ]
  },
  {
    id: "main_10",
    title: "サバ缶とキャベツのコク旨トマト煮込み",
    category: "main",
    cuisine: "western",
    proteinType: "fish",
    time: "20分",
    approxCostPerPerson: 160,
    tags: ["魚料理", "缶詰活用", "洋風", "栄養満点"],
    containsDislikes: ["魚", "トマト"],
    description: "骨まで柔らかいサバ水煮缶とトマト缶で煮込むだけの栄養満点洋風メイン。粉チーズでリッチな味わいに。",
    kidsTip: "サバ缶は骨がホロホロなので魚の骨が苦手なお子様でも安全！粉チーズを多めにかけると大喜び。",
    tip: "サバ缶の汁ごと入れることで出汁いらず！",
    ingredients: [
      { name: "サバ水煮缶", amount: 0.3, unit: "缶", aisle: "肉・魚" },
      { name: "カットトマト缶", amount: 0.25, unit: "缶", aisle: "野菜" },
      { name: "キャベツ", amount: 70, unit: "g", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "コンソメ顆粒", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツはざく切り、玉ねぎは薄切りにする。",
      "鍋にオリーブオイルを熱し、玉ねぎとキャベツを軽く炒める。",
      "カットトマト缶、サバ缶（汁ごと）、水50ml、コンソメ、砂糖小さじ1を加え、フタをして10分コトコト煮る。",
      "塩こしょうで味を調え、仕上げにお好みで粉チーズを振る。"
    ]
  },
  {
    id: "main_11",
    title: "鶏ひき肉と豆腐のふんわり照り焼きつくね",
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    time: "20分",
    approxCostPerPerson: 125,
    tags: ["かさ増し", "鶏ひき肉", "子供大人気", "和風"],
    containsDislikes: [],
    description: "安くてヘルシーな鶏ひき肉と木綿豆腐でふわっふわ！甘辛い照り焼きダレが絡んでお弁当にも大活躍。",
    kidsTip: "柔らかくフワフワ食感なので噛む力が弱い小さなお子様でも食べやすい！",
    tip: "タネに片栗粉を混ぜると肉汁を閉じ込めてパサつきません。",
    ingredients: [
      { name: "鶏ひき肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "木綿豆腐", amount: 50, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "片栗粉", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ボウルに鶏ひき肉、水切りした豆腐、みじん切り玉ねぎ、片栗粉、塩少々を入れてよく練る。",
      "小判型に成形し、油を熱したフライパンで両面こんがり焼く。",
      "醤油、みりん、酒、砂糖各小さじ2を加え、タレにとろみがつくまで煮絡める。"
    ]
  },
  {
    id: "main_12",
    title: "鶏むね肉とコーンのチーズタッカルビ風",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    time: "20分",
    approxCostPerPerson: 140,
    tags: ["チーズ", "子供大人気", "コーン", "ホットプレート風"],
    containsDislikes: [],
    description: "辛くない！ケチャップと甘辛だれにたっぷりとろけるチーズを絡める子供歓喜のごちそうメニュー。",
    kidsTip: "とろ〜り伸びるチーズと甘いコーンで子供たち大興奮！野菜も一緒にどんどん食べられます。",
    tip: "フライパンの真ん中にチーズをたっぷり並べてフタをし、溶けたら完成！",
    ingredients: [
      { name: "鶏むね肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "キャベツ", amount: 60, unit: "g", aisle: "野菜" },
      { name: "コーン缶", amount: 20, unit: "g", aisle: "野菜" },
      { name: "ピザ用チーズ", amount: 20, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "ケチャップ", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉は一口大にそぎ切りにし、酒と塩少々をもみ込む。キャベツは一口大にちぎる。",
      "フライパンで鶏肉とキャベツを炒め、火が通ったらケチャップ、醤油、砂糖小さじ1、コーンを絡める。",
      "中央にスペースを空けてチーズを投入し、フタをしてチーズが溶けるまで蒸し焼きにする。"
    ]
  },
  {
    id: "main_13",
    title: "豆腐と豚ひき肉のマイルド甘口麻婆豆腐",
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    time: "15分",
    approxCostPerPerson: 120,
    tags: ["豆腐", "超高コスパ", "子供ウケ", "中華風"],
    containsDislikes: ["長ネギ"],
    description: "豆板醤ゼロ！味噌とケチャップとお砂糖でコク深く甘口に仕上げた、子供たちがおかわり連発する麻婆豆腐。",
    kidsTip: "辛み調味料を一切使わずケチャップを隠し味にすることで、子供が大好きなミートソースのような旨味に！",
    tip: "木綿豆腐をサッと下茹でするかレンジ加熱すると崩れにくくなります。",
    ingredients: [
      { name: "木綿豆腐", amount: 80, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "豚ひき肉", amount: 45, unit: "g", aisle: "肉・魚" },
      { name: "長ネギ", amount: 0.15, unit: "本", aisle: "野菜" },
      { name: "味噌", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "ケチャップ", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 6, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "豆腐は2cm角に切る。長ネギはみじん切りにする。",
      "フライパンにごま油を熱し、ひき肉と長ネギを炒める。",
      "水（1人あたり80ml）、味噌、ケチャップ、醤油、砂糖各小さじ1、鶏ガラスープの素少々を加えて煮立てる。",
      "豆腐を加えて2分煮たら、水溶き片栗粉でとろみをつける。"
    ]
  },
  {
    id: "main_14",
    title: "豚こまと白菜・春雨のとろみ中華うま煮",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    time: "18分",
    approxCostPerPerson: 135,
    tags: ["春雨", "白菜", "中華風", "体ポカポカ"],
    containsDislikes: [],
    description: "白菜の優しい甘みと豚肉の旨味を春雨がたっぷり吸い込む！寒い日にもぴったりのほっこりおかず。",
    kidsTip: "チュルチュルの春雨ととろみのあるスープで、野菜が驚くほどたくさん食べられます。",
    tip: "春雨は戻さずにそのままフライパンに入れてOK！旨味スープを吸って美味しくなります。",
    ingredients: [
      { name: "豚こま肉", amount: 70, unit: "g", aisle: "肉・魚" },
      { name: "白菜", amount: 80, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "緑豆春雨", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "オイスターソース", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜は一口大、人参は短冊切りにする。",
      "フライパンで豚こま肉を炒め、白菜と人参を加えてしんなりするまで炒める。",
      "水120ml、オイスターソース、醤油、鶏ガラスープの素を加え、乾燥春雨を入れてフタをし3分煮る。",
      "水溶き片栗粉でとろみをつけて完成。"
    ]
  },
  {
    id: "main_15",
    title: "もやしと豚バラのフライパン蒸し ポン酢だれ",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    time: "12分",
    approxCostPerPerson: 140,
    tags: ["フライパン1つ", "もやし", "超時短", "和風"],
    containsDislikes: [],
    description: "もやしを山盛り敷いて豚肉をのせて蒸すだけ！火を使っている間は放置OKの忙しい日の救世主。",
    kidsTip: "ポン酢にマヨネーズを少し混ぜて「マヨぽん」にすると子供ウケ抜群のタレになります。",
    tip: "もやしから水分が出るので水は少量でOK。豚の脂がもやしに染み込んで驚きの美味しさです。",
    ingredients: [
      { name: "豚バラ薄切り肉", amount: 70, unit: "g", aisle: "肉・魚" },
      { name: "もやし", amount: 0.5, unit: "袋", aisle: "野菜" },
      { name: "小ねぎ", amount: 5, unit: "g", aisle: "野菜" },
      { name: "ポン酢", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "フライパンにもやしをどっさり敷き詰める。",
      "豚バラ肉を重ならないように広げてのせ、酒大さじ1を全体に回しかける。",
      "フタをして中火にかけ、蒸気が出たら弱中火で約5〜6分蒸し焼きにする。",
      "肉に火が通ったら小ねぎを散らし、ポン酢とごま油をかけていただく。"
    ]
  },
  {
    id: "main_16",
    title: "ちくわと豚こまのカレー風味スタミナ炒め",
    category: "main",
    cuisine: "western",
    proteinType: "pork",
    time: "15分",
    approxCostPerPerson: 130,
    tags: ["かさ増し", "ちくわ", "カレー味"],
    containsDislikes: ["ピーマン"],
    description: "旨味のかたまり「ちくわ」で豚肉をかさ増し！子どもが大好きなマイルドカレー風味。",
    kidsTip: "ちくわのプリプリ感とカレーの香りで、普段ピーマンを残す子も食べやすくなります。",
    tip: "ちくわは斜め切りにして表面積を増やすと味がよく絡みます。",
    ingredients: [
      { name: "豚こま肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "ちくわ", amount: 0.8, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "玉ねぎ", amount: 0.25, unit: "個", aisle: "野菜" },
      { name: "ピーマン", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "カレー粉", amount: 1.5, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ちくわは斜め切り、玉ねぎとピーマンは細切りにする。",
      "フライパンに油を熱し、豚こま肉を炒め、色が変わったら玉ねぎ・ピーマン・ちくわを加える。",
      "カレー粉、醤油、みりん各大さじ1を加えて全体に手早く炒め合わせる。"
    ]
  },
  {
    id: "main_17",
    title: "豚こまと大根のこってり照り甘辛煮",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    time: "25分",
    approxCostPerPerson: 145,
    tags: ["ご飯が進む", "煮物", "野菜たっぷり", "和風"],
    containsDislikes: [],
    description: "大根に豚肉のコクと甘辛醤油がじゅわ〜っと染み込む！ご飯にのせて豚丼風にしても美味しいです。",
    kidsTip: "味が染み染みの大根はお肉と同じくらい人気！薄切りにすることで子供の口でも噛みやすい。",
    tip: "大根を薄めのいちょう切りにすると短時間で芯まで味が染みます。",
    ingredients: [
      { name: "豚こま肉", amount: 70, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 80, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 12, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 12, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は皮を剥き、厚さ1cmのいちょう切りにする。耐熱容器に入れ電子レンジで3分加熱。",
      "フライパンに油を熱し、豚こま肉を炒め、色が変わったら大根を加える。",
      "水100ml、醤油、みりん、砂糖、だしの素少々を加え、落とし蓋をして煮汁が少なくなるまで約12分煮詰める。"
    ]
  },
  {
    id: "main_18",
    title: "鶏むね肉のサクサク！スナックチキン（のり塩味）",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    time: "15分",
    approxCostPerPerson: 120,
    tags: ["鶏むね", "子供大人気", "スナック感覚"],
    containsDislikes: [],
    description: "細長く切った鶏むね肉に青のりとコンソメをまぶしてカリッと揚げ焼き！ポテト感覚で子供の手が止まらない！",
    kidsTip: "スティック状なので子供の手でもつまみやすく、おやつ感覚でペロリと食べられます。",
    tip: "スティック状に細長く切ることで火の通りが早く、短時間でカリカリになります。",
    ingredients: [
      { name: "鶏むね肉", amount: 85, unit: "g", aisle: "肉・魚" },
      { name: "コンソメ顆粒", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "青のり", amount: 1.5, unit: "g", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉は幅1cmのスティック状に細長く切る。",
      "ポリ袋に鶏肉、酒大さじ1、コンソメ、塩少々を入れて揉み込み5分置く。",
      "片栗粉と青のりを加えて袋を振り、全体に粉をまぶす。",
      "フライパンに多めの油を熱し、中火で両面カリッときつね色になるまで揚げ焼きにする。"
    ]
  },
  {
    id: "main_19",
    title: "キャベツたっぷり！フライパン広島風お好み焼き",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    time: "20分",
    approxCostPerPerson: 140,
    tags: ["節約の王様", "子供大人気", "キャベツ消費", "ホットプレート風"],
    containsDislikes: [],
    description: "キャベツともやしをどっさり消費！焼きそば麺と豚こま肉を合わせて家族全員お腹いっぱいの大満足メニュー。",
    kidsTip: "ソースとマヨネーズの味付けはお子様人気絶大！野菜嫌いもキャベツを山盛り食べられます。",
    tip: "キャベツは蒸し焼きにすることで甘みが増し、カサが半分以下に減ってペロリと食べられます。",
    ingredients: [
      { name: "豚こま肉", amount: 50, unit: "g", aisle: "肉・魚" },
      { name: "キャベツ", amount: 90, unit: "g", aisle: "野菜" },
      { name: "もやし", amount: 0.3, unit: "袋", aisle: "野菜" },
      { name: "焼きそば麺", amount: 0.6, unit: "玉", aisle: "調味料・その他" },
      { name: "卵", amount: 0.4, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "お好み焼きソース", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツは千切りにする。",
      "薄く水で溶いた小麦粉生地をフライパンに広げ、キャベツ、もやし、豚肉を重ねる。",
      "ひっくり返して蒸し焼きにし、別の場所で炒めた焼きそば麺、薄焼き卵の上に重ねて完成。"
    ]
  },
  {
    id: "main_20",
    title: "鶏むね肉とたっぷり大根のみぞれ煮",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    time: "20分",
    approxCostPerPerson: 130,
    tags: ["和風", "鶏むね", "さっぱり", "消化に良い"],
    containsDislikes: [],
    description: "すりおろし大根の酵素で鶏むね肉がさらにしっとり！甘辛和風出汁が大根おろしに染みて絶品です。",
    kidsTip: "大根おろし特有の辛味は加熱で完全に甘みに変わるので、子供たちも汁ごと飲み干します！",
    tip: "大根おろしは汁ごと入れることで旨味と栄養を余さずいただけます。",
    ingredients: [
      { name: "鶏むね肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 70, unit: "g", aisle: "野菜" },
      { name: "小ねぎ", amount: 3, unit: "g", aisle: "野菜" },
      { name: "めんつゆ（3倍濃縮）", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 10, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は皮を剥いてすりおろす。鶏むね肉は一口大のそぎ切りにして片栗粉をまぶす。",
      "フライパンに油を熱し、鶏肉の両面をこんがり焼く。",
      "大根おろし（汁ごと）、水50ml、めんつゆ、みりん小さじ1を加え、ひと煮立ちさせて絡める。"
    ]
  },
  {
    id: "main_21",
    title: "鶏肉とゴロゴロ野菜の定番カレーライス",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    time: "25分",
    approxCostPerPerson: 160,
    tags: ["定番", "子供大人気", "カレー味"],
    flavorType: "curry",
    baseIngredientsGroup: "curry_stew_base",
    containsDislikes: [],
    description: "みんな大好き定番のカレーライス。鶏肉と安価な根菜でしっかりお腹いっぱいに！",
    kidsTip: "甘口カレールウを使えば小さなお子様も大喜びです。",
    tip: "玉ねぎをしっかり炒めるとコクが増します。",
    ingredients: [
      { name: "鶏もも肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "じゃがいも", amount: 0.8, unit: "個", aisle: "野菜" },
      { name: "人参", amount: 0.3, unit: "本", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "カレールウ", amount: 20, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいも、人参、玉ねぎ、鶏肉を一口大に切る。",
      "鍋に油を熱し、玉ねぎと鶏肉を炒め、色が変わったらじゃがいもと人参を加える。",
      "水を加えて野菜が柔らかくなるまで煮込み、火を止めてカレールウを溶かす。",
      "再び弱火でとろみがつくまで煮込む。"
    ]
  },
  {
    id: "main_22",
    title: "鶏肉とゴロゴロ野菜の濃厚クリームシチュー",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    time: "25分",
    approxCostPerPerson: 160,
    tags: ["定番", "子供大人気", "シチュー・クリーム系"],
    flavorType: "stew",
    baseIngredientsGroup: "curry_stew_base",
    containsDislikes: [],
    description: "まろやかなクリームシチュー。カレーと同じ材料で作れるので別メニューにも最適！",
    kidsTip: "牛乳たっぷりでクリーミー。パンにもご飯にも合います。",
    tip: "ルウを使わず小麦粉と牛乳で作るとさらに節約になります。",
    ingredients: [
      { name: "鶏もも肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "じゃがいも", amount: 0.8, unit: "個", aisle: "野菜" },
      { name: "人参", amount: 0.3, unit: "本", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "シチュールウ", amount: 20, unit: "g", aisle: "調味料・その他" },
      { name: "牛乳", amount: 50, unit: "ml", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "じゃがいも、人参、玉ねぎ、鶏肉を一口大に切る。",
      "鍋に油を熱し、玉ねぎと鶏肉を炒め、色が変わったらじゃがいもと人参を加える。",
      "水を加えて野菜が柔らかくなるまで煮込み、火を止めてシチュールウを溶かす。",
      "牛乳を加え、再び弱火でとろみがつくまで煮込む。"
    ]
  },
  {
    id: "main_23",
    title: "【外部サイト】至高の豚の生姜焼き（リュウジ式）",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    time: "15分",
    approxCostPerPerson: 180,
    tags: ["ガッツリ", "外部レシピ"],
    containsDislikes: [],
    description: "大人気YouTuber・リュウジさんの至高の生姜焼きです。外部サイト連携のテスト用レシピです。",
    kidsTip: "生姜の風味が強すぎないか調整してください。",
    tip: "安い豚こま肉でも、薄力粉をまぶすことで驚くほど柔らかく仕上がります。",
    url: "https://www.youtube.com/watch?v=DyIbem99ELU", // リュウジの至高の生姜焼き公式YouTube動画
    ingredients: [
      { name: "豚こま肉", amount: 100, unit: "g", aisle: "肉・魚" },
      { name: "玉ねぎ", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "生姜", amount: 1, unit: "かけ", aisle: "野菜" },
      { name: "薄力粉", amount: 1, unit: "大さじ", aisle: "調味料・その他" },
      { name: "醤油", amount: 1.5, unit: "大さじ", aisle: "調味料・その他" }
    ],
    instructions: [
      "玉ねぎは薄切りにし、豚肉に小麦粉を薄くまぶす。",
      "フライパンに油を熱し、玉ねぎと豚肉を香ばしく炒める。",
      "すりおろし生姜、醤油、みりん、酒、砂糖を合わせたタレを回し入れ、強火で照りが出るまで絡める。"
    ]
  },
  {
    id: "main_24",
    title: "【外部サイト】基本の鶏の照り焼き（白ごはん.com）",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    time: "20分",
    approxCostPerPerson: 200,
    tags: ["定番", "子供大人気", "外部レシピ"],
    containsDislikes: [],
    description: "和食の定番・白ごはん.comの大人気レシピ。皮目を香ばしく焼き上げ、黄金比のタレをじっくり煮詰めて仕上げます。",
    kidsTip: "タレが甘辛くてご飯が進みます。小さなお子様も大好きな味です。",
    tip: "鶏肉に片栗粉をまぶすことで、肉汁を閉じ込めてふっくらジューシーに仕上がります。5人前なら鶏もも肉2枚（約600g）が目安です。",
    url: "https://www.sirogohan.com/recipe/teriyaki/",
    ingredients: [
      { name: "鶏もも肉", amount: 120, unit: "g", aisle: "肉・魚" },
      { name: "片栗粉", amount: 0.8, unit: "大さじ", aisle: "調味料・その他" },
      { name: "醤油", amount: 0.8, unit: "大さじ", aisle: "調味料・その他" },
      { name: "みりん", amount: 0.8, unit: "大さじ", aisle: "調味料・その他" },
      { name: "酒", amount: 0.8, unit: "大さじ", aisle: "調味料・その他" },
      { name: "砂糖", amount: 0.5, unit: "小さじ", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏肉は厚みを均一にして筋を切り、皮目をフォークで刺す。",
      "油を引かずに皮目からじっくり焼き、パリッとしたら裏返す。",
      "余分な脂を拭き取り、醤油、みりん、酒、砂糖を加えて煮詰めながら照りよく絡める。"
    ]
  },
  {
    id: "main_25",
    title: "【外部サイト】至高のハンバーグ（リュウジ式）",
    category: "main",
    cuisine: "western",
    proteinType: "mince",
    season: "all",
    time: "25分",
    approxCostPerPerson: 180,
    tags: ["ガッツリ", "子供大人気", "洋風", "外部レシピ"],
    containsDislikes: [],
    description: "牛豚合挽肉に飴色玉ねぎとゼラチンを加えることで、切った瞬間に肉汁が溢れ出す至高の味わい。",
    kidsTip: "ジューシーで柔らかいので小さいお子様も夢中で食べてくれます。",
    tip: "合いびき肉は冷たい状態で手早くこねると脂が溶け出さずふっくら仕上がります。",
    url: "https://www.youtube.com/watch?v=F0pS2wXUuoc",
    ingredients: [
      { name: "合挽き肉", amount: 100, unit: "g", aisle: "肉・魚" },
      { name: "玉ねぎ", amount: 0.25, unit: "個", aisle: "野菜" },
      { name: "パン粉", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "牛乳", amount: 20, unit: "ml", aisle: "大豆・乳・加工品" },
      { name: "ケチャップ", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "ウスターソース", amount: 10, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "玉ねぎはみじん切りにして透き通るまで炒めて冷ます。",
      "ひき肉、玉ねぎ、卵、パン粉、牛乳、塩コショウを粘りが出るまでよく捏ねて成形する。",
      "強火で両面を焼き、水を加えて蓋をし、弱火で蒸し焼きにしてふっくら仕上げる。"
    ]
  },
  {
    id: "main_26",
    title: "【外部サイト】極上豚キムチ炒め（コウケンテツ式）",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "all",
    time: "15分",
    approxCostPerPerson: 160,
    tags: ["スタミナ", "フライパン1つ", "ご飯が進む", "外部レシピ"],
    containsDislikes: [],
    description: "豚こま肉をカリッと焼き、キムチの汁気とごま油をしっかり絡めて旨味を凝縮させたプロの豚キムチ。",
    kidsTip: "辛さが気になる場合は最後に溶き卵やマヨネーズを少し加えるとマイルドになります。",
    tip: "キムチはしっかり炒めて酸味を飛ばし、旨味と甘みを引き出すのがポイントです。",
    url: "https://www.youtube.com/watch?v=r_sXpBfW2oI",
    ingredients: [
      { name: "豚こま肉", amount: 100, unit: "g", aisle: "肉・魚" },
      { name: "キムチ", amount: 50, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "玉ねぎ", amount: 0.25, unit: "個", aisle: "野菜" },
      { name: "ニラ", amount: 0.2, unit: "束", aisle: "野菜" },
      { name: "ごま油", amount: 4, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "豚肉は一口大に切り、キムチは食べやすい大きさに刻む。",
      "ごま油を熱したフライパンで豚肉をカリッと炒める。",
      "キムチを加えてサッと炒め、醤油・みりん各少々で味を調えて仕上げに白ごまを振る。"
    ]
  },
  {
    id: "main_27",
    title: "【外部サイト】基本の肉じゃが（白ごはん.com）",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "all",
    time: "25分",
    approxCostPerPerson: 170,
    tags: ["定番", "ほっこり", "和風", "外部レシピ"],
    containsDislikes: [],
    description: "じゃがいもホクホク、豚肉の旨味が全体に染み渡る日本の家庭料理の王道。白ごはん.comの黄金比率。",
    kidsTip: "甘辛い出汁がお肉とじゃがいもに染みて子供たちにも食べやすい味付けです。",
    tip: "落とし蓋をして弱めの中火で煮ることで煮崩れを防ぎ均一に味が染みます。",
    url: "https://www.sirogohan.com/recipe/nikujyaga/",
    ingredients: [
      { name: "豚こま肉", amount: 70, unit: "g", aisle: "肉・魚" },
      { name: "じゃがいも", amount: 1, unit: "個", aisle: "野菜" },
      { name: "人参", amount: 0.25, unit: "本", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "糸こんにゃく", amount: 30, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "醤油", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいも、人参、玉ねぎ、豚肉を一口大に切る。",
      "鍋に油を熱して豚肉、玉ねぎ、人参、じゃがいもの順に炒める。",
      "出汁、醤油、みりん、砂糖を加え、落とし蓋をして弱火で15分煮汁が染み込むまで煮る。"
    ]
  },
  {
    id: "main_28",
    title: "【外部サイト】ぶりの照り焼き（白ごはん.com）",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "winter",
    time: "15分",
    approxCostPerPerson: 220,
    tags: ["魚料理", "冬の旬", "和風", "外部レシピ"],
    containsDislikes: ["魚"],
    description: "脂ののった旬のブリを香ばしく焼き、甘辛い照り焼きダレをしっかりと絡めた極上の魚料理。",
    kidsTip: "甘口のタレがしっかり絡んでいるので魚特有の匂いが気にならず食べやすいです。",
    tip: "焼く前に熱湯をサッとかける（霜降り）と魚の生臭さが完全に消えます。",
    url: "https://www.sirogohan.com/recipe/buriteri/",
    ingredients: [
      { name: "ぶり切り身", amount: 1, unit: "切", aisle: "肉・魚" },
      { name: "小麦粉", amount: 5, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 12, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 12, unit: "ml", aisle: "調味料・その他" },
      { name: "酒", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ブリの切り身に塩を振って10分置き、出た水気をペーパーで拭き取る。",
      "フライパンに薄く油を熱し、中火で両面に焼き色がつくまで焼く。",
      "醤油、みりん、酒、砂糖を合わせたタレを加え、スプーンで魚にかけながら煮詰める。"
    ]
  },
  {
    id: "main_29",
    title: "【外部サイト】鮭のムニエル タルタル添え（白ごはん.com）",
    category: "main",
    cuisine: "western",
    proteinType: "fish",
    season: "autumn",
    time: "15分",
    approxCostPerPerson: 200,
    tags: ["魚料理", "子供大人気", "秋の旬", "外部レシピ"],
    containsDislikes: ["魚"],
    description: "生鮭の皮目をカリッと香ばしくバターで焼き上げ、コクのあるタルタルソースでいただく人気洋食。",
    kidsTip: "タルタルソースとの相性抜群で骨を取ってあげれば子供が競って食べます。",
    tip: "小麦粉を薄くまんべんなくまぶすことで水分と旨味を閉じ込めます。",
    url: "https://www.sirogohan.com/recipe/munieru/",
    ingredients: [
      { name: "生鮭切り身", amount: 1, unit: "切", aisle: "肉・魚" },
      { name: "小麦粉", amount: 5, unit: "g", aisle: "調味料・その他" },
      { name: "バター", amount: 8, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "マヨネーズ", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "卵", amount: 0.2, unit: "個", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "鮭の水気を拭き、塩コショウをして小麦粉を薄くまぶす。",
      "フライパンにバターを熱し、鮭を中火で両面香ばしく焼き色がつくまで焼く。",
      "器に盛り、刻み玉ねぎとゆで卵をマヨネーズ・レモン汁で和えたタルタルソースを添える。"
    ]
  },
  {
    id: "main_30",
    title: "【外部サイト】至高のチキン南蛮（リュウジ式）",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "all",
    time: "20分",
    approxCostPerPerson: 160,
    tags: ["鶏むね肉", "ガッツリ", "子供大人気", "外部レシピ"],
    containsDislikes: [],
    description: "安価な鶏むね肉を驚くほどジューシーに揚げ焼き！甘酢タレと特製タルタルの最強コンビ。",
    kidsTip: "甘酢タレとマヨたまごの組み合わせはお子様ウケ抜群の定番人気です。",
    tip: "むね肉は削ぎ切りにして酒と塩で揉み込むとパサつきゼロになります。",
    url: "https://www.youtube.com/watch?v=kYJ5oP6uMzg",
    ingredients: [
      { name: "鶏むね肉", amount: 120, unit: "g", aisle: "肉・魚" },
      { name: "片栗粉", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "マヨネーズ", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "酢", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 8, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉は一口大の削ぎ切りにして、塩コショウをし片栗粉をまぶす。",
      "多めの油で両面をカリッと揚げ焼きにし、醤油・酢・砂糖の甘酢に浸す。",
      "ゆで卵を崩してマヨネーズと和えた即席タルタルソースをかける。"
    ]
  },
  {
    id: "main_31",
    title: "【外部サイト】キャベツと豚こまの回鍋肉（ホイコーロー）",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "spring",
    time: "15分",
    approxCostPerPerson: 150,
    tags: ["春キャベツ", "ご飯泥棒", "中華風", "外部レシピ"],
    containsDislikes: ["ピーマン"],
    description: "シャキシャキのキャベツと香ばしく炒めた豚肉に甘辛味噌ダレがしっかり絡む本格中華。",
    kidsTip: "甜麺醤や味噌の甘みでキャベツがどんどん進みます。",
    tip: "キャベツは強火でサッと炒めて一度取り出すと水分が出ずシャキシャキに保てます。",
    url: "https://www.sirogohan.com/recipe/hoiko-ro-/",
    ingredients: [
      { name: "豚こま肉", amount: 90, unit: "g", aisle: "肉・魚" },
      { name: "キャベツ", amount: 80, unit: "g", aisle: "野菜" },
      { name: "ピーマン", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "味噌", amount: 12, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 6, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 6, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツはざく切り、ピーマンと豚肉は一口大に切る。",
      "フライパンで豚肉を炒めて取り出し、同じ鍋でキャベツを強火でサッと炒める。",
      "肉を戻し、味噌、甜麺醤（または醤油）、みりん、砂糖を合わせて一気に強火で炒め合わせる。"
    ]
  },
  {
    id: "main_32",
    title: "【外部サイト】至高の麻婆豆腐（リュウジ式）",
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    season: "all",
    time: "15分",
    approxCostPerPerson: 130,
    tags: ["超低コスト", "豆腐たっぷり", "本格中華", "外部レシピ"],
    containsDislikes: ["長ネギ"],
    description: "豆腐と豚ひき肉で高コスパ！甜麺醤と香味油の香りでご飯が何杯でもいける名作麻婆。",
    kidsTip: "辛味調味料（豆板醤）を控えめにしてケチャップや味噌を少し足すと子供も喜ぶ甘口麻婆に。",
    tip: "豆腐を切ってから塩少々を入れた湯で下茹ですると崩れにくくプルプル食感になります。",
    url: "https://www.youtube.com/watch?v=0h6C5g8Z4p4",
    ingredients: [
      { name: "豚ひき肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "木綿豆腐", amount: 100, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "長ネギ", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "味噌", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "豆腐はさいの目切りにして塩茹でし水気を切る。",
      "フライパンでひき肉と長ネギ、にんにく、生姜を炒め、味噌・醤油・鶏ガラ水を加える。",
      "豆腐を加えて2分煮込み、水溶き片栗粉でとろみをつけてごま油を垂らす。"
    ]
  },
  {
    id: "main_33",
    title: "【外部サイト】鶏手羽元と大根のさっぱりポン酢煮",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "autumn",
    time: "30分",
    approxCostPerPerson: 160,
    tags: ["節約手羽元", "ほろほろ", "さっぱり", "外部レシピ"],
    containsDislikes: [],
    description: "安価な手羽元と大根をポン酢でコトコト煮込むだけ！お肉は骨からホロリと外れる柔らかさ。",
    kidsTip: "煮込むことでお酢の酸味が飛んでマイルドな旨味になり、お肉が柔らかくて喜ばれます。",
    tip: "ポン酢と水、みりんを同量で合わせるだけで味がピタッと決まります。",
    url: "https://www.sirogohan.com/recipe/tebadani/",
    ingredients: [
      { name: "鶏手羽元", amount: 2, unit: "本", aisle: "肉・魚" },
      { name: "大根", amount: 80, unit: "g", aisle: "野菜" },
      { name: "ポン酢", amount: 20, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は薄めの半月切り、豚肉は一口大に切る。",
      "鍋に油を熱し、豚肉と大根を炒める。",
      "水、醤油、みりん、砂糖、だしの素を加え、落とし蓋をして15分大根が飴色になるまで煮る。"
    ]
  },
  {
    id: "main_34",
    title: "【外部サイト】白菜と豚バラの重ね蒸し（ミルフィーユ鍋風）",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "winter",
    time: "20分",
    approxCostPerPerson: 170,
    tags: ["冬の旬", "白菜大量消費", "簡単", "外部レシピ"],
    containsDislikes: [],
    description: "冬の白菜と豚肉を鍋にぎっしり詰めて蒸すだけ。野菜の水分と豚肉の脂だけで絶品出汁が出ます。",
    kidsTip: "お肉と白菜がトロトロに煮込まれて甘みが増し、野菜をたっぷり食べてくれます。",
    tip: "お鍋の蓋をして弱火でじっくり蒸し焼きにすると白菜自身の水分で旨味が凝縮します。",
    url: "https://www.sirogohan.com/recipe/hakusaibuta/",
    ingredients: [
      { name: "豚こま肉", amount: 90, unit: "g", aisle: "肉・魚" },
      { name: "白菜", amount: 150, unit: "g", aisle: "野菜" },
      { name: "和風だしの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜と豚バラ肉を交互に4〜5回重ね、5cm幅に切りそろえる。",
      "鍋のフチから中心に向かってギッシリと隙間なく敷き詰める。",
      "酒、出汁（または鶏ガラ水）、醤油を回し入れ、蓋をして弱火で12分蒸し煮にする。"
    ]
  },
  {
    id: "main_35",
    title: "【外部サイト】鶏むね肉と夏野菜のさっぱり南蛮漬け",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "summer",
    time: "20分",
    approxCostPerPerson: 140,
    tags: ["夏野菜", "鶏むね肉", "さっぱり", "外部レシピ"],
    containsDislikes: ["なす", "ピーマン"],
    description: "揚げ焼きにした鶏むね肉とナス・ピーマンを甘酢ダレにジュワッと浸す、夏バテ防止の定番おかず。",
    kidsTip: "酸味を少し抑えてお砂糖を多めにするとマイルドな甘酢になり子供も食べやすいです。",
    tip: "熱いうちにタレに漬け込むことで中まで味がしっかり染み込みます。",
    url: "https://www.sirogohan.com/recipe/nanbanzuke/",
    ingredients: [
      { name: "鶏むね肉", amount: 100, unit: "g", aisle: "肉・魚" },
      { name: "なす", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "ピーマン", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "酢", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 8, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉は削ぎ切りにして酒と塩をもみ込み、片栗粉を薄くまぶす。",
      "フライパンに多めの油を熱し、鶏肉と冷凍ブロッコリーを炒める。",
      "ポン酢とマヨネーズを合わせたタレを回し入れ、全体にサッと絡めて火を止める。"
    ]
  },
  {
    id: "main_36",
    title: "【外部サイト】アジの塩焼き すだち添え（白ごはん.com）",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "summer",
    time: "15分",
    approxCostPerPerson: 160,
    tags: ["魚料理", "夏の旬", "シンプル和食", "外部レシピ"],
    containsDislikes: ["魚"],
    description: "夏の旬で安く手に入るアジをグリルで香ばしくパリッと焼き上げた、シンプルで滋味深い一品。",
    kidsTip: "小骨に注意してほぐしてあげると、ふっくらした身と塩気で美味しく食べられます。",
    tip: "焼く10分前に塩を振って出てきた水分を拭き取ると生臭さが完全に抜けます。",
    url: "https://www.sirogohan.com/recipe/ajisio/",
    ingredients: [
      { name: "あじ", amount: 1, unit: "尾", aisle: "肉・魚" },
      { name: "塩", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "アジの小骨を取り、塩コショウをして小麦粉を薄くまぶす。",
      "フライパンに多めの油を熱し、皮目から中火で両面カリッと揚げ焼きにする。",
      "熱いうちに醤油、みりん、生姜を合わせた甘辛だれをジュワッとかける。"
    ]
  },
  {
    id: "main_37",
    title: "【外部サイト】豚こまと厚揚げの甘辛生姜炒め",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "all",
    time: "12分",
    approxCostPerPerson: 130,
    tags: ["かさ増し", "厚揚げ", "超低コスト", "外部レシピ"],
    containsDislikes: [],
    description: "厚揚げで肉量を上手に節約！お肉の旨味を厚揚げがしっかり吸い込んで大満足のボリューム感。",
    kidsTip: "甘辛いたれと生姜の優しい香りで厚揚げがまるでメインのお肉のように美味しく食べられます。",
    tip: "厚揚げを手でちぎって炒めるとタレが絡みやすくなります。",
    url: "https://www.sirogohan.com/recipe/butaatsuage/",
    ingredients: [
      { name: "豚こま肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "厚揚げ", amount: 0.5, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "生姜", amount: 1, unit: "かけ", aisle: "野菜" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "厚揚げは一口大に手でちぎり、豚こま肉は食べやすく切る。",
      "フライパンにごま油を熱し、豚肉と厚揚げをこんがり焼き色がつくまで炒める。",
      "醤油、みりん、砂糖、おろし生姜を回し入れ、汁気が飛んで照りが出るまで絡める。"
    ]
  },
  {
    id: "main_38",
    title: "【外部サイト】至高の天津飯（リュウジ式）",
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    season: "all",
    time: "10分",
    approxCostPerPerson: 110,
    tags: ["カニカマ", "卵料理", "超時短節約", "外部レシピ"],
    containsDislikes: [],
    description: "カニカマと卵でできる感動のふわとろ天津飯。オイスターソース香る特製甘酢餡がたっぷり！",
    kidsTip: "ふわふわ卵ととろとろの餡掛けはお子様の大好物。ご飯にかけてペロリと完食します。",
    tip: "卵は強火で半熟状に素早く火を通すのがふわふわに仕上げるコツです。",
    url: "https://www.youtube.com/watch?v=5wS8nSg1aO0",
    ingredients: [
      { name: "卵", amount: 1.5, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "カニカマ", amount: 2, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "酢", amount: 5, unit: "ml", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "カニカマをほぐし、卵を溶いて混ぜ合わせる。",
      "フライパンに多めの油を強火で熱し、卵液を一気に入れて半熟状にかき混ぜてご飯にのせる。",
      "小鍋に水、鶏ガラスープの素、醤油、酢、片栗粉を入れて煮立て、とろみ餡を作って卵にかける。"
    ]
  },
  {
    id: "main_39",
    title: "【外部サイト】サバ缶とキャベツの味噌バター炒め",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "all",
    time: "10分",
    approxCostPerPerson: 130,
    tags: ["缶詰節約", "DHA満点", "コク旨", "外部レシピ"],
    containsDislikes: ["魚"],
    description: "ストックできるサバ水煮缶を丸ごと活用！キャベツの甘みと味噌バターのコクで魚臭さを完全カバー。",
    kidsTip: "バターと味噌の濃厚なタレがキャベツとサバに絡んで魚嫌いなお子様にも大好評。",
    tip: "サバ缶の汁ごと加えることで余分な出汁を使わず旨味を全て活かせます。",
    url: "https://www.sirogohan.com/recipe/sabakyabetsu/",
    ingredients: [
      { name: "サバ水煮缶", amount: 0.3, unit: "缶", aisle: "肉・魚" },
      { name: "キャベツ", amount: 80, unit: "g", aisle: "野菜" },
      { name: "味噌", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "バター", amount: 6, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツは一口大のざく切りにする。",
      "フライパンにバターを熱し、キャベツをしんなりするまで炒める。",
      "サバ缶を汁ごと加え、味噌とみりんを溶かし入れ、全体に炒め合わせる。"
    ]
  },
  {
    id: "main_40",
    title: "【外部サイト】鶏むね肉の甘辛ヤンニョムチキン",
    category: "main",
    cuisine: "chinese",
    proteinType: "chicken",
    season: "all",
    time: "20分",
    approxCostPerPerson: 140,
    tags: ["韓国風", "鶏むね肉", "子供大人気", "外部レシピ"],
    containsDislikes: [],
    description: "ケチャップと蜂蜜で甘辛く仕上げた韓国風唐揚げ。カリッと揚げ焼きしたむね肉がタレによく絡みます。",
    kidsTip: "コチュジャンを控えめにしてケチャップを多めにすることでマイルドな絶品照り味になります。",
    tip: "片栗粉をたっぷりまぶして焼くとタレがしっかり密着します。",
    url: "https://www.youtube.com/watch?v=0P4L9tX3a1Q",
    ingredients: [
      { name: "鶏むね肉", amount: 120, unit: "g", aisle: "肉・魚" },
      { name: "片栗粉", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "ケチャップ", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 6, unit: "g", aisle: "調味料・その他" },
      { name: "白ごま", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉は一口大に切り、酒と塩をもみ込み片栗粉をしっかりまぶす。",
      "フライパンに多めの油を熱し、両面カリッと揚げ焼きにする。",
      "ケチャップ、醤油、砂糖、みりんを小鍋で煮立たせたタレに鶏肉を絡め、白ごまを振る。"
    ]
  },
  {
    id: "main_41",
    title: "【外部サイト】絶品！豚肉と大根のこってり炒め煮（白ごはん.com）",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "winter",
    time: "20分",
    approxCostPerPerson: 150,
    tags: ["冬の旬", "ご飯が進む", "大根大量消費", "外部レシピ"],
    containsDislikes: [],
    description: "豚バラや豚こまの旨味が大根の芯までじゅわっと染み込んだ、冬の定番ご飯泥棒おかず。",
    kidsTip: "大根を薄めの半月切りにすることで短時間で味が染み、柔らかく食べやすくなります。",
    tip: "大根を先に少し炒めて油を吸わせるとコクが増して煮崩れも防げます。",
    url: "https://www.sirogohan.com/recipe/butadaikon/",
    ingredients: [
      { name: "豚こま肉", amount: 100, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 100, unit: "g", aisle: "野菜" },
      { name: "生姜", amount: 0.5, unit: "かけ", aisle: "野菜" },
      { name: "醤油", amount: 12, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 12, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 6, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は1cm厚さの半月切り、豚肉は一口大に切る。",
      "フライパンに油を熱し、豚肉を炒めて色が変わったら大根を加えて透き通るまで炒める。",
      "水100mlと醤油・みりん・砂糖、生姜を加え、落とし蓋をして弱火で12分煮汁が少なくなるまで煮絡める。"
    ]
  },
  {
    id: "main_42",
    title: "【外部サイト】至高のチキン南蛮（リュウジ式）",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "20分",
    approxCostPerPerson: 160,
    tags: ["タルタルソース", "子供大好物", "鶏むね肉", "外部レシピ"],
    containsDislikes: [],
    description: "パサつきがちな鶏むね肉が驚くほどジューシー！甘酢と特製タルタルソースが絡むごちそう主菜。",
    kidsTip: "マイルドな甘酢と卵たっぷりのタルタルソースで子供たちが競い合うように完食します。",
    tip: "鶏肉はフォークで数カ所刺してから下味をもみ込むと驚くほど柔らかくなります。",
    url: "https://www.youtube.com/watch?v=kYJ5oP6uMzg",
    ingredients: [
      { name: "鶏むね肉", amount: 120, unit: "g", aisle: "肉・魚" },
      { name: "卵", amount: 0.4, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "マヨネーズ", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "酢", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉は削ぎ切りにして塩コショウをし、片栗粉をまぶしてフライパンで両面カリッと揚げ焼きにする。",
      "醤油・酢・砂糖を合わせた甘酢だれに、熱々の鶏肉をジュワッとくぐらせる。",
      "ゆで卵を粗く崩し、マヨネーズと砂糖少々を混ぜたタルタルソースをたっぷりかける。"
    ]
  },
  {
    id: "main_43",
    title: "【外部サイト】厚揚げと豚ひき肉のとろみマーボー豆腐（白ごはん.com）",
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    season: "all",
    time: "15分",
    approxCostPerPerson: 130,
    tags: ["かさ増し", "厚揚げ節約", "子供ウケ中華", "外部レシピ"],
    containsDislikes: [],
    description: "水切り不要の厚揚げで簡単時短！厚揚げがひき肉の旨味を吸い込み、食べ応え抜群の本格麻婆。",
    kidsTip: "豆板醤を使わず味噌ベースで甘口に仕上げているので、小さいお子様もご飯にかけてペロリ。",
    tip: "厚揚げを手で一口大にちぎって加えると、表面積が増えてタレがしっかり絡みます。",
    url: "https://www.sirogohan.com/recipe/mabo/",
    ingredients: [
      { name: "豚ひき肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "厚揚げ", amount: 0.5, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "長ネギ", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "味噌", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 4, unit: "g", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 8, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "厚揚げは一口大のさいの目切り、長ネギはみじん切りにする。",
      "フライパンにごま油を熱し、ひき肉と長ネギを炒め、色が変わったら水100ml、味噌、醤油、砂糖を加える。",
      "厚揚げを加えて2分煮込み、水溶き片栗粉でとろみをつけてごま油少々を回し入れる。"
    ]
  },
  {
    id: "main_44",
    title: "【外部サイト】鮭とじゃがいもの味噌バターコーン炒め",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "autumn",
    time: "15分",
    approxCostPerPerson: 170,
    tags: ["秋の旬", "魚嫌い克服", "北海道風", "外部レシピ"],
    containsDislikes: ["魚"],
    description: "秋鮭の旨味とホクホクじゃがいも！味噌バターとプチプチコーンの甘みで魚が苦手な子も大満足。",
    kidsTip: "バターとコーンの黄金コンビで魚臭さが完全に消え、子供たちからリピート確実な一品。",
    tip: "じゃがいもを先にレンジで加熱しておくと、フライパンで鮭と一緒に短時間で火が通ります。",
    url: "https://www.sirogohan.com/recipe/sakebutter/",
    ingredients: [
      { name: "生鮭", amount: 0.8, unit: "切", aisle: "肉・魚" },
      { name: "じゃがいも", amount: 0.6, unit: "個", aisle: "野菜" },
      { name: "コーン缶", amount: 20, unit: "g", aisle: "野菜" },
      { name: "バター", amount: 8, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいもは一口大に切ってレンジで3分加熱。鮭は一口大に切り片栗粉を薄くまぶす。",
      "フライパンにサラダ油を熱し、鮭とじゃがいもをこんがり両面焼き色がつくまで焼く。",
      "コーンを加え、味噌・みりん・バターを加えて全体に手早く絡め炒める。"
    ]
  },
  {
    id: "main_45",
    title: "【外部サイト】なすと豚こまのピリ辛味噌炒め（白ごはん.com）",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "summer",
    time: "12分",
    approxCostPerPerson: 140,
    tags: ["夏の旬", "スタミナ", "ご飯泥棒", "外部レシピ"],
    containsDislikes: ["なす"],
    description: "夏ナスが油を吸ってトロットロ！豚肉の脂と甘辛味噌が絡んで白ご飯が何杯でもいけるスタミナ主菜。",
    kidsTip: "ナスの皮を縞模様に剥いて小さめに切ると、皮が口に残らず子供もパクパク食べられます。",
    tip: "ナスを切ったらすぐに少量のサラダ油を絡めておくと加熱が早くなり変色も防げます。",
    url: "https://www.sirogohan.com/recipe/nasubutamiso/",
    ingredients: [
      { name: "豚こま肉", amount: 90, unit: "g", aisle: "肉・魚" },
      { name: "なす", amount: 1, unit: "本", aisle: "野菜" },
      { name: "ピーマン", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "味噌", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "なすは乱切り、ピーマンは一口大、豚肉は食べやすい大きさに切る。",
      "フライパンに油を多めに熱し、豚肉となすを強火でしんなりするまで炒める。",
      "ピーマンと、味噌・みりん・砂糖を合わせたタレを加え、全体に照りが出るまで一気に炒める。"
    ]
  },
  {
    id: "main_46",
    title: "【外部サイト】タラのムニエル 焦がし醤油バター（白ごはん.com）",
    category: "main",
    cuisine: "western",
    proteinType: "fish",
    season: "winter",
    time: "12分",
    approxCostPerPerson: 160,
    tags: ["冬の旬", "白身魚", "バター香る", "外部レシピ"],
    containsDislikes: ["魚"],
    description: "淡白なタラをカリッと焼き上げ、香ばしい焦がし醤油バターをジュワッとかけた洋食の定番。",
    kidsTip: "骨なしの切り身を選び、バターの香ばしい風味を利かせることでお魚嫌いのお子様も完食。",
    tip: "小麦粉をまぶして余分な粉をしっかり落としてから焼くと、外カリッ・中ふっくらに仕上がります。",
    url: "https://www.sirogohan.com/recipe/taramuni/",
    ingredients: [
      { name: "タラ切り身", amount: 1, unit: "切", aisle: "肉・魚" },
      { name: "薄力粉", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "バター", amount: 10, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "醤油", amount: 6, unit: "ml", aisle: "調味料・その他" },
      { name: "レモン汁", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "タラは水気をペーパーで拭き取り、塩コショウをして薄力粉を薄くまぶす。",
      "フライパンにバター半量を熱し、タラを皮目から中火で両面こんがり焼き色がつくまで焼く。",
      "焼き上がったら残りのバターと醤油を回し入れ、泡立ったら火を止めてタラに絡める。"
    ]
  },
  {
    id: "main_47",
    title: "【外部サイト】至高のオムライス（リュウジ式）",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "15分",
    approxCostPerPerson: 130,
    tags: ["子供大人気", "卵料理", "ケチャップライス", "外部レシピ"],
    containsDislikes: [],
    description: "酸味を飛ばした濃厚チキンライスとふわとろ卵！子どもたちの大好物ナンバーワンごちそう。",
    kidsTip: "ケチャップを具材と一緒にしっかり炒めて酸味を飛ばすと、甘みとコクが際立ち子供ウケ抜群に。",
    tip: "卵は強火で半熟状に素早くかき混ぜて火を止めるのがふわとろに仕上げる秘訣です。",
    url: "https://www.youtube.com/watch?v=5wS8nSg1aO0",
    ingredients: [
      { name: "鶏もも肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "玉ねぎ", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "卵", amount: 1.5, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "ケチャップ", amount: 25, unit: "g", aisle: "調味料・その他" },
      { name: "バター", amount: 8, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "鶏肉と玉ねぎを細かく刻み、バターで炒めてケチャップを加えて水分を飛ばす。",
      "温かいご飯を加えて炒め合わせ、チキンライスを作ってお皿に盛る。",
      "溶き卵をフライパンで強火で半熟トロトロに手早く焼き、チキンライスの上にフワッとのせる。"
    ]
  },
  {
    id: "main_48",
    title: "【外部サイト】鶏肉と新じゃがの甘辛照り煮（白ごはん.com）",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "spring",
    time: "18分",
    approxCostPerPerson: 140,
    tags: ["春の旬", "新じゃがいも", "ホクホク", "外部レシピ"],
    containsDislikes: [],
    description: "春の新じゃがいもの皮の香ばしさと鶏肉のジューシーな旨味。甘辛い照りダレが絡んで絶品！",
    kidsTip: "新じゃがいもは皮が薄く柔らかいので、皮ごとホクホク美味しく食べられます。",
    tip: "鶏肉の皮目をしっかり焼き付けてから煮ると、余分な脂が落ちて香ばしさが引き立ちます。",
    url: "https://www.sirogohan.com/recipe/torisinjaga/",
    ingredients: [
      { name: "鶏もも肉", amount: 90, unit: "g", aisle: "肉・魚" },
      { name: "じゃがいも", amount: 1, unit: "個", aisle: "野菜" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "新じゃがは皮付きのまま一口大に切り、鶏肉も一口大に切る。",
      "鍋に油を熱し、鶏肉とじゃがいもを表面に香ばしい焼き色がつくまで炒める。",
      "出汁150mlと醤油・みりん・砂糖を加え、落とし蓋をして弱火で12分煮汁が絡むまで煮詰める。"
    ]
  },
  {
    id: "main_49",
    title: "【外部サイト】キャベツと豚こまの旨塩ガーリック炒め",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "all",
    time: "10分",
    approxCostPerPerson: 130,
    tags: ["スタミナ", "キャベツ消費", "スピード主菜", "外部レシピ"],
    containsDislikes: [],
    description: "にんにくとごま油の香りでシャキシャキのキャベツが山盛り食べられる！10分で作れる節約中華。",
    kidsTip: "塩と鶏ガラのシンプルな味付けなので、野菜が苦手な子もキャベツの甘みで食べやすいです。",
    tip: "キャベツを入れたら強火で一気に炒めることで、水分が出ずにシャキッと仕上がります。",
    url: "https://www.sirogohan.com/recipe/butakyabetusio/",
    ingredients: [
      { name: "豚こま肉", amount: 100, unit: "g", aisle: "肉・魚" },
      { name: "キャベツ", amount: 100, unit: "g", aisle: "野菜" },
      { name: "にんにく", amount: 0.5, unit: "かけ", aisle: "野菜" },
      { name: "鶏ガラスープの素", amount: 4, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツはざく切り、にんにくは薄切りにする。",
      "フライパンにごま油とにんにくを熱し、香りが立ったら豚肉を加えて強火で炒める。",
      "キャベツを一気に加え、鶏ガラスープの素と塩コショウで手早くシャキッと炒め合わせる。"
    ]
  },
  {
    id: "main_50",
    title: "【外部サイト】豆腐とひき肉のふわふわ和風ハンバーグ（白ごはん.com）",
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "all",
    time: "20分",
    approxCostPerPerson: 130,
    tags: ["かさ増し", "豆腐ハンバーグ", "ヘルシー節約", "外部レシピ"],
    containsDislikes: [],
    description: "木綿豆腐をたっぷり練り込んで冷めてもふわふわ柔らか！お肉を半分節約できるヘルシー主菜。",
    kidsTip: "パサつかず驚くほど柔らかいので、小さなお子様でも喉につかえずペロリと完食できます。",
    tip: "豆腐の水気をしっかり切ってからひき肉と合わせることで、焼いたときに型崩れしません。",
    url: "https://www.sirogohan.com/recipe/tofutoubun/",
    ingredients: [
      { name: "豚ひき肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "木綿豆腐", amount: 50, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "ポン酢", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "大根", amount: 20, unit: "g", aisle: "野菜" }
    ],
    instructions: [
      "豆腐は水切りし、みじん切り玉ねぎ、ひき肉、塩コショウと粘りが出るまでよく捏ねて小判型に成形する。",
      "フライパンに油を熱し、中火で両面をこんがり焼いたら水大さじ2を加えて蓋をし、弱火で5分蒸し焼きにする。",
      "お皿に盛り、大根おろしとポン酢をたっぷりかけてさっぱりいただく。"
    ]
  },
  {
    id: "main_51",
    title: "豆腐＆もやしでカサ増し！ジューシー節約焼き餃子",
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    season: "all",
    time: "25分",
    approxCostPerPerson: 95,
    tags: ["節約餃子", "もやし豆腐", "カサ増し神業", "子供大好き", "パリパリ"],
    containsDislikes: [],
    description: "豚ひき肉に水切り木綿豆腐と細かく刻んだもやしをたっぷり混ぜて驚きのかさ増し！肉汁を豆腐が吸ってふっくらジューシー、5人分でも激安でお腹いっぱい食べられます。",
    kidsTip: "もやしのシャキシャキ感とお豆腐のふんわり食感で、子供たちが大喜びでバクバクおかわりしてくれます。",
    tip: "豆腐はレンジで水気を切るのがベチャつかない秘訣。もやしは粗みじん切りにしてタネに混ぜ込みます。",
    ingredients: [
      { name: "豚ひき肉", amount: 40, unit: "g", aisle: "肉・魚" },
      { name: "木綿豆腐", amount: 40, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "もやし", amount: 40, unit: "g", aisle: "野菜" },
      { name: "ニラ", amount: 0.2, unit: "束", aisle: "野菜" },
      { name: "餃子の皮", amount: 6, unit: "枚", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "もやしとニラは粗みじん切りにし、水切り豆腐、ひき肉、醤油・ごま油各小さじ1、生姜と粘りが出るまで練る。",
      "餃子の皮のフチに水をつけてタネを包み、フライパンにごま油を引いて並べる。",
      "強火で焼き色がついたら水80mlを注ぎ、蓋をして中火で4分蒸し焼きに。水気が飛んだらパリッと焼き上げる。"
    ]
  },
  {
    id: "main_52",
    title: "節約絶品！豚こまキャベツの棒餃子",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "all",
    time: "20分",
    approxCostPerPerson: 115,
    tags: ["棒餃子", "豚こま", "包むの簡単", "外部レシピ", "時短"],
    containsDislikes: [],
    description: "特売の豚こま肉を粗く刻んでキャベツと一緒にくるっと巻くだけ！ひき肉よりも肉々しい食べ応えで大満足の棒餃子。",
    kidsTip: "棒状なので手や箸で持ちやすく、外はカリカリ中はジューシーで子供たちに大好評です。",
    tip: "両端を閉じずにくるっと巻くだけなので、包む時間がいつもの3分の1で完成します！",
    url: "https://delishkitchen.tv/recipes/200676451614065691",
    ingredients: [
      { name: "豚こま肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "キャベツ", amount: 50, unit: "g", aisle: "野菜" },
      { name: "餃子の皮", amount: 5, unit: "枚", aisle: "調味料・その他" },
      { name: "ごま油", amount: 4, unit: "ml", aisle: "調味料・その他" },
      { name: "オイスターソース", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "豚こま肉は粗みじんに刻み、キャベツは粗みじんにして軽く塩もみして水気を絞る。",
      "ボウルに豚肉、キャベツ、オイスターソース、醤油、生姜を混ぜ、餃子の皮にのせてくるっと巻く。",
      "フライパンに並べて両面に香ばしい焼き色がつくまで中火でこんがり焼き上げる。"
    ]
  },
  {
    id: "main_53",
    title: "タコなしでも絶品！ちくわ＆天かすの節約たこ焼きパーティー",
    category: "main",
    cuisine: "japanese",
    proteinType: "other",
    season: "all",
    time: "25分",
    approxCostPerPerson: 85,
    tags: ["節約たこ焼き", "ちくわ代用", "タコなし", "たこパ", "子供大人気"],
    containsDislikes: ["長ネギ"],
    description: "高価なタコの代わりに、旨味たっぷりのちくわとウインナー、天かすをイン！出汁が効いた生地とソースマヨで本家超えの美味しさ。",
    kidsTip: "タコが噛み切りにくい小さなお子様もちくわやウインナーなら柔らかくてパクパク食べられます！",
    tip: "天かすをたっぷり入れることで、タコがなくてもコクと香ばしさが格段にアップします。",
    ingredients: [
      { name: "小麦粉", amount: 50, unit: "g", aisle: "調味料・その他" },
      { name: "卵", amount: 0.4, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "ちくわ", amount: 1, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "ウインナー", amount: 0.6, unit: "本", aisle: "肉・魚" },
      { name: "キャベツ", amount: 40, unit: "g", aisle: "野菜" },
      { name: "天かす", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "たこ焼きソース", amount: 15, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ボウルに小麦粉、和風だしの素、卵、冷水を混ぜ合わせて滑らかな生地を作る。",
      "たこ焼き器（またはフライパン）に油を引き、刻んだちくわ、ウインナー、キャベツ、天かすを散らして生地を流し込む。",
      "くるくると回しながら全体がきつね色になるまでカリッと焼き、ソース・マヨネーズ・青のりをかける。"
    ]
  },
  {
    id: "main_54",
    title: "キャベツたっぷり！フライパンBIG節約たこ焼き",
    category: "main",
    cuisine: "japanese",
    proteinType: "other",
    season: "all",
    time: "20分",
    approxCostPerPerson: 80,
    tags: ["フライパンたこ焼き", "丸ごと一発", "たこなし節約", "外部レシピ", "時短"],
    containsDislikes: [],
    description: "たこ焼き器不要！フライパン1つで大きく焼いて切り分けるだけの簡単たこ焼き。外カリ中トロ食感で後片付けもラクラク。",
    kidsTip: "ピザのように切り分けて出せるので見た目も楽しく、家族みんなでワイワイ食べられます。",
    tip: "最後に鍋肌からごま油を回し入れると、底面がカリッと香ばしく揚がったように仕上がります。",
    url: "https://cookpad.com/recipe/4507024",
    ingredients: [
      { name: "キャベツ", amount: 70, unit: "g", aisle: "野菜" },
      { name: "小麦粉", amount: 40, unit: "g", aisle: "調味料・その他" },
      { name: "卵", amount: 0.4, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "ちくわ", amount: 0.8, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "天かす", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "かつお節", amount: 1, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "粗みじん切りキャベツ、小口切りのちくわ、天かす、小麦粉、卵、だしの素、水を混ぜ合わせる。",
      "フライパンに油を熱して生地を一気に広げ、蓋をして中火で約5分蒸し焼きにする。",
      "裏返してさらに3分焼き、仕上げにごま油を回し入れてカリッとさせ、ソースとマヨネーズをかける。"
    ]
  },
  {
    id: "main_55",
    title: "じゃがいもとおからのふんわり節約お肉コロッケ",
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "all",
    time: "30分",
    approxCostPerPerson: 90,
    tags: ["節約コロッケ", "おからカサ増し", "食物繊維", "サクサク", "手作りコロッケ"],
    containsDislikes: [],
    description: "茹でたホクホクじゃがいもにおからを合わせ、合い挽き肉の旨味をしっかり吸わせた大満足コロッケ。お肉半分でも濃厚なコク！",
    kidsTip: "おからのパサつき感ゼロ！お芋の自然な甘みとひき肉の旨味で子供たちも大好きな味付けです。",
    tip: "おからに炒めたひき肉の肉汁を吸わせることで、パサつかずしっとりジューシーなタネになります。",
    ingredients: [
      { name: "じゃがいも", amount: 100, unit: "g", aisle: "野菜" },
      { name: "おから", amount: 30, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "合い挽き肉", amount: 30, unit: "g", aisle: "肉・魚" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "パン粉", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "卵", amount: 0.2, unit: "個", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "じゃがいもは皮をむいて柔らかくなるまで茹でて熱いうちに潰す。",
      "みじん切り玉ねぎと合い挽き肉を炒め、おから、塩コショウ、砂糖小さじ1/2を加えて炒め、じゃがいもと混ぜる。",
      "小判型に成形し、小麦粉・溶き卵・パン粉の順につけて180度の油でキツネ色にカラッと揚げる。"
    ]
  },
  {
    id: "main_56",
    title: "揚げない！スコップコロッケ",
    category: "main",
    cuisine: "western",
    proteinType: "mince",
    season: "all",
    time: "20分",
    approxCostPerPerson: 85,
    tags: ["スコップコロッケ", "揚げない", "油節約", "トースター", "外部レシピ"],
    containsDislikes: [],
    description: "丸めない！揚げない！耐熱皿にタネを敷き詰め、炒ったサクサクパン粉を乗せてトースターで焼くだけ。油も最小限で超ヘルシー節約。",
    kidsTip: "スプーンですくって食べるスタイルが子供たちに大好評！油跳ねもなくて片付けも簡単です。",
    tip: "パン粉をフライパンでキツネ色になるまで乾煎りしてから乗せると、揚げたてサクサクの香ばしさになります。",
    url: "https://www.kurashiru.com/recipes/24f8d55d-b0ad-4679-b14a-f5bb5ee6552a",
    ingredients: [
      { name: "じゃがいも", amount: 100, unit: "g", aisle: "野菜" },
      { name: "合い挽き肉", amount: 30, unit: "g", aisle: "肉・魚" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "パン粉", amount: 12, unit: "g", aisle: "調味料・その他" },
      { name: "バター", amount: 3, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "じゃがいもはレンジで柔らかく加熱して潰す。ひき肉と玉ねぎを炒めて塩コショウし、じゃがいもと混ぜる。",
      "耐熱皿にタネを敷き詰める。フライパンでパン粉と油小さじ1をキツネ色になるまで炒め、タネの上に広げる。",
      "オーブントースターで3〜4分、表面がこんがりするまで香ばしく焼き上げる。"
    ]
  },

  // =================================================================
  // 【副菜 (Side)】- 全14品（和・洋・中華の多彩な箸休め）
  // =================================================================
  {
    id: "side_01",
    title: "やみつき無限ピーマン",
    category: "side",
    cuisine: "japanese",
    time: "5分",
    approxCostPerPerson: 45,
    tags: ["レンジ調理", "子供ウケ", "ツナ缶"],
    containsDislikes: ["ピーマン"],
    description: "ピーマン嫌いな子がパクパク食べる魔法の副菜！ツナの旨味とごま油の香りで苦味が消えます。",
    kidsTip: "ピーマンを繊維に沿って細切りにし、ツナ油ごとチンすることで苦味が甘みに変化します！",
    tip: "レンジ加熱後に粗熱をとると味がギュッと馴染みます。",
    ingredients: [
      { name: "ピーマン", amount: 1, unit: "個", aisle: "野菜" },
      { name: "ツナ缶", amount: 0.2, unit: "缶", aisle: "肉・魚" },
      { name: "鶏ガラスープの素", amount: 2, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ピーマンはヘタと種を取り、細切りにする。",
      "耐熱容器にピーマン、ツナ（油ごと）、鶏ガラスープの素、ごま油を入れて混ぜる。",
      "ふんわりラップをして600Wで2分加熱し、よく和えて完成。"
    ]
  },
  {
    id: "side_02",
    title: "シャキシャキもやしと人参のやみつきナムル",
    category: "side",
    cuisine: "chinese",
    time: "7分",
    approxCostPerPerson: 30,
    tags: ["超低コスト", "レンジ調理", "常備菜"],
    containsDislikes: [],
    description: "もやしが瞬時に消える大人気おかず。すりごまの香ばしさとごま油の香りで野菜がパクパク進みます。",
    kidsTip: "塩気とごま油のコクがちょうどよく、野菜が苦手な子もサラダ感覚で完食できます。",
    tip: "加熱後にしっかり水気を絞るのが水っぽくならない秘訣です。",
    ingredients: [
      { name: "もやし", amount: 0.4, unit: "袋", aisle: "野菜" },
      { name: "人参", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "ごま油", amount: 4, unit: "ml", aisle: "調味料・その他" },
      { name: "いりごま", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "鶏ガラスープの素", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "人参は細切りにする。もやしと一緒に耐熱ボウルに入れラップをしてレンジで3分加熱。",
      "冷水に取って水気をぎゅっと絞る。",
      "ごま油、鶏ガラスープの素、いりごま、塩少々で和える。"
    ]
  },
  {
    id: "side_03",
    title: "ちくわときゅうりのマヨポン和え",
    category: "side",
    cuisine: "japanese",
    time: "5分",
    approxCostPerPerson: 40,
    tags: ["火を使わない", "ちくわ", "スピード副菜"],
    containsDislikes: [],
    description: "切って和えるだけ3分完成！ちくわの弾力ときゅうりのパリパリ食感が子供たちに大好評。",
    kidsTip: "マヨネーズベースなので酸っぱすぎず、おやつ感覚で食べられます。",
    tip: "きゅうりに少し塩を振って水気を絞ると、時間が経っても味が薄まりません。",
    ingredients: [
      { name: "きゅうり", amount: 0.4, unit: "本", aisle: "野菜" },
      { name: "ちくわ", amount: 0.6, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "マヨネーズ", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "ポン酢", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "きゅうりは乱切り、ちくわは一口大の斜め切りにする。",
      "ボウルにきゅうり、ちくわ、マヨネーズ、ポン酢、すりごま（あれば）を入れて和える。"
    ]
  },
  {
    id: "side_04",
    title: "キャベツと塩昆布のごま油和え",
    category: "side",
    cuisine: "japanese",
    time: "5分",
    approxCostPerPerson: 35,
    tags: ["ポリ袋で完結", "包丁いらず", "居酒屋風"],
    containsDislikes: [],
    description: "手でちぎってポリ袋でもみもみするだけ！無限にキャベツが食べられるお助け副菜。",
    kidsTip: "塩昆布の旨味とお砂糖少々を足すと、キャベツがフルーツのように甘く感じられます。",
    tip: "キャベツを手でちぎるとタレが絡みやすくなります。",
    ingredients: [
      { name: "キャベツ", amount: 60, unit: "g", aisle: "野菜" },
      { name: "塩昆布", amount: 4, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 4, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツは一口大に手でちぎり、ポリ袋に入れる。",
      "塩昆布、ごま油、白いりごまを加え、袋の上からしっかり揉み込んで5分置く。"
    ]
  },
  {
    id: "side_05",
    title: "沖縄の味！にんじんと卵のしりしり",
    category: "side",
    cuisine: "japanese",
    time: "10分",
    approxCostPerPerson: 50,
    tags: ["彩り満点", "卵料理", "子供ウケ"],
    containsDislikes: [],
    description: "人参の自然な甘みが引き出され、卵とツナの旨味で人参嫌いも克服できる鉄板メニュー。",
    kidsTip: "卵のふわふわ感とツナの塩気で、人参特有の土臭さが完全に消えます！",
    tip: "スライサー（しりしり器）を使うと一瞬で細切りが完了します。",
    ingredients: [
      { name: "人参", amount: 0.4, unit: "本", aisle: "野菜" },
      { name: "卵", amount: 0.4, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "ツナ缶", amount: 0.15, unit: "缶", aisle: "肉・魚" },
      { name: "だしの素", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "人参は細切り（千切り）にする。",
      "フライパンにツナの油少々を熱し、人参をしんなりするまで炒める。",
      "ツナ、だしの素、醤油・みりん各小さじ1を加えて炒め合わせる。",
      "溶き卵を回し入れ、手早く混ぜて半熟状で火を止める。"
    ]
  },
  {
    id: "side_06",
    title: "ほくほくじゃがいもと人参の甘辛きんぴら",
    category: "side",
    cuisine: "japanese",
    time: "12分",
    approxCostPerPerson: 40,
    tags: ["子供ウケ", "根菜", "常備菜"],
    containsDislikes: [],
    description: "固いごぼうの代わりにじゃがいもを使った柔らかいきんぴら。じゃがいもの甘みで子どもたちが大喜び！",
    kidsTip: "じゃがいもがホクホク柔らかいので、小さいお子様でも喉につかえず食べやすい！",
    tip: "じゃがいもは水にさらしてデンプンを落とすと崩れにくくシャキッとした食感に。",
    ingredients: [
      { name: "じゃがいも", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "人参", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "いりごま", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいもと人参は千切りにし、じゃがいもはサッと水にさらして水気を切る。",
      "フライパンにごま油を熱し、人参とじゃがいもを透き通るまで炒める。",
      "醤油、みりん、砂糖小さじ1を加えて汁気が飛ぶまで炒め、いりごまを振る。"
    ]
  },
  {
    id: "side_07",
    title: "コーンとキャベツのコールスローサラダ",
    category: "side",
    cuisine: "western",
    time: "8分",
    approxCostPerPerson: 38,
    tags: ["火を使わない", "コーン", "子供ウケ抜群", "洋風"],
    containsDislikes: [],
    description: "プチプチ甘いコーンとシャキシャキキャベツ！マヨネーズとほんのりお酢でいくらでも食べられます。",
    kidsTip: "ハンバーガー屋さんのコールスローの味！お砂糖をひとつまみ入れるのが子供ウケのコツです。",
    tip: "キャベツは塩もみしてしっかり水気を絞るのが長持ちのコツ。",
    ingredients: [
      { name: "キャベツ", amount: 50, unit: "g", aisle: "野菜" },
      { name: "コーン缶", amount: 20, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 0.1, unit: "本", aisle: "野菜" },
      { name: "マヨネーズ", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "酢", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツと人参は千切りにし、塩少々を振って5分置き、水気をぎゅっと絞る。",
      "ボウルに水気を切ったコーン、マヨネーズ、酢、砂糖小さじ1/2を加えてよく混ぜ合わせる。"
    ]
  },
  {
    id: "side_08",
    title: "ブロッコリーとゆで卵のデリ風マヨ和え",
    category: "side",
    cuisine: "western",
    time: "10分",
    approxCostPerPerson: 55,
    tags: ["洋風", "彩り満点", "子供大人気"],
    containsDislikes: [],
    description: "緑と黄色が鮮やか！大きめに崩したゆで卵とブロッコリーにマヨネーズを絡めたごちそうサラダ。",
    kidsTip: "卵のまろやかさでブロッコリーの独特な風味がカバーされ、子供たちの大好物に大変身。",
    tip: "ゆで卵は粗めに崩すと食感が残ってリッチになります。",
    ingredients: [
      { name: "ブロッコリー", amount: 0.25, unit: "株", aisle: "野菜" },
      { name: "卵", amount: 0.4, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "マヨネーズ", amount: 12, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ブロッコリーは小房に分け、耐熱容器に入れてレンジで2分加熱する。",
      "ゆで卵を作り、殻を剥いて一口大に崩す。",
      "ボウルにブロッコリー、ゆで卵、マヨネーズ、塩こしょう少々を入れて和える。"
    ]
  },
  {
    id: "side_09",
    title: "叩ききゅうりの塩ごま油和え",
    category: "side",
    cuisine: "japanese",
    time: "5分",
    approxCostPerPerson: 35,
    tags: ["スピード", "ポリ袋で完結", "包丁いらず"],
    containsDislikes: [],
    description: "麺棒や手で叩いて味染み抜群！パリパリ食感とごま油の風味でお箸が止まらない。",
    kidsTip: "ちぎった海苔やツナを足すとさらに子供たちが喜びます。",
    tip: "きゅうりを叩いて断面を不揃いにすることで、短時間で中まで味が染み込みます。",
    ingredients: [
      { name: "きゅうり", amount: 0.6, unit: "本", aisle: "野菜" },
      { name: "ごま油", amount: 4, unit: "ml", aisle: "調味料・その他" },
      { name: "鶏ガラスープの素", amount: 2, unit: "g", aisle: "調味料・その他" },
      { name: "いりごま", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "きゅうりはヘタを切り、ポリ袋に入れて麺棒等で叩いて一口大に割る。",
      "ごま油、鶏ガラスープの素、いりごまを加えて袋の上から軽く揉んで5分置く。"
    ]
  },
  {
    id: "side_10",
    title: "ほうれん草とコーンのバターソテー",
    category: "side",
    cuisine: "western",
    time: "8分",
    approxCostPerPerson: 45,
    tags: ["洋風", "子供ウケ抜群", "フライパン1つ"],
    containsDislikes: [],
    description: "コーンの甘みと香ばしいバター醤油で、青菜嫌いなお子様もペロリと完食する定番人気おかず。",
    kidsTip: "コーンをたっぷり入れることで甘みが増し、ほうれん草のえぐみが気にならなくなります。",
    tip: "ほうれん草はサッと下茹でしてアクを抜いてから炒めると苦味がなくなります。",
    ingredients: [
      { name: "ほうれん草", amount: 0.3, unit: "束", aisle: "野菜" },
      { name: "コーン缶", amount: 20, unit: "g", aisle: "野菜" },
      { name: "バター", amount: 5, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "醤油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ほうれん草は4cm長さに切る。",
      "フライパンにバターを熱し、ほうれん草とコーンを強火でサッと炒める。",
      "醤油小さじ1/2を回し入れ、香ばしい香りが立ったら火を止める。"
    ]
  },
  {
    id: "side_11",
    title: "カリカリちくわの磯辺揚げ風（トースター・フライパン）",
    category: "side",
    cuisine: "japanese",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["ちくわ", "子供大人気", "お弁当にも"],
    containsDislikes: [],
    description: "青のりの香りが食欲をそそる！少ない油でカリッと揚げ焼きにする大人気のおつまみ＆おかず。",
    kidsTip: "カリカリ・プリプリの食感と青のりの風味が子供たちに大ウケ！",
    tip: "片栗粉とマヨネーズを混ぜた衣を絡めると油跳ねせずサクサクに揚がります。",
    ingredients: [
      { name: "ちくわ", amount: 0.8, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "青のり", amount: 1.5, unit: "g", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 8, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ちくわは斜め乱切りにする。",
      "ボウルにちくわ、青のり、片栗粉、水大さじ1を加えてよく絡める。",
      "多めの油を熱したフライパンで全体がカリッとするまで転がしながら焼く。"
    ]
  },
  {
    id: "side_12",
    title: "豆苗とカニカマの塩ごま和え",
    category: "side",
    cuisine: "chinese",
    time: "5分",
    approxCostPerPerson: 35,
    tags: ["再生栽培可", "豆苗", "超節約"],
    containsDislikes: ["豆苗"],
    description: "年中価格が安定して安い豆苗と彩り豊かなカニカマ。サッと茹でて和えるだけで食卓が華やかに！",
    kidsTip: "カニカマの甘みで豆苗の青臭さが和らぎます。マヨネーズを少し加えても◎",
    tip: "根元を水につけておけば1週間で2回目も収穫できます！",
    ingredients: [
      { name: "豆苗", amount: 0.3, unit: "袋", aisle: "野菜" },
      { name: "カニ風味かまぼこ", amount: 1.5, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" },
      { name: "鶏ガラスープの素", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "豆苗は根元を切り落とし、半分の長さに切る。熱湯でサッと20秒茹でて冷水にとり、水気を絞る。",
      "ほぐしたカニカマ、ごま油、鶏ガラスープの素、白ごまと和える。"
    ]
  },
  {
    id: "side_13",
    title: "なすと豚ひき肉（または油揚げ）の甘辛みそ炒め",
    category: "side",
    cuisine: "japanese",
    time: "10分",
    approxCostPerPerson: 45,
    tags: ["ご飯のお供", "甘辛味噌", "野菜たっぷり"],
    containsDislikes: ["なす"],
    description: "とろとろのなすに甘辛味噌が絡んでご飯が何杯でも進む！油を吸ったなすの甘みが絶品。",
    kidsTip: "なすの皮をトラ刈り（縞模様に剥く）にして小さめに切ると、皮が口に残らず子供もパクパク食べます。",
    tip: "なすは切ったらすぐに油を絡めておくと変色を防ぎ、加熱も早くなります。",
    ingredients: [
      { name: "なす", amount: 0.6, unit: "本", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "なすは乱切りにし、油揚げは短冊切りにする。",
      "フライパンに多めの油を熱し、なすがしんなりするまで炒める。",
      "油揚げを加え、味噌、みりん、醤油各小さじ1を混ぜて絡め炒める。"
    ]
  },
  {
    id: "side_14",
    title: "トマトと玉ねぎのさっぱりポン酢和え",
    category: "side",
    cuisine: "western",
    time: "5分",
    approxCostPerPerson: 40,
    tags: ["火を使わない", "さっぱり", "簡単"],
    containsDislikes: ["トマト"],
    description: "ジューシーなトマトとオリーブオイル＆ポン酢のドレッシング！こってり主菜の日の救世主。",
    kidsTip: "少しお砂糖をパラパラ振るとトマトの酸味が消えてフルーツ感覚で食べられます。",
    tip: "玉ねぎは水にさらして辛味を抜くのが美味しく仕上げるコツ。",
    ingredients: [
      { name: "トマト", amount: 0.4, unit: "個", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.15, unit: "個", aisle: "野菜" },
      { name: "ポン酢", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "オリーブオイル", amount: 4, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "トマトは一口大の乱切り、玉ねぎはみじん切りにして水にさらして絞る。",
      "ボウルでポン酢、オリーブオイルと和えて冷蔵庫で冷やす。"
    ]
  },
  {
    id: "side_15",
    title: "【外部サイト】やみつき無限きゅうり（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5分",
    approxCostPerPerson: 35,
    tags: ["塩もみ", "箸休め", "和風", "外部レシピ"],
    containsDislikes: [],
    description: "きゅうりを叩いてごま油と塩昆布で和えるだけ！ポリポリ食感が止まらない夏の定番副菜。",
    kidsTip: "すりごまの香りと塩昆布の甘みでお子様もスナック感覚で食べられます。",
    tip: "包丁ではなくすりこぎや麺棒で叩いて割ると味が急激に染み込みます。",
    url: "https://www.sirogohan.com/recipe/kyuuri/",
    ingredients: [
      { name: "きゅうり", amount: 0.6, unit: "本", aisle: "野菜" },
      { name: "塩昆布", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" },
      { name: "いりごま", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "きゅうりはヘタを取り、麺棒や包丁の腹で叩いて一口大に割る。",
      "ポリ袋にきゅうりと塩少々を入れ、軽く揉んで5分置き水気を絞る。",
      "塩昆布、ごま油、白ごまを加えて袋の上からよく和える。"
    ]
  },
  {
    id: "side_16",
    title: "【外部サイト】かぼちゃの甘煮（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "15分",
    approxCostPerPerson: 40,
    tags: ["秋の旬", "ほっこり甘い", "子供ウケ", "外部レシピ"],
    containsDislikes: [],
    description: "かぼちゃのホクホク感をそのまま活かした優しい甘煮。白ごはん.comで一番人気の和食副菜。",
    kidsTip: "お芋のような甘さで小さなお子様のおやつや離乳食にも最適です。",
    tip: "皮を下にして鍋に重ならないように並べて煮るとムラなく柔らかくなります。",
    url: "https://www.sirogohan.com/recipe/kabotya/",
    ingredients: [
      { name: "かぼちゃ", amount: 60, unit: "g", aisle: "野菜" },
      { name: "砂糖", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは一口大の角切りにし、面取りをする。",
      "鍋にかぼちゃの皮を下にして重ならないように並べ、水、砂糖、みりんを加える。",
      "落とし蓋をして弱火で8分煮て、醤油を加えてさらに5分煮含める。"
    ]
  },
  {
    id: "side_17",
    title: "【外部サイト】レンジで簡単！無限キャベツ（リュウジ式）",
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 30,
    tags: ["超時短", "レンジのみ", "節約", "外部レシピ"],
    containsDislikes: [],
    description: "千切りキャベツにしらすとごま油、中華調味料を和えてレンチンするだけ。どんぶり一杯食べられます。",
    kidsTip: "温めることでカサが減り、しらすの塩気で野菜嫌いでもたくさん食べられます。",
    tip: "レンジ加熱後に粗熱をとると味がギュッと凝縮します。",
    url: "https://www.youtube.com/watch?v=kYJ5oP6uMzg",
    ingredients: [
      { name: "キャベツ", amount: 70, unit: "g", aisle: "野菜" },
      { name: "しらす", amount: 8, unit: "g", aisle: "肉・魚" },
      { name: "ごま油", amount: 4, unit: "ml", aisle: "調味料・その他" },
      { name: "鶏ガラスープの素", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツは細切り（千切り）にして耐熱ボウルに入れる。",
      "しらす、ごま油、鶏ガラスープの素を加えて軽く混ぜる。",
      "ふんわりラップをして電子レンジで2分半加熱し、全体をよく和える。"
    ]
  },
  {
    id: "side_18",
    title: "【外部サイト】新玉ねぎとおかかのポン酢サラダ",
    category: "side",
    cuisine: "japanese",
    season: "spring",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["春の旬", "新玉ねぎ", "火を使わない", "外部レシピ"],
    containsDislikes: [],
    description: "春に甘みが増す新玉ねぎをスライスして鰹節とポン酢でさっぱり。みずみずしい旬の味。",
    kidsTip: "新玉ねぎは辛味が少ないので、水にサッと晒すだけで子供もサラダ感覚で食べられます。",
    tip: "繊維に垂直に薄切りにすると辛味が抜けやすくなります。",
    url: "https://www.sirogohan.com/recipe/shintama/",
    ingredients: [
      { name: "玉ねぎ", amount: 0.4, unit: "個", aisle: "野菜" },
      { name: "かつお節", amount: 1.5, unit: "g", aisle: "調味料・その他" },
      { name: "ポン酢", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "新玉ねぎは繊維に垂直に極薄切りにし、サッと冷水に晒して水気を絞る。",
      "器に新玉ねぎを盛り、かつお節をたっぷりのせる。",
      "ポン酢（お好みでごま油少々）を回しかけていただく。"
    ]
  },
  {
    id: "side_19",
    title: "【外部サイト】大根の皮と人参のきんぴら（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "10分",
    approxCostPerPerson: 20,
    tags: ["食品ロス削減", "ゼロ円節約", "常備菜", "外部レシピ"],
    containsDislikes: [],
    description: "普段捨てがちな大根の皮を千切りにして再利用！ポリポリした食感がやみつきになるエコ副菜。",
    kidsTip: "甘辛い味付けとごまの風味で大根の皮とは思えない美味しいきんぴらになります。",
    tip: "ごま油で少し透き通るまでしっかり炒めることで甘みが引き立ちます。",
    url: "https://www.sirogohan.com/recipe/daikonkawa/",
    ingredients: [
      { name: "大根", amount: 50, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根の皮と人参は長さ5cmの千切りにする。",
      "フライパンにごま油を熱し、大根の皮と人参が透き通るまで中火で炒める。",
      "醤油、砂糖、みりんを加え、汁気が飛んで照りが出るまで炒り、いりごまを振る。"
    ]
  },
  {
    id: "side_20",
    title: "【外部サイト】ちくわときゅうりのごまマヨ和え",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 35,
    tags: ["ちくわ節約", "切るだけ", "子供大人気", "外部レシピ"],
    containsDislikes: [],
    description: "安価なちくわときゅうりをマヨネーズとすりごまで和えるだけ。忙しい日の救世主おかず。",
    kidsTip: "ちくわの弾力とマヨネーズのコクでお子様が真っ先に完食する人気副菜です。",
    tip: "醤油を数滴隠し味に入れると味が締まります。",
    url: "https://www.sirogohan.com/recipe/tikuwa/",
    ingredients: [
      { name: "ちくわ", amount: 1, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "きゅうり", amount: 0.4, unit: "本", aisle: "野菜" },
      { name: "マヨネーズ", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "すりごま", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ちくわは斜め切り、きゅうりは乱切りにする。",
      "きゅうりに塩少々を振って5分置き、ペーパーで水気をしっかり拭き取る。",
      "ボウルにちくわ、きゅうり、マヨネーズ、すりごま、醤油数滴を入れて和える。"
    ]
  },
  {
    id: "side_21",
    title: "【外部サイト】小松菜と油揚げの煮浸し（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["カルシウム満点", "和風定番", "ほっこり", "外部レシピ"],
    containsDislikes: ["豆苗"],
    description: "出汁を含んだ油揚げとシャキッとした小松菜の相性が抜群。お弁当にもぴったりの常備菜。",
    kidsTip: "油揚げの油分で青菜の苦味が消えて甘く食べやすくなります。",
    tip: "小松菜の茎から先に煮汁に入れ、葉は後から加えると食感が均一になります。",
    url: "https://www.sirogohan.com/recipe/komatunani/",
    ingredients: [
      { name: "小松菜", amount: 0.3, unit: "束", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "醤油", amount: 6, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 6, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "小松菜は4cm長さに切り、油揚げは短冊切りにする。",
      "鍋に出汁、醤油、みりんを入れて煮立て、小松菜の茎と油揚げを入れる。",
      "2分煮たら葉の部分を加え、さらに1分煮て火を止め、余熱で味を染み込ませる。"
    ]
  },
  {
    id: "side_22",
    title: "【外部サイト】至高のコールスロー（リュウジ式）",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["キャベツ大量消費", "洋風サラダ", "子供ウケ", "外部レシピ"],
    containsDislikes: [],
    description: "キャベツとコーンを塩もみし、特製マヨドレッシングで和えるだけ。某ファストフード店を超える味。",
    kidsTip: "コーンの甘みとマヨネーズのコクで、どんぶり一杯のキャベツをペロリと食べられます。",
    tip: "キャベツをしっかり塩もみして水分を絞ることで翌日も水っぽくなりません。",
    url: "https://www.youtube.com/watch?v=F0pS2wXUuoc",
    ingredients: [
      { name: "キャベツ", amount: 70, unit: "g", aisle: "野菜" },
      { name: "コーン缶", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "マヨネーズ", amount: 12, unit: "g", aisle: "調味料・その他" },
      { name: "酢", amount: 3, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツは千切りにし、塩を振って10分置き、水気をぎゅっと固く絞る。",
      "ボウルに水気を切ったコーン、マヨネーズ、酢、砂糖を入れてよく混ぜる。",
      "絞ったキャベツを加えて全体を和え、冷蔵庫で冷やす。"
    ]
  },
  {
    id: "side_23",
    title: "【外部サイト】もやしときゅうりのピリ辛中華和え",
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 30,
    tags: ["超低コスト", "もやし", "中華風", "外部レシピ"],
    containsDislikes: [],
    description: "もやしをサッと茹でてきゅうりと合わせ、ごま油と醤油で和えるだけ。シャキシャキの歯ごたえが抜群！",
    kidsTip: "ラー油は入れずにごま油と砂糖少々でマイルドに仕上げると子供たちが喜んで食べます。",
    tip: "もやしは茹でた後すぐに冷水に取りしっかり絞るのが水っぽくならないポイント。",
    url: "https://www.sirogohan.com/recipe/moyasikyuuri/",
    ingredients: [
      { name: "もやし", amount: 0.4, unit: "袋", aisle: "野菜" },
      { name: "きゅうり", amount: 0.4, unit: "本", aisle: "野菜" },
      { name: "ごま油", amount: 4, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 5, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "もやしは熱湯で1分茹でてザルに上げ、冷水に取って水気をしっかり絞る。",
      "きゅうりは千切りにする。",
      "ボウルにもやし、きゅうり、ごま油、醤油、砂糖を入れてよく和える。"
    ]
  },
  {
    id: "side_24",
    title: "【外部サイト】ほうれん草のごま和え（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "spring",
    time: "8分",
    approxCostPerPerson: 40,
    tags: ["和食定番", "緑黄色野菜", "ほっこり", "外部レシピ"],
    containsDislikes: [],
    description: "すりごまの豊かな香りと甘辛い醤油だれがほうれん草の旨味をグッと引き立てる和食の王道副菜。",
    kidsTip: "すりごまをたっぷり加えることでほうれん草のえぐみが気にならなくなり、甘くて食べやすい味に。",
    tip: "茹でたほうれん草の水気を両手でしっかりと絞ってから和え衣と合わせましょう。",
    url: "https://www.sirogohan.com/recipe/hourensougomatae/",
    ingredients: [
      { name: "ほうれん草", amount: 0.3, unit: "束", aisle: "野菜" },
      { name: "すりごま", amount: 5, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 6, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 4, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ほうれん草は熱湯でサッと1分茹で、冷水に取って根元を揃えて水気を絞る。",
      "3〜4cm長さに切り、再度水気をぎゅっと絞る。",
      "ボウルですりごま、醤油、砂糖をよく混ぜ合わせ、ほうれん草を加えてほぐしながら和える。"
    ]
  },
  {
    id: "side_25",
    title: "【外部サイト】とろとろナスの煮浸し（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "8分",
    approxCostPerPerson: 40,
    tags: ["夏の旬", "レンジ調理", "味が染みる", "外部レシピ"],
    containsDislikes: ["なす"],
    description: "油を絡めてレンジで加熱し、めんつゆに浸すだけ。口の中でじゅわっと冷たい出汁が溢れます。",
    kidsTip: "皮に格子状の切れ目を入れるとスプーンでも簡単に噛み切れる柔らかさになります。",
    tip: "ナスを切ったらすぐにサラダ油をまんべんなく絡めてから加熱すると色鮮やかに仕上がります。",
    url: "https://www.sirogohan.com/recipe/nasunibitasi/",
    ingredients: [
      { name: "なす", amount: 0.8, unit: "本", aisle: "野菜" },
      { name: "めんつゆ", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "生姜", amount: 0.5, unit: "かけ", aisle: "野菜" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ナスは縦半分に切って格子状の切れ目を入れ、水気を拭いてサラダ油を全体に絡める。",
      "耐熱皿に皮を上にして並べ、ラップをしてレンジで3分加熱する。",
      "熱いうちにめんつゆ、おろし生姜、ごま油を合わせた浸しだれに漬け込む。"
    ]
  },
  {
    id: "side_26",
    title: "【外部サイト】春キャベツの塩昆布ごま油和え",
    category: "side",
    cuisine: "japanese",
    season: "spring",
    time: "5分",
    approxCostPerPerson: 30,
    tags: ["春の旬", "ポリ袋で簡単", "無限キャベツ", "外部レシピ"],
    containsDislikes: [],
    description: "春のやわらかいキャベツを手でちぎり、塩昆布とごま油で揉むだけ。いくらでも食べられる人気副菜。",
    kidsTip: "春キャベツは葉が柔らかくて甘いので、火を通さなくても子供たちがモリモリ食べます。",
    tip: "ポリ袋の中でしっかり空気を抜いて口を縛ると短時間で味が馴染みます。",
    url: "https://www.sirogohan.com/recipe/harukyabetu/",
    ingredients: [
      { name: "キャベツ", amount: 60, unit: "g", aisle: "野菜" },
      { name: "塩昆布", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 4, unit: "ml", aisle: "調味料・その他" },
      { name: "いりごま", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "春キャベツは一口大に手でちぎる。",
      "ポリ袋にキャベツ、塩昆布、ごま油、いりごまを入れる。",
      "袋の上から手でしっかり揉み込み、空気を抜いて5分置く。"
    ]
  },
  {
    id: "side_27",
    title: "【外部サイト】白菜とツナのうま煮（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "10分",
    approxCostPerPerson: 45,
    tags: ["冬の旬", "白菜消費", "ツナ缶の旨味", "外部レシピ"],
    containsDislikes: [],
    description: "白菜の甘みとツナ缶の旨味が合わさり、出汁いらずで美味しく煮上がる冬の万能副菜。",
    kidsTip: "ツナの油とお出汁を吸ったクタクタの白菜はご飯にのせて食べても最高です。",
    tip: "ツナ缶のオイルも一緒に加えて煮るとコクと旨味が格段にアップします。",
    url: "https://www.sirogohan.com/recipe/hakusaituna/",
    ingredients: [
      { name: "白菜", amount: 70, unit: "g", aisle: "野菜" },
      { name: "ツナ缶", amount: 0.2, unit: "缶", aisle: "肉・魚" },
      { name: "醤油", amount: 6, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 6, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜は芯を削ぎ切り、葉をざく切りにする。",
      "鍋にツナ缶を油ごと入れ、白菜の芯と醤油・みりんを加えて火にかける。",
      "白菜がしんなりしたら葉を加え、蓋をして弱火で5分クタクタになるまで煮る。"
    ]
  },
  {
    id: "side_28",
    title: "【外部サイト】基本のきんぴらごぼう（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "12分",
    approxCostPerPerson: 40,
    tags: ["秋の旬", "食物繊維", "お弁当", "外部レシピ"],
    containsDislikes: [],
    description: "ごぼうと人参を香ばしく炒め、甘辛だれを絡めた定番和食。噛むほどに広がる土の香りと旨味。",
    kidsTip: "ごぼうを少し細めに切って長めに炒めると柔らかくなり子供も喜んで食べられます。",
    tip: "ごぼうは水にさらす時間を短く（1〜2分）することで風味がしっかり残ります。",
    url: "https://www.sirogohan.com/recipe/kinpira/",
    ingredients: [
      { name: "ごぼう", amount: 0.3, unit: "本", aisle: "野菜" },
      { name: "人参", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ごぼうは皮をこそげて千切りにし、水に2分さらして水気を切る。人参も千切りにする。",
      "フライパンにごま油を熱し、ごぼうと人参をしんなりするまで炒める。",
      "醤油、みりん、砂糖を加え、汁気がなくなるまで強火で炒め絡めて白ごまを振る。"
    ]
  },
  {
    id: "side_29",
    title: "【外部サイト】基本の切り干し大根の煮物（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "15分",
    approxCostPerPerson: 35,
    tags: ["乾物ストック", "食物繊維", "常備菜", "外部レシピ"],
    containsDislikes: [],
    description: "保存の利く切り干し大根を使ったおふくろの味。油揚げのコクと大根の甘みがじゅわっと広がります。",
    kidsTip: "油揚げを多めに入れて甘辛く煮含めると、子供たちも喜んでご飯と一緒に食べます。",
    tip: "切り干し大根の戻し汁には大根の旨味が溶け出ているので、煮汁として使うとより深い味に。",
    url: "https://www.sirogohan.com/recipe/kiribosi/",
    ingredients: [
      { name: "切り干し大根", amount: 10, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 0.15, unit: "本", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "切り干し大根は水で戻して水気を絞り、食べやすい長さに切る。人参と油揚げは細切りにする。",
      "鍋にごま油を熱し、具材全体をサッと炒める。",
      "戻し汁と出汁、醤油、みりん、砂糖を加え、落とし蓋をして弱火で12分煮汁が少なくなるまで煮る。"
    ]
  },
  {
    id: "side_30",
    title: "【外部サイト】たたききゅうりとちくわの塩昆布和え",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5分",
    approxCostPerPerson: 35,
    tags: ["ちくわ節約", "火を使わない", "子供大人気", "外部レシピ"],
    containsDislikes: [],
    description: "叩いたきゅうりとちくわをごま油と塩昆布で和えるだけ。3分でできて箸が止まらない最強副菜。",
    kidsTip: "ちくわの弾力と塩昆布の優しい甘みで野菜嫌いのお子様も夢中で完食します。",
    tip: "きゅうりは麺棒で叩いて割れ目を作ることで味が短時間で染み込みます。",
    url: "https://www.sirogohan.com/recipe/kyuuritikuwa/",
    ingredients: [
      { name: "きゅうり", amount: 0.5, unit: "本", aisle: "野菜" },
      { name: "ちくわ", amount: 0.8, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "塩昆布", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "きゅうりはヘタを切り、麺棒で叩いて一口大に割る。ちくわは斜め乱切りにする。",
      "ポリ袋にきゅうり、ちくわ、塩昆布、ごま油を入れる。",
      "袋の上から軽く揉み込み、冷蔵庫で冷やして味を馴染ませる。"
    ]
  },
  {
    id: "side_31",
    title: "【外部サイト】小松菜と人参のしっとり白和え（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "10分",
    approxCostPerPerson: 35,
    tags: ["和食定番", "カルシウム", "優しい甘み", "外部レシピ"],
    containsDislikes: ["豆苗"],
    description: "豆腐とすりごまのまろやかな和え衣が小松菜を包み込む。ほっとする優しい伝統副菜。",
    kidsTip: "お砂糖とすりごまの甘みで青菜の苦味が消え、子供たちもパクパク食べられます。",
    tip: "木綿豆腐はキッチンペーパーで包んでレンジで1分加熱すると簡単に水切りできます。",
    url: "https://www.sirogohan.com/recipe/siraae/",
    ingredients: [
      { name: "小松菜", amount: 0.3, unit: "束", aisle: "野菜" },
      { name: "人参", amount: 0.15, unit: "本", aisle: "野菜" },
      { name: "木綿豆腐", amount: 30, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "すりごま", amount: 4, unit: "g", aisle: "調味料・その他" },
      { name: "砂糖", amount: 4, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 4, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "小松菜と人参は細切りにしてサッと塩茹でし、水気をぎゅっと絞る。",
      "ボウルで水切りした豆腐を泡立て器等で滑らかに潰す。",
      "すりごま、砂糖、醤油、塩少々を豆腐に混ぜ合わせ、野菜を加えて和える。"
    ]
  },
  {
    id: "side_32",
    title: "【外部サイト】もやしと豆苗の塩昆布炒め",
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["超低コスト", "5分完成", "包丁不要", "外部レシピ"],
    containsDislikes: ["豆苗"],
    description: "もやしと豆苗をサッとごま油で炒めて塩昆布を和えるだけ。シャキシャキ食感がやみつき！",
    kidsTip: "塩昆布の旨味とお出汁で豆苗の青臭さが消え、スナック感覚で食べられます。",
    tip: "強火で1分半ほどサッと炒めるだけで水分を出さずシャキッと仕上がります。",
    url: "https://www.sirogohan.com/recipe/moyasitoumyou/",
    ingredients: [
      { name: "もやし", amount: 0.4, unit: "袋", aisle: "野菜" },
      { name: "豆苗", amount: 0.3, unit: "袋", aisle: "野菜" },
      { name: "塩昆布", amount: 4, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 4, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "豆苗は根元を落として長さを半分に切る。",
      "フライパンにごま油を強火で熱し、もやしと豆苗を1分半炒める。",
      "火を止めて塩昆布を加え、余熱でさっと和えて完成。"
    ]
  },
  {
    id: "side_33",
    title: "【外部サイト】基本のなめらかポテトサラダ（白ごはん.com）",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "15分",
    approxCostPerPerson: 40,
    tags: ["子供大人気", "洋風定番", "作り置き", "外部レシピ"],
    containsDislikes: [],
    description: "ホクホクのじゃがいもときゅうり、ハム、コーン！家族みんなが大好きな定番ポテサラ。",
    kidsTip: "じゃがいもが温かいうちに少量の酢と砂糖で下味をつけるとマヨネーズが馴染んで絶品に。",
    tip: "きゅうりは薄切りにして塩もみし、しっかり水気を絞ってから合わせましょう。",
    url: "https://www.sirogohan.com/recipe/potesara/",
    ingredients: [
      { name: "じゃがいも", amount: 0.8, unit: "個", aisle: "野菜" },
      { name: "きゅうり", amount: 0.3, unit: "本", aisle: "野菜" },
      { name: "ハム", amount: 0.5, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "マヨネーズ", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいもは皮をむいて一口大に切り、柔らかくなるまで茹でて（またはレンジで）熱いうちに粗く潰す。",
      "薄切りにして塩もみしたきゅうり、細切りにしたハムを加える。",
      "粗熱が取れたらマヨネーズ、塩コショウで和えて完成。"
    ]
  },
  {
    id: "side_34",
    title: "【外部サイト】トマトと大葉の和風さっぱり和え",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5分",
    approxCostPerPerson: 35,
    tags: ["夏の旬", "さっぱり", "火を使わない", "外部レシピ"],
    containsDislikes: ["トマト"],
    description: "冷やしたトマトと爽やかな大葉にポン酢とごま油。こってりした主菜の日に最高の箸休め。",
    kidsTip: "大葉が苦手な場合はちぎった海苔やツナを合わせると子供も喜んで食べます。",
    tip: "食べる直前まで冷蔵庫でキンキンに冷やしておくとより美味しくいただけます。",
    url: "https://www.sirogohan.com/recipe/tomatowafu/",
    ingredients: [
      { name: "トマト", amount: 0.4, unit: "個", aisle: "野菜" },
      { name: "ポン酢", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" },
      { name: "いりごま", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "トマトは一口大の乱切りにする。",
      "ボウルにトマト、ポン酢、ごま油、いりごまを入れて優しく和える。",
      "器に盛り、冷蔵庫で冷やしていただく。"
    ]
  },
  {
    id: "side_35",
    title: "【外部サイト】れんこんと人参のシャキシャキきんぴら（白ごはん.com）",
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "10分",
    approxCostPerPerson: 40,
    tags: ["秋の旬", "根菜", "お弁当", "外部レシピ"],
    containsDislikes: [],
    description: "れんこんのシャキシャキした心地よい歯ごたえと甘辛いたれ。常備菜やお弁当にもぴったり。",
    kidsTip: "薄めの半月切りにすることで固くならず、お子様もスナック感覚で楽しく噛んで食べられます。",
    tip: "れんこんは切ったあと酢水にサッとさらすとアクが抜けて白くシャキッと仕上がります。",
    url: "https://www.sirogohan.com/recipe/renkonkinpira/",
    ingredients: [
      { name: "れんこん", amount: 50, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "れんこんは皮をむいて2mm厚さの半月切り、人参は細切りにする。",
      "フライパンにごま油を熱し、れんこんと人参を透き通るまで炒める。",
      "醤油、みりん、砂糖小さじ1を加え、汁気が飛んで照りが出るまで炒り上げる。"
    ]
  },
  {
    id: "side_36",
    title: "ちくわ＆チーズのパリパリ節約一口餃子",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "10分",
    approxCostPerPerson: 40,
    tags: ["一口餃子", "ちくわチーズ", "おつまみ副菜", "超時短", "子供人気"],
    containsDislikes: [],
    description: "お肉不使用！刻んだちくわとピザ用チーズを餃子の皮で包んでカリッと焼くだけ。チーズの塩気とちくわの旨味で調味料いらず。",
    kidsTip: "パリパリの皮の中からとろ〜りチーズが出てきて子供受け100点満点！お弁当やおやつにも大活躍。",
    tip: "皮のフチに水をしっかりつけて密閉すると、焼いている時にチーズが飛び出さず綺麗に仕上がります。",
    ingredients: [
      { name: "ちくわ", amount: 1, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "ピザ用チーズ", amount: 15, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "餃子の皮", amount: 4, unit: "枚", aisle: "調味料・その他" },
      { name: "ごま油", amount: 2, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ちくわは細かく刻み、ピザ用チーズと軽く和える。",
      "餃子の皮の中央に乗せ、半分に折ってフチを水でしっかり留める。",
      "フライパンにごま油を熱し、両面がキツネ色にパリッとするまで中火でサッと焼く。"
    ]
  },
  {
    id: "side_37",
    title: "豆腐とキャベツのふわとろ節約たこ焼き風",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "15分",
    approxCostPerPerson: 45,
    tags: ["たこ焼き風", "豆腐ヘルシー", "ふわとろ", "ソースマヨ", "野菜たっぷり"],
    containsDislikes: [],
    description: "豆腐とキャベツでふわふわ！たこ焼きソースとマヨネーズ、削り節をかければ見た目も味もたこ焼きそのもの。大満足のヘルシー副菜。",
    kidsTip: "野菜嫌いなお子様も、甘口ソースとマヨネーズ効果でキャベツをモリモリ食べてくれます。",
    tip: "生地に片栗粉を少し加えることで、もっちりふわとろな絶妙食感になります。",
    ingredients: [
      { name: "絹豆腐", amount: 50, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "キャベツ", amount: 40, unit: "g", aisle: "野菜" },
      { name: "片栗粉", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "天かす", amount: 5, unit: "g", aisle: "調味料・その他" },
      { name: "お好みソース", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ボウルで豆腐を滑らかに崩し、千切りキャベツ、天かす、片栗粉、白だし小さじ1/2を混ぜる。",
      "フライパンに一口大ずつ落とし入れ、中火で両面をこんがりと焼く。",
      "器に盛り、ソース、マヨネーズ、青のり、かつお節をトッピングする。"
    ]
  },
  {
    id: "side_38",
    title: "豆腐とコーンの甘口クリーミー節約コロッケ",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "15分",
    approxCostPerPerson: 50,
    tags: ["コーンコロッケ", "豆腐クリーム", "甘口", "子供大好き", "洋風副菜"],
    containsDislikes: [],
    description: "水切り豆腐とコーン缶でカニクリームコロッケ風！ホワイトソースを作らなくても豆腐のコクでクリーミーに仕上がる絶品副菜。",
    kidsTip: "コーンのプチプチ甘みとクリーミーな優しい味わいで、子供たちのお気に入り副菜間違いなし！",
    tip: "豆腐の水気をしっかり絞ってからコンソメとマヨネーズを混ぜると濃厚なクリーム状になります。",
    ingredients: [
      { name: "木綿豆腐", amount: 60, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "コーン缶", amount: 25, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "マヨネーズ", amount: 5, unit: "g", aisle: "調味料・その他" },
      { name: "パン粉", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "コンソメ", amount: 1, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "水切りした木綿豆腐をすり潰し、コーン、マヨネーズ、コンソメ、塩コショウをよく混ぜる。",
      "一口サイズに丸めて薄力粉・水・パン粉を軽くまぶす。",
      "フライパンに深さ5mmの油を熱し、揚げ焼きにしてカリッとキツネ色に仕上げる。"
    ]
  },

  // =================================================================
  // 【汁物 (Soup)】- 全10品（具だくさん豚汁・定番味噌汁・中華・洋風スープ）
  // =================================================================
  {
    id: "soup_01",
    title: "お肉少しで大満足！具だくさん節約豚汁",
    category: "soup",
    cuisine: "japanese",
    time: "15分",
    approxCostPerPerson: 55,
    tags: ["具だくさん", "豚こま", "体ポカポカ", "和風"],
    containsDislikes: ["長ネギ"],
    description: "豚肉から出る旨味と根菜の甘みで栄養満点。これ一杯でおかずになる万能汁物です。",
    kidsTip: "根菜がホロホロに柔らかくなるので、普段野菜を食べない子も汁ごとごくごく飲んでくれます。",
    tip: "豚肉をごま油で最初に炒めてから煮るとコクが格段にアップ！",
    ingredients: [
      { name: "豚こま肉", amount: 25, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 40, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 0.15, unit: "本", aisle: "野菜" },
      { name: "木綿豆腐", amount: 30, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "長ネギ", amount: 0.15, unit: "本", aisle: "野菜" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根と人参はいちょう切り、長ネギは小口切り、豆腐はさいの目切りにする。",
      "鍋にごま油を熱し、豚こま肉を炒める。",
      "肉の色が変わったら大根と人参を加え、水（1人あたり180ml）とだしの素を加えて大根が柔らかくなるまで煮る。",
      "豆腐を加え、火を弱めて味噌を溶き入れ、長ネギを散らして火を止める。"
    ]
  },
  {
    id: "soup_02",
    title: "キャベツとふんわり卵のコンソメスープ",
    category: "soup",
    cuisine: "western",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["時短", "洋風", "子供ウケ"],
    containsDislikes: [],
    description: "キャベツの甘みとふわふわ卵が優しいスープ。洋食の献立にぴったりです。",
    kidsTip: "卵がふわふわで黄色い見た目も可愛く、子供たちから一番人気の定番スープです。",
    tip: "沸騰しているところに円を描くように溶き卵を流し入れ、一呼吸置いてから混ぜるとふわふわに！",
    ingredients: [
      { name: "キャベツ", amount: 35, unit: "g", aisle: "野菜" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "コンソメ顆粒", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツは一口大の短冊切りにする。",
      "鍋に水（1人あたり180ml）、コンソメ、キャベツを入れて火にかける。",
      "キャベツがしんなりしたら、沸騰した状態で溶き卵を回し入れ、ふんわり固まったら火を止める。"
    ]
  },
  {
    id: "soup_03",
    title: "豆腐とわかめの定番お味噌汁",
    category: "soup",
    cuisine: "japanese",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["王道", "スピード", "安心の味", "和風"],
    containsDislikes: [],
    description: "どんな和食にも合う日本の基本。豆腐がたっぷり入って良質なたんぱく質も摂れます。",
    kidsTip: "豆腐とわかめは子供たちも抵抗なく大好きな王道コンビ！",
    tip: "わかめは火を止める直前に入れると香りと食感が保たれます。",
    ingredients: [
      { name: "木綿豆腐", amount: 40, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "乾燥わかめ", amount: 1, unit: "g", aisle: "調味料・その他" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "豆腐はさいの目切りにする。",
      "鍋に水とだしの素を入れて火にかけ、沸騰したら豆腐を入れる。",
      "弱火にして味噌を溶き入れ、乾燥わかめを加えて火を止める。"
    ]
  },
  {
    id: "soup_04",
    title: "もやしとわかめの中華ごまスープ",
    category: "soup",
    cuisine: "chinese",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["超低コスト", "中華風", "超時短"],
    containsDislikes: [],
    description: "シャキシャキもやしとごま油の風味が食欲をそそる！5分で作れるコスパ最強スープ。",
    kidsTip: "ラーメンのスープのような親しみやすい中華味で、子供たちがゴクゴク飲み干します。",
    tip: "白ごまを指でひねりながら入れると香りが立ちます。",
    ingredients: [
      { name: "もやし", amount: 0.3, unit: "袋", aisle: "野菜" },
      { name: "乾燥わかめ", amount: 1, unit: "g", aisle: "調味料・その他" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 2, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "鍋に水（180ml）、鶏ガラスープの素、醤油少量を入れて火にかける。",
      "沸騰したらもやしと乾燥わかめを加えて1分加熱する。",
      "ごま油を回し入れて火を止める。"
    ]
  },
  {
    id: "soup_05",
    title: "ほっこりじゃがいもと玉ねぎのお味噌汁",
    category: "soup",
    cuisine: "japanese",
    time: "10分",
    approxCostPerPerson: 35,
    tags: ["優しい甘み", "子供ウケ", "定番", "和風"],
    containsDislikes: [],
    description: "じっくり煮た玉ねぎとじゃがいもの甘みが味噌に溶け込んで、ホッとする優しい味覚。",
    kidsTip: "玉ねぎの甘みが味噌汁全体に溶け出しているので、角がなく甘口で子供に大ウケです。",
    tip: "じゃがいもは少し薄めに切ると煮え時間が早くなります。",
    ingredients: [
      { name: "じゃがいも", amount: 0.4, unit: "個", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいもは5mm厚さの半月切り、玉ねぎは薄切りにする。",
      "鍋に水、だしの素、じゃがいも、玉ねぎを入れて火にかける。",
      "じゃがいもが柔らかくなったら弱火にし、味噌を溶き入れて火を止める。"
    ]
  },
  {
    id: "soup_06",
    title: "えのきと油揚げのじゅわ旨お味噌汁",
    category: "soup",
    cuisine: "japanese",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["出汁いらず", "きのこ", "節約の定番", "和風"],
    containsDislikes: ["きのこ"],
    description: "油揚げのコクとえのきの出汁が染み渡る！お出汁がなくても驚くほど美味しくなります。",
    kidsTip: "油揚げからじゅわっとお汁が出るのが美味しい！えのきが苦手な場合は豆腐に変更してもOK。",
    tip: "油揚げを一度熱湯に通す（油抜き）とすっきりした味になります。",
    ingredients: [
      { name: "えのき", amount: 0.25, unit: "株", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "えのきは石づきを落として長さを半分に、油揚げは短冊切りにする。",
      "鍋に水とだしの素を沸かし、えのきと油揚げを入れて2分煮る。",
      "弱火にして味噌を溶き入れ、火を止める。"
    ]
  },
  {
    id: "soup_07",
    title: "つぶつぶコーンと卵のとろみ中華スープ",
    category: "soup",
    cuisine: "chinese",
    time: "7分",
    approxCostPerPerson: 38,
    tags: ["コーン", "子供大人気", "中華風", "とろみ"],
    containsDislikes: [],
    description: "中華料理屋さんの定番！コーンの甘みとふわふわ卵、とろみのあるスープで体が芯から温まります。",
    kidsTip: "甘いコーンとふわふわ卵の組み合わせは子供たちのスープ人気ダントツ1位！",
    tip: "水溶き片栗粉で先にとろみをつけてから溶き卵を入れると、卵が沈まずふわっと広がります。",
    ingredients: [
      { name: "コーン缶", amount: 25, unit: "g", aisle: "野菜" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 4, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鍋に水（180ml）、コーン、鶏ガラスープの素を入れて火にかける。",
      "水溶き片栗粉を回し入れてとろみをつける。",
      "沸騰したところへ溶き卵を流し入れ、ふんわり固まったら火を止める。"
    ]
  },
  {
    id: "soup_08",
    title: "白菜とベーコンの優しいミルクスープ",
    category: "soup",
    cuisine: "western",
    time: "10分",
    approxCostPerPerson: 45,
    tags: ["洋風", "カルシウム", "白菜消費", "子供ウケ"],
    containsDislikes: [],
    description: "白菜の甘みとベーコンの塩気が牛乳と相性抜群！クラムチャウダーのようにクリーミーで優しいスープ。",
    kidsTip: "シチューのようなミルキーな味付けで、白菜が驚くほどたくさん食べられます。",
    tip: "牛乳を入れた後は沸騰させないように弱火で温めると分離しません。",
    ingredients: [
      { name: "白菜", amount: 40, unit: "g", aisle: "野菜" },
      { name: "ベーコン", amount: 15, unit: "g", aisle: "肉・魚" },
      { name: "牛乳", amount: 60, unit: "ml", aisle: "大豆・乳・加工品" },
      { name: "コンソメ顆粒", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜は短冊切り、ベーコンは1cm幅に切る。",
      "鍋に水（100ml）、コンソメ、ベーコン、白菜を入れて火にかけ、白菜が柔らかくなるまで煮る。",
      "牛乳を加え、弱火で沸騰直前まで温めて塩こしょうで味を調える。"
    ]
  },
  {
    id: "soup_09",
    title: "根菜たっぷり！節約けんちん汁",
    category: "soup",
    cuisine: "japanese",
    time: "15分",
    approxCostPerPerson: 45,
    tags: ["根菜", "食物繊維", "和風", "ほっこり"],
    containsDislikes: ["きのこ"],
    description: "大根、人参、ごぼう、豆腐をごま油で炒めて煮出す精進料理の知恵。野菜の出汁だけで深いコク！",
    kidsTip: "根菜をごま油でしっかり炒めてから煮ることで、土臭さが消えて香ばしくなります。",
    tip: "豆腐を手でちぎって入れると断面から味がグングン染み込みます。",
    ingredients: [
      { name: "大根", amount: 35, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 0.15, unit: "本", aisle: "野菜" },
      { name: "木綿豆腐", amount: 30, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根と人参はいちょう切りにする。",
      "鍋にごま油を熱し、大根と人参を透き通るまで炒める。",
      "水（180ml）、だしの素、手で崩した豆腐を加え、野菜が柔らかくなるまで煮る。",
      "醤油、みりん、塩少々で味を調える。"
    ]
  },
  {
    id: "soup_10",
    title: "トマトとふんわり卵の中華かき玉スープ",
    category: "soup",
    cuisine: "chinese",
    time: "6分",
    approxCostPerPerson: 35,
    tags: ["中華風", "彩り満点", "スピード"],
    containsDislikes: ["トマト"],
    description: "赤と黄色の鮮やかなコントラスト！火を通したトマトの優しい酸味とふわふわ卵の相性が抜群。",
    kidsTip: "加熱することでトマトの角が取れてまろやかに！卵と一緒につるりと飲めます。",
    tip: "ごま油を仕上げに少し垂らすと中華風の香りがぐんと引き立ちます。",
    ingredients: [
      { name: "トマト", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 2, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "トマトは一口大の角切りにする。",
      "鍋に水（180ml）、鶏ガラスープの素、トマトを入れて火にかける。",
      "沸騰したら溶き卵を回し入れ、ごま油を垂らして火を止める。"
    ]
  },
  {
    id: "soup_11",
    title: "【外部サイト】至高の豚汁（リュウジ式）",
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "20分",
    approxCostPerPerson: 65,
    tags: ["具沢山", "冬の定番", "ごちそう汁物", "外部レシピ"],
    containsDislikes: ["きのこ", "長ネギ"],
    description: "豚バラ肉、大根、ごぼう、こんにゃくを炒めて煮込む至高の豚汁。これ一杯でおかずになる濃厚さ。",
    kidsTip: "お肉の油とお野菜の出汁で味噌が甘くなり子供たちも大喜びでおかわりします。",
    tip: "豚肉をごま油でカリッと炒めてから煮出すのが旨味を最大限引き出すコツです。",
    url: "https://www.youtube.com/watch?v=Jb7sY0nC7l4",
    ingredients: [
      { name: "豚こま肉", amount: 25, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 30, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 0.15, unit: "本", aisle: "野菜" },
      { name: "こんにゃく", amount: 20, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根と人参はいちょう切り、豚肉とこんにゃくは一口大に切る。",
      "鍋にごま油を熱し、豚肉を炒めて色が変わったら根菜とこんにゃくを炒める。",
      "出汁を注いで野菜が柔らかくなるまで煮込み、火を弱めて味噌を溶き入れる。"
    ]
  },
  {
    id: "soup_12",
    title: "【外部サイト】新玉ねぎとベーコンのコンソメスープ",
    category: "soup",
    cuisine: "western",
    season: "spring",
    time: "10分",
    approxCostPerPerson: 40,
    tags: ["春の旬", "甘みたっぷり", "洋風", "外部レシピ"],
    containsDislikes: [],
    description: "春の新玉ねぎをとろとろになるまで煮込み、ベーコンの塩気を移した優しい甘みのスープ。",
    kidsTip: "玉ねぎのツンとした辛味が完全に消えて甘口コーンスープのように飲めます。",
    tip: "ベーコンを最初に油なしで軽く炒めて香ばしさを出すと本格的になります。",
    url: "https://www.sirogohan.com/recipe/tamasoup/",
    ingredients: [
      { name: "玉ねぎ", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "ベーコン", amount: 15, unit: "g", aisle: "肉・魚" },
      { name: "コンソメ顆粒", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "新玉ねぎは薄切り、ベーコンは1cm幅に切る。",
      "鍋に水、コンソメ顆粒、玉ねぎ、ベーコンを入れて火にかける。",
      "沸騰したら弱火で5分玉ねぎが透き通るまで煮て、塩コショウで味を調える。"
    ]
  },
  {
    id: "soup_13",
    title: "【外部サイト】トマトと卵の酸辣湯（サンラータン）風",
    category: "soup",
    cuisine: "chinese",
    season: "summer",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["夏の旬", "さっぱり", "中華風", "外部レシピ"],
    containsDislikes: ["トマト"],
    description: "トマトの酸味とお酢をきかせたさっぱりスープ。ふわふわ卵が辛味を包み込みます。",
    kidsTip: "黒こしょうやラー油を控えめにすれば、さわやかなトマトかき玉スープとして子供も大喜び。",
    tip: "水溶き片栗粉で軽くとろみをつけてから溶き卵を入れるとふわっと浮き上がります。",
    url: "https://www.sirogohan.com/recipe/sanra-tan/",
    ingredients: [
      { name: "トマト", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "酢", amount: 4, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "トマトは角切りにする。",
      "鍋に水、鶏ガラスープの素、トマトを入れて煮立てる。",
      "水溶き片栗粉でとろみをつけ、溶き卵を回し入れ、お酢とごま油を加えて火を止める。"
    ]
  },
  {
    id: "soup_14",
    title: "【外部サイト】きのこたっぷりかき玉お味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["秋の旬", "食物繊維", "きのこ出汁", "外部レシピ"],
    containsDislikes: ["きのこ"],
    description: "しめじとえのき茸から出る天然の旨味出汁に卵をとじた、秋の味覚満載のお味噌汁。",
    kidsTip: "卵でとじることできのこの独特の香りがマイルドになって飲みやすくなります。",
    tip: "きのこは水から煮出すことで旨味成分（グアニル酸）がしっかり抽出されます。",
    url: "https://www.sirogohan.com/recipe/kinokojiru/",
    ingredients: [
      { name: "えのき", amount: 0.2, unit: "袋", aisle: "野菜" },
      { name: "しめじ", amount: 0.2, unit: "パック", aisle: "野菜" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "えのきとしめじは石づきを落として小房に分ける。",
      "鍋に出汁を沸かし、きのこを入れて2分煮る。",
      "味噌を溶き入れ、沸騰直前に溶き卵を回し入れてふんわり固まったら火を止める。"
    ]
  },
  {
    id: "soup_15",
    title: "【外部サイト】レタスと韓国のりの塩ごまスープ",
    category: "soup",
    cuisine: "chinese",
    season: "summer",
    time: "5分",
    approxCostPerPerson: 30,
    tags: ["包丁不要", "超時短", "ちぎるだけ", "外部レシピ"],
    containsDislikes: [],
    description: "レタスを手でちぎって煮立たせ、韓国のりとごま油を加えるだけの超スピード絶品スープ。",
    kidsTip: "シャキシャキのレタスと韓国のりの旨味で子供たちも大喜びで野菜を食べてくれます。",
    tip: "レタスは火を止める直前に入れて余熱で火を通すと鮮やかな緑とシャキシャキ感が残ります。",
    url: "https://www.sirogohan.com/recipe/retasu/",
    ingredients: [
      { name: "レタス", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "乾燥わかめ", amount: 1, unit: "g", aisle: "調味料・その他" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "レタスは手で大きめの一口大にちぎる。",
      "鍋に水、鶏ガラスープの素、わかめを入れて煮立てる。",
      "レタスを加え、サッと10秒火を通したらごま油と韓国のりをちぎって入れて火を止める。"
    ]
  },
  {
    id: "soup_16",
    title: "【外部サイト】なめこと豆腐のとろみ赤だし味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "6分",
    approxCostPerPerson: 35,
    tags: ["秋の旬", "とろみ", "和風", "外部レシピ"],
    containsDislikes: ["きのこ"],
    description: "なめこの自然なとろみがついた熱々のお味噌汁。冷めにくいので肌寒い日にぴったり。",
    kidsTip: "つるりとしたなめこと柔らかい豆腐の食感が喉越し良く飲みやすいです。",
    tip: "なめこはザルでサッと水洗いしてから加えると酸味が抜けてまろやかになります。",
    url: "https://www.sirogohan.com/recipe/namekojiru/",
    ingredients: [
      { name: "なめこ", amount: 0.3, unit: "袋", aisle: "野菜" },
      { name: "木綿豆腐", amount: 30, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "なめこはザルでサッと水洗いし、豆腐はさいの目切りにする。",
      "鍋に出汁を沸かし、なめこと豆腐を入れて1分加熱する。",
      "弱火にして味噌を溶き入れ、沸騰直前で火を止める。"
    ]
  },
  {
    id: "soup_17",
    title: "【外部サイト】春キャベツと落とし卵のお味噌汁（白ごはん.com）",
    category: "soup",
    cuisine: "japanese",
    season: "spring",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["春の旬", "キャベツの甘み", "卵入り", "外部レシピ"],
    containsDislikes: [],
    description: "春キャベツの優しい甘みと半熟の落とし卵が絶妙！一杯で大満足の朝・晩定番お味噌汁。",
    kidsTip: "半熟の卵黄を崩してキャベツに絡めると甘口になって子供たちも夢中で飲みます。",
    tip: "卵を落としたら火を弱めて蓋をし、好みの半熟加減になるまで2〜3分静かに火を通します。",
    url: "https://www.sirogohan.com/recipe/kyabetujiru/",
    ingredients: [
      { name: "キャベツ", amount: 40, unit: "g", aisle: "野菜" },
      { name: "卵", amount: 0.4, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "春キャベツは一口大のざく切りにする。",
      "鍋に出汁を沸かし、キャベツを入れてしんなりするまで2分煮る。",
      "弱火にして味噌を溶き入れ、卵を割り落として蓋をし、好みの半熟加減になるまで2分弱火で加熱する。"
    ]
  },
  {
    id: "soup_18",
    title: "【外部サイト】わかめと豆腐の韓国風ごま油スープ",
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "6分",
    approxCostPerPerson: 30,
    tags: ["韓国風", "ごま油香る", "簡単スピード", "外部レシピ"],
    containsDislikes: [],
    description: "乾燥わかめと豆腐をごま油でサッと炒めてから煮出す韓国の定番スープ。コク深く香ばしい！",
    kidsTip: "焼肉屋さんのわかめスープのような親しみやすい味付けで、子供たちに大人気です。",
    tip: "わかめをごま油で最初に軽く炒めることで磯臭さが消えて香ばしさが倍増します。",
    url: "https://www.sirogohan.com/recipe/wakamesoup/",
    ingredients: [
      { name: "木綿豆腐", amount: 30, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "乾燥わかめ", amount: 1, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鍋にごま油を熱し、水戻ししたわかめを中火で30秒炒める。",
      "水、鶏ガラスープの素、さいの目切りの豆腐を加えて煮立てる。",
      "醤油小さじ1/2と塩コショウで味を調え、仕上げに白ごまを振る。"
    ]
  },
  {
    id: "soup_19",
    title: "【外部サイト】大根と油揚げのほっこりお味噌汁（白ごはん.com）",
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "10分",
    approxCostPerPerson: 30,
    tags: ["冬の旬", "大根たっぷり", "和食基本", "外部レシピ"],
    containsDislikes: [],
    description: "じっくり煮て柔らかくなった冬大根と、お出汁をたっぷり吸い込んだ油揚げの王道コンビ。",
    kidsTip: "大根が透き通るまで柔らかく煮えているので、野菜嫌いなお子様もスプーンでペロリ。",
    tip: "大根は少し細めの短冊切りにすると短時間で味が染み込んで柔らかくなります。",
    url: "https://www.sirogohan.com/recipe/daikonjiru/",
    ingredients: [
      { name: "大根", amount: 40, unit: "g", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は短冊切り、油揚げは細切りにする。",
      "鍋に出汁と大根を入れて火にかけ、大根が柔らかくなるまで煮る。",
      "油揚げを加え、弱火にして味噌を溶き入れ、火を止める。"
    ]
  },
  {
    id: "soup_20",
    title: "【外部サイト】もやしとふわふわ卵の中華スープ",
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["超低コスト", "もやし", "卵ふわふわ", "外部レシピ"],
    containsDislikes: [],
    description: "シャキシャキのもやしとふわふわに広がったかき玉。手軽でコスパ抜群の中華スープ。",
    kidsTip: "とろみのあるスープにふんわり卵が絡んで、ラーメンのスープ感覚でごくごく飲めます。",
    tip: "スープをしっかり沸騰させてから溶き卵を細く回し入れると綺麗にふんわり仕上がります。",
    url: "https://www.sirogohan.com/recipe/moyashisoup/",
    ingredients: [
      { name: "もやし", amount: 0.3, unit: "袋", aisle: "野菜" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 2, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "鍋に水、鶏ガラスープの素を入れて火にかける。",
      "沸騰したらもやしを加えて1分サッと煮る。",
      "沸騰を保ちながら溶き卵を細く回し入れ、ふんわり浮き上がったらごま油を垂らして火を止める。"
    ]
  },
  {
    id: "soup_21",
    title: "【外部サイト】かぼちゃと玉ねぎの甘口味噌汁（白ごはん.com）",
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "10分",
    approxCostPerPerson: 35,
    tags: ["秋の旬", "自然な甘み", "子供ウケ", "外部レシピ"],
    containsDislikes: [],
    description: "秋のホクホクかぼちゃと玉ねぎの甘みが味噌に溶け出し、ポタージュのように優しい味わい。",
    kidsTip: "お砂糖が入っているかのような自然な甘みで、小さな子供たちに一番喜ばれるお味噌汁です。",
    tip: "かぼちゃの角が少し崩れるくらいまで煮るとスープ全体が甘くまろやかになります。",
    url: "https://www.sirogohan.com/recipe/kabotyajiru/",
    ingredients: [
      { name: "かぼちゃ", amount: 35, unit: "g", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは5mm厚さのくし形切り、玉ねぎは薄切りにする。",
      "鍋に出汁、かぼちゃ、玉ねぎを入れて火にかける。",
      "かぼちゃがホクホク柔らかくなったら弱火にし、味噌を溶き入れて火を止める。"
    ]
  },
  {
    id: "soup_22",
    title: "【外部サイト】きのこたっぷりコンソメスープ",
    category: "soup",
    cuisine: "western",
    season: "autumn",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["秋の旬", "きのこ出汁", "洋風", "外部レシピ"],
    containsDislikes: ["きのこ"],
    description: "しめじとえのきの豊かな出汁にベーコンのコクが加わった、香り豊かな洋風クリアスープ。",
    kidsTip: "ベーコンの香ばしい塩気ときのこの旨味で洋食のごちそうスープになります。",
    tip: "きのこは包丁で細かめに切ると小さなお子様でも喉に詰まらず食べやすくなります。",
    url: "https://www.sirogohan.com/recipe/kinokosoup/",
    ingredients: [
      { name: "えのき", amount: 0.2, unit: "袋", aisle: "野菜" },
      { name: "しめじ", amount: 0.2, unit: "パック", aisle: "野菜" },
      { name: "ベーコン", amount: 10, unit: "g", aisle: "肉・魚" },
      { name: "コンソメ顆粒", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "えのき、しめじ、ベーコンを食べやすい大きさに切る。",
      "鍋に水、コンソメ顆粒、具材を入れて火にかける。",
      "中火で3分煮てきのこの出汁を出し、塩コショウで味を調える。"
    ]
  },
  {
    id: "soup_23",
    title: "【外部サイト】白菜と油揚げの優しいお味噌汁（白ごはん.com）",
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["冬の旬", "白菜の甘み", "定番和食", "外部レシピ"],
    containsDislikes: [],
    description: "冬に甘みが増す白菜と油揚げのシンプルながら飽きのこないお味噌汁。体の芯から温まります。",
    kidsTip: "クタクタに柔らかくなった白菜は噛み切りやすく、油揚げの旨味を吸ってとても美味。",
    tip: "白菜の芯の部分を先に鍋に入れて少し煮てから葉を入れると均一に火が通ります。",
    url: "https://www.sirogohan.com/recipe/hakusaijiru/",
    ingredients: [
      { name: "白菜", amount: 40, unit: "g", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜は短冊切り、油揚げは細切りにする。",
      "鍋に出汁と白菜の芯を入れて火にかけ、柔らかくなったら葉と油揚げを加える。",
      "弱火にして味噌を溶き入れ、沸騰直前で火を止める。"
    ]
  },
  {
    id: "soup_24",
    title: "【外部サイト】豆苗と卵の中華かき玉スープ",
    category: "soup",
    cuisine: "chinese",
    season: "spring",
    time: "5分",
    approxCostPerPerson: 30,
    tags: ["豆苗節約", "彩り鮮やか", "中華風", "外部レシピ"],
    containsDislikes: ["豆苗"],
    description: "年中安定価格の豆苗とふんわり卵の中華スープ。シャキッとした食感と鮮やかな緑が食卓を彩ります。",
    kidsTip: "卵と一緒につるりと入るので豆苗の独特な青臭さも気にならず完食できます。",
    tip: "豆苗は火を止める直前に加えてサッと余熱を通すだけで色鮮やかでシャキシャキに仕上がります。",
    url: "https://www.sirogohan.com/recipe/toumyousoup/",
    ingredients: [
      { name: "豆苗", amount: 0.25, unit: "袋", aisle: "野菜" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "豆苗は根元を切り落とし、半分の長さに切る。",
      "鍋に水、鶏ガラスープの素を入れて煮立てる。",
      "沸騰したところに溶き卵を流し入れ、ふんわりしたら豆苗を加えて火を止める（余熱でOK）。"
    ]
  },
  {
    id: "soup_25",
    title: "【外部サイト】じゃがいもと玉ねぎのミルクスープ",
    category: "soup",
    cuisine: "western",
    season: "all",
    time: "12分",
    approxCostPerPerson: 45,
    tags: ["洋風", "カルシウム", "ホクホク", "外部レシピ"],
    containsDislikes: [],
    description: "ホクホクのじゃがいもと甘い玉ねぎを牛乳とコンソメで優しく煮込んだクリーミースープ。",
    kidsTip: "シチューのようなミルキーな味付けで、お子様が喜んで飲んでくれます。",
    tip: "牛乳を加えたら沸騰させないよう弱火で温めるのが分離させない秘訣です。",
    url: "https://www.sirogohan.com/recipe/potatosoup/",
    ingredients: [
      { name: "じゃがいも", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "牛乳", amount: 50, unit: "ml", aisle: "大豆・乳・加工品" },
      { name: "コンソメ顆粒", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいもは薄切り、玉ねぎも薄切りにする。",
      "鍋に水100ml、コンソメ、じゃがいも、玉ねぎを入れて柔らかくなるまで煮る。",
      "牛乳を加え、沸騰させないよう弱火で温め、塩コショウで味を調える。"
    ]
  },
  {
    id: "soup_26",
    title: "【外部サイト】ナスと油揚げの香ばし夏の味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "summer",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["夏の旬", "ナスとろとろ", "和風", "外部レシピ"],
    containsDislikes: ["なす"],
    description: "とろけるような食感のナスと油揚げのコクが染み渡る、夏にぴったりの香ばしいお味噌汁。",
    kidsTip: "ナスを小さめの半月切りにしてクタクタに煮ると皮も柔らかく食べやすくなります。",
    tip: "ナスをごま油少々でサッと炒めてからお出汁を加えると油のコクで一層美味しくなります。",
    url: "https://www.sirogohan.com/recipe/nasujiru/",
    ingredients: [
      { name: "なす", amount: 0.4, unit: "本", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ナスは薄い半月切り、油揚げは短冊切りにする。",
      "鍋にごま油少量を入れてナスをサッと炒め、出汁を加える。",
      "ナスが柔らかくなったら油揚げを加え、弱火にして味噌を溶き入れる。"
    ]
  },
  {
    id: "soup_27",
    title: "【外部サイト】ちくわとキャベツの和風お吸い物",
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "6分",
    approxCostPerPerson: 30,
    tags: ["ちくわ出汁", "あっさり", "時短", "外部レシピ"],
    containsDislikes: [],
    description: "ちくわから出る魚の旨味出汁とキャベツの自然な甘みで、出汁パックいらずの簡単お吸い物。",
    kidsTip: "ちくわがプリプリして子供たちも具材として楽しく食べられます。",
    tip: "キャベツは手でちぎって入れると味が素早く染み込んで時短になります。",
    url: "https://www.sirogohan.com/recipe/suimono/",
    ingredients: [
      { name: "ちくわ", amount: 0.6, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "キャベツ", amount: 30, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 5, unit: "ml", aisle: "調味料・その他" },
      { name: "だしの素", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ちくわは薄い輪切り、キャベツはざく切りにする。",
      "鍋に水、だしの素、醤油、みりん、ちくわ、キャベツを入れて火にかける。",
      "キャベツがしんなりしたら火を止めて器に注ぐ。"
    ]
  },
  {
    id: "soup_28",
    title: "【外部サイト】豚こまとキャベツの旨塩生姜スープ（リュウジ式）",
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "10分",
    approxCostPerPerson: 50,
    tags: ["豚肉の旨味", "生姜でポカポカ", "満足度大", "外部レシピ"],
    containsDislikes: [],
    description: "少量の豚こま肉とキャベツを塩と鶏ガラ、生姜で煮込んだおかず級の絶品スタミナスープ。",
    kidsTip: "豚肉の脂の甘みとキャベツが絡んで、野菜もたくさん摂れるごちそうスープです。",
    tip: "生姜をチューブで少量加えることで豚肉の旨味が際立ち、体もポカポカ温まります。",
    url: "https://www.youtube.com/watch?v=5wS8nSg1aO0",
    ingredients: [
      { name: "豚こま肉", amount: 25, unit: "g", aisle: "肉・魚" },
      { name: "キャベツ", amount: 35, unit: "g", aisle: "野菜" },
      { name: "生姜", amount: 1, unit: "かけ", aisle: "野菜" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "豚肉は一口大、キャベツはざく切りにする。",
      "鍋にごま油を熱し、豚肉を炒めて色が変わったら水と鶏ガラスープの素、生姜を加える。",
      "キャベツを加え、2分煮てキャベツが柔らかくなったら塩コショウで味を調える。"
    ]
  },
  {
    id: "soup_29",
    title: "【外部サイト】オクラと豆腐のネバとろ夏味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "summer",
    time: "6分",
    approxCostPerPerson: 35,
    tags: ["夏の旬", "ネバネバ健康", "夏バテ予防", "外部レシピ"],
    containsDislikes: [],
    description: "オクラのネバネバ成分とつるんとした豆腐で喉越し抜群！夏バテ予防にぴったりの健康味噌汁。",
    kidsTip: "とろみのある汁と柔らかい豆腐でスルスルと美味しく飲めます。",
    tip: "オクラは小口切りにして火を止める直前に入れると綺麗な緑色と適度な食感が残ります。",
    url: "https://www.sirogohan.com/recipe/okurajiru/",
    ingredients: [
      { name: "オクラ", amount: 1, unit: "本", aisle: "野菜" },
      { name: "木綿豆腐", amount: 30, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "オクラは塩もみして薄い小口切り、豆腐はさいの目切りにする。",
      "鍋に出汁を沸かし、豆腐を入れて温める。",
      "弱火にして味噌を溶き入れ、オクラを加えて30秒サッと火を通したら止める。"
    ]
  },
  {
    id: "soup_30",
    title: "【外部サイト】小松菜と卵のふわとろ中華スープ",
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "6分",
    approxCostPerPerson: 35,
    tags: ["カルシウム", "彩り", "中華風", "外部レシピ"],
    containsDislikes: ["豆苗"],
    description: "シャキシャキの小松菜とふわふわ卵の黄金コンビ。ごま油の香りがふわっと広がる中華風スープ。",
    kidsTip: "卵でとじることで小松菜の苦味が消えて甘く食べやすくなります。",
    tip: "小松菜の葉はサッと火を通すだけにすると色鮮やかで歯触りよく仕上がります。",
    url: "https://www.sirogohan.com/recipe/komatunasoup/",
    ingredients: [
      { name: "小松菜", amount: 0.25, unit: "束", aisle: "野菜" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 2, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "小松菜は3cm長さに切る。",
      "鍋に水、鶏ガラスープの素、小松菜の茎を入れて煮立てる。",
      "葉を加えてサッと煮たら、溶き卵を回し入れ、ごま油を垂らして火を止める。"
    ]
  },
  {
    id: "soup_31",
    title: "【外部サイト】キャベツとベーコンの具だくさんミルクスープ",
    category: "soup",
    cuisine: "western",
    season: "all",
    time: "10分",
    approxCostPerPerson: 40,
    tags: ["洋風", "カルシウム", "子供ウケ", "外部レシピ"],
    containsDislikes: [],
    description: "キャベツの優しい甘みとベーコンの塩気が牛乳に溶け込んだ、シチューのように優しいスープ。",
    kidsTip: "クリーミーで甘口のスープはお子様に大人気。野菜がたくさん食べられます。",
    tip: "牛乳を加えたら強火にせず、沸騰直前で火を止めるのが滑らかに仕上げるコツです。",
    url: "https://www.sirogohan.com/recipe/kyabetumilk/",
    ingredients: [
      { name: "キャベツ", amount: 35, unit: "g", aisle: "野菜" },
      { name: "ベーコン", amount: 12, unit: "g", aisle: "肉・魚" },
      { name: "牛乳", amount: 50, unit: "ml", aisle: "大豆・乳・加工品" },
      { name: "コンソメ顆粒", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツはざく切り、ベーコンは1cm幅に切る。",
      "鍋に水100ml、コンソメ、キャベツ、ベーコンを入れて火にかけ、キャベツが柔らかくなるまで煮る。",
      "牛乳を加え、沸騰直前まで弱火で温めて塩コショウで味を調える。"
    ]
  },
  {
    id: "soup_32",
    title: "【外部サイト】豆腐と卵の生姜かき玉とろみスープ",
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["冬の旬", "生姜でポカポカ", "体温まる", "外部レシピ"],
    containsDislikes: [],
    description: "ふわふわ卵と柔らかい豆腐にとろみ餡が絡み、おろしたて生姜で体の芯からポカポカ温まる。",
    kidsTip: "生姜を控えめにすれば、優しいかき玉うどんのスープのような親しみやすい味になります。",
    tip: "水溶き片栗粉で先にとろみをつけてから溶き卵を細く流し入れると、卵が沈まずふわふわに。",
    url: "https://www.sirogohan.com/recipe/syougatamago/",
    ingredients: [
      { name: "木綿豆腐", amount: 30, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "生姜", amount: 0.5, unit: "かけ", aisle: "野菜" },
      { name: "片栗粉", amount: 4, unit: "g", aisle: "調味料・その他" },
      { name: "だしの素", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鍋に水180ml、だしの素、醤油・みりん各小さじ1、すりおろし生姜、さいの目切りにした豆腐を入れて煮立てる。",
      "水溶き片栗粉を回し入れてとろみをつける。",
      "沸騰したところに溶き卵を細く流し入れ、ふんわり固まったら火を止める。"
    ]
  },
  {
    id: "soup_33",
    title: "【外部サイト】新玉ねぎと油揚げの甘みたっぷり味噌汁（白ごはん.com）",
    category: "soup",
    cuisine: "japanese",
    season: "spring",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["春の旬", "新玉ねぎ", "和風基本", "外部レシピ"],
    containsDislikes: [],
    description: "春の新玉ねぎを煮るだけで出る極上の甘み！油揚げのコクと相まってだし要らずの美味しさ。",
    kidsTip: "玉ねぎのツンとした辛味が完全に消えて甘いので、子供たちも大喜びでおかわりします。",
    tip: "新玉ねぎは繊維に直角に少し厚めに切ると、トロッと柔らかい食感になります。",
    url: "https://www.sirogohan.com/recipe/shintamajiru/",
    ingredients: [
      { name: "玉ねぎ", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "玉ねぎはくし形切り、油揚げは短冊切りにする。",
      "鍋に水180ml、だしの素、玉ねぎ、油揚げを入れて火にかける。",
      "玉ねぎが透き通って柔らかくなったら弱火にし、味噌を溶き入れて火を止める。"
    ]
  },
  {
    id: "soup_34",
    title: "【外部サイト】わかめと長ネギの中華ピリ辛ごまスープ",
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["中華定番", "包丁ほぼ不要", "スピード", "外部レシピ"],
    containsDislikes: ["長ネギ"],
    description: "焼肉屋さんの定番！長ネギの甘みと乾燥わかめにごま油の香ばしさがマッチしたスピードスープ。",
    kidsTip: "長ネギをしっかり煮て甘みを引き出し、ラー油を抜けばラーメンのスープ感覚で完食できます。",
    tip: "白ごまを指でひねりながら加えると香りが一気に立ち込めます。",
    url: "https://www.sirogohan.com/recipe/wakamenegi/",
    ingredients: [
      { name: "乾燥わかめ", amount: 1.5, unit: "g", aisle: "調味料・その他" },
      { name: "長ネギ", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "長ネギは小口切りにする。",
      "鍋に水180ml、鶏ガラスープの素、醤油少量を入れて沸かす。",
      "長ネギと乾燥わかめを加えて1分煮て、ごま油と白ごまを散らして火を止める。"
    ]
  },
  {
    id: "soup_35",
    title: "【外部サイト】さつまいもと玉ねぎのほっこり甘口味噌汁（白ごはん.com）",
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "10分",
    approxCostPerPerson: 35,
    tags: ["秋の旬", "ほくほく", "子供大人気", "外部レシピ"],
    containsDislikes: [],
    description: "秋の甘いさつまいもと玉ねぎの素朴な味わい。お芋のホクホク感が子供たちに大人気のお味噌汁。",
    kidsTip: "お芋の優しい甘みで味噌の角が取れ、まるでスイーツのように美味しく飲んでくれます。",
    tip: "さつまいもは切ったらサッと水にさらしてデンプンを落とすと、汁が濁らず綺麗に仕上がります。",
    url: "https://www.sirogohan.com/recipe/satumaumai/",
    ingredients: [
      { name: "さつまいも", amount: 40, unit: "g", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "さつまいもは1cm厚さの半月切りにして水にさらし、玉ねぎは薄切りにする。",
      "鍋に水180ml、だしの素、さつまいも、玉ねぎを入れて火にかける。",
      "さつまいもに竹串がスッと通るまで柔らかくなったら、味噌を溶き入れて火を止める。"
    ]
  },
  // =================================================================
  // 【追加 主菜 (Main)】- main_57 〜 main_106 (全50品追加)
  // =================================================================
  {
    id: "main_57",
    title: "鶏むね肉のやわらかレモンペッパー照り焼き",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "15分",
    approxCostPerPerson: 100,
    tags: ["鶏むね肉", "さっぱり", "お弁当", "節約"],
    containsDislikes: [],
    description: "パサつきがちな鶏むね肉を削ぎ切りにしてフォークで穴を開け、レモン果汁と黒胡椒で爽やかに焼き上げます。",
    kidsTip: "レモンと醤油の甘酸っぱい味付けで、お肉が苦手な子もパクパク食べられます。",
    tip: "片栗粉をまぶしてから焼くことで肉汁を逃さずしっとり柔らか食感に！",
    ingredients: [
      { name: "鶏むね肉", amount: 100, unit: "g", aisle: "肉・魚" },
      { name: "レモン汁", amount: 5, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "片栗粉", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉は一口大の削ぎ切りにし、酒少々と塩こしょうを揉み込んで片栗粉を薄くまぶす。",
      "フライパンにサラダ油を熱し、中火で両面に焼き色がつくまで焼く。",
      "醤油・みりん・レモン汁・砂糖少々を合わせ入れ、全体にとろみがつくまで絡める。"
    ]
  },
  {
    id: "main_58",
    title: "コスパ最強！鶏むね肉の節約タンドリーチキン",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "15分",
    approxCostPerPerson: 105,
    flavorType: "curry",
    tags: ["カレー味", "鶏むね肉", "子供大人気", "下味冷凍"],
    containsDislikes: [],
    description: "ヨーグルトとカレー粉に漬け込んで焼くだけ！ヨーグルトの乳酸効果で鶏むね肉が驚くほど柔らかくなります。",
    kidsTip: "カレー粉を控えめにし、ケチャップを少し多めにすると子供向けマイルド味になります。",
    tip: "前日や朝にポリ袋で漬けておけば、夕飯時は焼くだけで10分完成！",
    ingredients: [
      { name: "鶏むね肉", amount: 100, unit: "g", aisle: "肉・魚" },
      { name: "プレーンヨーグルト", amount: 20, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "ケチャップ", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "カレー粉", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉は一口大に切り、フォークで数カ所刺す。",
      "ポリ袋に鶏肉、ヨーグルト、ケチャップ、カレー粉、おろしにんにく少々を入れてよく揉み込む。",
      "フライパンに油を薄くひき、フタをして弱めの中火で両面を香ばしく蒸し焼きにする。"
    ]
  },
  {
    id: "main_59",
    title: "鶏もも肉と長ネギのこってり焼き鳥丼風",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "all",
    time: "12分",
    approxCostPerPerson: 135,
    tags: ["鶏もも肉", "ご飯泥棒", "フライパン1つ", "長ネギ"],
    containsDislikes: ["長ネギ"],
    description: "香ばしく焼いたネギとジューシーな鶏もも肉に、甘辛い特製焼き鳥タレがたっぷり絡んでご飯が進みます。",
    kidsTip: "ネギをじっくり蒸し焼きにすると甘みが増し、ネギ嫌いなお子様も甘くて美味しく食べられます。",
    tip: "鶏肉から出る脂で長ネギを焼くことで、旨味を余すことなく吸収できます。",
    ingredients: [
      { name: "鶏もも肉", amount: 90, unit: "g", aisle: "肉・魚" },
      { name: "長ネギ", amount: 0.3, unit: "本", aisle: "野菜" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏もも肉は一口大、長ネギは3cm長さに切る。",
      "フライパンに鶏肉を皮目から入れ、長ネギも一緒に並べて中火でこんがり焼く。",
      "醤油・みりん・酒・砂糖を合わせたタレを回し入れ、照りが出るまで煮詰めて絡める。"
    ]
  },
  {
    id: "main_60",
    title: "鶏もも肉と大根のこってりみぞれ煮",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "autumn",
    time: "20分",
    approxCostPerPerson: 140,
    tags: ["大根", "和風定番", "ほっこり", "鶏もも肉"],
    containsDislikes: [],
    description: "大根おろしをたっぷり使ったみぞれ煮。鶏肉のコクと大根の甘みが調和し、スープごと飲み干したくなる美味しさ。",
    kidsTip: "大根おろしに火を通すことで辛味が完全に消え、柔らかい鶏肉と一緒に食べやすくなります。",
    tip: "大根おろしは汁ごと加えることで、だしの旨味と大根の甘みがぎゅっと凝縮します。",
    ingredients: [
      { name: "鶏もも肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 70, unit: "g", aisle: "野菜" },
      { name: "めんつゆ", amount: 15, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏肉は一口大に切り、大根はすりおろす。",
      "フライパンで鶏肉の両面を焼き色がつくまで焼く。",
      "大根おろし（汁ごと）、水50ml、めんつゆを加え、フタをして弱火で5〜6分煮込む。"
    ]
  },
  {
    id: "main_61",
    title: "鶏ささみと大葉のふんわりチーズピカタ",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "15分",
    approxCostPerPerson: 110,
    tags: ["高タンパク", "粉チーズ", "子供大人気", "お弁当"],
    containsDislikes: [],
    description: "ヘルシーなささみを卵と粉チーズの衣でふんわり包み焼き。しっとり柔らかく、冷めても美味しいのでお弁当にも◎",
    kidsTip: "チーズの風味でささみのパサつきを感じず、一口サイズで幼児も手づかみで喜んで食べます。",
    tip: "ささみは筋を取って観音開きにし、ラップをかぶせて軽く叩くと驚くほど柔らかくなります。",
    ingredients: [
      { name: "鶏ささみ", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "粉チーズ", amount: 5, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "ささみは筋を取り、一口大のそぎ切りにして塩こしょうを振り、小麦粉を薄くまぶす。",
      "溶き卵に粉チーズを混ぜ合わせ、ささみをくぐらせる。",
      "フライパンに油を熱し、弱めの中火で両面を焼き色がつくまでふっくら焼く。"
    ]
  },
  {
    id: "main_62",
    title: "鶏むね肉のサクサクチキンカツ 節約ソースがけ",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "20分",
    approxCostPerPerson: 100,
    tags: ["揚げ焼き", "大満足", "子供大人気", "節約"],
    containsDislikes: [],
    description: "特売の鶏むね肉を薄く叩いて広げ、少なめの油で揚げ焼きにしたサクサクジューシーなビッグチキンカツ。",
    kidsTip: "薄めに伸ばすことでサクッと噛み切りやすく、お肉が苦手なお子様にも大好評です。",
    tip: "フライパンに深さ1cm程度の油で十分揚がるので、油の処理も楽チンで経済的！",
    ingredients: [
      { name: "鶏むね肉", amount: 100, unit: "g", aisle: "肉・魚" },
      { name: "パン粉", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "小麦粉", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "中濃ソース", amount: 10, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏むね肉はそぎ切りにし、厚手のラップに挟んで麺棒等で厚さ7mm程度に叩いて伸ばす。",
      "水溶き小麦粉にくぐらせ、パン粉をしっかり押さえつけるようにまぶす。",
      "フライパンに油を1cm熱し、中火で両面がきつね色になるまで揚げ焼きにする。"
    ]
  },
  {
    id: "main_63",
    title: "鶏肉とかぼちゃのほくほく甘辛照り煮",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "autumn",
    time: "18分",
    approxCostPerPerson: 130,
    tags: ["かぼちゃ", "秋の旬", "ほくほく", "和風定番"],
    containsDislikes: ["かぼちゃ"],
    description: "甘みたっぷりの旬のかぼちゃと鶏もも肉を、醤油とみりんの黄金比タレでじっくり甘辛く煮絡めました。",
    kidsTip: "かぼちゃのホクホクした甘みがお肉に染み込んで、野菜が苦手な子も残さず食べてくれます。",
    tip: "かぼちゃは面取りしなくても、皮目を下にして動かさず煮ることで煮崩れを防げます。",
    ingredients: [
      { name: "鶏もも肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "かぼちゃ", amount: 80, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏肉は一口大、かぼちゃは一口大の乱切りにする。",
      "鍋に少量の油を熱し、鶏肉の表面をサッと炒める。",
      "かぼちゃ、水100ml、醤油、みりん、砂糖、だしの素を加え、落とし蓋をして弱火で10分煮る。"
    ]
  },
  {
    id: "main_64",
    title: "鶏むね肉とブロッコリーのマヨポン炒め",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "12分",
    approxCostPerPerson: 115,
    flavorType: "mayo",
    tags: ["マヨネーズ味", "ブロッコリー", "時短", "高タンパク"],
    containsDislikes: [],
    description: "マヨネーズのコクとポン酢の爽やかさが相性抜群！淡白な鶏むね肉とブロッコリーがごちそうに大変身。",
    kidsTip: "マヨポン味は子供たちに大人気！ブロッコリーの房にソースが絡んで野菜も美味しく完食できます。",
    tip: "ブロッコリーはレンチンで下加熱しておけば、フライパンで合わせ炒めるだけで超時短完成！",
    ingredients: [
      { name: "鶏むね肉", amount: 90, unit: "g", aisle: "肉・魚" },
      { name: "ブロッコリー", amount: 50, unit: "g", aisle: "野菜" },
      { name: "マヨネーズ", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "ポン酢", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ブロッコリーは小房に分け、耐熱容器に入れてレンジで1分半加熱する。鶏肉は一口大に切る。",
      "フライパンにマヨネーズ半量を熱し、鶏肉を両面こんがり焼く。",
      "ブロッコリー、ポン酢、残りのマヨネーズを加え、手早く全体に炒め絡める。"
    ]
  },
  {
    id: "main_65",
    title: "鶏手羽元と大根のさっぱりお酢煮込み",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "winter",
    time: "25分",
    approxCostPerPerson: 120,
    tags: ["大根", "お酢煮", "ホロホロ", "節約手羽元"],
    containsDislikes: [],
    description: "特売になりやすい手羽元をお酢でコトコト煮ることで、お肉が骨からホロッと外れる柔らかさに仕上がります。",
    kidsTip: "お酢は煮込むと酸味が完全に飛び、まろやかな旨味と甘みだけが残るので子供も大喜び。",
    tip: "大根は厚めのいちょう切りにして隠し包丁を入れておくと味がぐんぐん染み込みます。",
    ingredients: [
      { name: "鶏手羽元", amount: 1.5, unit: "本", aisle: "肉・魚" },
      { name: "大根", amount: 70, unit: "g", aisle: "野菜" },
      { name: "酢", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 12, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 8, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は厚さ1.5cmのいちょう切りにし、手羽元は骨に沿って包丁で1本切り込みを入れる。",
      "鍋に手羽元、大根、水150ml、酢、醤油、砂糖、みりんを全て入れて強火にかける。",
      "煮立ったら落とし蓋をして弱火で約15〜20分、煮汁が少し煮詰まるまで煮込む。"
    ]
  },
  {
    id: "main_66",
    title: "鶏むね肉のサクサク甘酢ネギだれ（油淋鶏風）",
    category: "main",
    cuisine: "chinese",
    proteinType: "chicken",
    season: "all",
    time: "15分",
    approxCostPerPerson: 105,
    tags: ["中華定番", "長ネギ", "ご飯泥棒", "揚げ焼き"],
    containsDislikes: ["長ネギ"],
    description: "カリカリに焼き上げた鶏むね肉に、刻みネギたっぷりの甘酸っぱい中華タレをジュワッとかけた本格節約ユーリンチー。",
    kidsTip: "ネギだれのお酢と砂糖のバランスが絶妙で、甘口中華として子供たちのご飯が止まりません。",
    tip: "片栗粉を多めにまぶして皮目をじっくり焼くことで、少ない油でもカリッカリの竜田揚げ風に！",
    ingredients: [
      { name: "鶏むね肉", amount: 100, unit: "g", aisle: "肉・魚" },
      { name: "長ネギ", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "酢", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 6, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "鶏肉は削ぎ切りにして下味をつけ、片栗粉をしっかりまぶす。長ネギはみじん切りにする。",
      "長ネギ、醤油、酢、砂糖、ごま油を混ぜ合わせて甘酢ネギだれを作る。",
      "フライパンに油大さじ2を熱して鶏肉をカリッと揚げ焼きにし、器に盛ってタレをかける。"
    ]
  },
  {
    id: "main_67",
    title: "豚こまとキャベツのこってり味噌炒め（回鍋肉風）",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "all",
    time: "12分",
    approxCostPerPerson: 130,
    tags: ["キャベツ", "豚こま肉", "ご飯泥棒", "フライパン1つ"],
    containsDislikes: [],
    description: "シャキシャキキャベツと豚肉の王道コンビ！甘辛い特製合わせ味噌ダレがしっかり絡んで白ご飯が止まりません。",
    kidsTip: "豆板醤を使わず味噌と砂糖・みりんで甘めに仕上げているので、小さいお子様でも大満足の味付けです。",
    tip: "キャベツは強火で手早く炒めて一度取り出し、最後に合わせるとシャキッと食感が残ります。",
    ingredients: [
      { name: "豚こま肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "キャベツ", amount: 80, unit: "g", aisle: "野菜" },
      { name: "味噌", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツは一口大のざく切り、豚肉は食べやすい大きさに切る。",
      "フライパンに油を熱し、豚肉を炒めて色が変わったらキャベツを加えて強火でサッと炒める。",
      "味噌、みりん、醤油、砂糖少々を溶いた合わせ調味料を加え、全体に強火で一気に絡める。"
    ]
  },
  {
    id: "main_68",
    title: "豚こま肉とかぼちゃの甘辛生姜炒め",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "autumn",
    time: "15分",
    approxCostPerPerson: 135,
    tags: ["かぼちゃ", "秋の旬", "生姜焼き", "豚こま肉"],
    containsDislikes: ["かぼちゃ"],
    description: "薄切りかぼちゃのホクホク感と豚こま肉のジューシーな脂が、生姜醤油タレで最高にマッチするスタミナ節約主菜。",
    kidsTip: "生姜を控えめにし、かぼちゃの甘みを生かすことで子供たちにも大人気の甘辛味になります。",
    tip: "かぼちゃは5mm幅の薄切りにすることで、電子レンジを使わずにフライパン調理だけで柔らかく火が通ります。",
    ingredients: [
      { name: "豚こま肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "かぼちゃ", amount: 70, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "おろし生姜", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは5mm厚さの一口大にスライスし、豚肉には軽く塩こしょうと片栗粉をまぶす。",
      "フライパンに油を熱し、かぼちゃを並べて両面中火でこんがり焼いて火を通す。",
      "豚肉を加えて色が変わるまで炒め、醤油・みりん・生姜・砂糖少々のタレを絡めて照りを出す。"
    ]
  },
  {
    id: "main_69",
    title: "豚こまと玉ねぎの節約ポークチャップ",
    category: "main",
    cuisine: "western",
    proteinType: "pork",
    season: "all",
    time: "12分",
    approxCostPerPerson: 125,
    tags: ["ケチャップ", "子供大人気", "洋風", "豚こま肉"],
    containsDislikes: [],
    description: "ロース肉ではなくお手頃な豚こまで作る絶品ポークチャップ！玉ねぎの甘みとケチャップのコクでお子様歓喜の味。",
    kidsTip: "ケチャップ味は子供人気No.1！酸味が飛ぶまでしっかり炒めると甘みとコクが引き立ちます。",
    tip: "豚肉に片栗粉をまぶしておくことで、安い豚こま肉でもパサつかず柔らかジューシーに仕上がります。",
    ingredients: [
      { name: "豚こま肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "玉ねぎ", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "ケチャップ", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "ウスターソース", amount: 6, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "玉ねぎは薄切りにし、豚肉には片栗粉小さじ1を薄くまぶす。",
      "フライパンに油を熱し、豚肉と玉ねぎを玉ねぎがしんなりするまで中火で炒める。",
      "ケチャップ、ウスターソース、酒少々を加え、全体にしっかり絡め炒める。"
    ]
  },
  {
    id: "main_70",
    title: "豚バラともやしのレンジ蒸し 胡麻ポン酢がけ",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "all",
    time: "10分",
    approxCostPerPerson: 120,
    tags: ["もやし", "電子レンジ", "超時短", "包丁不要"],
    containsDislikes: [],
    description: "耐熱皿にもやしと豚バラを重ねてチンするだけ！火を使わず10分で完成する、疲れた日の救世主メニュー。",
    kidsTip: "豚バラの甘い肉汁をもやしが吸ってシャキシャキ甘口になり、お野菜もペロリと食べられます。",
    tip: "もやし1袋がぺろりと消費できるかさ増しメニュー。洗い物もお皿1つで済みます！",
    ingredients: [
      { name: "豚バラ肉", amount: 70, unit: "g", aisle: "肉・魚" },
      { name: "もやし", amount: 80, unit: "g", aisle: "野菜" },
      { name: "ポン酢", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "すりごま", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "耐熱皿にもやしを広げ、その上に豚バラ肉を重ならないように広げて乗せる。",
      "酒小さじ1と塩少々を振り、ふんわりラップをして電子レンジ（600W）で約4〜5分加熱する。",
      "ポン酢とすりごま、ごま油少々を混ぜ合わせたタレをたっぷりかけて完成。"
    ]
  },
  {
    id: "main_71",
    title: "豚こまと豆苗のオイスター炒め",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "all",
    time: "10分",
    approxCostPerPerson: 110,
    tags: ["豆苗", "オイスターソース", "フライパン1つ", "中華"],
    containsDislikes: ["豆苗"],
    description: "再収穫もできる超節約野菜「豆苗」と豚こまのコク旨中華炒め。オイスターソースでプロの味付けに。",
    kidsTip: "豆苗の青臭さは豚肉の脂とオイスターソースの甘辛さでしっかりマスキングされ、食べやすくなります。",
    tip: "豆苗は根元を残して水に浸けておけば、1週間後にもう一度収穫できて節約効果2倍！",
    ingredients: [
      { name: "豚こま肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "豆苗", amount: 0.3, unit: "袋", aisle: "野菜" },
      { name: "オイスターソース", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "豆苗は根元を落として半分の長さに切り、豚肉は一口大に切る。",
      "フライパンに油を熱し、豚肉を色が変わるまで強火で炒める。",
      "豆苗、オイスターソース、醤油、酒小さじ1を加え、手早く30秒ほど強火で一気に炒め合わせる。"
    ]
  },
  {
    id: "main_72",
    title: "豚こま肉のひとくち梅しそカツ風焼き",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "summer",
    time: "15分",
    approxCostPerPerson: 130,
    tags: ["揚げ焼き", "さっぱり", "お弁当", "豚こま肉"],
    containsDislikes: [],
    description: "豚こま肉をギュッと丸めてパン粉をつけ、揚げ焼きにしたサクサク一口カツ。梅のさっぱり感で夏でも食欲倍増！",
    kidsTip: "梅干しを控えめにするかチーズに変更すると、お子様が大喜びする一口チーズカツに大変身！",
    tip: "特売の豚こま肉をギュッと丸めるだけで、高級なヒレカツのような柔らかい食感になります。",
    ingredients: [
      { name: "豚こま肉", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "パン粉", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "大葉", amount: 1, unit: "枚", aisle: "野菜" }
    ],
    instructions: [
      "豚こま肉に千切り大葉と叩いた梅干し（または塩コショウ）を混ぜ、一口大にギュッと丸める。",
      "水溶き小麦粉にくぐらせてパン粉をまぶす。",
      "フライパンに油を多めに熱し、弱めの中火で転がしながら全面きつね色になるまで揚げ焼きにする。"
    ]
  },
  {
    id: "main_73",
    title: "豚ロースと玉ねぎの王道生姜焼き",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "all",
    time: "12分",
    approxCostPerPerson: 150,
    tags: ["生姜焼き", "和風定番", "ご飯泥棒", "大満足"],
    containsDislikes: [],
    description: "すりおろし生姜と甘辛醤油タレが絡んだみんな大好きな生姜焼き！玉ねぎの甘みが豚肉の美味しさを引き立てます。",
    kidsTip: "すりおろしリンゴを隠し味に少量加えると、お肉が一段と柔らかくなりフルーティーで子供ウケ抜群。",
    tip: "お肉を焼く前にタレに長く漬けすぎないのが、お肉が硬くならずふっくら仕上がるコツ！",
    ingredients: [
      { name: "豚薄切り肉", amount: 90, unit: "g", aisle: "肉・魚" },
      { name: "玉ねぎ", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "おろし生姜", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 12, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "玉ねぎは薄切りにし、豚肉には薄く小麦粉をまぶす。",
      "フライパンに油を熱し、玉ねぎと豚肉を中火で焼き色がつくまで炒める。",
      "醤油、みりん、酒、生姜、砂糖を合わせたタレを回し入れ、強火でタレを煮絡める。"
    ]
  },
  {
    id: "main_74",
    title: "豚こまと厚揚げの甘辛すき焼き風煮",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "winter",
    time: "15分",
    approxCostPerPerson: 125,
    tags: ["厚揚げ", "かさ増し", "すき焼き風", "子供大人気"],
    containsDislikes: [],
    description: "厚揚げで大ボリュームにかさ増し！甘辛いすき焼き風の味付けが厚揚げとお肉にじゅわっと染み渡ります。",
    kidsTip: "甘めのすき焼き味なので、温泉卵や生卵につけて食べると子供たちもペロリと完食します。",
    tip: "厚揚げは熱湯をかけて油抜きすると、すき焼きタレが短時間でしっかり染み込みます。",
    ingredients: [
      { name: "豚こま肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "厚揚げ", amount: 70, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "玉ねぎ", amount: 0.25, unit: "個", aisle: "野菜" },
      { name: "醤油", amount: 12, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "厚揚げは一口大、玉ねぎは薄切りにする。",
      "鍋に水80ml、醤油、砂糖、みりん、だしの素を入れて煮立て、玉ねぎと厚揚げを入れて3分煮る。",
      "豚肉をほぐし入れ、アクを取りながらお肉に火が通るまで弱火で4〜5分煮含める。"
    ]
  },
  {
    id: "main_75",
    title: "豚肉と白菜の重ねミルフィーユ鍋風",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "winter",
    time: "20分",
    approxCostPerPerson: 130,
    tags: ["白菜", "冬の旬", "鍋風", "ほっこり"],
    containsDislikes: [],
    description: "白菜と豚肉を交互に重ねて煮込むだけ！白菜の水分だけで蒸し煮にするので、素材の甘みと旨味が凝縮されます。",
    kidsTip: "白菜がトロットロに柔らかくなるので、普段野菜を食べない子も自分からお代わりしてくれます。",
    tip: "フライパンや浅鍋に敷き詰めて加熱するだけ。調味料は白だしだけでビシッと味が決まります。",
    ingredients: [
      { name: "豚バラ肉", amount: 70, unit: "g", aisle: "肉・魚" },
      { name: "白菜", amount: 100, unit: "g", aisle: "野菜" },
      { name: "白だし", amount: 15, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜と豚肉を交互に重ね、5cm幅に切りそろえる。",
      "鍋のフチから中心に向かって切り口を上にしてぎっしり敷き詰める。",
      "水100ml、白だし、酒大さじ1を回し入れ、フタをして中火で約10〜12分蒸し煮にする。"
    ]
  },
  {
    id: "main_76",
    title: "豚こまとピーマンの節約青椒肉絲（チンジャオロース）",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "summer",
    time: "12分",
    approxCostPerPerson: 120,
    tags: ["ピーマン", "中華定番", "たけのこ不要", "豚こま肉"],
    containsDislikes: ["ピーマン"],
    description: "高いたけのこや牛肉を使わず、豚こまとじゃがいもで手軽に代用！シャキシャキピーマンとオイスターだれが絶品。",
    kidsTip: "ピーマンの苦味は縦切りにして油でサッと炒めることで大幅に激減！甘口オイスター味で克服に最適。",
    tip: "たけのこの代わりに細切りじゃがいもを使うと、食感も良くでんぷんでタレがよく絡んで一石二鳥！",
    ingredients: [
      { name: "豚こま肉", amount: 70, unit: "g", aisle: "肉・魚" },
      { name: "ピーマン", amount: 1, unit: "個", aisle: "野菜" },
      { name: "じゃがいも", amount: 0.4, unit: "個", aisle: "野菜" },
      { name: "オイスターソース", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 6, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ピーマン、じゃがいも、豚肉はすべて細切りにし、豚肉に酒・醤油少々と片栗粉をまぶす。",
      "フライパンに油を熱し、豚肉を炒め、色が変わったらじゃがいもを加えて透き通るまで炒める。",
      "ピーマンを加え、オイスターソース、醤油、砂糖小さじ1/2を加えて強火でサッと炒め合わせる。"
    ]
  },
  {
    id: "main_77",
    title: "ひき肉と厚揚げのボリューム麻婆豆腐",
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    season: "all",
    time: "15分",
    approxCostPerPerson: 115,
    tags: ["厚揚げ", "麻婆豆腐", "子供大人気", "フライパン1つ"],
    containsDislikes: [],
    description: "崩れやすい絹豆腐の代わりに厚揚げを使用！水切り不要で崩れず、ひき肉の旨味あんがたっぷり絡みます。",
    kidsTip: "辛味調味料は入れず、味噌とケチャップ・醤油でまろやかに仕上げるので小さなお子様も安心。",
    tip: "厚揚げを使うことで食べごたえ満点、翌日のお弁当に入れても水気が出ず大活躍します。",
    ingredients: [
      { name: "豚ひき肉", amount: 50, unit: "g", aisle: "肉・魚" },
      { name: "厚揚げ", amount: 80, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "長ネギ", amount: 0.2, unit: "本", aisle: "野菜" },
      { name: "味噌", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "厚揚げは1.5cm角、長ネギはみじん切りにする。",
      "フライパンでひき肉を炒め、色が変わったらネギと厚揚げを加えて炒め合わせる。",
      "水80ml、味噌、醤油、砂糖、鶏ガラスープの素を加え、2分煮て水溶き片栗粉でとろみをつける。"
    ]
  },
  {
    id: "main_78",
    title: "かぼちゃと合い挽き肉の甘辛そぼろ煮",
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "autumn",
    time: "18分",
    approxCostPerPerson: 125,
    tags: ["かぼちゃ", "秋の旬", "そぼろあん", "子供大人気"],
    containsDislikes: ["かぼちゃ"],
    description: "ホクホクのかぼちゃに、お肉の旨味がぎっしり詰まった甘辛そぼろあんをとろ〜りかけた大人気おかず。",
    kidsTip: "そぼろあんのトロミがかぼちゃを包み込み、パサつかず喉越しなめらかに美味しく食べられます。",
    tip: "ひき肉を炒めてから煮汁を加えることで、肉の臭みが消えて香ばしいコクが出ます。",
    ingredients: [
      { name: "合い挽き肉", amount: 50, unit: "g", aisle: "肉・魚" },
      { name: "かぼちゃ", amount: 80, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 6, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは一口大に切る。",
      "鍋に少量の油を熱してひき肉を炒め、ポロポロになったらかぼちゃと水100ml、調味料を加える。",
      "落とし蓋をして弱火で10分煮込み、かぼちゃが柔らかくなったら水溶き片栗粉でとろみをつける。"
    ]
  },
  {
    id: "main_79",
    title: "節約豚ひき肉とたっぷりキャベツのメンチカツ風",
    category: "main",
    cuisine: "western",
    proteinType: "mince",
    season: "all",
    time: "20分",
    approxCostPerPerson: 110,
    tags: ["キャベツ", "かさ増し", "揚げ焼き", "子供大人気"],
    containsDislikes: [],
    description: "ひき肉と同量の千切りキャベツを混ぜ込んでビッグにかさ増し！肉汁を吸ったキャベツが甘くてジューシー。",
    kidsTip: "キャベツがたっぷり入っていることで重たくならず、お肉の脂っこさが苦手な子も大絶賛！",
    tip: "丸めずにフライパン一面にタネを広げて大きく焼き、切り分ければ成形の手間もゼロ！",
    ingredients: [
      { name: "豚ひき肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "キャベツ", amount: 60, unit: "g", aisle: "野菜" },
      { name: "パン粉", amount: 12, unit: "g", aisle: "調味料・その他" },
      { name: "中濃ソース", amount: 10, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツは粗みじん切りにし、塩少々を振って軽く水気を絞る。",
      "ボウルにひき肉、キャベツ、パン粉、卵少々、塩こしょうを入れてよく練り、平たい小判型にする。",
      "フライパンに油を大さじ2熱し、パン粉を表面に押し付けて両面カリッと香ばしく揚げ焼きにする。"
    ]
  },
  {
    id: "main_80",
    title: "もやしと豚ひき肉の甘辛坦々炒め",
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    season: "all",
    time: "10分",
    approxCostPerPerson: 85,
    tags: ["もやし", "激安", "ご飯泥棒", "フライパン1つ"],
    containsDislikes: [],
    description: "1袋20円台のもやしとひき肉で作る超絶品おかず！胡麻と味噌の豊かなコクでご飯が何杯でもいける節約の味方。",
    kidsTip: "辛味なしの甘辛ごま味噌仕立てなので、ラーメンの具やお米に乗せて丼にしても大人気！",
    tip: "もやしは強火で一気に炒めることで水分を出さず、最後までシャキシャキ感をキープできます。",
    ingredients: [
      { name: "豚ひき肉", amount: 50, unit: "g", aisle: "肉・魚" },
      { name: "もやし", amount: 90, unit: "g", aisle: "野菜" },
      { name: "すりごま", amount: 5, unit: "g", aisle: "調味料・その他" },
      { name: "味噌", amount: 8, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "フライパンに油を引かずにひき肉を炒め、脂が出てきたら火を通す。",
      "もやしを加え、強火でサッと1分ほど炒める。",
      "味噌、醤油小さじ1、砂糖小さじ1、すりごまを合わせたタレを加え、全体に手早く絡める。"
    ]
  },
  {
    id: "main_81",
    title: "豚ひき肉とナスのマイルド麻婆茄子",
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    season: "summer",
    time: "15分",
    approxCostPerPerson: 120,
    tags: ["なす", "夏野菜", "子供大人気", "中華定番"],
    containsDislikes: ["なす"],
    description: "油を吸ってトロトロになったナスに、ジューシーな豚ひき肉のあんが絡む夏の王道おかず。",
    kidsTip: "辛い豆板醤は使わずケチャップと味噌を隠し味にすることで、ナス嫌いな子も大好きな甘口に。",
    tip: "ナスは乱切りにしてから油を少量絡めておくと、少ない油でもムラなく柔らかく炒め上がります。",
    ingredients: [
      { name: "豚ひき肉", amount: 50, unit: "g", aisle: "肉・魚" },
      { name: "なす", amount: 1, unit: "本", aisle: "野菜" },
      { name: "味噌", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "醤油", amount: 6, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ナスは乱切りにして水にさらし、水気をしっかり拭き取る。",
      "フライパンに多めの油を熱し、ナスを皮目からこんがり炒めて一度取り出す。",
      "ひき肉を炒め、ナスを戻し入れて合わせ調味料（水60ml、味噌、醤油、砂糖、鶏ガラ）ととろみを絡める。"
    ]
  },
  {
    id: "main_82",
    title: "鶏ひき肉と豆腐のふんわりつくね照り焼き",
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "all",
    time: "18分",
    approxCostPerPerson: 95,
    tags: ["豆腐かさ増し", "鶏ひき肉", "お弁当", "ふわふわ"],
    containsDislikes: [],
    description: "豆腐をたっぷり混ぜて信じられないほど柔らか！甘辛照り焼きダレが絡んで、何個でも食べられるヘルシーつくね。",
    kidsTip: "パサつきゼロのふんわり食感なので、離乳食完了期〜小さなお子様にも安心して出せます。",
    tip: "鶏ひき肉（むね）を使えば1人前100円未満！冷凍保存もできるのでお弁当ストックにも最適。",
    ingredients: [
      { name: "鶏ひき肉", amount: 50, unit: "g", aisle: "肉・魚" },
      { name: "木綿豆腐", amount: 50, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ボウルに鶏ひき肉、水切りした豆腐、片栗粉大さじ1、塩少々を入れてよく練り合わせる。",
      "一口大の小判型に成形し、フライパンで両面を香ばしく焼く。",
      "醤油、みりん、砂糖各同量を回し入れ、タレにとろみがつくまで絡め焼く。"
    ]
  },
  {
    id: "main_83",
    title: "ひき肉とじゃがいもの甘辛そぼろ炒め",
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "all",
    time: "15分",
    approxCostPerPerson: 100,
    tags: ["じゃがいも", "ほくほく", "子供大人気", "常備菜"],
    containsDislikes: [],
    description: "ホクホクじゃがいもとお肉の旨味そぼろの相性が抜群！煮物よりも時短で作れる、ご飯が進むおかず。",
    kidsTip: "じゃがいもにひき肉のタレがしっかり染み込み、コロッケの中身のような子供受け抜群の味に。",
    tip: "じゃがいもは先にレンジで加熱しておけば、炒め時間わずか3分でホクホクに仕上がります。",
    ingredients: [
      { name: "豚ひき肉", amount: 50, unit: "g", aisle: "肉・魚" },
      { name: "じゃがいも", amount: 1, unit: "個", aisle: "野菜" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいもは皮をむいて一口大に切り、耐熱容器に入れてレンジで3分加熱する。",
      "フライパンでひき肉をポロポロになるまで炒め、余分な脂を拭き取る。",
      "じゃがいもと醤油、みりん、砂糖少々を加え、全体に照りが出るまで炒め合わせる。"
    ]
  },
  {
    id: "main_84",
    title: "ピーマンの肉詰め コク旨甘辛タレ",
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "summer",
    time: "20分",
    approxCostPerPerson: 125,
    tags: ["ピーマン", "子供大人気", "定番洋食", "合挽き肉"],
    containsDislikes: ["ピーマン"],
    description: "ピーマンの内側に小麦粉を振ることで肉だねが剥がれずジューシー！甘辛ダレでピーマンの苦味を感じさせません。",
    kidsTip: "お肉の脂がピーマンに染み込み、甘辛ダレと絡むことでピーマン嫌いを克服するきっかけに！",
    tip: "タネを詰める前にピーマンの内側に茶こしで薄く小麦粉をはたくと、絶対に肉だねが剥がれません。",
    ingredients: [
      { name: "合挽き肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "ピーマン", amount: 1.5, unit: "個", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ピーマンは縦半分に切って種を取り、内側に小麦粉を薄くまぶす。玉ねぎはみじん切りにする。",
      "ひき肉、玉ねぎ、パン粉、塩こしょうをよく練り、ピーマンに隙間なく詰める。",
      "肉の面からフライパンで焼き、焼き色がついたら裏返してフタをし蒸し焼き。醤油・みりん・砂糖のタレを絡める。"
    ]
  },
  {
    id: "main_85",
    title: "合挽き肉と完熟トマトの簡単ミートソースパスタ風",
    category: "main",
    cuisine: "western",
    proteinType: "mince",
    season: "summer",
    time: "20分",
    approxCostPerPerson: 130,
    tags: ["トマト", "子供大人気", "洋風定番", "フライパン1つ"],
    containsDislikes: ["トマト"],
    description: "トマトの酸味とひき肉の旨味がぎゅっと詰まった手作りミートソース。ご飯にかけてドリア風にしても絶品！",
    kidsTip: "酸味が苦手な子供には、ケチャップと砂糖を少し足して甘口に仕上げると大喜びでおかわりします。",
    tip: "玉ねぎをしっかり炒めて甘みを引き出すのが、市販のルーを使わずにコクを出す秘訣です。",
    ingredients: [
      { name: "合挽き肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "トマト缶", amount: 80, unit: "g", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "ケチャップ", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "玉ねぎはみじん切りにする。",
      "フライパンに油を熱し、玉ねぎが透き通るまで炒め、ひき肉を加えてポロポロになるまで炒める。",
      "トマト缶、ケチャップ、ウスターソース小さじ1、コンソメ少々を加え、中火で7〜8分煮詰める。"
    ]
  },
  {
    id: "main_86",
    title: "豚ひき肉と大根のとろみ生姜あんかけ",
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "winter",
    time: "20分",
    approxCostPerPerson: 105,
    tags: ["大根", "和風定番", "あったか", "生姜"],
    containsDislikes: [],
    description: "大根の優しい甘みとひき肉の旨味が溶け込んだ熱々あんかけ。生姜の風味で体の芯からポカポカ温まります。",
    kidsTip: "生姜を少なめにすれば小さな子供も食べやすく、ご飯にたっぷりかけてあんかけ丼にすると好評です。",
    tip: "大根は小さめの角切り（さいの目）にすると火の通りが早く、10分煮るだけでトロトロになります。",
    ingredients: [
      { name: "豚ひき肉", amount: 50, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 80, unit: "g", aisle: "野菜" },
      { name: "めんつゆ", amount: 15, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は1cm角のさいの目切りにする。",
      "鍋でひき肉を炒め、色が変わったら大根と水150ml、めんつゆを加えてフタをし弱火で8分煮る。",
      "大根が柔らかくなったら水溶き片栗粉を回し入れ、しっかり沸騰させてとろみをつける。"
    ]
  },
  {
    id: "main_87",
    title: "サバ缶とキャベツのコク旨トマト煮込み",
    category: "main",
    cuisine: "western",
    proteinType: "fish",
    season: "all",
    time: "15分",
    approxCostPerPerson: 135,
    tags: ["サバ缶", "トマト", "DHA満点", "包丁不要", "魚"],
    containsDislikes: ["トマト", "魚"],
    description: "骨まで柔らかいサバ水煮缶とざく切りキャベツをトマトで煮るだけ！魚臭さが消えて洋風ごちそうスープ煮に。",
    kidsTip: "トマトとケチャップの風味で魚特有のクセが消え、骨もないので子供でも安心してモリモリ食べられます。",
    tip: "サバ缶は汁ごと投入することで、DHA・EPAなどの栄養と魚の出汁を余すことなく使い切れます。",
    ingredients: [
      { name: "サバ水煮缶", amount: 0.4, unit: "缶", aisle: "肉・魚" },
      { name: "キャベツ", amount: 80, unit: "g", aisle: "野菜" },
      { name: "トマト缶", amount: 70, unit: "g", aisle: "野菜" },
      { name: "コンソメ", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツはざく切りにする。",
      "鍋にトマト缶、水50ml、コンソメ、キャベツを入れて火にかけ、キャベツがしんなりするまで煮る。",
      "サバ缶を汁ごと加え、身を軽くほぐしながら弱火で3分煮て塩こしょうで味を調える。"
    ]
  },
  {
    id: "main_88",
    title: "サバの香ばし塩焼き すだち醤油",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "autumn",
    time: "12分",
    approxCostPerPerson: 140,
    tags: ["サバ", "秋の旬", "和風基本", "魚"],
    containsDislikes: ["魚"],
    description: "脂の乗った旬のサバをパリッと香ばしく焼き上げた日本の定番。皮はパリパリ、身はふっくらジューシー。",
    kidsTip: "焼く前に小骨をピンセットでサッと抜いておくと、魚が苦手な子も嫌がらずに美味しく食べてくれます。",
    tip: "焼く10分前に酒と塩を振って水気を拭き取ることで、魚の生臭さが完全に消えます。",
    ingredients: [
      { name: "塩サバ", amount: 1, unit: "切", aisle: "肉・魚" }
    ],
    instructions: [
      "サバの皮目に十字の切り込みを入れ、酒少々を振って5分置き、余分な水気をペーパーで拭き取る。",
      "魚焼きグリルまたはフライパン用ホイルを敷いたフライパンで、皮目から香ばしく焼く。",
      "裏返して中まで火が通るまで焼き、お好みで大根おろしやレモンを添える。"
    ]
  },
  {
    id: "main_89",
    title: "生鮭とキノコのホイルバター醤油包み焼き",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "autumn",
    time: "15分",
    approxCostPerPerson: 155,
    tags: ["鮭", "きのこ", "秋の旬", "フライパン1つ", "魚"],
    containsDislikes: ["きのこ", "魚"],
    description: "アルミホイルを開けた瞬間に広がるバターとキノコの香り！鮭がふっくら蒸しあがり、後片付けも超カンタン。",
    kidsTip: "バターと醤油の香ばしい香りで魚臭さが消え、子供たちも宝箱を開けるようにワクワク喜んで食べます。",
    tip: "フライパンに水を入れてホイルを並べ、フタをして蒸し焼きにするので焦げ付きの心配ゼロ！",
    ingredients: [
      { name: "生鮭", amount: 1, unit: "切", aisle: "肉・魚" },
      { name: "しめじ", amount: 30, unit: "g", aisle: "野菜" },
      { name: "バター", amount: 8, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "アルミホイルを広げ、中央にほぐしたしめじを敷き、その上に鮭の切り身を乗せる。",
      "バターを鮭の上に乗せ、ホイルの端をしっかり閉じて包む。",
      "フライパンに水100mlを入れ、ホイル包みを並べてフタをし、中火で約10〜12分蒸し焼きにして醤油をかける。"
    ]
  },
  {
    id: "main_90",
    title: "白身魚と玉ねぎの甘酢あんかけ",
    category: "main",
    cuisine: "chinese",
    proteinType: "fish",
    season: "all",
    time: "18分",
    approxCostPerPerson: 135,
    tags: ["白身魚", "甘酢あん", "子供大人気", "魚"],
    containsDislikes: ["魚"],
    description: "カリッと揚げ焼きにした白身魚（タラ等）に、野菜たっぷりの甘酸っぱい中華あんをたっぷりかけました。",
    kidsTip: "クセのない白身魚とケチャップ入りの甘口あんかけの組み合わせは、お魚メニューの中で一番人気！",
    tip: "特売のタラやカレイ、冷凍白身魚の切り身で手軽に作れるコスパ優秀レシピです。",
    ingredients: [
      { name: "タラ切り身", amount: 1, unit: "切", aisle: "肉・魚" },
      { name: "玉ねぎ", amount: 0.25, unit: "個", aisle: "野菜" },
      { name: "人参", amount: 20, unit: "g", aisle: "野菜" },
      { name: "酢", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "タラは水気を拭いて一口大に切り、塩コショウして片栗粉をまぶす。玉ねぎ、人参は千切りにする。",
      "フライパンに多めの油を熱し、タラを両面カリッときつね色に揚げ焼きにして皿に盛る。",
      "小鍋で野菜と水100ml、酢、醤油、砂糖大さじ1を煮て、水溶き片栗粉でとろみをつけてタラにかける。"
    ]
  },
  {
    id: "main_91",
    title: "イワシのカリッと蒲焼き甘辛丼風",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "all",
    time: "12分",
    approxCostPerPerson: 110,
    tags: ["イワシ", "節約魚", "ご飯泥棒", "フライパン1つ", "魚"],
    containsDislikes: ["魚"],
    description: "安くて栄養満点のイワシを開いて粉をはたき、カリッと焼いてうなぎ風の甘辛蒲焼きダレを絡めました。",
    kidsTip: "甘辛い蒲焼きタレをご飯に染み込ませて丼にすると、うなぎ気分で子供たちもペロリと完食！",
    tip: "開いたイワシは手開きでも簡単に骨が取れます。片栗粉をしっかりまぶすと小骨も気になりません。",
    ingredients: [
      { name: "イワシ（開いたもの）", amount: 1.5, unit: "尾", aisle: "肉・魚" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "イワシは水気を拭き取り、片栗粉を両面に薄くまぶす。",
      "フライパンに油を熱し、皮目から入れて中火で両面カリッとするまで焼く。",
      "醤油、みりん、酒、砂糖を合わせたタレを加え、照りが出るまで素早く絡める。"
    ]
  },
  {
    id: "main_92",
    title: "アジの香草パン粉焼き 節約フライ風",
    category: "main",
    cuisine: "western",
    proteinType: "fish",
    season: "all",
    time: "15分",
    approxCostPerPerson: 125,
    tags: ["アジ", "揚げない", "パン粉焼き", "魚"],
    containsDislikes: ["魚"],
    description: "アジフライの面倒な油処理なし！マヨネーズを塗ってパン粉を乗せ、トースターやフライパンで焼くだけ。",
    kidsTip: "マヨネーズのコクとサクサクパン粉でお魚の臭みが消え、スナック感覚で食べられます。",
    tip: "パン粉に粉チーズやパセリを少量混ぜると、洋食レストランのような香ばしい風味に！",
    ingredients: [
      { name: "アジ切り身（三枚おろし）", amount: 1, unit: "尾", aisle: "肉・魚" },
      { name: "マヨネーズ", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "パン粉", amount: 12, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "アジに塩こしょうを振り、表面にマヨネーズを薄くまんべんなく塗る。",
      "パン粉を上からしっかり押し付けるようにまぶす。",
      "フライパンに少量の油を引いてフタをして中火で焼くか、トースターでパン粉に焼き色がつくまで焼く。"
    ]
  },
  {
    id: "main_93",
    title: "サケとじゃがいものほっこりクリーム煮",
    category: "main",
    cuisine: "western",
    proteinType: "fish",
    season: "winter",
    time: "18分",
    approxCostPerPerson: 145,
    flavorType: "stew",
    tags: ["シチュー・クリーム系", "鮭", "じゃがいも", "冬の旬", "魚"],
    containsDislikes: ["魚"],
    description: "生クリーム不要！牛乳とバターで手軽に作れる鮭とじゃがいもの濃厚クリーミーおかず。",
    kidsTip: "クリームシチューのようなマイルドな甘口仕立てで、子供たちに圧倒的な大人気を誇る魚料理です。",
    tip: "じゃがいものデンプンが自然なとろみをつけてくれるので、ホワイトソース作り不要で失敗知らず！",
    ingredients: [
      { name: "生鮭", amount: 0.8, unit: "切", aisle: "肉・魚" },
      { name: "じゃがいも", amount: 0.6, unit: "個", aisle: "野菜" },
      { name: "牛乳", amount: 80, unit: "ml", aisle: "大豆・乳・加工品" },
      { name: "バター", amount: 8, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "鮭は一口大に切って小麦粉をまぶし、じゃがいもは薄切りにする。",
      "フライパンにバターを熱し、鮭を両面サッと焼いて取り出す。",
      "じゃがいも、牛乳、水50ml、コンソメを加えて煮込み、じゃがいもが柔らかくなったら鮭を戻してとろみをつける。"
    ]
  },
  {
    id: "main_94",
    title: "ツナと白菜のうま塩とろみ中華炒め",
    category: "main",
    cuisine: "chinese",
    proteinType: "fish",
    season: "winter",
    time: "10分",
    approxCostPerPerson: 90,
    tags: ["ツナ缶", "白菜", "超時短", "魚"],
    containsDislikes: ["魚"],
    description: "ツナ缶のオイルを丸ごと使った白菜の旨味炒め。水溶き片栗粉でとろみをつけて、ご飯にかければ中華丼に！",
    kidsTip: "ツナの親しみやすい風味と甘い白菜がとろとろあんに包まれ、野菜嫌いのお子様も笑顔で完食。",
    tip: "包丁が面倒な時は白菜を手でちぎれば、包丁もまな板も使わずにフライパン1つで完成します。",
    ingredients: [
      { name: "ツナ缶", amount: 0.4, unit: "缶", aisle: "肉・魚" },
      { name: "白菜", amount: 90, unit: "g", aisle: "野菜" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜は食べやすい大きさにざく切りにする。",
      "フライパンにツナ缶の油を熱し、白菜の芯から炒め、葉もしんなりするまで炒める。",
      "ツナ、水80ml、鶏ガラスープの素、塩少々を加えて1分煮て、水溶き片栗粉でとろみをつける。"
    ]
  },
  {
    id: "main_95",
    title: "アラでお得に！ブリ大根 こってり煮",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "winter",
    time: "25分",
    approxCostPerPerson: 120,
    tags: ["大根", "ブリ", "冬の旬", "節約アラ", "魚"],
    containsDislikes: ["魚"],
    description: "特売のブリのアラを使えば切り身の半額以下！大根にブリの脂と旨味が芯まで染み込んだ冬の最高のごちそう。",
    kidsTip: "煮汁をしっかり甘辛く煮詰めることで、生臭さがなく子供たちも大根とお肉を喜んで食べます。",
    tip: "ブリに熱湯をサッとかけて冷水で血合いを洗う（霜降り）ひと手間で、臭みが完全にゼロになります！",
    ingredients: [
      { name: "ブリ（アラまたは切り身）", amount: 80, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 80, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 15, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 8, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は厚さ2cmの半月切りにしてレンジで3分下加熱。ブリは熱湯を回しかけて汚れを洗う。",
      "鍋に水150ml、酒、みりん、砂糖、生姜を入れて沸騰させ、ブリと大根を入れる。",
      "醤油を加えて落とし蓋をし、中弱火で煮汁が1/3になるまで15分ほどコトコト煮詰める。"
    ]
  },
  {
    id: "main_96",
    title: "サバ缶と玉ねぎの甘辛卵とじ丼風",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "all",
    time: "10分",
    approxCostPerPerson: 95,
    tags: ["サバ缶", "卵とじ", "超時短", "フライパン1つ", "魚"],
    containsDislikes: ["魚"],
    description: "サバ缶と玉ねぎをめんつゆでサッと煮て、卵でふんわりとじるだけ。親子丼以上のコクと旨味が10分で完成。",
    kidsTip: "ふんわり卵で包まれることでサバの味がまろやかになり、丼スタイルで子供たちも勢いよく完食！",
    tip: "卵は2回に分けて回し入れ、2回目を入れたらすぐに火を止めてフタをするとプロ級の半熟に仕上がります。",
    ingredients: [
      { name: "サバ水煮缶", amount: 0.4, unit: "缶", aisle: "肉・魚" },
      { name: "玉ねぎ", amount: 0.3, unit: "個", aisle: "野菜" },
      { name: "卵", amount: 1, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "めんつゆ", amount: 15, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "玉ねぎは薄切りにし、卵は溶きほぐしておく。",
      "小さめのフライパンに水60ml、めんつゆ、玉ねぎを入れて火にかけ、玉ねぎが透き通るまで煮る。",
      "サバ缶を軽くほぐして加え、溶き卵を回し入れて半熟状になったら火を止めてフタをする。"
    ]
  },
  {
    id: "main_97",
    title: "厚揚げの豚肉巻き こってり照り焼きタレ",
    category: "main",
    cuisine: "japanese",
    proteinType: "soy",
    season: "all",
    time: "15分",
    approxCostPerPerson: 110,
    tags: ["厚揚げ", "かさ増し", "豚肉巻き", "大満足"],
    containsDislikes: [],
    description: "厚揚げに少量の豚こま肉を巻きつけるだけで、まるで大きなお肉ステーキ！外はカリッ、中はジューシー。",
    kidsTip: "お肉をしっかり巻いてあるので見た目は完全なお肉料理！甘辛照り焼き味でお子様ウケ抜群です。",
    tip: "巻き終わりに片栗粉を軽くはたいて巻き終わりから焼くことで、お肉が剥がれず綺麗に密着します。",
    ingredients: [
      { name: "厚揚げ", amount: 80, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "豚こま肉", amount: 40, unit: "g", aisle: "肉・魚" },
      { name: "醤油", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "厚揚げを棒状に4等分し、豚こま肉をきつね色に巻きつけ、片栗粉を薄くまぶす。",
      "フライパンに油を熱し、巻き終わりを下にして並べ、転がしながら全面こんがり焼く。",
      "醤油、みりん、砂糖各同量を回し入れ、照りが出るまでタレをしっかり絡める。"
    ]
  },
  {
    id: "main_98",
    title: "ふわとろカニカマ玉の中華甘酢あんかけ（天津飯風）",
    category: "main",
    cuisine: "chinese",
    proteinType: "soy",
    season: "all",
    time: "10分",
    approxCostPerPerson: 80,
    tags: ["卵料理", "カニカマ", "超時短", "激安"],
    containsDislikes: [],
    description: "卵とカニカマ、長ネギで作るふわとろ卵焼きに、とろ〜り中華甘酢あんをたっぷりかけた節約ごちそう主菜。",
    kidsTip: "カニカマの自然な甘みとふんわり半熟卵の組み合わせは、子供たちが笑顔になる鉄板メニュー。",
    tip: "卵にはマヨネーズ小さじ1を混ぜて強火でサッと炒めると、油控えめでもふんわり膨らみます。",
    ingredients: [
      { name: "卵", amount: 1.5, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "カニカマ", amount: 2, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "酢", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "卵を割りほぐし、裂いたカニカマと塩少々を混ぜ合わせる。",
      "フライパンに多めの油を熱し、卵液を一気に流し入れて大きく混ぜ、半熟状で皿に丸く滑らせる。",
      "小鍋に水100ml、醤油、酢、砂糖、鶏ガラ、片栗粉を入れてよく混ぜ、火にかけてとろみを出して卵にかける。"
    ]
  },
  {
    id: "main_99",
    title: "木綿豆腐の香ばしステーキ たっぷりキノコあんかけ",
    category: "main",
    cuisine: "japanese",
    proteinType: "soy",
    season: "autumn",
    time: "15分",
    approxCostPerPerson: 75,
    tags: ["豆腐ステーキ", "きのこ", "秋の旬", "激安ヘルシー"],
    containsDislikes: ["きのこ"],
    description: "しっかり水切りした木綿豆腐をカリッと焼き上げ、えのきとしめじの和風だしあんをたっぷりかけました。",
    kidsTip: "豆腐の表面がカリッと香ばしく揚がっているので、豆腐が苦手なお子様もステーキ感覚でパクパク完食！",
    tip: "豆腐の水切りはペーパーに包んでレンジで2分チンすれば、重しを乗せて待つ必要なし！",
    ingredients: [
      { name: "木綿豆腐", amount: 120, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "えのき", amount: 30, unit: "g", aisle: "野菜" },
      { name: "めんつゆ", amount: 15, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "木綿豆腐はレンジで2分水切りし、一口大に切って片栗粉を全体にまぶす。",
      "フライパンに油を熱し、豆腐を両面カリッと黄金色になるまで焼いて皿に盛る。",
      "フライパンにほぐしたえのき、水80ml、めんつゆを入れて煮立たせ、水溶き片栗粉でとろみをつけて豆腐にかける。"
    ]
  },
  {
    id: "main_100",
    title: "豚こまとニラ玉のスタミナ中華炒め",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "all",
    time: "10分",
    approxCostPerPerson: 110,
    tags: ["ニラ玉", "豚こま肉", "超時短", "フライパン1つ"],
    containsDislikes: [],
    description: "疲れた日に元気が湧くスタミナ炒め！ふわふわの半熟卵とニラの香り、豚肉のコクが三位一体に。",
    kidsTip: "卵を半熟でふわふわに仕上げることでニラの香りがまろやかになり、子供も美味しく食べてくれます。",
    tip: "卵は最初に強火で半熟に炒めて一度取り出し、最後に戻し入れるのがふわふわに保つ最大のコツ！",
    ingredients: [
      { name: "豚こま肉", amount: 60, unit: "g", aisle: "肉・魚" },
      { name: "ニラ", amount: 0.3, unit: "束", aisle: "野菜" },
      { name: "卵", amount: 1, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "オイスターソース", amount: 8, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ニラは4cm長さに切り、卵は溶きほぐす。",
      "フライパンにごま油を熱し、卵を入れて強火でサッと炒めて半熟で取り出す。",
      "豚肉とニラを炒め、火が通ったらオイスターソースと醤油少々で味付けし、卵を戻してサッと混ぜ合わせる。"
    ]
  },
  {
    id: "main_101",
    title: "厚揚げとちくわと大根の節約おでん風煮物",
    category: "main",
    cuisine: "japanese",
    proteinType: "soy",
    season: "winter",
    time: "25分",
    approxCostPerPerson: 95,
    tags: ["厚揚げ", "ちくわ", "大根", "冬の旬", "ほっこり"],
    containsDislikes: [],
    description: "高いおでん種を使わず、厚揚げ・ちくわ・大根・卵で手軽に作る大満足の節約おでん。身体の芯から温まります。",
    kidsTip: "ちくわとお出汁の旨味を吸った大根がとても柔らかく、ちくわはお子様が大好きな具材No.1！",
    tip: "具材を多めに作っておけば、翌朝は味がさらに染み込んでさらに美味しく朝ごはんのおかずに。",
    ingredients: [
      { name: "厚揚げ", amount: 70, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "ちくわ", amount: 1, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "大根", amount: 70, unit: "g", aisle: "野菜" },
      { name: "白だし", amount: 20, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は厚さ2cmの半月切りにしてレンジで3分加熱。ちくわは斜め半分、厚揚げは一口大に切る。",
      "鍋に水250ml、白だし、みりん小さじ1を煮立て、大根、厚揚げ、ちくわを入れる。",
      "落とし蓋をして弱火で約15分、具材に味がじんわり染み込むまで煮る。"
    ]
  },
  {
    id: "main_102",
    title: "納豆ととろけるチーズのカリカリ厚揚げ焼き",
    category: "main",
    cuisine: "japanese",
    proteinType: "soy",
    season: "all",
    time: "10分",
    approxCostPerPerson: 70,
    tags: ["納豆", "厚揚げ", "トースター", "超時短", "包丁不要"],
    containsDislikes: [],
    description: "厚揚げの上に納豆とチーズを乗せてトースターで焼くだけ！高タンパク・低コストでボリューム満点の最強節約主菜。",
    kidsTip: "チーズの塩気とコクが納豆特有の匂いを抑え、ピザ感覚で子供たちも喜んで完食します。",
    tip: "トースターや魚焼きグリルを使えばフライパンの油汚れもゼロで超ラクチン！",
    ingredients: [
      { name: "厚揚げ", amount: 100, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "納豆", amount: 0.5, unit: "パック", aisle: "大豆・乳・加工品" },
      { name: "ピザ用チーズ", amount: 15, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "厚揚げは厚さを半分にスライスし、アルミホイルに乗せる。",
      "付属のタレを混ぜた納豆を厚揚げの上に広げ、ピザ用チーズをたっぷり乗せる。",
      "オーブントースターでチーズが溶けてこんがり焼き色がつくまで約5〜6分焼く。"
    ]
  },
  {
    id: "main_103",
    title: "もやしとカニカマの節約中華オムレツ",
    category: "main",
    cuisine: "chinese",
    proteinType: "soy",
    season: "all",
    time: "10分",
    approxCostPerPerson: 65,
    tags: ["卵料理", "もやし", "激安", "包丁不要"],
    containsDislikes: [],
    description: "1人前100円以下！もやしのシャキシャキ食感とカニカマの彩り、ふんわり卵が合わさった栄養満点オムレツ。",
    kidsTip: "ふんわり卵にケチャップや甘酢あんをかけると、洋食オムレツ風で子供受け抜群！",
    tip: "もやしを具にすることで卵2個分以上の圧倒的なボリューム感にかさ増しできます。",
    ingredients: [
      { name: "卵", amount: 1.5, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "もやし", amount: 60, unit: "g", aisle: "野菜" },
      { name: "カニカマ", amount: 2, unit: "本", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "ボウルに卵を割りほぐし、もやし、裂いたカニカマ、鶏ガラスープの素小さじ1/2を入れて混ぜる。",
      "小さめのフライパンにごま油を熱し、一気に卵液を流し入れる。",
      "半熟状になるまで大きくかき混ぜ、フタをして弱火で両面を香ばしく焼き上げる。"
    ]
  },
  {
    id: "main_104",
    title: "豆腐とえのきの中華風ふわふわカニ玉",
    category: "main",
    cuisine: "chinese",
    proteinType: "soy",
    season: "all",
    time: "12分",
    approxCostPerPerson: 75,
    tags: ["きのこ", "木綿豆腐", "カニ玉", "中華あん"],
    containsDislikes: ["きのこ"],
    description: "水切り豆腐とえのき茸を卵に混ぜ込んでボリュームアップ！ふんわりヘルシーで栄養満点の中華おかず。",
    kidsTip: "えのきを細かく刻むことでキノコ特有の食感が気にならず、甘口のあんと一緒に美味しく食べられます。",
    tip: "豆腐を入れることで冷めても固くならず、ふわふわ柔らか食感がずっとキープされます。",
    ingredients: [
      { name: "木綿豆腐", amount: 60, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "卵", amount: 1, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "えのき", amount: 30, unit: "g", aisle: "野菜" },
      { name: "カニカマ", amount: 1.5, unit: "本", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "豆腐は軽く水切りしてフォークで潰し、細かく切ったえのき、カニカマ、溶き卵と混ぜ合わせる。",
      "フライパンに油を熱し、丸く流し入れて両面をふっくら焼き上げて皿に盛る。",
      "水80ml、醤油、砂糖、オイスターソース各小さじ1を煮立て、水溶き片栗粉でとろみをつけてかける。"
    ]
  },
  {
    id: "main_105",
    title: "ちくわとキャベツのカレーマヨ香ばし炒め",
    category: "main",
    cuisine: "western",
    proteinType: "soy",
    season: "all",
    time: "10分",
    approxCostPerPerson: 70,
    flavorType: "curry",
    tags: ["カレー味", "ちくわ", "キャベツ", "超時短"],
    containsDislikes: [],
    description: "お肉がなくても大満足！旨味たっぷりのちくわとキャベツをカレーマヨで炒めたスパイシー節約主菜。",
    kidsTip: "カレーの香りとマヨネーズのコクの黄金コンビで、キャベツがいくらでも食べられます。",
    tip: "ちくわは斜め切りにして断面を広くすることで、味がしっかり絡んで食べ応えもアップします。",
    ingredients: [
      { name: "ちくわ", amount: 2, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "キャベツ", amount: 80, unit: "g", aisle: "野菜" },
      { name: "カレー粉", amount: 2, unit: "g", aisle: "調味料・その他" },
      { name: "マヨネーズ", amount: 10, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ちくわは斜め切り、キャベツはざく切りにする。",
      "フライパンにマヨネーズを熱し、ちくわとキャベツをしんなりするまで中火で炒める。",
      "カレー粉、醤油小さじ1を加え、全体に香りが立つまで手早く炒め合わせる。"
    ]
  },
  {
    id: "main_106",
    title: "かぼちゃとチーズのミートグラタン風焼き",
    category: "main",
    cuisine: "western",
    proteinType: "mince",
    season: "autumn",
    time: "20分",
    approxCostPerPerson: 130,
    tags: ["かぼちゃ", "秋の旬", "グラタン風", "チーズ", "子供大人気"],
    containsDislikes: ["かぼちゃ"],
    description: "ホクホクかぼちゃの上に特製ミートソースととろけるチーズを乗せてこんがり焼き上げた秋のごちそう。",
    kidsTip: "ミートソースとチーズのコクがかぼちゃの甘みとベストマッチ！子供たちのテンションが上がる一品。",
    tip: "かぼちゃをレンジで先に柔らかくしておけば、トースターでチーズを溶かすだけであっという間に完成！",
    ingredients: [
      { name: "かぼちゃ", amount: 80, unit: "g", aisle: "野菜" },
      { name: "豚ひき肉", amount: 40, unit: "g", aisle: "肉・魚" },
      { name: "ピザ用チーズ", amount: 15, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "ケチャップ", amount: 10, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは薄切りにして耐熱容器に入れ、レンジで2分加熱して柔らかくする。",
      "フライパンでひき肉を炒め、ケチャップとウスターソース各小さじ1で味付けしてミートソースを作る。",
      "耐熱皿にかぼちゃを敷き、ミートソースとピザ用チーズを乗せてトースターでチーズに焼き色がつくまで焼く。"
    ]
  },
  // =================================================================
  // 【追加 副菜 (Side)】- side_39 〜 side_80 (全42品追加)
  // =================================================================
  {
    id: "side_39",
    title: "かぼちゃの定番ほっくり甘辛煮",
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "15分",
    approxCostPerPerson: 40,
    tags: ["かぼちゃ", "秋の旬", "和風基本", "ほくほく"],
    containsDislikes: ["かぼちゃ"],
    description: "面取り不要で煮崩れ知らず！素材本来の甘みを引き出す黄金比のおだしでほっくり煮上げました。",
    kidsTip: "甘くてホクホク、まるで栗やお芋のスイーツのようにお子様が大喜びで食べてくれます。",
    tip: "皮目を下にして並べ、落とし蓋をして弱火でコトコト煮るのが煮崩れない秘訣です。",
    ingredients: [
      { name: "かぼちゃ", amount: 70, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは種とワタを取り、一口大（3cm角）に切る。",
      "小鍋に皮目を下にして並べ、水80ml、醤油、みりん、砂糖、だしの素を加える。",
      "落とし蓋をして中弱火で約8〜10分、竹串がスッと通るまで煮含める。"
    ]
  },
  {
    id: "side_40",
    title: "デリ風かぼちゃとツナのクリーミーマヨサラダ",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "10分",
    approxCostPerPerson: 45,
    flavorType: "mayo",
    tags: ["かぼちゃ", "ツナ缶", "デリ風", "マヨネーズ味", "魚"],
    containsDislikes: ["かぼちゃ", "魚"],
    description: "レンジ加熱したかぼちゃを粗く潰し、ツナとマヨネーズで和えたデリ風サラダ。甘みと塩気のバランスが絶妙。",
    kidsTip: "ツナマヨの旨味がかぼちゃに絡んで青臭さがゼロになり、サラダが苦手な子もおかわりします。",
    tip: "かぼちゃが熱いうちに塩こしょうと酢小さじ1/2を加えておくと、味がボケずにキリッと引き締まります。",
    ingredients: [
      { name: "かぼちゃ", amount: 60, unit: "g", aisle: "野菜" },
      { name: "ツナ缶", amount: 0.3, unit: "缶", aisle: "肉・魚" },
      { name: "マヨネーズ", amount: 10, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは一口大に切り、耐熱ボウルに入れてレンジ（600W）で約3分加熱する。",
      "熱いうちにフォークで粗く潰し、塩こしょう少々を振る。",
      "粗熱が取れたらツナ缶（油を切る）とマヨネーズを加えてざっくり和える。"
    ]
  },
  {
    id: "side_41",
    title: "かぼちゃのサクサク素揚げ 塩バター風味",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["かぼちゃ", "フライパン1つ", "おやつ風", "超時短"],
    containsDislikes: ["かぼちゃ"],
    description: "薄切りかぼちゃを少なめの油でカリッと揚げ焼きにし、熱々のうちに塩とバターを絡めたやみつき副菜。",
    kidsTip: "フライドポテトのようなサクサク食感と自然な甘みで、子供たちの手が止まらなくなります！",
    tip: "厚さ5mm程度にスライスすると、わずか3〜4分の揚げ焼きで中までホクホクに仕上がります。",
    ingredients: [
      { name: "かぼちゃ", amount: 60, unit: "g", aisle: "野菜" },
      { name: "バター", amount: 5, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "かぼちゃは厚さ5mmの薄切りにする。",
      "フライパンに油大さじ2を熱し、かぼちゃを並べて両面がカリッとするまで揚げ焼きにする。",
      "油を切ってボウルに移し、熱いうちにバターと塩ひとつまみを絡める。"
    ]
  },
  {
    id: "side_42",
    title: "かぼちゃとレーズンのヨーグルトサラダ",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "10分",
    approxCostPerPerson: 40,
    tags: ["かぼちゃ", "ヘルシー", "デザート風", "子供大人気"],
    containsDislikes: ["かぼちゃ"],
    description: "潰したかぼちゃにヨーグルトとレーズンを合わせた爽やかサラダ。マヨネーズ控えめでとてもヘルシー。",
    kidsTip: "レーズンの自然な甘みとヨーグルトの酸味がまるでスイーツのようにお子様に大人気！",
    tip: "レーズンは温かいかぼちゃと一緒に混ぜておくと、余熱でふっくら柔らかく戻ります。",
    ingredients: [
      { name: "かぼちゃ", amount: 60, unit: "g", aisle: "野菜" },
      { name: "プレーンヨーグルト", amount: 15, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "レーズン", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは小さめに切ってレンジで3分加熱し、温かいうちにフォークで粗く潰す。",
      "レーズンを加えて混ぜ、粗熱を取る。",
      "ヨーグルト、マヨネーズ小さじ1、塩少々を加えて滑らかに混ぜ合わせる。"
    ]
  },
  {
    id: "side_43",
    title: "キャベツと塩昆布の無限ポリポリ和え",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["キャベツ", "塩昆布", "超時短", "包丁不要"],
    containsDislikes: [],
    description: "手でちぎったキャベツに塩昆布とごま油を揉み込むだけ！キャベツ半玉があっという間になくなる無限副菜。",
    kidsTip: "塩昆布の旨味とごま油の香りで生キャベツ特有の青臭さが消え、ポリポリ楽しく食べられます。",
    tip: "ポリ袋の中で揉めば洗い物ゼロ！冷蔵庫で30分置くと味がさらに馴染んでしんなり美味しくなります。",
    ingredients: [
      { name: "キャベツ", amount: 70, unit: "g", aisle: "野菜" },
      { name: "塩昆布", amount: 5, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツは手で一口大にちぎり、ポリ袋に入れる。",
      "塩昆布、ごま油、いりごまをポリ袋に加える。",
      "袋の上から手でしっかり揉み込み、全体がしんなりしたら器に盛る。"
    ]
  },
  {
    id: "side_44",
    title: "もやしとちくわの中華ごま油ナムル",
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 30,
    tags: ["もやし", "ちくわ", "激安", "レンジ調理"],
    containsDislikes: [],
    description: "レンチンもやしとちくわを鶏ガラスープとごま油で和えた即席ナムル。1人前30円の超節約副菜。",
    kidsTip: "ちくわの甘みと中華風の味付けで、もやしが苦手な子も箸が止まらなくなります。",
    tip: "もやしはレンジ加熱後にザルにあげてしっかり水気を絞ることで、味が薄まらずビシッと決まります。",
    ingredients: [
      { name: "もやし", amount: 60, unit: "g", aisle: "野菜" },
      { name: "ちくわ", amount: 1, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 2, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "もやしは耐熱ボウルに入れてラップをし、レンジで1分半加熱して流水で冷まし水気をしっかり絞る。",
      "ちくわは斜め薄切りにする。",
      "もやし、ちくわ、鶏ガラスープの素、ごま油、醤油少々、白いりごまを和える。"
    ]
  },
  {
    id: "side_45",
    title: "きゅうりと乾燥ワカメのさっぱり酢の物",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5分",
    approxCostPerPerson: 25,
    flavorType: "sour",
    tags: ["酸っぱい味", "きゅうり", "夏バテ予防", "和風基本"],
    containsDislikes: [],
    description: "薄切りきゅうりとワカメの定番酢の物。甘酢仕立てでツンとせず、脂っこいお肉料理の口直しに最適。",
    kidsTip: "お酢に砂糖とだしの素をしっかり溶かして甘めの二杯酢にすることで、子供もむせずに美味しく食べられます。",
    tip: "きゅうりは塩もみしてしっかり水分を絞ることで、時間が経っても水っぽくなりません。",
    ingredients: [
      { name: "きゅうり", amount: 0.4, unit: "本", aisle: "野菜" },
      { name: "乾燥わかめ", amount: 2, unit: "g", aisle: "調味料・その他" },
      { name: "酢", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "きゅうりは小口薄切りにして塩揉みし、5分置いて水気をしっかり絞る。ワカメは水で戻す。",
      "ボウルに酢、砂糖、醤油小さじ1/2、だしの素少々をよく混ぜ合わせる。",
      "きゅうりとワカメを加えて和え、器に盛り付けて白ごまを振る。"
    ]
  },
  {
    id: "side_46",
    title: "人参とツナの沖縄風しりしり炒め",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "8分",
    approxCostPerPerson: 40,
    tags: ["人参", "ツナ缶", "子供大人気", "作り置き", "魚"],
    containsDislikes: ["魚"],
    description: "千切り人参をツナと卵で炒めた沖縄の定番常備菜。人参の甘みがぐんぐん引き出され、冷めても絶品。",
    kidsTip: "ツナと卵の旨味で人参のクセが完全に消え、人参嫌いのお子様が克服する定番No.1メニュー！",
    tip: "スライサーを使って細切りにすれば、わずか3分の炒め時間で火が通りしんなり柔らかくなります。",
    ingredients: [
      { name: "人参", amount: 50, unit: "g", aisle: "野菜" },
      { name: "ツナ缶", amount: 0.3, unit: "缶", aisle: "肉・魚" },
      { name: "卵", amount: 0.3, unit: "個", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "人参は千切り（しりしり）にする。",
      "フライパンにツナの油を熱し、人参をしんなりするまで中火で炒める。",
      "ツナ、醤油・みりん各小さじ1を加え、溶き卵を回し入れて炒め合わせる。"
    ]
  },
  {
    id: "side_47",
    title: "大根とカニカマのシャキシャキ和風マヨサラダ",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "5分",
    approxCostPerPerson: 30,
    flavorType: "mayo",
    tags: ["大根", "カニカマ", "マヨネーズ味", "包丁不要"],
    containsDislikes: [],
    description: "千切り大根とカニカマをマヨポンと鰹節で和えたサラダ。大根のシャキシャキしたみずみずしさが最高！",
    kidsTip: "カニカマの赤い彩りとマヨネーズのコクで、生大根が子供たちの好物サラダに大変身。",
    tip: "大根は千切りにして冷水にサッと放つと、さらにパリッとしたみずみずしい食感になります。",
    ingredients: [
      { name: "大根", amount: 60, unit: "g", aisle: "野菜" },
      { name: "カニカマ", amount: 1.5, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "マヨネーズ", amount: 8, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は細い千切りにし、ペーパーで水気を拭き取る。",
      "ボウルに大根、手で割いたカニカマ、マヨネーズ、ポン酢小さじ1/2を入れる。",
      "全体をさっくり和え、仕上げにかつお節を振りかける。"
    ]
  },
  {
    id: "side_48",
    title: "ほうれん草のツナ胡麻和え",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "8分",
    approxCostPerPerson: 45,
    tags: ["ほうれん草", "ツナ缶", "冬の旬", "鉄分満点", "魚"],
    containsDislikes: ["魚"],
    description: "茹でたほうれん草にツナ缶とすりごま、めんつゆを和えるだけ。ツナのオイルでほうれん草のえぐみが消えます。",
    kidsTip: "ツナとすりごまの甘みでほうれん草独特の苦味が消え、子供たちも喜んで完食します。",
    tip: "ほうれん草はレンジで1分半加熱して冷水に取ると、お湯を沸かす手間なくアク抜き完了！",
    ingredients: [
      { name: "ほうれん草", amount: 50, unit: "g", aisle: "野菜" },
      { name: "ツナ缶", amount: 0.25, unit: "缶", aisle: "肉・魚" },
      { name: "すりごま", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ほうれん草は熱湯でサッと茹でて冷水にとり、水気をしっかり絞って3cm長さに切る。",
      "ボウルにツナ（軽く油を切る）、すりごま、めんつゆ小さじ1を入れる。",
      "ほうれん草を加えてほぐしながらよく和える。"
    ]
  },
  {
    id: "side_49",
    title: "小松菜と油揚げのじゅわっと煮浸し",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["小松菜", "油揚げ", "和風基本", "カルシウム"],
    containsDislikes: [],
    description: "お出汁を吸った油揚げが噛むとじゅわっとジューシー！カルシウム豊富な小松菜を手軽に美味しく摂れる定番副菜。",
    kidsTip: "油揚げの甘いコクとお出汁が小松菜を包み、苦味を感じず柔らかく食べられます。",
    tip: "小松菜は下茹で不要でそのままお出汁で煮るだけ。ビタミンが逃げず時短で作れます。",
    ingredients: [
      { name: "小松菜", amount: 50, unit: "g", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "白だし", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "小松菜は4cm長さに切り、油揚げは短冊切りにする。",
      "小鍋に水100ml、白だし、みりん小さじ1を入れて煮立てる。",
      "油揚げと小松菜の茎を先に入れ、1分後に葉を加えてサッと2分煮て火を止める。"
    ]
  },
  {
    id: "side_50",
    title: "完熟トマトとモッツァレラ風水切り豆腐のカプレーゼ",
    category: "side",
    cuisine: "western",
    season: "summer",
    time: "5分",
    approxCostPerPerson: 40,
    tags: ["トマト", "夏野菜", "豆腐", "カプレーゼ風"],
    containsDislikes: ["トマト"],
    description: "高価なモッツァレラチーズの代わりに塩水切り木綿豆腐を使用！オリーブ油と塩コショウでデリ風の前菜に。",
    kidsTip: "塩をしっかり効かせた豆腐と完熟トマトの組み合わせで、さっぱり食べやすい洋風副菜に。",
    tip: "豆腐に塩を振ってペーパーで包んでおくだけで、本当にモッツァレラのようなもっちり食感に変身！",
    ingredients: [
      { name: "トマト", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "木綿豆腐", amount: 50, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "オリーブオイル", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "木綿豆腐に塩小さじ1/3を振ってペーパーに包み、10分置いて水切りする。",
      "トマトと豆腐をそれぞれ薄切りにする。",
      "皿に交互に並べ、オリーブオイルと黒胡椒を回しかける。"
    ]
  },
  {
    id: "side_51",
    title: "ピーマンとちくわの甘辛きんぴら",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["ピーマン", "ちくわ", "お弁当", "甘辛"],
    containsDislikes: ["ピーマン"],
    description: "シャキシャキのピーマンとちくわをごま油で炒め、甘辛醤油で照りよく仕上げた定番お弁当おかず。",
    kidsTip: "ちくわの旨味とみりんの甘みでピーマンの苦味が中和され、子供もパクパク食べられます。",
    tip: "ピーマンは縦切りにすると繊維が壊れず苦味成分が出にくくなり、甘みが引き立ちます。",
    ingredients: [
      { name: "ピーマン", amount: 1, unit: "個", aisle: "野菜" },
      { name: "ちくわ", amount: 1, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "醤油", amount: 5, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 5, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ピーマンは種を取って縦細切り、ちくわは縦半分に切って細切りにする。",
      "フライパンにごま油を熱し、ちくわとピーマンを強火で2分炒める。",
      "醤油、みりん、砂糖各小さじ1を加え、汁気がなくなるまで炒め合わせて白ごまを振る。"
    ]
  },
  {
    id: "side_52",
    title: "ナスと大葉のとろとろ焼き浸し",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "10分",
    approxCostPerPerson: 40,
    tags: ["なす", "夏野菜", "作り置き", "冷やして美味しい"],
    containsDislikes: ["なす"],
    description: "多めの油でこんがり焼いたナスに、冷たいめんつゆだしがジュワッと染み込んだ夏の風物詩。",
    kidsTip: "皮に細かく格子状の切り込みを入れておくと柔らかく噛み切れ、皮が口に残りません。",
    tip: "熱々の焼きたてナスを冷たいめんつゆにジュッと漬けることで、短時間で芯まで味が染み込みます。",
    ingredients: [
      { name: "なす", amount: 1, unit: "本", aisle: "野菜" },
      { name: "大葉", amount: 1, unit: "枚", aisle: "野菜" },
      { name: "めんつゆ", amount: 15, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ナスはヘタを取り縦半分に切り、皮目に細かく斜めの切り込みを入れて水気を拭く。",
      "フライパンに油大さじ1を熱し、ナスを皮目から中火で両面しんなりするまで焼く。",
      "めんつゆと水50mlを合わせた容器に熱いナスを漬け、千切り大葉を添える。"
    ]
  },
  {
    id: "side_53",
    title: "えのきとワカメのさっぱりポン酢和え",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 25,
    flavorType: "sour",
    tags: ["きのこ", "酸っぱい味", "食物繊維", "超時短"],
    containsDislikes: ["きのこ"],
    description: "サッと茹でたえのきと戻したワカメをポン酢とごま油で和えるだけ。ツルツルした喉越しが心地よい箸休め。",
    kidsTip: "ポン酢とごま油のさっぱりした味わいで、きのこ特有の匂いが気にならず食べやすいです。",
    tip: "えのきはレンジで1分チンするだけでもOK！火を使わず5分で作れる優秀スピード副菜。",
    ingredients: [
      { name: "えのき", amount: 40, unit: "g", aisle: "野菜" },
      { name: "乾燥わかめ", amount: 2, unit: "g", aisle: "調味料・その他" },
      { name: "ポン酢", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "えのきは石づきを落として半分の長さに切り、熱湯で1分サッと茹でて湯切りする。",
      "水で戻したワカメの水気をしっかり絞る。",
      "ボウルにえのき、ワカメ、ポン酢、ごま油少々を加えて和える。"
    ]
  },
  {
    id: "side_54",
    title: "しめじとベーコンの香ばしバターソテー",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "5分",
    approxCostPerPerson: 45,
    tags: ["きのこ", "ベーコン", "洋風", "子供大人気"],
    containsDislikes: ["きのこ"],
    description: "香ばしく炒めたベーコンの塩気ときのこの旨味がバターで溶け合う、洋食の定番ソテー。",
    kidsTip: "ベーコンの旨味とバターの香りでしめじの苦味が消え、子供たちも大好きな味付けです。",
    tip: "きのこはあまり動かさずに焼き色をつけるように炒めると、香ばしさが格段にアップします。",
    ingredients: [
      { name: "しめじ", amount: 40, unit: "g", aisle: "野菜" },
      { name: "ハーフベーコン", amount: 1, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "バター", amount: 5, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "しめじは石づきを落としてほぐし、ベーコンは1cm幅に切る。",
      "フライパンにバターを熱し、ベーコンとしめじを入れて中火で炒める。",
      "しめじがしんなりして焼き色がついてきたら、塩こしょうと醤油少々で味を調える。"
    ]
  },
  {
    id: "side_55",
    title: "長ネギのとろとろ焼きネギ味噌",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["長ネギ", "冬の旬", "香ばしい", "和風基本"],
    containsDislikes: ["長ネギ"],
    description: "じっくり焼いて甘みを引き出した長ネギに、甘辛い味噌ダレをジュワッと絡めた冬のあったか副菜。",
    kidsTip: "しっかり焼き目をつけて蒸らすとネギのツンとした辛味が完全に消え、驚くほど甘くなります。",
    tip: "フタをして弱火で蒸し焼きにすることで、ネギの芯までトロットロに柔らかくなります。",
    ingredients: [
      { name: "長ネギ", amount: 0.5, unit: "本", aisle: "野菜" },
      { name: "味噌", amount: 8, unit: "g", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "長ネギは3cm長さに切り、包丁で浅く斜めの切り込みを入れる。",
      "フライパンにごま油を熱し、長ネギを転がしながら中火でこんがり焼き色をつける。",
      "味噌、みりん、砂糖各小さじ1を合わせたタレを加え、全体に絡め炒める。"
    ]
  },
  {
    id: "side_56",
    title: "豆苗とカニカマのふんわり玉子炒め",
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "6分",
    approxCostPerPerson: 35,
    tags: ["豆苗", "カニカマ", "卵料理", "超時短"],
    containsDislikes: ["豆苗"],
    description: "彩り鮮やか！シャキシャキ豆苗とカニカマの赤、卵の黄色で食卓が一気に華やぐスピード節約副菜。",
    kidsTip: "卵とカニカマの自然な甘みが加わることで、青菜特有のクセを感じずに完食できます。",
    tip: "卵を半熟で一度取り出し、豆苗を炒めてから戻すことで水っぽくならず美しく仕上がります。",
    ingredients: [
      { name: "豆苗", amount: 0.3, unit: "袋", aisle: "野菜" },
      { name: "カニカマ", amount: 1.5, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "卵", amount: 0.5, unit: "個", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "豆苗は根元を落として長さを半分に切り、カニカマは割く。",
      "フライパンに油を熱し、溶き卵を入れて強火でサッと炒めて半熟で取り出す。",
      "豆苗とカニカマを強火で30秒炒め、塩コショウ・鶏ガラ少々で味付けし、卵を戻し合わせる。"
    ]
  },
  {
    id: "side_57",
    title: "ブロッコリーのおかかマヨ和え",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 40,
    flavorType: "mayo",
    tags: ["ブロッコリー", "マヨネーズ味", "お弁当", "超時短"],
    containsDislikes: [],
    description: "レンチンブロッコリーにかつお節とマヨ醤油を和えるだけ。かつお節が水分を吸って旨味をギュッと閉じ込めます。",
    kidsTip: "マヨネーズとだしの旨味はお子様に大好評！ブロッコリーの房におかかが絡んで食べやすいです。",
    tip: "お弁当に入れても水気が出ない優秀おかず。ブロッコリーは冷凍でも美味しく作れます。",
    ingredients: [
      { name: "ブロッコリー", amount: 50, unit: "g", aisle: "野菜" },
      { name: "かつお節", amount: 1, unit: "g", aisle: "調味料・その他" },
      { name: "マヨネーズ", amount: 8, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ブロッコリーは小房に分け、耐熱容器に入れてレンジ（600W）で1分半加熱する。",
      "ペーパーで水気をしっかり拭き取る。",
      "ボウルにかつお節、マヨネーズ、醤油小さじ1/2を入れて混ぜ、ブロッコリーを加えて和える。"
    ]
  },
  {
    id: "side_58",
    title: "もやしときゅうりのピリ辛中華ナムル",
    category: "side",
    cuisine: "chinese",
    season: "summer",
    time: "6分",
    approxCostPerPerson: 25,
    flavorType: "spicy",
    tags: ["もやし", "きゅうり", "辛い味付け", "おつまみ"],
    containsDislikes: [],
    description: "シャキシャキの冷たいもやしときゅうりを豆板醤とごま油で和えた、暑い日にぴったりのピリ辛副菜。",
    kidsTip: "子供向けには豆板醤を抜いてごま油と醤油だけで作れば、さっぱり中華サラダとして大喜び！",
    tip: "もやしときゅうりの水分をしっかり絞るのが、味がぼやけずお店のような味になる最大のポイント。",
    ingredients: [
      { name: "もやし", amount: 50, unit: "g", aisle: "野菜" },
      { name: "きゅうり", amount: 0.3, unit: "本", aisle: "野菜" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "もやしはレンジで1分半加熱して流水で冷まし水気をしっかり絞る。きゅうりは細切りにする。",
      "ボウルにごま油、醤油小さじ1、鶏ガラスープの素少々、お好みで豆板醤微量を混ぜる。",
      "もやしときゅうりを加えて和え、白ごまを振る。"
    ]
  },
  {
    id: "side_59",
    title: "レンコンと人参のシャキシャキきんぴら",
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "10分",
    approxCostPerPerson: 40,
    tags: ["レンコン", "秋の旬", "和風基本", "食物繊維"],
    containsDislikes: [],
    description: "レンコンの歯ざわりが心地よい甘辛きんぴら。噛む回数が増えて満足感アップ＆食物繊維たっぷり。",
    kidsTip: "薄めのいちょう切りにして甘辛く照りよく炒めることで、子供たちもスナック感覚でよく噛んで食べます。",
    tip: "レンコンを切った後サッと酢水にさらすと、変色を防いで白く綺麗な仕上がりになります。",
    ingredients: [
      { name: "レンコン", amount: 50, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 20, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 6, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 6, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "レンコンは厚さ2mmのいちょう切り、人参は細切りにする。",
      "フライパンにごま油を熱し、レンコンと人参を透き通るまで中強火で炒める。",
      "醤油、みりん、砂糖各小さじ1を加え、汁気がなくなるまで手早く炒め絡める。"
    ]
  },
  {
    id: "side_60",
    title: "大根と油揚げの田舎風ほっこり煮物",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "15分",
    approxCostPerPerson: 30,
    tags: ["大根", "油揚げ", "冬の旬", "ほっこり和食"],
    containsDislikes: [],
    description: "おだしの旨味がじゅわ〜っと染み込んだ大根と油揚げの優しい煮物。夕飯の副菜にほっと落ち着く味わい。",
    kidsTip: "大根を乱切りにしてじっくり柔らかく煮ることで、甘口の出汁を吸って子供も喜んで食べます。",
    tip: "大根をレンジで2分下加熱してから煮ると、わずか8分で味が芯まで染み込みます。",
    ingredients: [
      { name: "大根", amount: 70, unit: "g", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "めんつゆ", amount: 15, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は一口大の乱切りにしレンジで2分加熱。油揚げは短冊切りにする。",
      "小鍋に水120ml、めんつゆ、大根、油揚げを入れて火にかける。",
      "落とし蓋をして弱火で約8〜10分、煮汁が少し減るまでコトコト煮る。"
    ]
  },
  {
    id: "side_61",
    title: "白菜とツナのうま塩昆布レンジ蒸し",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "6分",
    approxCostPerPerson: 35,
    tags: ["白菜", "ツナ缶", "レンジ調理", "包丁不要", "魚"],
    containsDislikes: ["魚"],
    description: "白菜とツナ缶、塩昆布を耐熱ボウルに入れてチンするだけ！白菜の水分とツナの脂で極上の旨味蒸しに。",
    kidsTip: "ツナと塩昆布のダブルの出汁で白菜がトロトロになり、野菜が苦手な子も残さずペロリ。",
    tip: "温かいままでも美味しいですが、冷蔵庫で冷やすと味が馴染んで箸休めに最高です。",
    ingredients: [
      { name: "白菜", amount: 80, unit: "g", aisle: "野菜" },
      { name: "ツナ缶", amount: 0.25, unit: "缶", aisle: "肉・魚" },
      { name: "塩昆布", amount: 4, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜はざく切りにして耐熱容器に入れる。",
      "ツナ缶（油ごと）と塩昆布を乗せ、ふんわりラップをしてレンジ（600W）で3分加熱する。",
      "全体を底からしっかり混ぜ合わせ、ごま油数滴を回しかける。"
    ]
  },
  {
    id: "side_62",
    title: "ごぼうと人参の定番シャキシャキきんぴら",
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "12分",
    approxCostPerPerson: 35,
    tags: ["ごぼう", "人参", "食物繊維", "和風基本"],
    containsDislikes: [],
    description: "豊かな土の香りとシャキッとした歯ざわり。甘辛いタレとごま油の風味が香る和食の王道きんぴら。",
    kidsTip: "ささがきを薄めにし、みりんで照りよく甘辛く炒めると子供たちもよく噛んで美味しく食べてくれます。",
    tip: "ごぼうは皮をタワシや包丁の背で軽くこそげ落とす程度にすると、香りと旨味が失われません。",
    ingredients: [
      { name: "ごぼう", amount: 40, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 20, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ごぼうはささがきにして水にサッとさらし、人参は千切りにする。",
      "フライパンにごま油を熱し、水気を切ったごぼうと人参をしんなりするまで中火で炒める。",
      "醤油、みりん、砂糖各小さじ1を加え、汁気がなくなるまで炒り煮にして白ごまを振る。"
    ]
  },
  {
    id: "side_63",
    title: "キャベツとウインナーの洋風コンソメ蒸し",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "8分",
    approxCostPerPerson: 45,
    tags: ["キャベツ", "ウインナー", "洋風", "子供大人気"],
    containsDislikes: [],
    description: "ウインナーの旨味が甘いキャベツに染み渡るコンソメ蒸し。フライパンに重ねて蒸すだけで完成。",
    kidsTip: "ウインナーが入っているだけで子供たちの食いつきが段違い！キャベツも柔らかくて食べやすいです。",
    tip: "少しだけバターを加えると、コクが増してまるでポトフのような深みのある味わいに。",
    ingredients: [
      { name: "キャベツ", amount: 70, unit: "g", aisle: "野菜" },
      { name: "ウインナー", amount: 1, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "コンソメ", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツはざく切り、ウインナーは斜め薄切りにする。",
      "フライパンにキャベツ、ウインナー、水大さじ2、コンソメ顆粒を入れてフタをする。",
      "中火で約3〜4分蒸し焼きにし、全体をさっと混ぜて黒こしょうを振る。"
    ]
  },
  {
    id: "side_64",
    title: "豆腐と角切りトマトの和風ごまドレサラダ",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5分",
    approxCostPerPerson: 35,
    tags: ["トマト", "木綿豆腐", "ヘルシー", "夏野菜"],
    containsDislikes: ["トマト"],
    description: "冷たい豆腐とジューシーな角切りトマトを合わせた和風冷奴サラダ。すりごま醤油ダレが良く合います。",
    kidsTip: "甘口のすりごまドレッシングをかけるとトマトの酸味が和らぎ、ひんやり美味しく食べられます。",
    tip: "豆腐をしっかり冷やしておき、食べる直前にタレをかけると水っぽくなりません。",
    ingredients: [
      { name: "木綿豆腐", amount: 60, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "トマト", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "すりごま", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "木綿豆腐とトマトは1.5cm角に切る。",
      "器に豆腐とトマトを交互に盛り付ける。",
      "すりごま、醤油小さじ1、ごま油小さじ1/2、砂糖少々を混ぜ合わせたタレをかける。"
    ]
  },
  {
    id: "side_65",
    title: "春雨と人参ときゅうりの中華風春雨サラダ",
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "10分",
    approxCostPerPerson: 35,
    tags: ["春雨", "中華定番", "子供大人気", "作り置き"],
    containsDislikes: [],
    description: "ツルツル食感が子供たちに大人気！甘酸っぱい中華ダレが染み込んだ給食風の春雨サラダ。",
    kidsTip: "甘酸っぱくてちゅるちゅる食べられる春雨サラダは、子供たちが争うように食べる人気No.1副菜！",
    tip: "春雨は茹でた後、熱いうちに調味料（酢・砂糖・醤油）を吸わせると味が奥まで染み込みます。",
    ingredients: [
      { name: "春雨（乾燥）", amount: 15, unit: "g", aisle: "調味料・その他" },
      { name: "きゅうり", amount: 0.3, unit: "本", aisle: "野菜" },
      { name: "人参", amount: 15, unit: "g", aisle: "野菜" },
      { name: "ハム", amount: 1, unit: "枚", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "春雨と千切り人参を熱湯で3分茹でて湯切りし、粗熱を取る。きゅうりとハムは千切りにする。",
      "ボウルに酢・醤油各小さじ1、砂糖小さじ1.5、ごま油小さじ1/2を混ぜ合わせる。",
      "春雨、きゅうり、人参、ハムを加えてしっかり和え、白ごまを振る。"
    ]
  },
  {
    id: "side_66",
    title: "新じゃがいもの塩昆布バター蒸し",
    category: "side",
    cuisine: "western",
    season: "spring",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["じゃがいも", "春の旬", "塩昆布", "レンジ調理"],
    containsDislikes: [],
    description: "ほくほくのじゃがいもにバターの香りと塩昆布の旨味が絡み合う、簡単なのに贅沢な味わいの副菜。",
    kidsTip: "じゃがバターの香りと甘みで、子供たちがおやつ感覚で喜んでモリモリ食べます。",
    tip: "新じゃがの季節なら皮ごと綺麗に洗って調理OK！皮の香ばしさがアクセントになります。",
    ingredients: [
      { name: "じゃがいも", amount: 1, unit: "個", aisle: "野菜" },
      { name: "バター", amount: 5, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "塩昆布", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいもは皮をむいて一口大に切り、水にサッとさらす。",
      "耐熱容器に入れてラップをし、レンジ（600W）で約3分竹串がスッと通るまで加熱する。",
      "熱いうちにバターと塩昆布を加え、じゃがいもを軽く崩しながら絡める。"
    ]
  },
  {
    id: "side_67",
    title: "ナスのカリッと甘酢照り焼き",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["なす", "夏野菜", "甘酢照り焼き", "フライパン1つ"],
    containsDislikes: ["なす"],
    description: "片栗粉をまぶしてカリッと焼いたナスに甘酢醤油タレをジュワッと絡めた、うなぎ蒲焼き風の極上ナスおかず。",
    kidsTip: "外側カリッ中とろとろの食感と甘酸っぱい味付けで、ナスが苦手なお子様にも大ヒット！",
    tip: "ナスに片栗粉をまぶすことで油の吸いすぎを防ぎ、少ない油でもカリッと揚がります。",
    ingredients: [
      { name: "なす", amount: 1, unit: "本", aisle: "野菜" },
      { name: "醤油", amount: 6, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 6, unit: "ml", aisle: "調味料・その他" },
      { name: "酢", amount: 4, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ナスは1cm厚さの輪切りにし、片栗粉を薄くまぶす。",
      "フライパンに油大さじ1を熱し、ナスを並べて両面カリッときつね色に焼く。",
      "醤油、みりん、酢、砂糖各小さじ1を合わせたタレを回し入れ、素早く照りよく絡める。"
    ]
  },
  {
    id: "side_68",
    title: "ピーマンと塩昆布の無限レンジ和え",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "4分",
    approxCostPerPerson: 30,
    tags: ["ピーマン", "夏野菜", "超時短", "レンジ調理"],
    containsDislikes: ["ピーマン"],
    description: "細切りピーマンをレンジで1分チンして塩昆布とごま油で和えるだけ。苦味が完全に抜けて驚くほど美味しい！",
    kidsTip: "加熱することでピーマン特有の青臭さが消え、塩昆布の旨味で子供たちもパクパク食べられます。",
    tip: "火を使わずに4分でできるので、夕飯作りのあと1品にこれ以上ないスピード副菜です。",
    ingredients: [
      { name: "ピーマン", amount: 1.5, unit: "個", aisle: "野菜" },
      { name: "塩昆布", amount: 4, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ピーマンは種を取って縦細切りにし、耐熱ボウルに入れる。",
      "ふんわりラップをしてレンジ（600W）で1分加熱する。",
      "塩昆布、ごま油、白ごまを加えて全体をよく和える。"
    ]
  },
  {
    id: "side_69",
    title: "ちくわと長ネギの香ばし磯部炒め",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 30,
    tags: ["ちくわ", "長ネギ", "青のり", "フライパン1つ"],
    containsDislikes: ["長ネギ"],
    description: "ちくわとネギをごま油で炒めて青のりと醤油をジュワッ！磯の香りがふわっと広がる節約おつまみ副菜。",
    kidsTip: "青のりとちくわの風味がポテトチップスののり塩味のようで、子供たちも大喜び！",
    tip: "ちくわにしっかり焼き色がつくまで炒めることで、香ばしさがグンと引き立ちます。",
    ingredients: [
      { name: "ちくわ", amount: 1.5, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "長ネギ", amount: 0.3, unit: "本", aisle: "野菜" },
      { name: "青のり", amount: 1, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ちくわは乱切り、長ネギは斜め薄切りにする。",
      "フライパンにごま油を熱し、ちくわと長ネギを強火で焼き色がつくまで炒める。",
      "醤油小さじ1を鍋肌から回し入れ、火を止めて青のりを全体にまぶす。"
    ]
  },
  {
    id: "side_70",
    title: "もやしとふんわり卵の優しい中華炒め",
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "6分",
    approxCostPerPerson: 30,
    tags: ["もやし", "卵料理", "超時短", "激安"],
    containsDislikes: [],
    description: "シャキシャキもやしとふんわり卵を鶏ガラスープで優しい味付けに仕上げた、飽きのこないデイリー副菜。",
    kidsTip: "卵が甘くてマイルドなので、野菜が苦手な子も卵と一緒にスプーンですくって完食してくれます。",
    tip: "卵を半熟にしてから一度皿に取り出し、もやしを炒めてから戻すと水っぽくなりません。",
    ingredients: [
      { name: "もやし", amount: 70, unit: "g", aisle: "野菜" },
      { name: "卵", amount: 0.5, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "卵を溶きほぐし、油を熱したフライパンで強火で半熟に炒めて一度取り出す。",
      "同じフライパンでもやしを強火で1分サッと炒める。",
      "鶏ガラスープの素、塩こしょうを振り、卵を戻して手早く合わせる。"
    ]
  },
  {
    id: "side_71",
    title: "キャベツと大葉の爽やか塩もみ浅漬け",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["キャベツ", "大葉", "箸休め", "包丁不要"],
    containsDislikes: [],
    description: "ポリ袋で揉むだけ！キャベツの甘みと大葉の爽やかな香りで、脂っこいお肉料理の最高の箸休めになります。",
    kidsTip: "大葉の香りが爽やかで、塩分控えめでもキャベツ本来の甘みで子供もパクパク食べます。",
    tip: "キャベツに塩を揉み込んで5分置き、ギュッと絞るだけでカサが1/3に減ってたくさん食べられます。",
    ingredients: [
      { name: "キャベツ", amount: 70, unit: "g", aisle: "野菜" },
      { name: "大葉", amount: 1, unit: "枚", aisle: "野菜" }
    ],
    instructions: [
      "キャベツは一口大にちぎり、大葉は千切りにしてポリ袋に入れる。",
      "塩小さじ1/3と昆布茶（またはだしの素）少々を加えて袋の上からよく揉む。",
      "5分ほど置いて水気を軽く絞って器に盛る。"
    ]
  },
  {
    id: "side_72",
    title: "人参と大根のさっぱり紅白なます",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "8分",
    approxCostPerPerson: 25,
    flavorType: "sour",
    tags: ["人参", "大根", "酸っぱい味", "作り置き"],
    containsDislikes: [],
    description: "お正月だけでなく普段の夕飯にもぴったり！甘酸っぱいお酢の力で消化を助け、箸休めにも最適。",
    kidsTip: "酸味をお砂糖でまろやかに調えると、子供たちもシャキシャキ食感を楽しみながら食べてくれます。",
    tip: "しっかり塩もみして水分を抜くことで、冷蔵庫で4〜5日美味しく日持ちする常備菜になります。",
    ingredients: [
      { name: "大根", amount: 50, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 20, unit: "g", aisle: "野菜" },
      { name: "酢", amount: 10, unit: "ml", aisle: "調味料・その他" },
      { name: "砂糖", amount: 6, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根と人参は千切りにし、塩少々を振って5分置き、水気をギュッとしっかり絞る。",
      "ボウルに酢、砂糖、塩ひとつまみをよく混ぜ合わせて甘酢を作る。",
      "大根と人参を加えて和え、白ごまを振る。"
    ]
  },
  {
    id: "side_73",
    title: "小松菜とちくわの香ばし胡麻和え",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "6分",
    approxCostPerPerson: 35,
    tags: ["小松菜", "ちくわ", "和風基本", "レンジ調理"],
    containsDislikes: [],
    description: "レンジ加熱した小松菜とちくわを、たっぷりのすりごまとお醤油で和えた定番の和風副菜。",
    kidsTip: "すりごまの甘みとちくわの旨味で、青菜が苦手なお子様も自分から進んで食べてくれます。",
    tip: "小松菜は水気をしっかり絞ってから和えることで、味が薄まらずにごまの香りが引き立ちます。",
    ingredients: [
      { name: "小松菜", amount: 50, unit: "g", aisle: "野菜" },
      { name: "ちくわ", amount: 1, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "すりごま", amount: 4, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "小松菜は3cm長さに切り、耐熱容器に入れてレンジで1分半加熱し、流水で冷まして水気を絞る。",
      "ちくわは薄い輪切りにする。",
      "ボウルに小松菜、ちくわ、すりごま、醤油・砂糖各小さじ1を加えてよく和える。"
    ]
  },
  {
    id: "side_74",
    title: "えのきの自家製レンジなめ茸風",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["きのこ", "常備菜", "レンジ調理", "ご飯泥棒"],
    containsDislikes: ["きのこ"],
    description: "市販の瓶詰めなめ茸を買うよりずっと安くて無添加！レンジで2分加熱するだけで驚くほど美味しく完成。",
    kidsTip: "甘辛いとろみのある味付けで、ご飯にかけたり豆腐に乗せたりすると子供たちも夢中で食べます。",
    tip: "清潔な容器に入れて冷蔵保存すれば1週間日持ちし、毎朝のご飯のお供にも大活躍！",
    ingredients: [
      { name: "えのき", amount: 50, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "えのきは石づきを切り落とし、2cm長さに切って耐熱ボウルに入れる。",
      "醤油、みりん、砂糖各小さじ1、酢小さじ1/2を加えて軽く混ぜる。",
      "ふんわりラップをしてレンジ（600W）で約2分加熱し、熱いうちによく混ぜ合わせてとろみを出す。"
    ]
  },
  {
    id: "side_75",
    title: "オクラとちくわの梅ポン酢和え",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5分",
    approxCostPerPerson: 35,
    flavorType: "sour",
    tags: ["オクラ", "ちくわ", "夏野菜", "酸っぱい味"],
    containsDislikes: [],
    description: "ネバネバのオクラとちくわを梅肉とポン酢で和えたさっぱり副菜。夏バテで食欲がない時にもつるりと入ります。",
    kidsTip: "星形のオクラと輪切りのちくわが可愛らしく、見た目から喜んで食べてくれます。",
    tip: "オクラは塩を振って板ずりし、ラップで包んでレンジで30秒加熱すればお湯を沸かす必要なし！",
    ingredients: [
      { name: "オクラ", amount: 2, unit: "本", aisle: "野菜" },
      { name: "ちくわ", amount: 1, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "ポン酢", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "オクラはレンジで30秒加熱して冷水に取り、小口切りにする。ちくわは薄い輪切りにする。",
      "ボウルに叩いた梅干し少々、ポン酢、かつお節を合わせる。",
      "オクラとちくわを加えてネバりが出るまで和える。"
    ]
  },
  {
    id: "side_76",
    title: "里芋のほっくり甘辛煮物",
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "15分",
    approxCostPerPerson: 45,
    tags: ["里芋", "秋の旬", "和風基本", "ほっこり"],
    containsDislikes: [],
    description: "ねっとりホクホクした里芋に、甘辛いお出汁が中までじんわり染み込んだ素朴で懐かしい和の副菜。",
    kidsTip: "冷凍里芋を使えば皮むきのぬめりもゼロで簡単！お餅のような柔らかさで子供も大好き。",
    tip: "下茹で済みの冷凍里芋を使うと、皮むき不要＆煮崩れなしで10分で美味しく完成します。",
    ingredients: [
      { name: "里芋（生または冷凍）", amount: 60, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" },
      { name: "みりん", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "小鍋に水100ml、だしの素、醤油、みりん、砂糖各小さじ1を入れて煮立てる。",
      "一口大の里芋を加え、落とし蓋をして弱火で約10〜12分煮る。",
      "竹串がスッと通るまで柔らかくなったら、火を強めて煮汁を少し煮絡める。"
    ]
  },
  {
    id: "side_77",
    title: "豆苗ともやしの豚巻きレンジ蒸し副菜",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "8分",
    approxCostPerPerson: 50,
    tags: ["豆苗", "もやし", "レンジ調理", "ボリューム副菜"],
    containsDislikes: ["豆苗"],
    description: "少量の豚こまで豆苗ともやしを巻いてレンジで蒸した、主菜級の満足感があるヘルシーボリューム副菜。",
    kidsTip: "ポン酢やゴマだれをかけると豚肉の脂と野菜が一体になり、パクパク食べてくれます。",
    tip: "巻き終わりを下にして耐熱皿に並べると、爪楊枝を使わなくても崩れずに仕上がります。",
    ingredients: [
      { name: "豚こま肉", amount: 25, unit: "g", aisle: "肉・魚" },
      { name: "豆苗", amount: 0.2, unit: "袋", aisle: "野菜" },
      { name: "もやし", amount: 30, unit: "g", aisle: "野菜" },
      { name: "ポン酢", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "豚肉を広げ、豆苗ともやしを芯にしてくるくると巻く。",
      "耐熱皿に巻き終わりを下にして並べ、酒少々を振ってラップをしレンジで2分半加熱する。",
      "ポン酢を回しかけ、お好みで白ごまを振る。"
    ]
  },
  {
    id: "side_78",
    title: "白菜のシャキシャキ浅漬け ゆず風味",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["白菜", "冬の旬", "浅漬け", "包丁不要"],
    containsDislikes: [],
    description: "冬の甘い白菜をポリ袋で揉むだけの即席浅漬け。ゆず果汁（またはポン酢）の香りで爽やかに。",
    kidsTip: "塩分控えめで白菜の自然な甘みが引き立つため、サラダ感覚で子供たちもパリパリ食べます。",
    tip: "芯の部分は繊維に沿って薄切りにすると、短時間でも味がしっかり染み込みます。",
    ingredients: [
      { name: "白菜", amount: 80, unit: "g", aisle: "野菜" },
      { name: "塩", amount: 1, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜は一口大のざく切りにし、ポリ袋に入れる。",
      "塩小さじ1/3、昆布茶少々、ゆず果汁（またはレモン汁）少々を加える。",
      "袋の上からよく揉み込み、空気を抜いて口を縛り10分置いて水気を軽く切る。"
    ]
  },
  {
    id: "side_79",
    title: "きゅうりと長芋のたたき梅ポン酢和え",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5分",
    approxCostPerPerson: 40,
    flavorType: "sour",
    tags: ["きゅうり", "長芋", "酸っぱい味", "夏野菜"],
    containsDislikes: [],
    description: "叩いたきゅうりと長芋のサクサク・シャキシャキした心地よい食感！梅ポン酢で和えた疲労回復副菜。",
    kidsTip: "麺棒で叩く工程は子供たちもお手伝い大好き！梅の酸味を抑えめにしてポン酢でマイルドに。",
    tip: "包丁で切るより麺棒等で叩いて割れ目を作ることで、断面から味が瞬時に染み込みます。",
    ingredients: [
      { name: "きゅうり", amount: 0.4, unit: "本", aisle: "野菜" },
      { name: "長芋", amount: 40, unit: "g", aisle: "野菜" },
      { name: "ポン酢", amount: 10, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "きゅうりと長芋はポリ袋に入れ、麺棒等で一口大に叩き割る。",
      "叩いた梅干し少々、ポン酢、ごま油数滴を袋に加える。",
      "袋を軽く揉んで全体を和え、器に盛ってかつお節を添える。"
    ]
  },
  {
    id: "side_80",
    title: "じゃがいもとコーンの甘口バターソテー",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["じゃがいも", "コーン缶", "子供大人気", "フライパン1つ"],
    containsDislikes: [],
    description: "ホクホクじゃがいもと甘いコーンをバターと醤油で香ばしく炒め合わせた、お子様人気間違いなしの副菜。",
    kidsTip: "コーンの粒々の甘みとバター醤油の香りで、大人も子供も争うように手が伸びる大人気メニュー。",
    tip: "じゃがいもはレンジで先に柔らかくしておけば、フライパンでバターを絡めて2分炒めるだけで完成！",
    ingredients: [
      { name: "じゃがいも", amount: 1, unit: "個", aisle: "野菜" },
      { name: "コーン缶", amount: 20, unit: "g", aisle: "野菜" },
      { name: "バター", amount: 5, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "じゃがいもは皮をむいて一口大に切り、レンジで2分半加熱して柔らかくする。",
      "フライパンにバターを熱し、じゃがいもとコーンを入れて中火で香ばしく炒める。",
      "醤油小さじ1/2と塩こしょう少々を回し入れ、全体にサッと絡める。"
    ]
  },
  // =================================================================
  // 【追加 汁物 (Soup)】- soup_36 〜 soup_64 (全29品追加)
  // =================================================================
  {
    id: "soup_36",
    title: "濃厚かぼちゃと玉ねぎの節約ポタージュ",
    category: "soup",
    cuisine: "western",
    season: "autumn",
    time: "10分",
    approxCostPerPerson: 40,
    tags: ["かぼちゃ", "秋の旬", "ポタージュ", "子供大人気"],
    containsDislikes: ["かぼちゃ"],
    description: "生クリーム不要！レンジ加熱したかぼちゃを潰して牛乳とコンソメで伸ばすだけの本格濃厚ポタージュ。",
    kidsTip: "自然なかぼちゃの甘みが引き立ち、野菜嫌いなお子様もスイーツ感覚でゴクゴク飲み干します。",
    tip: "フォークやマッシャーでしっかり潰すだけでミキサー要らず。皮を少し残すと彩りも豊かになります。",
    ingredients: [
      { name: "かぼちゃ", amount: 60, unit: "g", aisle: "野菜" },
      { name: "牛乳", amount: 80, unit: "ml", aisle: "大豆・乳・加工品" },
      { name: "コンソメ", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは皮を少し削ぎ落として一口大に切り、レンジで3分柔らかくなるまで加熱する。",
      "熱いうちにフォークで滑らかになるまでしっかり潰す。",
      "小鍋に潰したかぼちゃ、牛乳、水50ml、コンソメを入れて弱火で温め、塩少々で味を調える。"
    ]
  },
  {
    id: "soup_37",
    title: "かぼちゃと油揚げのお味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["かぼちゃ", "油揚げ", "秋の旬", "和風基本"],
    containsDislikes: ["かぼちゃ"],
    description: "甘いホクホクかぼちゃとコクのある油揚げのお味噌汁。どこか懐かしく心がほっと温まる一杯。",
    kidsTip: "かぼちゃの甘みがお味噌汁に溶け出し、まろやかな優しい味になるので子供も大好き。",
    tip: "かぼちゃを薄切りにすることで、わずか5分の煮込み時間で柔らかく仕上がります。",
    ingredients: [
      { name: "かぼちゃ", amount: 50, unit: "g", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは5mm厚さの薄切り、油揚げは短冊切りにする。",
      "鍋に水180ml、だしの素、かぼちゃ、油揚げを入れて火にかける。",
      "かぼちゃが柔らかくなったら火を弱め、味噌を溶き入れてひと煮立ち直前に火を止める。"
    ]
  },
  {
    id: "soup_38",
    title: "かぼちゃと豆乳のまろやか和風スープ",
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "10分",
    approxCostPerPerson: 40,
    tags: ["かぼちゃ", "豆乳", "和風スープ", "ヘルシー"],
    containsDislikes: ["かぼちゃ"],
    description: "ほくほくかぼちゃを和風だしと無調整豆乳で伸ばした、クリーミーで体に優しい和風ポタージュ。",
    kidsTip: "豆乳のまろやかさとかぼちゃの甘みが合わさり、離乳食から幼児食まで安心して飲める優しい味。",
    tip: "豆乳は沸騰させると分離しやすいので、加えたら弱火で温める程度にするのが滑らかに保つコツ。",
    ingredients: [
      { name: "かぼちゃ", amount: 50, unit: "g", aisle: "野菜" },
      { name: "無調整豆乳", amount: 80, unit: "ml", aisle: "大豆・乳・加工品" },
      { name: "白だし", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "かぼちゃは小さめに切ってレンジで2分半加熱し、フォークで潰す。",
      "小鍋に水50ml、白だし、潰したかぼちゃを入れて混ぜながら温める。",
      "豆乳を加えて弱火で温め、沸騰する直前で火を止めて塩で味を調える。"
    ]
  },
  {
    id: "soup_39",
    title: "具沢山！おかずになる節約豚汁",
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "15分",
    approxCostPerPerson: 55,
    tags: ["大根", "豚こま肉", "具沢山", "冬の旬", "ごちそう汁"],
    containsDislikes: [],
    description: "豚こまの旨味と大根、人参、油揚げがぎっしり詰まった食べるお味噌汁。これ1杯で栄養満点！",
    kidsTip: "お肉とお野菜の出汁がたっぷり染み出た甘みのあるスープで、野菜嫌いな子もモリモリ食べられます。",
    tip: "最初に具材をごま油でサッと炒めてから煮込むことで、コクが倍増して冷めにくい熱々豚汁になります。",
    ingredients: [
      { name: "豚こま肉", amount: 30, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 40, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 20, unit: "g", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根、人参はいちょう切り、油揚げは短冊切りにする。",
      "鍋にごま油を熱し、豚肉、大根、人参を強火で1分サッと炒める。",
      "水180mlとだしの素を加えて大根が柔らかくなるまで煮て、油揚げを加え味噌を溶き入れる。"
    ]
  },
  {
    id: "soup_40",
    title: "ふんわりかき玉コーンの中華とろみスープ",
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "6分",
    approxCostPerPerson: 30,
    tags: ["卵料理", "コーン缶", "中華スープ", "子供大人気"],
    containsDislikes: [],
    description: "コーン缶の甘みとふわふわかき玉が絶品の中華スープ。片栗粉のとろみで最後まで熱々冷めません。",
    kidsTip: "甘いコーンとふわふわ卵の組み合わせは、ファミレスの中華スープのようにお子様に大ヒット！",
    tip: "スープにとろみをつけてから溶き卵を細く回し入れると、卵が沈まずにふわっと綺麗に浮きます。",
    ingredients: [
      { name: "コーン缶", amount: 25, unit: "g", aisle: "野菜" },
      { name: "卵", amount: 0.5, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "小鍋に水180ml、コーン缶、鶏ガラスープの素、醤油小さじ1/2を入れて沸騰させる。",
      "水溶き片栗粉を回し入れてスープにとろみをつける。",
      "沸騰したところに溶き卵を細く流し入れ、ふんわり浮いてきたら火を止めてごま油を数滴垂らす。"
    ]
  },
  {
    id: "soup_41",
    title: "お豆腐とワカメの王道お味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 20,
    tags: ["木綿豆腐", "和風基本", "超時短", "激安"],
    containsDislikes: [],
    description: "日本の食卓の基本！なめらかな豆腐とワカメの定番味噌汁。どんな主菜にも寄り添う安心の味。",
    kidsTip: "小さめのサイコロ状に切った豆腐は、離乳食〜小さなお子様でもツルッと食べやすいです。",
    tip: "豆腐は煮込みすぎるとスが入って硬くなるので、温まったらすぐに火を止めるのが美味しく仕上げるコツ。",
    ingredients: [
      { name: "木綿豆腐", amount: 40, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "乾燥わかめ", amount: 2, unit: "g", aisle: "調味料・その他" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "木綿豆腐は1cm角のさいの目切りにする。",
      "鍋に水180mlとだしの素を入れて火にかけ、煮立ったら豆腐と乾燥わかめを加える。",
      "ひと煮立ちしたら火を弱め、味噌を溶き入れて沸騰直前で火を止める。"
    ]
  },
  {
    id: "soup_42",
    title: "完熟トマトとキャベツの具沢山ミネストローネ",
    category: "soup",
    cuisine: "western",
    season: "all",
    time: "15分",
    approxCostPerPerson: 40,
    tags: ["トマト", "キャベツ", "洋風", "野菜たっぷり"],
    containsDislikes: ["トマト"],
    description: "トマトの甘みと酸味が溶け込んだ具沢山スープ。冷蔵庫の余り野菜を入れても美味しく作れます。",
    kidsTip: "ケチャップと砂糖を少し足して酸味を抑え、粉チーズを振ると子供たちも喜んで完食します。",
    tip: "野菜を細かく刻んでオリーブ油でじっくり炒めることで、野菜本来の甘みがスープに溶け出します。",
    ingredients: [
      { name: "トマト缶", amount: 50, unit: "g", aisle: "野菜" },
      { name: "キャベツ", amount: 40, unit: "g", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.2, unit: "個", aisle: "野菜" },
      { name: "コンソメ", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツ、玉ねぎは1cm角に切る。",
      "小鍋にオリーブ油を熱し、玉ねぎとキャベツをしんなりするまで炒める。",
      "トマト缶、水120ml、コンソメを加え、フタをして弱火で約8分コトコト煮込む。"
    ]
  },
  {
    id: "soup_43",
    title: "えのき茸と油揚げの合わせ味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "6分",
    approxCostPerPerson: 25,
    tags: ["きのこ", "油揚げ", "和風基本", "食物繊維"],
    containsDislikes: ["きのこ"],
    description: "シャキシャキのえのき茸から染み出る自然な出汁と、油揚げのコクが合わさった風味豊かなお味噌汁。",
    kidsTip: "えのきを細かく刻むことで歯に挟まらず、ツルツルと喉越しよく飲んでくれます。",
    tip: "えのきは煮すぎずサッと火を通す程度にすると、独特のシャキッとした食感が引き立ちます。",
    ingredients: [
      { name: "えのき", amount: 35, unit: "g", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "えのきは石づきを落として長さを3等分に切り、油揚げは短冊切りにする。",
      "鍋に水180mlとだしの素を入れて火にかけ、えのきと油揚げを加える。",
      "えのきに火が通ったら弱火にし、味噌を溶き入れて火を止める。"
    ]
  },
  {
    id: "soup_44",
    title: "しめじと玉ねぎの甘口コンソメスープ",
    category: "soup",
    cuisine: "western",
    season: "all",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["きのこ", "玉ねぎ", "コンソメ", "洋風定番"],
    containsDislikes: ["きのこ"],
    description: "じっくり煮た玉ねぎの自然な甘みとしめじの旨味が溶け込んだ、洋食の献立にピッタリのクリアスープ。",
    kidsTip: "玉ねぎが透き通るまで柔らかく煮ることで甘みが増し、コンソメ味で子供たちも大好きなスープに。",
    tip: "ベーコンの端切れやウインナーが少しあれば加えると、さらにコク深いごちそうスープになります。",
    ingredients: [
      { name: "しめじ", amount: 30, unit: "g", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.25, unit: "個", aisle: "野菜" },
      { name: "コンソメ", amount: 2.5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "玉ねぎは薄切りにし、しめじは石づきを取って小房にほぐす。",
      "鍋に水180ml、コンソメ、玉ねぎ、しめじを入れて中火にかける。",
      "沸騰したら弱火にし、フタをして約5分煮て塩こしょう少々で味を調える。"
    ]
  },
  {
    id: "soup_45",
    title: "夏ナスと油揚げの田舎風お味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "summer",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["なす", "夏野菜", "和風基本", "ほっこり"],
    containsDislikes: ["なす"],
    description: "お出汁を吸ったジューシーなナスが口の中でじゅわっととろける、夏の食卓に欠かせない定番味噌汁。",
    kidsTip: "ナスの皮をピーラーで薄く縞模様に剥いておくと、皮が硬くならず子供もスッと噛み切れます。",
    tip: "ナスをごま油小さじ1/2でサッと炒めてからお出汁を加えると、コクが格段にアップして絶品に！",
    ingredients: [
      { name: "なす", amount: 0.5, unit: "本", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ナスは一口大の乱切りにして水にさらし、油揚げは短冊切りにする。",
      "鍋に少量の油を熱してナスをサッと炒め、水180mlとだしの素、油揚げを加える。",
      "ナスが柔らかくなるまで3分ほど煮て、火を止めて味噌を溶き入れる。"
    ]
  },
  {
    id: "soup_46",
    title: "長ネギとお豆腐の中華風とろみ生姜スープ",
    category: "soup",
    cuisine: "chinese",
    season: "winter",
    time: "6分",
    approxCostPerPerson: 25,
    tags: ["長ネギ", "木綿豆腐", "生姜", "中華スープ", "冷え性予防"],
    containsDislikes: ["長ネギ"],
    description: "たっぷりの長ネギと豆腐をごま油香る中華スープでとろとろに。生姜の効果で体の芯から温まります。",
    kidsTip: "ネギをクタクタになるまで煮ると甘みが増し、生姜を控えめにすれば子供も大好きな中華味に。",
    tip: "水溶き片栗粉でとろみをつけることで熱が逃げず、寒い日も最後までアツアツのまま楽しめます。",
    ingredients: [
      { name: "長ネギ", amount: 0.3, unit: "本", aisle: "野菜" },
      { name: "木綿豆腐", amount: 40, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "長ネギは斜め薄切り、豆腐は1cm角に切る。",
      "鍋にごま油を熱し、長ネギをしんなりするまで炒め、水180ml、鶏ガラスープの素、生姜少々を加える。",
      "豆腐を加えて1分煮て、水溶き片栗粉でとろみをつけて火を止める。"
    ]
  },
  {
    id: "soup_47",
    title: "豆苗とふんわりかき玉の中華スープ",
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["豆苗", "卵料理", "超時短", "中華スープ"],
    containsDislikes: ["豆苗"],
    description: "栄養豊富な豆苗と優しいかき玉のスピード中華スープ。包丁不要で5分で作れる節約の強い味方。",
    kidsTip: "溶き卵のまろやかさで豆苗のシャキシャキ感が美味しく食べられ、見た目も鮮やかで大好評。",
    tip: "豆苗は火が通りやすいので、最後に加えて余熱でサッと仕上げると色鮮やかでシャキシャキに！",
    ingredients: [
      { name: "豆苗", amount: 0.25, unit: "袋", aisle: "野菜" },
      { name: "卵", amount: 0.5, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "豆苗は根元を落として3cm長さに切る。",
      "小鍋に水180ml、鶏ガラスープの素、醤油小さじ1/2を入れて沸騰させる。",
      "豆苗を加え、沸騰したところに溶き卵を回し入れ、ふわっと浮いてきたらごま油を垂らす。"
    ]
  },
  {
    id: "soup_48",
    title: "鮭と大根のあったかすまし汁（三平汁風）",
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "15分",
    approxCostPerPerson: 50,
    tags: ["鮭", "大根", "冬の旬", "北海道風", "魚"],
    containsDislikes: ["魚"],
    description: "鮭の旨味と大根の甘みがシンプルなお出汁に溶け込んだ、北海道の三平汁を思わせるほっこり汁物。",
    kidsTip: "お醤油控えめのお出汁仕立てで鮭の塩気と野菜の甘みが際立ち、お魚が好きな子も大喜び。",
    tip: "鮭のアラや端切れ肉を使えば超低コストで料亭のような極上のお出汁が取れます。",
    ingredients: [
      { name: "生鮭", amount: 30, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 40, unit: "g", aisle: "野菜" },
      { name: "白だし", amount: 15, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根はいちょう切り、鮭は一口大に切って熱湯をサッとかけて臭みを取る。",
      "鍋に水180ml、白だし、酒小さじ1、大根を入れて中火にかける。",
      "大根が透き通ったら鮭を加え、アクを取りながら弱火で4〜5分煮て塩で味を調える。"
    ]
  },
  {
    id: "soup_49",
    title: "大根とふんわり油揚げのほっこり味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "8分",
    approxCostPerPerson: 25,
    tags: ["大根", "油揚げ", "冬の旬", "和風基本"],
    containsDislikes: [],
    description: "冬の大根の甘みと、お出汁をたっぷり含んだ油揚げの組み合わせ。毎日飲みたくなる定番中の定番。",
    kidsTip: "大根を薄めの短冊切りにすることで柔らかく煮え、子供たちもスプーンですくって完食します。",
    tip: "大根の葉があれば細かく刻んで最後に散らすと、彩りも鮮やかでビタミンCも補給できます。",
    ingredients: [
      { name: "大根", amount: 50, unit: "g", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は短冊切りにし、油揚げは一口大に切る。",
      "鍋に水180mlとだしの素、大根を入れて火にかけ、大根が柔らかくなるまで煮る。",
      "油揚げを加えてひと煮立ちさせ、火を弱めて味噌を溶き入れる。"
    ]
  },
  {
    id: "soup_50",
    title: "白菜とつるつる春雨の中華たまごスープ",
    category: "soup",
    cuisine: "chinese",
    season: "winter",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["白菜", "春雨", "卵料理", "中華スープ"],
    containsDislikes: [],
    description: "とろとろに煮えた白菜とツルツルの春雨がたっぷり入った、軽食にもなる満足度の高い中華スープ。",
    kidsTip: "ラーメンのような春雨のツルツル食感が子供たちに大ウケ！お野菜も一緒にペロリと食べます。",
    tip: "乾燥春雨をそのままスープに入れて煮込むことで、お出汁の旨味を春雨がぎゅっと吸ってくれます。",
    ingredients: [
      { name: "白菜", amount: 60, unit: "g", aisle: "野菜" },
      { name: "春雨（乾燥）", amount: 10, unit: "g", aisle: "調味料・その他" },
      { name: "卵", amount: 0.5, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜はざく切りにする。",
      "鍋に水200ml、鶏ガラスープの素、白菜を入れて火にかけ、白菜がしんなりするまで煮る。",
      "春雨をそのまま加え、柔らかくなったら溶き卵を回し入れ、ごま油を垂らして火を止める。"
    ]
  },
  {
    id: "soup_51",
    title: "じゃがいもと玉ねぎの甘口味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "8分",
    approxCostPerPerson: 25,
    tags: ["じゃがいも", "玉ねぎ", "和風基本", "ほくほく"],
    containsDislikes: [],
    description: "玉ねぎの自然な甘みと、ホクホクじゃがいもの優しい口当たり。子供たちが一番好きなお味噌汁の1つ。",
    kidsTip: "お芋の甘みとお出汁の香りで、普段お味噌汁をあまり飲まない子も残さず飲み干します。",
    tip: "じゃがいもを薄めのいちょう切りにすることで、煮崩れず短時間で柔らかく火が通ります。",
    ingredients: [
      { name: "じゃがいも", amount: 0.5, unit: "個", aisle: "野菜" },
      { name: "玉ねぎ", amount: 0.25, unit: "個", aisle: "野菜" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "じゃがいもはいちょう切り、玉ねぎは薄切りにする。",
      "鍋に水180ml、だしの素、じゃがいも、玉ねぎを入れて火にかける。",
      "じゃがいもが柔らかくなるまで中火で5分煮て、火を止めて味噌を溶き入れる。"
    ]
  },
  {
    id: "soup_52",
    title: "もやしとニラの中華ごま味噌スープ",
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["もやし", "ニラ", "超時短", "激安"],
    containsDislikes: [],
    description: "もやしとニラをごま油香る味噌仕立てに。ラーメンのスープのような深いコクが5分で完成！",
    kidsTip: "味噌とすりごまのまろやかなスープ仕立てなので、ラーメン感覚で野菜を喜んで食べてくれます。",
    tip: "もやしとニラは火が通りやすいので、沸騰したスープに入れてサッと1分煮るだけでシャキシャキに！",
    ingredients: [
      { name: "もやし", amount: 50, unit: "g", aisle: "野菜" },
      { name: "ニラ", amount: 0.2, unit: "束", aisle: "野菜" },
      { name: "味噌", amount: 12, unit: "g", aisle: "調味料・その他" },
      { name: "すりごま", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ニラは3cm長さに切る。",
      "小鍋に水180ml、鶏ガラスープの素小さじ1/2、もやしを入れて煮立てる。",
      "ニラを加えてサッと煮て火を弱め、味噌とすりごまを溶き入れ、ごま油を垂らす。"
    ]
  },
  {
    id: "soup_53",
    title: "キャベツとベーコンの洋風ミルクスープ",
    category: "soup",
    cuisine: "western",
    season: "all",
    time: "8分",
    approxCostPerPerson: 40,
    tags: ["キャベツ", "ベーコン", "牛乳", "洋風定番"],
    containsDislikes: [],
    description: "甘いキャベツとベーコンの塩気を牛乳の優しいコクで包み込んだ、ほっこり温まる洋風スープ。",
    kidsTip: "シチューのようなミルキーな甘みで、子供たちに圧倒的な人気を誇るスープメニュー。",
    tip: "牛乳を加えた後は沸騰させないように弱火でコトコト温めると、膜が張らず滑らかに仕上がります。",
    ingredients: [
      { name: "キャベツ", amount: 50, unit: "g", aisle: "野菜" },
      { name: "ハーフベーコン", amount: 1, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "牛乳", amount: 80, unit: "ml", aisle: "大豆・乳・加工品" },
      { name: "コンソメ", amount: 2, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "キャベツは一口大、ベーコンは1cm幅に切る。",
      "小鍋に水80ml、コンソメ、ベーコン、キャベツを入れて火にかけ、キャベツが柔らかくなるまで煮る。",
      "牛乳を加え、弱火で沸騰直前まで温め、塩こしょうで味を調える。"
    ]
  },
  {
    id: "soup_54",
    title: "小松菜と油揚げのお味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "6分",
    approxCostPerPerson: 25,
    tags: ["小松菜", "油揚げ", "和風基本", "カルシウム"],
    containsDislikes: [],
    description: "青々とした小松菜のシャキッとした食感と油揚げのコク。お出汁の香りが広がる定番味噌汁。",
    kidsTip: "小松菜はアクが少ないので下茹で不要！お味噌の甘みで葉物野菜も美味しく食べられます。",
    tip: "小松菜の葉は火が通りやすいので、茎を先に入れてから最後に葉を加えると食感が綺麗に残ります。",
    ingredients: [
      { name: "小松菜", amount: 40, unit: "g", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "小松菜は3cm長さに切り、油揚げは短冊切りにする。",
      "鍋に水180mlとだしの素、油揚げを入れて火にかける。",
      "小松菜を加えて2分煮て火を止め、味噌を溶き入れる。"
    ]
  },
  {
    id: "soup_55",
    title: "とろとろオニオンスープ パセリ風味",
    category: "soup",
    cuisine: "western",
    season: "all",
    time: "10分",
    approxCostPerPerson: 25,
    tags: ["玉ねぎ", "コンソメ", "超時短", "洋風基本"],
    containsDislikes: [],
    description: "薄切り玉ねぎをじっくり炒めて甘みを引き出した、シンプルながら深みのあるオニオンスープ。",
    kidsTip: "玉ねぎの辛味が完全に消えて甘くとろとろになり、パンを浸して食べると子供たちも大歓喜！",
    tip: "玉ねぎを炒める前にレンジで1分チンしておくと、驚くほど短時間で飴色の甘みが出せます。",
    ingredients: [
      { name: "玉ねぎ", amount: 0.4, unit: "個", aisle: "野菜" },
      { name: "コンソメ", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "バター", amount: 3, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "玉ねぎは薄切りにする。",
      "小鍋にバターを熱し、玉ねぎが透き通るまで中火でしっかり炒める。",
      "水180ml、コンソメ、醤油少々を加えて5分煮て、塩こしょうで味を調える。"
    ]
  },
  {
    id: "soup_56",
    title: "ちくわとお豆腐の優しい和風すまし汁",
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 25,
    tags: ["ちくわ", "木綿豆腐", "すまし汁", "超時短"],
    containsDislikes: [],
    description: "ちくわからじんわり染み出る練り物の旨味とお出汁の調和。お味噌汁が続いた時のあっさり変化球に。",
    kidsTip: "お味噌汁よりもあっさり上品な口当たりで、お出汁を吸ったちくわが大人気です。",
    tip: "白だしを使えば味付け一発！最後に三つ葉や刻みネギを添えると料亭風に仕上がります。",
    ingredients: [
      { name: "ちくわ", amount: 1, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "木綿豆腐", amount: 40, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "白だし", amount: 15, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "ちくわは薄い輪切り、豆腐は1cm角に切る。",
      "小鍋に水180ml、白だし、酒小さじ1を入れて火にかける。",
      "煮立ったらちくわと豆腐を加え、弱火で2分温めて火を止める。"
    ]
  },
  {
    id: "soup_57",
    title: "ほうれん草とふんわり卵のコンソメスープ",
    category: "soup",
    cuisine: "western",
    season: "winter",
    time: "6分",
    approxCostPerPerson: 35,
    tags: ["ほうれん草", "卵料理", "冬の旬", "洋風"],
    containsDislikes: [],
    description: "冬の甘いほうれん草と、ふんわり溶き卵のコントラストが美しい栄養バランス抜群の洋風スープ。",
    kidsTip: "卵でほうれん草が包まれることでえぐみが全くなくなり、彩りも綺麗で子供も大好きなスープ。",
    tip: "スープがしっかり沸騰しているところに卵液を少しずつ流し入れると、フワフワの綺麗な仕上がりに。",
    ingredients: [
      { name: "ほうれん草", amount: 35, unit: "g", aisle: "野菜" },
      { name: "卵", amount: 0.5, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "コンソメ", amount: 2.5, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "ほうれん草は熱湯でサッと茹でて水気を絞り、3cm長さに切る。",
      "鍋に水180ml、コンソメ、醤油少々を入れて沸騰させる。",
      "ほうれん草を入れ、溶き卵を細く回し入れてふんわり浮いたら火を止める。"
    ]
  },
  {
    id: "soup_58",
    title: "根菜たっぷり！ごぼうと人参のけんちん汁",
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "15分",
    approxCostPerPerson: 35,
    tags: ["ごぼう", "大根", "人参", "和風基本", "食物繊維"],
    containsDislikes: [],
    description: "ごま油で炒めたごぼう、大根、人参、豆腐をお醤油仕立てのお出汁で煮込んだ伝統の健康汁物。",
    kidsTip: "根菜をごま油でしっかり炒めてから煮るので香ばしく、お野菜の甘みが引き立ちます。",
    tip: "肉が入っていなくても、ごま油で炒めることでお肉に負けない深いコクが出ます。",
    ingredients: [
      { name: "ごぼう", amount: 25, unit: "g", aisle: "野菜" },
      { name: "大根", amount: 30, unit: "g", aisle: "野菜" },
      { name: "人参", amount: 15, unit: "g", aisle: "野菜" },
      { name: "木綿豆腐", amount: 30, unit: "g", aisle: "大豆・乳・加工品" }
    ],
    instructions: [
      "ごぼうはささがき、大根と人参はいちょう切りにする。",
      "鍋にごま油を熱し、ごぼう、大根、人参をしんなりするまで中火で炒める。",
      "水180ml、だしの素、醤油大さじ1、みりん小さじ1、崩した豆腐を加え、野菜が柔らかくなるまで煮る。"
    ]
  },
  {
    id: "soup_59",
    title: "レンコンと生姜のぽかぽか味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["レンコン", "秋の旬", "生姜", "冷え性予防"],
    containsDislikes: [],
    description: "すりおろしレンコンと薄切りレンコンの2つの食感！生姜の香りで寒い日の冷えを吹き飛ばす健康味噌汁。",
    kidsTip: "レンコンの自然なとろみがお汁に溶け込み、まろやかで優しい口当たりになります。",
    tip: "レンコンの一部をすりおろして加えると、お味噌汁にとろみがついて冷めにくく保温効果抜群！",
    ingredients: [
      { name: "レンコン", amount: 40, unit: "g", aisle: "野菜" },
      { name: "油揚げ", amount: 0.3, unit: "枚", aisle: "大豆・乳・加工品" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "レンコンは半分を薄切りにし、半分をすりおろす。油揚げは短冊切りにする。",
      "鍋に水180ml、だしの素、薄切りレンコン、すりおろしレンコン、油揚げを入れて火にかける。",
      "3分煮てレンコンに火が通ったら火を弱め、おろし生姜少々と味噌を溶き入れる。"
    ]
  },
  {
    id: "soup_60",
    title: "カニカマとお豆腐の中華風かき玉スープ",
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "5分",
    approxCostPerPerson: 30,
    tags: ["カニカマ", "木綿豆腐", "卵料理", "超時短"],
    containsDislikes: [],
    description: "カニの旨味がぎゅっと詰まったカニカマと豆腐、卵の彩り豊かな中華スープ。5分でプロの味。",
    kidsTip: "カニカマの赤と卵の黄色で見た目も華やか！とろとろ熱々で子供たちの大好物スープです。",
    tip: "スープにとろみをつけてから溶き卵を入れることで、卵がふわっと雲のように浮き上がります。",
    ingredients: [
      { name: "カニカマ", amount: 1.5, unit: "本", aisle: "大豆・乳・加工品" },
      { name: "木綿豆腐", amount: 40, unit: "g", aisle: "大豆・乳・加工品" },
      { name: "卵", amount: 0.5, unit: "個", aisle: "大豆・乳・加工品" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "カニカマは手でほぐし、豆腐は1cm角に切る。",
      "鍋に水180ml、鶏ガラスープの素、カニカマ、豆腐を入れて火にかけ、水溶き片栗粉でとろみをつける。",
      "沸騰したところに溶き卵を回し入れ、ふわっと浮いてきたらごま油少々を加えて火を止める。"
    ]
  },
  {
    id: "soup_61",
    title: "さつまいもと白菜のほくほく味噌汁",
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "8分",
    approxCostPerPerson: 30,
    tags: ["さつまいも", "白菜", "秋の旬", "ほくほく"],
    containsDislikes: [],
    description: "秋のさつまいもの自然な甘みと、トロトロに煮えた白菜が優しいハーモニーを奏でる季節の味噌汁。",
    kidsTip: "さつまいものお芋の甘みがしっかり溶け込んで、甘口でお子様に大人気の一杯。",
    tip: "さつまいもは薄めの半月切りにすることで、短時間でホクホクに煮上がります。",
    ingredients: [
      { name: "さつまいも", amount: 35, unit: "g", aisle: "野菜" },
      { name: "白菜", amount: 40, unit: "g", aisle: "野菜" },
      { name: "味噌", amount: 15, unit: "g", aisle: "調味料・その他" }
    ],
    instructions: [
      "さつまいもは7mm厚さの半月切りにして水にさらし、白菜はざく切りにする。",
      "鍋に水180ml、だしの素、さつまいも、白菜を入れて火にかける。",
      "さつまいもに火が通り柔らかくなったら火を弱め、味噌を溶き入れる。"
    ]
  },
  {
    id: "soup_62",
    title: "たっぷりワカメと白ごまの香ばし中華スープ",
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "4分",
    approxCostPerPerson: 20,
    tags: ["乾燥わかめ", "超時短", "激安", "中華スープ"],
    containsDislikes: [],
    description: "焼肉屋さんでおなじみのワカメスープをご家庭で！ごま油とすりごまの香ばしさが食欲を刺激します。",
    kidsTip: "ツルツルしたワカメとごま油の風味で、子供たちもスープをごくごく飲んでくれます。",
    tip: "お椀に具材と調味料を入れて熱湯を注ぐだけでも作れる、究極のウルトラ時短スープ！",
    ingredients: [
      { name: "乾燥わかめ", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "鶏ガラスープの素", amount: 3, unit: "g", aisle: "調味料・その他" },
      { name: "ごま油", amount: 3, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "小鍋に水180ml、鶏ガラスープの素、醤油小さじ1/2を入れて火にかける。",
      "乾燥わかめを加え、1分弱火で煮る。",
      "火を止めてごま油を回し入れ、たっぷりの白いりごまを振る。"
    ]
  },
  {
    id: "soup_63",
    title: "白菜とツナの旨味生姜スープ",
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "8分",
    approxCostPerPerson: 35,
    tags: ["白菜", "ツナ缶", "冬の旬", "生姜", "魚"],
    containsDislikes: ["魚"],
    description: "ツナ缶のオイルとお出汁が白菜にしっかり染み込んだ、旨味たっぷりの食べる和風スープ。",
    kidsTip: "ツナの出汁が効いているのでコンソメやだしの素が少なくても味が決まり、子供ウケ抜群。",
    tip: "生姜を少し加えることでツナの後味がさっぱりし、身体も温まります。",
    ingredients: [
      { name: "白菜", amount: 60, unit: "g", aisle: "野菜" },
      { name: "ツナ缶", amount: 0.25, unit: "缶", aisle: "肉・魚" },
      { name: "白だし", amount: 12, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "白菜は食べやすいざく切りにする。",
      "小鍋に水180ml、白だし、おろし生姜少々、白菜、ツナ缶（油ごと）を入れて火にかける。",
      "フタをして中弱火で約5分、白菜がクタクタに柔らかくなるまで煮る。"
    ]
  },
  {
    id: "soup_64",
    title: "手作り鶏団子と大根の食べる節約スープ",
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "15分",
    approxCostPerPerson: 45,
    tags: ["鶏ひき肉", "大根", "冬の旬", "食べるスープ"],
    containsDislikes: [],
    description: "スプーンで落とすだけの簡単ふわふわ鶏団子と大根のスープ。主菜にも匹敵する大満足の食べごたえ。",
    kidsTip: "ふわふわの柔らかい肉団子が大人気！お肉の出汁が大根に染みて野菜もたっぷり食べられます。",
    tip: "鶏ひき肉に生姜と片栗粉、塩を混ぜてスプーンで落とすだけ。手も汚れず短時間で作れます。",
    ingredients: [
      { name: "鶏ひき肉", amount: 35, unit: "g", aisle: "肉・魚" },
      { name: "大根", amount: 40, unit: "g", aisle: "野菜" },
      { name: "醤油", amount: 8, unit: "ml", aisle: "調味料・その他" }
    ],
    instructions: [
      "大根は短冊切りにする。ボウルで鶏ひき肉、片栗粉小さじ1、酒少々、塩をよく練り合わせる。",
      "鍋に水180ml、だしの素、醤油、みりん小さじ1、大根を入れて煮立てる。",
      "スプーンで鶏ひき肉を一口大にすくって落とし入れ、アクを取りながら弱火で5分煮る。"
    ]
  }
];

// 初期設定・定数
const DAYS_OF_WEEK = [
  { id: "mon", name: "月曜日", label: "月" },
  { id: "tue", name: "火曜日", label: "火" },
  { id: "wed", name: "水曜日", label: "水" },
  { id: "thu", name: "木曜日", label: "木" },
  { id: "fri", name: "金曜日", label: "金" },
  { id: "sat", name: "土曜日", label: "土" },
  { id: "sun", name: "日曜日", label: "日" }
];

const AISLE_ORDER = ["野菜", "肉・魚", "大豆・乳・加工品", "調味料・その他"];