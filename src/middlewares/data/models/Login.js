module.exports = [
	{ key: 'correo', valid: (item) => (item.indexOf('@') != -1 && item.lastIndexOf('.com') != -1 ? true : false) },
	{key: 'password',},
];
