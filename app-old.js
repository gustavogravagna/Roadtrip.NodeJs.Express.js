const http = require('http');

http.createServer( ( req, res) => {


    console.log(req);


    // res.writeHead(200, { 'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv'});

    res.write( 'Hola Mundo')
    res.end()





    const persona = {
        id: 1,
        nombre: 'Gustavo'
    }




    res.write(JSON.stringify( persona ));
    res.end();

})

.listen(8080);



console.log('Escuchando en el puerto 8080', 8080)






