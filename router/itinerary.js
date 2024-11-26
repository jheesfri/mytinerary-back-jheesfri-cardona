import { Router } from "express"
import { itineraryCreate, itinerariesCreate } from "../controllers/itineraries/create.js"
import { allItineraries, itineraryById } from "../controllers/itineraries/read.js"
import { updateItinerary } from "../controllers/itineraries/update.js"
import { deleteItinerary } from "../controllers/itineraries/delete.js"
import passport from "../middlewares/passport.js"


const router = Router()

router.get('/all', passport.authenticate('jwt', { session: false }), allItineraries)
router.get('/byId', passport.authenticate('jwt', { session: false }), itineraryById) 
router.post('/create', passport.authenticate('jwt', { session: false }), itineraryCreate)
router.post('/createMany', passport.authenticate('jwt', { session: false }), itinerariesCreate)
router.put('/update', passport.authenticate('jwt', { session: false }),updateItinerary); // PUT o PATCH
router.delete('/delete', passport.authenticate('jwt', { session: false }), deleteItinerary);


export default router