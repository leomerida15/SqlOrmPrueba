const router = require('express').Router();
const root = '/produt';

// controlls
const { products_get, product_post, product_put, product_delete } = require('../controllers/produts/');

const { types_get, type_post, type_put, type_delete } = require('../controllers/produts/');

const { sub_Types_get, sub_Type_post, sub_Type_put, sub_Type_delete } = require('../controllers/produts/');

const { type_sub_get, type_sub_get_type, type_sub_get_subType, type_sub_post, type_sub_delete } = require('../controllers/produts/');

const { sub_products_get, sub_product_post, sub_product_delete, sub_products_get_pro, sub_products_get_sub } = require('../controllers/produts/');

// produts

router.route(`${root}s/`).get(products_get);
router.route(`${root}/:nombre`).post(product_post);
router.route(`${root}/:id/:sn_activo/:nombre`).put(product_put);
router.route(`${root}/:id`).delete(product_delete);

// type of product
// multiple
router.route(`${root}s/types`).get(types_get);
// singel
router.route(`${root}/type/:id/:sn_activo/:nombre`).put(type_put);
router.route(`${root}/type/:id`).delete(type_delete);
router.route(`${root}/type/:nombre`).post(type_post);

// relation
// type and subtype
router.route(`${root}/relation/type_sub`).get(type_sub_get);
router.route(`${root}/relation/type_sub/for_tipe/:id`).get(type_sub_get_type);
router.route(`${root}/relation/type_sub/for_subType/:id`).get(type_sub_get_subType);
router.route(`${root}/relation/type_sub/:id_type/:id_sub_type`).post(type_sub_post).delete(type_sub_delete);

// subtype and product
router.route(`${root}/relation/sub_product`).get(sub_products_get);
router.route(`${root}/relation/sub_product/for_pro/:id`).get(sub_products_get_pro);
router.route(`${root}/relation/sub_product/for_subType/:id`).get(sub_products_get_sub);
router.route(`${root}/relation/sub_product/:id_product/:id_sub_type`).post(sub_product_post).delete(sub_product_delete);

// subtype products
// multiple
router.route(`${root}s/sub_types`).get(sub_Types_get);
// silgel
router.route(`${root}/sub_type/:id/:sn_activo/:nombre`).put(sub_Type_put);
router.route(`${root}/sub_type/:id`).delete(sub_Type_delete);
router.route(`${root}/sub_type/:nombre`).post(sub_Type_post);

module.exports = router;
