import './styles.css';
import Leaf from './img/only-plant.png';
import Cup from './img/only-cup.png';
import Leaves from './img/about-leaves.png';
import header, { gitLeaf } from './header';
import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';

const leaves = new Image();
const leaf = new Image();
const cup = new Image();
leaves.className = 'leaves';
leaf.className = 'leaf';
cup.className = 'cup';
leaves.src = Leaves;
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
const aboutItem = document.querySelector('.about');
const menuItem = document.querySelector('.menu');
const contactItem = document.querySelector('.contact');
const leavesPicker = document.querySelector('.leaves');
function removeActive() {
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
}
function renderHome() {
  //   content.innerHTML = '';
  content.replaceChildren(home(), cup);
  container.append(leaf);
  leaf.classList.remove('reverse');
  removeActive();
  container.removeChild(leaves);
}
function renderAbout() {
  container.append(leaves);
  container.append(leaf);
  content.replaceChildren(about());
  leaf.classList.add('reverse');
  removeActive();
  aboutItem.classList.add('active');
}
function renderMenu() {
  container.append(leaf);
  content.replaceChildren(menu());
  leaf.classList.add('reverse');
  removeActive();
  menuItem.classList.add('active');
  container.removeChild(leaves);
}
function renderContact() {
  container.append(leaf);
  content.replaceChildren(contact());
  leaf.classList.add('reverse');
  removeActive();
  contactItem.classList.add('active');
}
homePage.addEventListener('click', renderHome);
aboutItem.addEventListener('click', renderAbout);
menuItem.addEventListener('click', renderMenu);
contactItem.addEventListener('click', renderContact);
//contactItem

//Add about.js and content
//Add contact.js and content
