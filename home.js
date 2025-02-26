// Recipe Data
const recipes = [
  { name: 'Italian Garlic Shrimp Spaghetti', image: 'https://via.placeholder.com/300x200' },
  { name: 'Mexican Chicken Tortilla Soup', image: 'https://via.placeholder.com/300x200' },
  { name: 'Asian Stir-fry Vegetables', image: 'https://via.placeholder.com/300x200' },
  { name: 'Greek Salad Delight', image: 'https://via.placeholder.com/300x200' },
  { name: 'Spicy Thai Curry', image: 'https://via.placeholder.com/300x200' },
  { name: 'French Onion Soup', image: 'https://via.placeholder.com/300x200' },
  { name: 'Butter Chicken', image: 'https://via.placeholder.com/300x200' },
  { name: 'Margherita Pizza', image: 'https://via.placeholder.com/300x200' },
  { name: 'Vegan Buddha Bowl', image: 'https://via.placeholder.com/300x200' },
  { name: 'Quinoa Salad', image: 'https://via.placeholder.com/300x200' },
];

// Function: Render Recipes
function renderRecipes(filteredRecipes) {
  const recipeResults = document.getElementById('recipeResults');
  recipeResults.innerHTML = ''; // Clear previous results

  // If no recipes found, display a message
  if (filteredRecipes.length === 0) {
    recipeResults.innerHTML = '<p class="text-gray-500">No recipes found.</p>';
    return;
  }

  // Loop through recipes and create cards
  filteredRecipes.forEach(recipe => {
    const recipeCard = `
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800">${recipe.name}</h3>
        </div>
      </div>
    `;
    recipeResults.innerHTML += recipeCard;
  });
}

// Function: Perform Search
function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();

  // Filter recipes based on query
  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
  
  // Render filtered recipes
  renderRecipes(filteredRecipes);
}

// Add Event Listener for real-time search
document.getElementById('searchInput').addEventListener('input', performSearch);

// Initial render of recipes
renderRecipes(recipes);

// Function: Redirect to Recipes Page with Filters
function redirectToRecipes() {
  const searchInput = document.getElementById("searchInput").value;
  const moodFilter = document.getElementById("moodFilter").value;
  const mealTypeFilter = document.getElementById("mealTypeFilter").value;
  const regionFilter = document.getElementById("regionFilter").value;
  const cuisineFilter = document.getElementById("cuisineFilter").value;

  // Construct URL parameters
  const params = new URLSearchParams();

  if (searchInput) params.append("search", searchInput);
  if (moodFilter) params.append("mood", moodFilter);
  if (mealTypeFilter) params.append("mealType", mealTypeFilter);
  if (regionFilter) params.append("region", regionFilter);
  if (cuisineFilter) params.append("cuisine", cuisineFilter);

  // Redirect to recipes.html with query parameters
  window.location.href = `recipes.html?${params.toString()}`;
}
