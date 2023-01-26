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
container.append(header(), content);
container.append(gitLeaf(), leaf);
content.append(home(), cup);

const nav = ['.about', '.menu', '.contact'];
const navItems = document.querySelectorAll(nav);
const homePage = document.querySelector('.logo');
const menuItem = document.querySelector('.menu');

function renderHome() {
  //   content.innerHTML = '';
  content.replaceChildren(home(), cup);
  container.append(leaf);
  leaf.classList.remove('reverse');
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
}

//aboutItem

function renderMenu() {
  container.append(leaf);
  content.replaceChildren(menu());
  leaf.classList.add('reverse');
  menuItem.classList.add('active');
}

homePage.addEventListener('click', renderHome);
menuItem.addEventListener('click', renderMenu);
//contactItem

//Add Find A Store to every page
//Add about.js and content
//Add contact.js and content
