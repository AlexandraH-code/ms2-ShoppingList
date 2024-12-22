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
  }
  
  // Add an event listener for the form submit
  const form = document.getElementById('shopping-list-form');
  form.addEventListener('submit', addItem);
  