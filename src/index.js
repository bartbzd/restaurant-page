import footer, { bottomLeaf } from './footer';
import Leaves from './img/about-leaves.png';
import header, { gitLeaf } from './header';
import favicon from './img/favicon.png';
import Cup from './img/only-cup.png';
import contact from './contact';
import about from './about';
import menu from './menu';
import home from './home';
import './styles.css';

const link = document.createElement('link');
link.type = 'image/png';
link.rel = 'shortcut icon';
link.href = favicon;
document.head.append(link);

const leaves = new Image();
leaves.className = 'leaves';
const cup = new Image();
cup.className = 'cup';
leaves.src = Leaves;
cup.src = Cup;

const container = document.querySelector('#container');
const content = document.createElement('div');
container.append(header(), content, footer(), gitLeaf(), bottomLeaf());
content.append(home(), cup);

const nav = ['.logo', '.about', '.menu', '.contact'];
const navItems = document.querySelectorAll(nav);
const homePage = document.querySelector('.logo');
const aboutItem = document.querySelector('.about');
const menuItem = document.querySelector('.menu');
const contactItem = document.querySelector('.contact');
const leaf = document.querySelector('.leaf');
const leafWrapper = document.querySelector('.leaf-wrapper');
function removeActive() {
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
}
window.onresize = () => {
  document.body.height = window.innerHeight;
};
window.onresize();
function renderHome() {
  removeActive();
  content.replaceChildren(home(), cup);
  container.append(leafWrapper);
  leaf.classList.remove('reverse');
  container.removeChild(leaves);
}
function renderAbout() {
  removeActive();
  container.append(leaves);
  container.append(leafWrapper);
  content.replaceChildren(about());
  leaf.classList.add('reverse');
  aboutItem.classList.add('active');
}
function renderMenu() {
  removeActive();
  container.append(leafWrapper);
  content.replaceChildren(menu());
  leaf.classList.add('reverse');
  menuItem.classList.add('active');
  if ([...container.children].includes(leaves)) {
    container.removeChild(leaves);
  }
}
function renderContact() {
  removeActive();
  container.append(leafWrapper);
  content.replaceChildren(contact());
  leaf.classList.add('reverse');
  contactItem.classList.add('active');
  if ([...container.children].includes(leaves)) {
    container.removeChild(leaves);
  }
}

homePage.addEventListener('click', renderHome);
aboutItem.addEventListener('click', renderAbout);
menuItem.addEventListener('click', renderMenu);
contactItem.addEventListener('click', renderContact);
