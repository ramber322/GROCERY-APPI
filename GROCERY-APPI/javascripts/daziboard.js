        // dropdown menu toggle
        document.getElementById('LOADSAVEDLIST').addEventListener('click', () => {
            const dropdown = document.getElementById('savedListsDropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            loadSavedLists();
        });

        // Function to save the current list to a separate array
        function saveCurrentList() {
            const storedItems = localStorage.getItem('list');
            const items = storedItems ? JSON.parse(storedItems) : [];

            if (items.length > 0) {
                let savedLists = localStorage.getItem('savedLists');
                savedLists = savedLists ? JSON.parse(savedLists) : [];

                // Add current items as a new saved list
                savedLists.push({
                    name: `Saved List ${savedLists.length + 1}`,
                    items: items
                });

                localStorage.setItem('savedLists', JSON.stringify(savedLists));
                alert('Current list saved!');
            } else {
                alert('No items to save!');
            }
        }

        // load and display saved lists in the dropdown
        function loadSavedLists() {
            const savedLists = localStorage.getItem('savedLists');
            const dropdown = document.getElementById('savedListsDropdown');
            dropdown.innerHTML = ''; // Clear previous content

            if (savedLists) {
                JSON.parse(savedLists).forEach((list, index) => {
                    const button = document.createElement('button');
                    button.textContent = list.name;
                    button.onclick = () => loadSavedList(index);
                    dropdown.appendChild(button);
                });
            } else {
                const noSavedListItem = document.createElement('p');
                noSavedListItem.textContent = 'No saved lists';
                dropdown.appendChild(noSavedListItem);
            }
        }

        // Function to load a specific saved list and display it
        function loadSavedList(index) {
            const savedLists = localStorage.getItem('savedLists');
            if (savedLists) {
                const list = JSON.parse(savedLists)[index];
                localStorage.setItem('list', JSON.stringify(list.items));
                renderItems();
               
            }
        }

        // Function to render items
        function renderItems(filter = '') {
            const itemListContainer = document.getElementById('itemListContainer');
            const storedItems = localStorage.getItem('list');
            const items = storedItems ? JSON.parse(storedItems) : [];
            itemListContainer.innerHTML = '';
        
            items.filter(item => item.productName.toLowerCase().includes(filter.toLowerCase()))
                .forEach((item, index) => {
                    const isDone = item.done ? 'done' : '';
                    const priceOpacity = item.done ? 'faded' : ''; // Class for faded price
                    const itemHTML = `
                        <div class="item-list" id="item-${index}">
                            <p class="title ${isDone}">${item.productName} X${item.quantity}</p>
                            <p class="price ${priceOpacity}">₱${item.price} - ${item.store}</p>
                            <div class="button-container">
                                <button onclick="markAsDone(${index})"><i class="fa fa-check-circle check"></i></button>
                                <button onclick="removeItem(${index})"><i class="fa fa-trash-o trash"></i></button>
                            </div>
                        </div>
                    `;
                    itemListContainer.innerHTML += itemHTML;
                });
        }
        

        // Function to search items
        function searchItems() {
            const searchInput = document.getElementById('searchInput').value;
            renderItems(searchInput);
        }

        // Function to mark an item as done and cross it out
        function markAsDone(index) {
            const storedItems = localStorage.getItem('list');
            const items = storedItems ? JSON.parse(storedItems) : [];

            if (items[index]) {
                items[index].done = !items[index].done; // Toggle done status
                localStorage.setItem('list', JSON.stringify(items));
                renderItems(); // re-render the list
            }
        }

        // Function to remove an item
        function removeItem(index) {
            const storedItems = localStorage.getItem('list');
            const items = storedItems ? JSON.parse(storedItems) : [];
            const updatedItems = items.filter((_, i) => i !== index);
            localStorage.setItem('list', JSON.stringify(updatedItems));
            renderItems();
        }

        // Initialize rendering on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', () => {
            renderItems();
        });

         // Function to load content 
      function loadContent(page) {
          window.location.href = page;
      }