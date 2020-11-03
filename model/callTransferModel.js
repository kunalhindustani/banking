const { masterExecute } = require('./../config/connection');

////This method insert and update the amount in the db.
exports.transactionAmountModel  = function callTransferModel(req, currentAmount){
    return new promise(async (resolve, reject)=> {
        let insertQuery = `insert into user_account_transaction_detail (from_account_number,to_account_number,tran_amount,tran_status) values(?,?,?,?);`;
        let valueArray = [req.fromAccountNumber, req.amountTransfer, req.fromAccountType];
        let result = await masterExecute(insertQuery, valueArray);
        let updateAmount = parseFloat(currentAmount) - parseFloat(req.amountTransfer);
        let updateQuery = `update user_account_type set cust_balance = ? where account_number = ?;`
        let valueArray = [updateAmount,req.fromAccountNumber];
        let result = await masterExecute(updateQuery, valueArray);
    });
}

//This method check the user accound and its balance
exports.checkUserAccountAndBalanceModel = function(req) {
    return new Promise(async (resolve, reject) => {
        try {
            let checkUserAmount = `select * 
            from user_info ui 
            inner join  user_account_type uat on ui.account_number = uat.account_number
            where UI.account_number = ? and uat.cust_balance > ? and uat.cust_account_type = ?;
            update  set amount=`;
            let valueArray = [req.fromAccountNumber, req.amountTransfer, req.fromAccountType];
            masterExecute(query, valueArray, (result) => {
                if(result && result.length) {
                    let updateAmount = parseFloat(result[0].cust_balance)- parseFloat(req.amountTransfer);
                    let updateQuery = `update user_account_type set cust_balance = ? where account_number = ?;`
                    let updateValueArray = [updateAmount,req.fromAccountNumber];
                    let updateResult = await masterExecute(updateQuery, updateValueArray);
                    return resolve(updateResult);
                }
                reject("No record found or insufficient fund");                    
            }).catch((error)=>{
                reject(error);
            });
            
        } catch(error) {
            reject(error);
        }
    });
}