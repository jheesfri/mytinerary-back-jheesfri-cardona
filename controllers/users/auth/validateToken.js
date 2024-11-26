import jwt from 'jsonwebtoken'
import User from '../../../models/User.js'

const validateToken = async (req, res)=> {
    try {
        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(403).json({
                success: false,
                message: 'No token provided'
            });
        }

        jwt.verify(token, process.env.SECRET, async (err, decoded) => {
            if(err){
                return res.status(401).json({
                    success: false, 
                    messages: 'Invalid token'
                })
            }

            const user = await User.findById(decoded._id)

            if(!user){
                return res.status(404).json({
                    success: false, 
                    messages: 'User not found'
                })
            }

            return res.status(200).json({
                success: true, 
                message: 'Token valid',
                user: user
            })
        })
    } catch (error) {
        next (error)
    }
}
 
export default validateToken