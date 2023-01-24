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

  const storeWrapper = document.createElement('div');
  storeWrapper.classList.add('store-wrapper');
  const text = document.createElement('p');
  text.append('Find a store');
  text.className = 'store';
  const a = document.createElement('a');
  const i = document.createElement('i');
  i.className = 'fa-solid fa-location-dot fa-1x';

  container.appendChild(storeWrapper);
  storeWrapper.appendChild(a);
  storeWrapper.appendChild(text);
  a.appendChild(i);

  return container;
}
