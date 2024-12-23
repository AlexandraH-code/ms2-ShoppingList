document.addEventListener("DOMContentLoaded", function () {
    let formElement = document.getElementById("shopping-list-form");
    formElement.addEventListener('submit', addItem);
  
    // Shopping list function
    // You can add an item to the shopping list.
    // Check an item that you have purchased.
    // Edit an item.
    // Delete an item.
    // The list is saved to localStorage.
    function addItem(event) {
      event.preventDefault(); // Prevents the form's default action (refreshing the page)
    
      const itemInput = document.getElementById('item-input');
    
      const itemText = itemInput.value.trim();
    
      // If you try to submit the form without having filled in anything in the item-input (text box), you will get an error message.
      if (itemText === "") {
        alert("Enter an item that you want to buy!");
        return;
      }
    
      const shoppingList = document.getElementById('items-list');
    
      // Creates a list item (li)
      const li = document.createElement('li');
    
      // Creates a checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
    
      // Creates a text for the item
      const itemSpan = document.createElement('span');
      itemSpan.textContent = itemText;
    
      // Creates a button to delete the item
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Delete';
      removeButton.onclick = function () {
        shoppingList.removeChild(li);
        /*--------*/
        saveList(); // Saves the list after an item is deleted
        /*--------*/
      };
    
      // Creates a button that allows you to edit an item.
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function () {
        const newItem = prompt("Edit the item:", itemSpan.textContent);
        if (newItem) {
          itemSpan.textContent = newItem;
          /*----------*/
          saveList(); // Saves the list after an item is edited
          /*----------*/
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
    
      // EventListener for the checkbox
      checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
          li.classList.add('purchased'); // Adds the purchased class if the checkbox is checked
        } else {
          li.classList.remove('purchased'); // Removes the purchased class if the checkbox is not checked.
        }
    
        /*---------------*/
        saveList(); // Saves the list when a checkbox is changed
        /*---------------*/
      });
    
      /*-----------------------------*/
      saveList(); // Saves the list when a new item is added
      /*---------------------------- */
    }
     
    /*------------------------------*/
    
    // Saves the list to localStorage
    function saveList() {
      const shoppingList = document.getElementById('items-list');
      const items = [];
    
      // Loops through each list item and save its information
      shoppingList.querySelectorAll('li').forEach((li) => {
        const itemText = li.querySelector('span').textContent;
        const isChecked = li.querySelector('input[type="checkbox"]').checked;
        items.push({
          text: itemText,
          checked: isChecked
        });
      });
    
      // Stores the list items in localStorage
      localStorage.setItem('shoppingList', JSON.stringify(items));
    }
    
    // Loads the shopping list from localStorage
    function loadList() {
      const savedList = localStorage.getItem('shoppingList');
    
      if (savedList) {
        const items = JSON.parse(savedList);
        const shoppingList = document.getElementById('items-list');
    
        // Recreates the list from saved data
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
            saveList(); // Save the list after deletion
          };
    
          const editButton = document.createElement('button');
          editButton.textContent = 'Edit';
          editButton.onclick = function () {
            const newItem = prompt("Edit the item:", itemSpan.textContent);
    
            if (newItem) {
              itemSpan.textContent = newItem;
              saveList(); // Saves the list after editing
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
          checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
              li.classList.add('purchased');
            } else {
              li.classList.remove('purchased');
            }
            saveList(); // Saves the list when a checkbox is changed
          });
        });
      }
    }
  
    /*------------------------------*/
    
    // Adds an event listener for the form submit
    const form = document.getElementById('shopping-list-form');
    form.addEventListener('submit', addItem);
    
    /*------------------------------*/
    
    // Loads the shopping list when the page loads
    window.addEventListener('load', loadList);
    
    /*------------------------------*/
  });