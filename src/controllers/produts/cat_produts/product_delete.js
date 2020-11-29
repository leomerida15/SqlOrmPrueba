const error = require('../../../middlewares/error/error');
const valid_data = require('../../../middlewares/data');
const token = require('../../../configs/token');

const { WN_productos } = require('../../../db');

module.exports = async (req, res) => {
	try {
		const { access_token } = req.headers;
		// validamos el token
		const valid_token = await token.valid(access_token, ['admin', 'operador']);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		// validamos el id
		if (!req.params.id) throw { message: 'Suministre un ID', code: 400 };
		const { id } = req.params;

		valid_id = await WN_productos.findAll({ where: { id_producto: id } });
		if (valid_id.length !== 1) throw { message: 'Suministre un ID valido', code: 400 };

		await WN_productos.destroy({ where: { id_producto: id } });

		res.status(200).json({ message: 'ok', data: {} });
	} catch (err) {
		error(req, res, err);
	}
};
