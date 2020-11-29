module.exports = (sequelize, type) => {
	const { INTEGER, STRING } = type;

	const roles_has_usuarios = sequelize.define(
		'roles_has_usuarios',
		{
			id_rol: { type: INTEGER(2) },
			id_usuario: { type: INTEGER },
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return roles_has_usuarios;
};
