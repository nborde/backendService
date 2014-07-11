var express = require('express');
	wines	= require('./routes/wines'); //Esto mapea la ruta fisica donde estan los archivos de wines.
 	
var app = express();

//Configuracion de log para nodeJS

app.configure(function () {
	app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
	app.use(express.bodyParser());
	//app.use(app.router);
});

 
app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
app.post('/wines', wines.addWine);
app.put('/wines/:id', wines.updateWine);
app.delete('/wines/:id', wines.deleteWine);

 
app.listen(3000);
console.log('Listening on port 3000...');
