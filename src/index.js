import './styles.css';
import Leaf from './img/only-plant.png';
import Cup from './img/only-cup.png';
import header, { gitLeaf } from './header';
import home from './home';
import menu from './menu';

const leaf = new Image();
const cup = new Image();
leaf.className = 'leaf';
cup.className = 'cup';
leaf.src = Leaf;
cup.src = Cup;

const container = document.querySelector('#container');
const content = document.createElement('div');
// content.classList.add('main-container');

container.append(header(), content);
container.append(gitLeaf(), leaf);
content.append(home(), cup);

const homePage = document.querySelector('.logo');
const menuItem = document.querySelector('.menu');
const menuItems = container.querySelector('.about', '.menu', '.contact');

homePage.addEventListener('click', () => {
  content.innerHTML = '';
  content.append(home());
  content.append(cup);
  leaf.classList.remove('reverse');
  container.append(leaf);
  menuItems.classList.remove('active');
});

//aboutItem

menuItem.addEventListener('click', () => {
  content.innerHTML = '';
  content.append(menu());
  container.append(leaf);
  menuItem.classList.add('active');
  leaf.classList.add('reverse');
});
//contactItem

//refactor code
//Add menu content and text cards, style
//Add Find A Store to every page
//Add about.js and content
//Add contact.js and content
