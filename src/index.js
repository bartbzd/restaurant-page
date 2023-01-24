import './styles.css';
import Leaf from './img/only-plant.png';
import Cup from './img/only-cup.png';

import header, { gitLeaf } from './header';
import home from './home';
import menu from './menu';

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('main-container');

const leaf = new Image();
const cup = new Image();
leaf.classList.add('leaf');
leaf.src = Leaf;
cup.classList.add('cup');
cup.src = Cup;

container.appendChild(header());
container.appendChild(content);
container.appendChild(gitLeaf());
content.appendChild(home());
content.appendChild(cup);
content.appendChild(leaf);

const homePage = document.querySelector('.logo');
const menuItem = document.querySelector('.menu');

homePage.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(home());
  content.appendChild(cup);
  content.appendChild(leaf);
  container.querySelector('.menu', '.about', '.contact').classList.toggle('active');
});
menuItem.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(menu());
  container.querySelector('.menu').classList.toggle('active');
});

//Add menu content, img and text cards
//Animate bottom leaf position on menu page load
//Add nav item selected styling
