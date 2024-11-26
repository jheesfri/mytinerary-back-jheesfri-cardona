import Activity from "../../models/Activity.js"

export const updateActivity = async (req, res, next) => {
    try {
        const activity = req.body
        const updateActivity = await Activity.findOneAndUpdate(
            { name: activity.name },
            {
                title: activity.title,
                description: activity.description,
                duration: activity.duration,
                cost: activity.cost,
                image: activity.image
            },
            { new: true }
        )
        return res.status(200).json({
            success: true,
            response: updateActivity,
            message: 'OK'
        })
    } catch (error) {
        next(error)
    }
}