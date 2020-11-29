module.exports = (sequelize, type) => {
	const { BOOLEAN, STRING, INTEGER } = type;

	const cat_tipo_objetos = sequelize.define(
		'cat_tipo_objetos',
		{
			id_tipo_objeto: { type: INTEGER(11), primaryKey: true },
			nombre: { type: STRING(100) },
			sn_activo: { type: BOOLEAN },
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return cat_tipo_objetos;
};
