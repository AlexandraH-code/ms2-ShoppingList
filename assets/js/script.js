const shoppingForm = document.getElementById('shopping-list-form');
const shoppingInput = document.getElementById('item-input');
const shoppingList = document.getElementById('items-list');

shoppingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newItem = shoppingInput.value; //newItem takes the information that the user has written in the text field
  
    // If the user tries to submit the form without having written anything in the text field an error message pops up
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
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);

    const itemText = document.createElement('span');
    //listItem.textContent = newItem;
    itemText.textContent = newItem;
    listItem.appendChild(itemText);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    shoppingList.appendChild(listItem);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    listItem.appendChild(editButton);

    checkBox.addEventListener('change', function() {
      if (this.checked) {
          itemText.style.textDecoration = 'line-through';
      } else {
          itemText.style.textDecoration = 'none';
      }
    });

    deleteButton.addEventListener('click', function() {
      shoppingList.removeChild(listItem);
    });

   editButton.addEventListener('click', function() {
      const editItem = listItem.classList.contains('editing');
    
      if (editItem) {
          // Switch back to view mode
          itemText.textContent = this.previousSibling.value; // Assuming the input field is right before the edit button
          listItem.classList.remove('editing');
          editButton.textContent = 'Edit';
      } else {
          // Switch to edit mode
          const input = document.createElement('input');
          input.type = 'text';
          input.value = itemText.textContent;
          listItem.insertBefore(input, itemText);
          listItem.removeChild(itemText);
          listItem.classList.add('editing');
          editButton.textContent = 'Save';
      }
    });
  }  