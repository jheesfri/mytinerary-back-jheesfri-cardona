const error_500 = (error, req, res, next) => {
console.log(error);

    return res.status(500).json({
        seccess: false,
        response: error,
        message: 'Error in the server'
    })
}

export default error_500