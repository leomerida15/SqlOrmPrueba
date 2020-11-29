const jwt = require('jsonwebtoken');
const key = require('../configs/key');

const token = {};

token.generate = async (id, correo, roles) => {
	return jwt.sign({ id, correo, roles }, key);
};

token.valid = async (item, roles) => {
	if (!item) return false;
	if (!roles) roles = ['admin', 'operador', 'turista'];

	const decode = jwt.verify(item, key);

	const valid_rol = decode.roles.filter((rol) => roles.indexOf(rol.name) !== -1);

	Promise.all(valid_rol);

	return !decode.correo && valid_rol.length > 0 ? false : decode.id;
};

module.exports = token;
