const jsdom = require('jsdom');
const { JSDOM } = jsdom;
GLOBAL.document = new JSDOM(html).window.document;

// Express routing https://expressjs.com/en/api.html
const express = require('express');
const app = express();
// Environment port else 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log('listening at ' + `${PORT}`);
});

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));
// static site with public directory
app.use(express.static('public'));
// Parse request as json
app.use(express.json({ limit: '1mb' }));
app.post('/api', (req, res) => {
   console.log('request', req.body);
   res.json({
      message: 'success',
   });
});

// document.addEventListener('DOMContentLoaded', () => {
//    const primaryNavBar = document.querySelector('.primary-navigation');

//    const navBarToggle = document.querySelector('.mobile-nav-toggle');

//    // navBarToggle.addEventListener('click', toggleNavBar);

//    navBarToggle.addEventListener('click', () => {
//       // Icon animation
//       navBarToggle.classList.toggle('change');

//       const isVisible = primaryNavBar.getAttribute('data-visible');
//       if (isVisible === 'false') {
//          primaryNavBar.setAttribute('data-visible', true);
//          navBarToggle.setAttribute('aria-expanded', true);
//       } else {
//          primaryNavBar.setAttribute('data-visible', false);
//          navBarToggle.setAttribute('aria-expanded', false);
//       }
//    });
// });
