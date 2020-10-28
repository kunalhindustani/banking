const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
let masterPool;
function handleMasterDisconnect() {
    masterPool = mysql.createPool({
    	connectionLimit : process.env.POOL_CONNECTION_COUNT,
        host     : process.env.HOST,
        user     : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATABASE,
        supportBigNumbers : true,
        bigNumberStrings : true,
		dateStrings : true
    });
	masterPool.on('enqueue', function(){console.log('handleMasterDisconnect conn queued')});
	masterPool.on('dequeue', function(){console.log('handleMasterDisconnect conn dequeued')});
}


exports.masterExecute = function(statement, parameters){
	return new Promise(function(resolve, reject) {
        masterPool.query(statement, parameters,function(err,rows){
        	console.log(this.sql);
        	if(err) {
        		console.error(err);
        		return reject(err);
        	}
        	return resolve(rows);
        });
	});		
}

handleMasterDisconnect();