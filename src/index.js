import './styles.css';
// import printMe from './print.js';

const header = () => {
  const nav = document.createElement('div');
  const p = document.createElement('p');
  document.body.appendChild(nav);
  nav.appendChild(p);
  nav.classList.add('nav-bar');
  p.textContent = 'Tester';
};
header();
// eslint-disable-next-line no-console
console.log('Test log');
