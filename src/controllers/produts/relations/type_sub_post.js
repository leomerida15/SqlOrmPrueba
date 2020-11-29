const { Op } = require('sequelize');

const error = require('../../../middlewares/error/error');
const token = require('../../../configs/token');

const { Tipos_producto_has_subtipos_producto, Cat_tipo_productos, Cat_subtipo_productos } = require('../../../db');

module.exports = async (req, res) => {
	try {
		const { access_token } = req.headers;

		// validamos el token
		const valid_token = await token.valid(access_token, ['admin', 'operador']);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		// validamos y definimos la data
		if (!req.params.id_type || !req.params.id_sub_type) throw { message: 'Suministre dos id', code: 400 };
		const { id_type, id_sub_type } = req.params;

		// validamos ids
		const valid_data = await Tipos_producto_has_subtipos_producto.findAll({
			where: { [Op.and]: [{ id_subtipo_producto: id_sub_type }, { id_tipo_producto: id_type }] },
		});
		if (valid_data.length > 0) throw { message: 'Esa relacion ya existe', code: 400 };

		const valid_id_type = await Cat_tipo_productos.findAll({ where: { id_tipo_producto: id_type } });
		const valid_sub_type = await Cat_subtipo_productos.findAll({ where: { id_subtipo_producto: id_sub_type } });

		console.log(valid_id_type.length);
		console.log(valid_sub_type.length);

		if (valid_id_type.length != 1 || valid_sub_type.length != 1) {
			throw { message: 'Uno de los IDs no existe', code: 400 };
		}

		// query
		const data = await Tipos_producto_has_subtipos_producto.create({
			id_subtipo_producto: id_sub_type,
			id_tipo_producto: id_type,
		});

		res.status(200).json({ message: 'Relacion tipo subtipo', data: data.dataValues });
	} catch (err) {
		error(req, res, err);
	}
};
