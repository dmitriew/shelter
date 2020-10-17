const leftBtn = document.querySelector('.slider-button'),
      rightBtn = document.querySelector('.slider-button_reverted'),
      carousel = document.querySelector('.pets__cards'),
      slideposition = document.querySelector('.card'),
      burger = document.querySelector('.burger'),
      burgerList = document.querySelector('.burger__menu'),
      burgerUl = document.querySelector('.burger__nav'),
      headerWrapper = document.querySelector('.header__wrapper');
      

function burgerMenu() {
  burger.addEventListener('click', () => {
    if (burgerList.hasAttribute('hidden')) {
      burgerList.removeAttribute('hidden');
      burger.style.transform = 'rotate(90deg)';
      burgerUl.style.animationDirection = 'normal';
      burgerUl.style.animation = 'burger-show 1s';
      document.body.style.overflow = 'hidden';
      

    } else {
      closeModal();
      burgerUl.style.animationDirection = 'reverse';
      setTimeout('burgerList.setAttribute("hidden", "true")', 1000);
      burgerUl.style.animation = 'burger-hide 1s';
      burger.style.transform = '';
      document.body.style.overflow = 'visible';
    }
}); 
};
burgerList.addEventListener('click', (event) => {
  if (event.target === burgerList) {
    calcScroll();
    burgerUl.style.animationDirection = 'reverse';
    setTimeout('burgerList.setAttribute("hidden", "true")', 1000);
    burgerUl.style.animation = 'burger-hide 1s';
    burger.style.transform = '';
    document.body.style.overflow = 'visible';
  }
    });

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

// function initCarousel() {
//   let slidePositon = slideposition.offsetWidth;
//   let position = 0;

//   rightBtn.addEventListener( "click" , () => {
//     console.log('плик по правой')
//       position -= slidePositon;
//       movePositon();
//   });

//   leftBtn.addEventListener( "click" , () => {
//     console.log('плик по левой')
//       position += slidePositon;
//       movePositon();
//   });

//   const movePositon = () => {
//     carousel.style.transform = `translateX(${position}px)`
//   }
// }
// initCarousel();
burgerMenu();
