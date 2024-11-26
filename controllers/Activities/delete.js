import Activity from "../../models/Activity.js"

export const deleteActivity = async (req, res, next) => {
    try {
        const { _id } = req.body

        const activity = await Activity.findByIdAndDelete(_id)

        if (!activity) {
            return res.status(400).json({
                message: 'Activity not found'
            })
        }

        return res.status(200).json({
            response: activity
        })
    } catch (error) {
        next(error)
    }
}