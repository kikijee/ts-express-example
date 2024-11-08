import express, { Router } from "express";
import {create_user,delete_user, get_users, get_user_by_id} from "../controllers/user.controller"
import { validateData } from "../middleware/validation.middleware";
import { userCreationSchema } from "../schemas/user.schema";

export default ()=>{

    const router: Router = express.Router();

    // creates user (POST -> New entry in database)
    router.post('/user', validateData(userCreationSchema), create_user);
    
    // gets all users and returns list (GET -> database retrieval)
    router.get('/user', get_users);
    
    // gets user with id (GET -> database retrieval)
    router.get('/user/:id', get_user_by_id);
    
    // deletes user with id )(DELETE -> deletes from database)
    router.delete('/user/:id', delete_user);
    
    return router;
}

