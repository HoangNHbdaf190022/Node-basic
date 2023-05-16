import express from 'express';
import APIController from '../controllers/APIController';

let router = express.Router();

const initAPIRoutes = (app) => {
    router.get('/get-users', APIController.getUsers);
    router.post('/post-user', APIController.postUser);
    router.put('/put-user/', APIController.putUser);
    router.delete('/delete-user/:userID', APIController.deleteUser);

    return app.use("/api/v1/", router);
}

export default initAPIRoutes;