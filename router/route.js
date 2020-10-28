const express = require('express');
const router = express.Router();
const path = require('path');
const { callTransferAmount } = require('./../controller/addPayment')
console.log("jjjjjjjjjjjjjjjjjj ", callTransferAmount);


router.post('/transferAmountToUser', callTransferAmount);

module.exports = router;