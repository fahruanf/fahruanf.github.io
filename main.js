/*=============== Show Menu ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
/*=============== Close Menu ===============*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== Navbar ===============*/
const navLinks = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLinks.forEach((n) => n.addEventListener('click', linkAction));

/*=============== Navbar Shadow ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 80) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== Navbar Active Link ===============*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighLighter);

function navHighLighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
