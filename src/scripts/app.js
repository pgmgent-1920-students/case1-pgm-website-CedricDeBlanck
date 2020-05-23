// load scss
import '../sass/main.scss';

import {JsonData} from '../scripts/posts';
import {postshtml} from './variabelen';
// navigo router
import Navigo from 'navigo';
import nunjucks from 'nunjucks';
let router = new Navigo(document.location.origin, true, '#!');
router.updatePageLinks();
router.on({
  '/': () => {
    let template = nunjucks.render('/templates/pages/home.html', {});
    content.innerHTML = template;
    postshtml.style.display= 'block';
    JsonData();
  },
  'overons': () => {
    let template = nunjucks.render('/templates/pages/overons.html', {});
    content.innerHTML = template;
  },
  'opleiding': () => {
    let template = nunjucks.render('/templates/pages/opleiding.html', {});
    content.innerHTML = template;
  },
  'cases': () => {
    let template = nunjucks.render('/templates/pages/cases.html', {});
    content.innerHTML = template;
  },
  'posts': () => {
    let template = nunjucks.render('/templates/pages/posts.html', {});
    content.innerHTML = template;
  },
  'werkplekleren': () => {
    let template = nunjucks.render('/templates/pages/werkplekleren.html', {});
    content.innerHTML = template;
  },
  'contact': () => {
    let template = nunjucks.render('/templates/pages/contact.html', {});
    content.innerHTML = template;
  },
  'studenten': () => {
    let template = nunjucks.render('/templates/pages/studenten.html', {});
    content.innerHTML = template;
  },
}).resolve();