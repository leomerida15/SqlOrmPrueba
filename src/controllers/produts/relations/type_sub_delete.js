const error = require('../../../middlewares/error/error');
const { Op } = require('sequelize');
const token = require('../../../configs/token');

const { Tipos_producto_has_subtipos_producto } = require('../../../db');

module.exports = async (req, res) => {
	try {
		const { access_token } = req.headers;

		// validamos el token
		const valid_token = await token.valid(access_token, ['admin', 'operador']);
		if (!valid_token) throw { message: 'Debe suministrar un Token valido', code: 400 };

		// validamos y definimos la data
		if (!req.params.id_type || !req.params.id_sub_type) throw { message: 'Suministre dos id', code: 400 };
		const { id_type, id_sub_type } = req.params;

		// respondemos
		const valid_data = await Tipos_producto_has_subtipos_producto.findAll({
			where: { [Op.and]: [{ id_subtipo_producto: id_sub_type }, { id_tipo_producto: id_type }] },
		});
		if (valid_data.length === 0) throw { message: 'Esa relacion no existe', code: 400 };

		await Tipos_producto_has_subtipos_producto.destroy({
			where: { [Op.and]: [{ id_subtipo_producto: id_sub_type }, { id_tipo_producto: id_type }] },
		});

		res.status(200).json({ message: 'Relacion tipo a subtipo eliminada', data: {} });
	} catch (err) {
		error(req, res, err);
	}
};
