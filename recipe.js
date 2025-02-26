// Redirect to Recipes Page with Filters
function redirectToRecipes() {
  const searchInput = document.getElementById("searchInput").value;
  const moodFilter = document.getElementById("moodFilter").value;
  const mealTypeFilter = document.getElementById("mealTypeFilter").value;
  const regionFilter = document.getElementById("regionFilter").value;
  const cuisineFilter = document.getElementById("cuisineFilter").value;
  const flavorFilter = document.getElementById("flavorFilter").value;
  const ingredientFilter = document.getElementById("ingredientFilter").value;

  // Construct URL parameters
  const params = new URLSearchParams();

  if (searchInput) params.append("search", searchInput);
  if (moodFilter) params.append("mood", moodFilter);
  if (mealTypeFilter) params.append("mealType", mealTypeFilter);
  if (regionFilter) params.append("region", regionFilter);
  if (cuisineFilter) params.append("cuisine", cuisineFilter);
  if(flavorFilter) params.append("flavor", flavorFilter);

  // Redirect to recipes.html with the query parameters
  window.location.href = `recipes.html?${params.toString()}`;
}

// Function to Parse URL Parameters and Filter Recipes
function loadFilteredRecipes() {
  const params = new URLSearchParams(window.location.search);
  const searchInput = params.get("search")?.toLowerCase() || "";
  const moodFilter = params.get("mood");
  const mealTypeFilter = params.get("mealType");
  const regionFilter = params.get("region");
  const cuisineFilter = params.get("cuisine");
  const flavorFilter = params.get("flavor");

  // Sample Recipe Data
  const recipes = [
    { name: 'Italian Garlic Shrimp Spaghetti', mood: 'comforting', mealType: 'Main Course', region: 'European', cuisine: 'Italian', flavor:'savory' , image: 'https://via.placeholder.com/300x200' },
    { name: 'Mexican Chicken Tortilla Soup', mood: 'Relaxed', mealType: 'Main Course', region: 'American', cuisine: 'Mexican', image: 'https://via.placeholder.com/300x200' },
    { name: 'Asian Stir-fry Vegetables', mood: 'Happy', mealType: 'Snack', region: 'Asian', cuisine: 'Asian', image: 'https://via.placeholder.com/300x200' },
  ];

  // Filter Recipes
  const filteredRecipes = recipes.filter(recipe => {
    return (
      (!searchInput || recipe.name.toLowerCase().includes(searchInput)) &&
      (!moodFilter || recipe.mood === moodFilter) &&
      (!mealTypeFilter || recipe.mealType === mealTypeFilter) &&
      (!regionFilter || recipe.region === regionFilter) &&
      (!cuisineFilter || recipe.cuisine === cuisineFilter)&&
      (!flavorFilter || recipe.flavor === flavorFilter)
    );
  });

  renderRecipes(filteredRecipes);
}

// Function to Render Recipes
function renderRecipes(recipeList) {
  const recipeGrid = document.getElementById("recipeGrid");
  recipeGrid.innerHTML = ""; // Clear previous results

  if (recipeList.length === 0) {
    recipeGrid.innerHTML = '<p class="text-gray-500">No recipes found.</p>';
    return;
  }

  recipeList.forEach(recipe => {
    const recipeCard = `
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800">${recipe.name}</h3>
          <p class="text-gray-600">${recipe.cuisine} | ${recipe.mealType} | ${recipe.mood}</p>
        </div>
      </div>
    `;
    recipeGrid.innerHTML += recipeCard;
  });
}

// Load recipes on page load
if (window.location.pathname.includes("recipes.html")) {
  loadFilteredRecipes();
}
