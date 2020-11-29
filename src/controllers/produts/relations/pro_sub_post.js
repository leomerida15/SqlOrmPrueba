const { Op } = require('sequelize');

const error = require('../../../middlewares/error/error');
const token = require('../../../configs/token');

const { Productos_has_subtipos_producto, WN_productos, Cat_subtipo_productos } = require('../../../db');

module.exports = async (req, res) => {
	try {
		const { access_token } = req.headers;

		// validamos el token
		const valid_token = await token.valid(access_token, ['admin', 'operador']);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		// validamos y definimos la data
		if (!req.params.id_product || !req.params.id_sub_type) throw { message: 'Suministre dos id', code: 400 };
		const { id_product, id_sub_type } = req.params;

		// validamos ids
		const valid_data = await Productos_has_subtipos_producto.findAll({
			where: { [Op.and]: [{ id_subtipo_producto: id_sub_type }, { id_producto: id_product }] },
		});
		if (valid_data.length > 1) throw { message: 'Esa relacion ya existe', code: 400 };

		const valid_product = await WN_productos.findAll({ where: { id_producto: id_product } });
		const valid_sub_type = await Cat_subtipo_productos.findAll({ where: { id_subtipo_producto: id_sub_type } });

		if (valid_product.length != 1 || valid_sub_type.length != 1) {
			throw { message: 'Uno de los IDs no existe', code: 400 };
		}

		// query
		const data = await Productos_has_subtipos_producto.create({
			id_subtipo_producto: id_sub_type,
			id_producto: id_product,
		});

		res.status(200).json({ message: 'Tipos de productos', data: data.dataValues });
	} catch (err) {
		error(req, res, err);
	}
};
