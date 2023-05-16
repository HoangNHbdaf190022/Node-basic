import express from 'express';
import homeController from '../controllers/homeController';
import multer from 'multer';
import path from 'path';
var appRoot = require('app-root-path');
let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(`>> Check app-root: ${appRoot}`);
        cb(null, appRoot + "/src/public/image/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userID', homeController.getDetailPage);
    router.post('/post', homeController.handlePost);
    router.get('/edit/:userID', homeController.handleEdit);
    router.post('/update', homeController.handleUpdate);
    router.post('/delete', homeController.handleDelete);
    router.get('/upload', homeController.getUploadPage);
    router.post('/upload-single-file', upload.single('single_file'),  homeController.handleUploadFile);
    router.post('/upload-multi-file', homeController.handleUploadMultiFile);

    router.get('/about', (req, res) => {
        res.send(`I'm Hoàng!`)
    })
    
    return app.use("/", router);
}

export default initWebRoutes;