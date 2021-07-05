


/*Abrir e fechar o menu */
const nav = document.querySelector('#headerpage nav')
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}


/* Clickar no menu, fechar menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* adicionar sombra no header */


function changeHeaderWhenScroll () {

  const header = document.querySelector("#headerpage")
  const navHeight = header.offsetHeight;
  

  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top') 

  if(this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhell: true,
  keyboard: true,

  },
);


/* scroll reveal */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
  `#home .img, #paes .img, #confeiteiro .img, footer .brand, footer .social`, {interval: 80}
)

/* botao reveal */


window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
})

