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

const pictureFrame = document.querySelector('#picture-frame');

const picContainers = pictureFrame.children;

for (let i = 0; i < picContainers.length; i += 1) {
  picContainers[i].id = 'pic-container-' + (i + 1);
}


const controlBtns = document.querySelectorAll('.control-btn');
controlBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const activePic = document.querySelector("[data-active]");
    const offset = button.id === 'btn-next' ? 1 : -1;
    let newIndex = [...picContainers].indexOf(activePic) + offset;
    if (newIndex < 0) newIndex = picContainers.length - 1;
    if (newIndex >= picContainers.length) newIndex = 0;
    picContainers[newIndex].dataset.active = true;
    delete activePic.dataset.active;
  })
})

