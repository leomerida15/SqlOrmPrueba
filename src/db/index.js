const { Sequelize, DataTypes } = require('sequelize');

const init_models = require('./models/');
const keys = require('./keys/');
const pre_into = require('./contents');

// conet with database
const local = () => new Sequelize('codego', 'postgres', '123456', { host: 'localhost', dialect: 'postgres' });
const web = () => new Sequelize('codego', 'postgres', '123456', { host: 'localhost', dialect: 'postgres' });

const sequelize = local();

// inits
const model = init_models(sequelize, DataTypes);

keys(model);

sequelize.sync({ force: true }).then((resp) => {
	if (resp) console.log('Init DB SUCCESS');
	else console.log('Init DB err');

	pre_into(model);
});

module.exports = model;
