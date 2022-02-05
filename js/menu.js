const navMenueItems = document.querySelector('.nav-menu-items');
const hamIcon = document.querySelector('.ham');
const closeIcon = document.querySelector('.close-icon');
const navList = document.querySelectorAll('.nav-menu-item');

function openMenu() {
  navMenueItems.classList.remove('display-none');
}

function closeMenu() {
  navMenueItems.classList.add('display-none');
}

hamIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
navList.forEach((e) => e.addEventListener('click', closeMenu));
