const { masterExecute } = require('./../config/connection');

exports.transactionAmountModel  = function callTransferModel(req){
    return new promise(async (resolve, reject)=>{
        let checkUserAmount = `select * from userDeatil where accountId = ?`;
    });
}

//This method check the user accound and its balance
exports.checkUserAccountAndBalanceModel = function(req) {
    return new Promise(async (resolve, reject) => {
        try {
            let checkUserAmount = `select * 
            from user_info ui 
            inner join  user_account_type uat on ui.account_number = uat.account_number
            where UI.account_number = ? and uat.cust_balance > ? and uat.cust_account_type = ?`;
            let valueArray = [req.fromAccountNumber, req.amountTransfer, req.fromAccountType];
            let result = await masterExecute(query, valueArray);
            if(result && result.length)
                return resolve(result);
            reject("No record found or insufficient fund");
        } catch(error) {
            reject(error);
        }
    });
}