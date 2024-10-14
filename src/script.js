/*document.getElementById('addButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();
    const shoppingList = document.getElementById('shoppingList');

    this.classList.add('animate');
    setTimeout(() => {
        this.classList.remove('animate');
    }, 300);

    if (!itemText) {
        alert("Por favor, insira um item.");
        itemInput.classList.add('erro'); 
        return;
    } else {
        itemInput.classList.remove('erro'); 
    }

    const existingItems = Array.from(shoppingList.getElementsByTagName('li')).map(li => li.firstChild.textContent);

    if (existingItems.includes(itemText)) {
        alert(`O item "${itemText}" já foi adicionado à lista!`);
        itemInput.classList.add('erro'); 
        return;
    } else {
        itemInput.classList.remove('erro'); 
    }

    const li = document.createElement('li');
    li.textContent = itemText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.className = 'delete';

    deleteButton.addEventListener('click', function() {
        this.classList.add('animate');
        setTimeout(() => {
            this.classList.remove('animate');
            shoppingList.removeChild(li);
            updateLastItemContainer();
        }, 300);
    });

    li.appendChild(deleteButton);
    shoppingList.appendChild(li);
    itemInput.value = ''; 

    updateLastItemContainer(itemText);
});

function updateLastItemContainer(itemText) {
    const lastItemContainer = document.getElementById('lastItemContainer');
    lastItemContainer.textContent = `Último item adicionado: ${itemText || 'Nenhum item'}`;
}
*/