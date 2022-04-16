const express = require('express')
const router = express.Router()
const merchantRoute = require('../controller/merchantController')
const authMiddleware = require('../middleware/authMiddleware')
const validMerchant = require('../middleware/merchantMiddleware')

// merchant
router.post('/register',
    validMerchant.validationMerchant,
    merchantRoute.insertMerchant)
router.delete('/merchant/delete/:id',
    authMiddleware.isAuthenticate,
    merchantRoute.deleteMerchant)
router.delete('/merchant/softDelete/:id',
    authMiddleware.isAuthenticate,
    merchantRoute.softDeleteMerchant)

module.exports = router