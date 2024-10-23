const error_404_not_found = (req,res,next)=>{
    console.log(`404 Not Found: The requested URL ${req.originalUrl} was not found.`)
    
    return res.status(404).json({
        seccess: false,
        message: `The request with method ${req.method} with path ${req.url} - Not found. `
    })
}
export default error_404_not_found