export function saveItem(item) {
    const items = getItems();
    items.push(item);
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

export function getItems() {
    const items = localStorage.getItem('shoppingList');
    return items ? JSON.parse(items) : [];
}

export function deleteItem(item) {
    const items = getItems().filter(i => i !== item);
    localStorage.setItem('shoppingList', JSON.stringify(items));
}