module.exports = async (model) => {
	try {
		await model.WN_roles_usuarios.create({ nombre: 'admin', sn_activo: true, readonly: true });

		await model.WN_roles_usuarios.create({ nombre: 'turista', sn_activo: true, readonly: true });

		await model.WN_roles_usuarios.create({ nombre: 'operador', sn_activo: true, readonly: true });
	} catch (err) {
		console.log(err);
	}
};
