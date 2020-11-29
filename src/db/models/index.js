const WN_Usuarios_Model = require('./wn_usuarios');
const Roles_has_usuarios_Model = require('./roles_has_usuarios');
const WN_roles_usuarios = require('./wn_roles_usuarios');
// objets
const WN_objetos = require('./objets/wn_objetos');
const Cat_tipo_objetos = require('./objets/cat_tipo_objetos');
// Produts
const WN_productos = require('./produts/wn_productos');
const Productos_has_subtipos_producto = require('./produts/productos_has_subtipos_producto');
const Tipos_producto_has_subtipos_producto = require('./produts/tipos_producto_has_subtipos_producto');
const Cat_subtipo_productos = require('./produts/cat_subtipo_productos');
const Cat_tipo_productos = require('./produts/cat_tipo_productos');

module.exports = (Sequelize, DataTypes) => {
	return {
		WN_usuarios: WN_Usuarios_Model(Sequelize, DataTypes),
		Roles_has_usuarios: Roles_has_usuarios_Model(Sequelize, DataTypes),
		WN_roles_usuarios: WN_roles_usuarios(Sequelize, DataTypes),
		// Objet
		WN_objetos: WN_objetos(Sequelize, DataTypes),
		Cat_tipo_objetos: Cat_tipo_objetos(Sequelize, DataTypes),
		// products
		WN_productos: WN_productos(Sequelize, DataTypes),
		Productos_has_subtipos_producto: Productos_has_subtipos_producto(Sequelize, DataTypes),
		Cat_subtipo_productos: Cat_subtipo_productos(Sequelize, DataTypes),
		Tipos_producto_has_subtipos_producto: Tipos_producto_has_subtipos_producto(Sequelize, DataTypes),
		Cat_tipo_productos: Cat_tipo_productos(Sequelize, DataTypes),
	};
};
