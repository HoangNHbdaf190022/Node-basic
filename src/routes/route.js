import express from 'express';
import homeController from '../controllers/homeController';
import multer from 'multer';
import path from 'path';
var appRoot = require('app-root-path');
let router = express.Router();

// ảnh sẽ được lưu ở /src/public/image/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
// validate file upload
const imageFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });
let uploadMultiple = multer({ storage: storage, fileFilter: imageFilter }).array('multi_file', 3);


const initWebRoutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userID', homeController.getDetailPage);
    router.post('/post', homeController.handlePost);
    router.get('/edit/:userID', homeController.handleEdit);
    router.post('/update', homeController.handleUpdate);
    router.post('/delete', homeController.handleDelete);
    router.get('/upload', homeController.getUploadPage);
    router.post('/upload-single-file', upload.single('single_file'),  homeController.handleUploadFile);
    router.post('/upload-multi-file', 
        (req, res, next) => {
            uploadMultiple(req, res, (err) => {
                if (err instanceof multer.MulterError) {
                    res.send("Upload images no more than 3 images")
                } else if (err) {
                    res.send(err)
                }
                else {
                    next();
                }
            })
        }, homeController.handleUploadMultiFile
    );

    return app.use("/", router);
}

export default initWebRoutes;