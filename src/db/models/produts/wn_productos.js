module.exports = (sequelize, type) => {
	const { INTEGER, STRING, BOOLEAN } = type;

	const wn_productos = sequelize.define(
		'wn_productos',
		{
			id_producto: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
			id_objeto: { type: INTEGER(11) },
			nombre: { type: STRING(100) },
			sn_activo: { type: BOOLEAN },
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return wn_productos;
};
