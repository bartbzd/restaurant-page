import Cups from './img/menu-icons.png';

export default function menu() {
  const container = document.createElement('div');
  const div = () => document.createElement('div');
  container.className = 'menu-section';
  container.appendChild(div()).className = 'left';
  container.appendChild(div()).className = 'right';

  const img = new Image();
  img.className = 'menu-img';
  img.src = Cups;
  container.querySelector('.left').append(img);

  const h3 = document.createElement('h3');
  h3.className = 'card-title';
  h3.append('Tester Title');

  const textbox = container.querySelector('.right');
  const p = () => document.createElement('p');
  textbox.append(h3);
  textbox.appendChild(p()).className = 'card-body';

  container.querySelector('.card-body').textContent =
    'Fake tester text to explain this coffee menu item';

  return container;
}
