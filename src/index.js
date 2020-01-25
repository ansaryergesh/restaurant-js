import { example } from './example';
import { nav } from './js/nav.js';
import './styles/main.scss';
console.log(example('bro'))

const navigation = nav();
const body = document.querySelector('body');
body.appendChild(document.createElement('div'));
const navList = document.querySelector('div');
navList.appendChild(navigation);
