import Cups from './img/menu-icons.png';

export default function menu() {
  const container = document.createElement('div');
  const div = () => document.createElement('div');
  container.classList.add('menu-section');
  container.appendChild(div()).classList.add('left');
  container.appendChild(div()).classList.add('right');

  const img = new Image();
  img.classList.add('menu-img');
  img.src = Cups;
  container.querySelector('.left').appendChild(img);
  const h3 = document.createElement('h3');
  h3.classList.add('card-title');
  h3.textContent = 'Tester Title';
  container.querySelector('.right').appendChild(h3);

  const p = () => document.createElement('p');
  container.querySelector('.right').appendChild(p()).classList.add('card-body');

  container.querySelector('.card-body').textContent =
    'Fake tester text to explain this coffee menu item';

  return container;
}
