import User from "../../models/User.js";

export const updateUser = async (req, res, next) => {
    try {
        const user = req.body
        const updateUser = await User.findOneAndUpdate(
            { _id: user._id },
            user,
            { new: true },
            { runValidators: true }
        )
        return res.status(200).json({
            seccess: true,
            message: 'User updated with success',
            response: updateUser
        })
    } catch (error) {
        next(error)
    }
}