const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT || 8080;
require('./hbs/helpers')
app.use(express.static(__dirname + '/public'))
    // express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Helpers


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Jogeiker',

    })

})

app.get('/about', (req, res) => {

    res.render('about')

})

app.get('/data', (req, res) => {
    res.send('Hola Data')
})



app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${ port }`);
})