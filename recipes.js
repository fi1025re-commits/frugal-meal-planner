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
  }
,
  // =================================================================
  // 縲占ｿｽ蜉 荳ｻ闖・(Main)縲・ main_57 縲・main_106 (蜈ｨ50蜩∬ｿｽ蜉)
  // =================================================================
  {
    id: "main_57",
    title: "鮓上・縺ｭ閧峨・繧・ｏ繧峨°繝ｬ繝｢繝ｳ繝壹ャ繝代・辣ｧ繧顔┥縺・,
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "15蛻・,
    approxCostPerPerson: 100,
    tags: ["鮓上・縺ｭ閧・, "縺輔▲縺ｱ繧・, "縺雁ｼ∝ｽ・, "遽邏・],
    containsDislikes: [],
    description: "繝代し縺､縺阪′縺｡縺ｪ鮓上・縺ｭ閧峨ｒ蜑翫℃蛻・ｊ縺ｫ縺励※繝輔か繝ｼ繧ｯ縺ｧ遨ｴ繧帝幕縺代√Ξ繝｢繝ｳ譫懈ｱ√→鮟定Γ讀偵〒辷ｽ繧・°縺ｫ辟ｼ縺堺ｸ翫￡縺ｾ縺吶・,
    kidsTip: "繝ｬ繝｢繝ｳ縺ｨ驢､豐ｹ縺ｮ逕倬・縺｣縺ｱ縺・袖莉倥￠縺ｧ縲√♀閧峨′闍ｦ謇九↑蟄舌ｂ繝代け繝代け鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "迚・礼ｲ峨ｒ縺ｾ縺ｶ縺励※縺九ｉ辟ｼ縺上％縺ｨ縺ｧ閧画ｱ√ｒ騾・＆縺壹＠縺｣縺ｨ繧頑沐繧峨°鬟滓─縺ｫ・・,
    ingredients: [
      { name: "鮓上・縺ｭ閧・, amount: 100, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繝ｬ繝｢繝ｳ豎・, amount: 5, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "迚・礼ｲ・, amount: 5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "鮓上・縺ｭ閧峨・荳蜿｣螟ｧ縺ｮ蜑翫℃蛻・ｊ縺ｫ縺励・・蟆代・→蝪ｩ縺薙＠繧・≧繧呈初縺ｿ霎ｼ繧薙〒迚・礼ｲ峨ｒ阮・￥縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ繧ｵ繝ｩ繝豐ｹ繧堤・縺励∽ｸｭ轣ｫ縺ｧ荳｡髱｢縺ｫ辟ｼ縺崎牡縺後▽縺上∪縺ｧ辟ｼ縺上・,
      "驢､豐ｹ繝ｻ縺ｿ繧翫ｓ繝ｻ繝ｬ繝｢繝ｳ豎√・遐らｳ門ｰ代・ｒ蜷医ｏ縺帛・繧後∝・菴薙↓縺ｨ繧阪∩縺後▽縺上∪縺ｧ邨｡繧√ｋ縲・
    ]
  },
  {
    id: "main_58",
    title: "繧ｳ繧ｹ繝第怙蠑ｷ・・ｶ上・縺ｭ閧峨・遽邏・ち繝ｳ繝峨Μ繝ｼ繝√く繝ｳ",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "15蛻・,
    approxCostPerPerson: 105,
    flavorType: "curry",
    tags: ["繧ｫ繝ｬ繝ｼ蜻ｳ", "鮓上・縺ｭ閧・, "蟄蝉ｾ帛､ｧ莠ｺ豌・, "荳句袖蜀ｷ蜃・],
    containsDislikes: [],
    description: "繝ｨ繝ｼ繧ｰ繝ｫ繝医→繧ｫ繝ｬ繝ｼ邊峨↓貍ｬ縺題ｾｼ繧薙〒辟ｼ縺上□縺托ｼ√Κ繝ｼ繧ｰ繝ｫ繝医・荵ｳ驟ｸ蜉ｹ譫懊〒鮓上・縺ｭ閧峨′鬩壹￥縺ｻ縺ｩ譟斐ｉ縺九￥縺ｪ繧翫∪縺吶・,
    kidsTip: "繧ｫ繝ｬ繝ｼ邊峨ｒ謗ｧ縺医ａ縺ｫ縺励√こ繝√Ε繝・・繧貞ｰ代＠螟壹ａ縺ｫ縺吶ｋ縺ｨ蟄蝉ｾ帛髄縺代・繧､繝ｫ繝牙袖縺ｫ縺ｪ繧翫∪縺吶・,
    tip: "蜑肴律繧・悃縺ｫ繝昴Μ陲九〒貍ｬ縺代※縺翫￠縺ｰ縲∝､暮｣ｯ譎ゅ・辟ｼ縺上□縺代〒10蛻・ｮ梧・・・,
    ingredients: [
      { name: "鮓上・縺ｭ閧・, amount: 100, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繝励Ξ繝ｼ繝ｳ繝ｨ繝ｼ繧ｰ繝ｫ繝・, amount: 20, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ｱ繝√Ε繝・・", amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "繧ｫ繝ｬ繝ｼ邊・, amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "鮓上・縺ｭ閧峨・荳蜿｣螟ｧ縺ｫ蛻・ｊ縲√ヵ繧ｩ繝ｼ繧ｯ縺ｧ謨ｰ繧ｫ謇蛻ｺ縺吶・,
      "繝昴Μ陲九↓鮓剰ｉ縲√Κ繝ｼ繧ｰ繝ｫ繝医√こ繝√Ε繝・・縲√き繝ｬ繝ｼ邊峨√♀繧阪＠縺ｫ繧薙↓縺丞ｰ代・ｒ蜈･繧後※繧医￥謠峨∩霎ｼ繧縲・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧定埋縺上・縺阪√ヵ繧ｿ繧偵＠縺ｦ蠑ｱ繧√・荳ｭ轣ｫ縺ｧ荳｡髱｢繧帝ｦ吶・縺励￥闥ｸ縺礼┥縺阪↓縺吶ｋ縲・
    ]
  },
  {
    id: "main_59",
    title: "鮓上ｂ繧りｉ縺ｨ髟ｷ繝阪ぐ縺ｮ縺薙▲縺ｦ繧顔┥縺埼ｳ･荳ｼ鬚ｨ",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "all",
    time: "12蛻・,
    approxCostPerPerson: 135,
    tags: ["鮓上ｂ繧りｉ", "縺秘｣ｯ豕･譽・, "繝輔Λ繧､繝代Φ1縺､", "髟ｷ繝阪ぐ"],
    containsDislikes: ["髟ｷ繝阪ぐ"],
    description: "鬥吶・縺励￥辟ｼ縺・◆繝阪ぐ縺ｨ繧ｸ繝･繝ｼ繧ｷ繝ｼ縺ｪ鮓上ｂ繧りｉ縺ｫ縲∫曝霎帙＞迚ｹ陬ｽ辟ｼ縺埼ｳ･繧ｿ繝ｬ縺後◆縺｣縺ｷ繧顔ｵ｡繧薙〒縺秘｣ｯ縺碁ｲ縺ｿ縺ｾ縺吶・,
    kidsTip: "繝阪ぐ繧偵§縺｣縺上ｊ闥ｸ縺礼┥縺阪↓縺吶ｋ縺ｨ逕倥∩縺悟｢励＠縲√ロ繧ｮ雖後＞縺ｪ縺雁ｭ先ｧ倥ｂ逕倥￥縺ｦ鄒主袖縺励￥鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "鮓剰ｉ縺九ｉ蜃ｺ繧玖р縺ｧ髟ｷ繝阪ぐ繧堤┥縺上％縺ｨ縺ｧ縲∵葎蜻ｳ繧剃ｽ吶☆縺薙→縺ｪ縺丞精蜿弱〒縺阪∪縺吶・,
    ingredients: [
      { name: "鮓上ｂ繧りｉ", amount: 90, unit: "g", aisle: "閧峨・鬲・ },
      { name: "髟ｷ繝阪ぐ", amount: 0.3, unit: "譛ｬ", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "鮓上ｂ繧りｉ縺ｯ荳蜿｣螟ｧ縲・聞繝阪ぐ縺ｯ3cm髟ｷ縺輔↓蛻・ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ鮓剰ｉ繧堤坩逶ｮ縺九ｉ蜈･繧後・聞繝阪ぐ繧ゆｸ邱偵↓荳ｦ縺ｹ縺ｦ荳ｭ轣ｫ縺ｧ縺薙ｓ縺後ｊ辟ｼ縺上・,
      "驢､豐ｹ繝ｻ縺ｿ繧翫ｓ繝ｻ驟偵・遐らｳ悶ｒ蜷医ｏ縺帙◆繧ｿ繝ｬ繧貞屓縺怜・繧後∫・繧翫′蜃ｺ繧九∪縺ｧ辣ｮ隧ｰ繧√※邨｡繧√ｋ縲・
    ]
  },
  {
    id: "main_60",
    title: "鮓上ｂ繧りｉ縺ｨ螟ｧ譬ｹ縺ｮ縺薙▲縺ｦ繧翫∩縺槭ｌ辣ｮ",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "autumn",
    time: "20蛻・,
    approxCostPerPerson: 140,
    tags: ["螟ｧ譬ｹ", "蜥碁｢ｨ螳夂分", "縺ｻ縺｣縺薙ｊ", "鮓上ｂ繧りｉ"],
    containsDislikes: [],
    description: "螟ｧ譬ｹ縺翫ｍ縺励ｒ縺溘▲縺ｷ繧贋ｽｿ縺｣縺溘∩縺槭ｌ辣ｮ縲るｶ剰ｉ縺ｮ繧ｳ繧ｯ縺ｨ螟ｧ譬ｹ縺ｮ逕倥∩縺瑚ｪｿ蜥後＠縲√せ繝ｼ繝励＃縺ｨ鬟ｲ縺ｿ蟷ｲ縺励◆縺上↑繧狗ｾ主袖縺励＆縲・,
    kidsTip: "螟ｧ譬ｹ縺翫ｍ縺励↓轣ｫ繧帝壹☆縺薙→縺ｧ霎帛袖縺悟ｮ悟・縺ｫ豸医∴縲∵沐繧峨°縺・ｶ剰ｉ縺ｨ荳邱偵↓鬟溘∋繧・☆縺上↑繧翫∪縺吶・,
    tip: "螟ｧ譬ｹ縺翫ｍ縺励・豎√＃縺ｨ蜉縺医ｋ縺薙→縺ｧ縲√□縺励・譌ｨ蜻ｳ縺ｨ螟ｧ譬ｹ縺ｮ逕倥∩縺後℃繧・▲縺ｨ蜃晉ｸｮ縺励∪縺吶・,
    ingredients: [
      { name: "鮓上ｂ繧りｉ", amount: 80, unit: "g", aisle: "閧峨・鬲・ },
      { name: "螟ｧ譬ｹ", amount: 70, unit: "g", aisle: "驥手除" },
      { name: "繧√ｓ縺､繧・, amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "鮓剰ｉ縺ｯ荳蜿｣螟ｧ縺ｫ蛻・ｊ縲∝､ｧ譬ｹ縺ｯ縺吶ｊ縺翫ｍ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｧ鮓剰ｉ縺ｮ荳｡髱｢繧堤┥縺崎牡縺後▽縺上∪縺ｧ辟ｼ縺上・,
      "螟ｧ譬ｹ縺翫ｍ縺暦ｼ域ｱ√＃縺ｨ・峨∵ｰｴ50ml縲√ａ繧薙▽繧・ｒ蜉縺医√ヵ繧ｿ繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ5縲・蛻・・霎ｼ繧縲・
    ]
  },
  {
    id: "main_61",
    title: "鮓上＆縺輔∩縺ｨ螟ｧ闡峨・縺ｵ繧薙ｏ繧翫メ繝ｼ繧ｺ繝斐き繧ｿ",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "15蛻・,
    approxCostPerPerson: 110,
    tags: ["鬮倥ち繝ｳ繝代け", "邊峨メ繝ｼ繧ｺ", "蟄蝉ｾ帛､ｧ莠ｺ豌・, "縺雁ｼ∝ｽ・],
    containsDislikes: [],
    description: "繝倥Ν繧ｷ繝ｼ縺ｪ縺輔＆縺ｿ繧貞嵯縺ｨ邊峨メ繝ｼ繧ｺ縺ｮ陦｣縺ｧ縺ｵ繧薙ｏ繧雁桁縺ｿ辟ｼ縺阪ゅ＠縺｣縺ｨ繧頑沐繧峨°縺上∝・繧√※繧らｾ主袖縺励＞縺ｮ縺ｧ縺雁ｼ∝ｽ薙↓繧や落",
    kidsTip: "繝√・繧ｺ縺ｮ鬚ｨ蜻ｳ縺ｧ縺輔＆縺ｿ縺ｮ繝代し縺､縺阪ｒ諢溘§縺壹∽ｸ蜿｣繧ｵ繧､繧ｺ縺ｧ蟷ｼ蜈舌ｂ謇九▼縺九∩縺ｧ蝟懊ｓ縺ｧ鬟溘∋縺ｾ縺吶・,
    tip: "縺輔＆縺ｿ縺ｯ遲九ｒ蜿悶▲縺ｦ隕ｳ髻ｳ髢九″縺ｫ縺励√Λ繝・・繧偵°縺ｶ縺帙※霆ｽ縺丞娼縺上→鬩壹￥縺ｻ縺ｩ譟斐ｉ縺九￥縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "鮓上＆縺輔∩", amount: 80, unit: "g", aisle: "閧峨・鬲・ },
      { name: "蜊ｵ", amount: 0.3, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "邊峨メ繝ｼ繧ｺ", amount: 5, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "縺輔＆縺ｿ縺ｯ遲九ｒ蜿悶ｊ縲∽ｸ蜿｣螟ｧ縺ｮ縺昴℃蛻・ｊ縺ｫ縺励※蝪ｩ縺薙＠繧・≧繧呈険繧翫∝ｰ城ｺｦ邊峨ｒ阮・￥縺ｾ縺ｶ縺吶・,
      "貅ｶ縺榊嵯縺ｫ邊峨メ繝ｼ繧ｺ繧呈ｷｷ縺懷粋繧上○縲√＆縺輔∩繧偵￥縺舌ｉ縺帙ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∝ｼｱ繧√・荳ｭ轣ｫ縺ｧ荳｡髱｢繧堤┥縺崎牡縺後▽縺上∪縺ｧ縺ｵ縺｣縺上ｉ辟ｼ縺上・
    ]
  },
  {
    id: "main_62",
    title: "鮓上・縺ｭ閧峨・繧ｵ繧ｯ繧ｵ繧ｯ繝√く繝ｳ繧ｫ繝・遽邏・た繝ｼ繧ｹ縺後￠",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "20蛻・,
    approxCostPerPerson: 100,
    tags: ["謠壹￡辟ｼ縺・, "螟ｧ貅雜ｳ", "蟄蝉ｾ帛､ｧ莠ｺ豌・, "遽邏・],
    containsDislikes: [],
    description: "迚ｹ螢ｲ縺ｮ鮓上・縺ｭ閧峨ｒ阮・￥蜿ｩ縺・※蠎・￡縲∝ｰ代↑繧√・豐ｹ縺ｧ謠壹￡辟ｼ縺阪↓縺励◆繧ｵ繧ｯ繧ｵ繧ｯ繧ｸ繝･繝ｼ繧ｷ繝ｼ縺ｪ繝薙ャ繧ｰ繝√く繝ｳ繧ｫ繝・・,
    kidsTip: "阮・ａ縺ｫ莨ｸ縺ｰ縺吶％縺ｨ縺ｧ繧ｵ繧ｯ繝・→蝎帙∩蛻・ｊ繧・☆縺上√♀閧峨′闍ｦ謇九↑縺雁ｭ先ｧ倥↓繧ょ､ｧ螂ｽ隧輔〒縺吶・,
    tip: "繝輔Λ繧､繝代Φ縺ｫ豺ｱ縺・cm遞句ｺｦ縺ｮ豐ｹ縺ｧ蜊∝・謠壹′繧九・縺ｧ縲∵ｲｹ縺ｮ蜃ｦ逅・ｂ讌ｽ繝√Φ縺ｧ邨梧ｸ育噪・・,
    ingredients: [
      { name: "鮓上・縺ｭ閧・, amount: 100, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繝代Φ邊・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "蟆城ｺｦ邊・, amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "荳ｭ豼・た繝ｼ繧ｹ", amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "鮓上・縺ｭ閧峨・縺昴℃蛻・ｊ縺ｫ縺励∝字謇九・繝ｩ繝・・縺ｫ謖溘ｓ縺ｧ鮗ｺ譽堤ｭ峨〒蜴壹＆7mm遞句ｺｦ縺ｫ蜿ｩ縺・※莨ｸ縺ｰ縺吶・,
      "豌ｴ貅ｶ縺榊ｰ城ｺｦ邊峨↓縺上＄繧峨○縲√ヱ繝ｳ邊峨ｒ縺励▲縺九ｊ謚ｼ縺輔∴縺､縺代ｋ繧医≧縺ｫ縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧・cm辭ｱ縺励∽ｸｭ轣ｫ縺ｧ荳｡髱｢縺後″縺､縺ｭ濶ｲ縺ｫ縺ｪ繧九∪縺ｧ謠壹￡辟ｼ縺阪↓縺吶ｋ縲・
    ]
  },
  {
    id: "main_63",
    title: "鮓剰ｉ縺ｨ縺九⊂縺｡繧・・縺ｻ縺上⊇縺冗曝霎帷・繧顔・",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "autumn",
    time: "18蛻・,
    approxCostPerPerson: 130,
    tags: ["縺九⊂縺｡繧・, "遘九・譌ｬ", "縺ｻ縺上⊇縺・, "蜥碁｢ｨ螳夂分"],
    containsDislikes: ["縺九⊂縺｡繧・],
    description: "逕倥∩縺溘▲縺ｷ繧翫・譌ｬ縺ｮ縺九⊂縺｡繧・→鮓上ｂ繧りｉ繧偵・・豐ｹ縺ｨ縺ｿ繧翫ｓ縺ｮ鮟・≡豈斐ち繝ｬ縺ｧ縺倥▲縺上ｊ逕倩ｾ帙￥辣ｮ邨｡繧√∪縺励◆縲・,
    kidsTip: "縺九⊂縺｡繧・・繝帙け繝帙け縺励◆逕倥∩縺後♀閧峨↓譟薙∩霎ｼ繧薙〒縲・㍽闖懊′闍ｦ謇九↑蟄舌ｂ谿九＆縺夐｣溘∋縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "縺九⊂縺｡繧・・髱｢蜿悶ｊ縺励↑縺上※繧ゅ∫坩逶ｮ繧剃ｸ九↓縺励※蜍輔°縺輔★辣ｮ繧九％縺ｨ縺ｧ辣ｮ蟠ｩ繧後ｒ髦ｲ縺偵∪縺吶・,
    ingredients: [
      { name: "鮓上ｂ繧りｉ", amount: 80, unit: "g", aisle: "閧峨・鬲・ },
      { name: "縺九⊂縺｡繧・, amount: 80, unit: "g", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "鮓剰ｉ縺ｯ荳蜿｣螟ｧ縲√°縺ｼ縺｡繧・・荳蜿｣螟ｧ縺ｮ荵ｱ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "骰九↓蟆鷹㍼縺ｮ豐ｹ繧堤・縺励・ｶ剰ｉ縺ｮ陦ｨ髱｢繧偵し繝・→轤偵ａ繧九・,
      "縺九⊂縺｡繧・∵ｰｴ100ml縲・・豐ｹ縲√∩繧翫ｓ縲∫らｳ悶√□縺励・邏繧貞刈縺医∬誠縺ｨ縺苓搭繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ10蛻・・繧九・
    ]
  },
  {
    id: "main_64",
    title: "鮓上・縺ｭ閧峨→繝悶Ο繝・さ繝ｪ繝ｼ縺ｮ繝槭Κ繝昴Φ轤偵ａ",
    category: "main",
    cuisine: "western",
    proteinType: "chicken",
    season: "all",
    time: "12蛻・,
    approxCostPerPerson: 115,
    flavorType: "mayo",
    tags: ["繝槭Κ繝阪・繧ｺ蜻ｳ", "繝悶Ο繝・さ繝ｪ繝ｼ", "譎ら洒", "鬮倥ち繝ｳ繝代け"],
    containsDislikes: [],
    description: "繝槭Κ繝阪・繧ｺ縺ｮ繧ｳ繧ｯ縺ｨ繝昴Φ驟｢縺ｮ辷ｽ繧・°縺輔′逶ｸ諤ｧ謚懃ｾ､・∵ｷ｡逋ｽ縺ｪ鮓上・縺ｭ閧峨→繝悶Ο繝・さ繝ｪ繝ｼ縺後＃縺｡縺昴≧縺ｫ螟ｧ螟芽ｺｫ縲・,
    kidsTip: "繝槭Κ繝昴Φ蜻ｳ縺ｯ蟄蝉ｾ帙◆縺｡縺ｫ螟ｧ莠ｺ豌暦ｼ√ヶ繝ｭ繝・さ繝ｪ繝ｼ縺ｮ謌ｿ縺ｫ繧ｽ繝ｼ繧ｹ縺檎ｵ｡繧薙〒驥手除繧らｾ主袖縺励￥螳碁｣溘〒縺阪∪縺吶・,
    tip: "繝悶Ο繝・さ繝ｪ繝ｼ縺ｯ繝ｬ繝ｳ繝√Φ縺ｧ荳句刈辭ｱ縺励※縺翫￠縺ｰ縲√ヵ繝ｩ繧､繝代Φ縺ｧ蜷医ｏ縺帷ｒ繧√ｋ縺縺代〒雜・凾遏ｭ螳梧・・・,
    ingredients: [
      { name: "鮓上・縺ｭ閧・, amount: 90, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繝悶Ο繝・さ繝ｪ繝ｼ", amount: 50, unit: "g", aisle: "驥手除" },
      { name: "繝槭Κ繝阪・繧ｺ", amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "繝昴Φ驟｢", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝悶Ο繝・さ繝ｪ繝ｼ縺ｯ蟆乗袷縺ｫ蛻・￠縲∬千・螳ｹ蝎ｨ縺ｫ蜈･繧後※繝ｬ繝ｳ繧ｸ縺ｧ1蛻・濠蜉辭ｱ縺吶ｋ縲るｶ剰ｉ縺ｯ荳蜿｣螟ｧ縺ｫ蛻・ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ繝槭Κ繝阪・繧ｺ蜊企㍼繧堤・縺励・ｶ剰ｉ繧剃ｸ｡髱｢縺薙ｓ縺後ｊ辟ｼ縺上・,
      "繝悶Ο繝・さ繝ｪ繝ｼ縲√・繝ｳ驟｢縲∵ｮ九ｊ縺ｮ繝槭Κ繝阪・繧ｺ繧貞刈縺医∵焔譌ｩ縺丞・菴薙↓轤偵ａ邨｡繧√ｋ縲・
    ]
  },
  {
    id: "main_65",
    title: "鮓乗焔鄒ｽ蜈・→螟ｧ譬ｹ縺ｮ縺輔▲縺ｱ繧翫♀驟｢辣ｮ霎ｼ縺ｿ",
    category: "main",
    cuisine: "japanese",
    proteinType: "chicken",
    season: "winter",
    time: "25蛻・,
    approxCostPerPerson: 120,
    tags: ["螟ｧ譬ｹ", "縺企・辣ｮ", "繝帙Ο繝帙Ο", "遽邏・焔鄒ｽ蜈・],
    containsDislikes: [],
    description: "迚ｹ螢ｲ縺ｫ縺ｪ繧翫ｄ縺吶＞謇狗ｾｽ蜈・ｒ縺企・縺ｧ繧ｳ繝医さ繝育・繧九％縺ｨ縺ｧ縲√♀閧峨′鬪ｨ縺九ｉ繝帙Ο繝・→螟悶ｌ繧区沐繧峨°縺輔↓莉穂ｸ翫′繧翫∪縺吶・,
    kidsTip: "縺企・縺ｯ辣ｮ霎ｼ繧縺ｨ驟ｸ蜻ｳ縺悟ｮ悟・縺ｫ鬟帙・縲√∪繧阪ｄ縺九↑譌ｨ蜻ｳ縺ｨ逕倥∩縺縺代′谿九ｋ縺ｮ縺ｧ蟄蝉ｾ帙ｂ螟ｧ蝟懊・縲・,
    tip: "螟ｧ譬ｹ縺ｯ蜴壹ａ縺ｮ縺・■繧・≧蛻・ｊ縺ｫ縺励※髫縺怜桁荳√ｒ蜈･繧後※縺翫￥縺ｨ蜻ｳ縺後＄繧薙＄繧捺沒縺ｿ霎ｼ縺ｿ縺ｾ縺吶・,
    ingredients: [
      { name: "鮓乗焔鄒ｽ蜈・, amount: 1.5, unit: "譛ｬ", aisle: "閧峨・鬲・ },
      { name: "螟ｧ譬ｹ", amount: 70, unit: "g", aisle: "驥手除" },
      { name: "驟｢", amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 12, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縺ｯ蜴壹＆1.5cm縺ｮ縺・■繧・≧蛻・ｊ縺ｫ縺励∵焔鄒ｽ蜈・・鬪ｨ縺ｫ豐ｿ縺｣縺ｦ蛹・ｸ√〒1譛ｬ蛻・ｊ霎ｼ縺ｿ繧貞・繧後ｋ縲・,
      "骰九↓謇狗ｾｽ蜈・∝､ｧ譬ｹ縲∵ｰｴ150ml縲・・縲・・豐ｹ縲∫らｳ悶√∩繧翫ｓ繧貞・縺ｦ蜈･繧後※蠑ｷ轣ｫ縺ｫ縺九￠繧九・,
      "辣ｮ遶九▲縺溘ｉ關ｽ縺ｨ縺苓搭繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ邏・5縲・0蛻・∫・豎√′蟆代＠辣ｮ隧ｰ縺ｾ繧九∪縺ｧ辣ｮ霎ｼ繧縲・
    ]
  },
  {
    id: "main_66",
    title: "鮓上・縺ｭ閧峨・繧ｵ繧ｯ繧ｵ繧ｯ逕倬・繝阪ぐ縺繧鯉ｼ域ｲｹ豺矩ｶ城｢ｨ・・,
    category: "main",
    cuisine: "chinese",
    proteinType: "chicken",
    season: "all",
    time: "15蛻・,
    approxCostPerPerson: 105,
    tags: ["荳ｭ闖ｯ螳夂分", "髟ｷ繝阪ぐ", "縺秘｣ｯ豕･譽・, "謠壹￡辟ｼ縺・],
    containsDislikes: ["髟ｷ繝阪ぐ"],
    description: "繧ｫ繝ｪ繧ｫ繝ｪ縺ｫ辟ｼ縺堺ｸ翫￡縺滄ｶ上・縺ｭ閧峨↓縲∝綾縺ｿ繝阪ぐ縺溘▲縺ｷ繧翫・逕倬・縺｣縺ｱ縺・ｸｭ闖ｯ繧ｿ繝ｬ繧偵ず繝･繝ｯ繝・→縺九￠縺滓悽譬ｼ遽邏・Θ繝ｼ繝ｪ繝ｳ繝√・縲・,
    kidsTip: "繝阪ぐ縺繧後・縺企・縺ｨ遐らｳ悶・繝舌Λ繝ｳ繧ｹ縺檎ｵｶ螯吶〒縲∫曝蜿｣荳ｭ闖ｯ縺ｨ縺励※蟄蝉ｾ帙◆縺｡縺ｮ縺秘｣ｯ縺梧ｭ｢縺ｾ繧翫∪縺帙ｓ縲・,
    tip: "迚・礼ｲ峨ｒ螟壹ａ縺ｫ縺ｾ縺ｶ縺励※逧ｮ逶ｮ繧偵§縺｣縺上ｊ辟ｼ縺上％縺ｨ縺ｧ縲∝ｰ代↑縺・ｲｹ縺ｧ繧ゅき繝ｪ繝・き繝ｪ縺ｮ遶懃伐謠壹￡鬚ｨ縺ｫ・・,
    ingredients: [
      { name: "鮓上・縺ｭ閧・, amount: 100, unit: "g", aisle: "閧峨・鬲・ },
      { name: "髟ｷ繝阪ぐ", amount: 0.2, unit: "譛ｬ", aisle: "驥手除" },
      { name: "驟｢", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 6, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺斐∪豐ｹ", amount: 3, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "鮓剰ｉ縺ｯ蜑翫℃蛻・ｊ縺ｫ縺励※荳句袖繧偵▽縺代∫援譬礼ｲ峨ｒ縺励▲縺九ｊ縺ｾ縺ｶ縺吶る聞繝阪ぐ縺ｯ縺ｿ縺倥ｓ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "髟ｷ繝阪ぐ縲・・豐ｹ縲・・縲∫らｳ悶√＃縺ｾ豐ｹ繧呈ｷｷ縺懷粋繧上○縺ｦ逕倬・繝阪ぐ縺繧後ｒ菴懊ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ螟ｧ縺輔§2繧堤・縺励※鮓剰ｉ繧偵き繝ｪ繝・→謠壹￡辟ｼ縺阪↓縺励∝勣縺ｫ逶帙▲縺ｦ繧ｿ繝ｬ繧偵°縺代ｋ縲・
    ]
  },
  {
    id: "main_67",
    title: "雎壹％縺ｾ縺ｨ繧ｭ繝｣繝吶ヤ縺ｮ縺薙▲縺ｦ繧雁袖蝎檎ｒ繧・ｼ亥屓骰玖ｉ鬚ｨ・・,
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "all",
    time: "12蛻・,
    approxCostPerPerson: 130,
    tags: ["繧ｭ繝｣繝吶ヤ", "雎壹％縺ｾ閧・, "縺秘｣ｯ豕･譽・, "繝輔Λ繧､繝代Φ1縺､"],
    containsDislikes: [],
    description: "繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ繧ｭ繝｣繝吶ヤ縺ｨ雎夊ｉ縺ｮ邇矩％繧ｳ繝ｳ繝難ｼ∫曝霎帙＞迚ｹ陬ｽ蜷医ｏ縺帛袖蝎後ム繝ｬ縺後＠縺｣縺九ｊ邨｡繧薙〒逋ｽ縺秘｣ｯ縺梧ｭ｢縺ｾ繧翫∪縺帙ｓ縲・,
    kidsTip: "雎・攸驢､繧剃ｽｿ繧上★蜻ｳ蝎後→遐らｳ悶・縺ｿ繧翫ｓ縺ｧ逕倥ａ縺ｫ莉穂ｸ翫￡縺ｦ縺・ｋ縺ｮ縺ｧ縲∝ｰ上＆縺・♀蟄先ｧ倥〒繧ょ､ｧ貅雜ｳ縺ｮ蜻ｳ莉倥￠縺ｧ縺吶・,
    tip: "繧ｭ繝｣繝吶ヤ縺ｯ蠑ｷ轣ｫ縺ｧ謇区掠縺冗ｒ繧√※荳蠎ｦ蜿悶ｊ蜃ｺ縺励∵怙蠕後↓蜷医ｏ縺帙ｋ縺ｨ繧ｷ繝｣繧ｭ繝・→鬟滓─縺梧ｮ九ｊ縺ｾ縺吶・,
    ingredients: [
      { name: "雎壹％縺ｾ閧・, amount: 80, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繧ｭ繝｣繝吶ヤ", amount: 80, unit: "g", aisle: "驥手除" },
      { name: "蜻ｳ蝎・, amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 5, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ｭ繝｣繝吶ヤ縺ｯ荳蜿｣螟ｧ縺ｮ縺悶￥蛻・ｊ縲∬ｱ夊ｉ縺ｯ鬟溘∋繧・☆縺・､ｧ縺阪＆縺ｫ蛻・ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∬ｱ夊ｉ繧堤ｒ繧√※濶ｲ縺悟､峨ｏ縺｣縺溘ｉ繧ｭ繝｣繝吶ヤ繧貞刈縺医※蠑ｷ轣ｫ縺ｧ繧ｵ繝・→轤偵ａ繧九・,
      "蜻ｳ蝎後√∩繧翫ｓ縲・・豐ｹ縲∫らｳ門ｰ代・ｒ貅ｶ縺・◆蜷医ｏ縺幄ｪｿ蜻ｳ譁吶ｒ蜉縺医∝・菴薙↓蠑ｷ轣ｫ縺ｧ荳豌励↓邨｡繧√ｋ縲・
    ]
  },
  {
    id: "main_68",
    title: "雎壹％縺ｾ閧峨→縺九⊂縺｡繧・・逕倩ｾ帷函蟋懃ｒ繧・,
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "autumn",
    time: "15蛻・,
    approxCostPerPerson: 135,
    tags: ["縺九⊂縺｡繧・, "遘九・譌ｬ", "逕溷ｧ懃┥縺・, "雎壹％縺ｾ閧・],
    containsDislikes: ["縺九⊂縺｡繧・],
    description: "阮・・繧翫°縺ｼ縺｡繧・・繝帙け繝帙け諢溘→雎壹％縺ｾ閧峨・繧ｸ繝･繝ｼ繧ｷ繝ｼ縺ｪ閼ゅ′縲∫函蟋憺・豐ｹ繧ｿ繝ｬ縺ｧ譛鬮倥↓繝槭ャ繝√☆繧九せ繧ｿ繝溘リ遽邏・ｸｻ闖懊・,
    kidsTip: "逕溷ｧ懊ｒ謗ｧ縺医ａ縺ｫ縺励√°縺ｼ縺｡繧・・逕倥∩繧堤函縺九☆縺薙→縺ｧ蟄蝉ｾ帙◆縺｡縺ｫ繧ょ､ｧ莠ｺ豌励・逕倩ｾ帛袖縺ｫ縺ｪ繧翫∪縺吶・,
    tip: "縺九⊂縺｡繧・・5mm蟷・・阮・・繧翫↓縺吶ｋ縺薙→縺ｧ縲・崕蟄舌Ξ繝ｳ繧ｸ繧剃ｽｿ繧上★縺ｫ繝輔Λ繧､繝代Φ隱ｿ逅・□縺代〒譟斐ｉ縺九￥轣ｫ縺碁壹ｊ縺ｾ縺吶・,
    ingredients: [
      { name: "雎壹％縺ｾ閧・, amount: 80, unit: "g", aisle: "閧峨・鬲・ },
      { name: "縺九⊂縺｡繧・, amount: 70, unit: "g", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺翫ｍ縺礼函蟋・, amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺九⊂縺｡繧・・5mm蜴壹＆縺ｮ荳蜿｣螟ｧ縺ｫ繧ｹ繝ｩ繧､繧ｹ縺励∬ｱ夊ｉ縺ｫ縺ｯ霆ｽ縺丞｡ｩ縺薙＠繧・≧縺ｨ迚・礼ｲ峨ｒ縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励√°縺ｼ縺｡繧・ｒ荳ｦ縺ｹ縺ｦ荳｡髱｢荳ｭ轣ｫ縺ｧ縺薙ｓ縺後ｊ辟ｼ縺・※轣ｫ繧帝壹☆縲・,
      "雎夊ｉ繧貞刈縺医※濶ｲ縺悟､峨ｏ繧九∪縺ｧ轤偵ａ縲・・豐ｹ繝ｻ縺ｿ繧翫ｓ繝ｻ逕溷ｧ懊・遐らｳ門ｰ代・・繧ｿ繝ｬ繧堤ｵ｡繧√※辣ｧ繧翫ｒ蜃ｺ縺吶・
    ]
  },
  {
    id: "main_69",
    title: "雎壹％縺ｾ縺ｨ邇峨・縺弱・遽邏・・繝ｼ繧ｯ繝√Ε繝・・",
    category: "main",
    cuisine: "western",
    proteinType: "pork",
    season: "all",
    time: "12蛻・,
    approxCostPerPerson: 125,
    tags: ["繧ｱ繝√Ε繝・・", "蟄蝉ｾ帛､ｧ莠ｺ豌・, "豢矩｢ｨ", "雎壹％縺ｾ閧・],
    containsDislikes: [],
    description: "繝ｭ繝ｼ繧ｹ閧峨〒縺ｯ縺ｪ縺上♀謇矩・↑雎壹％縺ｾ縺ｧ菴懊ｋ邨ｶ蜩√・繝ｼ繧ｯ繝√Ε繝・・・∫脂縺ｭ縺弱・逕倥∩縺ｨ繧ｱ繝√Ε繝・・縺ｮ繧ｳ繧ｯ縺ｧ縺雁ｭ先ｧ俶ｭ灘万縺ｮ蜻ｳ縲・,
    kidsTip: "繧ｱ繝√Ε繝・・蜻ｳ縺ｯ蟄蝉ｾ帑ｺｺ豌湧o.1・・・蜻ｳ縺碁｣帙・縺ｾ縺ｧ縺励▲縺九ｊ轤偵ａ繧九→逕倥∩縺ｨ繧ｳ繧ｯ縺悟ｼ輔″遶九■縺ｾ縺吶・,
    tip: "雎夊ｉ縺ｫ迚・礼ｲ峨ｒ縺ｾ縺ｶ縺励※縺翫￥縺薙→縺ｧ縲∝ｮ峨＞雎壹％縺ｾ閧峨〒繧ゅヱ繧ｵ縺､縺九★譟斐ｉ縺九ず繝･繝ｼ繧ｷ繝ｼ縺ｫ莉穂ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "雎壹％縺ｾ閧・, amount: 80, unit: "g", aisle: "閧峨・鬲・ },
      { name: "邇峨・縺・, amount: 0.3, unit: "蛟・, aisle: "驥手除" },
      { name: "繧ｱ繝√Ε繝・・", amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "繧ｦ繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ", amount: 6, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "邇峨・縺弱・阮・・繧翫↓縺励∬ｱ夊ｉ縺ｫ縺ｯ迚・礼ｲ牙ｰ上＆縺・繧定埋縺上∪縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∬ｱ夊ｉ縺ｨ邇峨・縺弱ｒ邇峨・縺弱′縺励ｓ縺ｪ繧翫☆繧九∪縺ｧ荳ｭ轣ｫ縺ｧ轤偵ａ繧九・,
      "繧ｱ繝√Ε繝・・縲√え繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ縲・・蟆代・ｒ蜉縺医∝・菴薙↓縺励▲縺九ｊ邨｡繧∫ｒ繧√ｋ縲・
    ]
  },
  {
    id: "main_70",
    title: "雎壹ヰ繝ｩ縺ｨ繧ゅｄ縺励・繝ｬ繝ｳ繧ｸ闥ｸ縺・閭｡鮗ｻ繝昴Φ驟｢縺後￠",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 120,
    tags: ["繧ゅｄ縺・, "髮ｻ蟄舌Ξ繝ｳ繧ｸ", "雜・凾遏ｭ", "蛹・ｸ∽ｸ崎ｦ・],
    containsDislikes: [],
    description: "閠千・逧ｿ縺ｫ繧ゅｄ縺励→雎壹ヰ繝ｩ繧帝㍾縺ｭ縺ｦ繝√Φ縺吶ｋ縺縺托ｼ∫↓繧剃ｽｿ繧上★10蛻・〒螳梧・縺吶ｋ縲∫夢繧後◆譌･縺ｮ謨台ｸ紋ｸｻ繝｡繝九Η繝ｼ縲・,
    kidsTip: "雎壹ヰ繝ｩ縺ｮ逕倥＞閧画ｱ√ｒ繧ゅｄ縺励′蜷ｸ縺｣縺ｦ繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ逕伜哨縺ｫ縺ｪ繧翫√♀驥手除繧ゅ・繝ｭ繝ｪ縺ｨ鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "繧ゅｄ縺・陲九′縺ｺ繧阪ｊ縺ｨ豸郁ｲｻ縺ｧ縺阪ｋ縺九＆蠅励＠繝｡繝九Η繝ｼ縲よｴ励＞迚ｩ繧ゅ♀逧ｿ1縺､縺ｧ貂医∩縺ｾ縺呻ｼ・,
    ingredients: [
      { name: "雎壹ヰ繝ｩ閧・, amount: 70, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繧ゅｄ縺・, amount: 80, unit: "g", aisle: "驥手除" },
      { name: "繝昴Φ驟｢", amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺吶ｊ縺斐∪", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "閠千・逧ｿ縺ｫ繧ゅｄ縺励ｒ蠎・￡縲√◎縺ｮ荳翫↓雎壹ヰ繝ｩ閧峨ｒ驥阪↑繧峨↑縺・ｈ縺・↓蠎・￡縺ｦ荵励○繧九・,
      "驟貞ｰ上＆縺・縺ｨ蝪ｩ蟆代・ｒ謖ｯ繧翫√・繧薙ｏ繧翫Λ繝・・繧偵＠縺ｦ髮ｻ蟄舌Ξ繝ｳ繧ｸ・・00W・峨〒邏・縲・蛻・刈辭ｱ縺吶ｋ縲・,
      "繝昴Φ驟｢縺ｨ縺吶ｊ縺斐∪縲√＃縺ｾ豐ｹ蟆代・ｒ豺ｷ縺懷粋繧上○縺溘ち繝ｬ繧偵◆縺｣縺ｷ繧翫°縺代※螳梧・縲・
    ]
  },
  {
    id: "main_71",
    title: "雎壹％縺ｾ縺ｨ雎・距縺ｮ繧ｪ繧､繧ｹ繧ｿ繝ｼ轤偵ａ",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 110,
    tags: ["雎・距", "繧ｪ繧､繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ", "繝輔Λ繧､繝代Φ1縺､", "荳ｭ闖ｯ"],
    containsDislikes: ["雎・距"],
    description: "蜀榊庶遨ｫ繧ゅ〒縺阪ｋ雜・ｯ邏・㍽闖懊瑚ｱ・距縲阪→雎壹％縺ｾ縺ｮ繧ｳ繧ｯ譌ｨ荳ｭ闖ｯ轤偵ａ縲ゅが繧､繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ縺ｧ繝励Ο縺ｮ蜻ｳ莉倥￠縺ｫ縲・,
    kidsTip: "雎・距縺ｮ髱定・縺輔・雎夊ｉ縺ｮ閼ゅ→繧ｪ繧､繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ縺ｮ逕倩ｾ帙＆縺ｧ縺励▲縺九ｊ繝槭せ繧ｭ繝ｳ繧ｰ縺輔ｌ縲・｣溘∋繧・☆縺上↑繧翫∪縺吶・,
    tip: "雎・距縺ｯ譬ｹ蜈・ｒ谿九＠縺ｦ豌ｴ縺ｫ豬ｸ縺代※縺翫￠縺ｰ縲・騾ｱ髢灘ｾ後↓繧ゅ≧荳蠎ｦ蜿守ｩｫ縺ｧ縺阪※遽邏・柑譫・蛟搾ｼ・,
    ingredients: [
      { name: "雎壹％縺ｾ閧・, amount: 80, unit: "g", aisle: "閧峨・鬲・ },
      { name: "雎・距", amount: 0.3, unit: "陲・, aisle: "驥手除" },
      { name: "繧ｪ繧､繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ", amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 5, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "雎・距縺ｯ譬ｹ蜈・ｒ關ｽ縺ｨ縺励※蜊雁・縺ｮ髟ｷ縺輔↓蛻・ｊ縲∬ｱ夊ｉ縺ｯ荳蜿｣螟ｧ縺ｫ蛻・ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∬ｱ夊ｉ繧定牡縺悟､峨ｏ繧九∪縺ｧ蠑ｷ轣ｫ縺ｧ轤偵ａ繧九・,
      "雎・距縲√が繧､繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ縲・・豐ｹ縲・・蟆上＆縺・繧貞刈縺医∵焔譌ｩ縺・0遘偵⊇縺ｩ蠑ｷ轣ｫ縺ｧ荳豌励↓轤偵ａ蜷医ｏ縺帙ｋ縲・
    ]
  },
  {
    id: "main_72",
    title: "雎壹％縺ｾ閧峨・縺ｲ縺ｨ縺上■譴・＠縺昴き繝・｢ｨ辟ｼ縺・,
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "summer",
    time: "15蛻・,
    approxCostPerPerson: 130,
    tags: ["謠壹￡辟ｼ縺・, "縺輔▲縺ｱ繧・, "縺雁ｼ∝ｽ・, "雎壹％縺ｾ閧・],
    containsDislikes: [],
    description: "雎壹％縺ｾ閧峨ｒ繧ｮ繝･繝・→荳ｸ繧√※繝代Φ邊峨ｒ縺､縺代∵恕縺堤┥縺阪↓縺励◆繧ｵ繧ｯ繧ｵ繧ｯ荳蜿｣繧ｫ繝・よ｢・・縺輔▲縺ｱ繧頑─縺ｧ螟上〒繧る｣滓ｬｲ蛟榊｢暦ｼ・,
    kidsTip: "譴・ｹｲ縺励ｒ謗ｧ縺医ａ縺ｫ縺吶ｋ縺九メ繝ｼ繧ｺ縺ｫ螟画峩縺吶ｋ縺ｨ縲√♀蟄先ｧ倥′螟ｧ蝟懊・縺吶ｋ荳蜿｣繝√・繧ｺ繧ｫ繝・↓螟ｧ螟芽ｺｫ・・,
    tip: "迚ｹ螢ｲ縺ｮ雎壹％縺ｾ閧峨ｒ繧ｮ繝･繝・→荳ｸ繧√ｋ縺縺代〒縲・ｫ倡ｴ壹↑繝偵Ξ繧ｫ繝・・繧医≧縺ｪ譟斐ｉ縺九＞鬟滓─縺ｫ縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "雎壹％縺ｾ閧・, amount: 80, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繝代Φ邊・, amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "螟ｧ闡・, amount: 1, unit: "譫・, aisle: "驥手除" }
    ],
    instructions: [
      "雎壹％縺ｾ閧峨↓蜊・・繧雁､ｧ闡峨→蜿ｩ縺・◆譴・ｹｲ縺暦ｼ医∪縺溘・蝪ｩ繧ｳ繧ｷ繝ｧ繧ｦ・峨ｒ豺ｷ縺懊∽ｸ蜿｣螟ｧ縺ｫ繧ｮ繝･繝・→荳ｸ繧√ｋ縲・,
      "豌ｴ貅ｶ縺榊ｰ城ｺｦ邊峨↓縺上＄繧峨○縺ｦ繝代Φ邊峨ｒ縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧貞､壹ａ縺ｫ辭ｱ縺励∝ｼｱ繧√・荳ｭ轣ｫ縺ｧ霆｢縺後＠縺ｪ縺後ｉ蜈ｨ髱｢縺阪▽縺ｭ濶ｲ縺ｫ縺ｪ繧九∪縺ｧ謠壹￡辟ｼ縺阪↓縺吶ｋ縲・
    ]
  },
  {
    id: "main_73",
    title: "雎壹Ο繝ｼ繧ｹ縺ｨ邇峨・縺弱・邇矩％逕溷ｧ懃┥縺・,
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "all",
    time: "12蛻・,
    approxCostPerPerson: 150,
    tags: ["逕溷ｧ懃┥縺・, "蜥碁｢ｨ螳夂分", "縺秘｣ｯ豕･譽・, "螟ｧ貅雜ｳ"],
    containsDislikes: [],
    description: "縺吶ｊ縺翫ｍ縺礼函蟋懊→逕倩ｾ幃・豐ｹ繧ｿ繝ｬ縺檎ｵ｡繧薙□縺ｿ繧薙↑螟ｧ螂ｽ縺阪↑逕溷ｧ懃┥縺搾ｼ∫脂縺ｭ縺弱・逕倥∩縺瑚ｱ夊ｉ縺ｮ鄒主袖縺励＆繧貞ｼ輔″遶九※縺ｾ縺吶・,
    kidsTip: "縺吶ｊ縺翫ｍ縺励Μ繝ｳ繧ｴ繧帝國縺怜袖縺ｫ蟆鷹㍼蜉縺医ｋ縺ｨ縲√♀閧峨′荳谿ｵ縺ｨ譟斐ｉ縺九￥縺ｪ繧翫ヵ繝ｫ繝ｼ繝・ぅ繝ｼ縺ｧ蟄蝉ｾ帙え繧ｱ謚懃ｾ､縲・,
    tip: "縺願ｉ繧堤┥縺丞燕縺ｫ繧ｿ繝ｬ縺ｫ髟ｷ縺乗ｼｬ縺代☆縺弱↑縺・・縺後√♀閧峨′遑ｬ縺上↑繧峨★縺ｵ縺｣縺上ｉ莉穂ｸ翫′繧九さ繝・ｼ・,
    ingredients: [
      { name: "雎夊埋蛻・ｊ閧・, amount: 90, unit: "g", aisle: "閧峨・鬲・ },
      { name: "邇峨・縺・, amount: 0.3, unit: "蛟・, aisle: "驥手除" },
      { name: "縺翫ｍ縺礼函蟋・, amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 12, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "邇峨・縺弱・阮・・繧翫↓縺励∬ｱ夊ｉ縺ｫ縺ｯ阮・￥蟆城ｺｦ邊峨ｒ縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∫脂縺ｭ縺弱→雎夊ｉ繧剃ｸｭ轣ｫ縺ｧ辟ｼ縺崎牡縺後▽縺上∪縺ｧ轤偵ａ繧九・,
      "驢､豐ｹ縲√∩繧翫ｓ縲・・縲∫函蟋懊∫らｳ悶ｒ蜷医ｏ縺帙◆繧ｿ繝ｬ繧貞屓縺怜・繧後∝ｼｷ轣ｫ縺ｧ繧ｿ繝ｬ繧堤・邨｡繧√ｋ縲・
    ]
  },
  {
    id: "main_74",
    title: "雎壹％縺ｾ縺ｨ蜴壽恕縺偵・逕倩ｾ帙☆縺咲┥縺埼｢ｨ辣ｮ",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "winter",
    time: "15蛻・,
    approxCostPerPerson: 125,
    tags: ["蜴壽恕縺・, "縺九＆蠅励＠", "縺吶″辟ｼ縺埼｢ｨ", "蟄蝉ｾ帛､ｧ莠ｺ豌・],
    containsDislikes: [],
    description: "蜴壽恕縺偵〒螟ｧ繝懊Μ繝･繝ｼ繝縺ｫ縺九＆蠅励＠・∫曝霎帙＞縺吶″辟ｼ縺埼｢ｨ縺ｮ蜻ｳ莉倥￠縺悟字謠壹￡縺ｨ縺願ｉ縺ｫ縺倥ｅ繧上▲縺ｨ譟薙∩貂｡繧翫∪縺吶・,
    kidsTip: "逕倥ａ縺ｮ縺吶″辟ｼ縺榊袖縺ｪ縺ｮ縺ｧ縲∵ｸｩ豕牙嵯繧・函蜊ｵ縺ｫ縺､縺代※鬟溘∋繧九→蟄蝉ｾ帙◆縺｡繧ゅ・繝ｭ繝ｪ縺ｨ螳碁｣溘＠縺ｾ縺吶・,
    tip: "蜴壽恕縺偵・辭ｱ貉ｯ繧偵°縺代※豐ｹ謚懊″縺吶ｋ縺ｨ縲√☆縺咲┥縺阪ち繝ｬ縺檎洒譎る俣縺ｧ縺励▲縺九ｊ譟薙∩霎ｼ縺ｿ縺ｾ縺吶・,
    ingredients: [
      { name: "雎壹％縺ｾ閧・, amount: 60, unit: "g", aisle: "閧峨・鬲・ },
      { name: "蜴壽恕縺・, amount: 70, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "邇峨・縺・, amount: 0.25, unit: "蛟・, aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 12, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蜴壽恕縺偵・荳蜿｣螟ｧ縲∫脂縺ｭ縺弱・阮・・繧翫↓縺吶ｋ縲・,
      "骰九↓豌ｴ80ml縲・・豐ｹ縲∫らｳ悶√∩繧翫ｓ縲√□縺励・邏繧貞・繧後※辣ｮ遶九※縲∫脂縺ｭ縺弱→蜴壽恕縺偵ｒ蜈･繧後※3蛻・・繧九・,
      "雎夊ｉ繧偵⊇縺舌＠蜈･繧後√い繧ｯ繧貞叙繧翫↑縺後ｉ縺願ｉ縺ｫ轣ｫ縺碁壹ｋ縺ｾ縺ｧ蠑ｱ轣ｫ縺ｧ4縲・蛻・・蜷ｫ繧√ｋ縲・
    ]
  },
  {
    id: "main_75",
    title: "雎夊ｉ縺ｨ逋ｽ闖懊・驥阪・繝溘Ν繝輔ぅ繝ｼ繝ｦ骰矩｢ｨ",
    category: "main",
    cuisine: "japanese",
    proteinType: "pork",
    season: "winter",
    time: "20蛻・,
    approxCostPerPerson: 130,
    tags: ["逋ｽ闖・, "蜀ｬ縺ｮ譌ｬ", "骰矩｢ｨ", "縺ｻ縺｣縺薙ｊ"],
    containsDislikes: [],
    description: "逋ｽ闖懊→雎夊ｉ繧剃ｺ､莠偵↓驥阪・縺ｦ辣ｮ霎ｼ繧縺縺托ｼ∫區闖懊・豌ｴ蛻・□縺代〒闥ｸ縺礼・縺ｫ縺吶ｋ縺ｮ縺ｧ縲∫ｴ譚舌・逕倥∩縺ｨ譌ｨ蜻ｳ縺悟・邵ｮ縺輔ｌ縺ｾ縺吶・,
    kidsTip: "逋ｽ闖懊′繝医Ο繝・ヨ繝ｭ縺ｫ譟斐ｉ縺九￥縺ｪ繧九・縺ｧ縲∵勸谿ｵ驥手除繧帝｣溘∋縺ｪ縺・ｭ舌ｂ閾ｪ蛻・°繧峨♀莉｣繧上ｊ縺励※縺上ｌ縺ｾ縺吶・,
    tip: "繝輔Λ繧､繝代Φ繧・ｵ・豪縺ｫ謨ｷ縺崎ｩｰ繧√※蜉辭ｱ縺吶ｋ縺縺代りｪｿ蜻ｳ譁吶・逋ｽ縺縺励□縺代〒繝薙す繝・→蜻ｳ縺梧ｱｺ縺ｾ繧翫∪縺吶・,
    ingredients: [
      { name: "雎壹ヰ繝ｩ閧・, amount: 70, unit: "g", aisle: "閧峨・鬲・ },
      { name: "逋ｽ闖・, amount: 100, unit: "g", aisle: "驥手除" },
      { name: "逋ｽ縺縺・, amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "逋ｽ闖懊→雎夊ｉ繧剃ｺ､莠偵↓驥阪・縲・cm蟷・↓蛻・ｊ縺昴ｍ縺医ｋ縲・,
      "骰九・繝輔メ縺九ｉ荳ｭ蠢・↓蜷代°縺｣縺ｦ蛻・ｊ蜿｣繧剃ｸ翫↓縺励※縺弱▲縺励ｊ謨ｷ縺崎ｩｰ繧√ｋ縲・,
      "豌ｴ100ml縲∫區縺縺励・・螟ｧ縺輔§1繧貞屓縺怜・繧後√ヵ繧ｿ繧偵＠縺ｦ荳ｭ轣ｫ縺ｧ邏・0縲・2蛻・頂縺礼・縺ｫ縺吶ｋ縲・
    ]
  },
  {
    id: "main_76",
    title: "雎壹％縺ｾ縺ｨ繝斐・繝槭Φ縺ｮ遽邏・搨讀定ｉ邨ｲ・医メ繝ｳ繧ｸ繝｣繧ｪ繝ｭ繝ｼ繧ｹ・・,
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "summer",
    time: "12蛻・,
    approxCostPerPerson: 120,
    tags: ["繝斐・繝槭Φ", "荳ｭ闖ｯ螳夂分", "縺溘￠縺ｮ縺謎ｸ崎ｦ・, "雎壹％縺ｾ閧・],
    containsDislikes: ["繝斐・繝槭Φ"],
    description: "鬮倥＞縺溘￠縺ｮ縺薙ｄ迚幄ｉ繧剃ｽｿ繧上★縲∬ｱ壹％縺ｾ縺ｨ縺倥ｃ縺後＞繧ゅ〒謇玖ｻｽ縺ｫ莉｣逕ｨ・√す繝｣繧ｭ繧ｷ繝｣繧ｭ繝斐・繝槭Φ縺ｨ繧ｪ繧､繧ｹ繧ｿ繝ｼ縺繧後′邨ｶ蜩√・,
    kidsTip: "繝斐・繝槭Φ縺ｮ闍ｦ蜻ｳ縺ｯ邵ｦ蛻・ｊ縺ｫ縺励※豐ｹ縺ｧ繧ｵ繝・→轤偵ａ繧九％縺ｨ縺ｧ螟ｧ蟷・↓豼貂幢ｼ∫曝蜿｣繧ｪ繧､繧ｹ繧ｿ繝ｼ蜻ｳ縺ｧ蜈区恪縺ｫ譛驕ｩ縲・,
    tip: "縺溘￠縺ｮ縺薙・莉｣繧上ｊ縺ｫ邏ｰ蛻・ｊ縺倥ｃ縺後＞繧ゅｒ菴ｿ縺・→縲・｣滓─繧り憶縺上〒繧薙・繧薙〒繧ｿ繝ｬ縺後ｈ縺冗ｵ｡繧薙〒荳遏ｳ莠碁ｳ･・・,
    ingredients: [
      { name: "雎壹％縺ｾ閧・, amount: 70, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繝斐・繝槭Φ", amount: 1, unit: "蛟・, aisle: "驥手除" },
      { name: "縺倥ｃ縺後＞繧・, amount: 0.4, unit: "蛟・, aisle: "驥手除" },
      { name: "繧ｪ繧､繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ", amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 6, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝斐・繝槭Φ縲√§繧・′縺・ｂ縲∬ｱ夊ｉ縺ｯ縺吶∋縺ｦ邏ｰ蛻・ｊ縺ｫ縺励∬ｱ夊ｉ縺ｫ驟偵・驢､豐ｹ蟆代・→迚・礼ｲ峨ｒ縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∬ｱ夊ｉ繧堤ｒ繧√∬牡縺悟､峨ｏ縺｣縺溘ｉ縺倥ｃ縺後＞繧ゅｒ蜉縺医※騾上″騾壹ｋ縺ｾ縺ｧ轤偵ａ繧九・,
      "繝斐・繝槭Φ繧貞刈縺医√が繧､繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ縲・・豐ｹ縲∫らｳ門ｰ上＆縺・/2繧貞刈縺医※蠑ｷ轣ｫ縺ｧ繧ｵ繝・→轤偵ａ蜷医ｏ縺帙ｋ縲・
    ]
  },
  {
    id: "main_77",
    title: "縺ｲ縺崎ｉ縺ｨ蜴壽恕縺偵・繝懊Μ繝･繝ｼ繝鮗ｻ蟀・ｱ・・",
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    season: "all",
    time: "15蛻・,
    approxCostPerPerson: 115,
    tags: ["蜴壽恕縺・, "鮗ｻ蟀・ｱ・・", "蟄蝉ｾ帛､ｧ莠ｺ豌・, "繝輔Λ繧､繝代Φ1縺､"],
    containsDislikes: [],
    description: "蟠ｩ繧後ｄ縺吶＞邨ｹ雎・・縺ｮ莉｣繧上ｊ縺ｫ蜴壽恕縺偵ｒ菴ｿ逕ｨ・∵ｰｴ蛻・ｊ荳崎ｦ√〒蟠ｩ繧後★縲√・縺崎ｉ縺ｮ譌ｨ蜻ｳ縺ゅｓ縺後◆縺｣縺ｷ繧顔ｵ｡縺ｿ縺ｾ縺吶・,
    kidsTip: "霎帛袖隱ｿ蜻ｳ譁吶・蜈･繧後★縲∝袖蝎後→繧ｱ繝√Ε繝・・繝ｻ驢､豐ｹ縺ｧ縺ｾ繧阪ｄ縺九↓莉穂ｸ翫￡繧九・縺ｧ蟆上＆縺ｪ縺雁ｭ先ｧ倥ｂ螳牙ｿ・・,
    tip: "蜴壽恕縺偵ｒ菴ｿ縺・％縺ｨ縺ｧ鬟溘∋縺斐◆縺域ｺ轤ｹ縲∫ｿ梧律縺ｮ縺雁ｼ∝ｽ薙↓蜈･繧後※繧よｰｴ豌励′蜃ｺ縺壼､ｧ豢ｻ霄阪＠縺ｾ縺吶・,
    ingredients: [
      { name: "雎壹・縺崎ｉ", amount: 50, unit: "g", aisle: "閧峨・鬲・ },
      { name: "蜴壽恕縺・, amount: 80, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "髟ｷ繝阪ぐ", amount: 0.2, unit: "譛ｬ", aisle: "驥手除" },
      { name: "蜻ｳ蝎・, amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蜴壽恕縺偵・1.5cm隗偵・聞繝阪ぐ縺ｯ縺ｿ縺倥ｓ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｧ縺ｲ縺崎ｉ繧堤ｒ繧√∬牡縺悟､峨ｏ縺｣縺溘ｉ繝阪ぐ縺ｨ蜴壽恕縺偵ｒ蜉縺医※轤偵ａ蜷医ｏ縺帙ｋ縲・,
      "豌ｴ80ml縲∝袖蝎後・・豐ｹ縲∫らｳ悶・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏繧貞刈縺医・蛻・・縺ｦ豌ｴ貅ｶ縺咲援譬礼ｲ峨〒縺ｨ繧阪∩繧偵▽縺代ｋ縲・
    ]
  },
  {
    id: "main_78",
    title: "縺九⊂縺｡繧・→蜷医＞謖ｽ縺崎ｉ縺ｮ逕倩ｾ帙◎縺ｼ繧咲・",
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "autumn",
    time: "18蛻・,
    approxCostPerPerson: 125,
    tags: ["縺九⊂縺｡繧・, "遘九・譌ｬ", "縺昴⊂繧阪≠繧・, "蟄蝉ｾ帛､ｧ莠ｺ豌・],
    containsDislikes: ["縺九⊂縺｡繧・],
    description: "繝帙け繝帙け縺ｮ縺九⊂縺｡繧・↓縲√♀閧峨・譌ｨ蜻ｳ縺後℃縺｣縺励ｊ隧ｰ縺ｾ縺｣縺溽曝霎帙◎縺ｼ繧阪≠繧薙ｒ縺ｨ繧阪懊ｊ縺九￠縺溷､ｧ莠ｺ豌励♀縺九★縲・,
    kidsTip: "縺昴⊂繧阪≠繧薙・繝医Ο繝溘′縺九⊂縺｡繧・ｒ蛹・∩霎ｼ縺ｿ縲√ヱ繧ｵ縺､縺九★蝟芽ｶ翫＠縺ｪ繧√ｉ縺九↓鄒主袖縺励￥鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "縺ｲ縺崎ｉ繧堤ｒ繧√※縺九ｉ辣ｮ豎√ｒ蜉縺医ｋ縺薙→縺ｧ縲∬ｉ縺ｮ閾ｭ縺ｿ縺梧ｶ医∴縺ｦ鬥吶・縺励＞繧ｳ繧ｯ縺悟・縺ｾ縺吶・,
    ingredients: [
      { name: "蜷医＞謖ｽ縺崎ｉ", amount: 50, unit: "g", aisle: "閧峨・鬲・ },
      { name: "縺九⊂縺｡繧・, amount: 80, unit: "g", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 6, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺九⊂縺｡繧・・荳蜿｣螟ｧ縺ｫ蛻・ｋ縲・,
      "骰九↓蟆鷹㍼縺ｮ豐ｹ繧堤・縺励※縺ｲ縺崎ｉ繧堤ｒ繧√√・繝ｭ繝昴Ο縺ｫ縺ｪ縺｣縺溘ｉ縺九⊂縺｡繧・→豌ｴ100ml縲∬ｪｿ蜻ｳ譁吶ｒ蜉縺医ｋ縲・,
      "關ｽ縺ｨ縺苓搭繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ10蛻・・霎ｼ縺ｿ縲√°縺ｼ縺｡繧・′譟斐ｉ縺九￥縺ｪ縺｣縺溘ｉ豌ｴ貅ｶ縺咲援譬礼ｲ峨〒縺ｨ繧阪∩繧偵▽縺代ｋ縲・
    ]
  },
  {
    id: "main_79",
    title: "遽邏・ｱ壹・縺崎ｉ縺ｨ縺溘▲縺ｷ繧翫く繝｣繝吶ヤ縺ｮ繝｡繝ｳ繝√き繝・｢ｨ",
    category: "main",
    cuisine: "western",
    proteinType: "mince",
    season: "all",
    time: "20蛻・,
    approxCostPerPerson: 110,
    tags: ["繧ｭ繝｣繝吶ヤ", "縺九＆蠅励＠", "謠壹￡辟ｼ縺・, "蟄蝉ｾ帛､ｧ莠ｺ豌・],
    containsDislikes: [],
    description: "縺ｲ縺崎ｉ縺ｨ蜷碁㍼縺ｮ蜊・・繧翫く繝｣繝吶ヤ繧呈ｷｷ縺懆ｾｼ繧薙〒繝薙ャ繧ｰ縺ｫ縺九＆蠅励＠・∬ｉ豎√ｒ蜷ｸ縺｣縺溘く繝｣繝吶ヤ縺檎曝縺上※繧ｸ繝･繝ｼ繧ｷ繝ｼ縲・,
    kidsTip: "繧ｭ繝｣繝吶ヤ縺後◆縺｣縺ｷ繧雁・縺｣縺ｦ縺・ｋ縺薙→縺ｧ驥阪◆縺上↑繧峨★縲√♀閧峨・閼ゅ▲縺薙＆縺瑚協謇九↑蟄舌ｂ螟ｧ邨ｶ雉幢ｼ・,
    tip: "荳ｸ繧√★縺ｫ繝輔Λ繧､繝代Φ荳髱｢縺ｫ繧ｿ繝阪ｒ蠎・￡縺ｦ螟ｧ縺阪￥辟ｼ縺阪∝・繧雁・縺代ｌ縺ｰ謌仙ｽ｢縺ｮ謇矩俣繧ゅぞ繝ｭ・・,
    ingredients: [
      { name: "雎壹・縺崎ｉ", amount: 60, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繧ｭ繝｣繝吶ヤ", amount: 60, unit: "g", aisle: "驥手除" },
      { name: "繝代Φ邊・, amount: 12, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "荳ｭ豼・た繝ｼ繧ｹ", amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ｭ繝｣繝吶ヤ縺ｯ邊励∩縺倥ｓ蛻・ｊ縺ｫ縺励∝｡ｩ蟆代・ｒ謖ｯ縺｣縺ｦ霆ｽ縺乗ｰｴ豌励ｒ邨槭ｋ縲・,
      "繝懊え繝ｫ縺ｫ縺ｲ縺崎ｉ縲√く繝｣繝吶ヤ縲√ヱ繝ｳ邊峨∝嵯蟆代・∝｡ｩ縺薙＠繧・≧繧貞・繧後※繧医￥邱ｴ繧翫∝ｹｳ縺溘＞蟆丞愛蝙九↓縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧貞､ｧ縺輔§2辭ｱ縺励√ヱ繝ｳ邊峨ｒ陦ｨ髱｢縺ｫ謚ｼ縺嶺ｻ倥￠縺ｦ荳｡髱｢繧ｫ繝ｪ繝・→鬥吶・縺励￥謠壹￡辟ｼ縺阪↓縺吶ｋ縲・
    ]
  },
  {
    id: "main_80",
    title: "繧ゅｄ縺励→雎壹・縺崎ｉ縺ｮ逕倩ｾ帛擱縲・ｒ繧・,
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 85,
    tags: ["繧ゅｄ縺・, "豼螳・, "縺秘｣ｯ豕･譽・, "繝輔Λ繧､繝代Φ1縺､"],
    containsDislikes: [],
    description: "1陲・0蜀・床縺ｮ繧ゅｄ縺励→縺ｲ縺崎ｉ縺ｧ菴懊ｋ雜・ｵｶ蜩√♀縺九★・∬Γ鮗ｻ縺ｨ蜻ｳ蝎後・雎翫°縺ｪ繧ｳ繧ｯ縺ｧ縺秘｣ｯ縺御ｽ墓擶縺ｧ繧ゅ＞縺代ｋ遽邏・・蜻ｳ譁ｹ縲・,
    kidsTip: "霎帛袖縺ｪ縺励・逕倩ｾ帙＃縺ｾ蜻ｳ蝎御ｻ慕ｫ九※縺ｪ縺ｮ縺ｧ縲√Λ繝ｼ繝｡繝ｳ縺ｮ蜈ｷ繧・♀邀ｳ縺ｫ荵励○縺ｦ荳ｼ縺ｫ縺励※繧ょ､ｧ莠ｺ豌暦ｼ・,
    tip: "繧ゅｄ縺励・蠑ｷ轣ｫ縺ｧ荳豌励↓轤偵ａ繧九％縺ｨ縺ｧ豌ｴ蛻・ｒ蜃ｺ縺輔★縲∵怙蠕後∪縺ｧ繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ諢溘ｒ繧ｭ繝ｼ繝励〒縺阪∪縺吶・,
    ingredients: [
      { name: "雎壹・縺崎ｉ", amount: 50, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繧ゅｄ縺・, amount: 90, unit: "g", aisle: "驥手除" },
      { name: "縺吶ｊ縺斐∪", amount: 5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "蜻ｳ蝎・, amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧貞ｼ輔°縺壹↓縺ｲ縺崎ｉ繧堤ｒ繧√∬р縺悟・縺ｦ縺阪◆繧臥↓繧帝壹☆縲・,
      "繧ゅｄ縺励ｒ蜉縺医∝ｼｷ轣ｫ縺ｧ繧ｵ繝・→1蛻・⊇縺ｩ轤偵ａ繧九・,
      "蜻ｳ蝎後・・豐ｹ蟆上＆縺・縲∫らｳ門ｰ上＆縺・縲√☆繧翫＃縺ｾ繧貞粋繧上○縺溘ち繝ｬ繧貞刈縺医∝・菴薙↓謇区掠縺冗ｵ｡繧√ｋ縲・
    ]
  },
  {
    id: "main_81",
    title: "雎壹・縺崎ｉ縺ｨ繝翫せ縺ｮ繝槭う繝ｫ繝蛾ｺｻ蟀・隙蟄・,
    category: "main",
    cuisine: "chinese",
    proteinType: "mince",
    season: "summer",
    time: "15蛻・,
    approxCostPerPerson: 120,
    tags: ["縺ｪ縺・, "螟城㍽闖・, "蟄蝉ｾ帛､ｧ莠ｺ豌・, "荳ｭ闖ｯ螳夂分"],
    containsDislikes: ["縺ｪ縺・],
    description: "豐ｹ繧貞精縺｣縺ｦ繝医Ο繝医Ο縺ｫ縺ｪ縺｣縺溘リ繧ｹ縺ｫ縲√ず繝･繝ｼ繧ｷ繝ｼ縺ｪ雎壹・縺崎ｉ縺ｮ縺ゅｓ縺檎ｵ｡繧螟上・邇矩％縺翫°縺壹・,
    kidsTip: "霎帙＞雎・攸驢､縺ｯ菴ｿ繧上★繧ｱ繝√Ε繝・・縺ｨ蜻ｳ蝎後ｒ髫縺怜袖縺ｫ縺吶ｋ縺薙→縺ｧ縲√リ繧ｹ雖後＞縺ｪ蟄舌ｂ螟ｧ螂ｽ縺阪↑逕伜哨縺ｫ縲・,
    tip: "繝翫せ縺ｯ荵ｱ蛻・ｊ縺ｫ縺励※縺九ｉ豐ｹ繧貞ｰ鷹㍼邨｡繧√※縺翫￥縺ｨ縲∝ｰ代↑縺・ｲｹ縺ｧ繧ゅΒ繝ｩ縺ｪ縺乗沐繧峨°縺冗ｒ繧∽ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "雎壹・縺崎ｉ", amount: 50, unit: "g", aisle: "閧峨・鬲・ },
      { name: "縺ｪ縺・, amount: 1, unit: "譛ｬ", aisle: "驥手除" },
      { name: "蜻ｳ蝎・, amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 6, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝翫せ縺ｯ荵ｱ蛻・ｊ縺ｫ縺励※豌ｴ縺ｫ縺輔ｉ縺励∵ｰｴ豌励ｒ縺励▲縺九ｊ諡ｭ縺榊叙繧九・,
      "繝輔Λ繧､繝代Φ縺ｫ螟壹ａ縺ｮ豐ｹ繧堤・縺励√リ繧ｹ繧堤坩逶ｮ縺九ｉ縺薙ｓ縺後ｊ轤偵ａ縺ｦ荳蠎ｦ蜿悶ｊ蜃ｺ縺吶・,
      "縺ｲ縺崎ｉ繧堤ｒ繧√√リ繧ｹ繧呈綾縺怜・繧後※蜷医ｏ縺幄ｪｿ蜻ｳ譁呻ｼ域ｰｴ60ml縲∝袖蝎後・・豐ｹ縲∫らｳ悶・ｶ上ぎ繝ｩ・峨→縺ｨ繧阪∩繧堤ｵ｡繧√ｋ縲・
    ]
  },
  {
    id: "main_82",
    title: "鮓上・縺崎ｉ縺ｨ雎・・縺ｮ縺ｵ繧薙ｏ繧翫▽縺上・辣ｧ繧顔┥縺・,
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "all",
    time: "18蛻・,
    approxCostPerPerson: 95,
    tags: ["雎・・縺九＆蠅励＠", "鮓上・縺崎ｉ", "縺雁ｼ∝ｽ・, "縺ｵ繧上・繧・],
    containsDislikes: [],
    description: "雎・・繧偵◆縺｣縺ｷ繧頑ｷｷ縺懊※菫｡縺倥ｉ繧後↑縺・⊇縺ｩ譟斐ｉ縺具ｼ∫曝霎帷・繧顔┥縺阪ム繝ｬ縺檎ｵ｡繧薙〒縲∽ｽ募九〒繧る｣溘∋繧峨ｌ繧九・繝ｫ繧ｷ繝ｼ縺､縺上・縲・,
    kidsTip: "繝代し縺､縺阪ぞ繝ｭ縺ｮ縺ｵ繧薙ｏ繧企｣滓─縺ｪ縺ｮ縺ｧ縲・屬荵ｳ鬟溷ｮ御ｺ・悄縲懷ｰ上＆縺ｪ縺雁ｭ先ｧ倥↓繧ょｮ牙ｿ・＠縺ｦ蜃ｺ縺帙∪縺吶・,
    tip: "鮓上・縺崎ｉ・医・縺ｭ・峨ｒ菴ｿ縺医・1莠ｺ蜑・00蜀・悴貅・∝・蜃堺ｿ晏ｭ倥ｂ縺ｧ縺阪ｋ縺ｮ縺ｧ縺雁ｼ∝ｽ薙せ繝医ャ繧ｯ縺ｫ繧よ怙驕ｩ縲・,
    ingredients: [
      { name: "鮓上・縺崎ｉ", amount: 50, unit: "g", aisle: "閧峨・鬲・ },
      { name: "譛ｨ邯ｿ雎・・", amount: 50, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝懊え繝ｫ縺ｫ鮓上・縺崎ｉ縲∵ｰｴ蛻・ｊ縺励◆雎・・縲∫援譬礼ｲ牙､ｧ縺輔§1縲∝｡ｩ蟆代・ｒ蜈･繧後※繧医￥邱ｴ繧雁粋繧上○繧九・,
      "荳蜿｣螟ｧ縺ｮ蟆丞愛蝙九↓謌仙ｽ｢縺励√ヵ繝ｩ繧､繝代Φ縺ｧ荳｡髱｢繧帝ｦ吶・縺励￥辟ｼ縺上・,
      "驢､豐ｹ縲√∩繧翫ｓ縲∫らｳ門推蜷碁㍼繧貞屓縺怜・繧後√ち繝ｬ縺ｫ縺ｨ繧阪∩縺後▽縺上∪縺ｧ邨｡繧∫┥縺上・
    ]
  },
  {
    id: "main_83",
    title: "縺ｲ縺崎ｉ縺ｨ縺倥ｃ縺後＞繧ゅ・逕倩ｾ帙◎縺ｼ繧咲ｒ繧・,
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "all",
    time: "15蛻・,
    approxCostPerPerson: 100,
    tags: ["縺倥ｃ縺後＞繧・, "縺ｻ縺上⊇縺・, "蟄蝉ｾ帛､ｧ莠ｺ豌・, "蟶ｸ蛯呵除"],
    containsDislikes: [],
    description: "繝帙け繝帙け縺倥ｃ縺後＞繧ゅ→縺願ｉ縺ｮ譌ｨ蜻ｳ縺昴⊂繧阪・逶ｸ諤ｧ縺梧栢鄒､・∫・迚ｩ繧医ｊ繧よ凾遏ｭ縺ｧ菴懊ｌ繧九√＃鬟ｯ縺碁ｲ繧縺翫°縺壹・,
    kidsTip: "縺倥ｃ縺後＞繧ゅ↓縺ｲ縺崎ｉ縺ｮ繧ｿ繝ｬ縺後＠縺｣縺九ｊ譟薙∩霎ｼ縺ｿ縲√さ繝ｭ繝・こ縺ｮ荳ｭ霄ｫ縺ｮ繧医≧縺ｪ蟄蝉ｾ帛女縺第栢鄒､縺ｮ蜻ｳ縺ｫ縲・,
    tip: "縺倥ｃ縺後＞繧ゅ・蜈医↓繝ｬ繝ｳ繧ｸ縺ｧ蜉辭ｱ縺励※縺翫￠縺ｰ縲∫ｒ繧∵凾髢薙ｏ縺壹°3蛻・〒繝帙け繝帙け縺ｫ莉穂ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "雎壹・縺崎ｉ", amount: 50, unit: "g", aisle: "閧峨・鬲・ },
      { name: "縺倥ｃ縺後＞繧・, amount: 1, unit: "蛟・, aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺倥ｃ縺後＞繧ゅ・逧ｮ繧偵・縺・※荳蜿｣螟ｧ縺ｫ蛻・ｊ縲∬千・螳ｹ蝎ｨ縺ｫ蜈･繧後※繝ｬ繝ｳ繧ｸ縺ｧ3蛻・刈辭ｱ縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｧ縺ｲ縺崎ｉ繧偵・繝ｭ繝昴Ο縺ｫ縺ｪ繧九∪縺ｧ轤偵ａ縲∽ｽ吝・縺ｪ閼ゅｒ諡ｭ縺榊叙繧九・,
      "縺倥ｃ縺後＞繧ゅ→驢､豐ｹ縲√∩繧翫ｓ縲∫らｳ門ｰ代・ｒ蜉縺医∝・菴薙↓辣ｧ繧翫′蜃ｺ繧九∪縺ｧ轤偵ａ蜷医ｏ縺帙ｋ縲・
    ]
  },
  {
    id: "main_84",
    title: "繝斐・繝槭Φ縺ｮ閧芽ｩｰ繧・繧ｳ繧ｯ譌ｨ逕倩ｾ帙ち繝ｬ",
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "summer",
    time: "20蛻・,
    approxCostPerPerson: 125,
    tags: ["繝斐・繝槭Φ", "蟄蝉ｾ帛､ｧ莠ｺ豌・, "螳夂分豢矩｣・, "蜷域舷縺崎ｉ"],
    containsDislikes: ["繝斐・繝槭Φ"],
    description: "繝斐・繝槭Φ縺ｮ蜀・・縺ｫ蟆城ｺｦ邊峨ｒ謖ｯ繧九％縺ｨ縺ｧ閧峨□縺ｭ縺悟翁縺後ｌ縺壹ず繝･繝ｼ繧ｷ繝ｼ・∫曝霎帙ム繝ｬ縺ｧ繝斐・繝槭Φ縺ｮ闍ｦ蜻ｳ繧呈─縺倥＆縺帙∪縺帙ｓ縲・,
    kidsTip: "縺願ｉ縺ｮ閼ゅ′繝斐・繝槭Φ縺ｫ譟薙∩霎ｼ縺ｿ縲∫曝霎帙ム繝ｬ縺ｨ邨｡繧縺薙→縺ｧ繝斐・繝槭Φ雖後＞繧貞・譛阪☆繧九″縺｣縺九￠縺ｫ・・,
    tip: "繧ｿ繝阪ｒ隧ｰ繧√ｋ蜑阪↓繝斐・繝槭Φ縺ｮ蜀・・縺ｫ闌ｶ縺薙＠縺ｧ阮・￥蟆城ｺｦ邊峨ｒ縺ｯ縺溘￥縺ｨ縲∫ｵｶ蟇ｾ縺ｫ閧峨□縺ｭ縺悟翁縺後ｌ縺ｾ縺帙ｓ縲・,
    ingredients: [
      { name: "蜷域舷縺崎ｉ", amount: 60, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繝斐・繝槭Φ", amount: 1.5, unit: "蛟・, aisle: "驥手除" },
      { name: "邇峨・縺・, amount: 0.2, unit: "蛟・, aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝斐・繝槭Φ縺ｯ邵ｦ蜊雁・縺ｫ蛻・▲縺ｦ遞ｮ繧貞叙繧翫∝・蛛ｴ縺ｫ蟆城ｺｦ邊峨ｒ阮・￥縺ｾ縺ｶ縺吶ら脂縺ｭ縺弱・縺ｿ縺倥ｓ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "縺ｲ縺崎ｉ縲∫脂縺ｭ縺弱√ヱ繝ｳ邊峨∝｡ｩ縺薙＠繧・≧繧偵ｈ縺冗ｷｴ繧翫√ヴ繝ｼ繝槭Φ縺ｫ髫咎俣縺ｪ縺剰ｩｰ繧√ｋ縲・,
      "閧峨・髱｢縺九ｉ繝輔Λ繧､繝代Φ縺ｧ辟ｼ縺阪∫┥縺崎牡縺後▽縺・◆繧芽｣剰ｿ斐＠縺ｦ繝輔ち繧偵＠闥ｸ縺礼┥縺阪る・豐ｹ繝ｻ縺ｿ繧翫ｓ繝ｻ遐らｳ悶・繧ｿ繝ｬ繧堤ｵ｡繧√ｋ縲・
    ]
  },
  {
    id: "main_85",
    title: "蜷域舷縺崎ｉ縺ｨ螳檎・繝医・繝医・邁｡蜊倥Α繝ｼ繝医た繝ｼ繧ｹ繝代せ繧ｿ鬚ｨ",
    category: "main",
    cuisine: "western",
    proteinType: "mince",
    season: "summer",
    time: "20蛻・,
    approxCostPerPerson: 130,
    tags: ["繝医・繝・, "蟄蝉ｾ帛､ｧ莠ｺ豌・, "豢矩｢ｨ螳夂分", "繝輔Λ繧､繝代Φ1縺､"],
    containsDislikes: ["繝医・繝・],
    description: "繝医・繝医・驟ｸ蜻ｳ縺ｨ縺ｲ縺崎ｉ縺ｮ譌ｨ蜻ｳ縺後℃繧・▲縺ｨ隧ｰ縺ｾ縺｣縺滓焔菴懊ｊ繝溘・繝医た繝ｼ繧ｹ縲ゅ＃鬟ｯ縺ｫ縺九￠縺ｦ繝峨Μ繧｢鬚ｨ縺ｫ縺励※繧らｵｶ蜩・ｼ・,
    kidsTip: "驟ｸ蜻ｳ縺瑚協謇九↑蟄蝉ｾ帙↓縺ｯ縲√こ繝√Ε繝・・縺ｨ遐らｳ悶ｒ蟆代＠雜ｳ縺励※逕伜哨縺ｫ莉穂ｸ翫￡繧九→螟ｧ蝟懊・縺ｧ縺翫°繧上ｊ縺励∪縺吶・,
    tip: "邇峨・縺弱ｒ縺励▲縺九ｊ轤偵ａ縺ｦ逕倥∩繧貞ｼ輔″蜃ｺ縺吶・縺後∝ｸりｲｩ縺ｮ繝ｫ繝ｼ繧剃ｽｿ繧上★縺ｫ繧ｳ繧ｯ繧貞・縺咏ｧ倩ｨ｣縺ｧ縺吶・,
    ingredients: [
      { name: "蜷域舷縺崎ｉ", amount: 60, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繝医・繝育ｼｶ", amount: 80, unit: "g", aisle: "驥手除" },
      { name: "邇峨・縺・, amount: 0.3, unit: "蛟・, aisle: "驥手除" },
      { name: "繧ｱ繝√Ε繝・・", amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "邇峨・縺弱・縺ｿ縺倥ｓ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∫脂縺ｭ縺弱′騾上″騾壹ｋ縺ｾ縺ｧ轤偵ａ縲√・縺崎ｉ繧貞刈縺医※繝昴Ο繝昴Ο縺ｫ縺ｪ繧九∪縺ｧ轤偵ａ繧九・,
      "繝医・繝育ｼｶ縲√こ繝√Ε繝・・縲√え繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ蟆上＆縺・縲√さ繝ｳ繧ｽ繝｡蟆代・ｒ蜉縺医∽ｸｭ轣ｫ縺ｧ7縲・蛻・・隧ｰ繧√ｋ縲・
    ]
  },
  {
    id: "main_86",
    title: "雎壹・縺崎ｉ縺ｨ螟ｧ譬ｹ縺ｮ縺ｨ繧阪∩逕溷ｧ懊≠繧薙°縺・,
    category: "main",
    cuisine: "japanese",
    proteinType: "mince",
    season: "winter",
    time: "20蛻・,
    approxCostPerPerson: 105,
    tags: ["螟ｧ譬ｹ", "蜥碁｢ｨ螳夂分", "縺ゅ▲縺溘°", "逕溷ｧ・],
    containsDislikes: [],
    description: "螟ｧ譬ｹ縺ｮ蜆ｪ縺励＞逕倥∩縺ｨ縺ｲ縺崎ｉ縺ｮ譌ｨ蜻ｳ縺梧ｺｶ縺題ｾｼ繧薙□辭ｱ縲・≠繧薙°縺代ら函蟋懊・鬚ｨ蜻ｳ縺ｧ菴薙・闃ｯ縺九ｉ繝昴き繝昴き貂ｩ縺ｾ繧翫∪縺吶・,
    kidsTip: "逕溷ｧ懊ｒ蟆代↑繧√↓縺吶ｌ縺ｰ蟆上＆縺ｪ蟄蝉ｾ帙ｂ鬟溘∋繧・☆縺上√＃鬟ｯ縺ｫ縺溘▲縺ｷ繧翫°縺代※縺ゅｓ縺九￠荳ｼ縺ｫ縺吶ｋ縺ｨ螂ｽ隧輔〒縺吶・,
    tip: "螟ｧ譬ｹ縺ｯ蟆上＆繧√・隗貞・繧奇ｼ医＆縺・・逶ｮ・峨↓縺吶ｋ縺ｨ轣ｫ縺ｮ騾壹ｊ縺梧掠縺上・0蛻・・繧九□縺代〒繝医Ο繝医Ο縺ｫ縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "雎壹・縺崎ｉ", amount: 50, unit: "g", aisle: "閧峨・鬲・ },
      { name: "螟ｧ譬ｹ", amount: 80, unit: "g", aisle: "驥手除" },
      { name: "繧√ｓ縺､繧・, amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縺ｯ1cm隗偵・縺輔＞縺ｮ逶ｮ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "骰九〒縺ｲ縺崎ｉ繧堤ｒ繧√∬牡縺悟､峨ｏ縺｣縺溘ｉ螟ｧ譬ｹ縺ｨ豌ｴ150ml縲√ａ繧薙▽繧・ｒ蜉縺医※繝輔ち繧偵＠蠑ｱ轣ｫ縺ｧ8蛻・・繧九・,
      "螟ｧ譬ｹ縺梧沐繧峨°縺上↑縺｣縺溘ｉ豌ｴ貅ｶ縺咲援譬礼ｲ峨ｒ蝗槭＠蜈･繧後√＠縺｣縺九ｊ豐ｸ鬨ｰ縺輔○縺ｦ縺ｨ繧阪∩繧偵▽縺代ｋ縲・
    ]
  },
  {
    id: "main_87",
    title: "繧ｵ繝千ｼｶ縺ｨ繧ｭ繝｣繝吶ヤ縺ｮ繧ｳ繧ｯ譌ｨ繝医・繝育・霎ｼ縺ｿ",
    category: "main",
    cuisine: "western",
    proteinType: "fish",
    season: "all",
    time: "15蛻・,
    approxCostPerPerson: 135,
    tags: ["繧ｵ繝千ｼｶ", "繝医・繝・, "DHA貅轤ｹ", "蛹・ｸ∽ｸ崎ｦ・, "鬲・],
    containsDislikes: ["繝医・繝・, "鬲・],
    description: "鬪ｨ縺ｾ縺ｧ譟斐ｉ縺九＞繧ｵ繝先ｰｴ辣ｮ郛ｶ縺ｨ縺悶￥蛻・ｊ繧ｭ繝｣繝吶ヤ繧偵ヨ繝槭ヨ縺ｧ辣ｮ繧九□縺托ｼ・ｭ夊・縺輔′豸医∴縺ｦ豢矩｢ｨ縺斐■縺昴≧繧ｹ繝ｼ繝礼・縺ｫ縲・,
    kidsTip: "繝医・繝医→繧ｱ繝√Ε繝・・縺ｮ鬚ｨ蜻ｳ縺ｧ鬲夂音譛峨・繧ｯ繧ｻ縺梧ｶ医∴縲・ｪｨ繧ゅ↑縺・・縺ｧ蟄蝉ｾ帙〒繧ょｮ牙ｿ・＠縺ｦ繝｢繝ｪ繝｢繝ｪ鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "繧ｵ繝千ｼｶ縺ｯ豎√＃縺ｨ謚募・縺吶ｋ縺薙→縺ｧ縲．HA繝ｻEPA縺ｪ縺ｩ縺ｮ譬・､翫→鬲壹・蜃ｺ豎√ｒ菴吶☆縺薙→縺ｪ縺丈ｽｿ縺・・繧後∪縺吶・,
    ingredients: [
      { name: "繧ｵ繝先ｰｴ辣ｮ郛ｶ", amount: 0.4, unit: "郛ｶ", aisle: "閧峨・鬲・ },
      { name: "繧ｭ繝｣繝吶ヤ", amount: 80, unit: "g", aisle: "驥手除" },
      { name: "繝医・繝育ｼｶ", amount: 70, unit: "g", aisle: "驥手除" },
      { name: "繧ｳ繝ｳ繧ｽ繝｡", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ｭ繝｣繝吶ヤ縺ｯ縺悶￥蛻・ｊ縺ｫ縺吶ｋ縲・,
      "骰九↓繝医・繝育ｼｶ縲∵ｰｴ50ml縲√さ繝ｳ繧ｽ繝｡縲√く繝｣繝吶ヤ繧貞・繧後※轣ｫ縺ｫ縺九￠縲√く繝｣繝吶ヤ縺後＠繧薙↑繧翫☆繧九∪縺ｧ辣ｮ繧九・,
      "繧ｵ繝千ｼｶ繧呈ｱ√＃縺ｨ蜉縺医∬ｺｫ繧定ｻｽ縺上⊇縺舌＠縺ｪ縺後ｉ蠑ｱ轣ｫ縺ｧ3蛻・・縺ｦ蝪ｩ縺薙＠繧・≧縺ｧ蜻ｳ繧定ｪｿ縺医ｋ縲・
    ]
  },
  {
    id: "main_88",
    title: "繧ｵ繝舌・鬥吶・縺怜｡ｩ辟ｼ縺・縺吶□縺｡驢､豐ｹ",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "autumn",
    time: "12蛻・,
    approxCostPerPerson: 140,
    tags: ["繧ｵ繝・, "遘九・譌ｬ", "蜥碁｢ｨ蝓ｺ譛ｬ", "鬲・],
    containsDislikes: ["鬲・],
    description: "閼ゅ・荵励▲縺滓流縺ｮ繧ｵ繝舌ｒ繝代Μ繝・→鬥吶・縺励￥辟ｼ縺堺ｸ翫￡縺滓律譛ｬ縺ｮ螳夂分縲ら坩縺ｯ繝代Μ繝代Μ縲∬ｺｫ縺ｯ縺ｵ縺｣縺上ｉ繧ｸ繝･繝ｼ繧ｷ繝ｼ縲・,
    kidsTip: "辟ｼ縺丞燕縺ｫ蟆城ｪｨ繧偵ヴ繝ｳ繧ｻ繝・ヨ縺ｧ繧ｵ繝・→謚懊＞縺ｦ縺翫￥縺ｨ縲・ｭ壹′闍ｦ謇九↑蟄舌ｂ雖後′繧峨★縺ｫ鄒主袖縺励￥鬟溘∋縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "辟ｼ縺・0蛻・燕縺ｫ驟偵→蝪ｩ繧呈険縺｣縺ｦ豌ｴ豌励ｒ諡ｭ縺榊叙繧九％縺ｨ縺ｧ縲・ｭ壹・逕溯・縺輔′螳悟・縺ｫ豸医∴縺ｾ縺吶・,
    ingredients: [
      { name: "蝪ｩ繧ｵ繝・, amount: 1, unit: "蛻・, aisle: "閧峨・鬲・ }
    ],
    instructions: [
      "繧ｵ繝舌・逧ｮ逶ｮ縺ｫ蜊∝ｭ励・蛻・ｊ霎ｼ縺ｿ繧貞・繧後・・蟆代・ｒ謖ｯ縺｣縺ｦ5蛻・ｽｮ縺阪∽ｽ吝・縺ｪ豌ｴ豌励ｒ繝壹・繝代・縺ｧ諡ｭ縺榊叙繧九・,
      "鬲夂┥縺阪げ繝ｪ繝ｫ縺ｾ縺溘・繝輔Λ繧､繝代Φ逕ｨ繝帙う繝ｫ繧呈聞縺・◆繝輔Λ繧､繝代Φ縺ｧ縲∫坩逶ｮ縺九ｉ鬥吶・縺励￥辟ｼ縺上・,
      "陬剰ｿ斐＠縺ｦ荳ｭ縺ｾ縺ｧ轣ｫ縺碁壹ｋ縺ｾ縺ｧ辟ｼ縺阪√♀螂ｽ縺ｿ縺ｧ螟ｧ譬ｹ縺翫ｍ縺励ｄ繝ｬ繝｢繝ｳ繧呈ｷｻ縺医ｋ縲・
    ]
  },
  {
    id: "main_89",
    title: "逕滄ｮｭ縺ｨ繧ｭ繝弱さ縺ｮ繝帙う繝ｫ繝舌ち繝ｼ驢､豐ｹ蛹・∩辟ｼ縺・,
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "autumn",
    time: "15蛻・,
    approxCostPerPerson: 155,
    tags: ["魄ｭ", "縺阪・縺・, "遘九・譌ｬ", "繝輔Λ繧､繝代Φ1縺､", "鬲・],
    containsDislikes: ["縺阪・縺・, "鬲・],
    description: "繧｢繝ｫ繝溘・繧､繝ｫ繧帝幕縺代◆迸ｬ髢薙↓蠎・′繧九ヰ繧ｿ繝ｼ縺ｨ繧ｭ繝弱さ縺ｮ鬥吶ｊ・・ｮｭ縺後・縺｣縺上ｉ闥ｸ縺励≠縺後ｊ縲∝ｾ檎援莉倥￠繧りｶ・き繝ｳ繧ｿ繝ｳ縲・,
    kidsTip: "繝舌ち繝ｼ縺ｨ驢､豐ｹ縺ｮ鬥吶・縺励＞鬥吶ｊ縺ｧ鬲夊・縺輔′豸医∴縲∝ｭ蝉ｾ帙◆縺｡繧ょｮ晉ｮｱ繧帝幕縺代ｋ繧医≧縺ｫ繝ｯ繧ｯ繝ｯ繧ｯ蝟懊ｓ縺ｧ鬟溘∋縺ｾ縺吶・,
    tip: "繝輔Λ繧､繝代Φ縺ｫ豌ｴ繧貞・繧後※繝帙う繝ｫ繧剃ｸｦ縺ｹ縲√ヵ繧ｿ繧偵＠縺ｦ闥ｸ縺礼┥縺阪↓縺吶ｋ縺ｮ縺ｧ辟ｦ縺剃ｻ倥″縺ｮ蠢・・繧ｼ繝ｭ・・,
    ingredients: [
      { name: "逕滄ｮｭ", amount: 1, unit: "蛻・, aisle: "閧峨・鬲・ },
      { name: "縺励ａ縺・, amount: 30, unit: "g", aisle: "驥手除" },
      { name: "繝舌ち繝ｼ", amount: 8, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "驢､豐ｹ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧｢繝ｫ繝溘・繧､繝ｫ繧貞ｺ・￡縲∽ｸｭ螟ｮ縺ｫ縺ｻ縺舌＠縺溘＠繧√§繧呈聞縺阪√◎縺ｮ荳翫↓魄ｭ縺ｮ蛻・ｊ霄ｫ繧剃ｹ励○繧九・,
      "繝舌ち繝ｼ繧帝ｮｭ縺ｮ荳翫↓荵励○縲√・繧､繝ｫ縺ｮ遶ｯ繧偵＠縺｣縺九ｊ髢峨§縺ｦ蛹・・縲・,
      "繝輔Λ繧､繝代Φ縺ｫ豌ｴ100ml繧貞・繧後√・繧､繝ｫ蛹・∩繧剃ｸｦ縺ｹ縺ｦ繝輔ち繧偵＠縲∽ｸｭ轣ｫ縺ｧ邏・0縲・2蛻・頂縺礼┥縺阪↓縺励※驢､豐ｹ繧偵°縺代ｋ縲・
    ]
  },
  {
    id: "main_90",
    title: "逋ｽ霄ｫ鬲壹→邇峨・縺弱・逕倬・縺ゅｓ縺九￠",
    category: "main",
    cuisine: "chinese",
    proteinType: "fish",
    season: "all",
    time: "18蛻・,
    approxCostPerPerson: 135,
    tags: ["逋ｽ霄ｫ鬲・, "逕倬・縺ゅｓ", "蟄蝉ｾ帛､ｧ莠ｺ豌・, "鬲・],
    containsDislikes: ["鬲・],
    description: "繧ｫ繝ｪ繝・→謠壹￡辟ｼ縺阪↓縺励◆逋ｽ霄ｫ鬲夲ｼ医ち繝ｩ遲会ｼ峨↓縲・㍽闖懊◆縺｣縺ｷ繧翫・逕倬・縺｣縺ｱ縺・ｸｭ闖ｯ縺ゅｓ繧偵◆縺｣縺ｷ繧翫°縺代∪縺励◆縲・,
    kidsTip: "繧ｯ繧ｻ縺ｮ縺ｪ縺・區霄ｫ鬲壹→繧ｱ繝√Ε繝・・蜈･繧翫・逕伜哨縺ゅｓ縺九￠縺ｮ邨・∩蜷医ｏ縺帙・縲√♀鬲壹Γ繝九Η繝ｼ縺ｮ荳ｭ縺ｧ荳逡ｪ莠ｺ豌暦ｼ・,
    tip: "迚ｹ螢ｲ縺ｮ繧ｿ繝ｩ繧・き繝ｬ繧､縲∝・蜃咲區霄ｫ鬲壹・蛻・ｊ霄ｫ縺ｧ謇玖ｻｽ縺ｫ菴懊ｌ繧九さ繧ｹ繝大━遘繝ｬ繧ｷ繝斐〒縺吶・,
    ingredients: [
      { name: "繧ｿ繝ｩ蛻・ｊ霄ｫ", amount: 1, unit: "蛻・, aisle: "閧峨・鬲・ },
      { name: "邇峨・縺・, amount: 0.25, unit: "蛟・, aisle: "驥手除" },
      { name: "莠ｺ蜿・, amount: 20, unit: "g", aisle: "驥手除" },
      { name: "驟｢", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ｿ繝ｩ縺ｯ豌ｴ豌励ｒ諡ｭ縺・※荳蜿｣螟ｧ縺ｫ蛻・ｊ縲∝｡ｩ繧ｳ繧ｷ繝ｧ繧ｦ縺励※迚・礼ｲ峨ｒ縺ｾ縺ｶ縺吶ら脂縺ｭ縺弱∽ｺｺ蜿ゅ・蜊・・繧翫↓縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ螟壹ａ縺ｮ豐ｹ繧堤・縺励√ち繝ｩ繧剃ｸ｡髱｢繧ｫ繝ｪ繝・→縺阪▽縺ｭ濶ｲ縺ｫ謠壹￡辟ｼ縺阪↓縺励※逧ｿ縺ｫ逶帙ｋ縲・,
      "蟆城豪縺ｧ驥手除縺ｨ豌ｴ100ml縲・・縲・・豐ｹ縲∫らｳ門､ｧ縺輔§1繧堤・縺ｦ縲∵ｰｴ貅ｶ縺咲援譬礼ｲ峨〒縺ｨ繧阪∩繧偵▽縺代※繧ｿ繝ｩ縺ｫ縺九￠繧九・
    ]
  },
  {
    id: "main_91",
    title: "繧､繝ｯ繧ｷ縺ｮ繧ｫ繝ｪ繝・→闥ｲ辟ｼ縺咲曝霎帑ｸｼ鬚ｨ",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "all",
    time: "12蛻・,
    approxCostPerPerson: 110,
    tags: ["繧､繝ｯ繧ｷ", "遽邏・ｭ・, "縺秘｣ｯ豕･譽・, "繝輔Λ繧､繝代Φ1縺､", "鬲・],
    containsDislikes: ["鬲・],
    description: "螳峨￥縺ｦ譬・､頑ｺ轤ｹ縺ｮ繧､繝ｯ繧ｷ繧帝幕縺・※邊峨ｒ縺ｯ縺溘″縲√き繝ｪ繝・→辟ｼ縺・※縺・↑縺朱｢ｨ縺ｮ逕倩ｾ幄調辟ｼ縺阪ム繝ｬ繧堤ｵ｡繧√∪縺励◆縲・,
    kidsTip: "逕倩ｾ帙＞闥ｲ辟ｼ縺阪ち繝ｬ繧偵＃鬟ｯ縺ｫ譟薙∩霎ｼ縺ｾ縺帙※荳ｼ縺ｫ縺吶ｋ縺ｨ縲√≧縺ｪ縺取ｰ怜・縺ｧ蟄蝉ｾ帙◆縺｡繧ゅ・繝ｭ繝ｪ縺ｨ螳碁｣滂ｼ・,
    tip: "髢九＞縺溘う繝ｯ繧ｷ縺ｯ謇矩幕縺阪〒繧らｰ｡蜊倥↓鬪ｨ縺悟叙繧後∪縺吶ら援譬礼ｲ峨ｒ縺励▲縺九ｊ縺ｾ縺ｶ縺吶→蟆城ｪｨ繧よｰ励↓縺ｪ繧翫∪縺帙ｓ縲・,
    ingredients: [
      { name: "繧､繝ｯ繧ｷ・磯幕縺・◆繧ゅ・・・, amount: 1.5, unit: "蟆ｾ", aisle: "閧峨・鬲・ },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧､繝ｯ繧ｷ縺ｯ豌ｴ豌励ｒ諡ｭ縺榊叙繧翫∫援譬礼ｲ峨ｒ荳｡髱｢縺ｫ阮・￥縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∫坩逶ｮ縺九ｉ蜈･繧後※荳ｭ轣ｫ縺ｧ荳｡髱｢繧ｫ繝ｪ繝・→縺吶ｋ縺ｾ縺ｧ辟ｼ縺上・,
      "驢､豐ｹ縲√∩繧翫ｓ縲・・縲∫らｳ悶ｒ蜷医ｏ縺帙◆繧ｿ繝ｬ繧貞刈縺医∫・繧翫′蜃ｺ繧九∪縺ｧ邏譌ｩ縺冗ｵ｡繧√ｋ縲・
    ]
  },
  {
    id: "main_92",
    title: "繧｢繧ｸ縺ｮ鬥呵拷繝代Φ邊臥┥縺・遽邏・ヵ繝ｩ繧､鬚ｨ",
    category: "main",
    cuisine: "western",
    proteinType: "fish",
    season: "all",
    time: "15蛻・,
    approxCostPerPerson: 125,
    tags: ["繧｢繧ｸ", "謠壹￡縺ｪ縺・, "繝代Φ邊臥┥縺・, "鬲・],
    containsDislikes: ["鬲・],
    description: "繧｢繧ｸ繝輔Λ繧､縺ｮ髱｢蛟偵↑豐ｹ蜃ｦ逅・↑縺暦ｼ√・繝ｨ繝阪・繧ｺ繧貞｡励▲縺ｦ繝代Φ邊峨ｒ荵励○縲√ヨ繝ｼ繧ｹ繧ｿ繝ｼ繧・ヵ繝ｩ繧､繝代Φ縺ｧ辟ｼ縺上□縺代・,
    kidsTip: "繝槭Κ繝阪・繧ｺ縺ｮ繧ｳ繧ｯ縺ｨ繧ｵ繧ｯ繧ｵ繧ｯ繝代Φ邊峨〒縺企ｭ壹・閾ｭ縺ｿ縺梧ｶ医∴縲√せ繝翫ャ繧ｯ諢溯ｦ壹〒鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "繝代Φ邊峨↓邊峨メ繝ｼ繧ｺ繧・ヱ繧ｻ繝ｪ繧貞ｰ鷹㍼豺ｷ縺懊ｋ縺ｨ縲∵ｴ矩｣溘Ξ繧ｹ繝医Λ繝ｳ縺ｮ繧医≧縺ｪ鬥吶・縺励＞鬚ｨ蜻ｳ縺ｫ・・,
    ingredients: [
      { name: "繧｢繧ｸ蛻・ｊ霄ｫ・井ｸ画椢縺翫ｍ縺暦ｼ・, amount: 1, unit: "蟆ｾ", aisle: "閧峨・鬲・ },
      { name: "繝槭Κ繝阪・繧ｺ", amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "繝代Φ邊・, amount: 12, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧｢繧ｸ縺ｫ蝪ｩ縺薙＠繧・≧繧呈険繧翫∬｡ｨ髱｢縺ｫ繝槭Κ繝阪・繧ｺ繧定埋縺上∪繧薙∋繧薙↑縺丞｡励ｋ縲・,
      "繝代Φ邊峨ｒ荳翫°繧峨＠縺｣縺九ｊ謚ｼ縺嶺ｻ倥￠繧九ｈ縺・↓縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ蟆鷹㍼縺ｮ豐ｹ繧貞ｼ輔＞縺ｦ繝輔ち繧偵＠縺ｦ荳ｭ轣ｫ縺ｧ辟ｼ縺上°縲√ヨ繝ｼ繧ｹ繧ｿ繝ｼ縺ｧ繝代Φ邊峨↓辟ｼ縺崎牡縺後▽縺上∪縺ｧ辟ｼ縺上・
    ]
  },
  {
    id: "main_93",
    title: "繧ｵ繧ｱ縺ｨ縺倥ｃ縺後＞繧ゅ・縺ｻ縺｣縺薙ｊ繧ｯ繝ｪ繝ｼ繝辣ｮ",
    category: "main",
    cuisine: "western",
    proteinType: "fish",
    season: "winter",
    time: "18蛻・,
    approxCostPerPerson: 145,
    flavorType: "stew",
    tags: ["繧ｷ繝√Η繝ｼ繝ｻ繧ｯ繝ｪ繝ｼ繝邉ｻ", "魄ｭ", "縺倥ｃ縺後＞繧・, "蜀ｬ縺ｮ譌ｬ", "鬲・],
    containsDislikes: ["鬲・],
    description: "逕溘け繝ｪ繝ｼ繝荳崎ｦ・ｼ∫央荵ｳ縺ｨ繝舌ち繝ｼ縺ｧ謇玖ｻｽ縺ｫ菴懊ｌ繧矩ｮｭ縺ｨ縺倥ｃ縺後＞繧ゅ・豼・字繧ｯ繝ｪ繝ｼ繝溘・縺翫°縺壹・,
    kidsTip: "繧ｯ繝ｪ繝ｼ繝繧ｷ繝√Η繝ｼ縺ｮ繧医≧縺ｪ繝槭う繝ｫ繝峨↑逕伜哨莉慕ｫ九※縺ｧ縲∝ｭ蝉ｾ帙◆縺｡縺ｫ蝨ｧ蛟堤噪縺ｪ螟ｧ莠ｺ豌励ｒ隱・ｋ鬲壽侭逅・〒縺吶・,
    tip: "縺倥ｃ縺後＞繧ゅ・繝・Φ繝励Φ縺瑚・辟ｶ縺ｪ縺ｨ繧阪∩繧偵▽縺代※縺上ｌ繧九・縺ｧ縲√・繝ｯ繧､繝医た繝ｼ繧ｹ菴懊ｊ荳崎ｦ√〒螟ｱ謨礼衍繧峨★・・,
    ingredients: [
      { name: "逕滄ｮｭ", amount: 0.8, unit: "蛻・, aisle: "閧峨・鬲・ },
      { name: "縺倥ｃ縺後＞繧・, amount: 0.6, unit: "蛟・, aisle: "驥手除" },
      { name: "迚帑ｹｳ", amount: 80, unit: "ml", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繝舌ち繝ｼ", amount: 8, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "魄ｭ縺ｯ荳蜿｣螟ｧ縺ｫ蛻・▲縺ｦ蟆城ｺｦ邊峨ｒ縺ｾ縺ｶ縺励√§繧・′縺・ｂ縺ｯ阮・・繧翫↓縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ繝舌ち繝ｼ繧堤・縺励・ｮｭ繧剃ｸ｡髱｢繧ｵ繝・→辟ｼ縺・※蜿悶ｊ蜃ｺ縺吶・,
      "縺倥ｃ縺後＞繧ゅ∫央荵ｳ縲∵ｰｴ50ml縲√さ繝ｳ繧ｽ繝｡繧貞刈縺医※辣ｮ霎ｼ縺ｿ縲√§繧・′縺・ｂ縺梧沐繧峨°縺上↑縺｣縺溘ｉ魄ｭ繧呈綾縺励※縺ｨ繧阪∩繧偵▽縺代ｋ縲・
    ]
  },
  {
    id: "main_94",
    title: "繝・リ縺ｨ逋ｽ闖懊・縺・∪蝪ｩ縺ｨ繧阪∩荳ｭ闖ｯ轤偵ａ",
    category: "main",
    cuisine: "chinese",
    proteinType: "fish",
    season: "winter",
    time: "10蛻・,
    approxCostPerPerson: 90,
    tags: ["繝・リ郛ｶ", "逋ｽ闖・, "雜・凾遏ｭ", "鬲・],
    containsDislikes: ["鬲・],
    description: "繝・リ郛ｶ縺ｮ繧ｪ繧､繝ｫ繧剃ｸｸ縺斐→菴ｿ縺｣縺溽區闖懊・譌ｨ蜻ｳ轤偵ａ縲よｰｴ貅ｶ縺咲援譬礼ｲ峨〒縺ｨ繧阪∩繧偵▽縺代※縲√＃鬟ｯ縺ｫ縺九￠繧後・荳ｭ闖ｯ荳ｼ縺ｫ・・,
    kidsTip: "繝・リ縺ｮ隕ｪ縺励∩繧・☆縺・｢ｨ蜻ｳ縺ｨ逕倥＞逋ｽ闖懊′縺ｨ繧阪→繧阪≠繧薙↓蛹・∪繧後・㍽闖懷ｫ後＞縺ｮ縺雁ｭ先ｧ倥ｂ隨鷹｡斐〒螳碁｣溘・,
    tip: "蛹・ｸ√′髱｢蛟偵↑譎ゅ・逋ｽ闖懊ｒ謇九〒縺｡縺弱ｌ縺ｰ縲∝桁荳√ｂ縺ｾ縺ｪ譚ｿ繧ゆｽｿ繧上★縺ｫ繝輔Λ繧､繝代Φ1縺､縺ｧ螳梧・縺励∪縺吶・,
    ingredients: [
      { name: "繝・リ郛ｶ", amount: 0.4, unit: "郛ｶ", aisle: "閧峨・鬲・ },
      { name: "逋ｽ闖・, amount: 90, unit: "g", aisle: "驥手除" },
      { name: "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "逋ｽ闖懊・鬟溘∋繧・☆縺・､ｧ縺阪＆縺ｫ縺悶￥蛻・ｊ縺ｫ縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ繝・リ郛ｶ縺ｮ豐ｹ繧堤・縺励∫區闖懊・闃ｯ縺九ｉ轤偵ａ縲∬痩繧ゅ＠繧薙↑繧翫☆繧九∪縺ｧ轤偵ａ繧九・,
      "繝・リ縲∵ｰｴ80ml縲・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏縲∝｡ｩ蟆代・ｒ蜉縺医※1蛻・・縺ｦ縲∵ｰｴ貅ｶ縺咲援譬礼ｲ峨〒縺ｨ繧阪∩繧偵▽縺代ｋ縲・
    ]
  },
  {
    id: "main_95",
    title: "繧｢繝ｩ縺ｧ縺雁ｾ励↓・√ヶ繝ｪ螟ｧ譬ｹ 縺薙▲縺ｦ繧顔・",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "winter",
    time: "25蛻・,
    approxCostPerPerson: 120,
    tags: ["螟ｧ譬ｹ", "繝悶Μ", "蜀ｬ縺ｮ譌ｬ", "遽邏・い繝ｩ", "鬲・],
    containsDislikes: ["鬲・],
    description: "迚ｹ螢ｲ縺ｮ繝悶Μ縺ｮ繧｢繝ｩ繧剃ｽｿ縺医・蛻・ｊ霄ｫ縺ｮ蜊企｡堺ｻ･荳具ｼ∝､ｧ譬ｹ縺ｫ繝悶Μ縺ｮ閼ゅ→譌ｨ蜻ｳ縺瑚官縺ｾ縺ｧ譟薙∩霎ｼ繧薙□蜀ｬ縺ｮ譛鬮倥・縺斐■縺昴≧縲・,
    kidsTip: "辣ｮ豎√ｒ縺励▲縺九ｊ逕倩ｾ帙￥辣ｮ隧ｰ繧√ｋ縺薙→縺ｧ縲∫函閾ｭ縺輔′縺ｪ縺丞ｭ蝉ｾ帙◆縺｡繧ょ､ｧ譬ｹ縺ｨ縺願ｉ繧貞万繧薙〒鬟溘∋縺ｾ縺吶・,
    tip: "繝悶Μ縺ｫ辭ｱ貉ｯ繧偵し繝・→縺九￠縺ｦ蜀ｷ豌ｴ縺ｧ陦蜷医＞繧呈ｴ励≧・磯惧髯阪ｊ・峨・縺ｨ謇矩俣縺ｧ縲∬・縺ｿ縺悟ｮ悟・縺ｫ繧ｼ繝ｭ縺ｫ縺ｪ繧翫∪縺呻ｼ・,
    ingredients: [
      { name: "繝悶Μ・医い繝ｩ縺ｾ縺溘・蛻・ｊ霄ｫ・・, amount: 80, unit: "g", aisle: "閧峨・鬲・ },
      { name: "螟ｧ譬ｹ", amount: 80, unit: "g", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縺ｯ蜴壹＆2cm縺ｮ蜊頑怦蛻・ｊ縺ｫ縺励※繝ｬ繝ｳ繧ｸ縺ｧ3蛻・ｸ句刈辭ｱ縲ゅヶ繝ｪ縺ｯ辭ｱ貉ｯ繧貞屓縺励°縺代※豎壹ｌ繧呈ｴ励≧縲・,
      "骰九↓豌ｴ150ml縲・・縲√∩繧翫ｓ縲∫らｳ悶∫函蟋懊ｒ蜈･繧後※豐ｸ鬨ｰ縺輔○縲√ヶ繝ｪ縺ｨ螟ｧ譬ｹ繧貞・繧後ｋ縲・,
      "驢､豐ｹ繧貞刈縺医※關ｽ縺ｨ縺苓搭繧偵＠縲∽ｸｭ蠑ｱ轣ｫ縺ｧ辣ｮ豎√′1/3縺ｫ縺ｪ繧九∪縺ｧ15蛻・⊇縺ｩ繧ｳ繝医さ繝育・隧ｰ繧√ｋ縲・
    ]
  },
  {
    id: "main_96",
    title: "繧ｵ繝千ｼｶ縺ｨ邇峨・縺弱・逕倩ｾ帛嵯縺ｨ縺倅ｸｼ鬚ｨ",
    category: "main",
    cuisine: "japanese",
    proteinType: "fish",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 95,
    tags: ["繧ｵ繝千ｼｶ", "蜊ｵ縺ｨ縺・, "雜・凾遏ｭ", "繝輔Λ繧､繝代Φ1縺､", "鬲・],
    containsDislikes: ["鬲・],
    description: "繧ｵ繝千ｼｶ縺ｨ邇峨・縺弱ｒ繧√ｓ縺､繧・〒繧ｵ繝・→辣ｮ縺ｦ縲∝嵯縺ｧ縺ｵ繧薙ｏ繧翫→縺倥ｋ縺縺代りｦｪ蟄蝉ｸｼ莉･荳翫・繧ｳ繧ｯ縺ｨ譌ｨ蜻ｳ縺・0蛻・〒螳梧・縲・,
    kidsTip: "縺ｵ繧薙ｏ繧雁嵯縺ｧ蛹・∪繧後ｋ縺薙→縺ｧ繧ｵ繝舌・蜻ｳ縺後∪繧阪ｄ縺九↓縺ｪ繧翫∽ｸｼ繧ｹ繧ｿ繧､繝ｫ縺ｧ蟄蝉ｾ帙◆縺｡繧ょ兇縺・ｈ縺丞ｮ碁｣滂ｼ・,
    tip: "蜊ｵ縺ｯ2蝗槭↓蛻・￠縺ｦ蝗槭＠蜈･繧後・蝗樒岼繧貞・繧後◆繧峨☆縺舌↓轣ｫ繧呈ｭ｢繧√※繝輔ち繧偵☆繧九→繝励Ο邏壹・蜊顔・縺ｫ莉穂ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "繧ｵ繝先ｰｴ辣ｮ郛ｶ", amount: 0.4, unit: "郛ｶ", aisle: "閧峨・鬲・ },
      { name: "邇峨・縺・, amount: 0.3, unit: "蛟・, aisle: "驥手除" },
      { name: "蜊ｵ", amount: 1, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧√ｓ縺､繧・, amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "邇峨・縺弱・阮・・繧翫↓縺励∝嵯縺ｯ貅ｶ縺阪⊇縺舌＠縺ｦ縺翫￥縲・,
      "蟆上＆繧√・繝輔Λ繧､繝代Φ縺ｫ豌ｴ60ml縲√ａ繧薙▽繧・∫脂縺ｭ縺弱ｒ蜈･繧後※轣ｫ縺ｫ縺九￠縲∫脂縺ｭ縺弱′騾上″騾壹ｋ縺ｾ縺ｧ辣ｮ繧九・,
      "繧ｵ繝千ｼｶ繧定ｻｽ縺上⊇縺舌＠縺ｦ蜉縺医∵ｺｶ縺榊嵯繧貞屓縺怜・繧後※蜊顔・迥ｶ縺ｫ縺ｪ縺｣縺溘ｉ轣ｫ繧呈ｭ｢繧√※繝輔ち繧偵☆繧九・
    ]
  },
  {
    id: "main_97",
    title: "蜴壽恕縺偵・雎夊ｉ蟾ｻ縺・縺薙▲縺ｦ繧顔・繧顔┥縺阪ち繝ｬ",
    category: "main",
    cuisine: "japanese",
    proteinType: "soy",
    season: "all",
    time: "15蛻・,
    approxCostPerPerson: 110,
    tags: ["蜴壽恕縺・, "縺九＆蠅励＠", "雎夊ｉ蟾ｻ縺・, "螟ｧ貅雜ｳ"],
    containsDislikes: [],
    description: "蜴壽恕縺偵↓蟆鷹㍼縺ｮ雎壹％縺ｾ閧峨ｒ蟾ｻ縺阪▽縺代ｋ縺縺代〒縲√∪繧九〒螟ｧ縺阪↑縺願ｉ繧ｹ繝・・繧ｭ・∝､悶・繧ｫ繝ｪ繝・∽ｸｭ縺ｯ繧ｸ繝･繝ｼ繧ｷ繝ｼ縲・,
    kidsTip: "縺願ｉ繧偵＠縺｣縺九ｊ蟾ｻ縺・※縺ゅｋ縺ｮ縺ｧ隕九◆逶ｮ縺ｯ螳悟・縺ｪ縺願ｉ譁咏炊・∫曝霎帷・繧顔┥縺榊袖縺ｧ縺雁ｭ先ｧ倥え繧ｱ謚懃ｾ､縺ｧ縺吶・,
    tip: "蟾ｻ縺咲ｵゅｏ繧翫↓迚・礼ｲ峨ｒ霆ｽ縺上・縺溘＞縺ｦ蟾ｻ縺咲ｵゅｏ繧翫°繧臥┥縺上％縺ｨ縺ｧ縲√♀閧峨′蜑･縺後ｌ縺夂ｶｺ鮗励↓蟇・捩縺励∪縺吶・,
    ingredients: [
      { name: "蜴壽恕縺・, amount: 80, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "雎壹％縺ｾ閧・, amount: 40, unit: "g", aisle: "閧峨・鬲・ },
      { name: "驢､豐ｹ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蜴壽恕縺偵ｒ譽堤憾縺ｫ4遲牙・縺励∬ｱ壹％縺ｾ閧峨ｒ縺阪▽縺ｭ濶ｲ縺ｫ蟾ｻ縺阪▽縺代∫援譬礼ｲ峨ｒ阮・￥縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∝ｷｻ縺咲ｵゅｏ繧翫ｒ荳九↓縺励※荳ｦ縺ｹ縲∬ｻ｢縺後＠縺ｪ縺後ｉ蜈ｨ髱｢縺薙ｓ縺後ｊ辟ｼ縺上・,
      "驢､豐ｹ縲√∩繧翫ｓ縲∫らｳ門推蜷碁㍼繧貞屓縺怜・繧後∫・繧翫′蜃ｺ繧九∪縺ｧ繧ｿ繝ｬ繧偵＠縺｣縺九ｊ邨｡繧√ｋ縲・
    ]
  },
  {
    id: "main_98",
    title: "縺ｵ繧上→繧阪き繝九き繝樒脂縺ｮ荳ｭ闖ｯ逕倬・縺ゅｓ縺九￠・亥､ｩ豢･鬟ｯ鬚ｨ・・,
    category: "main",
    cuisine: "chinese",
    proteinType: "soy",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 80,
    tags: ["蜊ｵ譁咏炊", "繧ｫ繝九き繝・, "雜・凾遏ｭ", "豼螳・],
    containsDislikes: [],
    description: "蜊ｵ縺ｨ繧ｫ繝九き繝槭・聞繝阪ぐ縺ｧ菴懊ｋ縺ｵ繧上→繧榊嵯辟ｼ縺阪↓縲√→繧阪懊ｊ荳ｭ闖ｯ逕倬・縺ゅｓ繧偵◆縺｣縺ｷ繧翫°縺代◆遽邏・＃縺｡縺昴≧荳ｻ闖懊・,
    kidsTip: "繧ｫ繝九き繝槭・閾ｪ辟ｶ縺ｪ逕倥∩縺ｨ縺ｵ繧薙ｏ繧雁濠辭溷嵯縺ｮ邨・∩蜷医ｏ縺帙・縲∝ｭ蝉ｾ帙◆縺｡縺檎ｬ鷹｡斐↓縺ｪ繧矩延譚ｿ繝｡繝九Η繝ｼ縲・,
    tip: "蜊ｵ縺ｫ縺ｯ繝槭Κ繝阪・繧ｺ蟆上＆縺・繧呈ｷｷ縺懊※蠑ｷ轣ｫ縺ｧ繧ｵ繝・→轤偵ａ繧九→縲∵ｲｹ謗ｧ縺医ａ縺ｧ繧ゅ・繧薙ｏ繧願・繧峨∩縺ｾ縺吶・,
    ingredients: [
      { name: "蜊ｵ", amount: 1.5, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ｫ繝九き繝・, amount: 2, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "驟｢", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驢､豐ｹ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蜊ｵ繧貞牡繧翫⊇縺舌＠縲∬｣ゅ＞縺溘き繝九き繝槭→蝪ｩ蟆代・ｒ豺ｷ縺懷粋繧上○繧九・,
      "繝輔Λ繧､繝代Φ縺ｫ螟壹ａ縺ｮ豐ｹ繧堤・縺励∝嵯豸ｲ繧剃ｸ豌励↓豬√＠蜈･繧後※螟ｧ縺阪￥豺ｷ縺懊∝濠辭溽憾縺ｧ逧ｿ縺ｫ荳ｸ縺乗ｻ代ｉ縺帙ｋ縲・,
      "蟆城豪縺ｫ豌ｴ100ml縲・・豐ｹ縲・・縲∫らｳ悶・ｶ上ぎ繝ｩ縲∫援譬礼ｲ峨ｒ蜈･繧後※繧医￥豺ｷ縺懊∫↓縺ｫ縺九￠縺ｦ縺ｨ繧阪∩繧貞・縺励※蜊ｵ縺ｫ縺九￠繧九・
    ]
  },
  {
    id: "main_99",
    title: "譛ｨ邯ｿ雎・・縺ｮ鬥吶・縺励せ繝・・繧ｭ 縺溘▲縺ｷ繧翫く繝弱さ縺ゅｓ縺九￠",
    category: "main",
    cuisine: "japanese",
    proteinType: "soy",
    season: "autumn",
    time: "15蛻・,
    approxCostPerPerson: 75,
    tags: ["雎・・繧ｹ繝・・繧ｭ", "縺阪・縺・, "遘九・譌ｬ", "豼螳峨・繝ｫ繧ｷ繝ｼ"],
    containsDislikes: ["縺阪・縺・],
    description: "縺励▲縺九ｊ豌ｴ蛻・ｊ縺励◆譛ｨ邯ｿ雎・・繧偵き繝ｪ繝・→辟ｼ縺堺ｸ翫￡縲√∴縺ｮ縺阪→縺励ａ縺倥・蜥碁｢ｨ縺縺励≠繧薙ｒ縺溘▲縺ｷ繧翫°縺代∪縺励◆縲・,
    kidsTip: "雎・・縺ｮ陦ｨ髱｢縺後き繝ｪ繝・→鬥吶・縺励￥謠壹′縺｣縺ｦ縺・ｋ縺ｮ縺ｧ縲∬ｱ・・縺瑚協謇九↑縺雁ｭ先ｧ倥ｂ繧ｹ繝・・繧ｭ諢溯ｦ壹〒繝代け繝代け螳碁｣滂ｼ・,
    tip: "雎・・縺ｮ豌ｴ蛻・ｊ縺ｯ繝壹・繝代・縺ｫ蛹・ｓ縺ｧ繝ｬ繝ｳ繧ｸ縺ｧ2蛻・メ繝ｳ縺吶ｌ縺ｰ縲・㍾縺励ｒ荵励○縺ｦ蠕・▽蠢・ｦ√↑縺暦ｼ・,
    ingredients: [
      { name: "譛ｨ邯ｿ雎・・", amount: 120, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "縺医・縺・, amount: 30, unit: "g", aisle: "驥手除" },
      { name: "繧√ｓ縺､繧・, amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "譛ｨ邯ｿ雎・・縺ｯ繝ｬ繝ｳ繧ｸ縺ｧ2蛻・ｰｴ蛻・ｊ縺励∽ｸ蜿｣螟ｧ縺ｫ蛻・▲縺ｦ迚・礼ｲ峨ｒ蜈ｨ菴薙↓縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∬ｱ・・繧剃ｸ｡髱｢繧ｫ繝ｪ繝・→鮟・≡濶ｲ縺ｫ縺ｪ繧九∪縺ｧ辟ｼ縺・※逧ｿ縺ｫ逶帙ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ縺ｻ縺舌＠縺溘∴縺ｮ縺阪∵ｰｴ80ml縲√ａ繧薙▽繧・ｒ蜈･繧後※辣ｮ遶九◆縺帙∵ｰｴ貅ｶ縺咲援譬礼ｲ峨〒縺ｨ繧阪∩繧偵▽縺代※雎・・縺ｫ縺九￠繧九・
    ]
  },
  {
    id: "main_100",
    title: "雎壹％縺ｾ縺ｨ繝九Λ邇峨・繧ｹ繧ｿ繝溘リ荳ｭ闖ｯ轤偵ａ",
    category: "main",
    cuisine: "chinese",
    proteinType: "pork",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 110,
    tags: ["繝九Λ邇・, "雎壹％縺ｾ閧・, "雜・凾遏ｭ", "繝輔Λ繧､繝代Φ1縺､"],
    containsDislikes: [],
    description: "逍ｲ繧後◆譌･縺ｫ蜈・ｰ励′貉ｧ縺上せ繧ｿ繝溘リ轤偵ａ・√・繧上・繧上・蜊顔・蜊ｵ縺ｨ繝九Λ縺ｮ鬥吶ｊ縲∬ｱ夊ｉ縺ｮ繧ｳ繧ｯ縺御ｸ我ｽ堺ｸ菴薙↓縲・,
    kidsTip: "蜊ｵ繧貞濠辭溘〒縺ｵ繧上・繧上↓莉穂ｸ翫￡繧九％縺ｨ縺ｧ繝九Λ縺ｮ鬥吶ｊ縺後∪繧阪ｄ縺九↓縺ｪ繧翫∝ｭ蝉ｾ帙ｂ鄒主袖縺励￥鬟溘∋縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "蜊ｵ縺ｯ譛蛻昴↓蠑ｷ轣ｫ縺ｧ蜊顔・縺ｫ轤偵ａ縺ｦ荳蠎ｦ蜿悶ｊ蜃ｺ縺励∵怙蠕後↓謌ｻ縺怜・繧後ｋ縺ｮ縺後・繧上・繧上↓菫昴▽譛螟ｧ縺ｮ繧ｳ繝・ｼ・,
    ingredients: [
      { name: "雎壹％縺ｾ閧・, amount: 60, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繝九Λ", amount: 0.3, unit: "譚・, aisle: "驥手除" },
      { name: "蜊ｵ", amount: 1, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ｪ繧､繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ", amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝九Λ縺ｯ4cm髟ｷ縺輔↓蛻・ｊ縲∝嵯縺ｯ貅ｶ縺阪⊇縺舌☆縲・,
      "繝輔Λ繧､繝代Φ縺ｫ縺斐∪豐ｹ繧堤・縺励∝嵯繧貞・繧後※蠑ｷ轣ｫ縺ｧ繧ｵ繝・→轤偵ａ縺ｦ蜊顔・縺ｧ蜿悶ｊ蜃ｺ縺吶・,
      "雎夊ｉ縺ｨ繝九Λ繧堤ｒ繧√∫↓縺碁壹▲縺溘ｉ繧ｪ繧､繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ縺ｨ驢､豐ｹ蟆代・〒蜻ｳ莉倥￠縺励∝嵯繧呈綾縺励※繧ｵ繝・→豺ｷ縺懷粋繧上○繧九・
    ]
  },
  {
    id: "main_101",
    title: "蜴壽恕縺偵→縺｡縺上ｏ縺ｨ螟ｧ譬ｹ縺ｮ遽邏・♀縺ｧ繧馴｢ｨ辣ｮ迚ｩ",
    category: "main",
    cuisine: "japanese",
    proteinType: "soy",
    season: "winter",
    time: "25蛻・,
    approxCostPerPerson: 95,
    tags: ["蜴壽恕縺・, "縺｡縺上ｏ", "螟ｧ譬ｹ", "蜀ｬ縺ｮ譌ｬ", "縺ｻ縺｣縺薙ｊ"],
    containsDislikes: [],
    description: "鬮倥＞縺翫〒繧鍋ｨｮ繧剃ｽｿ繧上★縲∝字謠壹￡繝ｻ縺｡縺上ｏ繝ｻ螟ｧ譬ｹ繝ｻ蜊ｵ縺ｧ謇玖ｻｽ縺ｫ菴懊ｋ螟ｧ貅雜ｳ縺ｮ遽邏・♀縺ｧ繧薙りｺｫ菴薙・闃ｯ縺九ｉ貂ｩ縺ｾ繧翫∪縺吶・,
    kidsTip: "縺｡縺上ｏ縺ｨ縺雁・豎√・譌ｨ蜻ｳ繧貞精縺｣縺溷､ｧ譬ｹ縺後→縺ｦ繧よ沐繧峨°縺上√■縺上ｏ縺ｯ縺雁ｭ先ｧ倥′螟ｧ螂ｽ縺阪↑蜈ｷ譚侵o.1・・,
    tip: "蜈ｷ譚舌ｒ螟壹ａ縺ｫ菴懊▲縺ｦ縺翫￠縺ｰ縲∫ｿ梧悃縺ｯ蜻ｳ縺後＆繧峨↓譟薙∩霎ｼ繧薙〒縺輔ｉ縺ｫ鄒主袖縺励￥譛昴＃縺ｯ繧薙・縺翫°縺壹↓縲・,
    ingredients: [
      { name: "蜴壽恕縺・, amount: 70, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "縺｡縺上ｏ", amount: 1, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "螟ｧ譬ｹ", amount: 70, unit: "g", aisle: "驥手除" },
      { name: "逋ｽ縺縺・, amount: 20, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縺ｯ蜴壹＆2cm縺ｮ蜊頑怦蛻・ｊ縺ｫ縺励※繝ｬ繝ｳ繧ｸ縺ｧ3蛻・刈辭ｱ縲ゅ■縺上ｏ縺ｯ譁懊ａ蜊雁・縲∝字謠壹￡縺ｯ荳蜿｣螟ｧ縺ｫ蛻・ｋ縲・,
      "骰九↓豌ｴ250ml縲∫區縺縺励√∩繧翫ｓ蟆上＆縺・繧堤・遶九※縲∝､ｧ譬ｹ縲∝字謠壹￡縲√■縺上ｏ繧貞・繧後ｋ縲・,
      "關ｽ縺ｨ縺苓搭繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ邏・5蛻・∝・譚舌↓蜻ｳ縺後§繧薙ｏ繧頑沒縺ｿ霎ｼ繧縺ｾ縺ｧ辣ｮ繧九・
    ]
  },
  {
    id: "main_102",
    title: "邏崎ｱ・→縺ｨ繧阪￠繧九メ繝ｼ繧ｺ縺ｮ繧ｫ繝ｪ繧ｫ繝ｪ蜴壽恕縺堤┥縺・,
    category: "main",
    cuisine: "japanese",
    proteinType: "soy",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 70,
    tags: ["邏崎ｱ・, "蜴壽恕縺・, "繝医・繧ｹ繧ｿ繝ｼ", "雜・凾遏ｭ", "蛹・ｸ∽ｸ崎ｦ・],
    containsDislikes: [],
    description: "蜴壽恕縺偵・荳翫↓邏崎ｱ・→繝√・繧ｺ繧剃ｹ励○縺ｦ繝医・繧ｹ繧ｿ繝ｼ縺ｧ辟ｼ縺上□縺托ｼ・ｫ倥ち繝ｳ繝代け繝ｻ菴弱さ繧ｹ繝医〒繝懊Μ繝･繝ｼ繝貅轤ｹ縺ｮ譛蠑ｷ遽邏・ｸｻ闖懊・,
    kidsTip: "繝√・繧ｺ縺ｮ蝪ｩ豌励→繧ｳ繧ｯ縺檎ｴ崎ｱ・音譛峨・蛹ゅ＞繧呈椛縺医√ヴ繧ｶ諢溯ｦ壹〒蟄蝉ｾ帙◆縺｡繧ょ万繧薙〒螳碁｣溘＠縺ｾ縺吶・,
    tip: "繝医・繧ｹ繧ｿ繝ｼ繧・ｭ夂┥縺阪げ繝ｪ繝ｫ繧剃ｽｿ縺医・繝輔Λ繧､繝代Φ縺ｮ豐ｹ豎壹ｌ繧ゅぞ繝ｭ縺ｧ雜・Λ繧ｯ繝√Φ・・,
    ingredients: [
      { name: "蜴壽恕縺・, amount: 100, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "邏崎ｱ・, amount: 0.5, unit: "繝代ャ繧ｯ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繝斐じ逕ｨ繝√・繧ｺ", amount: 15, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "蜴壽恕縺偵・蜴壹＆繧貞濠蛻・↓繧ｹ繝ｩ繧､繧ｹ縺励√い繝ｫ繝溘・繧､繝ｫ縺ｫ荵励○繧九・,
      "莉伜ｱ槭・繧ｿ繝ｬ繧呈ｷｷ縺懊◆邏崎ｱ・ｒ蜴壽恕縺偵・荳翫↓蠎・￡縲√ヴ繧ｶ逕ｨ繝√・繧ｺ繧偵◆縺｣縺ｷ繧贋ｹ励○繧九・,
      "繧ｪ繝ｼ繝悶Φ繝医・繧ｹ繧ｿ繝ｼ縺ｧ繝√・繧ｺ縺梧ｺｶ縺代※縺薙ｓ縺後ｊ辟ｼ縺崎牡縺後▽縺上∪縺ｧ邏・縲・蛻・┥縺上・
    ]
  },
  {
    id: "main_103",
    title: "繧ゅｄ縺励→繧ｫ繝九き繝槭・遽邏・ｸｭ闖ｯ繧ｪ繝繝ｬ繝・,
    category: "main",
    cuisine: "chinese",
    proteinType: "soy",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 65,
    tags: ["蜊ｵ譁咏炊", "繧ゅｄ縺・, "豼螳・, "蛹・ｸ∽ｸ崎ｦ・],
    containsDislikes: [],
    description: "1莠ｺ蜑・00蜀・ｻ･荳具ｼ√ｂ繧・＠縺ｮ繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ鬟滓─縺ｨ繧ｫ繝九き繝槭・蠖ｩ繧翫√・繧薙ｏ繧雁嵯縺悟粋繧上＆縺｣縺滓・､頑ｺ轤ｹ繧ｪ繝繝ｬ繝・・,
    kidsTip: "縺ｵ繧薙ｏ繧雁嵯縺ｫ繧ｱ繝√Ε繝・・繧・曝驟｢縺ゅｓ繧偵°縺代ｋ縺ｨ縲∵ｴ矩｣溘が繝繝ｬ繝・｢ｨ縺ｧ蟄蝉ｾ帛女縺第栢鄒､・・,
    tip: "繧ゅｄ縺励ｒ蜈ｷ縺ｫ縺吶ｋ縺薙→縺ｧ蜊ｵ2蛟句・莉･荳翫・蝨ｧ蛟堤噪縺ｪ繝懊Μ繝･繝ｼ繝諢溘↓縺九＆蠅励＠縺ｧ縺阪∪縺吶・,
    ingredients: [
      { name: "蜊ｵ", amount: 1.5, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ゅｄ縺・, amount: 60, unit: "g", aisle: "驥手除" },
      { name: "繧ｫ繝九き繝・, amount: 2, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "繝懊え繝ｫ縺ｫ蜊ｵ繧貞牡繧翫⊇縺舌＠縲√ｂ繧・＠縲∬｣ゅ＞縺溘き繝九き繝槭・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏蟆上＆縺・/2繧貞・繧後※豺ｷ縺懊ｋ縲・,
      "蟆上＆繧√・繝輔Λ繧､繝代Φ縺ｫ縺斐∪豐ｹ繧堤・縺励∽ｸ豌励↓蜊ｵ豸ｲ繧呈ｵ√＠蜈･繧後ｋ縲・,
      "蜊顔・迥ｶ縺ｫ縺ｪ繧九∪縺ｧ螟ｧ縺阪￥縺九″豺ｷ縺懊√ヵ繧ｿ繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ荳｡髱｢繧帝ｦ吶・縺励￥辟ｼ縺堺ｸ翫￡繧九・
    ]
  },
  {
    id: "main_104",
    title: "雎・・縺ｨ縺医・縺阪・荳ｭ闖ｯ鬚ｨ縺ｵ繧上・繧上き繝狗脂",
    category: "main",
    cuisine: "chinese",
    proteinType: "soy",
    season: "all",
    time: "12蛻・,
    approxCostPerPerson: 75,
    tags: ["縺阪・縺・, "譛ｨ邯ｿ雎・・", "繧ｫ繝狗脂", "荳ｭ闖ｯ縺ゅｓ"],
    containsDislikes: ["縺阪・縺・],
    description: "豌ｴ蛻・ｊ雎・・縺ｨ縺医・縺崎減繧貞嵯縺ｫ豺ｷ縺懆ｾｼ繧薙〒繝懊Μ繝･繝ｼ繝繧｢繝・・・√・繧薙ｏ繧翫・繝ｫ繧ｷ繝ｼ縺ｧ譬・､頑ｺ轤ｹ縺ｮ荳ｭ闖ｯ縺翫°縺壹・,
    kidsTip: "縺医・縺阪ｒ邏ｰ縺九￥蛻ｻ繧縺薙→縺ｧ繧ｭ繝弱さ迚ｹ譛峨・鬟滓─縺梧ｰ励↓縺ｪ繧峨★縲∫曝蜿｣縺ｮ縺ゅｓ縺ｨ荳邱偵↓鄒主袖縺励￥鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "雎・・繧貞・繧後ｋ縺薙→縺ｧ蜀ｷ繧√※繧ょ崋縺上↑繧峨★縲√・繧上・繧乗沐繧峨°鬟滓─縺後★縺｣縺ｨ繧ｭ繝ｼ繝励＆繧後∪縺吶・,
    ingredients: [
      { name: "譛ｨ邯ｿ雎・・", amount: 60, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蜊ｵ", amount: 1, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "縺医・縺・, amount: 30, unit: "g", aisle: "驥手除" },
      { name: "繧ｫ繝九き繝・, amount: 1.5, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "雎・・縺ｯ霆ｽ縺乗ｰｴ蛻・ｊ縺励※繝輔か繝ｼ繧ｯ縺ｧ貎ｰ縺励∫ｴｰ縺九￥蛻・▲縺溘∴縺ｮ縺阪√き繝九き繝槭∵ｺｶ縺榊嵯縺ｨ豺ｷ縺懷粋繧上○繧九・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∽ｸｸ縺乗ｵ√＠蜈･繧後※荳｡髱｢繧偵・縺｣縺上ｉ辟ｼ縺堺ｸ翫￡縺ｦ逧ｿ縺ｫ逶帙ｋ縲・,
      "豌ｴ80ml縲・・豐ｹ縲∫らｳ悶√が繧､繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ蜷・ｰ上＆縺・繧堤・遶九※縲∵ｰｴ貅ｶ縺咲援譬礼ｲ峨〒縺ｨ繧阪∩繧偵▽縺代※縺九￠繧九・
    ]
  },
  {
    id: "main_105",
    title: "縺｡縺上ｏ縺ｨ繧ｭ繝｣繝吶ヤ縺ｮ繧ｫ繝ｬ繝ｼ繝槭Κ鬥吶・縺礼ｒ繧・,
    category: "main",
    cuisine: "western",
    proteinType: "soy",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 70,
    flavorType: "curry",
    tags: ["繧ｫ繝ｬ繝ｼ蜻ｳ", "縺｡縺上ｏ", "繧ｭ繝｣繝吶ヤ", "雜・凾遏ｭ"],
    containsDislikes: [],
    description: "縺願ｉ縺後↑縺上※繧ょ､ｧ貅雜ｳ・∵葎蜻ｳ縺溘▲縺ｷ繧翫・縺｡縺上ｏ縺ｨ繧ｭ繝｣繝吶ヤ繧偵き繝ｬ繝ｼ繝槭Κ縺ｧ轤偵ａ縺溘せ繝代う繧ｷ繝ｼ遽邏・ｸｻ闖懊・,
    kidsTip: "繧ｫ繝ｬ繝ｼ縺ｮ鬥吶ｊ縺ｨ繝槭Κ繝阪・繧ｺ縺ｮ繧ｳ繧ｯ縺ｮ鮟・≡繧ｳ繝ｳ繝薙〒縲√く繝｣繝吶ヤ縺後＞縺上ｉ縺ｧ繧る｣溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "縺｡縺上ｏ縺ｯ譁懊ａ蛻・ｊ縺ｫ縺励※譁ｭ髱｢繧貞ｺ・￥縺吶ｋ縺薙→縺ｧ縲∝袖縺後＠縺｣縺九ｊ邨｡繧薙〒鬟溘∋蠢懊∴繧ゅい繝・・縺励∪縺吶・,
    ingredients: [
      { name: "縺｡縺上ｏ", amount: 2, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ｭ繝｣繝吶ヤ", amount: 80, unit: "g", aisle: "驥手除" },
      { name: "繧ｫ繝ｬ繝ｼ邊・, amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "繝槭Κ繝阪・繧ｺ", amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺｡縺上ｏ縺ｯ譁懊ａ蛻・ｊ縲√く繝｣繝吶ヤ縺ｯ縺悶￥蛻・ｊ縺ｫ縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ繝槭Κ繝阪・繧ｺ繧堤・縺励√■縺上ｏ縺ｨ繧ｭ繝｣繝吶ヤ繧偵＠繧薙↑繧翫☆繧九∪縺ｧ荳ｭ轣ｫ縺ｧ轤偵ａ繧九・,
      "繧ｫ繝ｬ繝ｼ邊峨・・豐ｹ蟆上＆縺・繧貞刈縺医∝・菴薙↓鬥吶ｊ縺檎ｫ九▽縺ｾ縺ｧ謇区掠縺冗ｒ繧∝粋繧上○繧九・
    ]
  },
  {
    id: "main_106",
    title: "縺九⊂縺｡繧・→繝√・繧ｺ縺ｮ繝溘・繝医げ繝ｩ繧ｿ繝ｳ鬚ｨ辟ｼ縺・,
    category: "main",
    cuisine: "western",
    proteinType: "mince",
    season: "autumn",
    time: "20蛻・,
    approxCostPerPerson: 130,
    tags: ["縺九⊂縺｡繧・, "遘九・譌ｬ", "繧ｰ繝ｩ繧ｿ繝ｳ鬚ｨ", "繝√・繧ｺ", "蟄蝉ｾ帛､ｧ莠ｺ豌・],
    containsDislikes: ["縺九⊂縺｡繧・],
    description: "繝帙け繝帙け縺九⊂縺｡繧・・荳翫↓迚ｹ陬ｽ繝溘・繝医た繝ｼ繧ｹ縺ｨ縺ｨ繧阪￠繧九メ繝ｼ繧ｺ繧剃ｹ励○縺ｦ縺薙ｓ縺後ｊ辟ｼ縺堺ｸ翫￡縺溽ｧ九・縺斐■縺昴≧縲・,
    kidsTip: "繝溘・繝医た繝ｼ繧ｹ縺ｨ繝√・繧ｺ縺ｮ繧ｳ繧ｯ縺後°縺ｼ縺｡繧・・逕倥∩縺ｨ繝吶せ繝医・繝・メ・∝ｭ蝉ｾ帙◆縺｡縺ｮ繝・Φ繧ｷ繝ｧ繝ｳ縺御ｸ翫′繧倶ｸ蜩√・,
    tip: "縺九⊂縺｡繧・ｒ繝ｬ繝ｳ繧ｸ縺ｧ蜈医↓譟斐ｉ縺九￥縺励※縺翫￠縺ｰ縲√ヨ繝ｼ繧ｹ繧ｿ繝ｼ縺ｧ繝√・繧ｺ繧呈ｺｶ縺九☆縺縺代〒縺ゅ▲縺ｨ縺・≧髢薙↓螳梧・・・,
    ingredients: [
      { name: "縺九⊂縺｡繧・, amount: 80, unit: "g", aisle: "驥手除" },
      { name: "雎壹・縺崎ｉ", amount: 40, unit: "g", aisle: "閧峨・鬲・ },
      { name: "繝斐じ逕ｨ繝√・繧ｺ", amount: 15, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ｱ繝√Ε繝・・", amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺九⊂縺｡繧・・阮・・繧翫↓縺励※閠千・螳ｹ蝎ｨ縺ｫ蜈･繧後√Ξ繝ｳ繧ｸ縺ｧ2蛻・刈辭ｱ縺励※譟斐ｉ縺九￥縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｧ縺ｲ縺崎ｉ繧堤ｒ繧√√こ繝√Ε繝・・縺ｨ繧ｦ繧ｹ繧ｿ繝ｼ繧ｽ繝ｼ繧ｹ蜷・ｰ上＆縺・縺ｧ蜻ｳ莉倥￠縺励※繝溘・繝医た繝ｼ繧ｹ繧剃ｽ懊ｋ縲・,
      "閠千・逧ｿ縺ｫ縺九⊂縺｡繧・ｒ謨ｷ縺阪√Α繝ｼ繝医た繝ｼ繧ｹ縺ｨ繝斐じ逕ｨ繝√・繧ｺ繧剃ｹ励○縺ｦ繝医・繧ｹ繧ｿ繝ｼ縺ｧ繝√・繧ｺ縺ｫ辟ｼ縺崎牡縺後▽縺上∪縺ｧ辟ｼ縺上・
    ]
  },
  // =================================================================
  // 縲占ｿｽ蜉 蜑ｯ闖・(Side)縲・ side_39 縲・side_80 (蜈ｨ42蜩∬ｿｽ蜉)
  // =================================================================
  {
    id: "side_39",
    title: "縺九⊂縺｡繧・・螳夂分縺ｻ縺｣縺上ｊ逕倩ｾ帷・",
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "15蛻・,
    approxCostPerPerson: 40,
    tags: ["縺九⊂縺｡繧・, "遘九・譌ｬ", "蜥碁｢ｨ蝓ｺ譛ｬ", "縺ｻ縺上⊇縺・],
    containsDislikes: ["縺九⊂縺｡繧・],
    description: "髱｢蜿悶ｊ荳崎ｦ√〒辣ｮ蟠ｩ繧檎衍繧峨★・∫ｴ譚先悽譚･縺ｮ逕倥∩繧貞ｼ輔″蜃ｺ縺咎ｻ・≡豈斐・縺翫□縺励〒縺ｻ縺｣縺上ｊ辣ｮ荳翫￡縺ｾ縺励◆縲・,
    kidsTip: "逕倥￥縺ｦ繝帙け繝帙け縲√∪繧九〒譬励ｄ縺願葛縺ｮ繧ｹ繧､繝ｼ繝・・繧医≧縺ｫ縺雁ｭ先ｧ倥′螟ｧ蝟懊・縺ｧ鬟溘∋縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "逧ｮ逶ｮ繧剃ｸ九↓縺励※荳ｦ縺ｹ縲∬誠縺ｨ縺苓搭繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ繧ｳ繝医さ繝育・繧九・縺檎・蟠ｩ繧後↑縺・ｧ倩ｨ｣縺ｧ縺吶・,
    ingredients: [
      { name: "縺九⊂縺｡繧・, amount: 70, unit: "g", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺九⊂縺｡繧・・遞ｮ縺ｨ繝ｯ繧ｿ繧貞叙繧翫∽ｸ蜿｣螟ｧ・・cm隗抵ｼ峨↓蛻・ｋ縲・,
      "蟆城豪縺ｫ逧ｮ逶ｮ繧剃ｸ九↓縺励※荳ｦ縺ｹ縲∵ｰｴ80ml縲・・豐ｹ縲√∩繧翫ｓ縲∫らｳ悶√□縺励・邏繧貞刈縺医ｋ縲・,
      "關ｽ縺ｨ縺苓搭繧偵＠縺ｦ荳ｭ蠑ｱ轣ｫ縺ｧ邏・縲・0蛻・∫ｫｹ荳ｲ縺後せ繝・→騾壹ｋ縺ｾ縺ｧ辣ｮ蜷ｫ繧√ｋ縲・
    ]
  },
  {
    id: "side_40",
    title: "繝・Μ鬚ｨ縺九⊂縺｡繧・→繝・リ縺ｮ繧ｯ繝ｪ繝ｼ繝溘・繝槭Κ繧ｵ繝ｩ繝",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 45,
    flavorType: "mayo",
    tags: ["縺九⊂縺｡繧・, "繝・リ郛ｶ", "繝・Μ鬚ｨ", "繝槭Κ繝阪・繧ｺ蜻ｳ", "鬲・],
    containsDislikes: ["縺九⊂縺｡繧・, "鬲・],
    description: "繝ｬ繝ｳ繧ｸ蜉辭ｱ縺励◆縺九⊂縺｡繧・ｒ邊励￥貎ｰ縺励√ヤ繝翫→繝槭Κ繝阪・繧ｺ縺ｧ蜥後∴縺溘ョ繝ｪ鬚ｨ繧ｵ繝ｩ繝縲ら曝縺ｿ縺ｨ蝪ｩ豌励・繝舌Λ繝ｳ繧ｹ縺檎ｵｶ螯吶・,
    kidsTip: "繝・リ繝槭Κ縺ｮ譌ｨ蜻ｳ縺後°縺ｼ縺｡繧・↓邨｡繧薙〒髱定・縺輔′繧ｼ繝ｭ縺ｫ縺ｪ繧翫√し繝ｩ繝縺瑚協謇九↑蟄舌ｂ縺翫°繧上ｊ縺励∪縺吶・,
    tip: "縺九⊂縺｡繧・′辭ｱ縺・≧縺｡縺ｫ蝪ｩ縺薙＠繧・≧縺ｨ驟｢蟆上＆縺・/2繧貞刈縺医※縺翫￥縺ｨ縲∝袖縺後・繧ｱ縺壹↓繧ｭ繝ｪ繝・→蠑輔″邱縺ｾ繧翫∪縺吶・,
    ingredients: [
      { name: "縺九⊂縺｡繧・, amount: 60, unit: "g", aisle: "驥手除" },
      { name: "繝・リ郛ｶ", amount: 0.3, unit: "郛ｶ", aisle: "閧峨・鬲・ },
      { name: "繝槭Κ繝阪・繧ｺ", amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺九⊂縺｡繧・・荳蜿｣螟ｧ縺ｫ蛻・ｊ縲∬千・繝懊え繝ｫ縺ｫ蜈･繧後※繝ｬ繝ｳ繧ｸ・・00W・峨〒邏・蛻・刈辭ｱ縺吶ｋ縲・,
      "辭ｱ縺・≧縺｡縺ｫ繝輔か繝ｼ繧ｯ縺ｧ邊励￥貎ｰ縺励∝｡ｩ縺薙＠繧・≧蟆代・ｒ謖ｯ繧九・,
      "邊礼・縺悟叙繧後◆繧峨ヤ繝顔ｼｶ・域ｲｹ繧貞・繧具ｼ峨→繝槭Κ繝阪・繧ｺ繧貞刈縺医※縺悶▲縺上ｊ蜥後∴繧九・
    ]
  },
  {
    id: "side_41",
    title: "縺九⊂縺｡繧・・繧ｵ繧ｯ繧ｵ繧ｯ邏謠壹￡ 蝪ｩ繝舌ち繝ｼ鬚ｨ蜻ｳ",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "8蛻・,
    approxCostPerPerson: 35,
    tags: ["縺九⊂縺｡繧・, "繝輔Λ繧､繝代Φ1縺､", "縺翫ｄ縺､鬚ｨ", "雜・凾遏ｭ"],
    containsDislikes: ["縺九⊂縺｡繧・],
    description: "阮・・繧翫°縺ｼ縺｡繧・ｒ蟆代↑繧√・豐ｹ縺ｧ繧ｫ繝ｪ繝・→謠壹￡辟ｼ縺阪↓縺励∫・縲・・縺・■縺ｫ蝪ｩ縺ｨ繝舌ち繝ｼ繧堤ｵ｡繧√◆繧・∩縺､縺榊憶闖懊・,
    kidsTip: "繝輔Λ繧､繝峨・繝・ヨ縺ｮ繧医≧縺ｪ繧ｵ繧ｯ繧ｵ繧ｯ鬟滓─縺ｨ閾ｪ辟ｶ縺ｪ逕倥∩縺ｧ縲∝ｭ蝉ｾ帙◆縺｡縺ｮ謇九′豁｢縺ｾ繧峨↑縺上↑繧翫∪縺呻ｼ・,
    tip: "蜴壹＆5mm遞句ｺｦ縺ｫ繧ｹ繝ｩ繧､繧ｹ縺吶ｋ縺ｨ縲√ｏ縺壹°3縲・蛻・・謠壹￡辟ｼ縺阪〒荳ｭ縺ｾ縺ｧ繝帙け繝帙け縺ｫ莉穂ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "縺九⊂縺｡繧・, amount: 60, unit: "g", aisle: "驥手除" },
      { name: "繝舌ち繝ｼ", amount: 5, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "縺九⊂縺｡繧・・蜴壹＆5mm縺ｮ阮・・繧翫↓縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ螟ｧ縺輔§2繧堤・縺励√°縺ｼ縺｡繧・ｒ荳ｦ縺ｹ縺ｦ荳｡髱｢縺後き繝ｪ繝・→縺吶ｋ縺ｾ縺ｧ謠壹￡辟ｼ縺阪↓縺吶ｋ縲・,
      "豐ｹ繧貞・縺｣縺ｦ繝懊え繝ｫ縺ｫ遘ｻ縺励∫・縺・≧縺｡縺ｫ繝舌ち繝ｼ縺ｨ蝪ｩ縺ｲ縺ｨ縺､縺ｾ縺ｿ繧堤ｵ｡繧√ｋ縲・
    ]
  },
  {
    id: "side_42",
    title: "縺九⊂縺｡繧・→繝ｬ繝ｼ繧ｺ繝ｳ縺ｮ繝ｨ繝ｼ繧ｰ繝ｫ繝医し繝ｩ繝",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 40,
    tags: ["縺九⊂縺｡繧・, "繝倥Ν繧ｷ繝ｼ", "繝・じ繝ｼ繝磯｢ｨ", "蟄蝉ｾ帛､ｧ莠ｺ豌・],
    containsDislikes: ["縺九⊂縺｡繧・],
    description: "貎ｰ縺励◆縺九⊂縺｡繧・↓繝ｨ繝ｼ繧ｰ繝ｫ繝医→繝ｬ繝ｼ繧ｺ繝ｳ繧貞粋繧上○縺溽或繧・°繧ｵ繝ｩ繝縲ゅ・繝ｨ繝阪・繧ｺ謗ｧ縺医ａ縺ｧ縺ｨ縺ｦ繧ゅ・繝ｫ繧ｷ繝ｼ縲・,
    kidsTip: "繝ｬ繝ｼ繧ｺ繝ｳ縺ｮ閾ｪ辟ｶ縺ｪ逕倥∩縺ｨ繝ｨ繝ｼ繧ｰ繝ｫ繝医・驟ｸ蜻ｳ縺後∪繧九〒繧ｹ繧､繝ｼ繝・・繧医≧縺ｫ縺雁ｭ先ｧ倥↓螟ｧ莠ｺ豌暦ｼ・,
    tip: "繝ｬ繝ｼ繧ｺ繝ｳ縺ｯ貂ｩ縺九＞縺九⊂縺｡繧・→荳邱偵↓豺ｷ縺懊※縺翫￥縺ｨ縲∽ｽ咏・縺ｧ縺ｵ縺｣縺上ｉ譟斐ｉ縺九￥謌ｻ繧翫∪縺吶・,
    ingredients: [
      { name: "縺九⊂縺｡繧・, amount: 60, unit: "g", aisle: "驥手除" },
      { name: "繝励Ξ繝ｼ繝ｳ繝ｨ繝ｼ繧ｰ繝ｫ繝・, amount: 15, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繝ｬ繝ｼ繧ｺ繝ｳ", amount: 5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺九⊂縺｡繧・・蟆上＆繧√↓蛻・▲縺ｦ繝ｬ繝ｳ繧ｸ縺ｧ3蛻・刈辭ｱ縺励∵ｸｩ縺九＞縺・■縺ｫ繝輔か繝ｼ繧ｯ縺ｧ邊励￥貎ｰ縺吶・,
      "繝ｬ繝ｼ繧ｺ繝ｳ繧貞刈縺医※豺ｷ縺懊∫ｲ礼・繧貞叙繧九・,
      "繝ｨ繝ｼ繧ｰ繝ｫ繝医√・繝ｨ繝阪・繧ｺ蟆上＆縺・縲∝｡ｩ蟆代・ｒ蜉縺医※貊代ｉ縺九↓豺ｷ縺懷粋繧上○繧九・
    ]
  },
  {
    id: "side_43",
    title: "繧ｭ繝｣繝吶ヤ縺ｨ蝪ｩ譏・ｸ・・辟｡髯舌・繝ｪ繝昴Μ蜥後∴",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 25,
    tags: ["繧ｭ繝｣繝吶ヤ", "蝪ｩ譏・ｸ・, "雜・凾遏ｭ", "蛹・ｸ∽ｸ崎ｦ・],
    containsDislikes: [],
    description: "謇九〒縺｡縺弱▲縺溘く繝｣繝吶ヤ縺ｫ蝪ｩ譏・ｸ・→縺斐∪豐ｹ繧呈初縺ｿ霎ｼ繧縺縺托ｼ√く繝｣繝吶ヤ蜊顔脂縺後≠縺｣縺ｨ縺・≧髢薙↓縺ｪ縺上↑繧狗┌髯仙憶闖懊・,
    kidsTip: "蝪ｩ譏・ｸ・・譌ｨ蜻ｳ縺ｨ縺斐∪豐ｹ縺ｮ鬥吶ｊ縺ｧ逕溘く繝｣繝吶ヤ迚ｹ譛峨・髱定・縺輔′豸医∴縲√・繝ｪ繝昴Μ讌ｽ縺励￥鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "繝昴Μ陲九・荳ｭ縺ｧ謠峨ａ縺ｰ豢励＞迚ｩ繧ｼ繝ｭ・∝・阡ｵ蠎ｫ縺ｧ30蛻・ｽｮ縺上→蜻ｳ縺後＆繧峨↓鬥ｴ譟薙ｓ縺ｧ縺励ｓ縺ｪ繧顔ｾ主袖縺励￥縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "繧ｭ繝｣繝吶ヤ", amount: 70, unit: "g", aisle: "驥手除" },
      { name: "蝪ｩ譏・ｸ・, amount: 5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺斐∪豐ｹ", amount: 3, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ｭ繝｣繝吶ヤ縺ｯ謇九〒荳蜿｣螟ｧ縺ｫ縺｡縺弱ｊ縲√・繝ｪ陲九↓蜈･繧後ｋ縲・,
      "蝪ｩ譏・ｸ・√＃縺ｾ豐ｹ縲√＞繧翫＃縺ｾ繧偵・繝ｪ陲九↓蜉縺医ｋ縲・,
      "陲九・荳翫°繧画焔縺ｧ縺励▲縺九ｊ謠峨∩霎ｼ縺ｿ縲∝・菴薙′縺励ｓ縺ｪ繧翫＠縺溘ｉ蝎ｨ縺ｫ逶帙ｋ縲・
    ]
  },
  {
    id: "side_44",
    title: "繧ゅｄ縺励→縺｡縺上ｏ縺ｮ荳ｭ闖ｯ縺斐∪豐ｹ繝翫Β繝ｫ",
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 30,
    tags: ["繧ゅｄ縺・, "縺｡縺上ｏ", "豼螳・, "繝ｬ繝ｳ繧ｸ隱ｿ逅・],
    containsDislikes: [],
    description: "繝ｬ繝ｳ繝√Φ繧ゅｄ縺励→縺｡縺上ｏ繧帝ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励→縺斐∪豐ｹ縺ｧ蜥後∴縺溷叉蟶ｭ繝翫Β繝ｫ縲・莠ｺ蜑・0蜀・・雜・ｯ邏・憶闖懊・,
    kidsTip: "縺｡縺上ｏ縺ｮ逕倥∩縺ｨ荳ｭ闖ｯ鬚ｨ縺ｮ蜻ｳ莉倥￠縺ｧ縲√ｂ繧・＠縺瑚協謇九↑蟄舌ｂ邂ｸ縺梧ｭ｢縺ｾ繧峨↑縺上↑繧翫∪縺吶・,
    tip: "繧ゅｄ縺励・繝ｬ繝ｳ繧ｸ蜉辭ｱ蠕後↓繧ｶ繝ｫ縺ｫ縺ゅ￡縺ｦ縺励▲縺九ｊ豌ｴ豌励ｒ邨槭ｋ縺薙→縺ｧ縲∝袖縺瑚埋縺ｾ繧峨★繝薙す繝・→豎ｺ縺ｾ繧翫∪縺吶・,
    ingredients: [
      { name: "繧ゅｄ縺・, amount: 60, unit: "g", aisle: "驥手除" },
      { name: "縺｡縺上ｏ", amount: 1, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏", amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺斐∪豐ｹ", amount: 3, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ゅｄ縺励・閠千・繝懊え繝ｫ縺ｫ蜈･繧後※繝ｩ繝・・繧偵＠縲√Ξ繝ｳ繧ｸ縺ｧ1蛻・濠蜉辭ｱ縺励※豬∵ｰｴ縺ｧ蜀ｷ縺ｾ縺玲ｰｴ豌励ｒ縺励▲縺九ｊ邨槭ｋ縲・,
      "縺｡縺上ｏ縺ｯ譁懊ａ阮・・繧翫↓縺吶ｋ縲・,
      "繧ゅｄ縺励√■縺上ｏ縲・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏縲√＃縺ｾ豐ｹ縲・・豐ｹ蟆代・∫區縺・ｊ縺斐∪繧貞柱縺医ｋ縲・
    ]
  },
  {
    id: "side_45",
    title: "縺阪ｅ縺・ｊ縺ｨ荵ｾ辯･繝ｯ繧ｫ繝｡縺ｮ縺輔▲縺ｱ繧企・縺ｮ迚ｩ",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5蛻・,
    approxCostPerPerson: 25,
    flavorType: "sour",
    tags: ["驟ｸ縺｣縺ｱ縺・袖", "縺阪ｅ縺・ｊ", "螟上ヰ繝・ｺ磯亟", "蜥碁｢ｨ蝓ｺ譛ｬ"],
    containsDislikes: [],
    description: "阮・・繧翫″繧・≧繧翫→繝ｯ繧ｫ繝｡縺ｮ螳夂分驟｢縺ｮ迚ｩ縲ら曝驟｢莉慕ｫ九※縺ｧ繝・Φ縺ｨ縺帙★縲∬р縺｣縺薙＞縺願ｉ譁咏炊縺ｮ蜿｣逶ｴ縺励↓譛驕ｩ縲・,
    kidsTip: "縺企・縺ｫ遐らｳ悶→縺縺励・邏繧偵＠縺｣縺九ｊ貅ｶ縺九＠縺ｦ逕倥ａ縺ｮ莠梧擶驟｢縺ｫ縺吶ｋ縺薙→縺ｧ縲∝ｭ蝉ｾ帙ｂ繧縺帙★縺ｫ鄒主袖縺励￥鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "縺阪ｅ縺・ｊ縺ｯ蝪ｩ繧ゅ∩縺励※縺励▲縺九ｊ豌ｴ蛻・ｒ邨槭ｋ縺薙→縺ｧ縲∵凾髢薙′邨後▲縺ｦ繧よｰｴ縺｣縺ｽ縺上↑繧翫∪縺帙ｓ縲・,
    ingredients: [
      { name: "縺阪ｅ縺・ｊ", amount: 0.4, unit: "譛ｬ", aisle: "驥手除" },
      { name: "荵ｾ辯･繧上°繧・, amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驟｢", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺阪ｅ縺・ｊ縺ｯ蟆丞哨阮・・繧翫↓縺励※蝪ｩ謠峨∩縺励・蛻・ｽｮ縺・※豌ｴ豌励ｒ縺励▲縺九ｊ邨槭ｋ縲ゅΡ繧ｫ繝｡縺ｯ豌ｴ縺ｧ謌ｻ縺吶・,
      "繝懊え繝ｫ縺ｫ驟｢縲∫らｳ悶・・豐ｹ蟆上＆縺・/2縲√□縺励・邏蟆代・ｒ繧医￥豺ｷ縺懷粋繧上○繧九・,
      "縺阪ｅ縺・ｊ縺ｨ繝ｯ繧ｫ繝｡繧貞刈縺医※蜥後∴縲∝勣縺ｫ逶帙ｊ莉倥￠縺ｦ逋ｽ縺斐∪繧呈険繧九・
    ]
  },
  {
    id: "side_46",
    title: "莠ｺ蜿ゅ→繝・リ縺ｮ豐也ｸ・｢ｨ縺励ｊ縺励ｊ轤偵ａ",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "8蛻・,
    approxCostPerPerson: 40,
    tags: ["莠ｺ蜿・, "繝・リ郛ｶ", "蟄蝉ｾ帛､ｧ莠ｺ豌・, "菴懊ｊ鄂ｮ縺・, "鬲・],
    containsDislikes: ["鬲・],
    description: "蜊・・繧贋ｺｺ蜿ゅｒ繝・リ縺ｨ蜊ｵ縺ｧ轤偵ａ縺滓ｲ也ｸ・・螳夂分蟶ｸ蛯呵除縲ゆｺｺ蜿ゅ・逕倥∩縺後＄繧薙＄繧灘ｼ輔″蜃ｺ縺輔ｌ縲∝・繧√※繧らｵｶ蜩√・,
    kidsTip: "繝・リ縺ｨ蜊ｵ縺ｮ譌ｨ蜻ｳ縺ｧ莠ｺ蜿ゅ・繧ｯ繧ｻ縺悟ｮ悟・縺ｫ豸医∴縲∽ｺｺ蜿ょｫ後＞縺ｮ縺雁ｭ先ｧ倥′蜈区恪縺吶ｋ螳夂分No.1繝｡繝九Η繝ｼ・・,
    tip: "繧ｹ繝ｩ繧､繧ｵ繝ｼ繧剃ｽｿ縺｣縺ｦ邏ｰ蛻・ｊ縺ｫ縺吶ｌ縺ｰ縲√ｏ縺壹°3蛻・・轤偵ａ譎る俣縺ｧ轣ｫ縺碁壹ｊ縺励ｓ縺ｪ繧頑沐繧峨°縺上↑繧翫∪縺吶・,
    ingredients: [
      { name: "莠ｺ蜿・, amount: 50, unit: "g", aisle: "驥手除" },
      { name: "繝・リ郛ｶ", amount: 0.3, unit: "郛ｶ", aisle: "閧峨・鬲・ },
      { name: "蜊ｵ", amount: 0.3, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "莠ｺ蜿ゅ・蜊・・繧奇ｼ医＠繧翫＠繧奇ｼ峨↓縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ繝・リ縺ｮ豐ｹ繧堤・縺励∽ｺｺ蜿ゅｒ縺励ｓ縺ｪ繧翫☆繧九∪縺ｧ荳ｭ轣ｫ縺ｧ轤偵ａ繧九・,
      "繝・リ縲・・豐ｹ繝ｻ縺ｿ繧翫ｓ蜷・ｰ上＆縺・繧貞刈縺医∵ｺｶ縺榊嵯繧貞屓縺怜・繧後※轤偵ａ蜷医ｏ縺帙ｋ縲・
    ]
  },
  {
    id: "side_47",
    title: "螟ｧ譬ｹ縺ｨ繧ｫ繝九き繝槭・繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ蜥碁｢ｨ繝槭Κ繧ｵ繝ｩ繝",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 30,
    flavorType: "mayo",
    tags: ["螟ｧ譬ｹ", "繧ｫ繝九き繝・, "繝槭Κ繝阪・繧ｺ蜻ｳ", "蛹・ｸ∽ｸ崎ｦ・],
    containsDislikes: [],
    description: "蜊・・繧雁､ｧ譬ｹ縺ｨ繧ｫ繝九き繝槭ｒ繝槭Κ繝昴Φ縺ｨ魏ｹ遽縺ｧ蜥後∴縺溘し繝ｩ繝縲ょ､ｧ譬ｹ縺ｮ繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ縺励◆縺ｿ縺壹∩縺壹＠縺輔′譛鬮假ｼ・,
    kidsTip: "繧ｫ繝九き繝槭・襍､縺・ｽｩ繧翫→繝槭Κ繝阪・繧ｺ縺ｮ繧ｳ繧ｯ縺ｧ縲∫函螟ｧ譬ｹ縺悟ｭ蝉ｾ帙◆縺｡縺ｮ螂ｽ迚ｩ繧ｵ繝ｩ繝縺ｫ螟ｧ螟芽ｺｫ縲・,
    tip: "螟ｧ譬ｹ縺ｯ蜊・・繧翫↓縺励※蜀ｷ豌ｴ縺ｫ繧ｵ繝・→謾ｾ縺､縺ｨ縲√＆繧峨↓繝代Μ繝・→縺励◆縺ｿ縺壹∩縺壹＠縺・｣滓─縺ｫ縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "螟ｧ譬ｹ", amount: 60, unit: "g", aisle: "驥手除" },
      { name: "繧ｫ繝九き繝・, amount: 1.5, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繝槭Κ繝阪・繧ｺ", amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縺ｯ邏ｰ縺・鴻蛻・ｊ縺ｫ縺励√・繝ｼ繝代・縺ｧ豌ｴ豌励ｒ諡ｭ縺榊叙繧九・,
      "繝懊え繝ｫ縺ｫ螟ｧ譬ｹ縲∵焔縺ｧ蜑ｲ縺・◆繧ｫ繝九き繝槭√・繝ｨ繝阪・繧ｺ縲√・繝ｳ驟｢蟆上＆縺・/2繧貞・繧後ｋ縲・,
      "蜈ｨ菴薙ｒ縺輔▲縺上ｊ蜥後∴縲∽ｻ穂ｸ翫￡縺ｫ縺九▽縺顔ｯ繧呈険繧翫°縺代ｋ縲・
    ]
  },
  {
    id: "side_48",
    title: "縺ｻ縺・ｌ繧楢拷縺ｮ繝・リ閭｡鮗ｻ蜥後∴",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "8蛻・,
    approxCostPerPerson: 45,
    tags: ["縺ｻ縺・ｌ繧楢拷", "繝・リ郛ｶ", "蜀ｬ縺ｮ譌ｬ", "驩・・貅轤ｹ", "鬲・],
    containsDislikes: ["鬲・],
    description: "闌ｹ縺ｧ縺溘⊇縺・ｌ繧楢拷縺ｫ繝・リ郛ｶ縺ｨ縺吶ｊ縺斐∪縲√ａ繧薙▽繧・ｒ蜥後∴繧九□縺代ゅヤ繝翫・繧ｪ繧､繝ｫ縺ｧ縺ｻ縺・ｌ繧楢拷縺ｮ縺医＄縺ｿ縺梧ｶ医∴縺ｾ縺吶・,
    kidsTip: "繝・リ縺ｨ縺吶ｊ縺斐∪縺ｮ逕倥∩縺ｧ縺ｻ縺・ｌ繧楢拷迢ｬ迚ｹ縺ｮ闍ｦ蜻ｳ縺梧ｶ医∴縲∝ｭ蝉ｾ帙◆縺｡繧ょ万繧薙〒螳碁｣溘＠縺ｾ縺吶・,
    tip: "縺ｻ縺・ｌ繧楢拷縺ｯ繝ｬ繝ｳ繧ｸ縺ｧ1蛻・濠蜉辭ｱ縺励※蜀ｷ豌ｴ縺ｫ蜿悶ｋ縺ｨ縲√♀貉ｯ繧呈ｲｸ縺九☆謇矩俣縺ｪ縺上い繧ｯ謚懊″螳御ｺ・ｼ・,
    ingredients: [
      { name: "縺ｻ縺・ｌ繧楢拷", amount: 50, unit: "g", aisle: "驥手除" },
      { name: "繝・リ郛ｶ", amount: 0.25, unit: "郛ｶ", aisle: "閧峨・鬲・ },
      { name: "縺吶ｊ縺斐∪", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺ｻ縺・ｌ繧楢拷縺ｯ辭ｱ貉ｯ縺ｧ繧ｵ繝・→闌ｹ縺ｧ縺ｦ蜀ｷ豌ｴ縺ｫ縺ｨ繧翫∵ｰｴ豌励ｒ縺励▲縺九ｊ邨槭▲縺ｦ3cm髟ｷ縺輔↓蛻・ｋ縲・,
      "繝懊え繝ｫ縺ｫ繝・リ・郁ｻｽ縺乗ｲｹ繧貞・繧具ｼ峨√☆繧翫＃縺ｾ縲√ａ繧薙▽繧・ｰ上＆縺・繧貞・繧後ｋ縲・,
      "縺ｻ縺・ｌ繧楢拷繧貞刈縺医※縺ｻ縺舌＠縺ｪ縺後ｉ繧医￥蜥後∴繧九・
    ]
  },
  {
    id: "side_49",
    title: "蟆乗收闖懊→豐ｹ謠壹￡縺ｮ縺倥ｅ繧上▲縺ｨ辣ｮ豬ｸ縺・,
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "8蛻・,
    approxCostPerPerson: 35,
    tags: ["蟆乗收闖・, "豐ｹ謠壹￡", "蜥碁｢ｨ蝓ｺ譛ｬ", "繧ｫ繝ｫ繧ｷ繧ｦ繝"],
    containsDislikes: [],
    description: "縺雁・豎√ｒ蜷ｸ縺｣縺滓ｲｹ謠壹￡縺悟剱繧縺ｨ縺倥ｅ繧上▲縺ｨ繧ｸ繝･繝ｼ繧ｷ繝ｼ・√き繝ｫ繧ｷ繧ｦ繝雎雁ｯ後↑蟆乗收闖懊ｒ謇玖ｻｽ縺ｫ鄒主袖縺励￥鞫ゅｌ繧句ｮ夂分蜑ｯ闖懊・,
    kidsTip: "豐ｹ謠壹￡縺ｮ逕倥＞繧ｳ繧ｯ縺ｨ縺雁・豎√′蟆乗收闖懊ｒ蛹・∩縲∬協蜻ｳ繧呈─縺倥★譟斐ｉ縺九￥鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "蟆乗收闖懊・荳玖源縺ｧ荳崎ｦ√〒縺昴・縺ｾ縺ｾ縺雁・豎√〒辣ｮ繧九□縺代ゅン繧ｿ繝溘Φ縺碁・￡縺壽凾遏ｭ縺ｧ菴懊ｌ縺ｾ縺吶・,
    ingredients: [
      { name: "蟆乗收闖・, amount: 50, unit: "g", aisle: "驥手除" },
      { name: "豐ｹ謠壹￡", amount: 0.3, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "逋ｽ縺縺・, amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蟆乗收闖懊・4cm髟ｷ縺輔↓蛻・ｊ縲∵ｲｹ謠壹￡縺ｯ遏ｭ蜀雁・繧翫↓縺吶ｋ縲・,
      "蟆城豪縺ｫ豌ｴ100ml縲∫區縺縺励√∩繧翫ｓ蟆上＆縺・繧貞・繧後※辣ｮ遶九※繧九・,
      "豐ｹ謠壹￡縺ｨ蟆乗收闖懊・闌弱ｒ蜈医↓蜈･繧後・蛻・ｾ後↓闡峨ｒ蜉縺医※繧ｵ繝・→2蛻・・縺ｦ轣ｫ繧呈ｭ｢繧√ｋ縲・
    ]
  },
  {
    id: "side_50",
    title: "螳檎・繝医・繝医→繝｢繝・ヤ繧｡繝ｬ繝ｩ鬚ｨ豌ｴ蛻・ｊ雎・・縺ｮ繧ｫ繝励Ξ繝ｼ繧ｼ",
    category: "side",
    cuisine: "western",
    season: "summer",
    time: "5蛻・,
    approxCostPerPerson: 40,
    tags: ["繝医・繝・, "螟城㍽闖・, "雎・・", "繧ｫ繝励Ξ繝ｼ繧ｼ鬚ｨ"],
    containsDislikes: ["繝医・繝・],
    description: "鬮倅ｾ｡縺ｪ繝｢繝・ヤ繧｡繝ｬ繝ｩ繝√・繧ｺ縺ｮ莉｣繧上ｊ縺ｫ蝪ｩ豌ｴ蛻・ｊ譛ｨ邯ｿ雎・・繧剃ｽｿ逕ｨ・√が繝ｪ繝ｼ繝匁ｲｹ縺ｨ蝪ｩ繧ｳ繧ｷ繝ｧ繧ｦ縺ｧ繝・Μ鬚ｨ縺ｮ蜑崎除縺ｫ縲・,
    kidsTip: "蝪ｩ繧偵＠縺｣縺九ｊ蜉ｹ縺九○縺溯ｱ・・縺ｨ螳檎・繝医・繝医・邨・∩蜷医ｏ縺帙〒縲√＆縺｣縺ｱ繧企｣溘∋繧・☆縺・ｴ矩｢ｨ蜑ｯ闖懊↓縲・,
    tip: "雎・・縺ｫ蝪ｩ繧呈険縺｣縺ｦ繝壹・繝代・縺ｧ蛹・ｓ縺ｧ縺翫￥縺縺代〒縲∵悽蠖薙↓繝｢繝・ヤ繧｡繝ｬ繝ｩ縺ｮ繧医≧縺ｪ繧ゅ▲縺｡繧企｣滓─縺ｫ螟芽ｺｫ・・,
    ingredients: [
      { name: "繝医・繝・, amount: 0.5, unit: "蛟・, aisle: "驥手除" },
      { name: "譛ｨ邯ｿ雎・・", amount: 50, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ｪ繝ｪ繝ｼ繝悶が繧､繝ｫ", amount: 5, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "譛ｨ邯ｿ雎・・縺ｫ蝪ｩ蟆上＆縺・/3繧呈険縺｣縺ｦ繝壹・繝代・縺ｫ蛹・∩縲・0蛻・ｽｮ縺・※豌ｴ蛻・ｊ縺吶ｋ縲・,
      "繝医・繝医→雎・・繧偵◎繧後◇繧瑚埋蛻・ｊ縺ｫ縺吶ｋ縲・,
      "逧ｿ縺ｫ莠､莠偵↓荳ｦ縺ｹ縲√が繝ｪ繝ｼ繝悶が繧､繝ｫ縺ｨ鮟定Γ讀偵ｒ蝗槭＠縺九￠繧九・
    ]
  },
  {
    id: "side_51",
    title: "繝斐・繝槭Φ縺ｨ縺｡縺上ｏ縺ｮ逕倩ｾ帙″繧薙・繧・,
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "8蛻・,
    approxCostPerPerson: 35,
    tags: ["繝斐・繝槭Φ", "縺｡縺上ｏ", "縺雁ｼ∝ｽ・, "逕倩ｾ・],
    containsDislikes: ["繝斐・繝槭Φ"],
    description: "繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ縺ｮ繝斐・繝槭Φ縺ｨ縺｡縺上ｏ繧偵＃縺ｾ豐ｹ縺ｧ轤偵ａ縲∫曝霎幃・豐ｹ縺ｧ辣ｧ繧翫ｈ縺丈ｻ穂ｸ翫￡縺溷ｮ夂分縺雁ｼ∝ｽ薙♀縺九★縲・,
    kidsTip: "縺｡縺上ｏ縺ｮ譌ｨ蜻ｳ縺ｨ縺ｿ繧翫ｓ縺ｮ逕倥∩縺ｧ繝斐・繝槭Φ縺ｮ闍ｦ蜻ｳ縺御ｸｭ蜥後＆繧後∝ｭ蝉ｾ帙ｂ繝代け繝代け鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "繝斐・繝槭Φ縺ｯ邵ｦ蛻・ｊ縺ｫ縺吶ｋ縺ｨ郢顔ｶｭ縺悟｣翫ｌ縺夊協蜻ｳ謌仙・縺悟・縺ｫ縺上￥縺ｪ繧翫∫曝縺ｿ縺悟ｼ輔″遶九■縺ｾ縺吶・,
    ingredients: [
      { name: "繝斐・繝槭Φ", amount: 1, unit: "蛟・, aisle: "驥手除" },
      { name: "縺｡縺上ｏ", amount: 1, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "驢､豐ｹ", amount: 5, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 5, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝斐・繝槭Φ縺ｯ遞ｮ繧貞叙縺｣縺ｦ邵ｦ邏ｰ蛻・ｊ縲√■縺上ｏ縺ｯ邵ｦ蜊雁・縺ｫ蛻・▲縺ｦ邏ｰ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ縺斐∪豐ｹ繧堤・縺励√■縺上ｏ縺ｨ繝斐・繝槭Φ繧貞ｼｷ轣ｫ縺ｧ2蛻・ｒ繧√ｋ縲・,
      "驢､豐ｹ縲√∩繧翫ｓ縲∫らｳ門推蟆上＆縺・繧貞刈縺医∵ｱ∵ｰ励′縺ｪ縺上↑繧九∪縺ｧ轤偵ａ蜷医ｏ縺帙※逋ｽ縺斐∪繧呈険繧九・
    ]
  },
  {
    id: "side_52",
    title: "繝翫せ縺ｨ螟ｧ闡峨・縺ｨ繧阪→繧咲┥縺肴ｵｸ縺・,
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "10蛻・,
    approxCostPerPerson: 40,
    tags: ["縺ｪ縺・, "螟城㍽闖・, "菴懊ｊ鄂ｮ縺・, "蜀ｷ繧・＠縺ｦ鄒主袖縺励＞"],
    containsDislikes: ["縺ｪ縺・],
    description: "螟壹ａ縺ｮ豐ｹ縺ｧ縺薙ｓ縺後ｊ辟ｼ縺・◆繝翫せ縺ｫ縲∝・縺溘＞繧√ｓ縺､繧・□縺励′繧ｸ繝･繝ｯ繝・→譟薙∩霎ｼ繧薙□螟上・鬚ｨ迚ｩ隧ｩ縲・,
    kidsTip: "逧ｮ縺ｫ邏ｰ縺九￥譬ｼ蟄千憾縺ｮ蛻・ｊ霎ｼ縺ｿ繧貞・繧後※縺翫￥縺ｨ譟斐ｉ縺九￥蝎帙∩蛻・ｌ縲∫坩縺悟哨縺ｫ谿九ｊ縺ｾ縺帙ｓ縲・,
    tip: "辭ｱ縲・・辟ｼ縺阪◆縺ｦ繝翫せ繧貞・縺溘＞繧√ｓ縺､繧・↓繧ｸ繝･繝・→貍ｬ縺代ｋ縺薙→縺ｧ縲∫洒譎る俣縺ｧ闃ｯ縺ｾ縺ｧ蜻ｳ縺梧沒縺ｿ霎ｼ縺ｿ縺ｾ縺吶・,
    ingredients: [
      { name: "縺ｪ縺・, amount: 1, unit: "譛ｬ", aisle: "驥手除" },
      { name: "螟ｧ闡・, amount: 1, unit: "譫・, aisle: "驥手除" },
      { name: "繧√ｓ縺､繧・, amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝翫せ縺ｯ繝倥ち繧貞叙繧顔ｸｦ蜊雁・縺ｫ蛻・ｊ縲∫坩逶ｮ縺ｫ邏ｰ縺九￥譁懊ａ縺ｮ蛻・ｊ霎ｼ縺ｿ繧貞・繧後※豌ｴ豌励ｒ諡ｭ縺上・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ螟ｧ縺輔§1繧堤・縺励√リ繧ｹ繧堤坩逶ｮ縺九ｉ荳ｭ轣ｫ縺ｧ荳｡髱｢縺励ｓ縺ｪ繧翫☆繧九∪縺ｧ辟ｼ縺上・,
      "繧√ｓ縺､繧・→豌ｴ50ml繧貞粋繧上○縺溷ｮｹ蝎ｨ縺ｫ辭ｱ縺・リ繧ｹ繧呈ｼｬ縺代∝鴻蛻・ｊ螟ｧ闡峨ｒ豺ｻ縺医ｋ縲・
    ]
  },
  {
    id: "side_53",
    title: "縺医・縺阪→繝ｯ繧ｫ繝｡縺ｮ縺輔▲縺ｱ繧翫・繝ｳ驟｢蜥後∴",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 25,
    flavorType: "sour",
    tags: ["縺阪・縺・, "驟ｸ縺｣縺ｱ縺・袖", "鬟溽黄郢顔ｶｭ", "雜・凾遏ｭ"],
    containsDislikes: ["縺阪・縺・],
    description: "繧ｵ繝・→闌ｹ縺ｧ縺溘∴縺ｮ縺阪→謌ｻ縺励◆繝ｯ繧ｫ繝｡繧偵・繝ｳ驟｢縺ｨ縺斐∪豐ｹ縺ｧ蜥後∴繧九□縺代ゅヤ繝ｫ繝・Ν縺励◆蝟芽ｶ翫＠縺悟ｿ・慍繧医＞邂ｸ莨代ａ縲・,
    kidsTip: "繝昴Φ驟｢縺ｨ縺斐∪豐ｹ縺ｮ縺輔▲縺ｱ繧翫＠縺溷袖繧上＞縺ｧ縲√″縺ｮ縺鍋音譛峨・蛹ゅ＞縺梧ｰ励↓縺ｪ繧峨★鬟溘∋繧・☆縺・〒縺吶・,
    tip: "縺医・縺阪・繝ｬ繝ｳ繧ｸ縺ｧ1蛻・メ繝ｳ縺吶ｋ縺縺代〒繧０K・∫↓繧剃ｽｿ繧上★5蛻・〒菴懊ｌ繧句━遘繧ｹ繝斐・繝牙憶闖懊・,
    ingredients: [
      { name: "縺医・縺・, amount: 40, unit: "g", aisle: "驥手除" },
      { name: "荵ｾ辯･繧上°繧・, amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "繝昴Φ驟｢", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺医・縺阪・遏ｳ縺･縺阪ｒ關ｽ縺ｨ縺励※蜊雁・縺ｮ髟ｷ縺輔↓蛻・ｊ縲∫・貉ｯ縺ｧ1蛻・し繝・→闌ｹ縺ｧ縺ｦ貉ｯ蛻・ｊ縺吶ｋ縲・,
      "豌ｴ縺ｧ謌ｻ縺励◆繝ｯ繧ｫ繝｡縺ｮ豌ｴ豌励ｒ縺励▲縺九ｊ邨槭ｋ縲・,
      "繝懊え繝ｫ縺ｫ縺医・縺阪√Ρ繧ｫ繝｡縲√・繝ｳ驟｢縲√＃縺ｾ豐ｹ蟆代・ｒ蜉縺医※蜥後∴繧九・
    ]
  },
  {
    id: "side_54",
    title: "縺励ａ縺倥→繝吶・繧ｳ繝ｳ縺ｮ鬥吶・縺励ヰ繧ｿ繝ｼ繧ｽ繝・・",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 45,
    tags: ["縺阪・縺・, "繝吶・繧ｳ繝ｳ", "豢矩｢ｨ", "蟄蝉ｾ帛､ｧ莠ｺ豌・],
    containsDislikes: ["縺阪・縺・],
    description: "鬥吶・縺励￥轤偵ａ縺溘・繝ｼ繧ｳ繝ｳ縺ｮ蝪ｩ豌励→縺阪・縺薙・譌ｨ蜻ｳ縺後ヰ繧ｿ繝ｼ縺ｧ貅ｶ縺大粋縺・∵ｴ矩｣溘・螳夂分繧ｽ繝・・縲・,
    kidsTip: "繝吶・繧ｳ繝ｳ縺ｮ譌ｨ蜻ｳ縺ｨ繝舌ち繝ｼ縺ｮ鬥吶ｊ縺ｧ縺励ａ縺倥・闍ｦ蜻ｳ縺梧ｶ医∴縲∝ｭ蝉ｾ帙◆縺｡繧ょ､ｧ螂ｽ縺阪↑蜻ｳ莉倥￠縺ｧ縺吶・,
    tip: "縺阪・縺薙・縺ゅ∪繧雁虚縺九＆縺壹↓辟ｼ縺崎牡繧偵▽縺代ｋ繧医≧縺ｫ轤偵ａ繧九→縲・ｦ吶・縺励＆縺梧ｼ谿ｵ縺ｫ繧｢繝・・縺励∪縺吶・,
    ingredients: [
      { name: "縺励ａ縺・, amount: 40, unit: "g", aisle: "驥手除" },
      { name: "繝上・繝輔・繝ｼ繧ｳ繝ｳ", amount: 1, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繝舌ち繝ｼ", amount: 5, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "縺励ａ縺倥・遏ｳ縺･縺阪ｒ關ｽ縺ｨ縺励※縺ｻ縺舌＠縲√・繝ｼ繧ｳ繝ｳ縺ｯ1cm蟷・↓蛻・ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ繝舌ち繝ｼ繧堤・縺励√・繝ｼ繧ｳ繝ｳ縺ｨ縺励ａ縺倥ｒ蜈･繧後※荳ｭ轣ｫ縺ｧ轤偵ａ繧九・,
      "縺励ａ縺倥′縺励ｓ縺ｪ繧翫＠縺ｦ辟ｼ縺崎牡縺後▽縺・※縺阪◆繧峨∝｡ｩ縺薙＠繧・≧縺ｨ驢､豐ｹ蟆代・〒蜻ｳ繧定ｪｿ縺医ｋ縲・
    ]
  },
  {
    id: "side_55",
    title: "髟ｷ繝阪ぐ縺ｮ縺ｨ繧阪→繧咲┥縺阪ロ繧ｮ蜻ｳ蝎・,
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "8蛻・,
    approxCostPerPerson: 30,
    tags: ["髟ｷ繝阪ぐ", "蜀ｬ縺ｮ譌ｬ", "鬥吶・縺励＞", "蜥碁｢ｨ蝓ｺ譛ｬ"],
    containsDislikes: ["髟ｷ繝阪ぐ"],
    description: "縺倥▲縺上ｊ辟ｼ縺・※逕倥∩繧貞ｼ輔″蜃ｺ縺励◆髟ｷ繝阪ぐ縺ｫ縲∫曝霎帙＞蜻ｳ蝎後ム繝ｬ繧偵ず繝･繝ｯ繝・→邨｡繧√◆蜀ｬ縺ｮ縺ゅ▲縺溘°蜑ｯ闖懊・,
    kidsTip: "縺励▲縺九ｊ辟ｼ縺咲岼繧偵▽縺代※闥ｸ繧峨☆縺ｨ繝阪ぐ縺ｮ繝・Φ縺ｨ縺励◆霎帛袖縺悟ｮ悟・縺ｫ豸医∴縲・ｩ壹￥縺ｻ縺ｩ逕倥￥縺ｪ繧翫∪縺吶・,
    tip: "繝輔ち繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ闥ｸ縺礼┥縺阪↓縺吶ｋ縺薙→縺ｧ縲√ロ繧ｮ縺ｮ闃ｯ縺ｾ縺ｧ繝医Ο繝・ヨ繝ｭ縺ｫ譟斐ｉ縺九￥縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "髟ｷ繝阪ぐ", amount: 0.5, unit: "譛ｬ", aisle: "驥手除" },
      { name: "蜻ｳ蝎・, amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "髟ｷ繝阪ぐ縺ｯ3cm髟ｷ縺輔↓蛻・ｊ縲∝桁荳√〒豬・￥譁懊ａ縺ｮ蛻・ｊ霎ｼ縺ｿ繧貞・繧後ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ縺斐∪豐ｹ繧堤・縺励・聞繝阪ぐ繧定ｻ｢縺後＠縺ｪ縺後ｉ荳ｭ轣ｫ縺ｧ縺薙ｓ縺後ｊ辟ｼ縺崎牡繧偵▽縺代ｋ縲・,
      "蜻ｳ蝎後√∩繧翫ｓ縲∫らｳ門推蟆上＆縺・繧貞粋繧上○縺溘ち繝ｬ繧貞刈縺医∝・菴薙↓邨｡繧∫ｒ繧√ｋ縲・
    ]
  },
  {
    id: "side_56",
    title: "雎・距縺ｨ繧ｫ繝九き繝槭・縺ｵ繧薙ｏ繧顔脂蟄千ｒ繧・,
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "6蛻・,
    approxCostPerPerson: 35,
    tags: ["雎・距", "繧ｫ繝九き繝・, "蜊ｵ譁咏炊", "雜・凾遏ｭ"],
    containsDislikes: ["雎・距"],
    description: "蠖ｩ繧企ｮｮ繧・°・√す繝｣繧ｭ繧ｷ繝｣繧ｭ雎・距縺ｨ繧ｫ繝九き繝槭・襍､縲∝嵯縺ｮ鮟・牡縺ｧ鬟溷酷縺御ｸ豌励↓闖ｯ繧・＄繧ｹ繝斐・繝臥ｯ邏・憶闖懊・,
    kidsTip: "蜊ｵ縺ｨ繧ｫ繝九き繝槭・閾ｪ辟ｶ縺ｪ逕倥∩縺悟刈繧上ｋ縺薙→縺ｧ縲・搨闖懃音譛峨・繧ｯ繧ｻ繧呈─縺倥★縺ｫ螳碁｣溘〒縺阪∪縺吶・,
    tip: "蜊ｵ繧貞濠辭溘〒荳蠎ｦ蜿悶ｊ蜃ｺ縺励∬ｱ・距繧堤ｒ繧√※縺九ｉ謌ｻ縺吶％縺ｨ縺ｧ豌ｴ縺｣縺ｽ縺上↑繧峨★鄒弱＠縺丈ｻ穂ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "雎・距", amount: 0.3, unit: "陲・, aisle: "驥手除" },
      { name: "繧ｫ繝九き繝・, amount: 1.5, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蜊ｵ", amount: 0.5, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "雎・距縺ｯ譬ｹ蜈・ｒ關ｽ縺ｨ縺励※髟ｷ縺輔ｒ蜊雁・縺ｫ蛻・ｊ縲√き繝九き繝槭・蜑ｲ縺上・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ繧堤・縺励∵ｺｶ縺榊嵯繧貞・繧後※蠑ｷ轣ｫ縺ｧ繧ｵ繝・→轤偵ａ縺ｦ蜊顔・縺ｧ蜿悶ｊ蜃ｺ縺吶・,
      "雎・距縺ｨ繧ｫ繝九き繝槭ｒ蠑ｷ轣ｫ縺ｧ30遘堤ｒ繧√∝｡ｩ繧ｳ繧ｷ繝ｧ繧ｦ繝ｻ鮓上ぎ繝ｩ蟆代・〒蜻ｳ莉倥￠縺励∝嵯繧呈綾縺怜粋繧上○繧九・
    ]
  },
  {
    id: "side_57",
    title: "繝悶Ο繝・さ繝ｪ繝ｼ縺ｮ縺翫°縺九・繝ｨ蜥後∴",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 40,
    flavorType: "mayo",
    tags: ["繝悶Ο繝・さ繝ｪ繝ｼ", "繝槭Κ繝阪・繧ｺ蜻ｳ", "縺雁ｼ∝ｽ・, "雜・凾遏ｭ"],
    containsDislikes: [],
    description: "繝ｬ繝ｳ繝√Φ繝悶Ο繝・さ繝ｪ繝ｼ縺ｫ縺九▽縺顔ｯ縺ｨ繝槭Κ驢､豐ｹ繧貞柱縺医ｋ縺縺代ゅ°縺､縺顔ｯ縺梧ｰｴ蛻・ｒ蜷ｸ縺｣縺ｦ譌ｨ蜻ｳ繧偵ぐ繝･繝・→髢峨§霎ｼ繧√∪縺吶・,
    kidsTip: "繝槭Κ繝阪・繧ｺ縺ｨ縺縺励・譌ｨ蜻ｳ縺ｯ縺雁ｭ先ｧ倥↓螟ｧ螂ｽ隧包ｼ√ヶ繝ｭ繝・さ繝ｪ繝ｼ縺ｮ謌ｿ縺ｫ縺翫°縺九′邨｡繧薙〒鬟溘∋繧・☆縺・〒縺吶・,
    tip: "縺雁ｼ∝ｽ薙↓蜈･繧後※繧よｰｴ豌励′蜃ｺ縺ｪ縺・━遘縺翫°縺壹ゅヶ繝ｭ繝・さ繝ｪ繝ｼ縺ｯ蜀ｷ蜃阪〒繧らｾ主袖縺励￥菴懊ｌ縺ｾ縺吶・,
    ingredients: [
      { name: "繝悶Ο繝・さ繝ｪ繝ｼ", amount: 50, unit: "g", aisle: "驥手除" },
      { name: "縺九▽縺顔ｯ", amount: 1, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "繝槭Κ繝阪・繧ｺ", amount: 8, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝悶Ο繝・さ繝ｪ繝ｼ縺ｯ蟆乗袷縺ｫ蛻・￠縲∬千・螳ｹ蝎ｨ縺ｫ蜈･繧後※繝ｬ繝ｳ繧ｸ・・00W・峨〒1蛻・濠蜉辭ｱ縺吶ｋ縲・,
      "繝壹・繝代・縺ｧ豌ｴ豌励ｒ縺励▲縺九ｊ諡ｭ縺榊叙繧九・,
      "繝懊え繝ｫ縺ｫ縺九▽縺顔ｯ縲√・繝ｨ繝阪・繧ｺ縲・・豐ｹ蟆上＆縺・/2繧貞・繧後※豺ｷ縺懊√ヶ繝ｭ繝・さ繝ｪ繝ｼ繧貞刈縺医※蜥後∴繧九・
    ]
  },
  {
    id: "side_58",
    title: "繧ゅｄ縺励→縺阪ｅ縺・ｊ縺ｮ繝斐Μ霎帑ｸｭ闖ｯ繝翫Β繝ｫ",
    category: "side",
    cuisine: "chinese",
    season: "summer",
    time: "6蛻・,
    approxCostPerPerson: 25,
    flavorType: "spicy",
    tags: ["繧ゅｄ縺・, "縺阪ｅ縺・ｊ", "霎帙＞蜻ｳ莉倥￠", "縺翫▽縺ｾ縺ｿ"],
    containsDislikes: [],
    description: "繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ縺ｮ蜀ｷ縺溘＞繧ゅｄ縺励→縺阪ｅ縺・ｊ繧定ｱ・攸驢､縺ｨ縺斐∪豐ｹ縺ｧ蜥後∴縺溘∵囁縺・律縺ｫ縺ｴ縺｣縺溘ｊ縺ｮ繝斐Μ霎帛憶闖懊・,
    kidsTip: "蟄蝉ｾ帛髄縺代↓縺ｯ雎・攸驢､繧呈栢縺・※縺斐∪豐ｹ縺ｨ驢､豐ｹ縺縺代〒菴懊ｌ縺ｰ縲√＆縺｣縺ｱ繧贋ｸｭ闖ｯ繧ｵ繝ｩ繝縺ｨ縺励※螟ｧ蝟懊・・・,
    tip: "繧ゅｄ縺励→縺阪ｅ縺・ｊ縺ｮ豌ｴ蛻・ｒ縺励▲縺九ｊ邨槭ｋ縺ｮ縺後∝袖縺後⊂繧・￠縺壹♀蠎励・繧医≧縺ｪ蜻ｳ縺ｫ縺ｪ繧区怙螟ｧ縺ｮ繝昴う繝ｳ繝医・,
    ingredients: [
      { name: "繧ゅｄ縺・, amount: 50, unit: "g", aisle: "驥手除" },
      { name: "縺阪ｅ縺・ｊ", amount: 0.3, unit: "譛ｬ", aisle: "驥手除" },
      { name: "縺斐∪豐ｹ", amount: 3, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ゅｄ縺励・繝ｬ繝ｳ繧ｸ縺ｧ1蛻・濠蜉辭ｱ縺励※豬∵ｰｴ縺ｧ蜀ｷ縺ｾ縺玲ｰｴ豌励ｒ縺励▲縺九ｊ邨槭ｋ縲ゅ″繧・≧繧翫・邏ｰ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "繝懊え繝ｫ縺ｫ縺斐∪豐ｹ縲・・豐ｹ蟆上＆縺・縲・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏蟆代・√♀螂ｽ縺ｿ縺ｧ雎・攸驢､蠕ｮ驥上ｒ豺ｷ縺懊ｋ縲・,
      "繧ゅｄ縺励→縺阪ｅ縺・ｊ繧貞刈縺医※蜥後∴縲∫區縺斐∪繧呈険繧九・
    ]
  },
  {
    id: "side_59",
    title: "繝ｬ繝ｳ繧ｳ繝ｳ縺ｨ莠ｺ蜿ゅ・繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ縺阪ｓ縺ｴ繧・,
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "10蛻・,
    approxCostPerPerson: 40,
    tags: ["繝ｬ繝ｳ繧ｳ繝ｳ", "遘九・譌ｬ", "蜥碁｢ｨ蝓ｺ譛ｬ", "鬟溽黄郢顔ｶｭ"],
    containsDislikes: [],
    description: "繝ｬ繝ｳ繧ｳ繝ｳ縺ｮ豁ｯ縺悶ｏ繧翫′蠢・慍繧医＞逕倩ｾ帙″繧薙・繧峨ょ剱繧蝗樊焚縺悟｢励∴縺ｦ貅雜ｳ諢溘い繝・・・・｣溽黄郢顔ｶｭ縺溘▲縺ｷ繧翫・,
    kidsTip: "阮・ａ縺ｮ縺・■繧・≧蛻・ｊ縺ｫ縺励※逕倩ｾ帙￥辣ｧ繧翫ｈ縺冗ｒ繧√ｋ縺薙→縺ｧ縲∝ｭ蝉ｾ帙◆縺｡繧ゅせ繝翫ャ繧ｯ諢溯ｦ壹〒繧医￥蝎帙ｓ縺ｧ鬟溘∋縺ｾ縺吶・,
    tip: "繝ｬ繝ｳ繧ｳ繝ｳ繧貞・縺｣縺溷ｾ後し繝・→驟｢豌ｴ縺ｫ縺輔ｉ縺吶→縲∝､芽牡繧帝亟縺・〒逋ｽ縺冗ｶｺ鮗励↑莉穂ｸ翫′繧翫↓縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "繝ｬ繝ｳ繧ｳ繝ｳ", amount: 50, unit: "g", aisle: "驥手除" },
      { name: "莠ｺ蜿・, amount: 20, unit: "g", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 6, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 6, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝ｬ繝ｳ繧ｳ繝ｳ縺ｯ蜴壹＆2mm縺ｮ縺・■繧・≧蛻・ｊ縲∽ｺｺ蜿ゅ・邏ｰ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ縺斐∪豐ｹ繧堤・縺励√Ξ繝ｳ繧ｳ繝ｳ縺ｨ莠ｺ蜿ゅｒ騾上″騾壹ｋ縺ｾ縺ｧ荳ｭ蠑ｷ轣ｫ縺ｧ轤偵ａ繧九・,
      "驢､豐ｹ縲√∩繧翫ｓ縲∫らｳ門推蟆上＆縺・繧貞刈縺医∵ｱ∵ｰ励′縺ｪ縺上↑繧九∪縺ｧ謇区掠縺冗ｒ繧∫ｵ｡繧√ｋ縲・
    ]
  },
  {
    id: "side_60",
    title: "螟ｧ譬ｹ縺ｨ豐ｹ謠壹￡縺ｮ逕ｰ闊朱｢ｨ縺ｻ縺｣縺薙ｊ辣ｮ迚ｩ",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "15蛻・,
    approxCostPerPerson: 30,
    tags: ["螟ｧ譬ｹ", "豐ｹ謠壹￡", "蜀ｬ縺ｮ譌ｬ", "縺ｻ縺｣縺薙ｊ蜥碁｣・],
    containsDislikes: [],
    description: "縺翫□縺励・譌ｨ蜻ｳ縺後§繧・ｏ縲懊▲縺ｨ譟薙∩霎ｼ繧薙□螟ｧ譬ｹ縺ｨ豐ｹ謠壹￡縺ｮ蜆ｪ縺励＞辣ｮ迚ｩ縲ょ､暮｣ｯ縺ｮ蜑ｯ闖懊↓縺ｻ縺｣縺ｨ關ｽ縺｡逹縺丞袖繧上＞縲・,
    kidsTip: "螟ｧ譬ｹ繧剃ｹｱ蛻・ｊ縺ｫ縺励※縺倥▲縺上ｊ譟斐ｉ縺九￥辣ｮ繧九％縺ｨ縺ｧ縲∫曝蜿｣縺ｮ蜃ｺ豎√ｒ蜷ｸ縺｣縺ｦ蟄蝉ｾ帙ｂ蝟懊ｓ縺ｧ鬟溘∋縺ｾ縺吶・,
    tip: "螟ｧ譬ｹ繧偵Ξ繝ｳ繧ｸ縺ｧ2蛻・ｸ句刈辭ｱ縺励※縺九ｉ辣ｮ繧九→縲√ｏ縺壹°8蛻・〒蜻ｳ縺瑚官縺ｾ縺ｧ譟薙∩霎ｼ縺ｿ縺ｾ縺吶・,
    ingredients: [
      { name: "螟ｧ譬ｹ", amount: 70, unit: "g", aisle: "驥手除" },
      { name: "豐ｹ謠壹￡", amount: 0.3, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧√ｓ縺､繧・, amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縺ｯ荳蜿｣螟ｧ縺ｮ荵ｱ蛻・ｊ縺ｫ縺励Ξ繝ｳ繧ｸ縺ｧ2蛻・刈辭ｱ縲よｲｹ謠壹￡縺ｯ遏ｭ蜀雁・繧翫↓縺吶ｋ縲・,
      "蟆城豪縺ｫ豌ｴ120ml縲√ａ繧薙▽繧・∝､ｧ譬ｹ縲∵ｲｹ謠壹￡繧貞・繧後※轣ｫ縺ｫ縺九￠繧九・,
      "關ｽ縺ｨ縺苓搭繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ邏・縲・0蛻・∫・豎√′蟆代＠貂帙ｋ縺ｾ縺ｧ繧ｳ繝医さ繝育・繧九・
    ]
  },
  {
    id: "side_61",
    title: "逋ｽ闖懊→繝・リ縺ｮ縺・∪蝪ｩ譏・ｸ・Ξ繝ｳ繧ｸ闥ｸ縺・,
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "6蛻・,
    approxCostPerPerson: 35,
    tags: ["逋ｽ闖・, "繝・リ郛ｶ", "繝ｬ繝ｳ繧ｸ隱ｿ逅・, "蛹・ｸ∽ｸ崎ｦ・, "鬲・],
    containsDislikes: ["鬲・],
    description: "逋ｽ闖懊→繝・リ郛ｶ縲∝｡ｩ譏・ｸ・ｒ閠千・繝懊え繝ｫ縺ｫ蜈･繧後※繝√Φ縺吶ｋ縺縺托ｼ∫區闖懊・豌ｴ蛻・→繝・リ縺ｮ閼ゅ〒讌ｵ荳翫・譌ｨ蜻ｳ闥ｸ縺励↓縲・,
    kidsTip: "繝・リ縺ｨ蝪ｩ譏・ｸ・・繝繝悶Ν縺ｮ蜃ｺ豎√〒逋ｽ闖懊′繝医Ο繝医Ο縺ｫ縺ｪ繧翫・㍽闖懊′闍ｦ謇九↑蟄舌ｂ谿九＆縺壹・繝ｭ繝ｪ縲・,
    tip: "貂ｩ縺九＞縺ｾ縺ｾ縺ｧ繧らｾ主袖縺励＞縺ｧ縺吶′縲∝・阡ｵ蠎ｫ縺ｧ蜀ｷ繧・☆縺ｨ蜻ｳ縺碁ｦｴ譟薙ｓ縺ｧ邂ｸ莨代ａ縺ｫ譛鬮倥〒縺吶・,
    ingredients: [
      { name: "逋ｽ闖・, amount: 80, unit: "g", aisle: "驥手除" },
      { name: "繝・リ郛ｶ", amount: 0.25, unit: "郛ｶ", aisle: "閧峨・鬲・ },
      { name: "蝪ｩ譏・ｸ・, amount: 4, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "逋ｽ闖懊・縺悶￥蛻・ｊ縺ｫ縺励※閠千・螳ｹ蝎ｨ縺ｫ蜈･繧後ｋ縲・,
      "繝・リ郛ｶ・域ｲｹ縺斐→・峨→蝪ｩ譏・ｸ・ｒ荵励○縲√・繧薙ｏ繧翫Λ繝・・繧偵＠縺ｦ繝ｬ繝ｳ繧ｸ・・00W・峨〒3蛻・刈辭ｱ縺吶ｋ縲・,
      "蜈ｨ菴薙ｒ蠎輔°繧峨＠縺｣縺九ｊ豺ｷ縺懷粋繧上○縲√＃縺ｾ豐ｹ謨ｰ貊ｴ繧貞屓縺励°縺代ｋ縲・
    ]
  },
  {
    id: "side_62",
    title: "縺斐⊂縺・→莠ｺ蜿ゅ・螳夂分繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ縺阪ｓ縺ｴ繧・,
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "12蛻・,
    approxCostPerPerson: 35,
    tags: ["縺斐⊂縺・, "莠ｺ蜿・, "鬟溽黄郢顔ｶｭ", "蜥碁｢ｨ蝓ｺ譛ｬ"],
    containsDislikes: [],
    description: "雎翫°縺ｪ蝨溘・鬥吶ｊ縺ｨ繧ｷ繝｣繧ｭ繝・→縺励◆豁ｯ縺悶ｏ繧翫ら曝霎帙＞繧ｿ繝ｬ縺ｨ縺斐∪豐ｹ縺ｮ鬚ｨ蜻ｳ縺碁ｦ吶ｋ蜥碁｣溘・邇矩％縺阪ｓ縺ｴ繧峨・,
    kidsTip: "縺輔＆縺後″繧定埋繧√↓縺励√∩繧翫ｓ縺ｧ辣ｧ繧翫ｈ縺冗曝霎帙￥轤偵ａ繧九→蟄蝉ｾ帙◆縺｡繧ゅｈ縺丞剱繧薙〒鄒主袖縺励￥鬟溘∋縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "縺斐⊂縺・・逧ｮ繧偵ち繝ｯ繧ｷ繧・桁荳√・閭後〒霆ｽ縺上％縺昴￡關ｽ縺ｨ縺咏ｨ句ｺｦ縺ｫ縺吶ｋ縺ｨ縲・ｦ吶ｊ縺ｨ譌ｨ蜻ｳ縺悟､ｱ繧上ｌ縺ｾ縺帙ｓ縲・,
    ingredients: [
      { name: "縺斐⊂縺・, amount: 40, unit: "g", aisle: "驥手除" },
      { name: "莠ｺ蜿・, amount: 20, unit: "g", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺斐⊂縺・・縺輔＆縺後″縺ｫ縺励※豌ｴ縺ｫ繧ｵ繝・→縺輔ｉ縺励∽ｺｺ蜿ゅ・蜊・・繧翫↓縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ縺斐∪豐ｹ繧堤・縺励∵ｰｴ豌励ｒ蛻・▲縺溘＃縺ｼ縺・→莠ｺ蜿ゅｒ縺励ｓ縺ｪ繧翫☆繧九∪縺ｧ荳ｭ轣ｫ縺ｧ轤偵ａ繧九・,
      "驢､豐ｹ縲√∩繧翫ｓ縲∫らｳ門推蟆上＆縺・繧貞刈縺医∵ｱ∵ｰ励′縺ｪ縺上↑繧九∪縺ｧ轤偵ｊ辣ｮ縺ｫ縺励※逋ｽ縺斐∪繧呈険繧九・
    ]
  },
  {
    id: "side_63",
    title: "繧ｭ繝｣繝吶ヤ縺ｨ繧ｦ繧､繝ｳ繝翫・縺ｮ豢矩｢ｨ繧ｳ繝ｳ繧ｽ繝｡闥ｸ縺・,
    category: "side",
    cuisine: "western",
    season: "all",
    time: "8蛻・,
    approxCostPerPerson: 45,
    tags: ["繧ｭ繝｣繝吶ヤ", "繧ｦ繧､繝ｳ繝翫・", "豢矩｢ｨ", "蟄蝉ｾ帛､ｧ莠ｺ豌・],
    containsDislikes: [],
    description: "繧ｦ繧､繝ｳ繝翫・縺ｮ譌ｨ蜻ｳ縺檎曝縺・く繝｣繝吶ヤ縺ｫ譟薙∩貂｡繧九さ繝ｳ繧ｽ繝｡闥ｸ縺励ゅヵ繝ｩ繧､繝代Φ縺ｫ驥阪・縺ｦ闥ｸ縺吶□縺代〒螳梧・縲・,
    kidsTip: "繧ｦ繧､繝ｳ繝翫・縺悟・縺｣縺ｦ縺・ｋ縺縺代〒蟄蝉ｾ帙◆縺｡縺ｮ鬟溘＞縺､縺阪′谿ｵ驕輔＞・√く繝｣繝吶ヤ繧よ沐繧峨°縺上※鬟溘∋繧・☆縺・〒縺吶・,
    tip: "蟆代＠縺縺代ヰ繧ｿ繝ｼ繧貞刈縺医ｋ縺ｨ縲√さ繧ｯ縺悟｢励＠縺ｦ縺ｾ繧九〒繝昴ヨ繝輔・繧医≧縺ｪ豺ｱ縺ｿ縺ｮ縺ゅｋ蜻ｳ繧上＞縺ｫ縲・,
    ingredients: [
      { name: "繧ｭ繝｣繝吶ヤ", amount: 70, unit: "g", aisle: "驥手除" },
      { name: "繧ｦ繧､繝ｳ繝翫・", amount: 1, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ｳ繝ｳ繧ｽ繝｡", amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ｭ繝｣繝吶ヤ縺ｯ縺悶￥蛻・ｊ縲√え繧､繝ｳ繝翫・縺ｯ譁懊ａ阮・・繧翫↓縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ繧ｭ繝｣繝吶ヤ縲√え繧､繝ｳ繝翫・縲∵ｰｴ螟ｧ縺輔§2縲√さ繝ｳ繧ｽ繝｡鬘・ｲ偵ｒ蜈･繧後※繝輔ち繧偵☆繧九・,
      "荳ｭ轣ｫ縺ｧ邏・縲・蛻・頂縺礼┥縺阪↓縺励∝・菴薙ｒ縺輔▲縺ｨ豺ｷ縺懊※鮟偵％縺励ｇ縺・ｒ謖ｯ繧九・
    ]
  },
  {
    id: "side_64",
    title: "雎・・縺ｨ隗貞・繧翫ヨ繝槭ヨ縺ｮ蜥碁｢ｨ縺斐∪繝峨Ξ繧ｵ繝ｩ繝",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5蛻・,
    approxCostPerPerson: 35,
    tags: ["繝医・繝・, "譛ｨ邯ｿ雎・・", "繝倥Ν繧ｷ繝ｼ", "螟城㍽闖・],
    containsDislikes: ["繝医・繝・],
    description: "蜀ｷ縺溘＞雎・・縺ｨ繧ｸ繝･繝ｼ繧ｷ繝ｼ縺ｪ隗貞・繧翫ヨ繝槭ヨ繧貞粋繧上○縺溷柱鬚ｨ蜀ｷ螂ｴ繧ｵ繝ｩ繝縲ゅ☆繧翫＃縺ｾ驢､豐ｹ繝繝ｬ縺瑚憶縺丞粋縺・∪縺吶・,
    kidsTip: "逕伜哨縺ｮ縺吶ｊ縺斐∪繝峨Ξ繝・す繝ｳ繧ｰ繧偵°縺代ｋ縺ｨ繝医・繝医・驟ｸ蜻ｳ縺悟柱繧峨℃縲√・繧薙ｄ繧顔ｾ主袖縺励￥鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "雎・・繧偵＠縺｣縺九ｊ蜀ｷ繧・＠縺ｦ縺翫″縲・｣溘∋繧狗峩蜑阪↓繧ｿ繝ｬ繧偵°縺代ｋ縺ｨ豌ｴ縺｣縺ｽ縺上↑繧翫∪縺帙ｓ縲・,
    ingredients: [
      { name: "譛ｨ邯ｿ雎・・", amount: 60, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繝医・繝・, amount: 0.5, unit: "蛟・, aisle: "驥手除" },
      { name: "縺吶ｊ縺斐∪", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "譛ｨ邯ｿ雎・・縺ｨ繝医・繝医・1.5cm隗偵↓蛻・ｋ縲・,
      "蝎ｨ縺ｫ雎・・縺ｨ繝医・繝医ｒ莠､莠偵↓逶帙ｊ莉倥￠繧九・,
      "縺吶ｊ縺斐∪縲・・豐ｹ蟆上＆縺・縲√＃縺ｾ豐ｹ蟆上＆縺・/2縲∫らｳ門ｰ代・ｒ豺ｷ縺懷粋繧上○縺溘ち繝ｬ繧偵°縺代ｋ縲・
    ]
  },
  {
    id: "side_65",
    title: "譏･髮ｨ縺ｨ莠ｺ蜿ゅ→縺阪ｅ縺・ｊ縺ｮ荳ｭ闖ｯ鬚ｨ譏･髮ｨ繧ｵ繝ｩ繝",
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 35,
    tags: ["譏･髮ｨ", "荳ｭ闖ｯ螳夂分", "蟄蝉ｾ帛､ｧ莠ｺ豌・, "菴懊ｊ鄂ｮ縺・],
    containsDislikes: [],
    description: "繝・Ν繝・Ν鬟滓─縺悟ｭ蝉ｾ帙◆縺｡縺ｫ螟ｧ莠ｺ豌暦ｼ∫曝驟ｸ縺｣縺ｱ縺・ｸｭ闖ｯ繝繝ｬ縺梧沒縺ｿ霎ｼ繧薙□邨ｦ鬟滄｢ｨ縺ｮ譏･髮ｨ繧ｵ繝ｩ繝縲・,
    kidsTip: "逕倬・縺｣縺ｱ縺上※縺｡繧・ｋ縺｡繧・ｋ鬟溘∋繧峨ｌ繧区丼髮ｨ繧ｵ繝ｩ繝縺ｯ縲∝ｭ蝉ｾ帙◆縺｡縺御ｺ峨≧繧医≧縺ｫ鬟溘∋繧倶ｺｺ豌湧o.1蜑ｯ闖懶ｼ・,
    tip: "譏･髮ｨ縺ｯ闌ｹ縺ｧ縺溷ｾ後∫・縺・≧縺｡縺ｫ隱ｿ蜻ｳ譁呻ｼ磯・繝ｻ遐らｳ悶・驢､豐ｹ・峨ｒ蜷ｸ繧上○繧九→蜻ｳ縺悟･･縺ｾ縺ｧ譟薙∩霎ｼ縺ｿ縺ｾ縺吶・,
    ingredients: [
      { name: "譏･髮ｨ・井ｹｾ辯･・・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺阪ｅ縺・ｊ", amount: 0.3, unit: "譛ｬ", aisle: "驥手除" },
      { name: "莠ｺ蜿・, amount: 15, unit: "g", aisle: "驥手除" },
      { name: "繝上Β", amount: 1, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "譏･髮ｨ縺ｨ蜊・・繧贋ｺｺ蜿ゅｒ辭ｱ貉ｯ縺ｧ3蛻・源縺ｧ縺ｦ貉ｯ蛻・ｊ縺励∫ｲ礼・繧貞叙繧九ゅ″繧・≧繧翫→繝上Β縺ｯ蜊・・繧翫↓縺吶ｋ縲・,
      "繝懊え繝ｫ縺ｫ驟｢繝ｻ驢､豐ｹ蜷・ｰ上＆縺・縲∫らｳ門ｰ上＆縺・.5縲√＃縺ｾ豐ｹ蟆上＆縺・/2繧呈ｷｷ縺懷粋繧上○繧九・,
      "譏･髮ｨ縲√″繧・≧繧翫∽ｺｺ蜿ゅ√ワ繝繧貞刈縺医※縺励▲縺九ｊ蜥後∴縲∫區縺斐∪繧呈険繧九・
    ]
  },
  {
    id: "side_66",
    title: "譁ｰ縺倥ｃ縺後＞繧ゅ・蝪ｩ譏・ｸ・ヰ繧ｿ繝ｼ闥ｸ縺・,
    category: "side",
    cuisine: "western",
    season: "spring",
    time: "8蛻・,
    approxCostPerPerson: 35,
    tags: ["縺倥ｃ縺後＞繧・, "譏･縺ｮ譌ｬ", "蝪ｩ譏・ｸ・, "繝ｬ繝ｳ繧ｸ隱ｿ逅・],
    containsDislikes: [],
    description: "縺ｻ縺上⊇縺上・縺倥ｃ縺後＞繧ゅ↓繝舌ち繝ｼ縺ｮ鬥吶ｊ縺ｨ蝪ｩ譏・ｸ・・譌ｨ蜻ｳ縺檎ｵ｡縺ｿ蜷医≧縲∫ｰ｡蜊倥↑縺ｮ縺ｫ雍・ｲ｢縺ｪ蜻ｳ繧上＞縺ｮ蜑ｯ闖懊・,
    kidsTip: "縺倥ｃ縺後ヰ繧ｿ繝ｼ縺ｮ鬥吶ｊ縺ｨ逕倥∩縺ｧ縲∝ｭ蝉ｾ帙◆縺｡縺後♀繧・▽諢溯ｦ壹〒蝟懊ｓ縺ｧ繝｢繝ｪ繝｢繝ｪ鬟溘∋縺ｾ縺吶・,
    tip: "譁ｰ縺倥ｃ縺後・蟄｣遽縺ｪ繧臥坩縺斐→邯ｺ鮗励↓豢励▲縺ｦ隱ｿ逅・K・∫坩縺ｮ鬥吶・縺励＆縺後い繧ｯ繧ｻ繝ｳ繝医↓縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "縺倥ｃ縺後＞繧・, amount: 1, unit: "蛟・, aisle: "驥手除" },
      { name: "繝舌ち繝ｼ", amount: 5, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蝪ｩ譏・ｸ・, amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺倥ｃ縺後＞繧ゅ・逧ｮ繧偵・縺・※荳蜿｣螟ｧ縺ｫ蛻・ｊ縲∵ｰｴ縺ｫ繧ｵ繝・→縺輔ｉ縺吶・,
      "閠千・螳ｹ蝎ｨ縺ｫ蜈･繧後※繝ｩ繝・・繧偵＠縲√Ξ繝ｳ繧ｸ・・00W・峨〒邏・蛻・ｫｹ荳ｲ縺後せ繝・→騾壹ｋ縺ｾ縺ｧ蜉辭ｱ縺吶ｋ縲・,
      "辭ｱ縺・≧縺｡縺ｫ繝舌ち繝ｼ縺ｨ蝪ｩ譏・ｸ・ｒ蜉縺医√§繧・′縺・ｂ繧定ｻｽ縺丞ｴｩ縺励↑縺後ｉ邨｡繧√ｋ縲・
    ]
  },
  {
    id: "side_67",
    title: "繝翫せ縺ｮ繧ｫ繝ｪ繝・→逕倬・辣ｧ繧顔┥縺・,
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "8蛻・,
    approxCostPerPerson: 35,
    tags: ["縺ｪ縺・, "螟城㍽闖・, "逕倬・辣ｧ繧顔┥縺・, "繝輔Λ繧､繝代Φ1縺､"],
    containsDislikes: ["縺ｪ縺・],
    description: "迚・礼ｲ峨ｒ縺ｾ縺ｶ縺励※繧ｫ繝ｪ繝・→辟ｼ縺・◆繝翫せ縺ｫ逕倬・驢､豐ｹ繧ｿ繝ｬ繧偵ず繝･繝ｯ繝・→邨｡繧√◆縲√≧縺ｪ縺手調辟ｼ縺埼｢ｨ縺ｮ讌ｵ荳翫リ繧ｹ縺翫°縺壹・,
    kidsTip: "螟門・繧ｫ繝ｪ繝・ｸｭ縺ｨ繧阪→繧阪・鬟滓─縺ｨ逕倬・縺｣縺ｱ縺・袖莉倥￠縺ｧ縲√リ繧ｹ縺瑚協謇九↑縺雁ｭ先ｧ倥↓繧ょ､ｧ繝偵ャ繝茨ｼ・,
    tip: "繝翫せ縺ｫ迚・礼ｲ峨ｒ縺ｾ縺ｶ縺吶％縺ｨ縺ｧ豐ｹ縺ｮ蜷ｸ縺・☆縺弱ｒ髦ｲ縺弱∝ｰ代↑縺・ｲｹ縺ｧ繧ゅき繝ｪ繝・→謠壹′繧翫∪縺吶・,
    ingredients: [
      { name: "縺ｪ縺・, amount: 1, unit: "譛ｬ", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 6, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 6, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "驟｢", amount: 4, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝翫せ縺ｯ1cm蜴壹＆縺ｮ霈ｪ蛻・ｊ縺ｫ縺励∫援譬礼ｲ峨ｒ阮・￥縺ｾ縺ｶ縺吶・,
      "繝輔Λ繧､繝代Φ縺ｫ豐ｹ螟ｧ縺輔§1繧堤・縺励√リ繧ｹ繧剃ｸｦ縺ｹ縺ｦ荳｡髱｢繧ｫ繝ｪ繝・→縺阪▽縺ｭ濶ｲ縺ｫ辟ｼ縺上・,
      "驢､豐ｹ縲√∩繧翫ｓ縲・・縲∫らｳ門推蟆上＆縺・繧貞粋繧上○縺溘ち繝ｬ繧貞屓縺怜・繧後∫ｴ譌ｩ縺冗・繧翫ｈ縺冗ｵ｡繧√ｋ縲・
    ]
  },
  {
    id: "side_68",
    title: "繝斐・繝槭Φ縺ｨ蝪ｩ譏・ｸ・・辟｡髯舌Ξ繝ｳ繧ｸ蜥後∴",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "4蛻・,
    approxCostPerPerson: 30,
    tags: ["繝斐・繝槭Φ", "螟城㍽闖・, "雜・凾遏ｭ", "繝ｬ繝ｳ繧ｸ隱ｿ逅・],
    containsDislikes: ["繝斐・繝槭Φ"],
    description: "邏ｰ蛻・ｊ繝斐・繝槭Φ繧偵Ξ繝ｳ繧ｸ縺ｧ1蛻・メ繝ｳ縺励※蝪ｩ譏・ｸ・→縺斐∪豐ｹ縺ｧ蜥後∴繧九□縺代り協蜻ｳ縺悟ｮ悟・縺ｫ謚懊￠縺ｦ鬩壹￥縺ｻ縺ｩ鄒主袖縺励＞・・,
    kidsTip: "蜉辭ｱ縺吶ｋ縺薙→縺ｧ繝斐・繝槭Φ迚ｹ譛峨・髱定・縺輔′豸医∴縲∝｡ｩ譏・ｸ・・譌ｨ蜻ｳ縺ｧ蟄蝉ｾ帙◆縺｡繧ゅヱ繧ｯ繝代け鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "轣ｫ繧剃ｽｿ繧上★縺ｫ4蛻・〒縺ｧ縺阪ｋ縺ｮ縺ｧ縲∝､暮｣ｯ菴懊ｊ縺ｮ縺ゅ→1蜩√↓縺薙ｌ莉･荳翫↑縺・せ繝斐・繝牙憶闖懊〒縺吶・,
    ingredients: [
      { name: "繝斐・繝槭Φ", amount: 1.5, unit: "蛟・, aisle: "驥手除" },
      { name: "蝪ｩ譏・ｸ・, amount: 4, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺斐∪豐ｹ", amount: 3, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝斐・繝槭Φ縺ｯ遞ｮ繧貞叙縺｣縺ｦ邵ｦ邏ｰ蛻・ｊ縺ｫ縺励∬千・繝懊え繝ｫ縺ｫ蜈･繧後ｋ縲・,
      "縺ｵ繧薙ｏ繧翫Λ繝・・繧偵＠縺ｦ繝ｬ繝ｳ繧ｸ・・00W・峨〒1蛻・刈辭ｱ縺吶ｋ縲・,
      "蝪ｩ譏・ｸ・√＃縺ｾ豐ｹ縲∫區縺斐∪繧貞刈縺医※蜈ｨ菴薙ｒ繧医￥蜥後∴繧九・
    ]
  },
  {
    id: "side_69",
    title: "縺｡縺上ｏ縺ｨ髟ｷ繝阪ぐ縺ｮ鬥吶・縺礼｣ｯ驛ｨ轤偵ａ",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 30,
    tags: ["縺｡縺上ｏ", "髟ｷ繝阪ぐ", "髱偵・繧・, "繝輔Λ繧､繝代Φ1縺､"],
    containsDislikes: ["髟ｷ繝阪ぐ"],
    description: "縺｡縺上ｏ縺ｨ繝阪ぐ繧偵＃縺ｾ豐ｹ縺ｧ轤偵ａ縺ｦ髱偵・繧翫→驢､豐ｹ繧偵ず繝･繝ｯ繝・ｼ∫｣ｯ縺ｮ鬥吶ｊ縺後・繧上▲縺ｨ蠎・′繧狗ｯ邏・♀縺､縺ｾ縺ｿ蜑ｯ闖懊・,
    kidsTip: "髱偵・繧翫→縺｡縺上ｏ縺ｮ鬚ｨ蜻ｳ縺後・繝・ヨ繝√ャ繝励せ縺ｮ縺ｮ繧雁｡ｩ蜻ｳ縺ｮ繧医≧縺ｧ縲∝ｭ蝉ｾ帙◆縺｡繧ょ､ｧ蝟懊・・・,
    tip: "縺｡縺上ｏ縺ｫ縺励▲縺九ｊ辟ｼ縺崎牡縺後▽縺上∪縺ｧ轤偵ａ繧九％縺ｨ縺ｧ縲・ｦ吶・縺励＆縺後げ繝ｳ縺ｨ蠑輔″遶九■縺ｾ縺吶・,
    ingredients: [
      { name: "縺｡縺上ｏ", amount: 1.5, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "髟ｷ繝阪ぐ", amount: 0.3, unit: "譛ｬ", aisle: "驥手除" },
      { name: "髱偵・繧・, amount: 1, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺｡縺上ｏ縺ｯ荵ｱ蛻・ｊ縲・聞繝阪ぐ縺ｯ譁懊ａ阮・・繧翫↓縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ縺斐∪豐ｹ繧堤・縺励√■縺上ｏ縺ｨ髟ｷ繝阪ぐ繧貞ｼｷ轣ｫ縺ｧ辟ｼ縺崎牡縺後▽縺上∪縺ｧ轤偵ａ繧九・,
      "驢､豐ｹ蟆上＆縺・繧帝豪閧後°繧牙屓縺怜・繧後∫↓繧呈ｭ｢繧√※髱偵・繧翫ｒ蜈ｨ菴薙↓縺ｾ縺ｶ縺吶・
    ]
  },
  {
    id: "side_70",
    title: "繧ゅｄ縺励→縺ｵ繧薙ｏ繧雁嵯縺ｮ蜆ｪ縺励＞荳ｭ闖ｯ轤偵ａ",
    category: "side",
    cuisine: "chinese",
    season: "all",
    time: "6蛻・,
    approxCostPerPerson: 30,
    tags: ["繧ゅｄ縺・, "蜊ｵ譁咏炊", "雜・凾遏ｭ", "豼螳・],
    containsDislikes: [],
    description: "繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ繧ゅｄ縺励→縺ｵ繧薙ｏ繧雁嵯繧帝ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励〒蜆ｪ縺励＞蜻ｳ莉倥￠縺ｫ莉穂ｸ翫￡縺溘・｣ｽ縺阪・縺薙↑縺・ョ繧､繝ｪ繝ｼ蜑ｯ闖懊・,
    kidsTip: "蜊ｵ縺檎曝縺上※繝槭う繝ｫ繝峨↑縺ｮ縺ｧ縲・㍽闖懊′闍ｦ謇九↑蟄舌ｂ蜊ｵ縺ｨ荳邱偵↓繧ｹ繝励・繝ｳ縺ｧ縺吶￥縺｣縺ｦ螳碁｣溘＠縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "蜊ｵ繧貞濠辭溘↓縺励※縺九ｉ荳蠎ｦ逧ｿ縺ｫ蜿悶ｊ蜃ｺ縺励√ｂ繧・＠繧堤ｒ繧√※縺九ｉ謌ｻ縺吶→豌ｴ縺｣縺ｽ縺上↑繧翫∪縺帙ｓ縲・,
    ingredients: [
      { name: "繧ゅｄ縺・, amount: 70, unit: "g", aisle: "驥手除" },
      { name: "蜊ｵ", amount: 0.5, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏", amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蜊ｵ繧呈ｺｶ縺阪⊇縺舌＠縲∵ｲｹ繧堤・縺励◆繝輔Λ繧､繝代Φ縺ｧ蠑ｷ轣ｫ縺ｧ蜊顔・縺ｫ轤偵ａ縺ｦ荳蠎ｦ蜿悶ｊ蜃ｺ縺吶・,
      "蜷後§繝輔Λ繧､繝代Φ縺ｧ繧ゅｄ縺励ｒ蠑ｷ轣ｫ縺ｧ1蛻・し繝・→轤偵ａ繧九・,
      "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏縲∝｡ｩ縺薙＠繧・≧繧呈険繧翫∝嵯繧呈綾縺励※謇区掠縺丞粋繧上○繧九・
    ]
  },
  {
    id: "side_71",
    title: "繧ｭ繝｣繝吶ヤ縺ｨ螟ｧ闡峨・辷ｽ繧・°蝪ｩ繧ゅ∩豬・ｼｬ縺・,
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5蛻・,
    approxCostPerPerson: 25,
    tags: ["繧ｭ繝｣繝吶ヤ", "螟ｧ闡・, "邂ｸ莨代ａ", "蛹・ｸ∽ｸ崎ｦ・],
    containsDislikes: [],
    description: "繝昴Μ陲九〒謠峨・縺縺托ｼ√く繝｣繝吶ヤ縺ｮ逕倥∩縺ｨ螟ｧ闡峨・辷ｽ繧・°縺ｪ鬥吶ｊ縺ｧ縲∬р縺｣縺薙＞縺願ｉ譁咏炊縺ｮ譛鬮倥・邂ｸ莨代ａ縺ｫ縺ｪ繧翫∪縺吶・,
    kidsTip: "螟ｧ闡峨・鬥吶ｊ縺檎或繧・°縺ｧ縲∝｡ｩ蛻・而縺医ａ縺ｧ繧ゅく繝｣繝吶ヤ譛ｬ譚･縺ｮ逕倥∩縺ｧ蟄蝉ｾ帙ｂ繝代け繝代け鬟溘∋縺ｾ縺吶・,
    tip: "繧ｭ繝｣繝吶ヤ縺ｫ蝪ｩ繧呈初縺ｿ霎ｼ繧薙〒5蛻・ｽｮ縺阪√ぐ繝･繝・→邨槭ｋ縺縺代〒繧ｫ繧ｵ縺・/3縺ｫ貂帙▲縺ｦ縺溘￥縺輔ｓ鬟溘∋繧峨ｌ縺ｾ縺吶・,
    ingredients: [
      { name: "繧ｭ繝｣繝吶ヤ", amount: 70, unit: "g", aisle: "驥手除" },
      { name: "螟ｧ闡・, amount: 1, unit: "譫・, aisle: "驥手除" }
    ],
    instructions: [
      "繧ｭ繝｣繝吶ヤ縺ｯ荳蜿｣螟ｧ縺ｫ縺｡縺弱ｊ縲∝､ｧ闡峨・蜊・・繧翫↓縺励※繝昴Μ陲九↓蜈･繧後ｋ縲・,
      "蝪ｩ蟆上＆縺・/3縺ｨ譏・ｸ・幻・医∪縺溘・縺縺励・邏・牙ｰ代・ｒ蜉縺医※陲九・荳翫°繧峨ｈ縺乗初繧縲・,
      "5蛻・⊇縺ｩ鄂ｮ縺・※豌ｴ豌励ｒ霆ｽ縺冗ｵ槭▲縺ｦ蝎ｨ縺ｫ逶帙ｋ縲・
    ]
  },
  {
    id: "side_72",
    title: "莠ｺ蜿ゅ→螟ｧ譬ｹ縺ｮ縺輔▲縺ｱ繧顔ｴ・區縺ｪ縺ｾ縺・,
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "8蛻・,
    approxCostPerPerson: 25,
    flavorType: "sour",
    tags: ["莠ｺ蜿・, "螟ｧ譬ｹ", "驟ｸ縺｣縺ｱ縺・袖", "菴懊ｊ鄂ｮ縺・],
    containsDislikes: [],
    description: "縺頑ｭ｣譛医□縺代〒縺ｪ縺乗勸谿ｵ縺ｮ螟暮｣ｯ縺ｫ繧ゅ・縺｣縺溘ｊ・∫曝驟ｸ縺｣縺ｱ縺・♀驟｢縺ｮ蜉帙〒豸亥喧繧貞勧縺代∫ｮｸ莨代ａ縺ｫ繧よ怙驕ｩ縲・,
    kidsTip: "驟ｸ蜻ｳ繧偵♀遐らｳ悶〒縺ｾ繧阪ｄ縺九↓隱ｿ縺医ｋ縺ｨ縲∝ｭ蝉ｾ帙◆縺｡繧ゅす繝｣繧ｭ繧ｷ繝｣繧ｭ鬟滓─繧呈･ｽ縺励∩縺ｪ縺後ｉ鬟溘∋縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "縺励▲縺九ｊ蝪ｩ繧ゅ∩縺励※豌ｴ蛻・ｒ謚懊￥縺薙→縺ｧ縲∝・阡ｵ蠎ｫ縺ｧ4縲・譌･鄒主袖縺励￥譌･謖√■縺吶ｋ蟶ｸ蛯呵除縺ｫ縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "螟ｧ譬ｹ", amount: 50, unit: "g", aisle: "驥手除" },
      { name: "莠ｺ蜿・, amount: 20, unit: "g", aisle: "驥手除" },
      { name: "驟｢", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "遐らｳ・, amount: 6, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縺ｨ莠ｺ蜿ゅ・蜊・・繧翫↓縺励∝｡ｩ蟆代・ｒ謖ｯ縺｣縺ｦ5蛻・ｽｮ縺阪∵ｰｴ豌励ｒ繧ｮ繝･繝・→縺励▲縺九ｊ邨槭ｋ縲・,
      "繝懊え繝ｫ縺ｫ驟｢縲∫らｳ悶∝｡ｩ縺ｲ縺ｨ縺､縺ｾ縺ｿ繧偵ｈ縺乗ｷｷ縺懷粋繧上○縺ｦ逕倬・繧剃ｽ懊ｋ縲・,
      "螟ｧ譬ｹ縺ｨ莠ｺ蜿ゅｒ蜉縺医※蜥後∴縲∫區縺斐∪繧呈険繧九・
    ]
  },
  {
    id: "side_73",
    title: "蟆乗收闖懊→縺｡縺上ｏ縺ｮ鬥吶・縺苓Γ鮗ｻ蜥後∴",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "6蛻・,
    approxCostPerPerson: 35,
    tags: ["蟆乗收闖・, "縺｡縺上ｏ", "蜥碁｢ｨ蝓ｺ譛ｬ", "繝ｬ繝ｳ繧ｸ隱ｿ逅・],
    containsDislikes: [],
    description: "繝ｬ繝ｳ繧ｸ蜉辭ｱ縺励◆蟆乗收闖懊→縺｡縺上ｏ繧偵√◆縺｣縺ｷ繧翫・縺吶ｊ縺斐∪縺ｨ縺企・豐ｹ縺ｧ蜥後∴縺溷ｮ夂分縺ｮ蜥碁｢ｨ蜑ｯ闖懊・,
    kidsTip: "縺吶ｊ縺斐∪縺ｮ逕倥∩縺ｨ縺｡縺上ｏ縺ｮ譌ｨ蜻ｳ縺ｧ縲・搨闖懊′闍ｦ謇九↑縺雁ｭ先ｧ倥ｂ閾ｪ蛻・°繧蛾ｲ繧薙〒鬟溘∋縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "蟆乗收闖懊・豌ｴ豌励ｒ縺励▲縺九ｊ邨槭▲縺ｦ縺九ｉ蜥後∴繧九％縺ｨ縺ｧ縲∝袖縺瑚埋縺ｾ繧峨★縺ｫ縺斐∪縺ｮ鬥吶ｊ縺悟ｼ輔″遶九■縺ｾ縺吶・,
    ingredients: [
      { name: "蟆乗收闖・, amount: 50, unit: "g", aisle: "驥手除" },
      { name: "縺｡縺上ｏ", amount: 1, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "縺吶ｊ縺斐∪", amount: 4, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蟆乗收闖懊・3cm髟ｷ縺輔↓蛻・ｊ縲∬千・螳ｹ蝎ｨ縺ｫ蜈･繧後※繝ｬ繝ｳ繧ｸ縺ｧ1蛻・濠蜉辭ｱ縺励∵ｵ∵ｰｴ縺ｧ蜀ｷ縺ｾ縺励※豌ｴ豌励ｒ邨槭ｋ縲・,
      "縺｡縺上ｏ縺ｯ阮・＞霈ｪ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "繝懊え繝ｫ縺ｫ蟆乗收闖懊√■縺上ｏ縲√☆繧翫＃縺ｾ縲・・豐ｹ繝ｻ遐らｳ門推蟆上＆縺・繧貞刈縺医※繧医￥蜥後∴繧九・
    ]
  },
  {
    id: "side_74",
    title: "縺医・縺阪・閾ｪ螳ｶ陬ｽ繝ｬ繝ｳ繧ｸ縺ｪ繧∬減鬚ｨ",
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 25,
    tags: ["縺阪・縺・, "蟶ｸ蛯呵除", "繝ｬ繝ｳ繧ｸ隱ｿ逅・, "縺秘｣ｯ豕･譽・],
    containsDislikes: ["縺阪・縺・],
    description: "蟶りｲｩ縺ｮ逑ｶ隧ｰ繧√↑繧∬減繧定ｲｷ縺・ｈ繧翫★縺｣縺ｨ螳峨￥縺ｦ辟｡豺ｻ蜉・√Ξ繝ｳ繧ｸ縺ｧ2蛻・刈辭ｱ縺吶ｋ縺縺代〒鬩壹￥縺ｻ縺ｩ鄒主袖縺励￥螳梧・縲・,
    kidsTip: "逕倩ｾ帙＞縺ｨ繧阪∩縺ｮ縺ゅｋ蜻ｳ莉倥￠縺ｧ縲√＃鬟ｯ縺ｫ縺九￠縺溘ｊ雎・・縺ｫ荵励○縺溘ｊ縺吶ｋ縺ｨ蟄蝉ｾ帙◆縺｡繧ょ､｢荳ｭ縺ｧ鬟溘∋縺ｾ縺吶・,
    tip: "貂・ｽ斐↑螳ｹ蝎ｨ縺ｫ蜈･繧後※蜀ｷ阡ｵ菫晏ｭ倥☆繧後・1騾ｱ髢捺律謖√■縺励∵ｯ取悃縺ｮ縺秘｣ｯ縺ｮ縺贋ｾ帙↓繧ょ､ｧ豢ｻ霄搾ｼ・,
    ingredients: [
      { name: "縺医・縺・, amount: 50, unit: "g", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺医・縺阪・遏ｳ縺･縺阪ｒ蛻・ｊ關ｽ縺ｨ縺励・cm髟ｷ縺輔↓蛻・▲縺ｦ閠千・繝懊え繝ｫ縺ｫ蜈･繧後ｋ縲・,
      "驢､豐ｹ縲√∩繧翫ｓ縲∫らｳ門推蟆上＆縺・縲・・蟆上＆縺・/2繧貞刈縺医※霆ｽ縺乗ｷｷ縺懊ｋ縲・,
      "縺ｵ繧薙ｏ繧翫Λ繝・・繧偵＠縺ｦ繝ｬ繝ｳ繧ｸ・・00W・峨〒邏・蛻・刈辭ｱ縺励∫・縺・≧縺｡縺ｫ繧医￥豺ｷ縺懷粋繧上○縺ｦ縺ｨ繧阪∩繧貞・縺吶・
    ]
  },
  {
    id: "side_75",
    title: "繧ｪ繧ｯ繝ｩ縺ｨ縺｡縺上ｏ縺ｮ譴・・繝ｳ驟｢蜥後∴",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5蛻・,
    approxCostPerPerson: 35,
    flavorType: "sour",
    tags: ["繧ｪ繧ｯ繝ｩ", "縺｡縺上ｏ", "螟城㍽闖・, "驟ｸ縺｣縺ｱ縺・袖"],
    containsDislikes: [],
    description: "繝阪ヰ繝阪ヰ縺ｮ繧ｪ繧ｯ繝ｩ縺ｨ縺｡縺上ｏ繧呈｢・ｉ縺ｨ繝昴Φ驟｢縺ｧ蜥後∴縺溘＆縺｣縺ｱ繧雁憶闖懊ょ､上ヰ繝・〒鬟滓ｬｲ縺後↑縺・凾縺ｫ繧ゅ▽繧九ｊ縺ｨ蜈･繧翫∪縺吶・,
    kidsTip: "譏溷ｽ｢縺ｮ繧ｪ繧ｯ繝ｩ縺ｨ霈ｪ蛻・ｊ縺ｮ縺｡縺上ｏ縺悟庄諢帙ｉ縺励￥縲∬ｦ九◆逶ｮ縺九ｉ蝟懊ｓ縺ｧ鬟溘∋縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "繧ｪ繧ｯ繝ｩ縺ｯ蝪ｩ繧呈険縺｣縺ｦ譚ｿ縺壹ｊ縺励√Λ繝・・縺ｧ蛹・ｓ縺ｧ繝ｬ繝ｳ繧ｸ縺ｧ30遘貞刈辭ｱ縺吶ｌ縺ｰ縺頑ｹｯ繧呈ｲｸ縺九☆蠢・ｦ√↑縺暦ｼ・,
    ingredients: [
      { name: "繧ｪ繧ｯ繝ｩ", amount: 2, unit: "譛ｬ", aisle: "驥手除" },
      { name: "縺｡縺上ｏ", amount: 1, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繝昴Φ驟｢", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ｪ繧ｯ繝ｩ縺ｯ繝ｬ繝ｳ繧ｸ縺ｧ30遘貞刈辭ｱ縺励※蜀ｷ豌ｴ縺ｫ蜿悶ｊ縲∝ｰ丞哨蛻・ｊ縺ｫ縺吶ｋ縲ゅ■縺上ｏ縺ｯ阮・＞霈ｪ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "繝懊え繝ｫ縺ｫ蜿ｩ縺・◆譴・ｹｲ縺怜ｰ代・√・繝ｳ驟｢縲√°縺､縺顔ｯ繧貞粋繧上○繧九・,
      "繧ｪ繧ｯ繝ｩ縺ｨ縺｡縺上ｏ繧貞刈縺医※繝阪ヰ繧翫′蜃ｺ繧九∪縺ｧ蜥後∴繧九・
    ]
  },
  {
    id: "side_76",
    title: "驥瑚葛縺ｮ縺ｻ縺｣縺上ｊ逕倩ｾ帷・迚ｩ",
    category: "side",
    cuisine: "japanese",
    season: "autumn",
    time: "15蛻・,
    approxCostPerPerson: 45,
    tags: ["驥瑚葛", "遘九・譌ｬ", "蜥碁｢ｨ蝓ｺ譛ｬ", "縺ｻ縺｣縺薙ｊ"],
    containsDislikes: [],
    description: "縺ｭ縺｣縺ｨ繧翫・繧ｯ繝帙け縺励◆驥瑚葛縺ｫ縲∫曝霎帙＞縺雁・豎√′荳ｭ縺ｾ縺ｧ縺倥ｓ繧上ｊ譟薙∩霎ｼ繧薙□邏譛ｴ縺ｧ諛舌°縺励＞蜥後・蜑ｯ闖懊・,
    kidsTip: "蜀ｷ蜃埼㈹闃九ｒ菴ｿ縺医・逧ｮ繧縺阪・縺ｬ繧√ｊ繧ゅぞ繝ｭ縺ｧ邁｡蜊假ｼ√♀鬢・・繧医≧縺ｪ譟斐ｉ縺九＆縺ｧ蟄蝉ｾ帙ｂ螟ｧ螂ｽ縺阪・,
    tip: "荳玖源縺ｧ貂医∩縺ｮ蜀ｷ蜃埼㈹闃九ｒ菴ｿ縺・→縲∫坩繧縺堺ｸ崎ｦ・ｼ・・蟠ｩ繧後↑縺励〒10蛻・〒鄒主袖縺励￥螳梧・縺励∪縺吶・,
    ingredients: [
      { name: "驥瑚葛・育函縺ｾ縺溘・蜀ｷ蜃搾ｼ・, amount: 60, unit: "g", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺ｿ繧翫ｓ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蟆城豪縺ｫ豌ｴ100ml縲√□縺励・邏縲・・豐ｹ縲√∩繧翫ｓ縲∫らｳ門推蟆上＆縺・繧貞・繧後※辣ｮ遶九※繧九・,
      "荳蜿｣螟ｧ縺ｮ驥瑚葛繧貞刈縺医∬誠縺ｨ縺苓搭繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ邏・0縲・2蛻・・繧九・,
      "遶ｹ荳ｲ縺後せ繝・→騾壹ｋ縺ｾ縺ｧ譟斐ｉ縺九￥縺ｪ縺｣縺溘ｉ縲∫↓繧貞ｼｷ繧√※辣ｮ豎√ｒ蟆代＠辣ｮ邨｡繧√ｋ縲・
    ]
  },
  {
    id: "side_77",
    title: "雎・距縺ｨ繧ゅｄ縺励・雎壼ｷｻ縺阪Ξ繝ｳ繧ｸ闥ｸ縺怜憶闖・,
    category: "side",
    cuisine: "japanese",
    season: "all",
    time: "8蛻・,
    approxCostPerPerson: 50,
    tags: ["雎・距", "繧ゅｄ縺・, "繝ｬ繝ｳ繧ｸ隱ｿ逅・, "繝懊Μ繝･繝ｼ繝蜑ｯ闖・],
    containsDislikes: ["雎・距"],
    description: "蟆鷹㍼縺ｮ雎壹％縺ｾ縺ｧ雎・距縺ｨ繧ゅｄ縺励ｒ蟾ｻ縺・※繝ｬ繝ｳ繧ｸ縺ｧ闥ｸ縺励◆縲∽ｸｻ闖懃ｴ壹・貅雜ｳ諢溘′縺ゅｋ繝倥Ν繧ｷ繝ｼ繝懊Μ繝･繝ｼ繝蜑ｯ闖懊・,
    kidsTip: "繝昴Φ驟｢繧・ざ繝槭□繧後ｒ縺九￠繧九→雎夊ｉ縺ｮ閼ゅ→驥手除縺御ｸ菴薙↓縺ｪ繧翫√ヱ繧ｯ繝代け鬟溘∋縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "蟾ｻ縺咲ｵゅｏ繧翫ｒ荳九↓縺励※閠千・逧ｿ縺ｫ荳ｦ縺ｹ繧九→縲∫穐讌頑椌繧剃ｽｿ繧上↑縺上※繧ょｴｩ繧後★縺ｫ莉穂ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "雎壹％縺ｾ閧・, amount: 25, unit: "g", aisle: "閧峨・鬲・ },
      { name: "雎・距", amount: 0.2, unit: "陲・, aisle: "驥手除" },
      { name: "繧ゅｄ縺・, amount: 30, unit: "g", aisle: "驥手除" },
      { name: "繝昴Φ驟｢", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "雎夊ｉ繧貞ｺ・￡縲∬ｱ・距縺ｨ繧ゅｄ縺励ｒ闃ｯ縺ｫ縺励※縺上ｋ縺上ｋ縺ｨ蟾ｻ縺上・,
      "閠千・逧ｿ縺ｫ蟾ｻ縺咲ｵゅｏ繧翫ｒ荳九↓縺励※荳ｦ縺ｹ縲・・蟆代・ｒ謖ｯ縺｣縺ｦ繝ｩ繝・・繧偵＠繝ｬ繝ｳ繧ｸ縺ｧ2蛻・濠蜉辭ｱ縺吶ｋ縲・,
      "繝昴Φ驟｢繧貞屓縺励°縺代√♀螂ｽ縺ｿ縺ｧ逋ｽ縺斐∪繧呈険繧九・
    ]
  },
  {
    id: "side_78",
    title: "逋ｽ闖懊・繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ豬・ｼｬ縺・繧・★鬚ｨ蜻ｳ",
    category: "side",
    cuisine: "japanese",
    season: "winter",
    time: "5蛻・,
    approxCostPerPerson: 25,
    tags: ["逋ｽ闖・, "蜀ｬ縺ｮ譌ｬ", "豬・ｼｬ縺・, "蛹・ｸ∽ｸ崎ｦ・],
    containsDislikes: [],
    description: "蜀ｬ縺ｮ逕倥＞逋ｽ闖懊ｒ繝昴Μ陲九〒謠峨・縺縺代・蜊ｳ蟶ｭ豬・ｼｬ縺代ゅｆ縺壽棡豎・ｼ医∪縺溘・繝昴Φ驟｢・峨・鬥吶ｊ縺ｧ辷ｽ繧・°縺ｫ縲・,
    kidsTip: "蝪ｩ蛻・而縺医ａ縺ｧ逋ｽ闖懊・閾ｪ辟ｶ縺ｪ逕倥∩縺悟ｼ輔″遶九▽縺溘ａ縲√し繝ｩ繝諢溯ｦ壹〒蟄蝉ｾ帙◆縺｡繧ゅヱ繝ｪ繝代Μ鬟溘∋縺ｾ縺吶・,
    tip: "闃ｯ縺ｮ驛ｨ蛻・・郢顔ｶｭ縺ｫ豐ｿ縺｣縺ｦ阮・・繧翫↓縺吶ｋ縺ｨ縲∫洒譎る俣縺ｧ繧ょ袖縺後＠縺｣縺九ｊ譟薙∩霎ｼ縺ｿ縺ｾ縺吶・,
    ingredients: [
      { name: "逋ｽ闖・, amount: 80, unit: "g", aisle: "驥手除" },
      { name: "蝪ｩ", amount: 1, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "逋ｽ闖懊・荳蜿｣螟ｧ縺ｮ縺悶￥蛻・ｊ縺ｫ縺励√・繝ｪ陲九↓蜈･繧後ｋ縲・,
      "蝪ｩ蟆上＆縺・/3縲∵・蟶・幻蟆代・√ｆ縺壽棡豎・ｼ医∪縺溘・繝ｬ繝｢繝ｳ豎・ｼ牙ｰ代・ｒ蜉縺医ｋ縲・,
      "陲九・荳翫°繧峨ｈ縺乗初縺ｿ霎ｼ縺ｿ縲∫ｩｺ豌励ｒ謚懊＞縺ｦ蜿｣繧堤ｸ帙ｊ10蛻・ｽｮ縺・※豌ｴ豌励ｒ霆ｽ縺丞・繧九・
    ]
  },
  {
    id: "side_79",
    title: "縺阪ｅ縺・ｊ縺ｨ髟ｷ闃九・縺溘◆縺肴｢・・繝ｳ驟｢蜥後∴",
    category: "side",
    cuisine: "japanese",
    season: "summer",
    time: "5蛻・,
    approxCostPerPerson: 40,
    flavorType: "sour",
    tags: ["縺阪ｅ縺・ｊ", "髟ｷ闃・, "驟ｸ縺｣縺ｱ縺・袖", "螟城㍽闖・],
    containsDislikes: [],
    description: "蜿ｩ縺・◆縺阪ｅ縺・ｊ縺ｨ髟ｷ闃九・繧ｵ繧ｯ繧ｵ繧ｯ繝ｻ繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ縺励◆蠢・慍繧医＞鬟滓─・∵｢・・繝ｳ驟｢縺ｧ蜥後∴縺溽夢蜉ｴ蝗槫ｾｩ蜑ｯ闖懊・,
    kidsTip: "鮗ｺ譽偵〒蜿ｩ縺丞ｷ･遞九・蟄蝉ｾ帙◆縺｡繧ゅ♀謇倶ｼ昴＞螟ｧ螂ｽ縺搾ｼ∵｢・・驟ｸ蜻ｳ繧呈椛縺医ａ縺ｫ縺励※繝昴Φ驟｢縺ｧ繝槭う繝ｫ繝峨↓縲・,
    tip: "蛹・ｸ√〒蛻・ｋ繧医ｊ鮗ｺ譽堤ｭ峨〒蜿ｩ縺・※蜑ｲ繧檎岼繧剃ｽ懊ｋ縺薙→縺ｧ縲∵妙髱｢縺九ｉ蜻ｳ縺檎椪譎ゅ↓譟薙∩霎ｼ縺ｿ縺ｾ縺吶・,
    ingredients: [
      { name: "縺阪ｅ縺・ｊ", amount: 0.4, unit: "譛ｬ", aisle: "驥手除" },
      { name: "髟ｷ闃・, amount: 40, unit: "g", aisle: "驥手除" },
      { name: "繝昴Φ驟｢", amount: 10, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺阪ｅ縺・ｊ縺ｨ髟ｷ闃九・繝昴Μ陲九↓蜈･繧後・ｺｺ譽堤ｭ峨〒荳蜿｣螟ｧ縺ｫ蜿ｩ縺榊牡繧九・,
      "蜿ｩ縺・◆譴・ｹｲ縺怜ｰ代・√・繝ｳ驟｢縲√＃縺ｾ豐ｹ謨ｰ貊ｴ繧定｢九↓蜉縺医ｋ縲・,
      "陲九ｒ霆ｽ縺乗初繧薙〒蜈ｨ菴薙ｒ蜥後∴縲∝勣縺ｫ逶帙▲縺ｦ縺九▽縺顔ｯ繧呈ｷｻ縺医ｋ縲・
    ]
  },
  {
    id: "side_80",
    title: "縺倥ｃ縺後＞繧ゅ→繧ｳ繝ｼ繝ｳ縺ｮ逕伜哨繝舌ち繝ｼ繧ｽ繝・・",
    category: "side",
    cuisine: "western",
    season: "all",
    time: "8蛻・,
    approxCostPerPerson: 35,
    tags: ["縺倥ｃ縺後＞繧・, "繧ｳ繝ｼ繝ｳ郛ｶ", "蟄蝉ｾ帛､ｧ莠ｺ豌・, "繝輔Λ繧､繝代Φ1縺､"],
    containsDislikes: [],
    description: "繝帙け繝帙け縺倥ｃ縺後＞繧ゅ→逕倥＞繧ｳ繝ｼ繝ｳ繧偵ヰ繧ｿ繝ｼ縺ｨ驢､豐ｹ縺ｧ鬥吶・縺励￥轤偵ａ蜷医ｏ縺帙◆縲√♀蟄先ｧ倅ｺｺ豌鈴俣驕輔＞縺ｪ縺励・蜑ｯ闖懊・,
    kidsTip: "繧ｳ繝ｼ繝ｳ縺ｮ邊偵・・逕倥∩縺ｨ繝舌ち繝ｼ驢､豐ｹ縺ｮ鬥吶ｊ縺ｧ縲∝､ｧ莠ｺ繧ょｭ蝉ｾ帙ｂ莠峨≧繧医≧縺ｫ謇九′莨ｸ縺ｳ繧句､ｧ莠ｺ豌励Γ繝九Η繝ｼ縲・,
    tip: "縺倥ｃ縺後＞繧ゅ・繝ｬ繝ｳ繧ｸ縺ｧ蜈医↓譟斐ｉ縺九￥縺励※縺翫￠縺ｰ縲√ヵ繝ｩ繧､繝代Φ縺ｧ繝舌ち繝ｼ繧堤ｵ｡繧√※2蛻・ｒ繧√ｋ縺縺代〒螳梧・・・,
    ingredients: [
      { name: "縺倥ｃ縺後＞繧・, amount: 1, unit: "蛟・, aisle: "驥手除" },
      { name: "繧ｳ繝ｼ繝ｳ郛ｶ", amount: 20, unit: "g", aisle: "驥手除" },
      { name: "繝舌ち繝ｼ", amount: 5, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "縺倥ｃ縺後＞繧ゅ・逧ｮ繧偵・縺・※荳蜿｣螟ｧ縺ｫ蛻・ｊ縲√Ξ繝ｳ繧ｸ縺ｧ2蛻・濠蜉辭ｱ縺励※譟斐ｉ縺九￥縺吶ｋ縲・,
      "繝輔Λ繧､繝代Φ縺ｫ繝舌ち繝ｼ繧堤・縺励√§繧・′縺・ｂ縺ｨ繧ｳ繝ｼ繝ｳ繧貞・繧後※荳ｭ轣ｫ縺ｧ鬥吶・縺励￥轤偵ａ繧九・,
      "驢､豐ｹ蟆上＆縺・/2縺ｨ蝪ｩ縺薙＠繧・≧蟆代・ｒ蝗槭＠蜈･繧後∝・菴薙↓繧ｵ繝・→邨｡繧√ｋ縲・
    ]
  },
  // =================================================================
  // 縲占ｿｽ蜉 豎∫黄 (Soup)縲・ soup_36 縲・soup_64 (蜈ｨ29蜩∬ｿｽ蜉)
  // =================================================================
  {
    id: "soup_36",
    title: "豼・字縺九⊂縺｡繧・→邇峨・縺弱・遽邏・・繧ｿ繝ｼ繧ｸ繝･",
    category: "soup",
    cuisine: "western",
    season: "autumn",
    time: "10蛻・,
    approxCostPerPerson: 40,
    tags: ["縺九⊂縺｡繧・, "遘九・譌ｬ", "繝昴ち繝ｼ繧ｸ繝･", "蟄蝉ｾ帛､ｧ莠ｺ豌・],
    containsDislikes: ["縺九⊂縺｡繧・],
    description: "逕溘け繝ｪ繝ｼ繝荳崎ｦ・ｼ√Ξ繝ｳ繧ｸ蜉辭ｱ縺励◆縺九⊂縺｡繧・ｒ貎ｰ縺励※迚帑ｹｳ縺ｨ繧ｳ繝ｳ繧ｽ繝｡縺ｧ莨ｸ縺ｰ縺吶□縺代・譛ｬ譬ｼ豼・字繝昴ち繝ｼ繧ｸ繝･縲・,
    kidsTip: "閾ｪ辟ｶ縺ｪ縺九⊂縺｡繧・・逕倥∩縺悟ｼ輔″遶九■縲・㍽闖懷ｫ後＞縺ｪ縺雁ｭ先ｧ倥ｂ繧ｹ繧､繝ｼ繝・─隕壹〒繧ｴ繧ｯ繧ｴ繧ｯ鬟ｲ縺ｿ蟷ｲ縺励∪縺吶・,
    tip: "繝輔か繝ｼ繧ｯ繧・・繝・す繝｣繝ｼ縺ｧ縺励▲縺九ｊ貎ｰ縺吶□縺代〒繝溘く繧ｵ繝ｼ隕√ｉ縺壹ら坩繧貞ｰ代＠谿九☆縺ｨ蠖ｩ繧翫ｂ雎翫°縺ｫ縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "縺九⊂縺｡繧・, amount: 60, unit: "g", aisle: "驥手除" },
      { name: "迚帑ｹｳ", amount: 80, unit: "ml", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ｳ繝ｳ繧ｽ繝｡", amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺九⊂縺｡繧・・逧ｮ繧貞ｰ代＠蜑翫℃關ｽ縺ｨ縺励※荳蜿｣螟ｧ縺ｫ蛻・ｊ縲√Ξ繝ｳ繧ｸ縺ｧ3蛻・沐繧峨°縺上↑繧九∪縺ｧ蜉辭ｱ縺吶ｋ縲・,
      "辭ｱ縺・≧縺｡縺ｫ繝輔か繝ｼ繧ｯ縺ｧ貊代ｉ縺九↓縺ｪ繧九∪縺ｧ縺励▲縺九ｊ貎ｰ縺吶・,
      "蟆城豪縺ｫ貎ｰ縺励◆縺九⊂縺｡繧・∫央荵ｳ縲∵ｰｴ50ml縲√さ繝ｳ繧ｽ繝｡繧貞・繧後※蠑ｱ轣ｫ縺ｧ貂ｩ繧√∝｡ｩ蟆代・〒蜻ｳ繧定ｪｿ縺医ｋ縲・
    ]
  },
  {
    id: "soup_37",
    title: "縺九⊂縺｡繧・→豐ｹ謠壹￡縺ｮ縺雁袖蝎梧ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "8蛻・,
    approxCostPerPerson: 30,
    tags: ["縺九⊂縺｡繧・, "豐ｹ謠壹￡", "遘九・譌ｬ", "蜥碁｢ｨ蝓ｺ譛ｬ"],
    containsDislikes: ["縺九⊂縺｡繧・],
    description: "逕倥＞繝帙け繝帙け縺九⊂縺｡繧・→繧ｳ繧ｯ縺ｮ縺ゅｋ豐ｹ謠壹￡縺ｮ縺雁袖蝎梧ｱ√ゅ←縺薙°諛舌°縺励￥蠢・′縺ｻ縺｣縺ｨ貂ｩ縺ｾ繧倶ｸ譚ｯ縲・,
    kidsTip: "縺九⊂縺｡繧・・逕倥∩縺後♀蜻ｳ蝎梧ｱ√↓貅ｶ縺大・縺励√∪繧阪ｄ縺九↑蜆ｪ縺励＞蜻ｳ縺ｫ縺ｪ繧九・縺ｧ蟄蝉ｾ帙ｂ螟ｧ螂ｽ縺阪・,
    tip: "縺九⊂縺｡繧・ｒ阮・・繧翫↓縺吶ｋ縺薙→縺ｧ縲√ｏ縺壹°5蛻・・辣ｮ霎ｼ縺ｿ譎る俣縺ｧ譟斐ｉ縺九￥莉穂ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "縺九⊂縺｡繧・, amount: 50, unit: "g", aisle: "驥手除" },
      { name: "豐ｹ謠壹￡", amount: 0.3, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蜻ｳ蝎・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺九⊂縺｡繧・・5mm蜴壹＆縺ｮ阮・・繧翫∵ｲｹ謠壹￡縺ｯ遏ｭ蜀雁・繧翫↓縺吶ｋ縲・,
      "骰九↓豌ｴ180ml縲√□縺励・邏縲√°縺ｼ縺｡繧・∵ｲｹ謠壹￡繧貞・繧後※轣ｫ縺ｫ縺九￠繧九・,
      "縺九⊂縺｡繧・′譟斐ｉ縺九￥縺ｪ縺｣縺溘ｉ轣ｫ繧貞ｼｱ繧√∝袖蝎後ｒ貅ｶ縺榊・繧後※縺ｲ縺ｨ辣ｮ遶九■逶ｴ蜑阪↓轣ｫ繧呈ｭ｢繧√ｋ縲・
    ]
  },
  {
    id: "soup_38",
    title: "縺九⊂縺｡繧・→雎・ｹｳ縺ｮ縺ｾ繧阪ｄ縺句柱鬚ｨ繧ｹ繝ｼ繝・,
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 40,
    tags: ["縺九⊂縺｡繧・, "雎・ｹｳ", "蜥碁｢ｨ繧ｹ繝ｼ繝・, "繝倥Ν繧ｷ繝ｼ"],
    containsDislikes: ["縺九⊂縺｡繧・],
    description: "縺ｻ縺上⊇縺上°縺ｼ縺｡繧・ｒ蜥碁｢ｨ縺縺励→辟｡隱ｿ謨ｴ雎・ｹｳ縺ｧ莨ｸ縺ｰ縺励◆縲√け繝ｪ繝ｼ繝溘・縺ｧ菴薙↓蜆ｪ縺励＞蜥碁｢ｨ繝昴ち繝ｼ繧ｸ繝･縲・,
    kidsTip: "雎・ｹｳ縺ｮ縺ｾ繧阪ｄ縺九＆縺ｨ縺九⊂縺｡繧・・逕倥∩縺悟粋繧上＆繧翫・屬荵ｳ鬟溘°繧牙ｹｼ蜈宣｣溘∪縺ｧ螳牙ｿ・＠縺ｦ鬟ｲ繧√ｋ蜆ｪ縺励＞蜻ｳ縲・,
    tip: "雎・ｹｳ縺ｯ豐ｸ鬨ｰ縺輔○繧九→蛻・屬縺励ｄ縺吶＞縺ｮ縺ｧ縲∝刈縺医◆繧牙ｼｱ轣ｫ縺ｧ貂ｩ繧√ｋ遞句ｺｦ縺ｫ縺吶ｋ縺ｮ縺梧ｻ代ｉ縺九↓菫昴▽繧ｳ繝・・,
    ingredients: [
      { name: "縺九⊂縺｡繧・, amount: 50, unit: "g", aisle: "驥手除" },
      { name: "辟｡隱ｿ謨ｴ雎・ｹｳ", amount: 80, unit: "ml", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "逋ｽ縺縺・, amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺九⊂縺｡繧・・蟆上＆繧√↓蛻・▲縺ｦ繝ｬ繝ｳ繧ｸ縺ｧ2蛻・濠蜉辭ｱ縺励√ヵ繧ｩ繝ｼ繧ｯ縺ｧ貎ｰ縺吶・,
      "蟆城豪縺ｫ豌ｴ50ml縲∫區縺縺励∵ｽｰ縺励◆縺九⊂縺｡繧・ｒ蜈･繧後※豺ｷ縺懊↑縺後ｉ貂ｩ繧√ｋ縲・,
      "雎・ｹｳ繧貞刈縺医※蠑ｱ轣ｫ縺ｧ貂ｩ繧√∵ｲｸ鬨ｰ縺吶ｋ逶ｴ蜑阪〒轣ｫ繧呈ｭ｢繧√※蝪ｩ縺ｧ蜻ｳ繧定ｪｿ縺医ｋ縲・
    ]
  },
  {
    id: "soup_39",
    title: "蜈ｷ豐｢螻ｱ・√♀縺九★縺ｫ縺ｪ繧狗ｯ邏・ｱ壽ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "15蛻・,
    approxCostPerPerson: 55,
    tags: ["螟ｧ譬ｹ", "雎壹％縺ｾ閧・, "蜈ｷ豐｢螻ｱ", "蜀ｬ縺ｮ譌ｬ", "縺斐■縺昴≧豎・],
    containsDislikes: [],
    description: "雎壹％縺ｾ縺ｮ譌ｨ蜻ｳ縺ｨ螟ｧ譬ｹ縲∽ｺｺ蜿ゅ∵ｲｹ謠壹￡縺後℃縺｣縺励ｊ隧ｰ縺ｾ縺｣縺滄｣溘∋繧九♀蜻ｳ蝎梧ｱ√ゅ％繧・譚ｯ縺ｧ譬・､頑ｺ轤ｹ・・,
    kidsTip: "縺願ｉ縺ｨ縺企㍽闖懊・蜃ｺ豎√′縺溘▲縺ｷ繧頑沒縺ｿ蜃ｺ縺溽曝縺ｿ縺ｮ縺ゅｋ繧ｹ繝ｼ繝励〒縲・㍽闖懷ｫ後＞縺ｪ蟄舌ｂ繝｢繝ｪ繝｢繝ｪ鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "譛蛻昴↓蜈ｷ譚舌ｒ縺斐∪豐ｹ縺ｧ繧ｵ繝・→轤偵ａ縺ｦ縺九ｉ辣ｮ霎ｼ繧縺薙→縺ｧ縲√さ繧ｯ縺悟榊｢励＠縺ｦ蜀ｷ繧√↓縺上＞辭ｱ縲・ｱ壽ｱ√↓縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "雎壹％縺ｾ閧・, amount: 30, unit: "g", aisle: "閧峨・鬲・ },
      { name: "螟ｧ譬ｹ", amount: 40, unit: "g", aisle: "驥手除" },
      { name: "莠ｺ蜿・, amount: 20, unit: "g", aisle: "驥手除" },
      { name: "豐ｹ謠壹￡", amount: 0.3, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蜻ｳ蝎・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縲∽ｺｺ蜿ゅ・縺・■繧・≧蛻・ｊ縲∵ｲｹ謠壹￡縺ｯ遏ｭ蜀雁・繧翫↓縺吶ｋ縲・,
      "骰九↓縺斐∪豐ｹ繧堤・縺励∬ｱ夊ｉ縲∝､ｧ譬ｹ縲∽ｺｺ蜿ゅｒ蠑ｷ轣ｫ縺ｧ1蛻・し繝・→轤偵ａ繧九・,
      "豌ｴ180ml縺ｨ縺縺励・邏繧貞刈縺医※螟ｧ譬ｹ縺梧沐繧峨°縺上↑繧九∪縺ｧ辣ｮ縺ｦ縲∵ｲｹ謠壹￡繧貞刈縺亥袖蝎後ｒ貅ｶ縺榊・繧後ｋ縲・
    ]
  },
  {
    id: "soup_40",
    title: "縺ｵ繧薙ｏ繧翫°縺咲脂繧ｳ繝ｼ繝ｳ縺ｮ荳ｭ闖ｯ縺ｨ繧阪∩繧ｹ繝ｼ繝・,
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "6蛻・,
    approxCostPerPerson: 30,
    tags: ["蜊ｵ譁咏炊", "繧ｳ繝ｼ繝ｳ郛ｶ", "荳ｭ闖ｯ繧ｹ繝ｼ繝・, "蟄蝉ｾ帛､ｧ莠ｺ豌・],
    containsDislikes: [],
    description: "繧ｳ繝ｼ繝ｳ郛ｶ縺ｮ逕倥∩縺ｨ縺ｵ繧上・繧上°縺咲脂縺檎ｵｶ蜩√・荳ｭ闖ｯ繧ｹ繝ｼ繝励ら援譬礼ｲ峨・縺ｨ繧阪∩縺ｧ譛蠕後∪縺ｧ辭ｱ縲・・繧√∪縺帙ｓ縲・,
    kidsTip: "逕倥＞繧ｳ繝ｼ繝ｳ縺ｨ縺ｵ繧上・繧丞嵯縺ｮ邨・∩蜷医ｏ縺帙・縲√ヵ繧｡繝溘Ξ繧ｹ縺ｮ荳ｭ闖ｯ繧ｹ繝ｼ繝励・繧医≧縺ｫ縺雁ｭ先ｧ倥↓螟ｧ繝偵ャ繝茨ｼ・,
    tip: "繧ｹ繝ｼ繝励↓縺ｨ繧阪∩繧偵▽縺代※縺九ｉ貅ｶ縺榊嵯繧堤ｴｰ縺丞屓縺怜・繧後ｋ縺ｨ縲∝嵯縺梧ｲ医∪縺壹↓縺ｵ繧上▲縺ｨ邯ｺ鮗励↓豬ｮ縺阪∪縺吶・,
    ingredients: [
      { name: "繧ｳ繝ｼ繝ｳ郛ｶ", amount: 25, unit: "g", aisle: "驥手除" },
      { name: "蜊ｵ", amount: 0.5, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蟆城豪縺ｫ豌ｴ180ml縲√さ繝ｼ繝ｳ郛ｶ縲・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏縲・・豐ｹ蟆上＆縺・/2繧貞・繧後※豐ｸ鬨ｰ縺輔○繧九・,
      "豌ｴ貅ｶ縺咲援譬礼ｲ峨ｒ蝗槭＠蜈･繧後※繧ｹ繝ｼ繝励↓縺ｨ繧阪∩繧偵▽縺代ｋ縲・,
      "豐ｸ鬨ｰ縺励◆縺ｨ縺薙ｍ縺ｫ貅ｶ縺榊嵯繧堤ｴｰ縺乗ｵ√＠蜈･繧後√・繧薙ｏ繧頑ｵｮ縺・※縺阪◆繧臥↓繧呈ｭ｢繧√※縺斐∪豐ｹ繧呈焚貊ｴ蝙ゅｉ縺吶・
    ]
  },
  {
    id: "soup_41",
    title: "縺願ｱ・・縺ｨ繝ｯ繧ｫ繝｡縺ｮ邇矩％縺雁袖蝎梧ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 20,
    tags: ["譛ｨ邯ｿ雎・・", "蜥碁｢ｨ蝓ｺ譛ｬ", "雜・凾遏ｭ", "豼螳・],
    containsDislikes: [],
    description: "譌･譛ｬ縺ｮ鬟溷酷縺ｮ蝓ｺ譛ｬ・√↑繧√ｉ縺九↑雎・・縺ｨ繝ｯ繧ｫ繝｡縺ｮ螳夂分蜻ｳ蝎梧ｱ√ゅ←繧薙↑荳ｻ闖懊↓繧ょｯ・ｊ豺ｻ縺・ｮ牙ｿ・・蜻ｳ縲・,
    kidsTip: "蟆上＆繧√・繧ｵ繧､繧ｳ繝ｭ迥ｶ縺ｫ蛻・▲縺溯ｱ・・縺ｯ縲・屬荵ｳ鬟溘懷ｰ上＆縺ｪ縺雁ｭ先ｧ倥〒繧ゅヤ繝ｫ繝・→鬟溘∋繧・☆縺・〒縺吶・,
    tip: "雎・・縺ｯ辣ｮ霎ｼ縺ｿ縺吶℃繧九→繧ｹ縺悟・縺｣縺ｦ遑ｬ縺上↑繧九・縺ｧ縲∵ｸｩ縺ｾ縺｣縺溘ｉ縺吶＄縺ｫ轣ｫ繧呈ｭ｢繧√ｋ縺ｮ縺檎ｾ主袖縺励￥莉穂ｸ翫￡繧九さ繝・・,
    ingredients: [
      { name: "譛ｨ邯ｿ雎・・", amount: 40, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "荵ｾ辯･繧上°繧・, amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "蜻ｳ蝎・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "譛ｨ邯ｿ雎・・縺ｯ1cm隗偵・縺輔＞縺ｮ逶ｮ蛻・ｊ縺ｫ縺吶ｋ縲・,
      "骰九↓豌ｴ180ml縺ｨ縺縺励・邏繧貞・繧後※轣ｫ縺ｫ縺九￠縲∫・遶九▲縺溘ｉ雎・・縺ｨ荵ｾ辯･繧上°繧√ｒ蜉縺医ｋ縲・,
      "縺ｲ縺ｨ辣ｮ遶九■縺励◆繧臥↓繧貞ｼｱ繧√∝袖蝎後ｒ貅ｶ縺榊・繧後※豐ｸ鬨ｰ逶ｴ蜑阪〒轣ｫ繧呈ｭ｢繧√ｋ縲・
    ]
  },
  {
    id: "soup_42",
    title: "螳檎・繝医・繝医→繧ｭ繝｣繝吶ヤ縺ｮ蜈ｷ豐｢螻ｱ繝溘ロ繧ｹ繝医Ο繝ｼ繝・,
    category: "soup",
    cuisine: "western",
    season: "all",
    time: "15蛻・,
    approxCostPerPerson: 40,
    tags: ["繝医・繝・, "繧ｭ繝｣繝吶ヤ", "豢矩｢ｨ", "驥手除縺溘▲縺ｷ繧・],
    containsDislikes: ["繝医・繝・],
    description: "繝医・繝医・逕倥∩縺ｨ驟ｸ蜻ｳ縺梧ｺｶ縺題ｾｼ繧薙□蜈ｷ豐｢螻ｱ繧ｹ繝ｼ繝励ょ・阡ｵ蠎ｫ縺ｮ菴吶ｊ驥手除繧貞・繧後※繧らｾ主袖縺励￥菴懊ｌ縺ｾ縺吶・,
    kidsTip: "繧ｱ繝√Ε繝・・縺ｨ遐らｳ悶ｒ蟆代＠雜ｳ縺励※驟ｸ蜻ｳ繧呈椛縺医∫ｲ峨メ繝ｼ繧ｺ繧呈険繧九→蟄蝉ｾ帙◆縺｡繧ょ万繧薙〒螳碁｣溘＠縺ｾ縺吶・,
    tip: "驥手除繧堤ｴｰ縺九￥蛻ｻ繧薙〒繧ｪ繝ｪ繝ｼ繝匁ｲｹ縺ｧ縺倥▲縺上ｊ轤偵ａ繧九％縺ｨ縺ｧ縲・㍽闖懈悽譚･縺ｮ逕倥∩縺後せ繝ｼ繝励↓貅ｶ縺大・縺励∪縺吶・,
    ingredients: [
      { name: "繝医・繝育ｼｶ", amount: 50, unit: "g", aisle: "驥手除" },
      { name: "繧ｭ繝｣繝吶ヤ", amount: 40, unit: "g", aisle: "驥手除" },
      { name: "邇峨・縺・, amount: 0.2, unit: "蛟・, aisle: "驥手除" },
      { name: "繧ｳ繝ｳ繧ｽ繝｡", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ｭ繝｣繝吶ヤ縲∫脂縺ｭ縺弱・1cm隗偵↓蛻・ｋ縲・,
      "蟆城豪縺ｫ繧ｪ繝ｪ繝ｼ繝匁ｲｹ繧堤・縺励∫脂縺ｭ縺弱→繧ｭ繝｣繝吶ヤ繧偵＠繧薙↑繧翫☆繧九∪縺ｧ轤偵ａ繧九・,
      "繝医・繝育ｼｶ縲∵ｰｴ120ml縲√さ繝ｳ繧ｽ繝｡繧貞刈縺医√ヵ繧ｿ繧偵＠縺ｦ蠑ｱ轣ｫ縺ｧ邏・蛻・さ繝医さ繝育・霎ｼ繧縲・
    ]
  },
  {
    id: "soup_43",
    title: "縺医・縺崎減縺ｨ豐ｹ謠壹￡縺ｮ蜷医ｏ縺帛袖蝎梧ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "6蛻・,
    approxCostPerPerson: 25,
    tags: ["縺阪・縺・, "豐ｹ謠壹￡", "蜥碁｢ｨ蝓ｺ譛ｬ", "鬟溽黄郢顔ｶｭ"],
    containsDislikes: ["縺阪・縺・],
    description: "繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ縺ｮ縺医・縺崎減縺九ｉ譟薙∩蜃ｺ繧玖・辟ｶ縺ｪ蜃ｺ豎√→縲∵ｲｹ謠壹￡縺ｮ繧ｳ繧ｯ縺悟粋繧上＆縺｣縺滄｢ｨ蜻ｳ雎翫°縺ｪ縺雁袖蝎梧ｱ√・,
    kidsTip: "縺医・縺阪ｒ邏ｰ縺九￥蛻ｻ繧縺薙→縺ｧ豁ｯ縺ｫ謖溘∪繧峨★縲√ヤ繝ｫ繝・Ν縺ｨ蝟芽ｶ翫＠繧医￥鬟ｲ繧薙〒縺上ｌ縺ｾ縺吶・,
    tip: "縺医・縺阪・辣ｮ縺吶℃縺壹し繝・→轣ｫ繧帝壹☆遞句ｺｦ縺ｫ縺吶ｋ縺ｨ縲∫峡迚ｹ縺ｮ繧ｷ繝｣繧ｭ繝・→縺励◆鬟滓─縺悟ｼ輔″遶九■縺ｾ縺吶・,
    ingredients: [
      { name: "縺医・縺・, amount: 35, unit: "g", aisle: "驥手除" },
      { name: "豐ｹ謠壹￡", amount: 0.3, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蜻ｳ蝎・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺医・縺阪・遏ｳ縺･縺阪ｒ關ｽ縺ｨ縺励※髟ｷ縺輔ｒ3遲牙・縺ｫ蛻・ｊ縲∵ｲｹ謠壹￡縺ｯ遏ｭ蜀雁・繧翫↓縺吶ｋ縲・,
      "骰九↓豌ｴ180ml縺ｨ縺縺励・邏繧貞・繧後※轣ｫ縺ｫ縺九￠縲√∴縺ｮ縺阪→豐ｹ謠壹￡繧貞刈縺医ｋ縲・,
      "縺医・縺阪↓轣ｫ縺碁壹▲縺溘ｉ蠑ｱ轣ｫ縺ｫ縺励∝袖蝎後ｒ貅ｶ縺榊・繧後※轣ｫ繧呈ｭ｢繧√ｋ縲・
    ]
  },
  {
    id: "soup_44",
    title: "縺励ａ縺倥→邇峨・縺弱・逕伜哨繧ｳ繝ｳ繧ｽ繝｡繧ｹ繝ｼ繝・,
    category: "soup",
    cuisine: "western",
    season: "all",
    time: "8蛻・,
    approxCostPerPerson: 30,
    tags: ["縺阪・縺・, "邇峨・縺・, "繧ｳ繝ｳ繧ｽ繝｡", "豢矩｢ｨ螳夂分"],
    containsDislikes: ["縺阪・縺・],
    description: "縺倥▲縺上ｊ辣ｮ縺溽脂縺ｭ縺弱・閾ｪ辟ｶ縺ｪ逕倥∩縺ｨ縺励ａ縺倥・譌ｨ蜻ｳ縺梧ｺｶ縺題ｾｼ繧薙□縲∵ｴ矩｣溘・迪ｮ遶九↓繝斐ャ繧ｿ繝ｪ縺ｮ繧ｯ繝ｪ繧｢繧ｹ繝ｼ繝励・,
    kidsTip: "邇峨・縺弱′騾上″騾壹ｋ縺ｾ縺ｧ譟斐ｉ縺九￥辣ｮ繧九％縺ｨ縺ｧ逕倥∩縺悟｢励＠縲√さ繝ｳ繧ｽ繝｡蜻ｳ縺ｧ蟄蝉ｾ帙◆縺｡繧ょ､ｧ螂ｽ縺阪↑繧ｹ繝ｼ繝励↓縲・,
    tip: "繝吶・繧ｳ繝ｳ縺ｮ遶ｯ蛻・ｌ繧・え繧､繝ｳ繝翫・縺悟ｰ代＠縺ゅｌ縺ｰ蜉縺医ｋ縺ｨ縲√＆繧峨↓繧ｳ繧ｯ豺ｱ縺・＃縺｡縺昴≧繧ｹ繝ｼ繝励↓縺ｪ繧翫∪縺吶・,
    ingredients: [
      { name: "縺励ａ縺・, amount: 30, unit: "g", aisle: "驥手除" },
      { name: "邇峨・縺・, amount: 0.25, unit: "蛟・, aisle: "驥手除" },
      { name: "繧ｳ繝ｳ繧ｽ繝｡", amount: 2.5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "邇峨・縺弱・阮・・繧翫↓縺励√＠繧√§縺ｯ遏ｳ縺･縺阪ｒ蜿悶▲縺ｦ蟆乗袷縺ｫ縺ｻ縺舌☆縲・,
      "骰九↓豌ｴ180ml縲√さ繝ｳ繧ｽ繝｡縲∫脂縺ｭ縺弱√＠繧√§繧貞・繧後※荳ｭ轣ｫ縺ｫ縺九￠繧九・,
      "豐ｸ鬨ｰ縺励◆繧牙ｼｱ轣ｫ縺ｫ縺励√ヵ繧ｿ繧偵＠縺ｦ邏・蛻・・縺ｦ蝪ｩ縺薙＠繧・≧蟆代・〒蜻ｳ繧定ｪｿ縺医ｋ縲・
    ]
  },
  {
    id: "soup_45",
    title: "螟上リ繧ｹ縺ｨ豐ｹ謠壹￡縺ｮ逕ｰ闊朱｢ｨ縺雁袖蝎梧ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "summer",
    time: "8蛻・,
    approxCostPerPerson: 35,
    tags: ["縺ｪ縺・, "螟城㍽闖・, "蜥碁｢ｨ蝓ｺ譛ｬ", "縺ｻ縺｣縺薙ｊ"],
    containsDislikes: ["縺ｪ縺・],
    description: "縺雁・豎√ｒ蜷ｸ縺｣縺溘ず繝･繝ｼ繧ｷ繝ｼ縺ｪ繝翫せ縺悟哨縺ｮ荳ｭ縺ｧ縺倥ｅ繧上▲縺ｨ縺ｨ繧阪￠繧九∝､上・鬟溷酷縺ｫ谺縺九○縺ｪ縺・ｮ夂分蜻ｳ蝎梧ｱ√・,
    kidsTip: "繝翫せ縺ｮ逧ｮ繧偵ヴ繝ｼ繝ｩ繝ｼ縺ｧ阮・￥邵樊ｨ｡讒倥↓蜑･縺・※縺翫￥縺ｨ縲∫坩縺檎｡ｬ縺上↑繧峨★蟄蝉ｾ帙ｂ繧ｹ繝・→蝎帙∩蛻・ｌ縺ｾ縺吶・,
    tip: "繝翫せ繧偵＃縺ｾ豐ｹ蟆上＆縺・/2縺ｧ繧ｵ繝・→轤偵ａ縺ｦ縺九ｉ縺雁・豎√ｒ蜉縺医ｋ縺ｨ縲√さ繧ｯ縺梧ｼ谿ｵ縺ｫ繧｢繝・・縺励※邨ｶ蜩√↓・・,
    ingredients: [
      { name: "縺ｪ縺・, amount: 0.5, unit: "譛ｬ", aisle: "驥手除" },
      { name: "豐ｹ謠壹￡", amount: 0.3, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蜻ｳ蝎・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝翫せ縺ｯ荳蜿｣螟ｧ縺ｮ荵ｱ蛻・ｊ縺ｫ縺励※豌ｴ縺ｫ縺輔ｉ縺励∵ｲｹ謠壹￡縺ｯ遏ｭ蜀雁・繧翫↓縺吶ｋ縲・,
      "骰九↓蟆鷹㍼縺ｮ豐ｹ繧堤・縺励※繝翫せ繧偵し繝・→轤偵ａ縲∵ｰｴ180ml縺ｨ縺縺励・邏縲∵ｲｹ謠壹￡繧貞刈縺医ｋ縲・,
      "繝翫せ縺梧沐繧峨°縺上↑繧九∪縺ｧ3蛻・⊇縺ｩ辣ｮ縺ｦ縲∫↓繧呈ｭ｢繧√※蜻ｳ蝎後ｒ貅ｶ縺榊・繧後ｋ縲・
    ]
  },
  {
    id: "soup_46",
    title: "髟ｷ繝阪ぐ縺ｨ縺願ｱ・・縺ｮ荳ｭ闖ｯ鬚ｨ縺ｨ繧阪∩逕溷ｧ懊せ繝ｼ繝・,
    category: "soup",
    cuisine: "chinese",
    season: "winter",
    time: "6蛻・,
    approxCostPerPerson: 25,
    tags: ["髟ｷ繝阪ぐ", "譛ｨ邯ｿ雎・・", "逕溷ｧ・, "荳ｭ闖ｯ繧ｹ繝ｼ繝・, "蜀ｷ縺域ｧ莠磯亟"],
    containsDislikes: ["髟ｷ繝阪ぐ"],
    description: "縺溘▲縺ｷ繧翫・髟ｷ繝阪ぐ縺ｨ雎・・繧偵＃縺ｾ豐ｹ鬥吶ｋ荳ｭ闖ｯ繧ｹ繝ｼ繝励〒縺ｨ繧阪→繧阪↓縲ら函蟋懊・蜉ｹ譫懊〒菴薙・闃ｯ縺九ｉ貂ｩ縺ｾ繧翫∪縺吶・,
    kidsTip: "繝阪ぐ繧偵け繧ｿ繧ｯ繧ｿ縺ｫ縺ｪ繧九∪縺ｧ辣ｮ繧九→逕倥∩縺悟｢励＠縲∫函蟋懊ｒ謗ｧ縺医ａ縺ｫ縺吶ｌ縺ｰ蟄蝉ｾ帙ｂ螟ｧ螂ｽ縺阪↑荳ｭ闖ｯ蜻ｳ縺ｫ縲・,
    tip: "豌ｴ貅ｶ縺咲援譬礼ｲ峨〒縺ｨ繧阪∩繧偵▽縺代ｋ縺薙→縺ｧ辭ｱ縺碁・￡縺壹∝ｯ偵＞譌･繧よ怙蠕後∪縺ｧ繧｢繝・い繝・・縺ｾ縺ｾ讌ｽ縺励ａ縺ｾ縺吶・,
    ingredients: [
      { name: "髟ｷ繝阪ぐ", amount: 0.3, unit: "譛ｬ", aisle: "驥手除" },
      { name: "譛ｨ邯ｿ雎・・", amount: 40, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "髟ｷ繝阪ぐ縺ｯ譁懊ａ阮・・繧翫∬ｱ・・縺ｯ1cm隗偵↓蛻・ｋ縲・,
      "骰九↓縺斐∪豐ｹ繧堤・縺励・聞繝阪ぐ繧偵＠繧薙↑繧翫☆繧九∪縺ｧ轤偵ａ縲∵ｰｴ180ml縲・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏縲∫函蟋懷ｰ代・ｒ蜉縺医ｋ縲・,
      "雎・・繧貞刈縺医※1蛻・・縺ｦ縲∵ｰｴ貅ｶ縺咲援譬礼ｲ峨〒縺ｨ繧阪∩繧偵▽縺代※轣ｫ繧呈ｭ｢繧√ｋ縲・
    ]
  },
  {
    id: "soup_47",
    title: "雎・距縺ｨ縺ｵ繧薙ｏ繧翫°縺咲脂縺ｮ荳ｭ闖ｯ繧ｹ繝ｼ繝・,
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 25,
    tags: ["雎・距", "蜊ｵ譁咏炊", "雜・凾遏ｭ", "荳ｭ闖ｯ繧ｹ繝ｼ繝・],
    containsDislikes: ["雎・距"],
    description: "譬・､願ｱ雁ｯ後↑雎・距縺ｨ蜆ｪ縺励＞縺九″邇峨・繧ｹ繝斐・繝我ｸｭ闖ｯ繧ｹ繝ｼ繝励ょ桁荳∽ｸ崎ｦ√〒5蛻・〒菴懊ｌ繧狗ｯ邏・・蠑ｷ縺・袖譁ｹ縲・,
    kidsTip: "貅ｶ縺榊嵯縺ｮ縺ｾ繧阪ｄ縺九＆縺ｧ雎・距縺ｮ繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ諢溘′鄒主袖縺励￥鬟溘∋繧峨ｌ縲∬ｦ九◆逶ｮ繧るｮｮ繧・°縺ｧ螟ｧ螂ｽ隧輔・,
    tip: "雎・距縺ｯ轣ｫ縺碁壹ｊ繧・☆縺・・縺ｧ縲∵怙蠕後↓蜉縺医※菴咏・縺ｧ繧ｵ繝・→莉穂ｸ翫￡繧九→濶ｲ魄ｮ繧・°縺ｧ繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ縺ｫ・・,
    ingredients: [
      { name: "雎・距", amount: 0.25, unit: "陲・, aisle: "驥手除" },
      { name: "蜊ｵ", amount: 0.5, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "雎・距縺ｯ譬ｹ蜈・ｒ關ｽ縺ｨ縺励※3cm髟ｷ縺輔↓蛻・ｋ縲・,
      "蟆城豪縺ｫ豌ｴ180ml縲・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏縲・・豐ｹ蟆上＆縺・/2繧貞・繧後※豐ｸ鬨ｰ縺輔○繧九・,
      "雎・距繧貞刈縺医∵ｲｸ鬨ｰ縺励◆縺ｨ縺薙ｍ縺ｫ貅ｶ縺榊嵯繧貞屓縺怜・繧後√・繧上▲縺ｨ豬ｮ縺・※縺阪◆繧峨＃縺ｾ豐ｹ繧貞桙繧峨☆縲・
    ]
  },
  {
    id: "soup_48",
    title: "魄ｭ縺ｨ螟ｧ譬ｹ縺ｮ縺ゅ▲縺溘°縺吶∪縺玲ｱ・ｼ井ｸ牙ｹｳ豎・｢ｨ・・,
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "15蛻・,
    approxCostPerPerson: 50,
    tags: ["魄ｭ", "螟ｧ譬ｹ", "蜀ｬ縺ｮ譌ｬ", "蛹玲ｵｷ驕馴｢ｨ", "鬲・],
    containsDislikes: ["鬲・],
    description: "魄ｭ縺ｮ譌ｨ蜻ｳ縺ｨ螟ｧ譬ｹ縺ｮ逕倥∩縺後す繝ｳ繝励Ν縺ｪ縺雁・豎√↓貅ｶ縺題ｾｼ繧薙□縲∝圏豬ｷ驕薙・荳牙ｹｳ豎√ｒ諤昴ｏ縺帙ｋ縺ｻ縺｣縺薙ｊ豎∫黄縲・,
    kidsTip: "縺企・豐ｹ謗ｧ縺医ａ縺ｮ縺雁・豎∽ｻ慕ｫ九※縺ｧ魄ｭ縺ｮ蝪ｩ豌励→驥手除縺ｮ逕倥∩縺碁圀遶九■縲√♀鬲壹′螂ｽ縺阪↑蟄舌ｂ螟ｧ蝟懊・縲・,
    tip: "魄ｭ縺ｮ繧｢繝ｩ繧・ｫｯ蛻・ｌ閧峨ｒ菴ｿ縺医・雜・ｽ弱さ繧ｹ繝医〒譁吩ｺｭ縺ｮ繧医≧縺ｪ讌ｵ荳翫・縺雁・豎√′蜿悶ｌ縺ｾ縺吶・,
    ingredients: [
      { name: "逕滄ｮｭ", amount: 30, unit: "g", aisle: "閧峨・鬲・ },
      { name: "螟ｧ譬ｹ", amount: 40, unit: "g", aisle: "驥手除" },
      { name: "逋ｽ縺縺・, amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縺ｯ縺・■繧・≧蛻・ｊ縲・ｮｭ縺ｯ荳蜿｣螟ｧ縺ｫ蛻・▲縺ｦ辭ｱ貉ｯ繧偵し繝・→縺九￠縺ｦ閾ｭ縺ｿ繧貞叙繧九・,
      "骰九↓豌ｴ180ml縲∫區縺縺励・・蟆上＆縺・縲∝､ｧ譬ｹ繧貞・繧後※荳ｭ轣ｫ縺ｫ縺九￠繧九・,
      "螟ｧ譬ｹ縺碁上″騾壹▲縺溘ｉ魄ｭ繧貞刈縺医√い繧ｯ繧貞叙繧翫↑縺後ｉ蠑ｱ轣ｫ縺ｧ4縲・蛻・・縺ｦ蝪ｩ縺ｧ蜻ｳ繧定ｪｿ縺医ｋ縲・
    ]
  },
  {
    id: "soup_49",
    title: "螟ｧ譬ｹ縺ｨ縺ｵ繧薙ｏ繧頑ｲｹ謠壹￡縺ｮ縺ｻ縺｣縺薙ｊ蜻ｳ蝎梧ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "8蛻・,
    approxCostPerPerson: 25,
    tags: ["螟ｧ譬ｹ", "豐ｹ謠壹￡", "蜀ｬ縺ｮ譌ｬ", "蜥碁｢ｨ蝓ｺ譛ｬ"],
    containsDislikes: [],
    description: "蜀ｬ縺ｮ螟ｧ譬ｹ縺ｮ逕倥∩縺ｨ縲√♀蜃ｺ豎√ｒ縺溘▲縺ｷ繧雁性繧薙□豐ｹ謠壹￡縺ｮ邨・∩蜷医ｏ縺帙よｯ取律鬟ｲ縺ｿ縺溘￥縺ｪ繧句ｮ夂分荳ｭ縺ｮ螳夂分縲・,
    kidsTip: "螟ｧ譬ｹ繧定埋繧√・遏ｭ蜀雁・繧翫↓縺吶ｋ縺薙→縺ｧ譟斐ｉ縺九￥辣ｮ縺医∝ｭ蝉ｾ帙◆縺｡繧ゅせ繝励・繝ｳ縺ｧ縺吶￥縺｣縺ｦ螳碁｣溘＠縺ｾ縺吶・,
    tip: "螟ｧ譬ｹ縺ｮ闡峨′縺ゅｌ縺ｰ邏ｰ縺九￥蛻ｻ繧薙〒譛蠕後↓謨｣繧峨☆縺ｨ縲∝ｽｩ繧翫ｂ魄ｮ繧・°縺ｧ繝薙ち繝溘ΦC繧り｣懃ｵｦ縺ｧ縺阪∪縺吶・,
    ingredients: [
      { name: "螟ｧ譬ｹ", amount: 50, unit: "g", aisle: "驥手除" },
      { name: "豐ｹ謠壹￡", amount: 0.3, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蜻ｳ蝎・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縺ｯ遏ｭ蜀雁・繧翫↓縺励∵ｲｹ謠壹￡縺ｯ荳蜿｣螟ｧ縺ｫ蛻・ｋ縲・,
      "骰九↓豌ｴ180ml縺ｨ縺縺励・邏縲∝､ｧ譬ｹ繧貞・繧後※轣ｫ縺ｫ縺九￠縲∝､ｧ譬ｹ縺梧沐繧峨°縺上↑繧九∪縺ｧ辣ｮ繧九・,
      "豐ｹ謠壹￡繧貞刈縺医※縺ｲ縺ｨ辣ｮ遶九■縺輔○縲∫↓繧貞ｼｱ繧√※蜻ｳ蝎後ｒ貅ｶ縺榊・繧後ｋ縲・
    ]
  },
  {
    id: "soup_50",
    title: "逋ｽ闖懊→縺､繧九▽繧区丼髮ｨ縺ｮ荳ｭ闖ｯ縺溘∪縺斐せ繝ｼ繝・,
    category: "soup",
    cuisine: "chinese",
    season: "winter",
    time: "8蛻・,
    approxCostPerPerson: 30,
    tags: ["逋ｽ闖・, "譏･髮ｨ", "蜊ｵ譁咏炊", "荳ｭ闖ｯ繧ｹ繝ｼ繝・],
    containsDislikes: [],
    description: "縺ｨ繧阪→繧阪↓辣ｮ縺医◆逋ｽ闖懊→繝・Ν繝・Ν縺ｮ譏･髮ｨ縺後◆縺｣縺ｷ繧雁・縺｣縺溘∬ｻｽ鬟溘↓繧ゅ↑繧区ｺ雜ｳ蠎ｦ縺ｮ鬮倥＞荳ｭ闖ｯ繧ｹ繝ｼ繝励・,
    kidsTip: "繝ｩ繝ｼ繝｡繝ｳ縺ｮ繧医≧縺ｪ譏･髮ｨ縺ｮ繝・Ν繝・Ν鬟滓─縺悟ｭ蝉ｾ帙◆縺｡縺ｫ螟ｧ繧ｦ繧ｱ・√♀驥手除繧ゆｸ邱偵↓繝壹Ο繝ｪ縺ｨ鬟溘∋縺ｾ縺吶・,
    tip: "荵ｾ辯･譏･髮ｨ繧偵◎縺ｮ縺ｾ縺ｾ繧ｹ繝ｼ繝励↓蜈･繧後※辣ｮ霎ｼ繧縺薙→縺ｧ縲√♀蜃ｺ豎√・譌ｨ蜻ｳ繧呈丼髮ｨ縺後℃繧・▲縺ｨ蜷ｸ縺｣縺ｦ縺上ｌ縺ｾ縺吶・,
    ingredients: [
      { name: "逋ｽ闖・, amount: 60, unit: "g", aisle: "驥手除" },
      { name: "譏･髮ｨ・井ｹｾ辯･・・, amount: 10, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "蜊ｵ", amount: 0.5, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "逋ｽ闖懊・縺悶￥蛻・ｊ縺ｫ縺吶ｋ縲・,
      "骰九↓豌ｴ200ml縲・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏縲∫區闖懊ｒ蜈･繧後※轣ｫ縺ｫ縺九￠縲∫區闖懊′縺励ｓ縺ｪ繧翫☆繧九∪縺ｧ辣ｮ繧九・,
      "譏･髮ｨ繧偵◎縺ｮ縺ｾ縺ｾ蜉縺医∵沐繧峨°縺上↑縺｣縺溘ｉ貅ｶ縺榊嵯繧貞屓縺怜・繧後√＃縺ｾ豐ｹ繧貞桙繧峨＠縺ｦ轣ｫ繧呈ｭ｢繧√ｋ縲・
    ]
  },
  {
    id: "soup_51",
    title: "縺倥ｃ縺後＞繧ゅ→邇峨・縺弱・逕伜哨蜻ｳ蝎梧ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "8蛻・,
    approxCostPerPerson: 25,
    tags: ["縺倥ｃ縺後＞繧・, "邇峨・縺・, "蜥碁｢ｨ蝓ｺ譛ｬ", "縺ｻ縺上⊇縺・],
    containsDislikes: [],
    description: "邇峨・縺弱・閾ｪ辟ｶ縺ｪ逕倥∩縺ｨ縲√・繧ｯ繝帙け縺倥ｃ縺後＞繧ゅ・蜆ｪ縺励＞蜿｣蠖薙◆繧翫ょｭ蝉ｾ帙◆縺｡縺御ｸ逡ｪ螂ｽ縺阪↑縺雁袖蝎梧ｱ√・1縺､縲・,
    kidsTip: "縺願葛縺ｮ逕倥∩縺ｨ縺雁・豎√・鬥吶ｊ縺ｧ縲∵勸谿ｵ縺雁袖蝎梧ｱ√ｒ縺ゅ∪繧企｣ｲ縺ｾ縺ｪ縺・ｭ舌ｂ谿九＆縺夐｣ｲ縺ｿ蟷ｲ縺励∪縺吶・,
    tip: "縺倥ｃ縺後＞繧ゅｒ阮・ａ縺ｮ縺・■繧・≧蛻・ｊ縺ｫ縺吶ｋ縺薙→縺ｧ縲∫・蟠ｩ繧後★遏ｭ譎る俣縺ｧ譟斐ｉ縺九￥轣ｫ縺碁壹ｊ縺ｾ縺吶・,
    ingredients: [
      { name: "縺倥ｃ縺後＞繧・, amount: 0.5, unit: "蛟・, aisle: "驥手除" },
      { name: "邇峨・縺・, amount: 0.25, unit: "蛟・, aisle: "驥手除" },
      { name: "蜻ｳ蝎・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺倥ｃ縺後＞繧ゅ・縺・■繧・≧蛻・ｊ縲∫脂縺ｭ縺弱・阮・・繧翫↓縺吶ｋ縲・,
      "骰九↓豌ｴ180ml縲√□縺励・邏縲√§繧・′縺・ｂ縲∫脂縺ｭ縺弱ｒ蜈･繧後※轣ｫ縺ｫ縺九￠繧九・,
      "縺倥ｃ縺後＞繧ゅ′譟斐ｉ縺九￥縺ｪ繧九∪縺ｧ荳ｭ轣ｫ縺ｧ5蛻・・縺ｦ縲∫↓繧呈ｭ｢繧√※蜻ｳ蝎後ｒ貅ｶ縺榊・繧後ｋ縲・
    ]
  },
  {
    id: "soup_52",
    title: "繧ゅｄ縺励→繝九Λ縺ｮ荳ｭ闖ｯ縺斐∪蜻ｳ蝎後せ繝ｼ繝・,
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 25,
    tags: ["繧ゅｄ縺・, "繝九Λ", "雜・凾遏ｭ", "豼螳・],
    containsDislikes: [],
    description: "繧ゅｄ縺励→繝九Λ繧偵＃縺ｾ豐ｹ鬥吶ｋ蜻ｳ蝎御ｻ慕ｫ九※縺ｫ縲ゅΛ繝ｼ繝｡繝ｳ縺ｮ繧ｹ繝ｼ繝励・繧医≧縺ｪ豺ｱ縺・さ繧ｯ縺・蛻・〒螳梧・・・,
    kidsTip: "蜻ｳ蝎後→縺吶ｊ縺斐∪縺ｮ縺ｾ繧阪ｄ縺九↑繧ｹ繝ｼ繝嶺ｻ慕ｫ九※縺ｪ縺ｮ縺ｧ縲√Λ繝ｼ繝｡繝ｳ諢溯ｦ壹〒驥手除繧貞万繧薙〒鬟溘∋縺ｦ縺上ｌ縺ｾ縺吶・,
    tip: "繧ゅｄ縺励→繝九Λ縺ｯ轣ｫ縺碁壹ｊ繧・☆縺・・縺ｧ縲∵ｲｸ鬨ｰ縺励◆繧ｹ繝ｼ繝励↓蜈･繧後※繧ｵ繝・→1蛻・・繧九□縺代〒繧ｷ繝｣繧ｭ繧ｷ繝｣繧ｭ縺ｫ・・,
    ingredients: [
      { name: "繧ゅｄ縺・, amount: 50, unit: "g", aisle: "驥手除" },
      { name: "繝九Λ", amount: 0.2, unit: "譚・, aisle: "驥手除" },
      { name: "蜻ｳ蝎・, amount: 12, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺吶ｊ縺斐∪", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝九Λ縺ｯ3cm髟ｷ縺輔↓蛻・ｋ縲・,
      "蟆城豪縺ｫ豌ｴ180ml縲・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏蟆上＆縺・/2縲√ｂ繧・＠繧貞・繧後※辣ｮ遶九※繧九・,
      "繝九Λ繧貞刈縺医※繧ｵ繝・→辣ｮ縺ｦ轣ｫ繧貞ｼｱ繧√∝袖蝎後→縺吶ｊ縺斐∪繧呈ｺｶ縺榊・繧後√＃縺ｾ豐ｹ繧貞桙繧峨☆縲・
    ]
  },
  {
    id: "soup_53",
    title: "繧ｭ繝｣繝吶ヤ縺ｨ繝吶・繧ｳ繝ｳ縺ｮ豢矩｢ｨ繝溘Ν繧ｯ繧ｹ繝ｼ繝・,
    category: "soup",
    cuisine: "western",
    season: "all",
    time: "8蛻・,
    approxCostPerPerson: 40,
    tags: ["繧ｭ繝｣繝吶ヤ", "繝吶・繧ｳ繝ｳ", "迚帑ｹｳ", "豢矩｢ｨ螳夂分"],
    containsDislikes: [],
    description: "逕倥＞繧ｭ繝｣繝吶ヤ縺ｨ繝吶・繧ｳ繝ｳ縺ｮ蝪ｩ豌励ｒ迚帑ｹｳ縺ｮ蜆ｪ縺励＞繧ｳ繧ｯ縺ｧ蛹・∩霎ｼ繧薙□縲√⊇縺｣縺薙ｊ貂ｩ縺ｾ繧区ｴ矩｢ｨ繧ｹ繝ｼ繝励・,
    kidsTip: "繧ｷ繝√Η繝ｼ縺ｮ繧医≧縺ｪ繝溘Ν繧ｭ繝ｼ縺ｪ逕倥∩縺ｧ縲∝ｭ蝉ｾ帙◆縺｡縺ｫ蝨ｧ蛟堤噪縺ｪ莠ｺ豌励ｒ隱・ｋ繧ｹ繝ｼ繝励Γ繝九Η繝ｼ縲・,
    tip: "迚帑ｹｳ繧貞刈縺医◆蠕後・豐ｸ鬨ｰ縺輔○縺ｪ縺・ｈ縺・↓蠑ｱ轣ｫ縺ｧ繧ｳ繝医さ繝域ｸｩ繧√ｋ縺ｨ縲∬・縺悟ｼｵ繧峨★貊代ｉ縺九↓莉穂ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "繧ｭ繝｣繝吶ヤ", amount: 50, unit: "g", aisle: "驥手除" },
      { name: "繝上・繝輔・繝ｼ繧ｳ繝ｳ", amount: 1, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "迚帑ｹｳ", amount: 80, unit: "ml", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ｳ繝ｳ繧ｽ繝｡", amount: 2, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ｭ繝｣繝吶ヤ縺ｯ荳蜿｣螟ｧ縲√・繝ｼ繧ｳ繝ｳ縺ｯ1cm蟷・↓蛻・ｋ縲・,
      "蟆城豪縺ｫ豌ｴ80ml縲√さ繝ｳ繧ｽ繝｡縲√・繝ｼ繧ｳ繝ｳ縲√く繝｣繝吶ヤ繧貞・繧後※轣ｫ縺ｫ縺九￠縲√く繝｣繝吶ヤ縺梧沐繧峨°縺上↑繧九∪縺ｧ辣ｮ繧九・,
      "迚帑ｹｳ繧貞刈縺医∝ｼｱ轣ｫ縺ｧ豐ｸ鬨ｰ逶ｴ蜑阪∪縺ｧ貂ｩ繧√∝｡ｩ縺薙＠繧・≧縺ｧ蜻ｳ繧定ｪｿ縺医ｋ縲・
    ]
  },
  {
    id: "soup_54",
    title: "蟆乗收闖懊→豐ｹ謠壹￡縺ｮ縺雁袖蝎梧ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "6蛻・,
    approxCostPerPerson: 25,
    tags: ["蟆乗收闖・, "豐ｹ謠壹￡", "蜥碁｢ｨ蝓ｺ譛ｬ", "繧ｫ繝ｫ繧ｷ繧ｦ繝"],
    containsDislikes: [],
    description: "髱偵・→縺励◆蟆乗收闖懊・繧ｷ繝｣繧ｭ繝・→縺励◆鬟滓─縺ｨ豐ｹ謠壹￡縺ｮ繧ｳ繧ｯ縲ゅ♀蜃ｺ豎√・鬥吶ｊ縺悟ｺ・′繧句ｮ夂分蜻ｳ蝎梧ｱ√・,
    kidsTip: "蟆乗收闖懊・繧｢繧ｯ縺悟ｰ代↑縺・・縺ｧ荳玖源縺ｧ荳崎ｦ・ｼ√♀蜻ｳ蝎後・逕倥∩縺ｧ闡臥黄驥手除繧らｾ主袖縺励￥鬟溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "蟆乗收闖懊・闡峨・轣ｫ縺碁壹ｊ繧・☆縺・・縺ｧ縲∬月繧貞・縺ｫ蜈･繧後※縺九ｉ譛蠕後↓闡峨ｒ蜉縺医ｋ縺ｨ鬟滓─縺檎ｶｺ鮗励↓谿九ｊ縺ｾ縺吶・,
    ingredients: [
      { name: "蟆乗收闖・, amount: 40, unit: "g", aisle: "驥手除" },
      { name: "豐ｹ謠壹￡", amount: 0.3, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蜻ｳ蝎・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蟆乗收闖懊・3cm髟ｷ縺輔↓蛻・ｊ縲∵ｲｹ謠壹￡縺ｯ遏ｭ蜀雁・繧翫↓縺吶ｋ縲・,
      "骰九↓豌ｴ180ml縺ｨ縺縺励・邏縲∵ｲｹ謠壹￡繧貞・繧後※轣ｫ縺ｫ縺九￠繧九・,
      "蟆乗收闖懊ｒ蜉縺医※2蛻・・縺ｦ轣ｫ繧呈ｭ｢繧√∝袖蝎後ｒ貅ｶ縺榊・繧後ｋ縲・
    ]
  },
  {
    id: "soup_55",
    title: "縺ｨ繧阪→繧阪が繝九が繝ｳ繧ｹ繝ｼ繝・繝代そ繝ｪ鬚ｨ蜻ｳ",
    category: "soup",
    cuisine: "western",
    season: "all",
    time: "10蛻・,
    approxCostPerPerson: 25,
    tags: ["邇峨・縺・, "繧ｳ繝ｳ繧ｽ繝｡", "雜・凾遏ｭ", "豢矩｢ｨ蝓ｺ譛ｬ"],
    containsDislikes: [],
    description: "阮・・繧顔脂縺ｭ縺弱ｒ縺倥▲縺上ｊ轤偵ａ縺ｦ逕倥∩繧貞ｼ輔″蜃ｺ縺励◆縲√す繝ｳ繝励Ν縺ｪ縺後ｉ豺ｱ縺ｿ縺ｮ縺ゅｋ繧ｪ繝九が繝ｳ繧ｹ繝ｼ繝励・,
    kidsTip: "邇峨・縺弱・霎帛袖縺悟ｮ悟・縺ｫ豸医∴縺ｦ逕倥￥縺ｨ繧阪→繧阪↓縺ｪ繧翫√ヱ繝ｳ繧呈ｵｸ縺励※鬟溘∋繧九→蟄蝉ｾ帙◆縺｡繧ょ､ｧ豁灘万・・,
    tip: "邇峨・縺弱ｒ轤偵ａ繧句燕縺ｫ繝ｬ繝ｳ繧ｸ縺ｧ1蛻・メ繝ｳ縺励※縺翫￥縺ｨ縲・ｩ壹￥縺ｻ縺ｩ遏ｭ譎る俣縺ｧ鬟ｴ濶ｲ縺ｮ逕倥∩縺悟・縺帙∪縺吶・,
    ingredients: [
      { name: "邇峨・縺・, amount: 0.4, unit: "蛟・, aisle: "驥手除" },
      { name: "繧ｳ繝ｳ繧ｽ繝｡", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "繝舌ち繝ｼ", amount: 3, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "邇峨・縺弱・阮・・繧翫↓縺吶ｋ縲・,
      "蟆城豪縺ｫ繝舌ち繝ｼ繧堤・縺励∫脂縺ｭ縺弱′騾上″騾壹ｋ縺ｾ縺ｧ荳ｭ轣ｫ縺ｧ縺励▲縺九ｊ轤偵ａ繧九・,
      "豌ｴ180ml縲√さ繝ｳ繧ｽ繝｡縲・・豐ｹ蟆代・ｒ蜉縺医※5蛻・・縺ｦ縲∝｡ｩ縺薙＠繧・≧縺ｧ蜻ｳ繧定ｪｿ縺医ｋ縲・
    ]
  },
  {
    id: "soup_56",
    title: "縺｡縺上ｏ縺ｨ縺願ｱ・・縺ｮ蜆ｪ縺励＞蜥碁｢ｨ縺吶∪縺玲ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 25,
    tags: ["縺｡縺上ｏ", "譛ｨ邯ｿ雎・・", "縺吶∪縺玲ｱ・, "雜・凾遏ｭ"],
    containsDislikes: [],
    description: "縺｡縺上ｏ縺九ｉ縺倥ｓ繧上ｊ譟薙∩蜃ｺ繧狗ｷｴ繧顔黄縺ｮ譌ｨ蜻ｳ縺ｨ縺雁・豎√・隱ｿ蜥後ゅ♀蜻ｳ蝎梧ｱ√′邯壹＞縺滓凾縺ｮ縺ゅ▲縺輔ｊ螟牙喧逅・↓縲・,
    kidsTip: "縺雁袖蝎梧ｱ√ｈ繧翫ｂ縺ゅ▲縺輔ｊ荳雁刀縺ｪ蜿｣蠖薙◆繧翫〒縲√♀蜃ｺ豎√ｒ蜷ｸ縺｣縺溘■縺上ｏ縺悟､ｧ莠ｺ豌励〒縺吶・,
    tip: "逋ｽ縺縺励ｒ菴ｿ縺医・蜻ｳ莉倥￠荳逋ｺ・∵怙蠕後↓荳峨▽闡峨ｄ蛻ｻ縺ｿ繝阪ぐ繧呈ｷｻ縺医ｋ縺ｨ譁吩ｺｭ鬚ｨ縺ｫ莉穂ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "縺｡縺上ｏ", amount: 1, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "譛ｨ邯ｿ雎・・", amount: 40, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "逋ｽ縺縺・, amount: 15, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺｡縺上ｏ縺ｯ阮・＞霈ｪ蛻・ｊ縲∬ｱ・・縺ｯ1cm隗偵↓蛻・ｋ縲・,
      "蟆城豪縺ｫ豌ｴ180ml縲∫區縺縺励・・蟆上＆縺・繧貞・繧後※轣ｫ縺ｫ縺九￠繧九・,
      "辣ｮ遶九▲縺溘ｉ縺｡縺上ｏ縺ｨ雎・・繧貞刈縺医∝ｼｱ轣ｫ縺ｧ2蛻・ｸｩ繧√※轣ｫ繧呈ｭ｢繧√ｋ縲・
    ]
  },
  {
    id: "soup_57",
    title: "縺ｻ縺・ｌ繧楢拷縺ｨ縺ｵ繧薙ｏ繧雁嵯縺ｮ繧ｳ繝ｳ繧ｽ繝｡繧ｹ繝ｼ繝・,
    category: "soup",
    cuisine: "western",
    season: "winter",
    time: "6蛻・,
    approxCostPerPerson: 35,
    tags: ["縺ｻ縺・ｌ繧楢拷", "蜊ｵ譁咏炊", "蜀ｬ縺ｮ譌ｬ", "豢矩｢ｨ"],
    containsDislikes: [],
    description: "蜀ｬ縺ｮ逕倥＞縺ｻ縺・ｌ繧楢拷縺ｨ縲√・繧薙ｏ繧頑ｺｶ縺榊嵯縺ｮ繧ｳ繝ｳ繝医Λ繧ｹ繝医′鄒弱＠縺・・､翫ヰ繝ｩ繝ｳ繧ｹ謚懃ｾ､縺ｮ豢矩｢ｨ繧ｹ繝ｼ繝励・,
    kidsTip: "蜊ｵ縺ｧ縺ｻ縺・ｌ繧楢拷縺悟桁縺ｾ繧後ｋ縺薙→縺ｧ縺医＄縺ｿ縺悟・縺上↑縺上↑繧翫∝ｽｩ繧翫ｂ邯ｺ鮗励〒蟄蝉ｾ帙ｂ螟ｧ螂ｽ縺阪↑繧ｹ繝ｼ繝励・,
    tip: "繧ｹ繝ｼ繝励′縺励▲縺九ｊ豐ｸ鬨ｰ縺励※縺・ｋ縺ｨ縺薙ｍ縺ｫ蜊ｵ豸ｲ繧貞ｰ代＠縺壹▽豬√＠蜈･繧後ｋ縺ｨ縲√ヵ繝ｯ繝輔Ρ縺ｮ邯ｺ鮗励↑莉穂ｸ翫′繧翫↓縲・,
    ingredients: [
      { name: "縺ｻ縺・ｌ繧楢拷", amount: 35, unit: "g", aisle: "驥手除" },
      { name: "蜊ｵ", amount: 0.5, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "繧ｳ繝ｳ繧ｽ繝｡", amount: 2.5, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺ｻ縺・ｌ繧楢拷縺ｯ辭ｱ貉ｯ縺ｧ繧ｵ繝・→闌ｹ縺ｧ縺ｦ豌ｴ豌励ｒ邨槭ｊ縲・cm髟ｷ縺輔↓蛻・ｋ縲・,
      "骰九↓豌ｴ180ml縲√さ繝ｳ繧ｽ繝｡縲・・豐ｹ蟆代・ｒ蜈･繧後※豐ｸ鬨ｰ縺輔○繧九・,
      "縺ｻ縺・ｌ繧楢拷繧貞・繧後∵ｺｶ縺榊嵯繧堤ｴｰ縺丞屓縺怜・繧後※縺ｵ繧薙ｏ繧頑ｵｮ縺・◆繧臥↓繧呈ｭ｢繧√ｋ縲・
    ]
  },
  {
    id: "soup_58",
    title: "譬ｹ闖懊◆縺｣縺ｷ繧奇ｼ√＃縺ｼ縺・→莠ｺ蜿ゅ・縺代ｓ縺｡繧捺ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "15蛻・,
    approxCostPerPerson: 35,
    tags: ["縺斐⊂縺・, "螟ｧ譬ｹ", "莠ｺ蜿・, "蜥碁｢ｨ蝓ｺ譛ｬ", "鬟溽黄郢顔ｶｭ"],
    containsDislikes: [],
    description: "縺斐∪豐ｹ縺ｧ轤偵ａ縺溘＃縺ｼ縺・∝､ｧ譬ｹ縲∽ｺｺ蜿ゅ∬ｱ・・繧偵♀驢､豐ｹ莉慕ｫ九※縺ｮ縺雁・豎√〒辣ｮ霎ｼ繧薙□莨晉ｵｱ縺ｮ蛛･蠎ｷ豎∫黄縲・,
    kidsTip: "譬ｹ闖懊ｒ縺斐∪豐ｹ縺ｧ縺励▲縺九ｊ轤偵ａ縺ｦ縺九ｉ辣ｮ繧九・縺ｧ鬥吶・縺励￥縲√♀驥手除縺ｮ逕倥∩縺悟ｼ輔″遶九■縺ｾ縺吶・,
    tip: "閧峨′蜈･縺｣縺ｦ縺・↑縺上※繧ゅ√＃縺ｾ豐ｹ縺ｧ轤偵ａ繧九％縺ｨ縺ｧ縺願ｉ縺ｫ雋縺代↑縺・ｷｱ縺・さ繧ｯ縺悟・縺ｾ縺吶・,
    ingredients: [
      { name: "縺斐⊂縺・, amount: 25, unit: "g", aisle: "驥手除" },
      { name: "螟ｧ譬ｹ", amount: 30, unit: "g", aisle: "驥手除" },
      { name: "莠ｺ蜿・, amount: 15, unit: "g", aisle: "驥手除" },
      { name: "譛ｨ邯ｿ雎・・", amount: 30, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ }
    ],
    instructions: [
      "縺斐⊂縺・・縺輔＆縺後″縲∝､ｧ譬ｹ縺ｨ莠ｺ蜿ゅ・縺・■繧・≧蛻・ｊ縺ｫ縺吶ｋ縲・,
      "骰九↓縺斐∪豐ｹ繧堤・縺励√＃縺ｼ縺・∝､ｧ譬ｹ縲∽ｺｺ蜿ゅｒ縺励ｓ縺ｪ繧翫☆繧九∪縺ｧ荳ｭ轣ｫ縺ｧ轤偵ａ繧九・,
      "豌ｴ180ml縲√□縺励・邏縲・・豐ｹ螟ｧ縺輔§1縲√∩繧翫ｓ蟆上＆縺・縲∝ｴｩ縺励◆雎・・繧貞刈縺医・㍽闖懊′譟斐ｉ縺九￥縺ｪ繧九∪縺ｧ辣ｮ繧九・
    ]
  },
  {
    id: "soup_59",
    title: "繝ｬ繝ｳ繧ｳ繝ｳ縺ｨ逕溷ｧ懊・縺ｽ縺九⊃縺句袖蝎梧ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "8蛻・,
    approxCostPerPerson: 30,
    tags: ["繝ｬ繝ｳ繧ｳ繝ｳ", "遘九・譌ｬ", "逕溷ｧ・, "蜀ｷ縺域ｧ莠磯亟"],
    containsDislikes: [],
    description: "縺吶ｊ縺翫ｍ縺励Ξ繝ｳ繧ｳ繝ｳ縺ｨ阮・・繧翫Ξ繝ｳ繧ｳ繝ｳ縺ｮ2縺､縺ｮ鬟滓─・∫函蟋懊・鬥吶ｊ縺ｧ蟇偵＞譌･縺ｮ蜀ｷ縺医ｒ蜷ｹ縺埼｣帙・縺吝▼蠎ｷ蜻ｳ蝎梧ｱ√・,
    kidsTip: "繝ｬ繝ｳ繧ｳ繝ｳ縺ｮ閾ｪ辟ｶ縺ｪ縺ｨ繧阪∩縺後♀豎√↓貅ｶ縺題ｾｼ縺ｿ縲√∪繧阪ｄ縺九〒蜆ｪ縺励＞蜿｣蠖薙◆繧翫↓縺ｪ繧翫∪縺吶・,
    tip: "繝ｬ繝ｳ繧ｳ繝ｳ縺ｮ荳驛ｨ繧偵☆繧翫♀繧阪＠縺ｦ蜉縺医ｋ縺ｨ縲√♀蜻ｳ蝎梧ｱ√↓縺ｨ繧阪∩縺後▽縺・※蜀ｷ繧√↓縺上￥菫晄ｸｩ蜉ｹ譫懈栢鄒､・・,
    ingredients: [
      { name: "繝ｬ繝ｳ繧ｳ繝ｳ", amount: 40, unit: "g", aisle: "驥手除" },
      { name: "豐ｹ謠壹￡", amount: 0.3, unit: "譫・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蜻ｳ蝎・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繝ｬ繝ｳ繧ｳ繝ｳ縺ｯ蜊雁・繧定埋蛻・ｊ縺ｫ縺励∝濠蛻・ｒ縺吶ｊ縺翫ｍ縺吶よｲｹ謠壹￡縺ｯ遏ｭ蜀雁・繧翫↓縺吶ｋ縲・,
      "骰九↓豌ｴ180ml縲√□縺励・邏縲∬埋蛻・ｊ繝ｬ繝ｳ繧ｳ繝ｳ縲√☆繧翫♀繧阪＠繝ｬ繝ｳ繧ｳ繝ｳ縲∵ｲｹ謠壹￡繧貞・繧後※轣ｫ縺ｫ縺九￠繧九・,
      "3蛻・・縺ｦ繝ｬ繝ｳ繧ｳ繝ｳ縺ｫ轣ｫ縺碁壹▲縺溘ｉ轣ｫ繧貞ｼｱ繧√√♀繧阪＠逕溷ｧ懷ｰ代・→蜻ｳ蝎後ｒ貅ｶ縺榊・繧後ｋ縲・
    ]
  },
  {
    id: "soup_60",
    title: "繧ｫ繝九き繝槭→縺願ｱ・・縺ｮ荳ｭ闖ｯ鬚ｨ縺九″邇峨せ繝ｼ繝・,
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "5蛻・,
    approxCostPerPerson: 30,
    tags: ["繧ｫ繝九き繝・, "譛ｨ邯ｿ雎・・", "蜊ｵ譁咏炊", "雜・凾遏ｭ"],
    containsDislikes: [],
    description: "繧ｫ繝九・譌ｨ蜻ｳ縺後℃繧・▲縺ｨ隧ｰ縺ｾ縺｣縺溘き繝九き繝槭→雎・・縲∝嵯縺ｮ蠖ｩ繧願ｱ翫°縺ｪ荳ｭ闖ｯ繧ｹ繝ｼ繝励・蛻・〒繝励Ο縺ｮ蜻ｳ縲・,
    kidsTip: "繧ｫ繝九き繝槭・襍､縺ｨ蜊ｵ縺ｮ鮟・牡縺ｧ隕九◆逶ｮ繧り庄繧・°・√→繧阪→繧咲・縲・〒蟄蝉ｾ帙◆縺｡縺ｮ螟ｧ螂ｽ迚ｩ繧ｹ繝ｼ繝励〒縺吶・,
    tip: "繧ｹ繝ｼ繝励↓縺ｨ繧阪∩繧偵▽縺代※縺九ｉ貅ｶ縺榊嵯繧貞・繧後ｋ縺薙→縺ｧ縲∝嵯縺後・繧上▲縺ｨ髮ｲ縺ｮ繧医≧縺ｫ豬ｮ縺堺ｸ翫′繧翫∪縺吶・,
    ingredients: [
      { name: "繧ｫ繝九き繝・, amount: 1.5, unit: "譛ｬ", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "譛ｨ邯ｿ雎・・", amount: 40, unit: "g", aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "蜊ｵ", amount: 0.5, unit: "蛟・, aisle: "螟ｧ雎・・荵ｳ繝ｻ蜉蟾･蜩・ },
      { name: "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "繧ｫ繝九き繝槭・謇九〒縺ｻ縺舌＠縲∬ｱ・・縺ｯ1cm隗偵↓蛻・ｋ縲・,
      "骰九↓豌ｴ180ml縲・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏縲√き繝九き繝槭∬ｱ・・繧貞・繧後※轣ｫ縺ｫ縺九￠縲∵ｰｴ貅ｶ縺咲援譬礼ｲ峨〒縺ｨ繧阪∩繧偵▽縺代ｋ縲・,
      "豐ｸ鬨ｰ縺励◆縺ｨ縺薙ｍ縺ｫ貅ｶ縺榊嵯繧貞屓縺怜・繧後√・繧上▲縺ｨ豬ｮ縺・※縺阪◆繧峨＃縺ｾ豐ｹ蟆代・ｒ蜉縺医※轣ｫ繧呈ｭ｢繧√ｋ縲・
    ]
  },
  {
    id: "soup_61",
    title: "縺輔▽縺ｾ縺・ｂ縺ｨ逋ｽ闖懊・縺ｻ縺上⊇縺丞袖蝎梧ｱ・,
    category: "soup",
    cuisine: "japanese",
    season: "autumn",
    time: "8蛻・,
    approxCostPerPerson: 30,
    tags: ["縺輔▽縺ｾ縺・ｂ", "逋ｽ闖・, "遘九・譌ｬ", "縺ｻ縺上⊇縺・],
    containsDislikes: [],
    description: "遘九・縺輔▽縺ｾ縺・ｂ縺ｮ閾ｪ辟ｶ縺ｪ逕倥∩縺ｨ縲√ヨ繝ｭ繝医Ο縺ｫ辣ｮ縺医◆逋ｽ闖懊′蜆ｪ縺励＞繝上・繝｢繝九・繧貞･上〒繧句ｭ｣遽縺ｮ蜻ｳ蝎梧ｱ√・,
    kidsTip: "縺輔▽縺ｾ縺・ｂ縺ｮ縺願葛縺ｮ逕倥∩縺後＠縺｣縺九ｊ貅ｶ縺題ｾｼ繧薙〒縲∫曝蜿｣縺ｧ縺雁ｭ先ｧ倥↓螟ｧ莠ｺ豌励・荳譚ｯ縲・,
    tip: "縺輔▽縺ｾ縺・ｂ縺ｯ阮・ａ縺ｮ蜊頑怦蛻・ｊ縺ｫ縺吶ｋ縺薙→縺ｧ縲∫洒譎る俣縺ｧ繝帙け繝帙け縺ｫ辣ｮ荳翫′繧翫∪縺吶・,
    ingredients: [
      { name: "縺輔▽縺ｾ縺・ｂ", amount: 35, unit: "g", aisle: "驥手除" },
      { name: "逋ｽ闖・, amount: 40, unit: "g", aisle: "驥手除" },
      { name: "蜻ｳ蝎・, amount: 15, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "縺輔▽縺ｾ縺・ｂ縺ｯ7mm蜴壹＆縺ｮ蜊頑怦蛻・ｊ縺ｫ縺励※豌ｴ縺ｫ縺輔ｉ縺励∫區闖懊・縺悶￥蛻・ｊ縺ｫ縺吶ｋ縲・,
      "骰九↓豌ｴ180ml縲√□縺励・邏縲√＆縺､縺ｾ縺・ｂ縲∫區闖懊ｒ蜈･繧後※轣ｫ縺ｫ縺九￠繧九・,
      "縺輔▽縺ｾ縺・ｂ縺ｫ轣ｫ縺碁壹ｊ譟斐ｉ縺九￥縺ｪ縺｣縺溘ｉ轣ｫ繧貞ｼｱ繧√∝袖蝎後ｒ貅ｶ縺榊・繧後ｋ縲・
    ]
  },
  {
    id: "soup_62",
    title: "縺溘▲縺ｷ繧翫Ρ繧ｫ繝｡縺ｨ逋ｽ縺斐∪縺ｮ鬥吶・縺嶺ｸｭ闖ｯ繧ｹ繝ｼ繝・,
    category: "soup",
    cuisine: "chinese",
    season: "all",
    time: "4蛻・,
    approxCostPerPerson: 20,
    tags: ["荵ｾ辯･繧上°繧・, "雜・凾遏ｭ", "豼螳・, "荳ｭ闖ｯ繧ｹ繝ｼ繝・],
    containsDislikes: [],
    description: "辟ｼ閧牙ｱ九＆繧薙〒縺翫↑縺倥∩縺ｮ繝ｯ繧ｫ繝｡繧ｹ繝ｼ繝励ｒ縺泌ｮｶ蠎ｭ縺ｧ・√＃縺ｾ豐ｹ縺ｨ縺吶ｊ縺斐∪縺ｮ鬥吶・縺励＆縺碁｣滓ｬｲ繧貞絢豼縺励∪縺吶・,
    kidsTip: "繝・Ν繝・Ν縺励◆繝ｯ繧ｫ繝｡縺ｨ縺斐∪豐ｹ縺ｮ鬚ｨ蜻ｳ縺ｧ縲∝ｭ蝉ｾ帙◆縺｡繧ゅせ繝ｼ繝励ｒ縺斐￥縺斐￥鬟ｲ繧薙〒縺上ｌ縺ｾ縺吶・,
    tip: "縺頑､縺ｫ蜈ｷ譚舌→隱ｿ蜻ｳ譁吶ｒ蜈･繧後※辭ｱ貉ｯ繧呈ｳｨ縺舌□縺代〒繧ゆｽ懊ｌ繧九∫ｩｶ讌ｵ縺ｮ繧ｦ繝ｫ繝医Λ譎ら洒繧ｹ繝ｼ繝暦ｼ・,
    ingredients: [
      { name: "荵ｾ辯･繧上°繧・, amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "鮓上ぎ繝ｩ繧ｹ繝ｼ繝励・邏", amount: 3, unit: "g", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ },
      { name: "縺斐∪豐ｹ", amount: 3, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "蟆城豪縺ｫ豌ｴ180ml縲・ｶ上ぎ繝ｩ繧ｹ繝ｼ繝励・邏縲・・豐ｹ蟆上＆縺・/2繧貞・繧後※轣ｫ縺ｫ縺九￠繧九・,
      "荵ｾ辯･繧上°繧√ｒ蜉縺医・蛻・ｼｱ轣ｫ縺ｧ辣ｮ繧九・,
      "轣ｫ繧呈ｭ｢繧√※縺斐∪豐ｹ繧貞屓縺怜・繧後√◆縺｣縺ｷ繧翫・逋ｽ縺・ｊ縺斐∪繧呈険繧九・
    ]
  },
  {
    id: "soup_63",
    title: "逋ｽ闖懊→繝・リ縺ｮ譌ｨ蜻ｳ逕溷ｧ懊せ繝ｼ繝・,
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "8蛻・,
    approxCostPerPerson: 35,
    tags: ["逋ｽ闖・, "繝・リ郛ｶ", "蜀ｬ縺ｮ譌ｬ", "逕溷ｧ・, "鬲・],
    containsDislikes: ["鬲・],
    description: "繝・リ郛ｶ縺ｮ繧ｪ繧､繝ｫ縺ｨ縺雁・豎√′逋ｽ闖懊↓縺励▲縺九ｊ譟薙∩霎ｼ繧薙□縲∵葎蜻ｳ縺溘▲縺ｷ繧翫・鬟溘∋繧句柱鬚ｨ繧ｹ繝ｼ繝励・,
    kidsTip: "繝・リ縺ｮ蜃ｺ豎√′蜉ｹ縺・※縺・ｋ縺ｮ縺ｧ繧ｳ繝ｳ繧ｽ繝｡繧・□縺励・邏縺悟ｰ代↑縺上※繧ょ袖縺梧ｱｺ縺ｾ繧翫∝ｭ蝉ｾ帙え繧ｱ謚懃ｾ､縲・,
    tip: "逕溷ｧ懊ｒ蟆代＠蜉縺医ｋ縺薙→縺ｧ繝・リ縺ｮ蠕悟袖縺後＆縺｣縺ｱ繧翫＠縲∬ｺｫ菴薙ｂ貂ｩ縺ｾ繧翫∪縺吶・,
    ingredients: [
      { name: "逋ｽ闖・, amount: 60, unit: "g", aisle: "驥手除" },
      { name: "繝・リ郛ｶ", amount: 0.25, unit: "郛ｶ", aisle: "閧峨・鬲・ },
      { name: "逋ｽ縺縺・, amount: 12, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "逋ｽ闖懊・鬟溘∋繧・☆縺・＊縺丞・繧翫↓縺吶ｋ縲・,
      "蟆城豪縺ｫ豌ｴ180ml縲∫區縺縺励√♀繧阪＠逕溷ｧ懷ｰ代・∫區闖懊√ヤ繝顔ｼｶ・域ｲｹ縺斐→・峨ｒ蜈･繧後※轣ｫ縺ｫ縺九￠繧九・,
      "繝輔ち繧偵＠縺ｦ荳ｭ蠑ｱ轣ｫ縺ｧ邏・蛻・∫區闖懊′繧ｯ繧ｿ繧ｯ繧ｿ縺ｫ譟斐ｉ縺九￥縺ｪ繧九∪縺ｧ辣ｮ繧九・
    ]
  },
  {
    id: "soup_64",
    title: "謇倶ｽ懊ｊ鮓丞屮蟄舌→螟ｧ譬ｹ縺ｮ鬟溘∋繧狗ｯ邏・せ繝ｼ繝・,
    category: "soup",
    cuisine: "japanese",
    season: "winter",
    time: "15蛻・,
    approxCostPerPerson: 45,
    tags: ["鮓上・縺崎ｉ", "螟ｧ譬ｹ", "蜀ｬ縺ｮ譌ｬ", "鬟溘∋繧九せ繝ｼ繝・],
    containsDislikes: [],
    description: "繧ｹ繝励・繝ｳ縺ｧ關ｽ縺ｨ縺吶□縺代・邁｡蜊倥・繧上・繧城ｶ丞屮蟄舌→螟ｧ譬ｹ縺ｮ繧ｹ繝ｼ繝励ゆｸｻ闖懊↓繧ょ源謨ｵ縺吶ｋ螟ｧ貅雜ｳ縺ｮ鬟溘∋縺斐◆縺医・,
    kidsTip: "縺ｵ繧上・繧上・譟斐ｉ縺九＞閧牙屮蟄舌′螟ｧ莠ｺ豌暦ｼ√♀閧峨・蜃ｺ豎√′螟ｧ譬ｹ縺ｫ譟薙∩縺ｦ驥手除繧ゅ◆縺｣縺ｷ繧企｣溘∋繧峨ｌ縺ｾ縺吶・,
    tip: "鮓上・縺崎ｉ縺ｫ逕溷ｧ懊→迚・礼ｲ峨∝｡ｩ繧呈ｷｷ縺懊※繧ｹ繝励・繝ｳ縺ｧ關ｽ縺ｨ縺吶□縺代よ焔繧よｱ壹ｌ縺夂洒譎る俣縺ｧ菴懊ｌ縺ｾ縺吶・,
    ingredients: [
      { name: "鮓上・縺崎ｉ", amount: 35, unit: "g", aisle: "閧峨・鬲・ },
      { name: "螟ｧ譬ｹ", amount: 40, unit: "g", aisle: "驥手除" },
      { name: "驢､豐ｹ", amount: 8, unit: "ml", aisle: "隱ｿ蜻ｳ譁吶・縺昴・莉・ }
    ],
    instructions: [
      "螟ｧ譬ｹ縺ｯ遏ｭ蜀雁・繧翫↓縺吶ｋ縲ゅ・繧ｦ繝ｫ縺ｧ鮓上・縺崎ｉ縲∫援譬礼ｲ牙ｰ上＆縺・縲・・蟆代・∝｡ｩ繧偵ｈ縺冗ｷｴ繧雁粋繧上○繧九・,
      "骰九↓豌ｴ180ml縲√□縺励・邏縲・・豐ｹ縲√∩繧翫ｓ蟆上＆縺・縲∝､ｧ譬ｹ繧貞・繧後※辣ｮ遶九※繧九・,
      "繧ｹ繝励・繝ｳ縺ｧ鮓上・縺崎ｉ繧剃ｸ蜿｣螟ｧ縺ｫ縺吶￥縺｣縺ｦ關ｽ縺ｨ縺怜・繧後√い繧ｯ繧貞叙繧翫↑縺後ｉ蠑ｱ轣ｫ縺ｧ5蛻・・繧九・
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