const error = require('../../../middlewares/error/error');
const token = require('../../../configs/token');

const { Cat_tipo_productos } = require('../../../db');

module.exports = async (req, res) => {
	try {
		const { access_token } = req.headers;

		// validamos el token
		const valid_token = await token.valid(access_token, ['admin', 'operador']);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		// validamos y definimos la data
		if (!req.params.id) throw { message: 'debe suministrar un ID', code: 400 };
		const { nombre, id, sn_activo } = req.params;

		// validando datos
		const valid_data = await Cat_tipo_productos.findAll({ where: { nombre } });
		const valid_nombre = valid_data.length === 0 ? true : false;
		const valid_sn_activo = sn_activo != 1 || 0 ? true : false;
		// editamos

		if (!valid_nombre && !valid_sn_activo) throw { message: 'Introduso todos los campos de forma errada', code: 400 };

		if (nombre && valid_nombre) {
			await Cat_tipo_productos.update(
				{ nombre: nombre },
				{
					where: { id_tipo_producto: id },
				}
			);
		}
		if (sn_activo && valid_sn_activo) {
			await Cat_tipo_productos.update(
				{ sn_activo },
				{
					where: { id_tipo_producto: id },
				}
			);
		}

		// respondemos
		const resps = await Cat_tipo_productos.findAll({ where: { id_tipo_producto: id } });

		// respuesta
		const data = [];
		if (!data.length) {
			resps.forEach((resp) => data.push(resp.dataValues));
			Promise.all(data);
		}

		res.status(200).json({ message: 'Tipo de producto creado', data });
	} catch (err) {
		error(req, res, err);
	}
};
