const moment = require('moment');
const { WN_usuarios, Roles_has_usuarios } = require('../../db/');
const encript = require('../../configs/encript');
const error = require('../../middlewares/error/error');
const valid_data = require('../../middlewares/data/');

const registro = async (req, res) => {
	try {
		// validamos los datos
		const valid_body = await valid_data(req, 'register');
		if (!valid_body) throw { message: `Su furmulario debe contener campos vacios o escasos`, code: 400 };

		// validamos que no exista el correo
		let valid_correo = await WN_usuarios.findAll({ where: { correo: req.body.correo } });
		if (valid_correo.length > 0) throw { message: 'Este correo ya se encuentra registrado', code: 400 };

		// encriptamos el password
		req.body.password = await encript.encryptPassword(req.body.password);

		// extraemos los datos a guardar y los re organizamos
		const { nombres, apellidos, telefono, correo, usuario, password, fecha_nacimiento } = req.body;
		const envio = {
			id_objeto: 1,
			nombres,
			apellidos,
			telefono,
			correo,
			usuario,
			password,
			fecha_nacimiento,
			fecha_creacion: moment().format('L'),
			sn_activo: true,
		};
		// guardamos en la DB
		await WN_usuarios.create(envio);

		// traemos el id_usuario y para crear su entrada en Roles_has_usuarios
		const get_id_usuario = await WN_usuarios.findAll({ where: { correo }, attributes: ['id_usuario'] });
		const { id_usuario } = get_id_usuario[0].dataValues;
		const id_rol = req.body.id_rol ? req.body.id_rol : 1;

		// guardamos en Roles_has_usuarios
		await Roles_has_usuarios.create({ id_rol, id_usuario });

		const resp = {
			id_usuario,
			id_objeto: 1,
			id_rol,
			nombres,
			apellidos,
			telefono,
			correo,
			usuario,
			fecha_nacimiento,
			fecha_creacion,
			sn_activo: true,
		};

		res.status(200).json({
			status: 200,
			message: 'OK',
			resp,
		});
	} catch (err) {
		error(req, res, err);
	}
};

module.exports = registro;
