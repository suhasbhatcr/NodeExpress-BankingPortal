const fs = require('fs');
const path = require('path');

const express = require('express');
const app = new express();

const accountData = fs.readFileSync("src/json/accounts.json");
const accounts = JSON.parse(accountData).accounts;
console.log(accounts);

const userData = fs.readFileSync("src/json/users.json");
const users = JSON.parse(userData).users;
console.log(users);

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => res.render('index', 
{   title: 'Account Summary',
    accounts: accounts
}));

app.get('/savings',(req, res)=> res.render('account',{
    account: accounts.savings
}));

app.listen(3000, () => { console.log('PS Project Running on port 3000!') });
