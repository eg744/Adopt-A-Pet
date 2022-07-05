// Express routing https://expressjs.com/en/api.html
const express = require('express');
// const jsdom = require('jsdom');
const path = require('path');
const mobileNavToggle = require('./navToggle');

const app = express();
// Environment port else 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log('listening at ' + `${PORT}`);
});

const path = require('path');
const { log } = require('console');
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
