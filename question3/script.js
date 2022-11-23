function listItems() {
    item = prompt("Enter list item");
    const listContainer = document.getElementById("list");
    while (item !== null && item.length>0) {
      let li = document.createElement("li");
      li.innerText = item;
      listContainer.appendChild(li);
      item = prompt("Enter list item");
    }
  }
  listItems();