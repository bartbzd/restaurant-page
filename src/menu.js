import Cups from './img/menu-icons.png';

export default function menu() {
  const container = document.createElement('div');
  const div = () => document.createElement('div');
  container.appendChild(div()).className = 'left';
  container.appendChild(div()).className = 'right';
  container.className = 'menu-section';

  const img = new Image();
  img.className = 'menu-img';
  img.src = Cups;
  container.querySelector('.left').append(img);

  const box = container.querySelector('.right');
  const h3 = () => document.createElement('h3');
  const p = () => document.createElement('p');

  for (let i = 1; i < 5; i += 1) {
    box.appendChild(div()).className = `co co-${i}`;
  }
  //   for (let i = 1; i < 5; i += 1) {
  //     const g = document.querySelector(`co co-${i}`);
  //     g.append(div());
  //   }
  for (let i = 1; i < 5; i += 1) {
    const titles = ['Mocha', 'Latte', 'Cappuccino', 'Americano'];
    const prices = ['$9', '$8', '$8', '$7'];
    const card = box.querySelector(`.co-${i}`);
    card.appendChild(div()).className = `menu-titles box-${i}`;
    const cardTitle = card.querySelector(`.box-${i}`);
    cardTitle.appendChild(h3()).append(titles[i - 1]);
    cardTitle.appendChild(h3()).append(prices[i - 1]);

    const texts = [
      'Brewed for cozy atmospheres, our hearty and rustic blend is reminiscent of a cabin fireplace.',
      'Crafted with precision using a balanced blend of coffee and milk, a feast for the senses.',
      'Perfect balance of espresso, milk and a cinnamon twist, just enough to wake the taste buds.',
      'Sophisticated take on a classic coffee experience, made with the finest 100% organic beans.',
    ];
    card.appendChild(p()).append(texts[i - 1]);
  }

  box.appendChild(p()).className = 'fresh';
  container.querySelector('.fresh').append('___________');
  return container;
}
