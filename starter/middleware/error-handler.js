const {CustomeAPIError, CustomAPIError} = require('../errors/custom-error')
const errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    console.log(err)
    return res.status(err.status).json({msg: 'Something went wrong, please try again later'})
    //msg: Something went wrong, try again later
}

module.exports = errorHandlerMiddleware