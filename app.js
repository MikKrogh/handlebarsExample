const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerHelper('gt', (a, b) => a > b);
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.use(express.static(path.join(__dirname, 'public')));

let products = JSON.parse(fs.readFileSync('./public/js/products.js', 'utf8'));


app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});
app.get('/products', (req, res) => {
  res.render('products', {
    title: 'Products',
    products    
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));