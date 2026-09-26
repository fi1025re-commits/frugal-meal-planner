// 子育て家庭向け食費節約アプリ コアロジック (app.js)

// アプリ全体の状態
const state = {
  servings: 3, // デフォルト3人（1〜7人対応、一般的な子育て世帯標準）
  targetBudget: 4500, // 1週間の目標予算（円）初期値（3人前目安）
  weeklyPlan: null, // { mon: { main: id, side: id, soup: id }, ... }
  checkedItems: {}, // { '合挽き肉_g': true, ... }
  childrenCount: 1, // お子様の人数 (0〜5人、デフォルト1人)
  childrenPreferences: {
    child1: { dislikes: [], disabledFlavors: [] }
  },
  activeChildTab: 'child1',
  familySyncCode: '', // 夫婦間共有合言葉 (例: tanaka55)
  syncDocId: '', // クラウド同期オブジェクトID
  syncStatus: 'disconnected', // 'disconnected' | 'connected' | 'syncing' | 'error'
  lastSyncTime: 0,
  hasCompletedOnboarding: false, // 初回アンケート完了フラグ
  activeTab: 'weekly', // 'weekly' | 'shopping' | 'recipes'
  searchQuery: '',
  selectedCategory: 'all', // 'all' | 'main' | 'side' | 'soup'
  selectedCuisine: 'all', // 'all' | 'japanese' | 'western' | 'chinese'
  selectedDayFilter: 'all', // 'all' | 'mon' | 'tue' ...
  recipeBookMode: 'weekly', // 'weekly' | 'all'
  detailRecipe: null,
  changeTarget: null, // { dayId: 'mon', category: 'main' }
  shoppingDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  favoriteRecipeIds: [], // ['main_01', 'main_24', ...]
  historyRecipeIds: [], // 直近30日以内に登場したレシピIDリスト（重複防止用）
  selectedSeason: 'all', // 'all' | 'spring' | 'summer' | 'autumn' | 'winter'
  showFavoritesOnly: false, // お気に入りのみ表示フラグ
  showBlacklistedOnly: false, // 除外（NG）レシピのみ表示フラグ
  cookedDays: [], // ['mon', ...] 今日作った曜日
  blacklistedRecipeIds: [], // ['main_02', ...] 献立除外レシピID
  customRecipes: [], // ユーザーが追加登録した外部・オリジナルレシピ
  hideSeasonings: false, // 基本調味料（常備品）を隠すフラグ
  customShoppingItems: [] // 自由に追加した買い足しメモ [{ id, name, isChecked }]
};

// LocalStorage キー
const STORAGE_KEY_PLAN = 'frugal_weekly_plan_v8';
const STORAGE_KEY_SERVINGS = 'frugal_servings_v3';
const STORAGE_KEY_BUDGET = 'frugal_target_budget_v3';
const STORAGE_KEY_CHECKED = 'frugal_checked_items_v3';
const STORAGE_KEY_DISLIKES = 'frugal_disliked_ingredients_v3';
const STORAGE_KEY_CHILDREN_COUNT = 'frugal_children_count_v1';
const STORAGE_KEY_CHILDREN_PREF = 'frugal_children_pref_v3';
const STORAGE_KEY_SYNC_CODE = 'frugal_sync_family_code_v1';
const STORAGE_KEY_SYNC_DOC_ID = 'frugal_sync_doc_id_v1';
const STORAGE_KEY_ONBOARDING = 'frugal_onboarding_completed_v3';
const STORAGE_KEY_SHOPPING_DAYS = 'frugal_shopping_days_v3';
const STORAGE_KEY_FAVORITES = 'frugal_favorite_recipes_v1';
const STORAGE_KEY_HISTORY = 'frugal_history_recipes_v1';
const STORAGE_KEY_SEASON = 'frugal_selected_season_v1';
const STORAGE_KEY_CUSTOM_RECIPES = 'frugal_custom_recipes_v1';
const STORAGE_KEY_COOKED_DAYS = 'frugal_cooked_days_v1';
const STORAGE_KEY_BLACKLIST = 'frugal_blacklisted_recipes_v1';
const STORAGE_KEY_GUIDE_SEEN = 'frugal_guide_seen_v1';
const STORAGE_KEY_FEEDBACK = 'frugal_user_feedback_v1';
const STORAGE_KEY_HIDE_SEASONINGS = 'frugal_hide_seasonings_v1';
const STORAGE_KEY_CUSTOM_SHOPPING = 'frugal_custom_shopping_items_v1';

// 安全なアイコン描画ヘルパー
function safeCreateIcons() {
  if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn('Lucide icon error:', e);
    }
  }
}

// レシピ名から【外部サイト】や【登録レシピ】の接頭辞を取り除いて料理名を一目で読めるようにする
function getCleanTitle(recipe) {
  if (!recipe || !recipe.title) return '';
  return recipe.title.replace(/^【外部サイト】/, '').replace(/^【登録レシピ】/, '').trim();
}

// 外部レシピ・動画の可愛いバッジHTML
function getExternalBadge(recipe) {
  if (!recipe || !recipe.url) return '';
  if (recipe.url.includes('youtube.com') || recipe.url.includes('youtu.be')) {
    return '<span class="text-[10px] text-rose-700 bg-rose-50 border border-rose-200/80 px-2 py-0.5 rounded-full font-bold flex items-center gap-1 shrink-0">📺 動画</span>';
  }
  return '<span class="text-[10px] text-sky-700 bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded-full font-bold flex items-center gap-1 shrink-0">🌐 外部</span>';
}

// 初期化
document.addEventListener('DOMContentLoaded', async () => {
  try {
    loadSavedState();
    updateFavBadge();
    updateNgBadge();
    safeCreateIcons();
    setupEventListeners();

    // URLから共有参加した場合は、相手の献立・予算・設定を100%取得完了してから画面を描画する！
    if (state.isJoiningFromUrl && state.familySyncCode) {
      updateSyncStatusUI('syncing');
      const remoteData = await fetchSyncData(state.familySyncCode);
      if (remoteData && remoteData.weeklyPlan) {
        applyRemoteData(remoteData, true);
        updateSyncStatusUI('connected');
        showToast(`家族共有コード【${state.familySyncCode}】に参加し、最新の献立・予算を同期しました！`);
      } else {
        showToast(`共有コード【${state.familySyncCode}】のデータを読み込めませんでした`);
        updateSyncStatusUI('disconnected');
      }
      delete state.isJoiningFromUrl;
    } else if (state.familySyncCode) {
      // すでに参加済みの端末の場合（復帰時）
      updateSyncStatusUI('connected');
      fetchAndApplySync(true);
    }

    // 献立データがない場合はランダム生成（共有参加直後は相手のデータがあるためスキップされる）
    if (!state.weeklyPlan || typeof state.weeklyPlan !== 'object' || Object.keys(state.weeklyPlan).length < 7) {
      generateRandomWeeklyPlan(false);
    }

    render();

    // 初回利用者はまず「使い方ガイド」を表示（共有URLから参加した人はガイドを出さずに献立をすぐ見せる）
    const guideSeen = localStorage.getItem(STORAGE_KEY_GUIDE_SEEN);
    if (!guideSeen && !state.familySyncCode) {
      setTimeout(() => {
        openGuideModal();
      }, 400);
    } else if (!state.hasCompletedOnboarding && !state.familySyncCode) {
      setTimeout(() => {
        openPreferencesModal(true);
      }, 400);
    }
  } catch (err) {
    console.error('Initialization error:', err);
  }
});


// 保存状態の読み込み
function loadSavedState() {
  const savedServings = localStorage.getItem(STORAGE_KEY_SERVINGS);
  if (savedServings) {
    state.servings = parseInt(savedServings, 10) || 3;
  }

  const savedBudget = localStorage.getItem(STORAGE_KEY_BUDGET);
  if (savedBudget) {
    state.targetBudget = parseInt(savedBudget, 10) || 4500;
  }

  const savedChildrenCount = localStorage.getItem(STORAGE_KEY_CHILDREN_COUNT);
  if (savedChildrenCount !== null) {
    state.childrenCount = parseInt(savedChildrenCount, 10);
  } else {
    state.childrenCount = 1; // デフォルト1人（標準: 夫婦+子ども1人＝3人家族）
  }

  const savedChildrenPref = localStorage.getItem(STORAGE_KEY_CHILDREN_PREF);
  if (savedChildrenPref) {
    try {
      state.childrenPreferences = JSON.parse(savedChildrenPref);
    } catch (e) {
      // Keep default
    }
  } else {
    // Migration from old dislikes
    const savedDislikes = localStorage.getItem(STORAGE_KEY_DISLIKES);
    if (savedDislikes) {
      try {
        const oldDislikes = JSON.parse(savedDislikes);
        if (Array.isArray(oldDislikes)) {
          state.childrenPreferences.child1.dislikes = oldDislikes;
        }
      } catch (e) {}
    }
  }

  // 1〜5人分のキーを安全に確保
  for (let i = 1; i <= 5; i++) {
    const k = `child${i}`;
    if (!state.childrenPreferences[k]) {
      state.childrenPreferences[k] = { dislikes: [], disabledFlavors: [] };
    }
  }

  // 家族共有コードの読み込み（URLパラメータまたはハッシュからの自動参加）
  const urlParams = new URLSearchParams(window.location.search);
  const hashParam = window.location.hash ? window.location.hash.replace('#', '') : '';
  let urlFamilyCode = urlParams.get('family') || urlParams.get('code') || '';
  if (!urlFamilyCode && hashParam.startsWith('family=')) {
    urlFamilyCode = hashParam.split('=')[1];
  }
  const urlSyncId = urlParams.get('sid') || '';
  const urlData = urlParams.get('d') || '';

  // URLに圧縮データが含まれている場合は即座に完全復元（外部サーバー通信0秒で相手の献立・予算を100%確実に反映）
  if (urlData) {
    const decoded = decodeSharePayload(urlData);
    if (decoded) {
      if (decoded.w && typeof decoded.w === 'object') {
        state.weeklyPlan = decoded.w;
        localStorage.setItem(STORAGE_KEY_PLAN, JSON.stringify(state.weeklyPlan));
      }
      if (decoded.b) {
        state.targetBudget = Number(decoded.b) || state.targetBudget;
        localStorage.setItem(STORAGE_KEY_BUDGET, state.targetBudget.toString());
      }
      if (decoded.s) {
        state.servings = Number(decoded.s) || state.servings;
        localStorage.setItem(STORAGE_KEY_SERVINGS, state.servings.toString());
      }
      if (decoded.k !== undefined) {
        state.childrenCount = Number(decoded.k) || 0;
        localStorage.setItem(STORAGE_KEY_CHILDREN_COUNT, state.childrenCount.toString());
      }
      if (decoded.p) {
        state.childrenPreferences = decoded.p;
        localStorage.setItem(STORAGE_KEY_CHILDREN_PREF, JSON.stringify(state.childrenPreferences));
      }
      if (decoded.ck) {
        state.checkedItems = decoded.ck;
        localStorage.setItem(STORAGE_KEY_CHECKED, JSON.stringify(state.checkedItems));
      }
      state.lastSyncTime = Date.now();
    }
  }

  if (urlSyncId) {
    state.syncDocId = urlSyncId;
    localStorage.setItem(STORAGE_KEY_SYNC_DOC_ID, urlSyncId);
  }

  if (urlFamilyCode) {
    state.familySyncCode = normalizeFamilyCode(urlFamilyCode);
    state.isJoiningFromUrl = true;
    localStorage.setItem(STORAGE_KEY_SYNC_CODE, state.familySyncCode);
    state.hasUrlAutoJoin = true;
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  } else {
    const savedCode = localStorage.getItem(STORAGE_KEY_SYNC_CODE) || '';
    if (savedCode) {
      state.familySyncCode = normalizeFamilyCode(savedCode);
    }
    state.syncDocId = localStorage.getItem(STORAGE_KEY_SYNC_DOC_ID) || '';
  }

  const savedOnboarding = localStorage.getItem(STORAGE_KEY_ONBOARDING);
  state.hasCompletedOnboarding = savedOnboarding === 'true';

  const savedPlan = localStorage.getItem(STORAGE_KEY_PLAN);
  if (savedPlan) {
    try {
      state.weeklyPlan = JSON.parse(savedPlan);
    } catch (e) {
      state.weeklyPlan = null;
    }
  }

  const savedChecked = localStorage.getItem(STORAGE_KEY_CHECKED);
  if (savedChecked) {
    try {
      state.checkedItems = JSON.parse(savedChecked);
    } catch (e) {
      state.checkedItems = {};
    }
  }

  const savedShoppingDays = localStorage.getItem(STORAGE_KEY_SHOPPING_DAYS);
  if (savedShoppingDays) {
    try {
      state.shoppingDays = JSON.parse(savedShoppingDays);
    } catch (e) {
      state.shoppingDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    }
  }

  const savedFavorites = localStorage.getItem(STORAGE_KEY_FAVORITES);
  if (savedFavorites) {
    try {
      state.favoriteRecipeIds = JSON.parse(savedFavorites);
    } catch (e) {
      state.favoriteRecipeIds = [];
    }
  }

  const savedHistory = localStorage.getItem(STORAGE_KEY_HISTORY);
  if (savedHistory) {
    try {
      state.historyRecipeIds = JSON.parse(savedHistory);
    } catch (e) {
      state.historyRecipeIds = [];
    }
  }

  const savedSeason = localStorage.getItem(STORAGE_KEY_SEASON);
  if (savedSeason) {
    state.selectedSeason = savedSeason;
  }

  const savedCustom = localStorage.getItem(STORAGE_KEY_CUSTOM_RECIPES);
  if (savedCustom) {
    try {
      state.customRecipes = JSON.parse(savedCustom) || [];
      state.customRecipes.forEach(cr => {
        if (!RECIPES_DATA.some(r => r.id === cr.id)) {
          RECIPES_DATA.push(cr);
        }
      });
    } catch (e) {
      state.customRecipes = [];
    }
  }

  const savedCooked = localStorage.getItem(STORAGE_KEY_COOKED_DAYS);
  if (savedCooked) {
    try {
      state.cookedDays = JSON.parse(savedCooked) || [];
    } catch (e) {
      state.cookedDays = [];
    }
  }

  const savedBlacklist = localStorage.getItem(STORAGE_KEY_BLACKLIST);
  if (savedBlacklist) {
    try {
      state.blacklistedRecipeIds = JSON.parse(savedBlacklist) || [];
    } catch (e) {
      state.blacklistedRecipeIds = [];
    }
  }

  const savedHideSeasonings = localStorage.getItem(STORAGE_KEY_HIDE_SEASONINGS);
  if (savedHideSeasonings !== null) {
    try {
      state.hideSeasonings = JSON.parse(savedHideSeasonings);
    } catch (e) {
      state.hideSeasonings = false;
    }
  }

  const savedCustomShopping = localStorage.getItem(STORAGE_KEY_CUSTOM_SHOPPING);
  if (savedCustomShopping) {
    try {
      state.customShoppingItems = JSON.parse(savedCustomShopping) || [];
    } catch (e) {
      state.customShoppingItems = [];
    }
  }

  // 献立データの完全性検証（7日分揃っているか、全レシピIDが存在するかチェック）
  let isPlanValid = true;
  if (!state.weeklyPlan || typeof state.weeklyPlan !== 'object' || Object.keys(state.weeklyPlan).length < 7) {
    isPlanValid = false;
  } else {
    for (const day of DAYS_OF_WEEK) {
      const d = state.weeklyPlan[day.id];
      if (!d || !d.main || !d.side || !d.soup) {
        isPlanValid = false;
        break;
      }
      if (!getRecipeById(d.main) || !getRecipeById(d.side) || !getRecipeById(d.soup)) {
        isPlanValid = false;
        break;
      }
    }
  }

  if (!isPlanValid && !state.isJoiningFromUrl) {
    generateRandomWeeklyPlan(false);
  }
}

function saveFavorites() {
  localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(state.favoriteRecipeIds));
}

function saveHistory() {
  localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(state.historyRecipeIds));
}

function saveSeason() {
  localStorage.setItem(STORAGE_KEY_SEASON, state.selectedSeason);
}

function saveCustomRecipes() {
  localStorage.setItem(STORAGE_KEY_CUSTOM_RECIPES, JSON.stringify(state.customRecipes));
}

function saveCookedDays() {
  localStorage.setItem(STORAGE_KEY_COOKED_DAYS, JSON.stringify(state.cookedDays));
}

function saveBlacklist() {
  localStorage.setItem(STORAGE_KEY_BLACKLIST, JSON.stringify(state.blacklistedRecipeIds));
}

function updateNgBadge() {
  const badge = document.getElementById('ng-count-badge');
  if (badge) {
    badge.textContent = state.blacklistedRecipeIds.length;
  }
}

// 苦手食材を含まないレシピをフィルタリング
function filterRecipesByDislikes(recipes) {
  if (!Array.isArray(recipes)) return [];
  // お子様が0人の場合は大人・夫婦のみモードのため苦手除外をスキップ
  if (state.childrenCount === 0) return recipes;

  const activeChildKeys = [];
  for (let i = 1; i <= state.childrenCount; i++) {
    activeChildKeys.push(`child${i}`);
  }

  const filtered = recipes.filter(recipe => {
    if (!recipe) return false;
    // 設定されている人数分のお子様が食べられるかチェック
    const allChildrenCanEat = activeChildKeys.every(k => {
      const pref = state.childrenPreferences[k] || { dislikes: [], disabledFlavors: [] };
      if (canChildEat(recipe, pref)) return true;
      
      // 代替メニューがあるかチェック
      if (recipe.baseIngredientsGroup) {
        const alt = RECIPES_DATA.find(r => 
          r &&
          r.baseIngredientsGroup === recipe.baseIngredientsGroup && 
          r.id !== recipe.id &&
          canChildEat(r, pref)
        );
        if (alt) return true;
      }
      return false;
    });
    return allChildrenCanEat;
  });

  return filtered.length > 0 ? filtered : recipes;
}

function canChildEat(recipe, childPref) {
  if (!recipe) return true;
  const dislikes = childPref.dislikes || [];
  const disabledFlavors = childPref.disabledFlavors || [];

  if (recipe.flavorType && disabledFlavors.includes(recipe.flavorType)) {
    return false;
  }

  // 類義語・関連食材ワードを展開
  const expandedDislikeWords = [];
  dislikes.forEach(d => {
    expandedDislikeWords.push(d);
    if (typeof DISLIKE_SYNONYMS !== 'undefined' && DISLIKE_SYNONYMS[d]) {
      DISLIKE_SYNONYMS[d].forEach(syn => expandedDislikeWords.push(syn));
    }
  });

  const hasDislikedTag = recipe.containsDislikes && recipe.containsDislikes.some(d => 
    dislikes.includes(d) || expandedDislikeWords.includes(d)
  );
  if (hasDislikedTag) return false;

  // 魚類が苦手で主菜・副菜が魚プロテインの場合も除外
  if (dislikes.includes('魚') && recipe.proteinType === 'fish') {
    return false;
  }

  const ingredients = recipe.ingredients || [];
  const hasDislikedIngredient = ingredients.some(ing => {
    if (!ing || !ing.name) return false;
    return expandedDislikeWords.some(dis => ing.name.includes(dis));
  });

  return !hasDislikedIngredient;
}

// 1つの献立プランの総コストを計算
function calculatePlanTotalCost(plan) {
  let cost = 0;
  if (!plan) return 0;
  Object.values(plan).forEach(day => {
    if (!day) return;
    const main = getRecipeById(day.main);
    const side = getRecipeById(day.side);
    const soup = getRecipeById(day.soup);
    if (main) cost += main.approxCostPerPerson * state.servings;
    if (side) cost += side.approxCostPerPerson * state.servings;
    if (soup) cost += soup.approxCostPerPerson * state.servings;
  });
  return cost;
}

// 予算マッチング＆30日重複なし＆お気に入り定期登板 献立生成エンジン
function generateRandomWeeklyPlan(showNotify = true) {
  // 0. 今週の調理済みステータスをリセット
  state.cookedDays = [];
  saveCookedDays();

  // 1. 除外（NG）レシピの排除 ＆ 苦手食材フィルタ
  const isNotBlacklisted = r => !state.blacklistedRecipeIds.includes(r.id);
  let availableMains = filterRecipesByDislikes(RECIPES_DATA.filter(r => r.category === 'main' && isNotBlacklisted(r)));
  let availableSides = filterRecipesByDislikes(RECIPES_DATA.filter(r => r.category === 'side' && isNotBlacklisted(r)));
  let availableSoups = filterRecipesByDislikes(RECIPES_DATA.filter(r => r.category === 'soup' && isNotBlacklisted(r)));

  // 2. 季節フィルター（指定がある場合、該当季節または通年のものを優先）
  if (state.selectedSeason && state.selectedSeason !== 'all') {
    const filterBySeason = (list) => {
      const match = list.filter(r => !r.season || r.season === 'all' || r.season === state.selectedSeason);
      return match.length >= 7 ? match : list;
    };
    availableMains = filterBySeason(availableMains);
    availableSides = filterBySeason(availableSides);
    availableSoups = filterBySeason(availableSoups);
  }

  // 3. 直近30日間の重複防止フィルター（お気に入りレシピ以外は直近履歴にあるものを極力除外）
  const filterByHistory = (list) => {
    const unrecent = list.filter(r => {
      // お気に入り登録されたものは除外しない（定期登板を許可）
      if (state.favoriteRecipeIds.includes(r.id)) return true;
      // 履歴に含まれているものは除外
      return !state.historyRecipeIds.includes(r.id);
    });
    // 候補が7品以上残っていれば除外後のリストを採用、足りなければ全体から抽選
    return unrecent.length >= 7 ? unrecent : list;
  };

  let poolMains = filterByHistory(availableMains);
  let poolSides = filterByHistory(availableSides);
  let poolSoups = filterByHistory(availableSoups);

  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  let bestPlan = null;
  let minCostDiff = Infinity;

  for (let trial = 0; trial < 100; trial++) {
    const selectedMains = [];
    let curMains = shuffle(poolMains);

    // お気に入りレシピがある場合、週に1〜2回優先して選出
    const userFavMains = curMains.filter(r => state.favoriteRecipeIds.includes(r.id));
    let favInsertedCount = 0;

    for (let i = 0; i < DAYS_OF_WEEK.length; i++) {
      const prevMain = selectedMains[i - 1];
      let candidate = null;

      // お気に入りを優先挿入（週に最大2回まで）
      if (favInsertedCount < 2 && userFavMains.length > favInsertedCount && Math.random() < 0.6) {
        const favCandidate = userFavMains.find(r => 
          r &&
          !selectedMains.some(m => m && m.id === r.id) &&
          (!prevMain || r.proteinType !== prevMain.proteinType)
        );
        if (favCandidate) {
          candidate = favCandidate;
          favInsertedCount++;
        }
      }

      if (!candidate) {
        candidate = curMains.find(r => {
          if (!r) return false;
          const isDifferentProtein = !prevMain || r.proteinType !== prevMain.proteinType;
          const isNotUsed = !selectedMains.some(m => m && m.id === r.id);
          return isDifferentProtein && isNotUsed;
        });
      }

      if (!candidate) {
        candidate = curMains.find(r => r && !selectedMains.some(m => m && m.id === r.id));
      }
      if (!candidate && curMains.length > 0) {
        candidate = curMains[i % curMains.length];
      }
      if (!candidate) {
        candidate = poolMains[0] || RECIPES_DATA.find(r => r && r.category === 'main');
      }
      selectedMains.push(candidate);
    }

    const shuffledSides = shuffle(poolSides);
    const shuffledSoups = shuffle(poolSoups);

    const planCandidate = {};
    DAYS_OF_WEEK.forEach((day, index) => {
      const mainRecipe = selectedMains[index] || poolMains[0];
      const sideRecipe = shuffledSides[index % shuffledSides.length] || poolSides[0];
      const soupRecipe = shuffledSoups[index % shuffledSoups.length] || poolSoups[0];

      planCandidate[day.id] = {
        main: mainRecipe ? mainRecipe.id : 'main_01',
        side: sideRecipe ? sideRecipe.id : 'side_01',
        soup: soupRecipe ? soupRecipe.id : 'soup_01'
      };
    });

    const cost = calculatePlanTotalCost(planCandidate);
    const diff = Math.abs(cost - state.targetBudget);

    if (diff < minCostDiff) {
      minCostDiff = diff;
      bestPlan = planCandidate;
      if (diff <= 100) break;
    }
  }

  // 4. 生成したプランのレシピを直近履歴に追加（最大90件＝30日分保持）
  if (bestPlan) {
    const newUsedIds = [];
    Object.values(bestPlan).forEach(day => {
      if (day.main) newUsedIds.push(day.main);
      if (day.side) newUsedIds.push(day.side);
      if (day.soup) newUsedIds.push(day.soup);
    });

    // 既存の履歴の先頭に追加し、重複を除いて最大90件（30日分×3品）を保持
    const updatedHistory = [...newUsedIds, ...state.historyRecipeIds.filter(id => !newUsedIds.includes(id))];
    state.historyRecipeIds = updatedHistory.slice(0, 90);
    saveHistory();
  }

  state.weeklyPlan = bestPlan;
  savePlan();
  state.checkedItems = {};
  saveChecked();

  if (showNotify) {
    const finalCost = calculatePlanTotalCost(bestPlan);
    showToast(`目標予算【¥${state.targetBudget.toLocaleString()}】に合わせて被りなし献立（約¥${finalCost.toLocaleString()}）を作成しました！`);
  }

  render();

  if (state.familySyncCode && !state.isJoiningFromUrl) {
    pushSyncDataDebounced();
  }
}

function savePlan() {
  localStorage.setItem(STORAGE_KEY_PLAN, JSON.stringify(state.weeklyPlan));
}

function saveServings() {
  localStorage.setItem(STORAGE_KEY_SERVINGS, state.servings.toString());
  if (state.familySyncCode && !state.isJoiningFromUrl && !state.isApplyingRemote) {
    pushSyncDataDebounced();
  }
}

function saveBudget() {
  localStorage.setItem(STORAGE_KEY_BUDGET, state.targetBudget.toString());
  if (state.familySyncCode && !state.isJoiningFromUrl && !state.isApplyingRemote) {
    pushSyncDataDebounced();
  }
}

function saveChecked() {
  localStorage.setItem(STORAGE_KEY_CHECKED, JSON.stringify(state.checkedItems));
}

function saveShoppingDays() {
  localStorage.setItem(STORAGE_KEY_SHOPPING_DAYS, JSON.stringify(state.shoppingDays));
}

function saveChildrenPreferences() {
  localStorage.setItem(STORAGE_KEY_CHILDREN_PREF, JSON.stringify(state.childrenPreferences));
}

function saveOnboarding() {
  localStorage.setItem(STORAGE_KEY_ONBOARDING, 'true');
}

function saveHideSeasonings() {
  localStorage.setItem(STORAGE_KEY_HIDE_SEASONINGS, JSON.stringify(state.hideSeasonings));
}

function saveCustomShoppingItems() {
  localStorage.setItem(STORAGE_KEY_CUSTOM_SHOPPING, JSON.stringify(state.customShoppingItems));
  if (state.familySyncCode && !state.isJoiningFromUrl && !state.isApplyingRemote) {
    pushSyncDataDebounced();
  }
}

function getRecipeById(id) {
  if (!id || typeof RECIPES_DATA === 'undefined') return null;
  return RECIPES_DATA.find(r => r && r.id === id) || null;
}

function setupEventListeners() {
  document.querySelectorAll('[data-tab-target]').forEach(button => {
    button.addEventListener('click', (e) => {
      const target = e.currentTarget.getAttribute('data-tab-target');
      state.activeTab = target;
      renderTabs();
      // スマホまたはスクロール時にタブ上端へスムーズにスクロール
      const tabNav = document.getElementById('main-tab-nav');
      if (tabNav && window.scrollY > tabNav.offsetTop) {
        window.scrollTo({ top: tabNav.offsetTop, behavior: 'smooth' });
      }
    });
  });

  const servingsSelect = document.getElementById('servings-select');
  if (servingsSelect) {
    servingsSelect.value = state.servings;
    servingsSelect.addEventListener('change', (e) => {
      state.servings = parseInt(e.target.value, 10);
      saveServings();
      state.targetBudget = state.servings * 1500;
      saveBudget();
      const modalServings = document.getElementById('modal-servings-select');
      if (modalServings) modalServings.value = state.servings;
      const budgetInput = document.getElementById('target-budget-input');
      if (budgetInput) budgetInput.value = state.targetBudget;
      generateRandomWeeklyPlan(false);
      showToast(`家族人数を【${state.servings}人家族】に変更し、目標予算を¥${state.targetBudget.toLocaleString()}に調整しました`);
    });
  }

  const budgetInput = document.getElementById('target-budget-input');
  if (budgetInput) {
    budgetInput.value = state.targetBudget;
    budgetInput.addEventListener('change', (e) => {
      const val = parseInt(e.target.value, 10);
      if (val && val >= 3000 && val <= 30000) {
        state.targetBudget = val;
        saveBudget();
        generateRandomWeeklyPlan(true);
      } else {
        budgetInput.value = state.targetBudget;
        showToast('予算は¥3,000〜¥30,000の範囲で入力してください');
      }
    });
  }

  document.querySelectorAll('[data-budget-preset]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const val = parseInt(e.currentTarget.getAttribute('data-budget-preset'), 10);
      state.targetBudget = val;
      if (budgetInput) budgetInput.value = val;
      saveBudget();
      generateRandomWeeklyPlan(true);
    });
  });

  const regenerateBtn = document.getElementById('btn-regenerate-weekly');
  if (regenerateBtn) {
    regenerateBtn.addEventListener('click', () => {
      generateRandomWeeklyPlan(true);
    });
  }

  const openPrefBtn = document.getElementById('btn-open-preferences');
  if (openPrefBtn) {
    openPrefBtn.addEventListener('click', () => openPreferencesModal(false));
  }

  const clearCheckedBtn = document.getElementById('btn-clear-checked');
  if (clearCheckedBtn) {
    clearCheckedBtn.addEventListener('click', () => {
      if (confirm('チェックした項目をすべてリセットしますか？')) {
        state.checkedItems = {};
        if (state.customShoppingItems) {
          state.customShoppingItems.forEach(it => { it.isChecked = false; });
          saveCustomShoppingItems();
        }
        saveChecked();
        renderShoppingList();
        showToast('チェックをリセットしました');
      }
    });
  }

  // 基本調味料の非表示スイッチ
  const chkHideSeasonings = document.getElementById('chk-hide-seasonings');
  if (chkHideSeasonings) {
    chkHideSeasonings.checked = !!state.hideSeasonings;
    chkHideSeasonings.addEventListener('change', (e) => {
      toggleHideSeasonings(e.target.checked);
    });
  }

  // 自由買い足しメモ追加フォーム
  const formAddCustomItem = document.getElementById('form-add-custom-item');
  if (formAddCustomItem) {
    formAddCustomItem.addEventListener('submit', handleAddCustomShoppingItem);
  }

  const shareLineBtn = document.getElementById('btn-share-line');
  if (shareLineBtn) {
    shareLineBtn.addEventListener('click', shareToLine);
  }

  const copyListBtn = document.getElementById('btn-copy-list');
  if (copyListBtn) {
    copyListBtn.addEventListener('click', copyShoppingListToClipboard);
  }

  const searchInput = document.getElementById('recipe-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      renderRecipeBook();
    });
  }

  const seasonSelect = document.getElementById('season-select');
  if (seasonSelect) {
    seasonSelect.value = state.selectedSeason;
    seasonSelect.addEventListener('change', (e) => {
      state.selectedSeason = e.target.value;
      saveSeason();
      generateRandomWeeklyPlan(true);
      showToast(`季節モードを【${e.target.options[e.target.selectedIndex].text}】に切り替えました！`);
    });
  }

  const btnFilterFav = document.getElementById('btn-recipe-filter-fav');
  const btnFilterNg = document.getElementById('btn-recipe-filter-ng');

  if (btnFilterFav) {
    btnFilterFav.addEventListener('click', () => {
      state.showFavoritesOnly = !state.showFavoritesOnly;
      state.showBlacklistedOnly = false;
      if (btnFilterNg) btnFilterNg.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-rose-700 hover:bg-rose-100 bg-rose-50 border border-rose-200 transition-all flex items-center gap-1';

      if (state.showFavoritesOnly) {
        btnFilterFav.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-amber-500 shadow-2xs transition-all flex items-center gap-1';
        state.recipeBookMode = 'all';
        if (btnModeAll) btnModeAll.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-2xs transition-all';
        if (btnModeWeekly) btnModeWeekly.className = 'px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 transition-all';
        if (dayFilterContainer) dayFilterContainer.classList.add('hidden');
      } else {
        btnFilterFav.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-amber-700 hover:bg-amber-100 bg-amber-50 border border-amber-200 transition-all flex items-center gap-1';
      }
      renderRecipeBook();
    });
  }

  if (btnFilterNg) {
    btnFilterNg.addEventListener('click', () => {
      state.showBlacklistedOnly = !state.showBlacklistedOnly;
      state.showFavoritesOnly = false;
      if (btnFilterFav) btnFilterFav.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-amber-700 hover:bg-amber-100 bg-amber-50 border border-amber-200 transition-all flex items-center gap-1';

      if (state.showBlacklistedOnly) {
        btnFilterNg.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-rose-600 shadow-2xs transition-all flex items-center gap-1';
        state.recipeBookMode = 'all';
        if (btnModeAll) btnModeAll.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-2xs transition-all';
        if (btnModeWeekly) btnModeWeekly.className = 'px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 transition-all';
        if (dayFilterContainer) dayFilterContainer.classList.add('hidden');
      } else {
        btnFilterNg.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-rose-700 hover:bg-rose-100 bg-rose-50 border border-rose-200 transition-all flex items-center gap-1';
      }
      renderRecipeBook();
    });
  }

  const btnModeWeekly = document.getElementById('btn-recipe-mode-weekly');
  const btnModeAll = document.getElementById('btn-recipe-mode-all');
  const dayFilterContainer = document.getElementById('recipe-day-filter-container');

  if (btnModeWeekly && btnModeAll) {
    btnModeWeekly.addEventListener('click', () => {
      state.recipeBookMode = 'weekly';
      state.showFavoritesOnly = false;
      state.showBlacklistedOnly = false;
      if (btnFilterFav) btnFilterFav.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-amber-700 hover:bg-amber-100 bg-amber-50 border border-amber-200 transition-all flex items-center gap-1';
      if (btnFilterNg) btnFilterNg.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-rose-700 hover:bg-rose-100 bg-rose-50 border border-rose-200 transition-all flex items-center gap-1';
      btnModeWeekly.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-2xs transition-all';
      btnModeAll.className = 'px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 transition-all';
      if (dayFilterContainer) dayFilterContainer.classList.remove('hidden');
      renderRecipeBook();
    });

    btnModeAll.addEventListener('click', () => {
      state.recipeBookMode = 'all';
      state.showFavoritesOnly = false;
      state.showBlacklistedOnly = false;
      if (btnFilterFav) btnFilterFav.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-amber-700 hover:bg-amber-100 bg-amber-50 border border-amber-200 transition-all flex items-center gap-1';
      if (btnFilterNg) btnFilterNg.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-rose-700 hover:bg-rose-100 bg-rose-50 border border-rose-200 transition-all flex items-center gap-1';
      btnModeAll.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-2xs transition-all';
      btnModeWeekly.className = 'px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 transition-all';
      if (dayFilterContainer) dayFilterContainer.classList.add('hidden');
      renderRecipeBook();
    });
  }

  const recipeDaySelect = document.getElementById('recipe-day-select');
  if (recipeDaySelect) {
    recipeDaySelect.addEventListener('change', (e) => {
      state.selectedDayFilter = e.target.value;
      renderRecipeBook();
    });
  }

  document.querySelectorAll('[data-filter-day]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-filter-day]').forEach(b => {
        b.classList.remove('bg-emerald-600', 'text-white');
        b.classList.add('bg-white', 'text-slate-700');
        if (b.getAttribute('data-filter-day') === 'sat') b.classList.add('text-sky-700');
        if (b.getAttribute('data-filter-day') === 'sun') b.classList.add('text-rose-700');
      });
      e.currentTarget.classList.remove('bg-white', 'text-slate-700', 'text-sky-700', 'text-rose-700');
      e.currentTarget.classList.add('bg-emerald-600', 'text-white');
      state.selectedDayFilter = e.currentTarget.getAttribute('data-filter-day');
      renderRecipeBook();
    });
  });

  const modalDetail = document.getElementById('modal-recipe-detail');
  if (modalDetail) {
    modalDetail.addEventListener('click', (e) => {
      if (e.target.id === 'modal-recipe-detail' || e.target.closest('#btn-close-detail')) {
        closeDetailModal();
      }
    });
  }

  const modalChange = document.getElementById('modal-change-recipe');
  if (modalChange) {
    modalChange.addEventListener('click', (e) => {
      if (e.target.id === 'modal-change-recipe' || e.target.closest('#btn-close-change')) {
        closeChangeModal();
      }
    });
  }

  const modalPref = document.getElementById('modal-preferences');
  if (modalPref) {
    modalPref.addEventListener('click', (e) => {
      if (e.target.id === 'modal-preferences' || e.target.closest('#btn-close-preferences')) {
        closePreferencesModal();
      }
    });
  }

  const btnOpenCustom = document.getElementById('btn-open-custom-recipe');
  if (btnOpenCustom) {
    btnOpenCustom.addEventListener('click', openAddRecipeModal);
  }

  const btnCloseAdd = document.getElementById('btn-close-add-recipe');
  if (btnCloseAdd) {
    btnCloseAdd.addEventListener('click', closeAddRecipeModal);
  }

  const btnCancelAdd = document.getElementById('btn-cancel-add-recipe');
  if (btnCancelAdd) {
    btnCancelAdd.addEventListener('click', closeAddRecipeModal);
  }

  const modalAdd = document.getElementById('modal-add-recipe');
  if (modalAdd) {
    modalAdd.addEventListener('click', (e) => {
      if (e.target.id === 'modal-add-recipe') {
        closeAddRecipeModal();
      }
    });
  }

  const formAdd = document.getElementById('form-add-recipe');
  if (formAdd) {
    formAdd.addEventListener('submit', handleAddRecipeSubmit);
  }

  // スマホ実機確認ボタン＆閉じる制御
  const btnOpenMobile = document.getElementById('btn-open-mobile-modal');
  if (btnOpenMobile) {
    btnOpenMobile.addEventListener('click', openMobileModal);
  }

  const btnCloseMobile = document.getElementById('btn-close-mobile-modal');
  if (btnCloseMobile) {
    btnCloseMobile.addEventListener('click', closeMobileModal);
  }

  const modalMobile = document.getElementById('modal-mobile-connect');
  if (modalMobile) {
    modalMobile.addEventListener('click', (e) => {
      if (e.target.id === 'modal-mobile-connect') {
        closeMobileModal();
      }
    });
  }

  // Escキーで開いているすべてのモーダルを安全に閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileModal();
      closeGuideModal();
      closeFeedbackModal();
      closeSyncModal();
      closePreferencesModal();
      closeDetailModal();
      closeChangeModal();
      closeAddRecipeModal();
    }
  });

  // 使い方ガイドモーダル
  const btnOpenGuide = document.getElementById('btn-open-guide');
  if (btnOpenGuide) {
    btnOpenGuide.addEventListener('click', openGuideModal);
  }

  const btnOpenGuideFooter = document.getElementById('btn-open-guide-footer');
  if (btnOpenGuideFooter) {
    btnOpenGuideFooter.addEventListener('click', openGuideModal);
  }

  const btnCloseGuide = document.getElementById('btn-close-guide');
  if (btnCloseGuide) {
    btnCloseGuide.addEventListener('click', closeGuideModal);
  }

  const btnStartUsing = document.getElementById('btn-start-using');
  if (btnStartUsing) {
    btnStartUsing.addEventListener('click', closeGuideModal);
  }

  const modalGuide = document.getElementById('modal-guide');
  if (modalGuide) {
    modalGuide.addEventListener('click', (e) => {
      if (e.target.id === 'modal-guide') {
        closeGuideModal();
      }
    });
  }

  // ご意見・バグ報告フォームモーダル
  const btnOpenFeedbackFooter = document.getElementById('btn-open-feedback-footer');
  if (btnOpenFeedbackFooter) {
    btnOpenFeedbackFooter.addEventListener('click', openFeedbackModal);
  }

  const btnCloseFeedback = document.getElementById('btn-close-feedback');
  if (btnCloseFeedback) {
    btnCloseFeedback.addEventListener('click', closeFeedbackModal);
  }

  const btnCancelFeedback = document.getElementById('btn-cancel-feedback');
  if (btnCancelFeedback) {
    btnCancelFeedback.addEventListener('click', closeFeedbackModal);
  }

  const btnFeedbackDone = document.getElementById('btn-feedback-done');
  if (btnFeedbackDone) {
    btnFeedbackDone.addEventListener('click', closeFeedbackModal);
  }

  const modalFeedback = document.getElementById('modal-feedback');
  if (modalFeedback) {
    modalFeedback.addEventListener('click', (e) => {
      if (e.target.id === 'modal-feedback') {
        closeFeedbackModal();
      }
    });
  }

  const formFeedback = document.getElementById('form-feedback');
  if (formFeedback) {
    formFeedback.addEventListener('submit', handleFeedbackSubmit);
  }

  // 夫婦間共有モーダル
  const btnOpenSync = document.getElementById('btn-open-sync');
  if (btnOpenSync) {
    btnOpenSync.addEventListener('click', openSyncModal);
  }

  const btnOpenSyncFooter = document.getElementById('btn-open-sync-footer');
  if (btnOpenSyncFooter) {
    btnOpenSyncFooter.addEventListener('click', openSyncModal);
  }

  const btnCloseSync = document.getElementById('btn-close-sync');
  if (btnCloseSync) {
    btnCloseSync.addEventListener('click', closeSyncModal);
  }

  const modalSync = document.getElementById('modal-sync');
  if (modalSync) {
    modalSync.addEventListener('click', (e) => {
      if (e.target.id === 'modal-sync') {
        closeSyncModal();
      }
    });
  }

  // データ初期化ボタン
  const btnResetData = document.getElementById('btn-reset-data');
  if (btnResetData) {
    btnResetData.addEventListener('click', handleResetData);
  }

  // PWA インストール支援
  setupPwaInstall();

  // 印刷前イベント（A4横1枚プリント用の動的テーブル生成）
  window.addEventListener('beforeprint', updatePrintView);
}

// ==================== 印刷モード（A4横1枚）専用ビュー生成 ====================
window.triggerPrintWeeklyPlan = function() {
  updatePrintView();
  setTimeout(() => {
    window.print();
  }, 50);
};

function updatePrintView() {
  const container = document.getElementById('print-weekly-table-container');
  if (!container) return;

  if (state.activeTab === 'shopping') {
    renderPrintShoppingList(container);
  } else {
    renderPrintWeeklyCalendar(container);
  }
}

function renderPrintWeeklyCalendar(container) {
  if (!state.weeklyPlan || typeof state.weeklyPlan !== 'object') {
    container.innerHTML = '<div style="padding: 20px; text-align: center; font-size: 14px;">献立が生成されていません。「1週間の献立」画面で献立を生成してから印刷してください。</div>';
    return;
  }

  const daysInfo = DAYS_OF_WEEK.map(day => {
    const dayData = state.weeklyPlan[day.id] || {};
    const mainRecipe = getRecipeById(dayData.main);
    const sideRecipe = getRecipeById(dayData.side);
    const soupRecipe = getRecipeById(dayData.soup);
    const theme = DAY_THEMES[day.id] || { name: day.name };
    const proteinText = mainRecipe && mainRecipe.proteinType ? (PROTEIN_ICONS[mainRecipe.proteinType] || '') : '';
    const dayCost = ((mainRecipe ? mainRecipe.approxCostPerPerson : 0) +
                     (sideRecipe ? sideRecipe.approxCostPerPerson : 0) +
                     (soupRecipe ? soupRecipe.approxCostPerPerson : 0)) * state.servings;

    return {
      id: day.id,
      name: day.name,
      dayTheme: theme.name,
      protein: proteinText,
      cost: Math.round(dayCost),
      main: mainRecipe ? getCleanTitle(mainRecipe) : '-',
      side: sideRecipe ? getCleanTitle(sideRecipe) : '-',
      soup: soupRecipe ? getCleanTitle(soupRecipe) : '-'
    };
  });

  const totalCost = calculatePlanTotalCost(state.weeklyPlan);

  container.innerHTML = `
    <div style="width: 100%; box-sizing: border-box; font-family: 'Zen Maru Gothic', 'Noto Sans JP', sans-serif; color: #0f172a; padding: 0;">
      
      <!-- ヘッダー -->
      <div style="border-bottom: 2px solid #0f172a; padding-bottom: 4px; margin-bottom: 5px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 22px; line-height: 1;">🍳</span>
          <div>
            <div style="font-size: 15px; font-weight: 900; color: #0f172a; letter-spacing: -0.5px;">1週間の食費節約献立カレンダー（冷蔵庫用）</div>
            <div style="font-size: 9px; color: #475569; font-weight: bold;">お肉・お魚・和洋中バランス最適化 ＆ 食材使い回し献立</div>
          </div>
        </div>
        <div style="text-align: right; line-height: 1.25;">
          <div style="display: flex; gap: 5px; justify-content: flex-end; align-items: center;">
            <span style="font-size: 11px; font-weight: 900; background: #e0f2fe; color: #0369a1; padding: 2px 7px; border-radius: 5px; border: 1px solid #7dd3fc;">
              ${state.servings}人分
            </span>
            <span style="font-size: 11px; font-weight: 900; background: #ecfdf5; color: #047857; padding: 2px 7px; border-radius: 5px; border: 1px solid #6ee7b7;">
              推定計: 約¥${totalCost.toLocaleString()}（目標: ¥${state.targetBudget.toLocaleString()}）
            </span>
          </div>
          <div style="font-size: 8px; color: #64748b; margin-top: 2px;">作成日: ${new Date().toLocaleDateString('ja-JP')} ｜ 食費節約レシピまとめ集</div>
        </div>
      </div>

      <!-- 月〜日の縦型テーブル（A4縦 1枚に完全収容） -->
      <table style="width: 100%; border-collapse: collapse; table-layout: fixed; margin-bottom: 5px;">
        <thead>
          <tr style="background: #f1f5f9; border-top: 1.5px solid #334155; border-bottom: 1.5px solid #334155;">
            <th style="border: 1px solid #334155; padding: 4px 2px; width: 17%; font-size: 10.5px; font-weight: 900; text-align: center; color: #0f172a;">曜日・テーマ</th>
            <th style="border: 1px solid #334155; padding: 4px 6px; width: 33%; font-size: 10.5px; font-weight: 900; text-align: left; color: #c2410c;">【主菜】メインおかず</th>
            <th style="border: 1px solid #334155; padding: 4px 6px; width: 23%; font-size: 10.5px; font-weight: 900; text-align: left; color: #15803d;">【副菜】小鉢・野菜</th>
            <th style="border: 1px solid #334155; padding: 4px 6px; width: 19%; font-size: 10.5px; font-weight: 900; text-align: left; color: #0369a1;">【汁物】スープ</th>
            <th style="border: 1px solid #334155; padding: 4px 2px; width: 8%; font-size: 9px; font-weight: 900; text-align: center; color: #334155;">完了</th>
          </tr>
        </thead>
        <tbody>
          ${daysInfo.map((d, idx) => `
            <tr style="border-bottom: 1px solid #334155; height: 31mm;">
              <!-- 曜日列 -->
              <td style="border: 1px solid #334155; padding: 4px 3px; text-align: center; vertical-align: middle; background: ${idx === 5 ? '#f0f9ff' : (idx === 6 ? '#fff1f2' : '#f8fafc')};">
                <div style="font-size: 12.5px; font-weight: 900; color: ${idx === 5 ? '#0284c7' : (idx === 6 ? '#e11d48' : '#0f172a')};">
                  ${d.dayTheme}
                </div>
                ${d.protein ? `<div style="font-size: 8.5px; font-weight: bold; color: #475569; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 1px 3px; margin: 2px auto; display: inline-block;">${d.protein}</div>` : ''}
                <div style="font-size: 8px; font-weight: bold; color: #64748b;">約¥${d.cost}</div>
              </td>
              <!-- 主菜 -->
              <td style="border: 1px solid #334155; padding: 5px 6px; vertical-align: middle; background: #fffcf0;">
                <div style="font-size: 11px; font-weight: 900; color: #0f172a; line-height: 1.35; word-break: break-word;">
                  ${d.main}
                </div>
              </td>
              <!-- 副菜 -->
              <td style="border: 1px solid #334155; padding: 4px 6px; vertical-align: middle; background: #fbfdf9;">
                <div style="font-size: 10px; font-weight: bold; color: #1e293b; line-height: 1.3; word-break: break-word;">
                  ${d.side}
                </div>
              </td>
              <!-- 汁物 -->
              <td style="border: 1px solid #334155; padding: 4px 6px; vertical-align: middle; background: #f8fafc;">
                <div style="font-size: 9.5px; font-weight: bold; color: #334155; line-height: 1.3; word-break: break-word;">
                  ${d.soup}
                </div>
              </td>
              <!-- チェック枠 -->
              <td style="border: 1px solid #334155; padding: 4px 2px; text-align: center; vertical-align: middle; background: #ffffff;">
                <div style="width: 14px; height: 14px; border: 1.5px solid #94a3b8; border-radius: 3px; margin: 0 auto;"></div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- フッターメモ＆節約ワンポイント -->
      <div style="border: 1px solid #334155; border-radius: 5px; padding: 4px 8px; background: #f8fafc; display: flex; justify-content: space-between; align-items: center; font-size: 8.5px; color: #334155;">
        <div>
          <strong>💡 冷蔵庫メモ・節約のコツ:</strong> 週末にまとめ買いして下味冷凍すると平日は焼くだけ15分！使い切れなかった端野菜はお味噌汁へ。
        </div>
        <div style="color: #64748b; font-weight: bold; shrink-0; margin-left: 8px;">
          食費節約レシピまとめ集
        </div>
      </div>

    </div>
  `;
}

function renderPrintShoppingList(container) {
  const aggregated = calculateAggregatedShoppingList();
  const grouped = {};
  AISLE_ORDER.forEach(aisle => { grouped[aisle] = []; });

  let hiddenCount = 0;
  Object.keys(aggregated).forEach(key => {
    const item = aggregated[key];
    const isChecked = !!state.checkedItems[key];
    if (!isChecked) {
      const aisle = grouped[item.aisle] ? item.aisle : '調味料・その他';
      if (aisle === '調味料・その他' && state.hideSeasonings && isBasicSeasoning(item.name)) {
        hiddenCount++;
      } else {
        grouped[aisle].push(item);
      }
    }
  });

  const customItems = Array.isArray(state.customShoppingItems) ? state.customShoppingItems.filter(it => !it.isChecked) : [];
  const weeklyCost = state.weeklyPlan ? calculatePlanTotalCost(state.weeklyPlan) : 0;

  container.innerHTML = `
    <div style="width: 100%; height: 185mm; max-height: 185mm; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; font-family: 'Zen Maru Gothic', 'Noto Sans JP', sans-serif;">
      
      <!-- ヘッダー -->
      <div style="border-bottom: 2px solid #0f172a; padding-bottom: 3px; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 20px;">🛒</span>
          <span style="font-size: 16px; font-weight: 900; color: #0f172a;">1週間分のまとめ買いリスト（売り場別）</span>
          <span style="font-size: 11px; font-weight: bold; background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; border: 1px solid #7dd3fc;">
            ${state.servings}人分
          </span>
          <span style="font-size: 11px; font-weight: bold; background: #ecfdf5; color: #047857; padding: 2px 6px; border-radius: 4px; border: 1px solid #6ee7b7;">
            目安お会計: 約¥${weeklyCost.toLocaleString()}
          </span>
        </div>
        <div style="font-size: 9px; color: #64748b;">発行日: ${new Date().toLocaleDateString('ja-JP')}</div>
      </div>

      <!-- 売り場別4列グリッド -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; flex: 1; margin-bottom: 6px;">
        
        <!-- 1. 野菜 -->
        <div style="border: 1px solid #334155; border-radius: 6px; padding: 4px; background: #ffffff;">
          <div style="font-size: 11px; font-weight: 900; color: #065f46; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 3px;">
            🥬 野菜コーナー (${grouped['野菜'].length}品)
          </div>
          <div style="font-size: 9px; line-height: 1.4; color: #1e293b;">
            ${grouped['野菜'].map(it => `<div>□ <strong>${it.name}</strong>: ${formatAmount(it.amount, it.unit)}</div>`).join('') || '<div style="color: #94a3b8;">なし</div>'}
          </div>
        </div>

        <!-- 2. 肉・魚 -->
        <div style="border: 1px solid #334155; border-radius: 6px; padding: 4px; background: #ffffff;">
          <div style="font-size: 11px; font-weight: 900; color: #9f1239; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 3px;">
            🥩 肉・魚コーナー (${grouped['肉・魚'].length}品)
          </div>
          <div style="font-size: 9px; line-height: 1.4; color: #1e293b;">
            ${grouped['肉・魚'].map(it => `<div>□ <strong>${it.name}</strong>: ${formatAmount(it.amount, it.unit)}</div>`).join('') || '<div style="color: #94a3b8;">なし</div>'}
          </div>
        </div>

        <!-- 3. 大豆・乳・加工品 -->
        <div style="border: 1px solid #334155; border-radius: 6px; padding: 4px; background: #ffffff;">
          <div style="font-size: 11px; font-weight: 900; color: #92400e; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 3px;">
            🧈 大豆・乳・加工品 (${grouped['大豆・乳・加工品'].length}品)
          </div>
          <div style="font-size: 9px; line-height: 1.4; color: #1e293b;">
            ${grouped['大豆・乳・加工品'].map(it => `<div>□ <strong>${it.name}</strong>: ${formatAmount(it.amount, it.unit)}</div>`).join('') || '<div style="color: #94a3b8;">なし</div>'}
          </div>
        </div>

        <!-- 4. 調味料・メモ -->
        <div style="border: 1px solid #334155; border-radius: 6px; padding: 4px; background: #ffffff; display: flex; flex-direction: column;">
          <div style="font-size: 11px; font-weight: 900; color: #3730a3; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 3px;">
            🧂 調味料・買い足し
          </div>
          <div style="font-size: 9px; line-height: 1.35; color: #1e293b; flex: 1;">
            ${customItems.map(it => `<div style="color: #b45309;">□ <strong>[メモ] ${it.name}</strong></div>`).join('')}
            ${grouped['調味料・その他'].map(it => `<div>□ <strong>${it.name}</strong>: ${formatAmount(it.amount, it.unit)}</div>`).join('')}
            ${hiddenCount > 0 ? `<div style="font-size: 8px; color: #64748b; margin-top: 3px;">※基本常備品${hiddenCount}件除外中</div>` : ''}
          </div>
        </div>

      </div>

      <!-- フッター -->
      <div style="border-top: 1px dashed #94a3b8; padding-top: 2px; display: flex; justify-content: space-between; font-size: 8px; color: #64748b;">
        <div>※カゴに入れたらチェックをつけて買い忘れを防止しましょう。冷蔵庫の在庫を確認して購入してください。</div>
        <div>食費節約レシピまとめ集</div>
      </div>

    </div>
  `;
}

// ==================== PWA インストール支援 ====================
let deferredInstallPrompt = null;

function setupPwaInstall() {
  const btnInstall = document.getElementById('btn-install-pwa');
  if (!btnInstall) return;

  // すでにPWA (standalone) として実行されている場合はボタン不要
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone) {
    btnInstall.classList.add('hidden');
    return;
  }

  // Android / Chrome: インストール可能イベント検知
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    btnInstall.classList.remove('hidden');
    safeCreateIcons();
  });

  // モバイル端末（iOS Safari等を含む）ならボタンを表示して案内可能にする
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    btnInstall.classList.remove('hidden');
    safeCreateIcons();
  }

  btnInstall.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const choiceResult = await deferredInstallPrompt.userChoice;
      if (choiceResult && choiceResult.outcome === 'accepted') {
        showToast('🎉 アプリのインストールを開始しました！');
      }
      deferredInstallPrompt = null;
      btnInstall.classList.add('hidden');
    } else {
      // iOS Safariまたは手動インストールの案内
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (isIOS) {
        showToast('Safari下部の共有ボタン [↑] を押し、「ホーム画面に追加」をタップしてください📲');
      } else {
        showToast('ブラウザ右上のメニュー(︙)から「ホーム画面に追加」または「アプリをインストール」できます📲');
      }
    }
  });

  window.addEventListener('appinstalled', () => {
    btnInstall.classList.add('hidden');
    deferredInstallPrompt = null;
    showToast('🎉 ホーム画面にアプリを追加しました！');
  });
}

// ==================== スマホ実機確認モーダル制御 ====================
function openMobileModal() {
  const modal = document.getElementById('modal-mobile-connect');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    safeCreateIcons();
  } else {
    // モーダル要素が存在しない場合はURLをクリップボードにコピー
    copyMobileUrl();
  }
}
window.openMobileModal = openMobileModal;

function closeMobileModal() {
  const modal = document.getElementById('modal-mobile-connect');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
window.closeMobileModal = closeMobileModal;

function copyMobileUrl() {
  const url = window.location.href.split('#')[0];
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('スマホ閲覧用URLをコピーしました！');
    }).catch(() => {
      showToast(url);
    });
  } else {
    showToast(url);
  }
}
window.copyMobileUrl = copyMobileUrl;

// ==================== 使い方ガイドの制御 ====================
function openGuideModal() {
  const modal = document.getElementById('modal-guide');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  safeCreateIcons();
}
window.openGuideModal = openGuideModal;

function closeGuideModal() {
  const modal = document.getElementById('modal-guide');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');

  // 「次回から自動表示しない」設定の保存
  const chkDontShow = document.getElementById('chk-guide-dont-show');
  if (chkDontShow && chkDontShow.checked) {
    localStorage.setItem(STORAGE_KEY_GUIDE_SEEN, 'true');
  }

  // オンボーディングがまだなら好み設定を開く
  if (!state.hasCompletedOnboarding) {
    setTimeout(() => {
      openPreferencesModal(true);
    }, 300);
  }
}
window.closeGuideModal = closeGuideModal;

// ==================== ご意見・バグ報告フォームの制御 ====================
function openFeedbackModal() {
  const modal = document.getElementById('modal-feedback');
  if (!modal) return;

  // フォーム再表示＆完了メッセージ非表示
  const formContainer = document.getElementById('feedback-form-container');
  const successContainer = document.getElementById('feedback-success-container');
  if (formContainer) formContainer.classList.remove('hidden');
  if (successContainer) successContainer.classList.add('hidden');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  safeCreateIcons();
}
window.openFeedbackModal = openFeedbackModal;

function closeFeedbackModal() {
  const modal = document.getElementById('modal-feedback');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}
window.closeFeedbackModal = closeFeedbackModal;

// ==================== 家族共有（B案: 自動生成コード+QR、C案: 復帰時+手動更新） ====================
// 無料・登録不要・コード直接キーアクセスのクラウドKVS (KVdb.io)
const SYNC_API_BASE = 'https://kvdb.io/Fo4UXYeKJ2kqv6FWFKXyQa';
const SYNC_CODE_CHARS = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // 0, O, 1, I を完全除外した32文字

// 6桁コード生成
function generate6DigitCode() {
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += SYNC_CODE_CHARS.charAt(Math.floor(Math.random() * SYNC_CODE_CHARS.length));
  }
  return code;
}

// コードの衝突回避付き生成（既存チェック付き）
async function generateUniqueFamilyCode() {
  for (let attempt = 0; attempt < 3; attempt++) {
    const code = generate6DigitCode();
    const existing = await fetchSyncData(code);
    if (!existing) return code;
  }
  return generate6DigitCode();
}

// コードの入力値正規化（大文字化・空白除去・0/O/1/Iの見間違い防止）
function normalizeFamilyCode(code) {
  if (!code) return '';
  return code.trim().toUpperCase().replace(/[\s-]/g, '');
}

// 共有URLの生成（URLが約70文字と極短いため、QRコードのドットが大きく粗く、スマホカメラで一瞬で読み取れる）
function getFamilyShareUrl(code) {
  const base = 'https://fi1025re-commits.github.io/frugal-meal-planner/';
  return `${base}?family=${encodeURIComponent(normalizeFamilyCode(code))}`;
}

// 最終更新時刻の文字列生成
function formatLastUpdatedTime(timestamp) {
  if (!timestamp) return '';
  const d = new Date(timestamp);
  const h = d.getHours().toString().padStart(2, '0');
  const m = d.getMinutes().toString().padStart(2, '0');
  return `最終更新 ${h}:${m}`;
}

// 最終更新表示の更新
function updateLastUpdatedDisplay(timestamp) {
  const timeStr = formatLastUpdatedTime(timestamp || state.lastSyncTime || Date.now());
  state.lastSyncTimeString = timeStr;

  const shoppingTime = document.getElementById('sync-last-time-shopping');
  if (shoppingTime) shoppingTime.textContent = timeStr ? `(${timeStr})` : '';

  const modalTime = document.getElementById('modal-sync-last-time');
  if (modalTime) modalTime.textContent = timeStr;
}

// 同期用フルペイロード
function getSyncPayload() {
  return {
    updatedAt: Date.now(),
    servings: state.servings,
    targetBudget: state.targetBudget,
    weeklyPlan: state.weeklyPlan,
    checkedItems: state.checkedItems,
    childrenCount: state.childrenCount,
    childrenPreferences: state.childrenPreferences,
    customShoppingItems: state.customShoppingItems
  };
}

// リモートから最新データ取得（コードをキーにしてKVdbから直接GET）
async function fetchSyncData(code) {
  const cleanCode = normalizeFamilyCode(code);
  if (!cleanCode) return null;
  try {
    const res = await fetch(`${SYNC_API_BASE}/${cleanCode}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.warn('Sync fetch warning:', err);
    return null;
  }
}

// リモートへデータ全プッシュ（コードをキーにしてKVdbに直接PUT保存）
async function pushSyncData(code) {
  const cleanCode = normalizeFamilyCode(code);
  if (!cleanCode) return false;
  const payload = getSyncPayload();

  try {
    updateSyncStatusUI('syncing');
    const res = await fetch(`${SYNC_API_BASE}/${cleanCode}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      state.lastSyncTime = payload.updatedAt;
      updateLastUpdatedDisplay(state.lastSyncTime);
      updateSyncStatusUI('connected');
      return true;
    }
  } catch (err) {
    console.warn('Sync push warning:', err);
  }
  updateSyncStatusUI(state.familySyncCode ? 'connected' : 'disconnected');
  return false;
}

// 第31条・第32条: 変更された曜日だけ更新（クラウド全体をdebounce同期）
async function pushSyncDayPlan(dayId) {
  if (!state.familySyncCode) return;
  pushSyncDataDebounced();
}

// 第33条 案B: 買い物リストの1品単位更新
async function pushSyncCheckedItem(itemKey, isChecked) {
  if (!state.familySyncCode) return;
  if (!state.checkedItems) state.checkedItems = {};
  state.checkedItems[itemKey] = isChecked;
  saveChecked();
  pushSyncDataDebounced();
}

let syncDebounceTimer = null;
function pushSyncDataDebounced() {
  if (!state.familySyncCode) return;
  if (syncDebounceTimer) clearTimeout(syncDebounceTimer);
  syncDebounceTimer = setTimeout(() => {
    pushSyncData(state.familySyncCode);
  }, 800);
}

// リモートデータの適用
function applyRemoteData(data, isSilent = false) {
  if (!data) return;
  let changed = false;

  if (data.weeklyPlan && JSON.stringify(data.weeklyPlan) !== JSON.stringify(state.weeklyPlan)) {
    state.weeklyPlan = data.weeklyPlan;
    savePlan();
    changed = true;
  }

  if (data.checkedItems) {
    const decodedChecked = {};
    Object.keys(data.checkedItems).forEach(k => {
      try {
        const origKey = decodeURIComponent(k);
        decodedChecked[origKey] = !!data.checkedItems[k];
      } catch (e) {
        decodedChecked[k] = !!data.checkedItems[k];
      }
    });

    if (JSON.stringify(decodedChecked) !== JSON.stringify(state.checkedItems)) {
      state.checkedItems = decodedChecked;
      saveChecked();
      changed = true;
    }
  }

  state.isApplyingRemote = true;
  try {
    if (data.servings) {
      const numServings = Number(data.servings);
      if (numServings && numServings !== state.servings) {
        state.servings = numServings;
        localStorage.setItem(STORAGE_KEY_SERVINGS, state.servings.toString());
        changed = true;
      }
    }

    if (data.targetBudget) {
      const numBudget = Number(data.targetBudget);
      if (numBudget && numBudget !== state.targetBudget) {
        state.targetBudget = numBudget;
        localStorage.setItem(STORAGE_KEY_BUDGET, state.targetBudget.toString());
        changed = true;
      }
    }

    if (data.childrenCount !== undefined && data.childrenCount !== state.childrenCount) {
      state.childrenCount = Number(data.childrenCount) || 0;
      localStorage.setItem(STORAGE_KEY_CHILDREN_COUNT, state.childrenCount);
      changed = true;
    }

    if (data.childrenPreferences) {
      state.childrenPreferences = data.childrenPreferences;
      localStorage.setItem(STORAGE_KEY_CHILDREN_PREF, JSON.stringify(state.childrenPreferences));
      changed = true;
    }

    if (data.customShoppingItems && Array.isArray(data.customShoppingItems)) {
      if (JSON.stringify(data.customShoppingItems) !== JSON.stringify(state.customShoppingItems)) {
        state.customShoppingItems = data.customShoppingItems;
        localStorage.setItem(STORAGE_KEY_CUSTOM_SHOPPING, JSON.stringify(state.customShoppingItems));
        changed = true;
      }
    }

    state.lastSyncTime = data.updatedAt || Date.now();
    updateLastUpdatedDisplay(state.lastSyncTime);

    render();
    if (changed && !isSilent) {
      showToast('家族の最新データ（献立・目標予算）を同期しました！');
    }
  } finally {
    state.isApplyingRemote = false;
  }
}

// 更新方式（C案）: 画面表示時・ブラウザ復帰時・手動更新（ポーリング完全廃止）
async function fetchAndApplySync(isSilent = false) {
  if (!state.familySyncCode) return;
  try {
    if (!isSilent) updateSyncStatusUI('syncing');
    const remoteData = await fetchSyncData(state.familySyncCode);
    if (remoteData) {
      applyRemoteData(remoteData, isSilent);
      updateSyncStatusUI('connected');
    } else {
      updateSyncStatusUI('connected');
    }
  } catch (err) {
    console.warn('Sync refresh error:', err);
    updateSyncStatusUI(state.familySyncCode ? 'connected' : 'disconnected');
  }
}

// 手動「最新に更新」ボタン押下時
window.triggerManualSync = async function() {
  if (!state.familySyncCode) {
    showToast('現在家族共有に参加していません。「家族共有」から開始できます');
    return;
  }
  showToast('最新データを取得中...');
  await fetchAndApplySync(false);
  showToast('最新データに更新しました！');
};

// UIステータス表示更新
function updateSyncStatusUI(status) {
  state.syncStatus = status;
  const dot = document.getElementById('sync-status-dot');
  if (dot) {
    if (status === 'connected') {
      dot.className = 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5';
    } else if (status === 'syncing') {
      dot.className = 'w-2 h-2 rounded-full bg-sky-400 animate-ping ml-0.5';
    } else {
      dot.className = 'w-2 h-2 rounded-full bg-slate-300 ml-0.5';
    }
  }
}

// 家族共有モーダル表示
window.openSyncModal = function() {
  const modal = document.getElementById('modal-sync');
  if (!modal) return;
  renderSyncModalContent();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  safeCreateIcons();
};

window.closeSyncModal = function() {
  const modal = document.getElementById('modal-sync');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
};

// モーダル内容描画（B案）
function renderSyncModalContent() {
  const container = document.getElementById('sync-modal-content');
  if (!container) return;

  if (state.familySyncCode) {
    // ===== 共有中 =====
    const shareUrl = getFamilyShareUrl(state.familySyncCode);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(shareUrl)}`;

    container.innerHTML = `
      <!-- 共有コード表示カード -->
      <div class="bg-indigo-50/90 border border-indigo-100 rounded-2xl p-4 text-center">
        <span class="text-[11px] font-bold text-indigo-700 block mb-1">現在の家族共有コード</span>
        <div class="flex items-center justify-center gap-2">
          <span class="text-3xl font-black text-indigo-950 tracking-widest font-mono select-all">${state.familySyncCode}</span>
          <button onclick="copyFamilyCode()" class="p-2 rounded-xl bg-white text-indigo-700 hover:bg-indigo-100 transition shadow-2xs border border-indigo-200 active:scale-95 cursor-pointer" title="コードをコピー">
            <i data-lucide="copy" class="w-4 h-4"></i>
          </button>
        </div>
        <p class="text-[10px] text-indigo-500 mt-1">※見間違い防止のため「0」「1」「O」「I」は使用していません</p>
      </div>

      <!-- QRコード参加エリア -->
      <div class="bg-white border border-slate-200 rounded-2xl p-4 text-center">
        <h4 class="font-bold text-slate-800 text-xs mb-1">📷 相手のスマホカメラで読み取るだけ！</h4>
        <p class="text-[11px] text-slate-500 mb-2">読み取ると確認画面なしで自動的に共有が始まります</p>
        <div class="flex justify-center my-2">
          <div class="p-2 bg-white rounded-2xl shadow-sm border border-slate-200 inline-block">
            <img src="${qrUrl}" alt="共有用QRコード" class="w-44 h-44 mx-auto block" loading="lazy">
          </div>
        </div>
        <div class="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
          <button onclick="copyShareUrl()" class="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors border border-indigo-200 active:scale-95 cursor-pointer">
            <i data-lucide="link" class="w-3.5 h-3.5"></i>
            <span>共有リンクをコピー（LINE等で送る）</span>
          </button>
        </div>
      </div>

      <!-- 更新状態＆手動更新ボタン -->
      <div class="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex items-center justify-between">
        <div>
          <span class="text-[11px] font-bold text-slate-700 block">同期ステータス</span>
          <span id="modal-sync-last-time" class="text-[11px] text-slate-500">${formatLastUpdatedTime(state.lastSyncTime)}</span>
        </div>
        <button onclick="triggerManualSync()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-700 bg-white hover:bg-indigo-50 border border-indigo-200 transition-colors shadow-2xs active:scale-95 cursor-pointer">
          <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
          <span>今すぐ最新に更新</span>
        </button>
      </div>

      <!-- 別の家族の共有コードを入力して参加する枠 -->
      <div class="bg-slate-50/80 border border-slate-200 rounded-2xl p-3.5">
        <label for="input-join-code-active" class="block font-bold text-slate-800 mb-1.5 text-xs">👥 別の家族コードを入力して参加</label>
        <div class="flex gap-2">
          <input type="text" id="input-join-code-active" placeholder="例: 8AB4YZ" maxlength="8" class="flex-1 border-2 border-indigo-200 rounded-xl px-3 py-2 text-slate-900 font-black text-base focus:ring-2 focus:ring-indigo-400 uppercase tracking-widest text-center bg-white" onkeydown="if(event.key==='Enter') handleManualJoinActiveSubmit()">
          <button onclick="handleManualJoinActiveSubmit()" class="px-4 py-2 rounded-xl text-xs font-black text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm cursor-pointer active:scale-95 shrink-0">
            参加する
          </button>
        </div>
        <p class="text-[10px] text-slate-500 mt-1">※相手のコードを入力すると、相手の献立や予算に即座に切り替わります</p>
      </div>

      <!-- 共有管理ボタン群（再発行・離脱） -->
      <div class="pt-2 border-t border-slate-100">
        <div class="flex items-center justify-between">
          <button onclick="regenerateFamilySyncCode()" class="text-[11px] text-slate-500 hover:text-indigo-600 font-bold underline cursor-pointer">
            🔄 新しいコードを発行
          </button>
          <button onclick="leaveFamilySync()" class="text-[11px] text-rose-500 hover:text-rose-700 font-bold underline cursor-pointer">
            🚪 共有から抜ける
          </button>
        </div>
      </div>
    `;
  } else {
    // ===== 未共有 =====
    container.innerHTML = `
      <div class="bg-indigo-50/80 p-3.5 rounded-2xl border border-indigo-100 text-slate-700 leading-relaxed text-[11px]">
        💡 <strong>家族共有とは:</strong> 夫婦やご家族で同じ家族設定・週間予算・献立・買い物リストを共有できます。登録・ログインは一切不要です！
      </div>

      <!-- 新規共有開始ボタン -->
      <div class="py-2 text-center">
        <button onclick="startFamilySharing()" class="w-full py-3 px-4 rounded-2xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 transition-all shadow-md shadow-indigo-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
          <span>✨</span>
          <span>新しく家族共有を始める（コード発行）</span>
        </button>
        <span class="text-[10px] text-slate-400 mt-1 block">現在の献立や設定を引き継いで共有グループを作ります</span>
      </div>

      <div class="relative flex py-1 items-center">
        <div class="flex-grow border-t border-slate-200"></div>
        <span class="flex-shrink mx-3 text-slate-400 text-[11px] font-bold">または</span>
        <div class="flex-grow border-t border-slate-200"></div>
      </div>

      <!-- 手入力で参加 -->
      <div class="bg-white border-2 border-indigo-100 rounded-2xl p-3.5">
        <label for="input-join-code" class="block font-bold text-slate-800 mb-1.5 text-xs">👥 家族の共有コードを入力して参加</label>
        <div class="flex gap-2">
          <input type="text" id="input-join-code" placeholder="例: 8AB4YZ" maxlength="8" class="flex-1 border-2 border-indigo-200 rounded-xl px-3 py-2 text-slate-900 font-black text-base focus:ring-2 focus:ring-indigo-400 uppercase tracking-widest text-center" onkeydown="if(event.key==='Enter') handleManualJoinSubmit()">
          <button onclick="handleManualJoinSubmit()" class="px-5 py-2.5 rounded-xl text-xs font-black text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm cursor-pointer active:scale-95 shrink-0">
            参加する
          </button>
        </div>
        <p class="text-[10px] text-slate-500 mt-1.5">※相手のスマホカメラでQRコードを読み取るか、LINE等で「共有リンク」を開く方法でも瞬時に参加できます</p>
      </div>
    `;
  }
  safeCreateIcons();
}

// 共有コードコピー
window.copyFamilyCode = function() {
  if (!state.familySyncCode) return;
  navigator.clipboard.writeText(state.familySyncCode).then(() => {
    showToast(`共有コード【${state.familySyncCode}】をコピーしました！`);
  }).catch(() => {
    showToast(`コード: ${state.familySyncCode}`);
  });
};

// 共有リンクコピー
window.copyShareUrl = function() {
  if (!state.familySyncCode) return;
  const url = getFamilyShareUrl(state.familySyncCode);
  navigator.clipboard.writeText(url).then(() => {
    showToast('共有リンクをコピーしました！パートナーにLINE等で送れます');
  }).catch(() => {
    showToast(url);
  });
};

// 新規共有コードを発行して共有開始
window.startFamilySharing = async function() {
  showToast('共有コードを発行中...');
  const newCode = await generateUniqueFamilyCode();
  state.familySyncCode = newCode;
  localStorage.setItem(STORAGE_KEY_SYNC_CODE, newCode);
  await pushSyncData(newCode);
  updateSyncStatusUI('connected');
  renderSyncModalContent();
  showToast(`家族共有コード【${newCode}】を発行しました！`);
};

// 手入力による参加（未共有画面）
window.handleManualJoinSubmit = async function() {
  const input = document.getElementById('input-join-code');
  const rawCode = input ? input.value : '';
  const cleanCode = normalizeFamilyCode(rawCode);
  if (!cleanCode || cleanCode.length < 4) {
    showToast('共有コードを入力してください');
    return;
  }
  await joinFamilyByCode(cleanCode, true);
};

// 手入力による参加（共有中画面の切り替え）
window.handleManualJoinActiveSubmit = async function() {
  const input = document.getElementById('input-join-code-active');
  const rawCode = input ? input.value : '';
  const cleanCode = normalizeFamilyCode(rawCode);
  if (!cleanCode || cleanCode.length < 4) {
    showToast('共有コードを入力してください');
    return;
  }
  await joinFamilyByCode(cleanCode, true);
};

// コードによる参加（QR読み取り・手入力共用）
async function joinFamilyByCode(code, showFeedback = true) {
  const cleanCode = normalizeFamilyCode(code);
  if (!cleanCode) return;

  if (showFeedback) showToast('共有グループに接続中...');
  const remoteData = await fetchSyncData(cleanCode);

  if (remoteData && remoteData.weeklyPlan) {
    state.familySyncCode = cleanCode;
    localStorage.setItem(STORAGE_KEY_SYNC_CODE, cleanCode);
    applyRemoteData(remoteData, !showFeedback);
    updateSyncStatusUI('connected');
    renderSyncModalContent();
    if (showFeedback) {
      showToast(`共有コード【${cleanCode}】に参加し、最新の献立・予算を反映しました！`);
      closeSyncModal();
    }
  } else {
    // 相手のデータが存在しない・見つからない場合は絶対に上書きしない！
    showToast(`共有コード【${cleanCode}】のデータが見つかりませんでした。コードをご確認ください`);
    updateSyncStatusUI(state.familySyncCode ? 'connected' : 'disconnected');
  }
}

// 第34条: 共有から抜ける（端末離脱・ローカルデータ保持）
window.leaveFamilySync = function() {
  const ok = confirm('この端末を家族共有から抜けますか？\n（現在の献立や設定はこの端末にそのまま残り、単独で使い続けられます）');
  if (!ok) return;

  state.familySyncCode = '';
  state.syncDocId = '';
  localStorage.removeItem(STORAGE_KEY_SYNC_CODE);
  localStorage.removeItem(STORAGE_KEY_SYNC_DOC_ID);
  updateSyncStatusUI('disconnected');
  renderSyncModalContent();
  showToast('家族共有から抜けました。データはこの端末でそのまま使い続けられます');
};

// 第35条: 共有コード再発行（新コード発行・旧コード即時無効）
window.regenerateFamilySyncCode = async function() {
  const ok = confirm('新しい共有コードを発行しますか？\n（現在のコードは無効になり、相手の端末も新しいQRコードで再接続が必要になります）');
  if (!ok) return;

  showToast('新コードを発行中...');
  state.syncDocId = '';
  localStorage.removeItem(STORAGE_KEY_SYNC_DOC_ID);

  const newCode = generate6DigitCode();
  state.familySyncCode = newCode;
  localStorage.setItem(STORAGE_KEY_SYNC_CODE, newCode);
  await pushSyncData(newCode);
  updateSyncStatusUI('connected');
  renderSyncModalContent();
  showToast(`新しいコード【${newCode}】を発行しました！`);
};

// ブラウザ復帰時＆フォーカス時の最新データ自動取得（C案）
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && state.familySyncCode) {
    fetchAndApplySync(true);
  }
});
window.addEventListener('focus', () => {
  if (state.familySyncCode) {
    fetchAndApplySync(true);
  }
});

window.handleFeedbackSubmit = function(e) {
  e.preventDefault();
  const typeEl = document.querySelector('input[name="feedback-type"]:checked');
  const type = typeEl ? typeEl.value : '要望・改善案';
  const name = document.getElementById('feedback-name')?.value.trim() || '匿名';
  const email = document.getElementById('feedback-email')?.value.trim() || '';
  const message = document.getElementById('feedback-message')?.value.trim() || '';

  if (!message) {
    showToast('ご意見・報告内容を入力してください');
    return;
  }

  // ローカルストレージに送信履歴を記録
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_FEEDBACK) || '[]');
    existing.push({
      date: new Date().toISOString(),
      type: type,
      name: name,
      email: email,
      message: message
    });
    localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(existing));
  } catch (err) {
    console.warn('Feedback save error:', err);
  }

  // 画面を送信完了に切り替え
  const formContainer = document.getElementById('feedback-form-container');
  const successContainer = document.getElementById('feedback-success-container');
  if (formContainer) formContainer.classList.add('hidden');
  if (successContainer) successContainer.classList.remove('hidden');

  const form = document.getElementById('form-feedback');
  if (form) form.reset();

  showToast('ご意見・ご報告を送信しました！ありがとうございます。');
};

// データ初期化処理
window.handleResetData = function() {
  const ok = confirm("【警告】保存された献立、お子様の好み設定、お気に入り、追加したカスタムレシピなどのデータをすべて初期状態にリセットしますか？\n（この操作は元に戻せません）");
  if (!ok) return;

  try {
    localStorage.clear();
    showToast('データを初期化しました。再読み込みします...');
    setTimeout(() => {
      window.location.reload();
    }, 600);
  } catch (err) {
    console.error('Reset error:', err);
    showToast('初期化中にエラーが発生しました');
  }
};



function render() {
  renderTabs();
  renderWeeklyPlan();
  renderShoppingList();
  renderRecipeBook();
  updateBudgetControls();
  updateSummaryBadge();
  updatePreferenceBadge();
  safeCreateIcons();
}

// 人数ステッパー（− / ＋）操作関数
window.changeServingsByStep = function(delta) {
  const current = state.servings || 3;
  const next = Math.max(1, Math.min(7, current + delta));
  if (next !== current) {
    state.servings = next;
    saveServings();
    // 人数連動で予算も自然に更新（1人あたり約1,500円/週）
    state.targetBudget = Math.round(state.servings * 1500);
    saveBudget();
    generateRandomWeeklyPlan(true);
  }
};

// 画面内の予算入力欄・人数ステッパー・プリセットボタンを state と同期
function updateBudgetControls() {
  const budgetInput = document.getElementById('target-budget-input');
  if (budgetInput && state.targetBudget) {
    budgetInput.value = state.targetBudget;
  }
  const servingsDisplay = document.getElementById('servings-display');
  if (servingsDisplay && state.servings) {
    servingsDisplay.textContent = `${state.servings}人分`;
  }
  const servingsSelect = document.getElementById('servings-select');
  if (servingsSelect && state.servings) {
    servingsSelect.value = state.servings.toString();
  }
  const modalServings = document.getElementById('modal-servings-select');
  if (modalServings && state.servings) {
    modalServings.value = state.servings.toString();
  }

  // プリセットボタンのハイライト更新
  document.querySelectorAll('[data-budget-preset]').forEach(btn => {
    const val = parseInt(btn.getAttribute('data-budget-preset'), 10);
    if (val === state.targetBudget) {
      btn.className = 'px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-black text-sky-800 bg-sky-100 border border-sky-300 shadow-2xs transition';
    } else {
      btn.className = 'px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-bold text-slate-700 hover:bg-sky-50 border border-transparent transition';
    }
  });
}

function renderTabs() {
  document.querySelectorAll('[data-tab-target]').forEach(btn => {
    const tabId = btn.getAttribute('data-tab-target');
    const isActive = tabId === state.activeTab;
    if (isActive) {
      btn.className = 'tab-btn active flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 px-1 sm:px-4 text-white font-black rounded-2xl bg-gradient-to-r from-sky-500 to-teal-500 shadow-md shadow-sky-200/50 text-xs sm:text-sm transition-all';
    } else {
      btn.className = 'tab-btn flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 px-1 sm:px-4 text-slate-700 hover:text-sky-700 hover:bg-sky-50 font-bold rounded-2xl text-xs sm:text-sm transition-all';
    }
  });

  document.querySelectorAll('.tab-content').forEach(content => {
    if (content.id === `tab-${state.activeTab}`) {
      content.classList.remove('hidden');
    } else {
      content.classList.add('hidden');
    }
  });
}

function updateSummaryBadge() {
  const weeklyTotalCost = state.weeklyPlan ? calculatePlanTotalCost(state.weeklyPlan) : 0;
  const target = state.targetBudget;
  const diff = weeklyTotalCost - target;

  const costEl = document.getElementById('badge-total-cost');
  if (costEl) costEl.textContent = `¥${weeklyTotalCost.toLocaleString()}`;

  const targetEl = document.getElementById('badge-target-cost');
  if (targetEl) targetEl.textContent = `¥${target.toLocaleString()}`;

  const perPersonDayEl = document.getElementById('badge-per-person-day');
  if (perPersonDayEl) {
    const perDayPerPerson = Math.round(weeklyTotalCost / 7 / state.servings);
    perPersonDayEl.textContent = `1人1食あたり 約¥${perDayPerPerson}`;
  }

  const diffBadge = document.getElementById('badge-budget-diff');
  if (diffBadge) {
    if (Math.abs(diff) <= 150) {
      diffBadge.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800';
      diffBadge.innerHTML = `<i data-lucide="check-circle" class="w-3.5 h-3.5"></i> 予算ピッタリ（差額 ${diff >= 0 ? '+' : ''}¥${diff.toLocaleString()}）`;
    } else if (diff < 0) {
      diffBadge.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800';
      diffBadge.innerHTML = `<i data-lucide="sparkles" class="w-3.5 h-3.5"></i> 予算内！（¥${Math.abs(diff).toLocaleString()} お得）`;
    } else {
      diffBadge.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900';
      diffBadge.innerHTML = `<i data-lucide="alert-circle" class="w-3.5 h-3.5"></i> 予算＋¥${diff.toLocaleString()}`;
    }
  }

  const progressBar = document.getElementById('budget-progress-bar');
  if (progressBar) {
    const percent = Math.min(Math.round((weeklyTotalCost / target) * 100), 120);
    progressBar.style.width = `${Math.min(percent, 100)}%`;
    if (percent <= 100) {
      progressBar.className = 'h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500';
    } else {
      progressBar.className = 'h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full transition-all duration-500';
    }
  }

  const shoppingBudgetEl = document.getElementById('shopping-estimated-budget');
  if (shoppingBudgetEl) shoppingBudgetEl.textContent = `約 ¥${weeklyTotalCost.toLocaleString()}`;
}

function updatePreferenceBadge() {
  const badge = document.getElementById('badge-preferences-summary');
  if (!badge) return;

  const totalDislikes = Object.values(state.childrenPreferences).reduce((sum, pref) => sum + pref.dislikes.length + pref.disabledFlavors.length, 0);

  if (totalDislikes === 0) {
    badge.innerHTML = `
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
        <i data-lucide="smile" class="w-3.5 h-3.5"></i>
        好み設定なし（全${RECIPES_DATA.length}品対象）
      </span>
    `;
  } else {
    badge.innerHTML = `
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
        <i data-lucide="shield-alert" class="w-3.5 h-3.5 text-amber-600"></i>
        子供ごとの好み設定反映中
      </span>
    `;
  }
}

const CUISINE_LABELS = { japanese: '和風', western: '洋風', chinese: '中華' };
const PROTEIN_ICONS = { chicken: '🐔 鶏肉', pork: '🐷 豚肉', mince: '🥩 ひき肉', fish: '🐟 お魚', soy: '🌱 大豆・その他' };

const DAY_THEMES = {
  mon: { name: '💧 月曜日', bg: 'bg-sky-50/90 text-sky-950 border-sky-200' },
  tue: { name: '🍀 火曜日', bg: 'bg-lime-50/90 text-lime-950 border-lime-200' },
  wed: { name: '🌊 水曜日', bg: 'bg-teal-50/90 text-teal-950 border-teal-200' },
  thu: { name: '🌿 木曜日', bg: 'bg-emerald-50/90 text-emerald-950 border-emerald-200' },
  fri: { name: '✨ 金曜日', bg: 'bg-cyan-50/90 text-cyan-950 border-cyan-200' },
  sat: { name: '🎈 土曜日', bg: 'bg-blue-50/90 text-blue-950 border-blue-200' },
  sun: { name: '🌈 日曜日', bg: 'bg-indigo-50/90 text-indigo-950 border-indigo-200' }
};

function renderWeeklyPlan() {
  const container = document.getElementById('weekly-plan-container');
  if (!container) return;

  // 献立プランが存在しないか壊れている場合は即座に自動生成
  if (!state.weeklyPlan || typeof state.weeklyPlan !== 'object' || Object.keys(state.weeklyPlan).length < 7) {
    generateRandomWeeklyPlan(false);
    return;
  }

  try {
    container.innerHTML = '';

    DAYS_OF_WEEK.forEach((day) => {
      let dayData = state.weeklyPlan[day.id];
      if (!dayData) {
        dayData = { main: 'main_01', side: 'side_01', soup: 'soup_01' };
        state.weeklyPlan[day.id] = dayData;
      }

      let mainRecipe = getRecipeById(dayData.main);
      let sideRecipe = getRecipeById(dayData.side);
      let soupRecipe = getRecipeById(dayData.soup);

      // 万一レシピが見つからない場合の安全フォールバック（画面が空になるのを防止）
      if (!mainRecipe && Array.isArray(RECIPES_DATA) && RECIPES_DATA.length > 0) {
        mainRecipe = RECIPES_DATA.find(r => r && r.category === 'main') || RECIPES_DATA[0];
        dayData.main = mainRecipe.id;
      }
      if (!sideRecipe && Array.isArray(RECIPES_DATA) && RECIPES_DATA.length > 0) {
        sideRecipe = RECIPES_DATA.find(r => r && r.category === 'side') || RECIPES_DATA[1];
        dayData.side = sideRecipe.id;
      }
      if (!soupRecipe && Array.isArray(RECIPES_DATA) && RECIPES_DATA.length > 0) {
        soupRecipe = RECIPES_DATA.find(r => r && r.category === 'soup') || RECIPES_DATA[2];
        dayData.soup = soupRecipe.id;
      }

      const isCooked = state.cookedDays.includes(day.id);
      const theme = DAY_THEMES[day.id] || { name: day.name, bg: 'bg-slate-100 text-slate-800 border-slate-200' };
      const dayBg = isCooked ? 'bg-emerald-100/90 text-emerald-900 border-emerald-300' : theme.bg;

      const dayCost = (mainRecipe ? mainRecipe.approxCostPerPerson : 0) +
                      (sideRecipe ? sideRecipe.approxCostPerPerson : 0) +
                      (soupRecipe ? soupRecipe.approxCostPerPerson : 0);

      const dayCard = document.createElement('div');
      dayCard.className = `bg-white/95 rounded-3xl border-2 ${isCooked ? 'border-emerald-300 shadow-md ring-2 ring-emerald-200' : 'border-sky-100/90 shadow-sm hover:shadow-md hover:border-sky-200'} transition-all overflow-hidden flex flex-col`;

      const proteinText = mainRecipe && mainRecipe.proteinType ? PROTEIN_ICONS[mainRecipe.proteinType] || '' : '';

      const isChecked = state.shoppingDays.includes(day.id);
      dayCard.innerHTML = `
        <div class="px-5 py-3 border-b border-sky-100 flex items-center justify-between flex-wrap gap-2 ${dayBg}">
          <div class="flex items-center gap-2 flex-wrap">
            <input type="checkbox" ${isChecked ? 'checked' : ''} class="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-400 cursor-pointer" onchange="toggleShoppingDay('${day.id}')" title="買い物リストに含める">
            <span class="text-base font-black">${theme.name}</span>
            <span class="text-xs px-2.5 py-0.5 rounded-full font-bold bg-white/90 border border-current shadow-2xs">${state.servings}人分 約¥${dayCost * state.servings}</span>
            ${proteinText ? `<span class="text-[11px] font-bold text-slate-700 bg-white/90 px-2 py-0.5 rounded-full border border-slate-200/80 shadow-2xs">${proteinText}</span>` : ''}
            ${isCooked ? `<span class="text-[11px] font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">✅ 調理済 👏</span>` : ''}
          </div>
          <div class="flex items-center gap-1.5 ml-auto">
            <button onclick="toggleCookedDay('${day.id}')" class="text-xs flex items-center gap-1 font-black px-3 py-1.5 rounded-xl transition-all shadow-2xs active:scale-95 ${isCooked ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-white/90 text-teal-900 hover:bg-teal-50 hover:text-teal-950 border border-teal-200'}" title="作ったチェックで30日重複履歴に記録">
              <i data-lucide="${isCooked ? 'check-circle' : 'utensils'}" class="w-3.5 h-3.5"></i>
              <span>${isCooked ? '調理済' : '🍳 作った！'}</span>
            </button>
            <button onclick="shuffleDayMenu('${day.id}')" class="text-xs flex items-center gap-1 font-bold hover:opacity-75 transition-opacity px-2 py-1.5 rounded-xl bg-white/90 text-slate-600 shadow-2xs hover:bg-white" title="この日のメニューをランダム変更">
              <i data-lucide="shuffle" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>

        <div class="p-4 flex-1 flex flex-col gap-2.5 ${isCooked ? 'bg-emerald-50/20' : ''}">
          ${renderDishRow(day.id, 'main', mainRecipe, '主菜')}
          ${renderDishRow(day.id, 'side', sideRecipe, '副菜')}
          ${renderDishRow(day.id, 'soup', soupRecipe, '汁物')}
        </div>
      `;

      container.appendChild(dayCard);
    });

    if (container.children.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 bg-white rounded-3xl border border-sky-100 p-8 shadow-xs">
          <span class="text-4xl block mb-2">🍳</span>
          <h3 class="font-bold text-slate-800 text-base mb-1">節約献立を作成しましょう</h3>
          <p class="text-xs text-slate-500 mb-4">目標予算に合わせてバランスの良い1週間分の献立を作成します。</p>
          <button onclick="generateRandomWeeklyPlan(true)" class="px-6 py-2.5 rounded-2xl text-xs font-black text-white bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 shadow-md active:scale-95 cursor-pointer">
            ✨ 献立を生成する
          </button>
        </div>
      `;
    }
  } catch (err) {
    console.error('renderWeeklyPlan error:', err);
    generateRandomWeeklyPlan(false);
  }

  safeCreateIcons();
}

function renderDishRow(dayId, category, recipe, label) {
  if (!recipe) return '';

  const cleanTitle = getCleanTitle(recipe);
  const cuisineBadge = recipe.cuisine ? `<span class="text-[10px] text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-full font-bold shadow-2xs">${CUISINE_LABELS[recipe.cuisine] || ''}</span>` : '';
  const extBadge = getExternalBadge(recipe);

  // カテゴリ別の可愛いバッジ配色（主菜：さし色の温かみあるオレンジ/アンバー、副菜：薄黄緑、汁物：淡い青）
  let categoryBadgeClass = 'bg-gradient-to-r from-sky-500 to-teal-500 text-white';
  if (category === 'main') {
    categoryBadgeClass = 'bg-gradient-to-r from-amber-500 to-orange-500 text-white';
  } else if (category === 'side') {
    categoryBadgeClass = 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white';
  }

  // 代替メニューが必要な子供がいるかチェック（お子様0人の場合はスキップ）
  let altMenus = [];
  if (state.childrenCount > 0) {
    for (let i = 1; i <= state.childrenCount; i++) {
      const childId = `child${i}`;
      const pref = state.childrenPreferences[childId] || { dislikes: [], disabledFlavors: [] };
      if (!canChildEat(recipe, pref) && recipe.baseIngredientsGroup) {
        const alt = RECIPES_DATA.find(r => 
          r &&
          r.baseIngredientsGroup === recipe.baseIngredientsGroup && 
          r.id !== recipe.id &&
          canChildEat(r, pref)
        );
        if (alt) {
          altMenus.push({ childId, label: `子供${i}`, alt });
        }
      }
    }
  }

  let altHtml = '';
  if (altMenus.length > 0) {
    altHtml = altMenus.map(m => `
      <div class="mt-2 pl-2.5 border-l-3 border-amber-400 flex items-center justify-between bg-amber-50/90 rounded-r-xl p-2">
        <div class="flex items-center gap-2">
          <span class="text-[10px] font-black text-amber-900 bg-amber-200/90 px-2 py-0.5 rounded-full">別メニュー (${m.label})</span>
          <span class="text-xs font-bold text-amber-950 cursor-pointer hover:underline" onclick="openDetailModal('${m.alt.id}')">${getCleanTitle(m.alt)}</span>
        </div>
      </div>
    `).join('');
  }

  return `
    <div class="flex flex-col p-3 rounded-2xl bg-slate-50/60 hover:bg-sky-50/50 border border-slate-100 hover:border-sky-200 transition-all group relative shadow-2xs hover:shadow-xs">
      <div class="flex items-start justify-between gap-2">
        <!-- 料理メタ＆料理名（クリックで作り方モーダル） -->
        <div class="flex-1 min-w-0 cursor-pointer" onclick="openDetailModal('${recipe.id}')">
          <!-- 上段：カテゴリ、ジャンル、外部バッジ、価格 -->
          <div class="flex items-center gap-1.5 flex-wrap text-xs mb-1">
            <span class="text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-2xs ${categoryBadgeClass}">${label}</span>
            ${cuisineBadge}
            ${extBadge}
            <span class="text-xs font-black text-teal-700 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded-full ml-auto shadow-2xs">
              ¥${recipe.approxCostPerPerson * state.servings}
            </span>
          </div>
          <!-- 下段：料理名（省略せず一目でわかる太字表示） -->
          <div class="text-sm font-bold text-slate-800 group-hover:text-teal-700 transition-colors leading-snug break-words mt-0.5">
            ${cleanTitle}
          </div>
        </div>

        <!-- 右端：お気に入り・除外・変更ボタン -->
        <div class="flex items-center gap-0.5 shrink-0 pt-0.5">
          <button onclick="toggleFavorite('${recipe.id}', event)" class="p-1.5 rounded-xl transition-transform hover:scale-110 ${state.favoriteRecipeIds.includes(recipe.id) ? 'text-amber-500 hover:text-amber-600' : 'text-slate-300 hover:text-amber-400'}" title="お気に入り（定期登板）">
            <span class="text-base leading-none">${state.favoriteRecipeIds.includes(recipe.id) ? '★' : '☆'}</span>
          </button>
          <button onclick="toggleBlacklist('${recipe.id}', event)" class="p-1.5 rounded-xl transition-transform hover:scale-110 text-slate-300 hover:text-rose-600" title="このレシピを献立から除外（二度と出さない）">
            <span class="text-sm leading-none">🚫</span>
          </button>
          <button onclick="openChangeModal('${dayId}', '${category}')" class="p-1.5 text-slate-400 hover:text-teal-600 hover:bg-white rounded-xl transition-colors shadow-2xs" title="別のレシピに変更">
            <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
      ${altHtml}
    </div>
  `;
}

window.shuffleDayMenu = function(dayId) {
  const isNotBlacklisted = r => !state.blacklistedRecipeIds.includes(r.id);
  const mains = filterRecipesByDislikes(RECIPES_DATA.filter(r => r.category === 'main' && isNotBlacklisted(r)));
  const sides = filterRecipesByDislikes(RECIPES_DATA.filter(r => r.category === 'side' && isNotBlacklisted(r)));
  const soups = filterRecipesByDislikes(RECIPES_DATA.filter(r => r.category === 'soup' && isNotBlacklisted(r)));

  state.weeklyPlan[dayId] = {
    main: mains.length > 0 ? mains[Math.floor(Math.random() * mains.length)].id : 'main_01',
    side: sides.length > 0 ? sides[Math.floor(Math.random() * sides.length)].id : 'side_01',
    soup: soups.length > 0 ? soups[Math.floor(Math.random() * soups.length)].id : 'soup_01'
  };

  savePlan();
  renderWeeklyPlan();
  renderShoppingList();
  updateSummaryBadge();
  showToast('この日のメニューを変更しました');
};

window.toggleCookedDay = function(dayId) {
  if (!state.weeklyPlan || !state.weeklyPlan[dayId]) return;

  const isCurrentlyCooked = state.cookedDays.includes(dayId);
  const dayObj = DAYS_OF_WEEK.find(d => d.id === dayId);
  const dayName = dayObj ? dayObj.name : `${dayId}曜日`;

  if (isCurrentlyCooked) {
    state.cookedDays = state.cookedDays.filter(d => d !== dayId);
    showToast(`「${dayName}」の調理済みマークを解除しました`);
  } else {
    state.cookedDays.push(dayId);

    // その曜日のメニューを直近重複防止履歴（最大90件）に追加
    const dayData = state.weeklyPlan[dayId];
    const newRecipeIds = [dayData.main, dayData.side, dayData.soup].filter(Boolean);
    const updatedHistory = [...newRecipeIds, ...state.historyRecipeIds.filter(id => !newRecipeIds.includes(id))];
    state.historyRecipeIds = updatedHistory.slice(0, 90);
    saveHistory();

    showToast(`「${dayName}」のメニューを調理済みに記録しました！👏（重複防止履歴を更新）`);
  }

  saveCookedDays();
  renderWeeklyPlan();
};

window.toggleBlacklist = function(recipeId, event) {
  if (event) event.stopPropagation();

  const recipe = getRecipeById(recipeId);
  const title = recipe ? getCleanTitle(recipe) : 'レシピ';
  const isCurrentlyBlacklisted = state.blacklistedRecipeIds.includes(recipeId);

  if (isCurrentlyBlacklisted) {
    state.blacklistedRecipeIds = state.blacklistedRecipeIds.filter(id => id !== recipeId);
    saveBlacklist();
    updateNgBadge();
    showToast(`「${title}」の除外を解除しました。今後の献立候補に復帰します。`);
  } else {
    state.blacklistedRecipeIds.push(recipeId);

    // お気に入りに含まれている場合は解除
    if (state.favoriteRecipeIds.includes(recipeId)) {
      state.favoriteRecipeIds = state.favoriteRecipeIds.filter(id => id !== recipeId);
      saveFavorites();
      updateFavBadge();
    }

    // もし今週の献立に含まれていれば、同カテゴリーの別レシピと即座に入れ替え
    if (state.weeklyPlan) {
      let swapped = false;
      const isNotBlacklisted = r => !state.blacklistedRecipeIds.includes(r.id);

      DAYS_OF_WEEK.forEach(day => {
        const dayData = state.weeklyPlan[day.id];
        if (!dayData) return;

        ['main', 'side', 'soup'].forEach(cat => {
          if (dayData[cat] === recipeId) {
            const candidates = filterRecipesByDislikes(
              RECIPES_DATA.filter(r => r.category === cat && isNotBlacklisted(r) && r.id !== recipeId)
            );
            if (candidates.length > 0) {
              const replacement = candidates[Math.floor(Math.random() * candidates.length)];
              dayData[cat] = replacement.id;
              swapped = true;
            }
          }
        });
      });

      if (swapped) {
        savePlan();
        renderWeeklyPlan();
        renderShoppingList();
        updateSummaryBadge();
      }
    }

    saveBlacklist();
    updateNgBadge();
    showToast(`🚫「${title}」を献立から除外しました。今後は献立に登場しません。`);
  }

  renderWeeklyPlan();
  renderRecipeBook();

  // 詳細モーダルが開いていれば更新
  if (state.detailRecipe && state.detailRecipe.id === recipeId) {
    openDetailModal(recipeId);
  }
};

window.toggleShoppingDay = function(dayId) {
  if (state.shoppingDays.includes(dayId)) {
    state.shoppingDays = state.shoppingDays.filter(d => d !== dayId);
  } else {
    state.shoppingDays.push(dayId);
  }
  saveShoppingDays();
  renderShoppingList();
  updateSummaryBadge();
};

function calculateAggregatedShoppingList() {
  if (!state.weeklyPlan) return {};

  const aggregated = {};

  DAYS_OF_WEEK.forEach(day => {
    if (!state.shoppingDays.includes(day.id)) return;
    
    const dayData = state.weeklyPlan[day.id];
    if (!dayData) return;

    [dayData.main, dayData.side, dayData.soup].forEach(recipeId => {
      const recipe = getRecipeById(recipeId);
      if (!recipe) return;

      recipe.ingredients.forEach(ing => {
        const key = `${ing.name}__${ing.unit}`;
        const scaledAmount = ing.amount * state.servings;

        if (!aggregated[key]) {
          aggregated[key] = {
            name: ing.name,
            amount: 0,
            unit: ing.unit,
            aisle: ing.aisle || '調味料・その他'
          };
        }
        aggregated[key].amount += scaledAmount;
      });
    });
  });

  return aggregated;
}

function formatAmount(amount, unit) {
  if (unit === 'g') {
    if (amount >= 1000) {
      const kg = (amount / 1000).toFixed(1).replace(/\.0$/, '');
      return `約 ${kg}kg (${Math.round(amount)}g)`;
    }
    return `約 ${Math.round(amount)}g`;
  }
  if (unit === 'ml') {
    if (amount >= 1000) {
      const l = (amount / 1000).toFixed(1).replace(/\.0$/, '');
      return `約 ${l}L`;
    }
    return `約 ${Math.round(amount)}ml`;
  }
  if (unit === '個' || unit === '本' || unit === '枚' || unit === '袋' || unit === '株' || unit === '缶' || unit === '束' || unit === '切れ' || unit === '玉') {
    const rounded = Math.ceil(amount * 10) / 10;
    if (rounded === Math.floor(rounded)) {
      return `約 ${rounded} ${unit}`;
    }
    const lower = Math.floor(rounded);
    const upper = Math.ceil(rounded);
    return lower === 0 ? `約 1 ${unit}` : `約 ${lower}〜${upper} ${unit}`;
  }
  return `約 ${Math.round(amount * 10) / 10} ${unit}`;
}

// 家庭の基本常備調味料・基本ストック（隠す対象）
const BASIC_PANTRY_SEASONINGS = [
  'しょうゆ', '醤油', '濃口しょうゆ', '薄口しょうゆ',
  'みりん', '味醂', '本みりん',
  '料理酒', '酒', '清酒',
  '塩', '食塩', '塩こしょう', 'こしょう', '黒こしょう', '白こしょう', '粗挽き黒こしょう',
  '砂糖', '上白糖', 'きび砂糖', '三温糖',
  'サラダ油', 'ごま油', 'オリーブオイル', '米油', '油',
  '酢', '穀物酢', '米酢',
  'マヨネーズ', 'ケチャップ', 'トマトケチャップ',
  '味噌', 'みそ', '赤みそ', '合わせ味噌',
  'だしの素', '和風だしの素', '和風顆粒だし', 'ほんだし',
  '鶏がらスープの素', '顆粒鶏がらスープ', '鶏ガラスープの素',
  'コンソメ', '顆粒コンソメ', '固形コンソメ',
  'めんつゆ', 'めんつゆ（3倍濃縮）', 'めんつゆ（2倍濃縮）', '白だし',
  '片栗粉', '小麦粉', '薄力粉',
  'すりごま', 'いりごま', '白ごま', '黒ごま',
  'にんにくチューブ', '生姜チューブ', 'おろし生姜', 'おろしにんにく', 'チューブ生姜', 'チューブにんにく',
  'バター', '有塩バター', 'マーガリン'
];

function isBasicSeasoning(name) {
  if (!name) return false;
  const clean = name.trim();
  return BASIC_PANTRY_SEASONINGS.some(s => clean === s || clean.includes(s) || s.includes(clean));
}

// 自由買い足しメモの操作
window.handleAddCustomShoppingItem = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('input-custom-item-name');
  if (!input) return;
  const name = input.value.trim();
  if (!name) return;

  const newItem = {
    id: 'custom_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    name: name,
    isChecked: false
  };

  if (!state.customShoppingItems) state.customShoppingItems = [];
  state.customShoppingItems.push(newItem);
  saveCustomShoppingItems();
  input.value = '';
  renderShoppingList();
  showToast(`「${name}」を買い足しメモに追加しました！`);
};

window.toggleCheckCustomItem = function(id) {
  if (!state.customShoppingItems) return;
  const item = state.customShoppingItems.find(it => it.id === id);
  if (!item) return;
  item.isChecked = !item.isChecked;
  saveCustomShoppingItems();
  renderShoppingList();
};

window.removeCustomShoppingItem = function(id) {
  if (!state.customShoppingItems) return;
  const item = state.customShoppingItems.find(it => it.id === id);
  const name = item ? item.name : 'アイテム';
  state.customShoppingItems = state.customShoppingItems.filter(it => it.id !== id);
  saveCustomShoppingItems();
  renderShoppingList();
  showToast(`「${name}」を削除しました`);
};

window.toggleHideSeasonings = function(val) {
  state.hideSeasonings = typeof val === 'boolean' ? val : !state.hideSeasonings;
  saveHideSeasonings();
  const chk = document.getElementById('chk-hide-seasonings');
  if (chk) chk.checked = state.hideSeasonings;
  renderShoppingList();
  if (state.hideSeasonings) {
    showToast('🧂 基本調味料を隠しました（肉・野菜が見やすくなりました）');
  } else {
    showToast('🧂 基本調味料を表示しました');
  }
};

function renderShoppingList() {
  const container = document.getElementById('shopping-list-container');
  const purchasedContainer = document.getElementById('shopping-purchased-container');
  const purchasedBadge = document.getElementById('purchased-count-badge');
  const chkHide = document.getElementById('chk-hide-seasonings');
  if (chkHide) chkHide.checked = !!state.hideSeasonings;
  if (!container) return;

  const aggregated = calculateAggregatedShoppingList();
  const keys = Object.keys(aggregated);
  const customItems = Array.isArray(state.customShoppingItems) ? state.customShoppingItems : [];

  if (keys.length === 0 && customItems.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-400">
        <i data-lucide="shopping-cart" class="w-12 h-12 mx-auto mb-3 opacity-40"></i>
        <p>献立が選択されていません。「1週間の献立」タブから生成してください。</p>
      </div>
    `;
    if (purchasedContainer) purchasedContainer.innerHTML = '';
    if (purchasedBadge) purchasedBadge.textContent = '0件';
    safeCreateIcons();
    return;
  }

  const grouped = {};
  AISLE_ORDER.forEach(aisle => { grouped[aisle] = []; });
  const purchasedItems = [];
  let hiddenBasicSeasoningsCount = 0;

  keys.forEach(key => {
    const item = aggregated[key];
    const isChecked = !!state.checkedItems[key];
    if (isChecked) {
      purchasedItems.push({ key, ...item });
    } else {
      const aisle = grouped[item.aisle] ? item.aisle : '調味料・その他';
      if (aisle === '調味料・その他' && state.hideSeasonings && isBasicSeasoning(item.name)) {
        hiddenBasicSeasoningsCount++;
      } else {
        grouped[aisle].push({ key, ...item });
      }
    }
  });

  // カスタム買い足しメモの仕分け
  const uncheckCustomItems = customItems.filter(it => !it.isChecked);
  const checkedCustomItems = customItems.filter(it => it.isChecked);

  container.innerHTML = '';
  let totalUncheckedCount = 0;

  // 1. 自由な買い足しメモコーナー（未チェックのメモがある場合、最上部に全幅表示）
  if (uncheckCustomItems.length > 0) {
    totalUncheckedCount += uncheckCustomItems.length;
    const memoSection = document.createElement('div');
    memoSection.className = 'col-span-full bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-50/70 rounded-3xl border-2 border-amber-200/90 shadow-xs overflow-hidden mb-2';
    
    let memoHtml = uncheckCustomItems.map(item => `
      <div class="flex items-center justify-between p-3.5 hover:bg-amber-100/50 rounded-2xl select-none transition-all group">
        <label class="flex items-center gap-3 cursor-pointer flex-1">
          <input type="checkbox" 
                 class="w-5 h-5 rounded-md text-amber-600 focus:ring-amber-400 border-amber-300 transition cursor-pointer accent-amber-600"
                 onchange="toggleCheckCustomItem('${item.id}')">
          <span class="text-sm font-black text-slate-800 flex items-center gap-2">
            <span class="text-xs px-2 py-0.5 rounded-md bg-amber-200/80 text-amber-900 font-bold">メモ</span>
            <span>${item.name}</span>
          </span>
        </label>
        <button onclick="removeCustomShoppingItem('${item.id}')" class="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer" title="削除">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `).join('');

    memoSection.innerHTML = `
      <div class="px-5 py-3 border-b border-amber-200/80 flex items-center justify-between bg-gradient-to-r from-amber-200/50 via-orange-100/40 to-amber-100/50">
        <div class="flex items-center gap-2">
          <span class="text-lg leading-none">📝</span>
          <h3 class="font-black text-amber-950 text-sm">買い足し・日用品メモ</h3>
        </div>
        <span class="text-xs text-amber-900 font-bold bg-white/95 px-2.5 py-0.5 rounded-full border border-amber-300 shadow-2xs">${uncheckCustomItems.length}件</span>
      </div>
      <div class="p-2 divide-y divide-amber-200/50">
        ${memoHtml}
      </div>
    `;
    container.appendChild(memoSection);
  }

  // 2. 売り場別食材コーナー
  const aisleConfig = {
    '野菜': { icon: 'salad', emoji: '🥬', color: 'text-emerald-800 bg-emerald-100 border border-emerald-200' },
    '肉・魚': { icon: 'drumstick', emoji: '🥩', color: 'text-rose-800 bg-rose-100 border border-rose-200' },
    '大豆・乳・加工品': { icon: 'package-check', emoji: '🧈', color: 'text-amber-800 bg-amber-100 border border-amber-200' },
    '調味料・その他': { icon: 'soup', emoji: '🧂', color: 'text-indigo-800 bg-indigo-100 border border-indigo-200' }
  };

  AISLE_ORDER.forEach(aisle => {
    const items = grouped[aisle];
    if (items.length === 0 && (aisle !== '調味料・その他' || hiddenBasicSeasoningsCount === 0)) return;
    totalUncheckedCount += items.length;

    const conf = aisleConfig[aisle] || { icon: 'tag', emoji: '🏷️', color: 'text-slate-700 bg-slate-100 border border-slate-200' };

    const section = document.createElement('div');
    section.className = 'bg-white/95 rounded-3xl border-2 border-sky-100/90 shadow-sm overflow-hidden mb-5';

    let itemsHtml = items.map(item => {
      return `
        <label class="flex items-center justify-between p-3.5 hover:bg-sky-50/60 rounded-2xl cursor-pointer select-none transition-all border border-transparent hover:border-sky-100 active:scale-[0.99]">
          <div class="flex items-center gap-3">
            <input type="checkbox" 
                   class="w-5 h-5 rounded-md text-teal-600 focus:ring-teal-400 border-slate-300 transition cursor-pointer accent-teal-600"
                   onchange="toggleCheckItem('${item.key}')">
            <span class="text-sm font-bold text-slate-800">
              ${item.name}
            </span>
          </div>
          <span class="text-sm font-black text-teal-700">
            ${formatAmount(item.amount, item.unit)}
          </span>
        </label>
      `;
    }).join('');

    // 調味料が非表示中の場合のお知らせバー
    let seasoningNotice = '';
    if (aisle === '調味料・その他' && hiddenBasicSeasoningsCount > 0) {
      seasoningNotice = `
        <div class="m-3 p-2.5 rounded-2xl bg-indigo-50/90 border border-indigo-200/80 text-[11px] text-indigo-950 flex items-center justify-between shadow-2xs">
          <div class="flex items-center gap-1.5 font-bold">
            <span class="text-sm">🧂</span>
            <span>常備調味料 <strong>${hiddenBasicSeasoningsCount}件</strong> を非表示中</span>
          </div>
          <button onclick="toggleHideSeasonings(false)" class="text-indigo-700 hover:text-indigo-900 font-black underline cursor-pointer text-[11px] px-2 py-1 rounded-lg hover:bg-indigo-100 transition-colors">
            すべて表示する
          </button>
        </div>
      `;
    }

    section.innerHTML = `
      <div class="px-5 py-3 border-b border-sky-100 flex items-center justify-between bg-gradient-to-r from-sky-50/70 via-teal-50/40 to-lime-50/50">
        <div class="flex items-center gap-2">
          <span class="text-lg leading-none">${conf.emoji}</span>
          <h3 class="font-black text-slate-800 text-sm">${aisle}コーナー</h3>
        </div>
        <span class="text-xs text-teal-900 font-bold bg-white/90 px-2.5 py-0.5 rounded-full border border-teal-200/80 shadow-2xs">${items.length}品目</span>
      </div>
      ${seasoningNotice}
      <div class="p-3 divide-y divide-sky-100/60">
        ${itemsHtml || '<div class="text-center py-4 text-slate-400 text-xs font-medium">基本調味料を隠しているため表示中のアイテムはありません</div>'}
      </div>
    `;

    container.appendChild(section);
  });

  if (totalUncheckedCount === 0 && (purchasedItems.length > 0 || checkedCustomItems.length > 0)) {
    const emptyNotice = document.createElement('div');
    emptyNotice.className = 'col-span-full text-center py-8 bg-white rounded-3xl border-2 border-emerald-200 p-6 shadow-xs';
    emptyNotice.innerHTML = `
      <span class="text-4xl block mb-2">🎉</span>
      <h4 class="font-black text-emerald-800 text-base mb-1">すべての食材・買い足しメモを購入完了しました！</h4>
      <p class="text-xs text-slate-500">お買い出しお疲れ様でした。下の「購入済みの食材」をタップすると元に戻せます。</p>
    `;
    container.appendChild(emptyNotice);
  }

  // 購入済み食材エリアの描画
  const totalPurchasedCount = purchasedItems.length + checkedCustomItems.length;
  if (purchasedContainer) {
    if (totalPurchasedCount === 0) {
      purchasedContainer.innerHTML = `
        <div class="text-center py-4 text-slate-400 text-xs font-medium">
          購入済みの食材はまだありません（チェックした食材がここに移動します）
        </div>
      `;
    } else {
      let purchasedHtml = '';

      // カスタムメモの購入済み
      if (checkedCustomItems.length > 0) {
        purchasedHtml += checkedCustomItems.map(item => `
          <div class="flex items-center justify-between p-2.5 bg-white/80 hover:bg-white rounded-xl border border-amber-200/80 cursor-pointer select-none transition-all opacity-60 hover:opacity-100 group"
               onclick="toggleCheckCustomItem('${item.id}')" title="タップで買い物リストに戻す">
            <div class="flex items-center gap-2.5">
              <span class="w-4 h-4 rounded bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black">✓</span>
              <span class="text-xs font-bold text-slate-500 line-through group-hover:text-slate-800">
                ${item.name}
              </span>
              <span class="text-[10px] text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded font-bold">メモ</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] text-teal-600 font-bold hidden group-hover:inline">元に戻す</span>
            </div>
          </div>
        `).join('');
      }

      // レシピ食材の購入済み
      purchasedHtml += purchasedItems.map(item => `
        <div class="flex items-center justify-between p-2.5 bg-white/80 hover:bg-white rounded-xl border border-slate-200/60 cursor-pointer select-none transition-all opacity-60 hover:opacity-100 group"
             onclick="toggleCheckItem('${item.key}')" title="タップで買い物リストに戻す">
          <div class="flex items-center gap-2.5">
            <span class="w-4 h-4 rounded bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black">✓</span>
            <span class="text-xs font-bold text-slate-500 line-through group-hover:text-slate-800">
              ${item.name}
            </span>
            <span class="text-[10px] text-slate-400 font-medium">(${item.aisle})</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-400 line-through">
              ${formatAmount(item.amount, item.unit)}
            </span>
            <span class="text-[10px] text-teal-600 font-bold hidden group-hover:inline">元に戻す</span>
          </div>
        </div>
      `).join('');

      purchasedContainer.innerHTML = purchasedHtml;
    }
  }

  if (purchasedBadge) {
    purchasedBadge.textContent = `${totalPurchasedCount}件`;
  }

  safeCreateIcons();
}

window.toggleCheckItem = function(key) {
  state.checkedItems[key] = !state.checkedItems[key];
  saveChecked();
  renderShoppingList();
  if (state.familySyncCode) {
    pushSyncCheckedItem(key, state.checkedItems[key]);
  }
};

window.togglePurchasedSection = function() {
  const container = document.getElementById('shopping-purchased-container');
  const icon = document.getElementById('icon-toggle-purchased');
  if (!container) return;
  container.classList.toggle('hidden');
  if (icon) {
    icon.classList.toggle('rotate-180');
  }
};

function generateShoppingListText() {
  const aggregated = calculateAggregatedShoppingList();
  const grouped = {};
  AISLE_ORDER.forEach(aisle => { grouped[aisle] = []; });

  let hiddenCount = 0;
  Object.keys(aggregated).forEach(key => {
    const item = aggregated[key];
    const isChecked = !!state.checkedItems[key];
    if (!isChecked) {
      const aisle = grouped[item.aisle] ? item.aisle : '調味料・その他';
      if (aisle === '調味料・その他' && state.hideSeasonings && isBasicSeasoning(item.name)) {
        hiddenCount++;
      } else {
        grouped[aisle].push(item);
      }
    }
  });

  const customItems = Array.isArray(state.customShoppingItems) ? state.customShoppingItems.filter(it => !it.isChecked) : [];
  const weeklyCost = state.weeklyPlan ? calculatePlanTotalCost(state.weeklyPlan) : 0;
  let text = `【🛒 今週の買い物リスト（${state.servings}人分・目安 ¥${weeklyCost.toLocaleString()}）】\n`;

  let totalUnchecked = 0;

  // 1. 自由な買い足しメモ
  if (customItems.length > 0) {
    text += `\n■ 📝 買い足し・日用品メモ\n`;
    customItems.forEach(item => {
      text += `・${item.name}\n`;
      totalUnchecked++;
    });
  }

  // 2. 売り場別食材
  AISLE_ORDER.forEach(aisle => {
    const items = grouped[aisle];
    if (items.length > 0) {
      text += `\n■ ${aisle}コーナー\n`;
      items.forEach(item => {
        text += `・${item.name}: ${formatAmount(item.amount, item.unit)}\n`;
        totalUnchecked++;
      });
    }
  });

  if (totalUnchecked === 0) {
    return `【🛒 今週の買い物リスト（${state.servings}人分）】\nすべての食材・メモを購入済みです！🎉`;
  }

  if (state.hideSeasonings && hiddenCount > 0) {
    text += `\n※家にある基本調味料（しょうゆ、酒、油等）はリストから除外しています🧂\n`;
  }

  text += `\n※目標予算: ¥${state.targetBudget.toLocaleString()} / 冷蔵庫の在庫を確認してご購入ください✨\n\n🍳 節約献立＆買い物リスト作成:\nhttps://fi1025re-commits.github.io/frugal-meal-planner/`;
  return text;
}

function shareToLine() {
  const text = generateShoppingListText();
  // LINE公式URLスキーム（https://line.me/R/msg/text/?...）で確実にLINEアプリが起動
  const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(text)}`;
  window.open(lineUrl, '_blank');
}

function copyShoppingListToClipboard() {
  const text = generateShoppingListText();
  navigator.clipboard.writeText(text).then(() => {
    showToast('買い物リストをコピーしました！LINEやメモ帳に貼り付けできます');
  }).catch(() => {
    showToast('コピーに失敗しました');
  });
}

function renderRecipeBook() {
  const container = document.getElementById('recipe-book-container');
  if (!container) return;

  const categoryLabels = { main: '主菜', side: '副菜', soup: '汁物' };
  const categoryColors = {
    main: 'bg-gradient-to-r from-amber-500 to-orange-500',
    side: 'bg-gradient-to-r from-lime-500 to-emerald-500',
    soup: 'bg-gradient-to-r from-sky-500 to-teal-500'
  };

  let html = '';

  if (state.recipeBookMode === 'all') {
    // 全レシピ一覧表示
    let recipesToDisplay = RECIPES_DATA;

    // 除外（NG）フィルター
    if (state.showBlacklistedOnly) {
      recipesToDisplay = RECIPES_DATA.filter(r => state.blacklistedRecipeIds.includes(r.id));
      if (recipesToDisplay.length === 0) {
        container.innerHTML = `
          <div class="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <span class="text-4xl block mb-2">🚫</span>
            <h4 class="font-bold text-slate-700 text-base mb-1">除外（NG）中のレシピはありません</h4>
            <p class="text-xs text-slate-500">家族の好みに合わないレシピの「🚫」ボタンを押すと除外され、ここに一覧表示されます。<br>除外されたレシピは献立の自動提案から完全に排除されます。</p>
          </div>
        `;
        return;
      }
    } else if (state.showFavoritesOnly) {
      // お気に入りフィルター（除外中のものは出さない）
      recipesToDisplay = RECIPES_DATA.filter(r => state.favoriteRecipeIds.includes(r.id) && !state.blacklistedRecipeIds.includes(r.id));
      if (recipesToDisplay.length === 0) {
        container.innerHTML = `
          <div class="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <span class="text-4xl block mb-2">⭐</span>
            <h4 class="font-bold text-slate-700 text-base mb-1">お気に入りレシピがまだありません</h4>
            <p class="text-xs text-slate-500">気になるレシピの「★」マークを押すとここに追加され、献立に定期的に登場するようになります。</p>
          </div>
        `;
        return;
      }
    } else {
      // 通常の一覧表示（除外レシピは隠す）
      recipesToDisplay = RECIPES_DATA.filter(r => !state.blacklistedRecipeIds.includes(r.id));
    }

    // 検索クエリ
    if (state.searchQuery) {
      recipesToDisplay = recipesToDisplay.filter(r => 
        r.title.toLowerCase().includes(state.searchQuery) ||
        r.description.toLowerCase().includes(state.searchQuery) ||
        (r.tags && r.tags.some(t => t.toLowerCase().includes(state.searchQuery)))
      );
    }

    recipesToDisplay.forEach(recipe => {
      const cleanTitle = getCleanTitle(recipe);
      const extBadge = getExternalBadge(recipe);
      const cost5p = recipe.approxCostPerPerson * state.servings;
      const proteinLabel = recipe.proteinType ? PROTEIN_ICONS[recipe.proteinType] : null;
      const isFav = state.favoriteRecipeIds.includes(recipe.id);
      const isBlacklisted = state.blacklistedRecipeIds.includes(recipe.id);

      html += `
        <div class="bg-white/95 rounded-3xl border-2 ${isBlacklisted ? 'border-rose-300 bg-rose-50/30' : (recipe.url ? 'border-sky-200 bg-sky-50/20' : 'border-sky-100/90')} shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between cursor-pointer hover:border-sky-300 group relative"
             onclick="openDetailModal('${recipe.id}')">
          <div>
            <div class="flex items-center justify-between mb-2.5 flex-wrap gap-1">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="text-xs font-black text-white px-2.5 py-0.5 rounded-full shadow-2xs ${categoryColors[recipe.category]}">
                  ${categoryLabels[recipe.category]}
                </span>
                ${isBlacklisted ? `<span class="text-[10px] font-bold text-rose-700 bg-rose-100 border border-rose-300 px-2 py-0.5 rounded-full">🚫 献立除外中</span>` : ''}
                ${recipe.isCustom ? `<span class="text-[10px] font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full">⭐ 登録</span>` : ''}
                ${extBadge}
                ${recipe.cuisine ? `<span class="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">${CUISINE_LABELS[recipe.cuisine]}</span>` : ''}
                ${proteinLabel ? `<span class="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">${proteinLabel}</span>` : ''}
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-slate-400 flex items-center gap-1 font-bold">
                  <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                  ${recipe.time}
                </span>
                <button onclick="toggleFavorite('${recipe.id}', event)" class="p-1 rounded-lg transition-transform hover:scale-110 ${isFav ? 'text-amber-500' : 'text-slate-300 hover:text-amber-400'}" title="お気に入り（定期登板）">
                  <span class="text-lg leading-none">${isFav ? '★' : '☆'}</span>
                </button>
                <button onclick="toggleBlacklist('${recipe.id}', event)" class="p-1 rounded-lg transition-transform hover:scale-110 ${isBlacklisted ? 'text-rose-600 font-black' : 'text-slate-300 hover:text-rose-600'}" title="${isBlacklisted ? '除外を解除して献立候補に復帰' : 'このレシピを献立から除外（二度と出さない）'}">
                  <span class="text-base leading-none">🚫</span>
                </button>
                ${recipe.isCustom ? `
                  <button onclick="deleteCustomRecipe('${recipe.id}', event)" class="p-1 rounded-lg text-slate-300 hover:text-rose-600 hover:bg-rose-50 transition-all" title="このレシピを削除">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                  </button>
                ` : ''}
              </div>
            </div>
            <h4 class="font-black text-slate-800 group-hover:text-teal-700 transition-colors text-base mb-2 leading-snug break-words">
              ${cleanTitle}
            </h4>
            <p class="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
              ${recipe.description}
            </p>
            <div class="flex flex-wrap gap-1.5 mb-3">
              ${recipe.tags.map(t => `<span class="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-bold">#${t}</span>`).join('')}
            </div>
          </div>
  
          <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-slate-500 font-bold">${state.servings}人分目安: <strong class="text-teal-700 text-sm font-black">約¥${cost5p}</strong></span>
            ${isBlacklisted ? `
              <button onclick="toggleBlacklist('${recipe.id}', event)" class="px-3 py-1 bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold rounded-xl transition-all text-xs flex items-center gap-1 shadow-2xs">
                <span>除外を解除</span>
                <i data-lucide="rotate-ccw" class="w-3 h-3"></i>
              </button>
            ` : `
              <span class="text-teal-600 font-black flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                ${recipe.url ? '作り方・動画を見る' : '作り方を見る'}
                <i data-lucide="${recipe.url ? 'external-link' : 'chevron-right'}" class="w-3.5 h-3.5"></i>
              </span>
            `}
          </div>
        </div>
      `;
    });
  } else {
    // 今週の献立（曜日別）表示
    if (!state.weeklyPlan) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 text-slate-400 font-bold">
          <p>まずは「1週間の献立」タブから献立を生成してください。</p>
        </div>
      `;
      return;
    }

    const daysToShow = state.selectedDayFilter === 'all' 
      ? DAYS_OF_WEEK 
      : DAYS_OF_WEEK.filter(d => d.id === state.selectedDayFilter);

    daysToShow.forEach(day => {
      const dayData = state.weeklyPlan[day.id];
      if (!dayData) return;

      const theme = DAY_THEMES[day.id] || { name: day.name };
      html += `<div class="col-span-full text-lg font-black text-slate-800 mt-4 border-b-2 border-sky-100 pb-2 flex items-center gap-2">
        <span class="text-xl">📅</span> <span>${theme.name}の献立レシピ</span>
      </div>`;

      const recipeIds = [dayData.main, dayData.side, dayData.soup];
      recipeIds.forEach(id => {
        const recipe = getRecipeById(id);
        if (!recipe) return;

        const cleanTitle = getCleanTitle(recipe);
        const extBadge = getExternalBadge(recipe);
        const cost5p = recipe.approxCostPerPerson * state.servings;
        const proteinLabel = recipe.proteinType ? PROTEIN_ICONS[recipe.proteinType] : null;
        const isFav = state.favoriteRecipeIds.includes(recipe.id);
        const isBlacklisted = state.blacklistedRecipeIds.includes(recipe.id);

        html += `
          <div class="bg-white/95 rounded-3xl border-2 ${recipe.url ? 'border-sky-200 bg-sky-50/20' : 'border-sky-100/90'} shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between cursor-pointer hover:border-sky-300 group relative"
               onclick="openDetailModal('${recipe.id}')">
            <div>
              <div class="flex items-center justify-between mb-2.5 flex-wrap gap-1">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-xs font-black text-white px-2.5 py-0.5 rounded-full shadow-2xs ${categoryColors[recipe.category]}">
                    ${categoryLabels[recipe.category]}
                  </span>
                  ${recipe.isCustom ? `<span class="text-[10px] font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full">⭐ 登録</span>` : ''}
                  ${extBadge}
                  ${recipe.cuisine ? `<span class="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">${CUISINE_LABELS[recipe.cuisine]}</span>` : ''}
                  ${proteinLabel ? `<span class="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">${proteinLabel}</span>` : ''}
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-slate-400 flex items-center gap-1 font-bold">
                    <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                    ${recipe.time}
                  </span>
                  <button onclick="toggleFavorite('${recipe.id}', event)" class="p-1 rounded-lg transition-transform hover:scale-110 ${isFav ? 'text-amber-500' : 'text-slate-300 hover:text-amber-400'}" title="お気に入り登録">
                    <span class="text-lg leading-none">${isFav ? '★' : '☆'}</span>
                  </button>
                  <button onclick="toggleBlacklist('${recipe.id}', event)" class="p-1 rounded-lg transition-transform hover:scale-110 ${isBlacklisted ? 'text-rose-600 font-black' : 'text-slate-300 hover:text-rose-600'}" title="このレシピを献立から除外（二度と出さない）">
                    <span class="text-base leading-none">🚫</span>
                  </button>
                  ${recipe.isCustom ? `
                    <button onclick="deleteCustomRecipe('${recipe.id}', event)" class="p-1 rounded-lg text-slate-300 hover:text-rose-600 hover:bg-rose-50 transition-all" title="このレシピを削除">
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                  ` : ''}
                </div>
              </div>
              <h4 class="font-black text-slate-800 group-hover:text-teal-700 transition-colors text-base mb-2 leading-snug break-words">
                ${cleanTitle}
              </h4>
              <p class="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                ${recipe.description}
              </p>
              <div class="flex flex-wrap gap-1.5 mb-3">
                ${recipe.tags.map(t => `<span class="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-bold">#${t}</span>`).join('')}
              </div>
            </div>
    
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="text-slate-500 font-bold">${state.servings}人分目安: <strong class="text-teal-700 text-sm font-black">約¥${cost5p}</strong></span>
              <span class="text-teal-600 font-black flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                ${recipe.url ? '作り方・動画を見る' : '作り方を見る'}
                <i data-lucide="${recipe.url ? 'external-link' : 'chevron-right'}" class="w-3.5 h-3.5"></i>
              </span>
            </div>
          </div>
        `;
      });
    });
  }

  container.innerHTML = html;
  safeCreateIcons();
}

window.openPreferencesModal = function(isOnboarding = false) {
  const modal = document.getElementById('modal-preferences');
  const tabsContainer = document.getElementById('child-tabs-container');
  const checklistContainer = document.getElementById('preferences-dislikes-list');
  const modalTitle = document.getElementById('modal-preferences-title');
  const modalSubtitle = document.getElementById('modal-preferences-subtitle');
  const modalServings = document.getElementById('modal-servings-select');
  const modalChildrenCount = document.getElementById('modal-children-count-select');

  if (!modal) return;

  if (isOnboarding) {
    modalTitle.innerHTML = `👶 ご家族の人数とお子様の好み設定`;
    modalSubtitle.textContent = `お子様が苦手な食材や味付けを除外して、みんなが喜ぶ節約献立を作成します。（後からいつでも変更可能）`;
  } else {
    modalTitle.innerHTML = `👶 ご家族の人数とお子様の好み設定`;
    modalSubtitle.textContent = `苦手な食材や味付けを除外し、可能な場合は同じ材料で別メニューを提案します。`;
  }

  if (modalServings) {
    modalServings.value = state.servings;
  }

  if (modalChildrenCount) {
    modalChildrenCount.value = state.childrenCount;
    modalChildrenCount.onchange = (e) => {
      state.childrenCount = parseInt(e.target.value, 10);
      if (state.childrenCount > 0 && !state.activeChildTab) {
        state.activeChildTab = 'child1';
      }
      openPreferencesModal(isOnboarding);
    };
  }

  // お子様人数に応じたタブ生成
  if (tabsContainer) {
    if (state.childrenCount === 0) {
      tabsContainer.innerHTML = `
        <div class="w-full py-2.5 px-4 text-xs font-bold text-teal-800 bg-teal-50 flex items-center justify-center gap-1.5">
          <span>🌿</span>
          <span>大人・夫婦のみモード（お子様なし）</span>
        </div>
      `;
    } else {
      let tabsHtml = '';
      for (let i = 1; i <= state.childrenCount; i++) {
        const childKey = `child${i}`;
        const isActive = state.activeChildTab === childKey;
        tabsHtml += `
          <button data-child-tab="${childKey}" 
                  onclick="selectChildTab('${childKey}')"
                  class="flex-1 py-3 text-xs sm:text-sm font-bold transition-all border-b-2 whitespace-nowrap px-3 cursor-pointer ${
                    isActive 
                      ? 'text-teal-700 border-teal-600 bg-white shadow-2xs' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-white border-transparent'
                  }">
            子供${i}
          </button>
        `;
      }
      tabsContainer.innerHTML = tabsHtml;
    }
  }

  // チェックリストまたは0人向け案内の描画
  if (checklistContainer) {
    if (state.childrenCount === 0) {
      checklistContainer.innerHTML = `
        <div class="col-span-full py-8 text-center bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-2">
          <span class="text-3xl block">🍷✨</span>
          <h4 class="font-bold text-slate-800 text-sm">お子様設定なし（大人向け自由献立）</h4>
          <p class="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
            お子様の苦手食材による制限を行わず、お肉・魚・旬野菜を使ったバラエティ豊かな節約レシピを優先して生成します。
          </p>
        </div>
      `;
    } else {
      // 現在のタブが存在しない場合は child1 に合わせる
      const currentChildNum = parseInt(state.activeChildTab.replace('child', ''), 10) || 1;
      if (currentChildNum > state.childrenCount) {
        state.activeChildTab = 'child1';
      }

      const currentPref = state.childrenPreferences[state.activeChildTab] || { dislikes: [], disabledFlavors: [] };

      let html = `<div class="col-span-full text-xs font-black text-slate-700 mt-0.5 mb-1 flex items-center gap-1.5"><span>🥬</span><span>苦手な食材・野菜（タップで除外）</span></div>`;
      html += COMMON_DISLIKES.map(item => {
        const isChecked = currentPref.dislikes.includes(item.id);
        return `
          <label class="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border cursor-pointer select-none transition-all ${isChecked ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold shadow-2xs ring-1 ring-amber-300' : 'bg-slate-50/80 border-slate-200/90 text-slate-700 hover:bg-slate-100'}">
            <input type="checkbox" 
                   class="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-slate-300 cursor-pointer accent-amber-600 shrink-0"
                   value="${item.id}" 
                   data-type="ingredient"
                   ${isChecked ? 'checked' : ''} 
                   onchange="handleDislikeToggle(this)">
            <span class="text-base sm:text-lg shrink-0">${item.icon}</span>
            <span class="text-[11px] sm:text-xs font-bold leading-tight break-words">${item.label}</span>
          </label>
        `;
      }).join('');

      html += `<div class="col-span-full text-xs font-black text-slate-700 mt-3 pt-3 border-t border-slate-200/80 mb-1 flex items-center gap-1.5"><span>🌶️</span><span>苦手な味付け・その他</span></div>`;
      html += COMMON_FLAVORS.map(item => {
        const isChecked = currentPref.disabledFlavors.includes(item.id);
        return `
          <label class="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border cursor-pointer select-none transition-all ${isChecked ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold shadow-2xs ring-1 ring-amber-300' : 'bg-slate-50/80 border-slate-200/90 text-slate-700 hover:bg-slate-100'}">
            <input type="checkbox" 
                   class="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-slate-300 cursor-pointer accent-amber-600 shrink-0"
                   value="${item.id}" 
                   data-type="flavor"
                   ${isChecked ? 'checked' : ''} 
                   onchange="handleDislikeToggle(this)">
            <span class="text-base sm:text-lg shrink-0">${item.icon}</span>
            <span class="text-[11px] sm:text-xs font-bold leading-tight break-words">${item.label}</span>
          </label>
        `;
      }).join('');

      checklistContainer.innerHTML = html;
    }
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  safeCreateIcons();
};

window.selectChildTab = function(childKey) {
  state.activeChildTab = childKey;
  openPreferencesModal(false);
};

window.handleDislikeToggle = function(checkbox) {
  const val = checkbox.value;
  const type = checkbox.getAttribute('data-type');
  if (!state.childrenPreferences[state.activeChildTab]) {
    state.childrenPreferences[state.activeChildTab] = { dislikes: [], disabledFlavors: [] };
  }
  const currentPref = state.childrenPreferences[state.activeChildTab];

  if (type === 'ingredient') {
    if (checkbox.checked) {
      if (!currentPref.dislikes.includes(val)) currentPref.dislikes.push(val);
    } else {
      currentPref.dislikes = currentPref.dislikes.filter(d => d !== val);
    }
  } else if (type === 'flavor') {
    if (checkbox.checked) {
      if (!currentPref.disabledFlavors.includes(val)) currentPref.disabledFlavors.push(val);
    } else {
      currentPref.disabledFlavors = currentPref.disabledFlavors.filter(d => d !== val);
    }
  }

  // 親ラベルのハイライト即時切り替え（再描画なしで爆速反応）
  const parentLabel = checkbox.closest('label');
  if (parentLabel) {
    if (checkbox.checked) {
      parentLabel.className = 'flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border cursor-pointer select-none transition-all bg-amber-50 border-amber-400 text-amber-950 font-bold shadow-2xs ring-1 ring-amber-300';
    } else {
      parentLabel.className = 'flex items-center gap-2 p-2 sm:p-2.5 rounded-xl border cursor-pointer select-none transition-all bg-slate-50/80 border-slate-200/90 text-slate-700 hover:bg-slate-100';
    }
  }
};

window.savePreferencesAndGenerate = function() {
  const modalServings = document.getElementById('modal-servings-select');
  if (modalServings) {
    const newServings = parseInt(modalServings.value, 10);
    if (newServings && newServings !== state.servings) {
      state.servings = newServings;
      saveServings();
      state.targetBudget = state.servings * 1500;
      saveBudget();
      const servingsSelect = document.getElementById('servings-select');
      if (servingsSelect) servingsSelect.value = state.servings;
      const budgetInput = document.getElementById('target-budget-input');
      if (budgetInput) budgetInput.value = state.targetBudget;
    }
  }

  const modalChildrenCount = document.getElementById('modal-children-count-select');
  if (modalChildrenCount) {
    state.childrenCount = parseInt(modalChildrenCount.value, 10);
    localStorage.setItem(STORAGE_KEY_CHILDREN_COUNT, state.childrenCount);
  }

  saveChildrenPreferences();
  saveOnboarding();
  state.hasCompletedOnboarding = true;
  closePreferencesModal();
  generateRandomWeeklyPlan(true);

  if (state.familySyncCode) {
    pushSyncDataDebounced();
  }
};

window.closePreferencesModal = function() {
  const modal = document.getElementById('modal-preferences');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
};

window.openDetailModal = function(recipeId) {
  const recipe = getRecipeById(recipeId);
  if (!recipe) return;

  state.detailRecipe = recipe;
  const modal = document.getElementById('modal-recipe-detail');
  const content = document.getElementById('modal-detail-content');

  const categoryLabels = { main: '主菜', side: '副菜', soup: '汁物' };
  const cost5p = recipe.approxCostPerPerson * state.servings;
  const cleanTitle = getCleanTitle(recipe);
  const extBadge = getExternalBadge(recipe);
  const cuisineBadge = recipe.cuisine ? `<span class="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">${CUISINE_LABELS[recipe.cuisine]}</span>` : '';
  const proteinBadge = recipe.proteinType ? `<span class="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">${PROTEIN_ICONS[recipe.proteinType]}</span>` : '';

  let categoryBadgeClass = 'bg-gradient-to-r from-sky-500 to-teal-500 text-white';
  if (recipe.category === 'main') categoryBadgeClass = 'bg-gradient-to-r from-amber-500 to-orange-500 text-white';
  else if (recipe.category === 'side') categoryBadgeClass = 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white';

  content.innerHTML = `
    <div class="p-6 border-b border-sky-100 bg-white">
      <div class="flex items-center gap-2 mb-3 flex-wrap">
        <span class="text-xs font-black px-3 py-1 rounded-full shadow-2xs ${categoryBadgeClass}">
          ${categoryLabels[recipe.category]}
        </span>
        ${cuisineBadge}
        ${proteinBadge}
        ${extBadge}
        <span class="text-xs text-slate-500 font-bold">⏱️ 調理時間 約${recipe.time}</span>
        <span class="text-xs font-black text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full ml-auto shadow-2xs">
          ${state.servings}人分目安: 約¥${cost5p}
        </span>
      </div>

      <div class="flex items-center justify-between gap-2 mb-2 flex-wrap">
        <h3 class="text-xl font-black text-slate-900 leading-snug">${cleanTitle}</h3>
        <div class="flex items-center gap-2 flex-wrap">
          <button onclick="toggleFavorite('${recipe.id}', event)" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs ${state.favoriteRecipeIds.includes(recipe.id) ? 'bg-amber-400 text-amber-950 font-black ring-2 ring-amber-300' : 'bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-800'}">
            <span class="text-base">${state.favoriteRecipeIds.includes(recipe.id) ? '★' : '☆'}</span>
            <span>${state.favoriteRecipeIds.includes(recipe.id) ? 'お気に入り中' : 'お気に入り'}</span>
          </button>
          <button onclick="toggleBlacklist('${recipe.id}', event)" class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs ${state.blacklistedRecipeIds.includes(recipe.id) ? 'bg-rose-600 text-white font-black ring-2 ring-rose-400' : 'bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-700'}">
            <span class="text-sm">🚫</span>
            <span>${state.blacklistedRecipeIds.includes(recipe.id) ? '除外中' : '献立から除外'}</span>
          </button>
        </div>
      </div>
      <p class="text-sm text-slate-600 leading-relaxed">${recipe.description}</p>
      
      <div class="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 text-xs text-emerald-950 leading-relaxed">
        <span class="text-lg">👶</span>
        <div>
          <strong class="font-bold text-emerald-800">お子様が喜ぶポイント・克服のコツ：</strong>
          ${recipe.kidsTip || '子供も食べやすいマイルドな味付けです。'}
        </div>
      </div>

      <div class="mt-2.5 p-3.5 bg-amber-50/80 border border-amber-200/70 rounded-xl flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
        <i data-lucide="sparkles" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
        <div>
          <strong class="font-bold text-amber-800">節約＆かさ増し技：</strong>
          ${recipe.tip}
        </div>
      </div>
    </div>

    <div class="p-6 border-b border-slate-100 bg-slate-50/50">
      <h4 class="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
        <i data-lucide="shopping-basket" class="w-4 h-4 text-emerald-600"></i>
        材料（${state.servings}人分）
      </h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        ${recipe.ingredients.map(ing => {
          const scaledAmount = ing.amount * state.servings;
          return `
            <div class="flex justify-between py-1.5 px-3 bg-white rounded-lg border border-slate-200/60">
              <span class="text-slate-700 font-medium">${ing.name}</span>
              <span class="text-slate-900 font-bold">${formatAmount(scaledAmount, ing.unit)}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="p-6">
      <h4 class="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
        <i data-lucide="chef-hat" class="w-4 h-4 text-emerald-600"></i>
        作り方手順（3ステップ）
      </h4>
      <ol class="space-y-3 mb-4">
        ${(recipe.instructions && recipe.instructions.length > 0 ? recipe.instructions : ['材料を切って下ごしらえをします。', 'フライパンや鍋で加熱調理します。', '調味料で味を調えて完成です。']).map((step, idx) => `
          <li class="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs shrink-0 mt-0.5">
              ${idx + 1}
            </span>
            <span>${step}</span>
          </li>
        `).join('')}
      </ol>
      ${recipe.url ? `
        <div class="mt-4 bg-gradient-to-r from-sky-50 to-indigo-50 rounded-xl p-4 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="text-2xl">${recipe.url.includes('youtube') ? '📺' : '🌐'}</span>
            <div>
              <p class="text-xs font-bold text-sky-950">${recipe.url.includes('youtube') ? 'YouTube動画で手順・コツを見る' : '外部公式サイトで詳しく見る'}</p>
              <p class="text-[11px] text-sky-700">プロの手順動画やユーザーの口コミ・写真を確認できます</p>
            </div>
          </div>
          <a href="${recipe.url}" target="_blank" rel="noopener noreferrer" class="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-lg transition-all shadow-xs hover:shadow">
            <span>${recipe.url.includes('youtube') ? '動画を見る' : '外部レシピを見る'}</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      ` : ''}
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  safeCreateIcons();
};

window.toggleFavorite = function(recipeId, event) {
  if (event) event.stopPropagation();
  const index = state.favoriteRecipeIds.indexOf(recipeId);
  if (index > -1) {
    state.favoriteRecipeIds.splice(index, 1);
    showToast('お気に入りを解除しました');
  } else {
    state.favoriteRecipeIds.push(recipeId);
    showToast('★ お気に入りに登録しました！定期的に献立へ登場します');
  }
  saveFavorites();
  updateFavBadge();
  renderWeeklyPlan();
  renderRecipeBook();
  if (state.detailRecipe && state.detailRecipe.id === recipeId) {
    openDetailModal(recipeId);
  }
};

function updateFavBadge() {
  const badge = document.getElementById('fav-count-badge');
  if (badge) {
    badge.textContent = state.favoriteRecipeIds.length.toString();
  }
}

window.closeDetailModal = function() {
  const modal = document.getElementById('modal-recipe-detail');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  state.detailRecipe = null;
};

state.changeCategoryFilter = 'all'; // 'all', 'meat', 'fish', 'other'

window.setChangeModalCategoryFilter = function(filter) {
  state.changeCategoryFilter = filter;
  document.querySelectorAll('[data-change-filter]').forEach(b => {
    const f = b.getAttribute('data-change-filter');
    if (f === filter) {
      b.className = 'px-3 py-1 rounded-xl text-xs font-bold bg-teal-600 text-white shadow-2xs';
    } else {
      b.className = 'px-3 py-1 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors';
    }
  });
  renderChangeRecipeList();
};

function renderChangeRecipeList() {
  const listContainer = document.getElementById('modal-change-list');
  if (!listContainer || !state.changeTarget) return;

  const { dayId, category } = state.changeTarget;
  let recipes = RECIPES_DATA.filter(r => r.category === category && !state.blacklistedRecipeIds.includes(r.id));
  const currentId = state.weeklyPlan[dayId][category];

  // 簡易カテゴリフィルタ（第14条: おまかせ / 肉系 / 魚系 / その他）
  if (state.changeCategoryFilter === 'meat') {
    recipes = recipes.filter(r => ['pork', 'chicken', 'mince'].includes(r.proteinType) || r.title.includes('肉') || r.title.includes('豚') || r.title.includes('鶏'));
  } else if (state.changeCategoryFilter === 'fish') {
    recipes = recipes.filter(r => r.proteinType === 'fish' || r.title.includes('魚') || r.title.includes('鮭') || r.title.includes('サバ') || r.title.includes('ツナ') || r.title.includes('ぶり'));
  } else if (state.changeCategoryFilter === 'other') {
    recipes = recipes.filter(r => (!['pork', 'chicken', 'mince', 'fish'].includes(r.proteinType)) || r.proteinType === 'tofu' || r.proteinType === 'soy');
  }

  if (recipes.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-8 text-slate-400 text-xs">
        該当するレシピがありません。「おまかせ」をお試しください。
      </div>
    `;
    return;
  }

  listContainer.innerHTML = recipes.map(r => {
    const isSelected = r.id === currentId;
    const isDisliked = !Object.values(state.childrenPreferences).every(pref => canChildEat(r, pref));
    const proteinText = r.proteinType ? PROTEIN_ICONS[r.proteinType] : '';
    const isFav = state.favoriteRecipeIds.includes(r.id);
    const cleanTitle = getCleanTitle(r);
    const extBadge = getExternalBadge(r);

    return `
      <div class="p-3.5 rounded-2xl border-2 ${isSelected ? 'border-teal-400 bg-teal-50/70 shadow-xs' : 'border-slate-200/80 hover:border-teal-300 hover:bg-teal-50/30'} cursor-pointer flex items-center justify-between transition-all"
           onclick="selectAlternativeRecipe('${r.id}')">
        <div>
          <div class="font-black text-sm text-slate-900 mb-1 flex items-center gap-1.5 flex-wrap leading-snug">
            ${isSelected ? '<span class="text-[10px] bg-teal-600 text-white px-2 py-0.5 rounded-full font-bold shadow-2xs">選択中</span>' : ''}
            ${extBadge}
            <span>${cleanTitle}</span>
            ${isFav ? '<span class="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">★ お気に入り</span>' : ''}
            ${r.cuisine ? `<span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">${CUISINE_LABELS[r.cuisine]}</span>` : ''}
            ${proteinText ? `<span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">${proteinText}</span>` : ''}
            ${isDisliked ? '<span class="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold">子供の苦手食材あり</span>' : ''}
          </div>
          <div class="text-xs text-slate-500 flex items-center gap-3 font-medium">
            <span>⏱️ ${r.time}</span>
            <span>目安: 約¥${r.approxCostPerPerson * state.servings} (${state.servings}人分)</span>
          </div>
        </div>
        <button class="text-xs font-black text-teal-900 bg-teal-100 hover:bg-teal-200 px-3.5 py-1.5 rounded-xl transition-colors shadow-2xs shrink-0 ml-2">
          これにする
        </button>
      </div>
    `;
  }).join('');
}

window.openChangeModal = function(dayId, category) {
  state.changeTarget = { dayId, category };
  state.changeCategoryFilter = 'all';
  const modal = document.getElementById('modal-change-recipe');
  const titleEl = document.getElementById('modal-change-title');

  const dayObj = DAYS_OF_WEEK.find(d => d.id === dayId);
  const categoryLabels = { main: '主菜', side: '副菜', soup: '汁物' };

  titleEl.textContent = `${dayObj.name}の【${categoryLabels[category]}】を変更`;

  document.querySelectorAll('[data-change-filter]').forEach(b => {
    const f = b.getAttribute('data-change-filter');
    if (f === 'all') {
      b.className = 'px-3 py-1 rounded-xl text-xs font-bold bg-teal-600 text-white shadow-2xs';
    } else {
      b.className = 'px-3 py-1 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors';
    }
  });

  renderChangeRecipeList();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.selectAlternativeRecipe = function(newRecipeId) {
  if (!state.changeTarget) return;

  const { dayId, category } = state.changeTarget;
  state.weeklyPlan[dayId][category] = newRecipeId;

  savePlan();
  closeChangeModal();
  renderWeeklyPlan();
  renderShoppingList();
  updateSummaryBadge();
  showToast('メニューを変更しました');

  if (state.familySyncCode) {
    pushSyncDayPlan(dayId);
  }
};

window.closeChangeModal = function() {
  const modal = document.getElementById('modal-change-recipe');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  state.changeTarget = null;
};

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
  }, 2800);
}

// ==================== 外部・自作レシピ登録機能 ====================

window.openAddRecipeModal = function() {
  const modal = document.getElementById('modal-add-recipe');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  safeCreateIcons();
};

window.closeAddRecipeModal = function() {
  const modal = document.getElementById('modal-add-recipe');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
};

function parseCustomIngredients(text) {
  if (!text || !text.trim()) {
    return [
      { name: "お好みの食材", amount: 1, unit: "人分", aisle: "野菜" }
    ];
  }

  const lines = text.split(/[\n,、]/).map(s => s.trim()).filter(Boolean);
  const results = [];

  const meatFishWords = ["肉", "豚", "牛", "鶏", "ひき肉", "挽肉", "魚", "サバ", "さば", "鮭", "しゃけ", "サーモン", "ブリ", "ぶり", "鱈", "たら", "エビ", "えび", "イカ", "いか", "ツナ", "しらす", "タコ", "貝", "アサリ"];
  const dairyTofuWords = ["豆腐", "油揚げ", "厚揚げ", "納豆", "卵", "たまご", "チーズ", "牛乳", "バター", "ちくわ", "カニカマ", "かにかま", "ハム", "ベーコン", "ウインナー", "ソーセージ", "こんにゃく", "糸こん"];
  const seasoningWords = ["醤油", "しょうゆ", "みりん", "酒", "砂糖", "塩", "味噌", "みそ", "酢", "油", "ごま油", "ポン酢", "ぽん酢", "だし", "出汁", "コンソメ", "鶏ガラ", "ガラスープ", "カレー", "ケチャップ", "マヨネーズ", "片栗粉", "小麦粉", "ごま", "コショウ", "胡椒", "ソース", "めんつゆ", "オイスター", "にんにく", "生姜", "ショウガ"];

  lines.forEach(line => {
    // 例: "豚こま肉 80g", "大根 0.5本", "卵 1個", "キャベツ 1/4個"
    const match = line.match(/^([^\d\s\/\.]+)\s*([\d\.\/]+)?\s*([^\d\s]+)?$/);
    let name = line;
    let amount = 1;
    let unit = "個";

    if (match) {
      name = match[1].trim();
      if (match[2]) {
        if (match[2].includes('/')) {
          const parts = match[2].split('/');
          amount = parseFloat(parts[0]) / parseFloat(parts[1]) || 1;
        } else {
          amount = parseFloat(match[2]) || 1;
        }
      }
      if (match[3]) {
        unit = match[3].trim();
      } else {
        unit = "個";
      }
    }

    let aisle = "野菜";
    if (meatFishWords.some(w => name.includes(w))) {
      aisle = "肉・魚";
    } else if (dairyTofuWords.some(w => name.includes(w))) {
      aisle = "大豆・乳・加工品";
    } else if (seasoningWords.some(w => name.includes(w))) {
      aisle = "調味料・その他";
    }

    results.push({ name, amount, unit, aisle });
  });

  return results.length > 0 ? results : [
    { name: text.trim(), amount: 1, unit: "人分", aisle: "野菜" }
  ];
}

window.handleAddRecipeSubmit = function(e) {
  e.preventDefault();

  const titleInput = document.getElementById('add-recipe-title');
  const title = titleInput ? titleInput.value.trim() : '';
  if (!title) return;

  const urlOrMemo = document.getElementById('add-recipe-url')?.value?.trim() || '';
  const isUrl = urlOrMemo.startsWith('http://') || urlOrMemo.startsWith('https://');
  const rawIngredients = document.getElementById('add-recipe-ingredients')?.value || '';
  const isFav = document.getElementById('add-recipe-fav')?.checked ?? true;

  const parsedIngredients = parseCustomIngredients(rawIngredients);
  const newId = `custom_${Date.now()}`;

  // 食材からたんぱく質を推測
  let detectedProtein = 'pork';
  const ingStr = rawIngredients.toLowerCase();
  if (ingStr.includes('鶏') || ingStr.includes('チキン')) detectedProtein = 'chicken';
  else if (ingStr.includes('豚')) detectedProtein = 'pork';
  else if (ingStr.includes('ひき肉') || ingStr.includes('ミンチ')) detectedProtein = 'mince';
  else if (ingStr.includes('魚') || ingStr.includes('鮭') || ingStr.includes('サバ') || ingStr.includes('ぶり') || ingStr.includes('エビ')) detectedProtein = 'fish';
  else if (ingStr.includes('豆腐') || ingStr.includes('卵')) detectedProtein = 'tofu';

  const newRecipe = {
    id: newId,
    title: (isUrl && !title.includes('外部') && !title.includes('登録')) ? `【登録】${title}` : title,
    category: 'main',
    cuisine: 'japanese',
    proteinType: detectedProtein,
    season: 'all',
    time: '15分',
    approxCostPerPerson: 120,
    tags: ["登録レシピ", ...(isUrl ? ["外部レシピ"] : [])],
    containsDislikes: [],
    description: !isUrl && urlOrMemo ? urlOrMemo : (isUrl ? '外部サイト・動画の登録レシピです。' : 'ご家庭のオリジナル登録レシピです。'),
    kidsTip: 'ご家庭のお好みに合わせて味付けを調整してください。',
    tip: 'お買い得食材を活用してさらに節約可能！',
    url: isUrl ? urlOrMemo : undefined,
    ingredients: parsedIngredients,
    instructions: isUrl ? ['詳しい作り方や動画はリンク先をご覧ください。'] : (urlOrMemo ? [urlOrMemo] : ['お好みの味付けで調理してください。']),
    isCustom: true
  };

  state.customRecipes.push(newRecipe);
  RECIPES_DATA.push(newRecipe);
  saveCustomRecipes();

  if (isFav && !state.favoriteRecipeIds.includes(newId)) {
    state.favoriteRecipeIds.push(newId);
    saveFavorites();
    updateFavBadge();
  }

  const form = document.getElementById('form-add-recipe');
  if (form) form.reset();

  closeAddRecipeModal();
  renderRecipeBook();
  showToast(`「${title}」をレシピ集に登録しました！`);
};

window.deleteCustomRecipe = function(id, event) {
  if (event) event.stopPropagation();
  if (!confirm('この登録レシピを削除しますか？')) return;

  // state.customRecipes から削除
  state.customRecipes = state.customRecipes.filter(r => r.id !== id);
  saveCustomRecipes();

  // RECIPES_DATA から削除
  const idx = RECIPES_DATA.findIndex(r => r.id === id);
  if (idx !== -1) {
    RECIPES_DATA.splice(idx, 1);
  }

  // お気に入りからも削除
  if (state.favoriteRecipeIds.includes(id)) {
    state.favoriteRecipeIds = state.favoriteRecipeIds.filter(favId => favId !== id);
    saveFavorites();
    updateFavBadge();
  }

  renderRecipeBook();
  showToast('レシピを削除しました');
};
