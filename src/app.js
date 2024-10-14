import { saveItem, getItems, deleteItem } from './storage.js';
import { addItemToUI, clearInput, showError, clearError, updateLastItemContainer } from './ui.js';


document.addEventListener('DOMContentLoaded', () => {
    const shoppingList = getItems();
    shoppingList.forEach(item => addItemToUI(item));
});

document.getElementById('addButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (!itemText) {
        alert("Por favor, insira um item.");
        showError(itemInput);
        return;
    } else {
        clearError(itemInput);
    }

    const existingItems = getItems();

    if (existingItems.includes(itemText)) {
        alert(`O item "${itemText}" já foi adicionado à lista!`);
        showError(itemInput);
        return;
    } else {
        clearError(itemInput);
    }

    addItemToUI(itemText);
    saveItem(itemText);
    updateLastItemContainer(itemText);
    clearInput(itemInput);
});
