import { Router } from "express";
import routerCities from './cities.js'
import routerItineraries from './itinerary.js'
import  routerActivity  from "./activities.js";
import routerUsers from "./routerUsers.js";
import { routerAuth } from "./auth.js";

const router = Router()

router.use('/cities',routerCities)
router.use('/itineraries',routerItineraries)
router.use('/activities',routerActivity)
router.use('/users',routerUsers)
router.use('/auth', routerAuth)

export default router