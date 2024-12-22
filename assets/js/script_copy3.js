// Function that adds an item to the shopping list
function addItem(e) {
    e.preventDefault();
  
    const itemInput = document.getElementById('item-input');
  
    const itemText = itemInput.value.trim();
      
    if (itemText === "") {
        alert("Enter an item that you want to buy!");
        return;
    }
  
    const shoppingList = document.getElementById('items-list');
      
    // Create a list item (li)
    const li = document.createElement('li');
    
    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    // Create a text for the item
    const itemSpan = document.createElement('span');
    itemSpan.textContent = itemText;
    
    // Create a button to delete the item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.onclick = function () {
        shoppingList.removeChild(li);
        saveList(); // Spara listan efter borttagning
    };
    
    // Create a button to edit the item
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        const newItem = prompt("Edit the item:", itemSpan.textContent);
        if (newItem) {
            itemSpan.textContent = newItem;
        }
    };
    
    // Add checkbox, text, edit and delete button to li
    li.appendChild(checkbox);
    li.appendChild(itemSpan);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    
    // Add the new item to the list
    shoppingList.appendChild(li);
    
    // Clear input field
    itemInput.value = "";
  
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        li.classList.add('purchased'); // Lägg till purchased-klassen om checkboxen är markerad
      } else {
        li.classList.remove('purchased'); // Ta bort purchased-klassen om checkboxen inte är markerad
      }
    });
  
    saveList(); // Spara listan när en ny vara läggs till
  }
  
  // Save the shopping list to localStorage
  function saveList() {
    const shoppingList = document.getElementById('items-list');
    const items = [];
  
    // Loop through each list item and save its information
    shoppingList.querySelectorAll('li').forEach((li) => {
      const itemText = li.querySelector('span').textContent;
      const isChecked = li.querySelector('input[type="checkbox"]').checked;
      items.push({ text: itemText, checked: isChecked });
    });
  
    // Store the list items in localStorage
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }
  
  // Load the shopping list from localStorage
  function loadList() {
    const savedList = localStorage.getItem('shoppingList');
    if (savedList) {
      const items = JSON.parse(savedList);
      const shoppingList = document.getElementById('items-list');
  
      // Recreate the list from saved data
      items.forEach(item => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.checked;
        const itemSpan = document.createElement('span');
        itemSpan.textContent = item.text;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Delete';
        removeButton.onclick = function () {
            shoppingList.removeChild(li);
            saveList(); // Spara listan efter borttagning
        };
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            const newItem = prompt("Edit the item:", itemSpan.textContent);
            if (newItem) {
                itemSpan.textContent = newItem;
                saveList(); // Spara listan efter redigering
            }
        };
  
        li.appendChild(checkbox);
        li.appendChild(itemSpan);
        li.appendChild(editButton);
        li.appendChild(removeButton);
  
        shoppingList.appendChild(li);
  
        // Reapply the purchased class if checked
        if (item.checked) {
          li.classList.add('purchased');
        }
  
        // Add event listener to checkbox
        checkbox.addEventListener('change', function() {
          if (checkbox.checked) {
            li.classList.add('purchased');
          } else {
            li.classList.remove('purchased');
          }
          saveList(); // Spara listan när en checkbox ändras
        });
      });
    }
  }
  // Add an event listener for the form submit
  const form = document.getElementById('item-form');
  form.addEventListener('submit', addItem);
  // Load the shopping list when the page loads
  window.addEventListener('load', loadList);
  