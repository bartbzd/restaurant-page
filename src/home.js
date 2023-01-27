import heroText from './img/hero-text.png';

export default function home() {
  const container = document.createElement('div');
  container.className = 'main';
  const hero = new Image();
  hero.className = 'hero-text';
  hero.src = heroText;
  const btn = document.createElement('button');
  btn.className = 'order-btn';
  btn.append('Order Online');
  container.append(hero, btn);

  return container;
}
