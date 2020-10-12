// const leftBtn = document.querySelector('.slider-button');
// const rightBtn = document.querySelector('.slider-button_reverted');
// const carousel = document.querySelector('.pets__wrapper');
// const burger = document.querySelector('.burger');

// function burgerMenu() {
// burger.addEventListener('click', function() {
//   console.log('burger click')
//   if (burger.getAttribute('hidden') == 'true') {
//     burger.removeAttribute('hidden')
//   } else {
//     burger.setAttribute ("hidden", "true")
//   }
// }); 
// };

// function initCarousel() {
//   let slidePositon = carousel.offsetWidth;
//   let position = 0;

//   rightBtn.addEventListener( "click" , function() {
//       position -= slidePositon;
//       movePositon();
//       hideBtn();
//   });

//   leftBtn.addEventListener( "click" , function() {
//       position += slidePositon;
//       movePositon();
//       hideBtn();
//   });

//   const movePositon = () => {
//     carousel.style.transform = `translateX(${position}px)`
//   }

//   const hideBtn = () => {
//     if (position === 0) {
//       leftBtn.style.display = 'none'
//     } else {
//       leftBtn.style.display = 'flex'
//     };
    
//     if (position === -2964) {
//       rightBtn.style.display = 'none'
//     } else {
//       rightBtn.style.display = 'flex'
//     }
//   }
//   hideBtn();
// }
// initCarousel();
// burgerMenu();
