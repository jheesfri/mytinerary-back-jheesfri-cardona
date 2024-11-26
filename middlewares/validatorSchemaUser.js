export const validatorSchemaUser = (schema) => [
    (req, res, next) => {
        const validtaor = schema.validate(req.body, { abortEarly: false })

        if (validtaor.error) {
            return res.status(400).json({
                success: false,
                message: validtaor.error.details.map(detail => detail.message)
            })
        }
        return next()
    }]
