const express = require('express');
const router = express.Router();
const path = require('path');
const { callTransferAmount } = require('./../controller/addPayment')

//todo valdiate the user
router.post('/transferAmountToUser', callTransferAmount);

module.exports = router;