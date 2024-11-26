import User from "../../../models/User.js"

export const signIn = async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true },
        )

        return res.status(200).json({
            success: true,
            massage: 'Sign In',
            user: {
                email: req.user.email,
                role: req.user.role,
                photo: req.user.photo
            },
            token: req.body.token
        })
    } catch (error) {
        next ( error )
    }
}