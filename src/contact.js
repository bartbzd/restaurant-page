export default function contact() {
  const container = document.createElement('div');
  const textarea = document.createElement('textarea');
  const input = () => document.createElement('input');
  const div = () => document.createElement('div');
  const h3 = () => document.createElement('h3');
  const p = () => document.createElement('p');
  const i = () => document.createElement('i');
  const a = () => document.createElement('a');
  container.appendChild(div()).className = 'contact-text';
  container.appendChild(div()).className = 'form';
  container.className = 'contact-section';

  const textbox = container.querySelector('.contact-text');
  textbox.appendChild(div()).className = 'address';
  textbox.appendChild(div()).className = 'help';
  textbox.appendChild(div()).className = 'social';

  const address = textbox.querySelector('.address');
  address.appendChild(h3()).append('COCO. Company');
  address.appendChild(p()).append('1123 Fake Avenue');
  address.appendChild(p()).append('Chicago, IL 60661');

  const help = textbox.querySelector('.help');
  help.appendChild(div()).className = 'icon-grp email';
  help.appendChild(div()).className = 'icon-grp phone';
  const email = textbox.querySelector('.email');
  email.appendChild(i()).className = 'fa-solid fa-envelope';
  email.appendChild(p()).append('help@coco.com');
  const phone = textbox.querySelector('.phone');
  phone.appendChild(i()).className = 'fa-solid fa-phone';
  phone.appendChild(p()).append('+1 777 222 1234');

  const social = textbox.querySelector('.social');
  social.appendChild(a()).className = 'social-icons facebook';
  social.appendChild(a()).className = 'social-icons instagram';
  social.appendChild(a()).className = 'social-icons twitter';
  const facebook = social.querySelector('.facebook');
  facebook.appendChild(i()).className = 'fa-brands fa-facebook fa-lg';
  const instagram = social.querySelector('.instagram');
  instagram.appendChild(i()).className = 'fa-brands fa-instagram fa-lg';
  const twitter = social.querySelector('.twitter');
  twitter.appendChild(i()).className = 'fa-brands fa-twitter fa-lg';

  const formbox = container.querySelector('.form');
  formbox.appendChild(h3()).append('Reach Out.');
  formbox.appendChild(p()).append('Name');
  formbox.appendChild(input());
  formbox.appendChild(p()).append('Email');
  formbox.appendChild(input());
  formbox.appendChild(p()).append('Comments');
  formbox.appendChild(textarea);
  formbox.appendChild(input());
  formbox.appendChild(input()).type = 'submit';
  //open hours
  //Mon-Fri, 9-5p CST

  //Name
  //Email
  //Phone Number??
  //Comments
  return container;
}
