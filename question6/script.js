function display() {
  const text = document.getElementById("text");
  text.parentNode.removeChild(text);
  const elem = document.getElementById("hider");
  setTimeout(() => {
    elem.parentNode.removeChild(elem);
  }, 1000);
}
