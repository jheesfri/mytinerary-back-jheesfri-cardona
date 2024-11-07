import Itinerary from "../../models/Itinerary.js";

export const deleteItinerary = async (req, res, next) => {
    try {
        const { _id } = req.query; // Obtiene el ID del itinerario desde la query en la URL

        // Verifica que el ID esté presente
        if (!_id) {
            return res.status(400).json({ error: "Itinerary ID is required" });
        }

        // Busca y elimina el itinerario por su ID
        const itinerary = await Itinerary.findByIdAndDelete(_id);

        // Verifica si el itinerario existe
        if (!itinerary) {
            return res.status(404).json({ error: "Itinerary not found" });
        }

        // Responde con un mensaje de éxito
        return res.status(200).json({
            message: "Itinerary deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};
