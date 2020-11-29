const error = require('../../../middlewares/error/error');
const token = require('../../../configs/token');

const {
	Cat_tipo_productos,
	Cat_subtipo_productos,
	WN_productos,
	Productos_has_subtipos_producto,
	Tipos_producto_has_subtipos_producto,
} = require('../../../db');

module.exports = async (req, res) => {
	console.clear();
	try {
		const { access_token } = req.headers;

		// validamos el token
		const valid_token = await token.valid(access_token, ['admin', 'operador']);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		const resps = await WN_productos.findAll();

		// respuesta
		const data = [];
		if (!data.length) {
			resps.forEach((resp) => data.push(resp.dataValues));
			Promise.all(data);
		}

		res.status(200).json({ message: 'Data de productos', data });
	} catch (err) {
		error(req, res, err);
	}
};
