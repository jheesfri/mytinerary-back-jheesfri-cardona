import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";


export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile)
            try {

                let user = await User.findOne({ email: profile.emails[0].value });
                if (user) {
                    console.log(user);
                    console.log('si encontro el usuario');
                    return done(null, user)
                }
                return done(null, false)
            } catch (error) {
                return done(error, null)
            }
        }

    ))