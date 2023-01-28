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
  container.appendChild(div()).className = 'contact-form';
  container.className = 'contact-section';

  const textbox = container.querySelector('.contact-text');
  textbox.appendChild(div()).className = 'address';
  textbox.appendChild(div()).className = 'help';
  textbox.appendChild(div()).className = 'social';

  const address = textbox.querySelector('.address');
  address.appendChild(h3()).append('headquarters');
  address.appendChild(p()).append('113 Michigan Avenue');
  address.appendChild(p()).append('Chicago, IL 60661');

  const help = textbox.querySelector('.help');
  help.appendChild(h3()).append('support');
  help.appendChild(p()).append('help@coco.com');
  help.appendChild(p()).append('+1 777 222 1234');

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

  const formbox = container.querySelector('.contact-form');
  formbox.appendChild(h3()).append('Lets chat.');
  formbox.appendChild(div()).className = 'form';

  const form = formbox.querySelector('.form');
  form.appendChild(p()).append('name');
  form.appendChild(input()).placeholder = 'John Smith';
  form.appendChild(p()).append('email');
  form.appendChild(input()).placeholder = 'john@email.com';
  form.appendChild(p()).append('comments');
  form.appendChild(textarea).placeholder = 'Type here...';
  formbox.appendChild(input()).type = 'submit';
  formbox.querySelector('input[type=submit]').append('Test');

  return container;
}
