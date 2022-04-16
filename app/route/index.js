const express = require('express')
const router = express.Router()
const loginRoute = require('../controller/loginController')
const validLogin = require('../middleware/loginMiddleware')



router.get('/', (req, res) => {
    res.json({ message: 'Hello world this is My Mini Project from dibimbing.id' })
})

router.post('/login',
    validLogin.validationLogin,
    loginRoute.login)

module.exports = router
