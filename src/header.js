import Logo from './img/logo.png';

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

  nav.querySelector('.home').textContent = 'HOME';
  nav.querySelector('.menu').textContent = 'MENU';
  nav.querySelector('.contact').textContent = 'CONTACT';

  return nav;
}
