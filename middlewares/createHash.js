import bcryptjs from 'bcryptjs'

export default (req, res, next) => {
    let password = req.body.password;
    let passwordHash = bcryptjs.hashSync(
        password,
        5
        )
    req.body.password = passwordHash

    next()
}