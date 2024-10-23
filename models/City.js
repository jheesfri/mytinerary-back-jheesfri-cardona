import { Schema, model } from "mongoose";

let collection = 'cities'
let schema = new Schema({

    // Definición del esquema para el modelo City

    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String, required: true },
    population: { type: Number, default: 0 },// Valor por defecto si no se especifica
    area: { type: Number, default: null },// En km²
    founded: { type: Number, default: null }, // Año de fundación 
    isCapital: { type: Boolean, default: false },// Por defecto no es capital
    location: {
        latitude: { type: Number, default: null },
        longitude: { type: Number, default: null }
    },
    description: { type: String, default: '' },
    language: { type: String, default: 'Unknown' },
    continent: { type: String, required: true},
    climate: {  type: String,  default: 'Temperate' } // Clima por defecto
}, {
    timestamps: true // Agrega automáticamente createdAt y updatedAt
});

//Modelo City basado en el esquema

const City = model(collection, schema)

export default City
