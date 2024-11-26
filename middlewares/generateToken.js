import jwt from 'jsonwebtoken'

export default (req, res, next )=> {

    const token = jwt.sign(
        {email: req.user.email},
        process.env.SECRET,
        {expiresIn: 60*60*24}
    )
    req.body.token = token
    
    return next ()
    
}