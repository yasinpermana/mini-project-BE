const express = require('express');
const router = express.Router();
const productRoute = require('../controller/productController');
const authMiddleware = require('../middleware/authMiddleware');
const validProduct = require('../middleware/productMiddleware');

router.post('/product', authMiddleware.isAuthenticate, validProduct.validationProduct, productRoute.insertProduct);
router.get('/product/:username', authMiddleware.isAuthenticate, productRoute.listProduct);
router.delete('/product/delete/:id', authMiddleware.isAuthenticate, productRoute.deleteProduct);
router.delete('/product/softDelete/:id', authMiddleware.isAuthenticate, productRoute.softDeleteProduct);
router.put('/product/:id', validProduct.validationProduct, authMiddleware.isAuthenticate, productRoute.updateProduct);

module.exports = router;
