// Mobile Nav

// DOM

const navElem = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navMobileMenu = document.getElementById('nav-mobile-menu');
const navBrandImage = document.getElementById('nav-img');

// Flag

let toggleNavBackground = true;

// Event

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

// Tabs

const tabHeaders = document.querySelectorAll('.tabs__header-li');
const tabs = document.querySelectorAll('.tab');

// Classes

let tabActive = 'tab--active';
let tabHeaderActive = 'tabs__header-li--active';

// Change tab on click

tabHeaders.forEach(tabHeader => tabHeader.addEventListener('click', (e) => showTab(e.target.id)));

let showTab = (tabId) => {
    tabs.forEach((tab, index) => {
        if (tab.classList.contains(tabId)) {
            tab.classList.add(tabActive);
            tabHeaders.forEach(tabHeader => tabHeader.classList.remove(tabHeaderActive));
            tabHeaders[index].classList.add(tabHeaderActive);
        } else {
            tab.classList.remove(tabActive);
        }
    });
}

// faq accordion

const faqQuestions = document.querySelectorAll('.faq__accordion-q');
const faqAnswers = document.querySelectorAll('.faq__accordion-a');

const toggleAnswer = 'faq__accordion-a--open';

faqQuestions.forEach(faqQ => {
    faqQ.addEventListener('click', function () {
        this.classList.toggle('faq__accordion-q--open');
        this.nextElementSibling.classList.toggle(toggleAnswer);
    });
});

// cta