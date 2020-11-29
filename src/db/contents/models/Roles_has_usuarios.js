module.exports = async (model) => {
	try {
		await model.Roles_has_usuarios.create({ id_rol: 1, id_usuario: 1 });
		await model.Roles_has_usuarios.create({ id_rol: 2, id_usuario: 2 });
		await model.Roles_has_usuarios.create({ id_rol: 3, id_usuario: 3 });
	} catch (err) {
		console.log(err);
	}
};
