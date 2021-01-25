const quadradosFlutuante = document.querySelector('#quadrados__flutuantes');

for (let i = 0; i < 6; i++) {

  const li = document.createElement('li');

  const random = (max, min) => Math.random() * (max - min) + min;

  const size = Math.floor(random(230, 40)); 
  const position = random(99, 1);
  const delay = random(5, 0.1)
  const duration = random( 24, 5);

  li.classList.add('quadrado');
  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`
  li.style.animationDuration = `${duration}s`
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  quadradosFlutuante.appendChild(li);

}

const darkWhite = document.querySelector('.dark__white');
const botao = document.querySelector('.botao');
const body = document.querySelector('body');
const elements = document.querySelectorAll('.white-element');
const p = document.querySelectorAll('p');
const a = document.querySelectorAll('a');
const h1 = document.querySelectorAll('h1');
const i = document.querySelectorAll('i');
const logo = document.querySelector('.logo');
const ilustracaoPesquisa = document.querySelector('.ilustracao-pesquisa');
const ilustracaoContribuentes = document.querySelector('.ilustracao-contribuentes');

function mudarCor (tema, elemento) {
  
  if(tema === 'dark') {
    elemento.forEach(e => {
      e.style.color = '#fff'
    })
  }

  if(tema === 'white') {
    elemento.forEach(e => {
      if(e.innerText === 'Login') return;
      e.style.color = '#000'
    })
  }
}

function mudaTema (tema) {
  if(tema === 'dark') {
    body.classList.remove('white');
    
    elements.forEach(item => {
      item.classList.remove('white-element')
      item.classList.add('dark-element')
    })

    body.classList.add('dark');
    mudarCor('dark', p)
    mudarCor('dark', a)
    mudarCor('dark', h1)
    mudarCor('dark', i)
  }

  if(tema === 'white') {
    body.classList.remove('dark');

    elements.forEach(item => {
      item.classList.remove('dark-element')
      item.classList.add('white-element')
      
    })

    body.classList.add('white');
  }
}

darkWhite.addEventListener('click', () => {
  if(window.getComputedStyle(botao).left === '6px') {
    botao.style.left = "45%";
    darkWhite.classList.remove('white');
    botao.classList.remove('white');
    mudaTema('dark');
  } else { 
    botao.style.left = "5%";
    darkWhite.classList.add('white');
    botao.classList.add('white');
    mudaTema('white');
  }
})