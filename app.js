// 5人家族向け食費節約アプリ コアロジック (app.js)

// アプリ全体の状態
const state = {
  servings: 5, // デフォルト5人家族
  targetBudget: 7500, // 1週間の目標予算（円）初期値
  weeklyPlan: null, // { mon: { main: id, side: id, soup: id }, ... }
  checkedItems: {}, // { '合挽き肉_g': true, ... }
  childrenPreferences: {
    child1: { dislikes: [], disabledFlavors: [] },
    child2: { dislikes: [], disabledFlavors: [] },
    child3: { dislikes: [], disabledFlavors: [] }
  },
  activeChildTab: 'child1',
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
  customRecipes: [] // ユーザーが追加登録した外部・オリジナルレシピ
};

// LocalStorage キー
const STORAGE_KEY_PLAN = 'frugal_weekly_plan_v8';
const STORAGE_KEY_SERVINGS = 'frugal_servings_v3';
const STORAGE_KEY_BUDGET = 'frugal_target_budget_v3';
const STORAGE_KEY_CHECKED = 'frugal_checked_items_v3';
const STORAGE_KEY_DISLIKES = 'frugal_disliked_ingredients_v3';
const STORAGE_KEY_CHILDREN_PREF = 'frugal_children_pref_v3';
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
document.addEventListener('DOMContentLoaded', () => {
  try {
    loadSavedState();
    updateFavBadge();
    updateNgBadge();
    safeCreateIcons();
    setupEventListeners();
    render();

    // 初回利用者はまず「使い方ガイド」を表示
    const guideSeen = localStorage.getItem(STORAGE_KEY_GUIDE_SEEN);
    if (!guideSeen) {
      setTimeout(() => {
        openGuideModal();
      }, 400);
    } else if (!state.hasCompletedOnboarding) {
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
    state.servings = parseInt(savedServings, 10) || 5;
  }

  const savedBudget = localStorage.getItem(STORAGE_KEY_BUDGET);
  if (savedBudget) {
    state.targetBudget = parseInt(savedBudget, 10) || 7500;
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

  if (!state.weeklyPlan || Object.keys(state.weeklyPlan).length === 0) {
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
  const filtered = recipes.filter(recipe => {
    if (!recipe) return false;
    // 全ての子供が（直接、または代替メニューで）食べられるかチェック
    const allChildrenCanEat = Object.values(state.childrenPreferences).every(pref => {
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

  const hasDislikedTag = recipe.containsDislikes && recipe.containsDislikes.some(d => dislikes.includes(d));
  if (hasDislikedTag) return false;

  const ingredients = recipe.ingredients || [];
  const hasDislikedIngredient = ingredients.some(ing => {
    return ing && ing.name && dislikes.some(dis => ing.name.includes(dis));
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
}

function savePlan() {
  localStorage.setItem(STORAGE_KEY_PLAN, JSON.stringify(state.weeklyPlan));
}

function saveServings() {
  localStorage.setItem(STORAGE_KEY_SERVINGS, state.servings.toString());
}

function saveBudget() {
  localStorage.setItem(STORAGE_KEY_BUDGET, state.targetBudget.toString());
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
        saveChecked();
        renderShoppingList();
        showToast('チェックをリセットしました');
      }
    });
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

  // スマホ実機確認モーダル
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

  const btnCopyMobile = document.getElementById('btn-copy-mobile-url');
  if (btnCopyMobile) {
    btnCopyMobile.addEventListener('click', copyMobileUrl);
  }

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

  // データ初期化ボタン
  const btnResetData = document.getElementById('btn-reset-data');
  if (btnResetData) {
    btnResetData.addEventListener('click', handleResetData);
  }
}

// 使い方ガイドの制御
window.openGuideModal = function() {
  const modal = document.getElementById('modal-guide');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  safeCreateIcons();
};

window.closeGuideModal = function() {
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
};

// ご意見・バグ報告フォームの制御
window.openFeedbackModal = function() {
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
};

window.closeFeedbackModal = function() {
  const modal = document.getElementById('modal-feedback');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
};

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


window.copyMobileUrl = function() {
  const url = document.getElementById('modal-mobile-url')?.textContent?.trim() || 'http://192.168.3.181:8080/';
  navigator.clipboard.writeText(url).then(() => {
    showToast('スマホ接続用URLをコピーしました！');
  }).catch(() => {
    showToast('コピーに失敗しました');
  });
};

function render() {
  renderTabs();
  renderWeeklyPlan();
  renderShoppingList();
  renderRecipeBook();
  updateSummaryBadge();
  updatePreferenceBadge();
  safeCreateIcons();
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
  if (!container || !state.weeklyPlan) return;

  container.innerHTML = '';

  DAYS_OF_WEEK.forEach((day) => {
    const dayData = state.weeklyPlan[day.id];
    if (!dayData) return;

    const mainRecipe = getRecipeById(dayData.main);
    const sideRecipe = getRecipeById(dayData.side);
    const soupRecipe = getRecipeById(dayData.soup);

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

  // 代替メニューが必要な子供がいるかチェック
  let altMenus = [];
  Object.keys(state.childrenPreferences).forEach(childId => {
    const pref = state.childrenPreferences[childId];
    if (!canChildEat(recipe, pref) && recipe.baseIngredientsGroup) {
      const alt = RECIPES_DATA.find(r => 
        r.baseIngredientsGroup === recipe.baseIngredientsGroup && 
        r.id !== recipe.id &&
        canChildEat(r, pref)
      );
      if (alt) {
        altMenus.push({ childId, alt });
      }
    }
  });

  const childLabels = { child1: '子供1', child2: '子供2', child3: '子供3' };
  let altHtml = '';
  if (altMenus.length > 0) {
    altHtml = altMenus.map(m => `
      <div class="mt-2 pl-2.5 border-l-3 border-amber-400 flex items-center justify-between bg-amber-50/90 rounded-r-xl p-2">
        <div class="flex items-center gap-2">
          <span class="text-[10px] font-black text-amber-900 bg-amber-200/90 px-2 py-0.5 rounded-full">別メニュー (${childLabels[m.childId]})</span>
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

function renderShoppingList() {
  const container = document.getElementById('shopping-list-container');
  if (!container) return;

  const aggregated = calculateAggregatedShoppingList();
  const keys = Object.keys(aggregated);

  if (keys.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400">
        <i data-lucide="shopping-cart" class="w-12 h-12 mx-auto mb-3 opacity-40"></i>
        <p>献立が選択されていません。「1週間の献立」タブから生成してください。</p>
      </div>
    `;
    safeCreateIcons();
    return;
  }

  const grouped = {};
  AISLE_ORDER.forEach(aisle => { grouped[aisle] = []; });

  keys.forEach(key => {
    const item = aggregated[key];
    const aisle = grouped[item.aisle] ? item.aisle : '調味料・その他';
    grouped[aisle].push({ key, ...item });
  });

  const aisleConfig = {
    '野菜': { icon: 'salad', emoji: '🥬', color: 'text-emerald-800 bg-emerald-100 border border-emerald-200' },
    '肉・魚': { icon: 'drumstick', emoji: '🥩', color: 'text-rose-800 bg-rose-100 border border-rose-200' },
    '大豆・乳・加工品': { icon: 'package-check', emoji: '🧈', color: 'text-amber-800 bg-amber-100 border border-amber-200' },
    '調味料・その他': { icon: 'soup', emoji: '🧂', color: 'text-indigo-800 bg-indigo-100 border border-indigo-200' }
  };

  container.innerHTML = '';

  AISLE_ORDER.forEach(aisle => {
    const items = grouped[aisle];
    if (items.length === 0) return;

    const conf = aisleConfig[aisle] || { icon: 'tag', emoji: '🏷️', color: 'text-slate-700 bg-slate-100 border border-slate-200' };

    const section = document.createElement('div');
    section.className = 'bg-white/95 rounded-3xl border-2 border-sky-100/90 shadow-sm overflow-hidden mb-5';

    let itemsHtml = items.map(item => {
      const isChecked = !!state.checkedItems[item.key];
      return `
        <label class="flex items-center justify-between p-3.5 hover:bg-sky-50/40 rounded-2xl cursor-pointer select-none transition-colors border border-transparent hover:border-sky-100 ${isChecked ? 'bg-slate-50/70 opacity-40' : ''}">
          <div class="flex items-center gap-3">
            <input type="checkbox" 
                   class="w-5 h-5 rounded-md text-teal-600 focus:ring-teal-400 border-slate-300 transition cursor-pointer accent-teal-600"
                   ${isChecked ? 'checked' : ''} 
                   onchange="toggleCheckItem('${item.key}')">
            <span class="text-sm font-bold ${isChecked ? 'line-through text-slate-400' : 'text-slate-800'}">
              ${item.name}
            </span>
          </div>
          <span class="text-sm font-black ${isChecked ? 'text-slate-400' : 'text-teal-700'}">
            ${formatAmount(item.amount, item.unit)}
          </span>
        </label>
      `;
    }).join('');

    section.innerHTML = `
      <div class="px-5 py-3 border-b border-sky-100 flex items-center justify-between bg-gradient-to-r from-sky-50/70 via-teal-50/40 to-lime-50/50">
        <div class="flex items-center gap-2">
          <span class="text-lg leading-none">${conf.emoji}</span>
          <h3 class="font-black text-slate-800 text-sm">${aisle}コーナー</h3>
        </div>
        <span class="text-xs text-teal-900 font-bold bg-white/90 px-2.5 py-0.5 rounded-full border border-teal-200/80 shadow-2xs">${items.length}品目</span>
      </div>
      <div class="p-3 divide-y divide-sky-100/60">
        ${itemsHtml}
      </div>
    `;

    container.appendChild(section);
  });

  safeCreateIcons();
}

window.toggleCheckItem = function(key) {
  state.checkedItems[key] = !state.checkedItems[key];
  saveChecked();
  renderShoppingList();
};

function generateShoppingListText() {
  const aggregated = calculateAggregatedShoppingList();
  const grouped = {};
  AISLE_ORDER.forEach(aisle => { grouped[aisle] = []; });

  Object.keys(aggregated).forEach(key => {
    const item = aggregated[key];
    const isChecked = !!state.checkedItems[key];
    if (!isChecked) {
      const aisle = grouped[item.aisle] ? item.aisle : '調味料・その他';
      grouped[aisle].push(item);
    }
  });

  const weeklyCost = state.weeklyPlan ? calculatePlanTotalCost(state.weeklyPlan) : 0;
  let text = `【🛒 今週の買い物リスト（${state.servings}人分・目安 ¥${weeklyCost.toLocaleString()}）】\n`;

  let totalUnchecked = 0;
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
    return `【🛒 今週の買い物リスト（${state.servings}人分）】\nすべての食材を購入済みです！🎉`;
  }

  text += `\n※目標予算: ¥${state.targetBudget.toLocaleString()} / 冷蔵庫の在庫を確認してご購入ください✨`;
  return text;
}

function shareToLine() {
  const text = generateShoppingListText();
  const lineUrl = `https://social-plugins.line.me/lineit/share?text=${encodeURIComponent(text)}`;
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
  const checklistContainer = document.getElementById('preferences-dislikes-list');
  const modalTitle = document.getElementById('modal-preferences-title');
  const modalSubtitle = document.getElementById('modal-preferences-subtitle');

  if (isOnboarding) {
    modalTitle.innerHTML = `👶 お子様ごとの好み・苦手設定`;
    modalSubtitle.textContent = `子供が苦手な食材や味付けを除外して、みんなが満足できる節約献立を作成します。（後から変更可能）`;
  }

  // Setup tabs
  document.querySelectorAll('[data-child-tab]').forEach(btn => {
    btn.className = 'flex-1 py-3 text-sm font-bold text-slate-500 hover:text-slate-700 hover:bg-white border-b-2 border-transparent transition-colors';
    if (btn.getAttribute('data-child-tab') === state.activeChildTab) {
      btn.className = 'flex-1 py-3 text-sm font-bold text-emerald-700 border-b-2 border-emerald-600 bg-white';
    }
    btn.onclick = () => {
      state.activeChildTab = btn.getAttribute('data-child-tab');
      window.openPreferencesModal();
    };
  });

  const currentPref = state.childrenPreferences[state.activeChildTab];

  let html = `<div class="col-span-full text-xs font-bold text-slate-500 mt-2">食材</div>`;
  html += COMMON_DISLIKES.map(item => {
    const isChecked = currentPref.dislikes.includes(item.id);
    return `
      <label class="flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${isChecked ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold' : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100'}">
        <input type="checkbox" 
               class="w-5 h-5 rounded text-amber-600 focus:ring-amber-500 border-slate-300 cursor-pointer"
               value="${item.id}" 
               data-type="ingredient"
               ${isChecked ? 'checked' : ''} 
               onchange="handleDislikeToggle(this)">
        <span class="text-xl">${item.icon}</span>
        <span class="text-sm">${item.label}</span>
      </label>
    `;
  }).join('');

  html += `<div class="col-span-full text-xs font-bold text-slate-500 mt-4 border-t pt-4">味付け・その他</div>`;
  html += COMMON_FLAVORS.map(item => {
    const isChecked = currentPref.disabledFlavors.includes(item.id);
    return `
      <label class="flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${isChecked ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold' : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100'}">
        <input type="checkbox" 
               class="w-5 h-5 rounded text-amber-600 focus:ring-amber-500 border-slate-300 cursor-pointer"
               value="${item.id}" 
               data-type="flavor"
               ${isChecked ? 'checked' : ''} 
               onchange="handleDislikeToggle(this)">
        <span class="text-xl">${item.icon}</span>
        <span class="text-sm">${item.label}</span>
      </label>
    `;
  }).join('');

  checklistContainer.innerHTML = html;

  const modalServings = document.getElementById('modal-servings-select');
  if (modalServings) {
    modalServings.value = state.servings;
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  safeCreateIcons();
};

window.handleDislikeToggle = function(checkbox) {
  const val = checkbox.value;
  const type = checkbox.getAttribute('data-type');
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
  saveChildrenPreferences();
  saveOnboarding();
  state.hasCompletedOnboarding = true;
  closePreferencesModal();
  generateRandomWeeklyPlan(true);
};

window.closePreferencesModal = function() {
  const modal = document.getElementById('modal-preferences');
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

window.openChangeModal = function(dayId, category) {
  state.changeTarget = { dayId, category };
  const modal = document.getElementById('modal-change-recipe');
  const listContainer = document.getElementById('modal-change-list');
  const titleEl = document.getElementById('modal-change-title');

  const dayObj = DAYS_OF_WEEK.find(d => d.id === dayId);
  const categoryLabels = { main: '主菜', side: '副菜', soup: '汁物' };

  titleEl.textContent = `${dayObj.name}の【${categoryLabels[category]}】を変更`;

  const allCategoryRecipes = RECIPES_DATA.filter(r => r.category === category && !state.blacklistedRecipeIds.includes(r.id));
  const currentId = state.weeklyPlan[dayId][category];

  listContainer.innerHTML = allCategoryRecipes.map(r => {
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

  const category = document.getElementById('add-recipe-category').value;
  const cuisine = document.getElementById('add-recipe-cuisine').value;
  const proteinType = document.getElementById('add-recipe-protein').value;
  const season = document.getElementById('add-recipe-season').value;
  const cost = parseInt(document.getElementById('add-recipe-cost').value, 10) || 120;
  const time = document.getElementById('add-recipe-time').value.trim() || '15分';
  const url = document.getElementById('add-recipe-url').value.trim();
  const rawIngredients = document.getElementById('add-recipe-ingredients').value;
  const description = document.getElementById('add-recipe-description').value.trim();
  const isFav = document.getElementById('add-recipe-fav').checked;

  const parsedIngredients = parseCustomIngredients(rawIngredients);
  const newId = `custom_${Date.now()}`;

  const newRecipe = {
    id: newId,
    title: (url && !title.includes('外部サイト') && !title.includes('登録レシピ')) ? `【外部サイト】${title}` : title,
    category: category,
    cuisine: cuisine,
    proteinType: category === 'main' ? proteinType : undefined,
    season: season,
    time: time,
    approxCostPerPerson: cost,
    tags: ["登録レシピ", ...(url ? ["外部レシピ"] : [])],
    containsDislikes: [],
    description: description || (url ? 'ユーザー様が登録された外部人気レシピです。' : 'ご家庭のオリジナルレシピです。'),
    kidsTip: 'ご家庭のお好みに合わせて味付けを調整してください。',
    tip: 'お買い得食材を活用してさらに節約可能！',
    url: url || undefined,
    ingredients: parsedIngredients,
    instructions: url ? [] : ['詳しい作り方や動画は参考URLをご覧ください。'],
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
