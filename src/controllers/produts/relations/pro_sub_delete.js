const { Op } = require('sequelize');

const error = require('../../../middlewares/error/error');
const token = require('../../../configs/token');

const { Productos_has_subtipos_producto } = require('../../../db');

module.exports = async (req, res) => {
	try {
		const { access_token } = req.headers;

		// validamos el token
		const valid_token = await token.valid(access_token, ['admin', 'operador']);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		// validamos y definimos la data
		if (!req.params.id_product || !req.params.id_sub_type) throw { message: 'Suministre dos id', code: 400 };
		const { id_product, id_sub_type } = req.params;

		// respondemos
		const valid_data = await Productos_has_subtipos_producto.findAll({
			where: { [Op.and]: [{ id_subtipo_producto: id_sub_type }, { id_producto: id_product }] },
		});
		if (valid_data.length === 0) throw { message: 'Esa relacion no existe', code: 400 };

		await Productos_has_subtipos_producto.destroy({
			where: { [Op.and]: [{ id_subtipo_producto: id_sub_type }, { id_producto: id_product }] },
		});

		res.status(200).json({ message: 'Relacion eliminada', data: {} });
	} catch (err) {
		error(req, res, err);
	}
};
