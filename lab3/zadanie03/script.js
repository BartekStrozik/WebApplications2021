function addElement() {
    let new_item = document.createElement('li');
    let item_number = document.getElementById('list').getElementsByTagName('li').length + 1;
    new_item.textContent = "item " + item_number;
    
    document.getElementById("list").appendChild(new_item);
}

function deleteElement() {
    var items = document.querySelectorAll('#list li');
    item = items[0];
    item.parentNode.removeChild(item);
}