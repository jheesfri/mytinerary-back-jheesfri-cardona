import { Router } from "express"
import {allCities, filteredCities} from '../controllers/Cities/read.js'

const router = Router()

router.get('/all', allCities)
router.get('/search', filteredCities)

export default router