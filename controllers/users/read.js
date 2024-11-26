import User from "../../models/User.js";

export const allUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find();
        return res.status(200).json({
            success: true,
            message: "All users",
            response: allUsers,
        });
    } catch (error) {
        next(error);
    }
}

export const userById = async (req, res, next) => {
    try {
        const { _id } = req.body;
        if (!_id) {
            return res.status(400).json({
                message: "User ID is required",
            });
        }
        const user = await User.findById(_id);
        return res.status(200).json({
            seccess: true,
            response: user,
            message: `User ${user.name} found`,
        });
    } catch (error) {
        next(error);
    }
}