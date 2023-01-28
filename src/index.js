import './styles.css';
import Leaf from './img/only-plant.png';
import Cup from './img/only-cup.png';
import Leaves from './img/about-leaves.png';
import header, { gitLeaf } from './header';
import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';
import favicon from './img/favicon.png';

const leaves = new Image();
const leaf = new Image();
const cup = new Image();
leaves.className = 'leaves';
leaf.className = 'leaf';
cup.className = 'cup';
leaves.src = Leaves;
leaf.src = Leaf;
cup.src = Cup;

const link =
  document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/png';
link.rel = 'shortcut icon';
link.href = favicon;
document.head.append(link);
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
function removeActive() {
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
}
function createFooter() {
  const storeWrapper = document.createElement('div');
  storeWrapper.className = 'store-wrapper';
  const text = document.createElement('p');
  text.append('Find a store');
  text.className = 'store';
  const a = document.createElement('a');
  const i = () => document.createElement('i');

  container.append(storeWrapper);
  storeWrapper.appendChild(i()).className = 'fa-solid fa-location-dot fa-1x';
  storeWrapper.append(text);
}
createFooter();
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
  container.removeChild(leaves);
}
homePage.addEventListener('click', renderHome);
aboutItem.addEventListener('click', renderAbout);
menuItem.addEventListener('click', renderMenu);
contactItem.addEventListener('click', renderContact);
