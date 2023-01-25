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

  const box = container.querySelector('.right');
  const h3 = () => document.createElement('h3');
  const p = () => document.createElement('p');
  //   box.appendChild(p()).className = 'card-body';

  for (let i = 1; i < 5; i += 1) {
    box.appendChild(div()).className = `co-${i}`;
  }
  for (let i = 1; i < 5; i += 1) {
    const titles = ['JJ Favorite', 'Cappucino', 'Cinna Twister', 'Classic Black'];
    const title = box.querySelector(`.co-${i}`);
    title.appendChild(h3()).append(titles[i - 1]);
  }

  return container;
}
