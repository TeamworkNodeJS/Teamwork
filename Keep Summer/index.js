const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/static', express.static('public'));
app.use('/libs', express.static('node_modules'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('home/home');
});

app.get('/home', (req, res) => {
     res.render('home/home');
});

app.get('/explore', (req, res) => {
     res.render('explore/explore');
});

app.get('/contact', (req, res) => {
     res.render('forms/contact-form');
});

app.listen(3002, () => console.log('Server listen on :3002'));
