// Mobile Nav

const navElem = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navMobileMenu = document.getElementById('nav-mobile-menu');
const navBrandImage = document.getElementById('nav-img');

let toggleNavBackground = true;

navToggle.addEventListener('click', () => {
    navMobileMenu.classList.toggle('nav__box--on');
    if (navMobileMenu.classList.contains('nav__box--on')) {
        navToggle.src = "./images/icon-close.svg";
        navBrandImage.classList.add('nav__img--on');
        nav.classList.remove('nav--on');
        toggleNavBackground = false;
    } else {
        navToggle.src = "./images/icon-hamburger.svg";
        navBrandImage.classList.remove('nav__img--on');
        toggleNavBackground = true;
        addNavBackground();
    }
});

// Nav on scroll

const addNavBackground = () => (pageYOffset >= 70) ? nav.classList.add('nav--on') : nav.classList.remove('nav--on');

document.addEventListener('scroll', () => {
    if (!toggleNavBackground) return;
    addNavBackground();
});