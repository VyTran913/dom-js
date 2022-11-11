var form = document.getElementById('addForm');
var itemList = document.getElementById('items')

//Form submit event
form.addEventListener('submit', addItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get Input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  var deleteBtn = document.createElement('button');

  // Add classname to deleteBtn
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to item list
  itemList.appendChild(li);
}
