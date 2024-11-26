import Itinerary from "../../models/Itinerary.js";
import  "../../models/Activity.js";

export const allItineraries = async (req, res, next) => {
    try {
        const itineraries = await Itinerary.find().populate('activities').exec()
        console.log(itineraries);
        
        return res.status(200).json({
            response: itineraries
        })
    } catch (error) {
        next(error)
    }
}

export const itineraryById = async (req, res, next) => {
    try {
        let { _id } = req.query
        if (!_id) {
            return res.status(400).json({
                message: "Itinerary ID is required",
            });
        }
        
       
        const itinerary = await Itinerary.findById(_id).populate('activities').exec()
        return res.status(200).json({
            response: itinerary
        })
        
    } catch (error) {
        next(error)
    }
}
 