const auth_routes = require('./auth.routes');
const dash_routes = require('./dash.routes');
const products_rotes = require('./produts.routes');
// Add routes
module.exports = (app) => {
	app.use(auth_routes);
	app.use(dash_routes);
	app.use(products_rotes);
};
