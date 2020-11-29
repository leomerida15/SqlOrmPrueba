const produt = {
	products_get: require('./cat_produts/produts_get'),
	product_post: require('./cat_produts/produt_post'),
	product_put: require('./cat_produts/product_put'),
	product_delete: require('./cat_produts/product_delete'),
	// types
	types_get: require('./type/types_get'),
	type_post: require('./type/type_post'),
	type_put: require('./type/type_put'),
	type_delete: require('./type/type_delete'),
	// subtypes
	sub_Types_get: require('./subtype/subTypes_get'),
	sub_Type_post: require('./subtype/subType_post'),
	sub_Type_put: require('./subtype/subType_put'),
	sub_Type_delete: require('./subtype/subType_delete'),
	// types relation with sub
	type_sub_get: require('./relations/type_sub_get'),
	type_sub_get_type: require('./relations/type_sub_get_type'),
	type_sub_get_subType: require('./relations/type_sub_get_subType'),
	type_sub_get: require('./relations/type_sub_get'),
	type_sub_post: require('./relations/type_sub_post'),
	type_sub_delete: require('./relations/type_sub_delete'),
	// sub relation with products
	sub_products_get: require('./relations/pro_sub_get'),
	sub_products_get_pro: require('./relations/pro_sub_get_pro'),
	sub_products_get_sub: require('./relations/pro_sub_get_sub'),
	sub_product_post: require('./relations/pro_sub_post'),
	sub_product_delete: require('./relations/pro_sub_delete'),
};

module.exports = produt;
