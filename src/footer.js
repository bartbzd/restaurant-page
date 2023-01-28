export default function footer() {
  const storeWrapper = document.createElement('div');
  const i = () => document.createElement('i');
  const text = document.createElement('p');
  storeWrapper.className = 'store-wrapper';
  text.className = 'store';

  storeWrapper.appendChild(i()).className = 'fa-solid fa-location-dot fa-1x';
  text.append('Find a store');
  storeWrapper.append(text);

  return storeWrapper;
}
