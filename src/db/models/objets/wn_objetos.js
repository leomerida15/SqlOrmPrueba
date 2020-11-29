module.exports = (sequelize, type) => {
	const { INTEGER, BOOLEAN } = type;

	const wn_objetos = sequelize.define(
		'wn_objetos',
		{
			id_objeto: { type: INTEGER(2), primaryKey: true, autoIncrement: true },
			id_tipo_objeto: { type: INTEGER(2) },
			sn_activo: { type: BOOLEAN },
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return wn_objetos;
};
