import 'dotenv/config.js'

const port = (req, res, next)=>{
    if (process.env.PORT != 8080) {
        return res.status(502).json({
            seccess: false,
            messagge: "Error - port is not going "+ process.env.PORT
        })
    }
    console.log('puerto correcto');
    
    next()
}

export default port