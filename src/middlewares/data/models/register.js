module.exports = [
	{ key: 'password' },
	{ key: 'nombres' },
	{ key: 'apellidos' },
	{ key: 'telefono' },
	{ key: 'correo', valid: (item) => (item.indexOf('@') != -1 && item.lastIndexOf('.com') != -1 ? true : false) },
	{ key: 'usuario' },
	{ key: 'fecha_nacimiento' },
	{ key: 'fecha_creacion' },
];
