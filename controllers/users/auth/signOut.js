import User from "../../../models/User.js"

export const signOut = async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: false },
        )

        return res.status(200).json({
            success: true,
            massages: 'Disconnected'
        })
    } catch (error) {
        next ( error )
    }
}