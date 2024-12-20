const shoppingForm = document.getElementById('shopping-list-form');
const shoppingInput = document.getElementById('item-input');
const shoppingList = document.getElementById('items-list');

shoppingForm.addEventListener('submit', function (e) {
  e.preventDefault();
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
  const itemText = document.createElement('span');

  checkBox.setAttribute('type', 'checkbox');
  listItem.appendChild(checkBox);

  itemText.textContent = newItem;
  listItem.appendChild(itemText);

  shoppingList.appendChild(listItem);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  listItem.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  listItem.appendChild(deleteButton);

  checkBox.addEventListener('change', function () {
    if (this.checked) {
      // If the checkbox is checked, there will be a blue line through the item.
      itemText.style.textDecoration = 'line-through #232946';
    } else {
      itemText.style.textDecoration = 'none';
    }
  });

  deleteButton.addEventListener('click', function () {
    // Deletes item from the list
    shoppingList.removeChild(listItem);
    saveItemsToLocalStorage();
  });

  editButton.addEventListener('click', function () {
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
      /*listItem.insertBefore(input, itemText);*/
      listItem.insertBefore(input, itemText);
      listItem.removeChild(itemText);
      listItem.classList.add('editing');
      editButton.textContent = 'Save';
    }
  });

  saveItemsToLocalStorage();
}

function saveItemsToLocalStorage() {
  const items = [];
  document.querySelectorAll('#items-list li').forEach(item => {
      const itemText = item.querySelector('span').textContent;
      const isCompleted = item.classList.contains('completed');
      items.push({ text: itemText, completed: isCompleted });
  });
  localStorage.setItem('items', JSON.stringify(items));
}

document.addEventListener('DOMContentLoaded', function() {
  /*const savedItems = JSON.parse(localStorage.getItem('items')) || [];*/
  const savedItems = JSON.parse(localStorage.getItem('items'));
  savedItems.forEach(item => {
      addItem(item.text);
  });
});