const ErrorHandler = require("../errors/ErrorHandler");

function apiKey(req,res,next){
    const api_key = '1234567';

    const userApiKey = req.query.api_key

    if(userApiKey && (userApiKey === api_key)){
        next()
    }else{

        next(ErrorHandler.forbidden('API key is not valid'))
        // res.json({
        //     message: 'Not Allowed'
        // })
    }


     // we must need to add a next() in the middleware otherwise the system will hang
}

module.exports = apiKey;