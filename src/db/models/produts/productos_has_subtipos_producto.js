module.exports = (sequelize, type) => {
	const { INTEGER, STRING } = type;

	const productos_has_subtipos_producto = sequelize.define(
		'productos_has_subtipos_producto',
		{
			id_producto: { type: INTEGER(11) },
			id_subtipo_producto: { type: INTEGER(11) },
		},
		{
			freezeTableName: true,
			timestamps: false,
			primaryKey: false,
		}
	);

	return productos_has_subtipos_producto;
};
