"use strict";
const petList = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
],
      modalWindowContent = document.querySelector('.modal__content'),
      headerLogoLink = document.querySelector('.header__logo'),
      modalWindow = document.querySelector('.modal'),
      container = document.querySelector('.container'),
      scroll = calcScroll(),
      burger = document.querySelector('.burger'),
      burgerList = document.querySelector('.burger__menu'),
      burgerUl = document.querySelector('.burger__nav'),
      burgerHome = document.querySelector('#burger__nav__home');
let showModal = document.querySelectorAll('.card');


function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

const closeModal = () => {
  modalWindow.style.display = 'none';
  document.body.style.overflow = 'visible';
  document.body.style.marginRight = `0px`;
};

modalWindow.addEventListener('click', (event) => {
if (event.target === modalWindow || event.target === container) {
  closeModal();
}
});

window.addEventListener('resize', () => {
  if (burgerMenu || showModal) {
    closeBurger();
    closeModal();
  }
})

const inputData = petData => {
for (let index = 0; index < petList.length; index++) {

if (petList[index].name == `${petData}`) {
  modalWindowContent.innerHTML =       `
  <div class="modal__img">
  <img src="${petList[index].img}" alt="${petList[index].type}">
  </div>
  <div class="modal__desc">
  <h3 class="desc__name">${petList[index].name}</h3>
  <h4 class="desc__subtitle">Dog - ${petList[index].breed}</h4>
  <p class="desc__text">${petList[index].description}</p>
  <ul class="desc__info">
    <li class="desc__info__item"><span>Age:</span> ${petList[index].age}</li>
    <li class="desc__info__item"><span>Inoculations:</span> ${petList[index].inoculations}</li>
    <li class="desc__info__item"><span>Diseases:</span> ${petList[index].diseases}</li>
    <li class="desc__info__item"><span>Parasites:</span> ${petList[index].parasites}</li>
  </ul>
  </div>
  <button class="modal__close">
  <i class="fas fa-times"></i>
  </button>
  `;
  }
  };
  const closeBtn = document.querySelector("body > section.modal > div > div > div > button");
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal());
  }
};

const closeBurger = () => {
  burgerUl.style.animationDirection = 'reverse';
  setTimeout('burgerList.setAttribute("hidden", "true")', 1000);
  burgerUl.style.animation = 'burger-hide 1s';
  burger.style.transform = '';
  document.body.style.overflow = 'visible';
  document.body.style.marginRight = `0px`;
};

const burgerMenu = () => {
burger.addEventListener('click', () => {
  if (burgerList.hasAttribute('hidden')) {
    document.body.style.marginRight = `${scroll}px`;
    burgerList.removeAttribute('hidden');
    burger.style.transform = 'rotate(90deg)';
    burgerUl.style.animationDirection = 'normal';
    burgerUl.style.animation = 'burger-show 1s';
    document.body.style.overflow = 'hidden';
  } else {closeBurger();}
}); 
};

burgerList.addEventListener('click', (event) => {
  if (event.target === burgerList) {
  closeBurger();
}
});

burgerHome.addEventListener('click', (event) => {
  if (event.target) {
    event.preventDefault();
    closeBurger();
  };
});


const rightBTN = document.querySelector('.slider-button_reverted');
const leftBTN = document.querySelector('.slider-button');
let petsCARDS = document.querySelector('.pets__cards');
let arrpets = [];

const randomPets = () => {
  while (arrpets.length < 3) {
    let randomPet = Math.floor(Math.random() * Math.floor(petList.length))
    if (!arrpets.includes(randomPet)) {
      arrpets.push(randomPet)
    }
  }
}

const generatePets = () => {
  const oldPets = arrpets
  arrpets = [];
  while(arrpets.length < 3) {
    let randomPet = Math.floor(Math.random() * Math.floor(petList.length))
    if (!arrpets.includes(randomPet) && !oldPets.includes(randomPet)) {
      arrpets.push(randomPet)
    }
  }
}

rightBTN.addEventListener('click', (e) => {
  if (e.target) {
  e.preventDefault();
  petsCARDS.style.animation = 'showSlideRight 1s';
  generatePets()
  clickSLIDERdadd(arrpets[0],arrpets[1],arrpets[2]);
  };
});

leftBTN.addEventListener('click', (e) => {
  if (e.target) {
  e.preventDefault();
  petsCARDS.style.animation = 'showSlideLeft 1s';
  generatePets()
  clickSLIDERdadd(arrpets[0],arrpets[1],arrpets[2]);
  };
});

petsCARDS.addEventListener('animationend', () => {
  petsCARDS.style.animation = '';
})

const clickSLIDERdadd = (a,b,c) => {
  petsCARDS.innerHTML =        `
  <div class="card" something="${petList[a].name}">
  <img
    class="card__img"
    src="${petList[a].img}"
    alt="${petList[a].type}"
  />
  <div class="card__name">${petList[a].name}</div>
  <div class="card__text">Learn more</div>

</div>
<div class="card card--hide-sm" something="${petList[b].name}">
  <img
    class="card__img"
    src="${petList[b].img}"
    alt="${petList[b].type}"
  />
  <div class="card__name">${petList[b].name}</div>
  <div class="card__text">Learn more</div>
</div>
<div class="card card--hide"  something="${petList[c].name}">
  <img
    class="card__img"
    src="${petList[c].img}"
    alt="${petList[c].type}"
  />
  <div class="card__name">${petList[c].name}</div>
  <div class="card__text">Learn more</div>
</div>
`
showModal = document.querySelectorAll('.card');
  showModal.forEach(item => {
  item.addEventListener('click', (event) => {
  inputData(`${item.getAttribute('something')}`);
  modalWindow.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = `${scroll}px`;
  modalWindow.style.animation = 'modal-show 0.5s';
  });
  });
};

inputData();
burgerMenu();
randomPets();
generatePets();
clickSLIDERdadd(arrpets[0],arrpets[1],arrpets[2]);

