


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

window.addEventListener('scroll', function() {
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhell: true,
  keyboard: true,

  },
);


const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
  `#home .img, #paes .img, #confeiteiro .img`, {interval: 80}
)