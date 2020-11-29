module.exports = (sequelize, type) => {
	const { INTEGER, STRING, BOOLEAN } = type;

	const wn_usuarios = sequelize.define(
		'wn_usuarios',
		{
			id_usuario: {
				type: INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			id_objeto: {
				type: INTEGER,
			},
			nombres: {
				type: STRING(80),
			},
			apellidos: {
				type: STRING(160),
			},
			correo: {
				type: STRING(45),
			},
			usuario: {
				type: STRING(45),
			},
			password: {
				type: STRING(260),
			},
			telefono: {
				type: STRING(45),
			},
			fecha_nacimiento: {
				type: STRING(45),
			},
			fecha_creacion: {
				type: STRING(45),
			},
			sn_activo: {
				type: BOOLEAN,
			},
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return wn_usuarios;
};
