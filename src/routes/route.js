import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userID', homeController.getDetailPage);
    router.post('/post', homeController.handlePost);
    
    router.get('/about', (req, res) => {
        res.send(`I'm Hoàng!`)
    })
    
    return app.use("/", router);
}

export default initWebRoutes;