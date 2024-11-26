import User from "../../models/User.js";

export const deletUser = async (req, res, next) => {
    try {
        const { _id } = req.body;
        if (!_id) {
            return res.status(400).json({
                message: "User ID is required",
            });
        }
        const user = await User.findByIdAndDelete(_id);
        return res.status(200).json({
            seccess: true,
            message: "User deleted with success",
            response: user,
        });
    } catch (error) {
        next(error);
    }
};