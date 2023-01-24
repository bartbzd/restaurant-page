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
container.appendChild(leaf);

const homePage = document.querySelector('.logo');
const menuItem = document.querySelector('.menu');

homePage.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(home());
  content.appendChild(cup);
  container.querySelector('.leaf').classList.remove('reverse');
  container.appendChild(leaf);
  container.querySelector('.menu', '.about', '.contact').classList.toggle('active');
});
//aboutItem

menuItem.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(menu());
  container.querySelector('.menu').classList.add('active');
  container.querySelector('.leaf').classList.add('reverse');
  container.appendChild(leaf);
});
//contactItem

//Add menu content, img and text cards
//Animate bottom leaf position on menu page load
//Add nav item selected styling
