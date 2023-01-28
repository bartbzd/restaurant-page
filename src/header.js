import Logo from './img/logo.png';
import Gitleaf from './img/git-plant.png';

export default function header() {
  const navItems = document.createElement('div');
  const text = () => document.createElement('p');
  const nav = document.createElement('div');
  const logo = new Image();
  logo.src = Logo;

  navItems.className = 'nav-items';
  nav.className = 'nav-bar';
  logo.className = 'logo';

  nav.append(logo, navItems);
  navItems.appendChild(text()).className = 'about';
  navItems.appendChild(text()).className = 'menu';
  navItems.appendChild(text()).className = 'contact';

  navItems.querySelector('.about').append('ABOUT');
  navItems.querySelector('.menu').append('MENU');
  navItems.querySelector('.contact').append('CONTACT');

  return nav;
}

export function gitLeaf() {
  const wrapper = document.createElement('div');
  const i = document.createElement('i');
  const a = document.createElement('a');
  const topLeaf = new Image();
  topLeaf.src = Gitleaf;

  i.className = 'fab fa-github fa-2x';
  topLeaf.className = 'git-leaf';
  wrapper.className = 'wrapper';
  a.className = 'github-link';
  a.href = 'https://github.com/bartbzd/restaurant-page';

  document.body.append(wrapper);
  wrapper.append(topLeaf);
  wrapper.append(a);
  a.append(i);

  return wrapper;
}
