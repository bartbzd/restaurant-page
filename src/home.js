import heroText from './img/hero-text.png';

export default function home() {
  const container = document.createElement('div');
  container.classList.add('main');
  const hero = new Image();
  hero.classList.add('hero-text');
  hero.src = heroText;

  const btn = document.createElement('button');
  btn.classList.add('order-btn');
  btn.textContent = 'Order Now';
  container.appendChild(hero);
  container.appendChild(btn);

  return container;
}
