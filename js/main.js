const artists = [
  {
    imgSrc: './src/imgs/billie-eilish.jpg',
    name: 'Billie Eilish',
    shortD: 'Loremr sit, amet adipisicing elit.',
    longD: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, odit possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi!',
  },
  {
    imgSrc: './src/imgs/lorde.webp',
    name: 'Billie Eilish',
    shortD: 'Lorem ipsum dolor sit, adipisicing elit.',
    longD: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, odit possimus. Lorem, ipsum.',
  },
  {
    imgSrc: './src/imgs/bruno-mars.jpg',
    name: 'Bruno Mars',
    shortD: 'Lorem ipsum dolor sit, amet consectetur.',
    longD: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, odit possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolores maxime sed voluptate, voluptatibus quaerat placeat?',
  },
  {
    imgSrc: './src/imgs/ed-sheeran.jpg',
    name: 'Ed Sheeran',
    shortD: 'Lorem ipsum adipisicing elit.',
    longD: 'Lorem, ipsum dolor sconsectetur adipisicing elit. Quidem, odit possimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    imgSrc: './src/imgs/sia.png',
    name: 'Sia',
    shortD: 'Lorem ipsum dolor sit, amet conisicing elit.',
    longD: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, odit possimus. Lorem ipsum dolor sit amet.',
  },
  {
    imgSrc: './src/imgs/eminem.jpg',
    name: 'Eminem',
    shortD: 'Lorem ipsum dolor adipisicing elit.',
    longD: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, odit possimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, quisquam?',
  },
];

const artistSection = document.querySelector('.artists-section');
const tempList = document.createElement('ul');
tempList.classList.add('cards-2-container');
artistSection.innerHTML += '<h2 class="heading-2 dark-theme">Featured Stars</h2>';
artists.forEach((artist, index) => {
  tempList.innerHTML += `
  <li class="card-2 card-2-1 ${index > 1 ? 'display-none' : ''}">
  <ul class="card-2-small-container ">
    <li class="card-2-img-container">
      <img
        src="${artist.imgSrc}"
        alt="${artist.name}"
        class="star-img"
      />
    </li>
    <li class="card-2-intro-container">
      <h3 class="card-2-heading heading-3 dark-theme">
      ${artist.name}
      </h3>
      <p class="card-2-sub-heading para-2 main-theme">
      ${artist.shortD}
      </p>
      <p class="card-2-info para-3 dark-theme">
      ${artist.longD}
      </p>
    </li>
  </ul>
</li>`;
});
tempList.innerHTML += '<button class="show-more dt-display-none">SHOW MORE &#160; <i class="main-theme fa fa-angle-down"></i></button>';
artistSection.appendChild(tempList);

const showDetailsBtn = document.querySelector('.show-more');
const cards = document.querySelectorAll('.card-2');
function artistListAdd() {
  if (cards[2].classList.contains('display-none')) {
    cards.forEach((e, index) => {
      if (index > 1) {
        e.classList.remove('display-none');
      }
    });
    showDetailsBtn.innerHTML = 'SHOW LESS &#160; <i class=\'fa fa-angle-up\'></i>';
  } else {
    cards.forEach((e, index) => {
      if (index > 1) {
        e.classList.add('display-none');
        showDetailsBtn.innerHTML = 'SHOW MORE &#160; <i class=\'fa fa-angle-down\'></i>';
      }
    });
  }
}

showDetailsBtn.addEventListener('click', artistListAdd);
