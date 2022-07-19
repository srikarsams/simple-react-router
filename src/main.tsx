import './index.css';

import { createRouter } from './lib/router';
import { A } from './routes/A';
import { B } from './routes/B';
import { C } from './routes/C';

createRouter({
  routes: [
    { url: '/', component: A },
    { url: '/b', component: B },
    { url: '/c', component: C },
  ],
  target: document.getElementById('root') as HTMLElement,
});
