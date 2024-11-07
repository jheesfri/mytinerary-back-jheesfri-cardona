import City from "../../models/City.js";


const createCity = async (req,res,next) => {
    try {
        let city = req.body
        let all = await City.create(city)
        return res.status(201).json({
            response: all

        })
        
    } catch (error) {
        next(error)
        
    }
}
export const createCities = async (req, res, next) => {
    try {
        const cities = req.body
        const city = await City.insertMany(cities)
        return res.status(201).json({
            response: city
        })
    } catch (error) {
        next(error)
    }
}


export { createCity }