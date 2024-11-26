import City from "../../models/City.js";

export const updateCity = async (req, res, next) => {
    try {
        let city = req.body

        const updatedCity = await City.findOneAndUpdate(
            { name: city.name },
            {
                image: city.image,
                population: city.population,
                description: city.description,
                itineraries: city.itineraries
            },
            { new: true }
        )

        if (!updatedCity) {
            return res.status(404).json({
                seccess: false,
                message: "City not found"
            })
        }

        return res.status(200).json({
            response: updatedCity
        });
    } catch (error) {
        next(error)
    }
}