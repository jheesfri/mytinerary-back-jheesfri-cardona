import { Router } from "express"
import {allCities, filteredCities} from '../controllers/Cities/read.js'
import { createCity, createCities } from "../controllers/Cities/create.js"
import { updateCity } from "../controllers/Cities/update.js"
import passport from "../middlewares/passport.js"

const routerCities = Router()

routerCities.get('/all',passport.authenticate('jwt', { session: false }), allCities)
routerCities.get('/search',passport.authenticate('jwt', { session: false }), filteredCities)
routerCities.post('/create', passport.authenticate('jwt', { session: false }), createCity)
routerCities.post('/createMany', passport.authenticate('jwt', { session: false }), createCities)
routerCities.put('/update', passport.authenticate('jwt', { session: false }), updateCity)
routerCities.delete('/delete/:name', passport.authenticate('jwt', { session: false }),updateCity)

export default routerCities