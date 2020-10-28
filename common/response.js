exports.responseError  = function(req, res, error, data, code) {
    let responseObj = {
      statusCode: code ? code : 400,
      error: error || ["Error"],
    };
    responseObj['data'] = data || {};
    //res.status(500).send(responseObj);
    res.send(responseObj);
  };

  exports.sendWrongParamResponse =  function (req, res, message, data, key, code) {
    let responseObj = { statusCode: code ? code : 200, messages: message || ["Successful"] }
    key = key || 'data';
    //responseObj[key] = data;
    if (data && data != '') {
      responseObj['data'] = data;
    }
    res.send(responseObj);
  }  
  
 