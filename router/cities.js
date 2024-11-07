import { Router } from "express"
import {allCities, filteredCities} from '../controllers/Cities/read.js'
import { createCity, createCities } from "../controllers/Cities/create.js"

const router = Router()

router.get('/all', allCities)
router.get('/search', filteredCities)
router.post('/create', createCity)
router.post('/createMany', createCity)

export default router