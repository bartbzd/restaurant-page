import Logo from './img/logo.png';
import Gitleaf from './img/git-plant.png';

export default function header() {
  const nav = document.createElement('div');
  const logo = new Image();
  logo.src = Logo;
  const navItems = document.createElement('div');
  const text = () => document.createElement('p');

  const ghLink = document.createElement('a');
  ghLink.classList.add('github-link');
  const ghIcon = document.createElement('i');
  ghIcon.classList.add('fab', 'fa-github', 'fa-2x');
  nav.appendChild(logo);
  nav.appendChild(navItems);
  nav.classList.add('nav-bar');
  logo.classList.add('logo');
  navItems.classList.add('nav-items');

  navItems.appendChild(text()).classList.add('home');
  navItems.appendChild(text()).classList.add('menu');
  navItems.appendChild(text()).classList.add('contact');

  nav.querySelector('.home').textContent = 'HOME';
  nav.querySelector('.menu').textContent = 'MENU';
  nav.querySelector('.contact').textContent = 'CONTACT';

  const gitLeaf = new Image();
  gitLeaf.classList.add('git-leaf');
  gitLeaf.src = Gitleaf;
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  nav.appendChild(wrapper);
  wrapper.appendChild(gitLeaf);
  wrapper.appendChild(ghLink);
  ghLink.appendChild(ghIcon);

  return nav;
}
