const express = require('express')

const userController = require('../controllers/user')
const authenticationmiddleware = require('../middleware/auth')
const expenseController = require('../controllers/expense')



const router = express.Router()
router.get('/',userController.signupPage)
router.post('/signup', userController.signup)
router.get('/login',userController.loginPage)
router.post('/login',userController.login)


module.exports = router;