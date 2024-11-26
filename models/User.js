import {Schema, model} from 'mongoose'

const collection = 'users'
const schema = new Schema({
    name: {type: String, required: true, trim: true, },
    lastName: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true, lowercase: true},
    password: {type: String, required: true, trim: true, minlength: 6},
    address: {type: String, required: true, trim: true},
    role: {type: String, default: 'user'},
    online: {type: Boolean, default: true},
    photo: {type: String, reuered: true, trim: true},
    updatedAt: {type: Date, default: Date.now},
    phone: {type: Number, trim: true},
    country: {type: String, required: true, trim: true}
},{
    timestamps: true
})

const User = model(collection, schema)

export default User