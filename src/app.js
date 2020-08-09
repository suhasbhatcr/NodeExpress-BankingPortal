const fs = require('fs');
const path = require('path');

const express = require('express');
const app = new express();

const { accounts, users, writeJSON } = require('./data.js');

const accountRoutes = require('./routes/accounts');
const serviceRoutes = require('./routes/services');

app.use('/account','accountRoutes');
app.use('/services','serviceRoutes');

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts }));

app.get('/transfer', (req, res) =>  res.render('transfer'));



app.get('/profile', (req, res) =>  res.render('profile', { user: users[0] }));

app.listen(3000, () => { console.log('PS Project Running on port 3000!') });