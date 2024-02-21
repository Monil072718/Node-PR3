const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('./pages/index');
})
app.get('/about', (req, res) => {
    res.render('./pages/about');
})

app.get('/services', (req, res) => {
    res.render('./pages/services');
})
app.get('/portfolio', (req, res) => {
    res.render('./pages/portfolio');
})
app.get('/team', (req, res) => {
    res.render('./pages/team');
})
app.get('/contact', (req, res) => {
    res.render('./pages/contact');
})
app.listen(1800)