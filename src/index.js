import './styles.css';
import Leaf from './img/only-plant.png';
import Cup from './img/only-cup.png';

import header from './header';
import home from './home';

const content = document.querySelector('#content');
const leaf = new Image();
const cup = new Image();
leaf.classList.add('leaf');
leaf.src = Leaf;
cup.classList.add('cup');
cup.src = Cup;

content.appendChild(cup);
content.appendChild(header());
content.appendChild(home());
content.appendChild(leaf);
