// modules
const express = require('express');
const cors = require('cors');
const key = require('./configs/key');

// initialz
const app = express();
const routes = require('./routers/index.routes');
const err_404 = require('./middlewares/error/404');

// db
require('./db/');

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());
app.set('llave', key);

// Routes
routes(app);

// errors
app.use(err_404);

// init server
app.listen(app.get('port'), () => {
	// console.clear();

	console.log('                                                                  ()_()');
	console.log(`app corriendo en el puerto http://localhost:${app.get('port')} leoM             (o.o)`);
	console.log('                                                                  (|_|)*');
});
