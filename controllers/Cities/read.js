import { response } from "express"
import City from "../../models/City.js"

let allCities = async (req, res, next) => {
    try {
        let cities = await City.find()
        return res.status(200).json({
            response: cities
        })
    } catch (error) {
        return next(error)
    }
}

let filteredCities = async (req, res, next) => {
    try {
        let { name, id } = req.query
        let query = {}
        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' }
        }
        if (id) {
            query.id = id; 
        }
        
        let cities = await City.find(query)
        console.log(cities)
        return res.status(200).json({
            response: cities
        })
    } catch (error) {
        return next(error)
    }
}

export { allCities, filteredCities }