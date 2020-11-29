const encript = require('../../configs/encript');
const error = require('../../middlewares/error/error');
const valid_data = require('../../middlewares/data/');
const token = require('../../configs/token');

const { WN_usuarios, Roles_has_usuarios } = require('../../db/');

const login = async (req, res) => {
	try {
		// validamos los datos
		const valid_body = await valid_data(req, 'socials');
		if (!valid_body) throw { message: `Su furmulario debe contener campos vacios o escasos`, code: 400 };

		// definimos los datos
		const { email, given_name, family_name } = req.body.profile;

		// validamos que el correo exista
		let valid_correo = await WN_usuarios.findAll({ where: { correo: email } });

		if (valid_correo.length !== 1) {
			const envio = {
				id_objeto: 1,
				nombres: given_name,
				apellidos: family_name,
				telefono: null,
				correo: email,
				usuario: given_name,
				password: null,
				fecha_nacimiento: null,
				fecha_creacion: null,
				sn_activo: true,
			};

			// guardamos en la DB
			await WN_usuarios.create(envio);
		}
		valid_correo = await WN_usuarios.findAll({ where: { correo: email } });
		const { id_usuario, nombres } = valid_correo[0].dataValues;

		// traemos que roles tiene el usuario
		const get_type = await Roles_has_usuarios.findAll({ where: { id_usuario } });

		// estructuramos la respuesta del campo de roles
		let roles = [];
		get_type.forEach((item) => {
			let id = item.dataValues.id_rol;
			let name = '';
			if (item.dataValues.id_rol === 1) name = 'turista';
			else if (item.dataValues.id_rol === 2) name = 'operador';
			else if (item.dataValues.id_rol === 3) name = 'admin';

			if (name != '') roles.push({ id, name });
		});

		// generamos el token
		const get_token = await token.generate(id_usuario, email, roles);

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
