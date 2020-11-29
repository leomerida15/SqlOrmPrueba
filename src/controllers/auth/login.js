const encript = require('../../configs/encript');
const error = require('../../middlewares/error/error');
const valid_data = require('../../middlewares/data/');
const token = require('../../configs/token');

const { WN_usuarios, Roles_has_usuarios } = require('../../db/');

const login = async (req, res) => {
	try {
		// validamos los datos
		const valid_body = await valid_data(req, 'login');
		if (!valid_body) throw { message: `Su furmulario debe contener campos vacios o escasos`, code: 400 };

		// definimos los datos
		const { password, correo } = req.body;

		// validamos que el correo exista
		const valid_correo = await WN_usuarios.findOne({ where: { correo: correo } });
		if (!valid_correo) throw { message: 'Este correo No se encuentra registrado', code: 400 };
		//
		const { id_usuario, nombres } = valid_correo.dataValues;

		// validamos comparamos passwords
		const valid_password = await encript.matchPassword(password, valid_correo.dataValues.password);

		// traemos que roles tiene el usuario
		const get_type = await Roles_has_usuarios.findAll({ where: { id_usuario } });

		// estructuramos la respuesta del campo de roles
		let roles = [];
		get_type.forEach((item) => {
			let id = item.dataValues.id_rol;

			let name = '';
			if (item.dataValues.id_rol === 1) name = 'admin';
			else if (item.dataValues.id_rol === 2) name = 'operador';
			else if (item.dataValues.id_rol === 3) name = 'turista';

			if (name != '') roles.push({ id, name });
		});

		// generamos el token
		const get_token = valid_password ? await token.generate(id_usuario, correo, roles) : false;
		if (!get_token) throw { message: 'Su password no coincide', code: 400 };

		// resp
		res.status(200).json({
			status: 200,
			message: 'OK',
			data: { access_token: get_token, user: { name: nombres, roles } },
		});
	} catch (err) {
		error(req, res, err);
	}
};

module.exports = login;
