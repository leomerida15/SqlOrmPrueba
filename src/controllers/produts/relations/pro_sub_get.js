const error = require('../../../middlewares/error/error');
const token = require('../../../configs/token');

const { Productos_has_subtipos_producto } = require('../../../db');

module.exports = async (req, res) => {
	try {
		const { access_token } = req.headers;

		// validamos el token
		const valid_token = await token.valid(access_token, ['admin', 'operador']);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		// respondemos
		const resps = await Productos_has_subtipos_producto.findAll();

		// respuesta
		const data = [];
		resps.forEach((resp) => data.push(resp.dataValues));
		Promise.all(data);

		res.status(200).json({ message: 'Relacion productos a subtipo', data });
	} catch (err) {
		error(req, res, err);
	}
};
