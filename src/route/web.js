import express from 'express';
import homeController from '../controllers/homeController';


let router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)

    router.get('/me', homeController.getAboutPage)

    router.get('/hello', homeController.getExamplePage)
    
    return app.use("/", router);
}

export default initWebRoutes;