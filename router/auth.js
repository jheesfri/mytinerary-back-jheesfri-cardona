import { Router } from "express";
import accountNotExists from "../middlewares/accountNotExists.js";
import verifyPassword from "../middlewares/verifyPassword.js";
import generateToken from "../middlewares/generateToken.js";
import { signIn } from "../controllers/users/auth/signIn.js";
import { signOut } from "../controllers/users/auth/signOut.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import validateToken from "../controllers/users/auth/validateToken.js";
import signInGoogle from "../controllers/users/auth/signInGoogle.js";

export const routerAuth = Router()

routerAuth.post('/signIn', accountNotExists, verifyPassword, generateToken, signIn)
routerAuth.post('/signOut', passport.authenticate('jwt', { session: false }), signOut)

routerAuth.get('/validatorToken', validateToken)

// sign In Google

routerAuth.get('/signInGoogle', passportGoogle.authenticate('google', { scope: ['profile', 'email'] }))
routerAuth.get(
    '/signIn/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: 'localHost:8080/mytinerary/auth/SignIn' }),
    generateToken,
    signInGoogle
)