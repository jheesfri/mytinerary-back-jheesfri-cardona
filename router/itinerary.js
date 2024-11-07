import { Router } from "express"
import { itineraryCreate, itinerariesCreate } from "../controllers/itineraries/create.js"
import { allItineraries, itineraryById } from "../controllers/itineraries/read.js"
import { updateItinerary } from "../controllers/itineraries/update.js"
import { deleteItinerary } from "../controllers/itineraries/delete.js"


const router = Router()

router.get('/all', allItineraries)
router.get('/byId', itineraryById) 
router.post('/create', itineraryCreate)
router.post('/createMany', itinerariesCreate)
router.put('/update', updateItinerary); // PUT o PATCH
router.delete('/delete', deleteItinerary);


export default router