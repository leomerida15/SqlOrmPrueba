module.exports = async (model) => {
	try {
		await model.Cat_tipo_objetos.create({ id_tipo_objeto: 1, nombre: 'usuario', sn_activo: true });
		await model.Cat_tipo_objetos.create({ id_tipo_objeto: 2, nombre: 'comentarios', sn_activo: true });
		await model.Cat_tipo_objetos.create({ id_tipo_objeto: 3, nombre: 'destinos', sn_activo: true });
		await model.Cat_tipo_objetos.create({ id_tipo_objeto: 4, nombre: 'excursiones', sn_activo: true });
		await model.Cat_tipo_objetos.create({ id_tipo_objeto: 5, nombre: 'producto', sn_activo: true });
	} catch (err) {
		console.log(err);
	}
};
