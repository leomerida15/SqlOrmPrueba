const encript = require('../../../configs/encript');
module.exports = async (model) => {
	try {
		await model.WN_usuarios.create({
			password: await encript.encryptPassword(await encript.encryptPassword('12345678')),
			nombres: 'nombres',
			apellidos: 'apellidos',
			telefono: '000000',
			correo: 'admin@admin.com',
			usuario: 'usuario',
			fecha_nacimiento: 'fecha_nacimiento',
			fecha_creacion: 'fecha_creacion',
		});
		await model.WN_usuarios.create({
			password: await encript.encryptPassword(await encript.encryptPassword('12345678')),
			nombres: 'nombres',
			apellidos: 'apellidos',
			telefono: '000000',
			correo: 'client@client.com',
			usuario: 'usuario',
			fecha_nacimiento: 'fecha_nacimiento',
			fecha_creacion: 'fecha_creacion',
		});
		await model.WN_usuarios.create({
			password: await encript.encryptPassword(await encript.encryptPassword('12345678')),
			nombres: 'nombres',
			apellidos: 'apellidos',
			telefono: '000000',
			correo: 'agente@agente.com',
			usuario: 'usuario',
			fecha_nacimiento: 'fecha_nacimiento',
			fecha_creacion: 'fecha_creacion',
		});
	} catch (err) {
		console.log(err);
	}
};
