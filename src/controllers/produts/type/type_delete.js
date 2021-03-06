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
		const { id } = req.params;

		// validando nombre
		const valid_id = await Cat_tipo_productos.findAll({ where: { id_tipo_producto: id } });
		if (valid_id.length === 0) throw { message: 'Ese tipo de producto No exite, indique un ID existente', code: 400 };

		// editamos
		await Cat_tipo_productos.destroy({ where: { id_tipo_producto: id } });

		res.status(200).json({ message: 'Tipo de producto eliminado', data: {} });
	} catch (err) {
		error(req, res, err);
	}
};
