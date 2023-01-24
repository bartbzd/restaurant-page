import Logo from './img/logo.png';
import Gitleaf from './img/git-plant.png';

export default function header() {
  const nav = document.createElement('div');
  const logo = new Image();
  logo.src = Logo;
  const navItems = document.createElement('div');
  const text = () => document.createElement('p');

  nav.appendChild(logo);
  nav.appendChild(navItems);
  nav.classList.add('nav-bar');
  logo.classList.add('logo');
  navItems.classList.add('nav-items');

  navItems.appendChild(text()).classList.add('home');
  navItems.appendChild(text()).classList.add('menu');
  navItems.appendChild(text()).classList.add('contact');

  nav.querySelector('.home').textContent = 'ABOUT';
  nav.querySelector('.menu').textContent = 'MENU';
  nav.querySelector('.contact').textContent = 'CONTACT';

  return nav;
}

export function gitLeaf() {
  const ghLink = document.createElement('a');
  ghLink.classList.add('github-link');
  const ghIcon = document.createElement('i');
  ghIcon.classList.add('fab', 'fa-github', 'fa-2x');
  const topLeaf = new Image();
  topLeaf.classList.add('git-leaf');
  topLeaf.src = Gitleaf;
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.querySelector('.nav-bar').appendChild(wrapper);
  wrapper.appendChild(topLeaf);
  wrapper.appendChild(ghLink);
  ghLink.appendChild(ghIcon);

  return wrapper;
}
