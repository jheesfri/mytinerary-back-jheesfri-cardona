import Activity from "../../models/Activity.js"

export const createActivity = async (req, res, next) => {

    try {
        const activity = req.body
        const create = await Activity.create(activity)

        return res.status(201).json({
            seccess: true,
            response: create,
            message: 'Created ok'
        })
    } catch (error) {
        next(error)
    }

}

export const createActivities = async (req, res, next) => {
    try {
        const activities = req.body
        const creeate = await Activity.insertMany(activities)
        return res.status(201).json({
            seccess: true,
            response: create,
            message: 'Created ok'
        })
    } catch (error) {
        next(error)
    }

}