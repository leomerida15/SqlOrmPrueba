module.exports = (sequelize, type) => {
	const { INTEGER, STRING, BOOLEAN } = type;

	const wn_roles_usuarios = sequelize.define(
		'wn_roles_usuarios',
		{
			id_rol: { type: INTEGER, primaryKey: true, autoIncrement: true },
			nombre: { type: STRING(45) },
			sn_activo: { type: BOOLEAN },
			readonly: { type: BOOLEAN },
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return wn_roles_usuarios;
};
