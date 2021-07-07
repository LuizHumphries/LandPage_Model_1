


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

const header = document.querySelector("#headerpage")
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll () {
  
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}
const backToTopButton = document.querySelector('.back-to-top') 

function backToTop() {
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
  breakpoints: {
    1200: {      
      slidesPerView: 1,
      setWrapperSize: true,
    }
  }

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

const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for( const section of sections ) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    const checkpointStart = checkpoint>=sectionTop
    const checkpointEnd = checkpoint <=sectionTop + sectionHeight

    if( checkpointStart && checkpointEnd ) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')

    }else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }  
}

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

/* menu ativo */
