import { Router } from "express";
import routerCities from './cities.js'

const router = Router()

router.use('/cities',routerCities)

export default router