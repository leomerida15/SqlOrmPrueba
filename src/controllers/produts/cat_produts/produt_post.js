const error = require('../../../middlewares/error/error');
const token = require('../../../configs/token');

const { WN_productos, WN_objetos } = require('../../../db');

module.exports = async (req, res) => {
	try {
		const { access_token } = req.headers;
		// validamos el token
		const valid_token = await token.valid(access_token, ['admin', 'operador']);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		// definimos data
		if (!req.params.nombre) throw { message: 'Campo nombre vacio', code: 400 };
		const { nombre } = req.params;

		// consultamos si existen dichos campos
		let valid_produt = await WN_productos.findAll({ where: { nombre } });

		// guardamos los valores
		if (valid_produt.length > 0) throw { message: 'Este producto ya existe', code: 400 };

		// query
		const resp = await WN_objetos.create({ id_tipo_objeto: 5, sn_activo: true });
		const { id_objeto } = resp.dataValues;

		const data = await WN_productos.create({ nombre, id_objeto, sn_activo: true });

		res.status(200).json({ message: 'Data de productos', data: data.dataValues });
	} catch (err) {
		error(req, res, err);
	}
};
