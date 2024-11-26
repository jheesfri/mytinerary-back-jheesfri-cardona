import User from '../../models/User.js'

export const createUser = async (req, res, next) => {
    try {
        let user = req.body
        user.online = true
        const createUser = await User.create(user)
        return res.status(201).json({
            seccess: true,
            message: 'User created with success',
            response: createUser
        })
    } catch (error) {
        next(error)
    }
}