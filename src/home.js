import heroText from './img/hero-text.png';

export default function home() {
  const container = document.createElement('div');
  const btn = document.createElement('button');
  const hero = new Image();
  container.className = 'main';
  btn.className = 'order-btn';
  hero.className = 'hero-text';
  hero.src = heroText;

  btn.append('Order Online');
  container.append(hero, btn);

  return container;
}
