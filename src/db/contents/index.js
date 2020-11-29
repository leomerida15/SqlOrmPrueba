const WN_roles_usuarios = require('./models/WN_roles_usuarios');
const WN_objetos = require('./models/WN_objetos');
const WN_usuarios = require('./models/WN_usuarios');
const Roles_has_usuarios = require('./models/Roles_has_usuarios');
const Cat_tipo_objetos = require('./models/Cat_tipo_objetos');

const init = async (model) => {
	try {
		await WN_roles_usuarios(model);
		await Cat_tipo_objetos(model);
		await WN_objetos(model);
		await WN_usuarios(model);
		await Roles_has_usuarios(model);
	} catch (err) {
		console.log(err);
	}
};

module.exports = init;
