module.exports = (sequelize, type) => {
	const { INTEGER, STRING } = type;

	const tipos_producto_has_subtipos_producto = sequelize.define(
		'tipos_producto_has_subtipos_producto',
		{
			id_subtipo_producto: { type: INTEGER(11) },
			id_tipo_producto: { type: INTEGER(11) },
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return tipos_producto_has_subtipos_producto;
};
