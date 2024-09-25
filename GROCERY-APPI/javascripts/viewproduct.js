document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('categorySelect');
    const itemContainer = document.getElementById('itemContainer');

    // get the items from localstorage
    const storedItems = localStorage.getItem('items');
    const items = storedItems ? JSON.parse(storedItems) : [];

    // get the list from localstorage, or initialize it as an empty array
    let list = JSON.parse(localStorage.getItem('list')) || [];

    function getImageSrc(productName) {
          // Find the item with the specified productName
          const item = items.find(i => i.productName.toLowerCase() === productName.toLowerCase());
          
          // just ready made pictures from website according to corresponding productname 
          if (item && item.image) {
              return item.image; // Return the Base64 image data
          } else if (item.productName.toLowerCase() == 'mango') {
              return 'https://cdn-icons-png.flaticon.com/512/17555/17555945.png';
          } else if (item.productName.toLowerCase() == 'lemon') {
              return 'https://cdn-icons-png.flaticon.com/512/17555/17555939.png';
          } else if (item.productName.toLowerCase() == 'cabbage') {
              return 'https://cdn-icons-png.flaticon.com/512/765/765618.png';
          } else if (item.productName.toLowerCase() == 'berry') {
              return 'https://cdn-icons-png.flaticon.com/512/17555/17555912.png';
          } else if (item.productName.toLowerCase() == 'tomato') {
              return 'https://cdn-icons-png.flaticon.com/512/17540/17540192.png';
          } else if (item.productName.toLowerCase() == 'pineapple') {
              return 'https://cdn-icons-png.flaticon.com/512/17555/17555963.png';
          } else if (item.productName.toLowerCase() == 'papaya') {
              return 'https://cdn-icons-png.flaticon.com/512/17555/17555951.png';
          } else if (item.productName.toLowerCase() == 'strawberry') {
              return 'https://cdn-icons-png.flaticon.com/512/17555/17555975.png';
          } else if (item.productName.toLowerCase() == 'watermelon') {
              return 'https://cdn-icons-png.flaticon.com/512/17555/17555978.png';
          } else if (item.productName.toLowerCase() == 'broccoli') {
              return 'https://cdn-icons-png.flaticon.com/512/2347/2347045.png';
          } else if (item.productName.toLowerCase() == 'carrot') {
              return 'https://cdn-icons-png.flaticon.com/512/2916/2916045.png';
          }
          // Default image source if no img is attached when item is added on the form 
          return 'https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=';
      }


// function that renders items
function renderItems(category) {
  itemContainer.innerHTML = ''; // Clear existing items
  let filteredItems;

  if (category === "A-Z") {
      // this will sort items alphabetically using a javascruot SORT function
      filteredItems = items.slice().sort((a, b) => a.productName.localeCompare(b.productName));
  } else {
      // Filter by category
      filteredItems = category ? items.filter(item => item.category === category) : items;
  }
  
  filteredItems.forEach(item => {
      let imgSrc = getImageSrc(item.productName);
      let categoryicon = 'https://db.pokemongohub.net/_next/image?url=%2Fimages%2Ficons%2Fico_11_grass.webp&w=48&q=75';

      if (item.category == "Fruit") {
          categoryicon = "https://db.pokemongohub.net/_next/image?url=%2Fimages%2Ficons%2Fico_13_psychic.webp&w=48&q=75";
      }

      const itemHTML = `
          <button style="background: none; border: none; cursor: pointer;" onclick="add('${item.productName}', ${item.price}, ${item.quantity}, '${item.store}')">
              <div class="pokecards">
                  <img src="${imgSrc}" alt="${item.productName}">
                  <img src="${categoryicon}" class="icon"> 
                  <p class="title">${item.productName}</p>
              </div>
          </button>
      `;
      itemContainer.innerHTML += itemHTML;
  });
}


    // Render items when the page loads
    renderItems();

    // Add event listener for category change
    categorySelect.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        renderItems(selectedCategory);
    });

    // Function to add items to the list and update localStorage
    window.add = function(productName, price, quantity, store) {
console.log('Attempting to add to cart:', productName, price, quantity, store);

// Finds the item if it already exists in the list
const existingItemIndex = list.findIndex(item => item.productName === productName && item.store === store);

if (existingItemIndex !== -1) {
  // if item exist it increases the quantity instead
  list[existingItemIndex].quantity += quantity;
} else {
  // if item does not exist it will add the item
  list.push({ productName, price, quantity, store });
}

// Save the updated list to my local storage
localStorage.setItem('list', JSON.stringify(list));

// test if working
console.log('Updated list:', list);
}
});

// Function to load content 
function loadContent(page) {
    window.location.href = page;
}