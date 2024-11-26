import User from "../models/User.js"

export default async (req, res, next) => {
    try {

        const account = await User.findOne({ email: req.body.email })

        if (account) {
            req.user = {
                email: account.email,
                password: account.password,
                role: account.role,
                photo: account.photo,
            }
            return next()
            
        }
        return res.status(400).json({
            success: false,
            messages: 'user not Exists'
        })
    } catch (error) {
        next(error)
    }
}