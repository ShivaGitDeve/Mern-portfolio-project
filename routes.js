const express = require('express');
const {mailController} = require('../controllers/control')

const router = express.Router();

router.post('/sendMail', mailController)

module.exports = router