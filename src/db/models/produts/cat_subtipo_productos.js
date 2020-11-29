module.exports = (sequelize, type) => {
	const { BOOLEAN, STRING, INTEGER } = type;

	const cat_subtipo_productos = sequelize.define(
		'cat_subtipo_productos',
		{
			id_subtipo_producto: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			nombre: { type: STRING(100) },
			sn_activo: { type: BOOLEAN },
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return cat_subtipo_productos;
};
