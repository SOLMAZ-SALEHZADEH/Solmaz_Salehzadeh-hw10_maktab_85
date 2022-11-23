const li = document.querySelectorAll("li");
const ul = document.getElementById("list");
Array.from(li).forEach(function (element) {
  const close = document.createElement("span");
  close.innerText = "X";
  close.classList.add("close");
  element.append(close);
  close.addEventListener("click", function () {
    const closeParent = close.parentNode;
    ul.removeChild(closeParent);
  });
});
