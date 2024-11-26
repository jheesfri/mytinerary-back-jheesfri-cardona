import joi from "joi"

export const userCreateSchema = joi.object({

    name: joi.string().required().messages({
        "string.empty": "name is required",
    }),
    lastName: joi.string().required().messages({
        "string.empty": "lastName is required",
    }),
    email: joi.string().required().email().messages({
        'string.empty': 'email is required',
        'string.email': 'email is not valid'
    }),
    password: joi.string().required().min(8).messages({
        'string.empty': 'password is required',
        'string.min': 'password must be at least 8 characters long'
    }),
    address: joi.string().required().messages({
        "string.empty": "adress is required",
    }),
    country: joi.string().required().messages({
        "string.empty": "country is required",
    }),
    photo: joi.string().required().messages({
        "string.empty": "photo is required",
        
    }),
    
})