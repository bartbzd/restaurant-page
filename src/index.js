import './styles.css';
// import printMe from './print.js';

const header = () => {
  const nav = document.createElement('div');
  const navItems = document.createElement('div');
  const text = () => document.createElement('p');

  document.body.appendChild(nav);
  nav.appendChild(text());
  nav.appendChild(navItems);
  nav.classList.add('nav-bar');
  navItems.classList.add('nav-items');

  navItems.appendChild(text()).classList.add('home');
  navItems.appendChild(text()).classList.add('menu');
  navItems.appendChild(text()).classList.add('contact');

  document.querySelector('.home').textContent = 'HOME';
  document.querySelector('.menu').textContent = 'MENU';
  document.querySelector('.contact').textContent = 'CONTACT';
};
header();
// eslint-disable-next-line no-console
console.log('Test log');
