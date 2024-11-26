import Activity from "../../models/Activity.js"

 export const allActivities = async (req, res, next) => {
    try {
        const all = await Activity.find()
        return res.status(200).json ({
            response: all
        })
    } catch (error) {
        next(error)
    }
 }

 export const activityById = async (req, res, next) => {
    
    try {
        const {_id} = req.body

        const activity = await Activity.findById(_id)

        if (!activity){
            return res.status(400).json({
                message: 'Activity not Found'
            })
        }

        return res.status(200).json({
            response: activity
        })
    } catch (error) {
        next(error)
    }
 }
