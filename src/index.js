import './styles.css';
import Leaf from './img/only-plant.png';
// import printMe from './print.js';
import header from './header';
import home from './home';

const content = document.querySelector('#content');
content.appendChild(header());
content.appendChild(home());

const leaf = new Image();
leaf.classList.add('leaf');
leaf.src = Leaf;

content.appendChild(leaf);
