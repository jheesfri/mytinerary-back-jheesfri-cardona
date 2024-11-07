import Itinerary from "../../models/Itinerary.js";
import  "../../models/Activity.js";

export const updateItinerary = async (req, res, next) => {
    try {
        const { _id } = req.query; // Obtén el ID desde los parámetros de la URL o desde la query
        const updatedData = { ...req.body }; // Copia los datos de actualización

        // Verifica que el ID esté presente
        if (!_id) {
            return res.status(400).json({ error: "Itinerary ID is required" });
        }

        // Elimina `_id` del objeto de actualización si está presente para evitar conflictos
        delete updatedData._id;

        // Actualiza el itinerario por su ID con los datos proporcionados
        const itinerary = await Itinerary.findByIdAndUpdate(_id, updatedData, {
            new: true, // Devuelve el documento actualizado
            runValidators: true // Ejecuta las validaciones definidas en el modelo
        });

        // Verifica si el itinerario existe
        if (!itinerary) {
            return res.status(404).json({ error: "Itinerary not found" });
        }

        return res.status(200).json({
            response: itinerary,
            message: "Itinerary updated successfully"
        });
    } catch (error) {
        next(error);
    }
};

