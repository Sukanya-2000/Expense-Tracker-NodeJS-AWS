const express = require('express')

const expenseController = require('../controllers/expense')
const userauthentication = require('../middleware/auth')

const router = express.Router()

router.get('/index', expenseController.indexPage)
router.post('/addexpense',userauthentication.authenticate, expenseController.addexpense)
router.get('/getexpenses',userauthentication.authenticate,expenseController.getexpenses)
router.delete('/deleteexpense/:expenseid',userauthentication.authenticate,expenseController.deleteExpense)
router.get('/download', userauthentication.authenticate,expenseController.downloadExpenses)

module.exports = router