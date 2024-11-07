import Itinerary from "../../models/Itinerary.js"

export const itineraryCreate = async (req, res, next) => {
    try {
        const itineraryBody = req.body
       const itinerary = await Itinerary.create(itineraryBody)
        return res.status(200).json({
            response: itinerary
        })
    } catch (error) {
        return next(error)
    }
}

export const itinerariesCreate = async (req, res, next) => {
    try {
        const itineraryBody = req.body
       const itinerary = await Itinerary.insertMany(itineraryBody)
        return res.status(200).json({
            response: itinerary
        })
    } catch (error) {
        return next(error)
    }
}
