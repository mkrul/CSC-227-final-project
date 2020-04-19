const express = require('express')

const EmailController = require('../controllers/email-controller')

const router = express.Router()

router.post('/email', EmailController.createEmail)

module.exports = router
