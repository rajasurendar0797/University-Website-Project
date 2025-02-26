// Article Data
const articles = [
    {
      title: "Mexican Chicken Tortilla Soup",
      tags: ["Mexican", "Main Course", "Comfort Food", "Spicy"],
      image:
        "https://www.allrecipes.com/thmb/u16pvgZvnXPUEtREcefnrMTx2o8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13351-chicken-tortilla-soup-i-DDMFS-4x3-746173decf5548e581fd08e713a8adba.jpg",
      description:
        "A flavorful and comforting blend of tender chicken, hearty vegetables, and zesty spices, topped with crispy tortilla strips and fresh garnishes.",
      link: "#",
    },
    {
      title: "The Art of Flavor Pairing",
      tags: ["Tips", "Flavor Pairing"],
      image:
        "https://via.placeholder.com/300",
      description:
        "Unlocking new depths in your cooking with expert flavor pairing techniques.",
      link: "#",
    },
    // Add more articles here...
  ];
  
  // Render Articles
  function renderArticles() {
    const articleContainer = document.getElementById("articleContainer");
    articleContainer.innerHTML = ""; // Clear previous articles
  
    articles.forEach((article) => {
      const articleCard = `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800">${article.title}</h3>
            <p class="text-gray-600 text-sm">${article.description}</p>
            <div class="mt-2">
              ${article.tags
                .map(
                  (tag) =>
                    `<span class="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">${tag}</span>`
                )
                .join(" ")}
            </div>
            <a href="${article.link}" class="text-red-500 hover:underline mt-4 inline-block">Read more</a>
          </div>
        </div>
      `;
      articleContainer.innerHTML += articleCard;
    });
  }
  
  // Call Render Articles on Page Load
  document.addEventListener("DOMContentLoaded", renderArticles);
  