const error = require('../../../middlewares/error/error');
const token = require('../../../configs/token');

const { Tipos_producto_has_subtipos_producto } = require('../../../db');

module.exports = async (req, res) => {
	try {
		const { access_token } = req.headers;

		// validamos el token
		const valid_token = await token.valid(access_token, ['admin', 'operador']);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		// respondemos
		const resps = await Tipos_producto_has_subtipos_producto.findAll();

		// respuesta
		const data = [];
		if (!data.length) {
			resps.forEach((resp) => data.push(resp.dataValues));
			Promise.all(data);
		}

		res.status(200).json({ message: 'Relacion tipo a subtipo', data });
	} catch (err) {
		error(req, res, err);
	}
};
