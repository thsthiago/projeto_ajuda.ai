const bars = document.querySelector('.bars');
const barsOne = document.querySelector('.bars-1');
const barsTwo = document.querySelector('.bars-2');
const navMobile = document.querySelector('.nav-mobile');
const ul = document.querySelector('.nav-mobile ul');

bars.addEventListener('click', () =>  {
  if(barsOne.classList[1] !== 'bars-active-1') {
    barsOne.classList.add('bars-active-1')
    barsTwo.classList.add('bars-active-2')
    navMobile.style.width = '60%';
    ul.style.opacity = '1';
  } else {
    barsOne.classList.remove('bars-active-1')
    barsTwo.classList.remove('bars-active-2')
    navMobile.style.width = '0%';
    ul.style.opacity = '0';
  }
});