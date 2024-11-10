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

const picContainers = document.querySelectorAll('.picture-container');

const updatePicContainers = () => {
  picContainers.forEach((container) => {
    if (!container.dataset.active) {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  })
};
updatePicContainers();

const switchPic = (button) => {
  const activePic = document.querySelector("[data-active]");
  const offset = button.target.id === 'btn-next' ? 1 : -1;
  let newIndex = [...picContainers].indexOf(activePic) + offset;
  if (newIndex < 0) newIndex = picContainers.length - 1;
  if (newIndex >= picContainers.length) newIndex = 0;
  picContainers[newIndex].dataset.active = true;
  delete activePic.dataset.active;
  updatePicContainers();
};

const controlBtns = document.querySelectorAll('.control-btn');

controlBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    switchPic(e);
  })
})

