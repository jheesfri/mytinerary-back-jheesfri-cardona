import { Router } from "express";

//import { allUsers } from "../controllers/users/read.js";
import { createUser } from "../controllers/users/create.js";
//import { updateUser } from "../controllers/users/update.js";
//import { deleteUser } from "../controllers/users/delete.js";
import { validatorSchemaUser } from "../middlewares/validatorSchemaUser.js";
import { userCreateSchema } from "../schemas/user/create.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import generateToken from "../middlewares/generateToken.js";
import { allUsers, userById } from "../controllers/users/read.js";
import passport from "../middlewares/passport.js";

const routerUsers = Router();

routerUsers.get("/all",passport.authenticate('jwt', { session: false}), allUsers);
routerUsers.get("/userById",passport.authenticate('jwt', { session: false}), userById);
routerUsers.post("/create",validatorSchemaUser(userCreateSchema),accountExists, createHash, generateToken, createUser);
routerUsers.put("/update", passport.authenticate('jwt', { session: false }), ); // PUT o PATCH
routerUsers.delete("/delete", passport.authenticate('jwt', { session: false }), );

export default routerUsers