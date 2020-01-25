import { nav } from './js/nav';
import { about } from './js/about';
import { home } from './js/home';
import { contact } from './js/contact';
import { menu } from './js/menu';
import './styles/main.scss';

const navigation = nav();
const body = document.querySelector('body');
const navDiv = document.querySelector('.navbar-fixed');
body.appendChild(navDiv);
navDiv.appendChild(navigation);

home.render();


document.querySelector('.home').addEventListener('click', () => {
  home.render();
});

document.querySelector('.about').addEventListener('click', () => {
  about.render();
});

document.querySelector('.contact').addEventListener('click', () => {
  contact.render();
});

document.querySelector('.menu').addEventListener('click', () => {
  menu.render();
});