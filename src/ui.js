
export function addItemToUI(itemText) {
    const shoppingList = document.getElementById('shoppingList');
    const li = document.createElement('li');
    li.textContent = itemText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', () => {
        shoppingList.removeChild(li);
        deleteItem(itemText);
    });

    li.appendChild(deleteButton);
    shoppingList.appendChild(li);
}

export function clearInput(input) {
    input.value = '';
}

export function showError(input) {
    input.classList.add('erro');
}

export function clearError(input) {
    input.classList.remove('erro');
}

export function updateLastItemContainer(itemText) {
    const lastItemContainer = document.getElementById('lastItemContainer');
    lastItemContainer.textContent = `Último item adicionado: ${itemText || 'Nenhum item'}`;
}
