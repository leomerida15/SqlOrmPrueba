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
		if (!req.params.nombre) throw { message: 'Suministre un nombre', code: 400 };
		const { nombre } = req.params;

		// validando nombre
		const valid_name = await Cat_tipo_productos.findAll({ where: { nombre } });
		if (valid_name.length > 0) throw { message: 'Ese tipo de producto ya exite', code: 400 };

		// guardamos
		const data = await Cat_tipo_productos.create({ nombre, sn_activo: true });

		res.status(200).json({ message: 'Tipo de producto Editado', data: data.dataValues });
	} catch (err) {
		error(req, res, err);
	}
};
