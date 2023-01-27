/* eslint-disable comma-dangle */
import About from './img/about-pic.png';

export default function about() {
  const container = document.createElement('div');
  const div = () => document.createElement('div');
  const h3 = () => document.createElement('h3');
  const p = () => document.createElement('p');
  const aboutImg = new Image();
  aboutImg.className = 'about-pic';
  aboutImg.src = About;

  container.appendChild(h3()).className = 'about-title';
  container.className = 'about-section';
  container.appendChild(div()).className = 'about-1';
  container.appendChild(div()).className = 'about-2';
  container.appendChild(aboutImg);

  container.querySelector('.about-title').append('Our Story');
  container
    .querySelector('.about-1')
    .appendChild(p())
    .append(
      '     What started as shared hobby small talk, the team at COCO quickly grew obsessed perfecting the various ways we brewed coffee and decided to go all in. Over the years, we’ve developed, mass produced and sold our own blends to share with the world, and that’s how COCO came to be.'
    );
  container
    .querySelector('.about-1')
    .appendChild(p())
    .append(
      'With more than 200 shops across US as of 2023, we’re constantly working hard and innovating to bring the next chapter of COCO to all coffee lovers. In fact, we’re excited to share a few large developments as early as this year!'
    );

  container
    .querySelector('.about-2')
    .appendChild(p())
    .append(
      'Using always fresh, 100% organic ingredients sourced from sustainable vendors, we stand behind our coffee, our ingredients and our technique - that’s COCO.'
    );
  return container;
}
