const express = require('express');
const hbs = require('hbs');
const app = express()
require('dotenv').config();
const port = process.env.PORT;


// HANDLEBAR
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials/');




// SERVIR CONTENIDO ESTATICO
app.use(express.static('public'));


// RUTAS /////////////////////////





app.get('/', ( req, res ) => { 
  res.render('home', {
    nombre: 'Gustavo Martin Gravagna',
    titulo: 'Proyecto NodeJs'
  });
})



// RENDERIZAMOS LAS PAGINA CON HBS
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Gustavo Martin Gravagna',
    titulo: 'Proyecto NodeJs'
  });
  })

  
// RENDERIZAMOS LAS PAGINA CON HBS
app.get('/elements', ( req, res ) => {
  res.render('elements', {
    nombre: 'Gustavo Martin Gravagna',
    titulo: 'Proyecto NodeJs'
  });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

