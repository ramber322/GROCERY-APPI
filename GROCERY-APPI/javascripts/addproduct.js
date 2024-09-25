   
    // Array to hold or store items
    let items = [];

    // Readymade objects
    const readyproduct1 = {
        productName: "Lemon",
        brand: "Youngstown",
        price: 20,
        weightVolume: "15kg",
        quantity: 1,
        store: "Robinsons",
        category: "Fruit",
        image: "" 
    };

    const readyproduct2 = {
        productName: "Strawberry",
        brand: "Youngstown",
        price: 10,
        weightVolume: "5g",
        quantity: 1,
        store: "Robinsons",
        category: "Fruit",
        image: "" 
    };

    const readyproduct3 = {
        productName: "Watermelon",
        brand: "Youngstown",
        price: 10,
        weightVolume: "5g",
        quantity: 1,
        store: "Robinsons",
        category: "Fruit",
        image: "" 
    };

    const readyproduct4 = {
        productName: "Carrot",
        brand: "Youngstown",
        price: 10,
        weightVolume: "5g",
        quantity: 1,
        store: "Market",
        category: "Vegetables",
        image: "" 
    };

    const readyproduct5 = {
        productName: "Broccoli",
        brand: "Youngstown",
        price: 10,
        weightVolume: "5g",
        quantity: 1,
        store: "Market",
        category: "Vegetables",
        image: "" 
    };

    const readyproduct6 = {
        productName: "Pineapple",
        brand: "Youngstown",
        price: 10,
        weightVolume: "5g",
        quantity: 1,
        store: "Robinsons",
        category: "Fruit",
        image: "" 
    };

    const readyproduct7 = {
        productName: "Berry",
        brand: "Youngstown",
        price: 10,
        weightVolume: "5g",
        quantity: 1,
        store: "Robinsons",
        category: "Fruit",
        image: "" 
    };

    const readyproduct8 = {
        productName: "Cabbage",
        brand: "Youngstown",
        price: 10,
        weightVolume: "5g",
        quantity: 1,
        store: "Market",
        category: "Vegetables",
        image: "" 
    };

    const readyproduct9 = {
        productName: "Tomato",
        brand: "Youngstown",
        price: 10,
        weightVolume: "5g",
        quantity: 1,
        store: "Robinsons",
        category: "Fruit",
        image: "" 
    };

    const readyproduct10 = {
        productName: "Mango",
        brand: "Youngstown",
        price: 10,
        weightVolume: "5g",
        quantity: 1,
        store: "Robinsons",
        category: "Fruit",
        image: "" 
    };

   


    document.addEventListener('DOMContentLoaded', (event) => {
        // Load existing items from localStorage when the page loads
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            items = JSON.parse(storedItems);
        } else {
            // If no items in localstorage, add the readymade object/item to the array
            items.push(readyproduct1);
            items.push(readyproduct9);
            items.push(readyproduct4);
            items.push(readyproduct7);
            items.push(readyproduct8);
            items.push(readyproduct5);
            localStorage.setItem('items', JSON.stringify(items));
        }
    });
    //function to take input field and save to storage
    function storeInput() {
        const productName = document.getElementById("productName").value;
        const brand = document.getElementById("brand").value;
        const price = document.getElementById("price").value;
        const weightVolume = document.getElementById("weightVolume").value;
        const quantity = 1;
        const store = document.getElementById("store").value;
        const category = document.getElementById("category").value;
        const image = document.getElementById("imageInput").files[0];

        let imageDataUrl = "";
        if (image) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageDataUrl = e.target.result;
                saveItem();
            };
            reader.readAsDataURL(image);
        } else {
            saveItem();
        }

        function saveItem() {
            // Create an item object
            const item = {
                productName,
                brand,
                price,
                weightVolume,
                quantity,
                store,
                category,
                image: imageDataUrl // Include image data URL
            };
    
            // Add the item to the list
            items.push(item);
    
            // Store the updated list in localStorage
            localStorage.setItem('items', JSON.stringify(items));
    
            // Optional: Clear the form fields
            document.getElementById('form').reset();
            document.getElementById('imagePreview').style.display = 'none'; // Hide preview

            //  Notify user with alert
            alert('Item saved sucess!');
        }
    }

    function changeQuantity(change) {
        const quantityInput = document.getElementById("quantity");
        let quantity = parseInt(quantityInput.value);

        // Update quantity and ensure its not below 1
        quantity = Math.max(1, quantity + change);
        quantityInput.value = quantity;
    }

    function loadContent(page) {
        window.location.href = page;
    }

  
    