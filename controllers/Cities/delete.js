import City from "../../models/City.js"

export const deleteCity = async (req, res, next) => {
    try {
        const {_id} = req.params
        if (!_id){
            return res.status(400).json({
                message: "City ID is required"
            })
        }
        let city = await City.findByIdAndDelete(_id)

        if(city.deletedCount === 0){
            return res.status(404).json({
                message: "City not found"
            })            
        }
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        next(error)
    }
}