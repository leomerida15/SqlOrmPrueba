module.exports = (sequelize, type) => {
	const { INTEGER, STRING, BOOLEAN } = type;

	const cat_tipo_productos = sequelize.define(
		'cat_tipo_productos',
		{
			id_tipo_producto: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			nombre: { type: STRING(100) },
			sn_activo: { type: BOOLEAN },
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return cat_tipo_productos;
};
