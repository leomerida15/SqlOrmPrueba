module.exports = (model) => {
	// usuarios at Roles_has_usuarios
	model.WN_usuarios.hasMany(model.Roles_has_usuarios, { foreignKey: 'id_usuario' });
	// products
	model.WN_productos.hasMany(model.Productos_has_subtipos_producto, { foreignKey: 'id_producto' });
	model.Cat_subtipo_productos.hasMany(model.Productos_has_subtipos_producto, { foreignKey: 'id_subtipo_producto' });
	model.Cat_subtipo_productos.hasMany(model.Tipos_producto_has_subtipos_producto, {
		foreignKey: 'id_subtipo_producto',
	});
	model.Cat_tipo_productos.hasMany(model.Tipos_producto_has_subtipos_producto, { foreignKey: 'id_tipo_producto' });
};
