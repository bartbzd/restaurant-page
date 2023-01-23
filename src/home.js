import heroText from './img/hero-text.png';

export default function home() {
  const container = document.createElement('div');
  container.classList.add('main');
  const hero = new Image();
  hero.classList.add('hero-text');
  hero.src = heroText;

  const btn = document.createElement('button');
  btn.classList.add('order-btn');
  btn.textContent = 'Order Online';
  container.appendChild(hero);
  container.appendChild(btn);

  const storeWrapper = document.createElement('div');
  const hours = document.createElement('p');
  const map = document.createElement('a');
  const mapIcon = document.createElement('i');
  storeWrapper.classList.add('store-wrapper');
  hours.classList.add('hours');
  hours.textContent = 'Find a store';
  mapIcon.classList.add('fa-solid', 'fa-location-dot', 'fa-1x');
  map.appendChild(mapIcon);
  storeWrapper.appendChild(map);
  storeWrapper.appendChild(hours);
  container.appendChild(storeWrapper);

  return container;
}
