const shoppingForm = document.getElementById('shopping-list-form');
const shoppingInput = document.getElementById('item-input');
const shoppingList = document.getElementById('items-list');

shoppingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newItem = shoppingInput.value;
  
    if (newItem === '') {
        alert('Please enter an item that you want to buy!');
        return;
    }
  
    // Call the addItem function
    addItem(newItem);
  
    shoppingInput.value = ''; // Clear the input field after adding an item
  });

  // Function that adds items to the list
  function addItem(newItem) {
    const listItem = document.createElement('li');
    listItem.textContent = newItem;
  
    // Additional functionality to be added here
  
    shoppingList.appendChild(listItem);
  }

