const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.onmouseover = () => {
    item.classList.add('nav-item-hover');
  }

  item.onmouseout = () => {
    item.classList.remove('nav-item-hover');
  }
})

const listContainers = document.querySelectorAll('.list-container');

listContainers.forEach((list) => {
  const navLists = list.children;

  for (let i = 0; i < navLists.length; i += 1) {
    list.onmouseover = () => {
      list.classList.add('nav-item-hover');
      navLists[i].classList.add('nav-list-visible');
    }

    list.onmouseout = () => {
      list.classList.remove('nav-item-hover');
      navLists[i].classList.remove('nav-list-visible');
    }
  }
})

