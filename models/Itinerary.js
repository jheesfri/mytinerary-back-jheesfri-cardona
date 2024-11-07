import { Schema, model } from "mongoose";

let collection = 'itineraries'
let schema = new Schema({
    activities: { type: Schema.Types.ObjectId, ref: 'activities', required: true },
    name: { type: String, required: true },
    nameItinerary: { type: String, required: true }, 
    price: { type: Number, min: 1, max: 5 },
    duration: { type: Number, required: true },
    likes: { type: Number, default: 0 }, // Likes iniciales en 0
    hashtags: { type: [String] },
    photo: { type: String } // Propiedad photo opcional
}, {
    timestamps: true // Agrega automáticamente createdAt y updatedAt
});


//Modelo City basado en el esquema

const Itinerary = model(collection, schema)
export default Itinerary
