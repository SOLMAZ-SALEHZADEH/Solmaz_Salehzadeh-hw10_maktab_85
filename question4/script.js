const container = document.getElementById("container");
let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};
function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
    console.log(Object.keys(obj))
  if (!Object.keys(obj).length) return;

  let ul = document.createElement("ul");

  for (let key in obj) {
    let li = document.createElement("li");
    li.innerHTML = key;
    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }
    ul.append(li);
  }

  return ul;
}

createTree(container, data);