import bycrypt from "bcryptjs"

export default (req, res, next) => {
    const passwordEntered = req.body.password
    const passwordDB = req.user.password
    const passwordHash = bycrypt.compareSync(
        passwordEntered,
        passwordDB
        )
    if (passwordHash) {
        next()
    } else {
        return res.status(400).json({
            success: false,
            messages: "Incorrect Credentials"
        })
    }
}