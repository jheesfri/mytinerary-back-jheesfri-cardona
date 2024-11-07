import { Router } from "express";
import routerCities from './cities.js'
import routerItineraries from './itinerary.js'

const router = Router()

router.use('/cities',routerCities)
router.use('/itineraries',routerItineraries)

export default router