const { commonCheck} = require('./../common/common');
const { responseSuccess, responseError, sendWrongParamResponse } = require('./../common/response');
const { transactionAmountModel, checkUserAccountAndBalanceModel } = require('./../model/callTransferModel');

//This method call the check the user data is valid or not and insert 
exports.callTransferAmount = async function (req, res) {
    try {
        console.log("call transfer function is ",commonCheck);
        let reqData = ["userName","fromAccountNumber","amountTransfer","toAccountNumber","fromAccountType"];
        let validationResult = await commonCheck(req, reqData, 'body');
        if (validationResult) {
            return sendWrongParamResponse(req, res, validationResult, null, null, 400);
        }
        let userAccountResult = await checkUserAccountAndBalanceModel(req.body);
        let transactionResult = await transactionAmountModel(req.body, userAccountResult);
        //let transactionResult = await callTransferModel(req);
    } catch(error) {
        console.log("the error is ", error);
        responseError (req, res, error, null, "400");
    }
}