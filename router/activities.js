import { Router } from "express";
import { activityById, allActivities } from "../controllers/Activities/read.js"
import { createActivities, createActivity } from "../controllers/Activities/create.js";
import { updateActivity } from "../controllers/Activities/update.js";
import passport from "../middlewares/passport.js";

const routerActivity = Router()

routerActivity.get('/all', passport.authenticate('jwt', { session: false }), allActivities)
routerActivity.get('/byId', passport.authenticate('jwt', { session: false }), activityById)
routerActivity.post('/create', passport.authenticate('jwt', { session: false }), createActivity)
routerActivity.post('/createMany', passport.authenticate('jwt', { session: false }), createActivities)
routerActivity.put('/byId', passport.authenticate('jwt', { session: false }),updateActivity)
routerActivity.delete('/byId', passport.authenticate('jwt', { session: false }), )

export default routerActivity