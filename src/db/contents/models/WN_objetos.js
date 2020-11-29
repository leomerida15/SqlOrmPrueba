module.exports = async (model) => {
	try {
		await model.WN_objetos.create({ id_objeto: 1, id_tipo_objeto: 1, sn_activo: true });
		await model.WN_objetos.create({ id_objeto: 2, id_tipo_objeto: 2, sn_activo: true });
		await model.WN_objetos.create({ id_objeto: 3, id_tipo_objeto: 5, sn_activo: true });
	} catch (err) {
		console.log(err);
	}
};
