import { Schema, model } from "mongoose";

let collection = 'activities';
let schema = new Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true }, // duración en horas
    cost: { type: Number, required: true }, // costo en la moneda local
    image: { type: String, required: true } // URL de la imagen de la actividad
}, {
    timestamps: true
});

let Activity = model(collection, schema);
export default Activity;