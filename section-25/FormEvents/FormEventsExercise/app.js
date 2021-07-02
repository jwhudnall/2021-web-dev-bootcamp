const groceryList = document.querySelector('#list');
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const product = form.product;
    const qty = form.qty;

    addItem(product.value, qty.value);
    clearForm();
})

function addItem(product, qty) {
    const newItem = document.createElement('li');
    newItem.textContent = `${qty} ${product}`;
    groceryList.append(newItem);
}

function clearForm() {
    product.value = "";
    qty.value = "";
    form.product.focus();
}