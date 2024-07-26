const menuItems = document.querySelectorAll(".nav-item");

menuItems.forEach((item) => {
  item.onmouseover = () => {
    item.classList.add('nav-item-hover');
  }

  item.onmouseout = () => {
    item.classList.remove('nav-item-hover');
  }
})
