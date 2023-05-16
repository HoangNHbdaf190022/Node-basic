/*
// *** Làm quen với NodeJS Platform ***
//Điều kiện tiên quyết để tạo client và server
const http = require('http');

//khởi tạo server
const server = http.createServer((req, res) => {
    //mỗi lần có request thì sẽ chạy vào đây
    console.log('Requested!');
    //.write() để viết nội dung vào response
    res.write('<h1>Hello World!</h1>')
    res.write('<h2>Hello World!</h2>')
    res.write('<h3>Hello World!</h3>')
    res.write('<h4>Hello World!</h4>')
    res.write('<h5>Hello World!</h5>')
    res.write('<h6>Hello World!</h6>')
    //.end() để kết thúc response
    res.end("<h1>Ok nha</h1>")
    //Sau res.end thì không gọi được res.write nữa
    // res.write('<h1>Hello World!</h1>')

})
// bắt đầu lắng nghe request tại port 3300 (port gì cũng được miễn là số chưa được sử dụng)
// server.listen nhận vào 3 param => listen(port, host, callback)
server.listen(3300, 'localhost', () => {
    console.log('Chay roi ban ei!')
})
*/

/*
// *** Làm quen với ExpressJS framwork ***
const express = require('express');
const app = express();
const port = 3300;

//http://localhost:3300/ => Home Page
app.get('/', (req, res) => {
    res.send("Home Page")
})
//http://localhost:3300/me => info Page
app.get('/me', (req, res) => {
    res.send("Hello, my name is Hoang")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});

 */

/*
 // *** Làm quen với VIEW ENGINE - template engines ***
const express = require('express');
const app = express();
const path = require('path');

const port = 3300;

//http://localhost:3300/ => Home Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
//http://localhost:3300/me => info Page
app.get('/me', (req, res) => {
    res.send("Hello, my name is Hoang")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
 */

/*
    // *** Ứng dụng View-engine / EJS ***
import express from "express";
import configViewEngine from "./configs/viewEngine";

const app = express();
const port = 8080;

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/me', (req, res) => {
    res.send("Hello, my name is Hoang")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
*/

// *** EXPRESS ROUTERS ***
import express from 'express'
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/route";
import initAPIRoutes from "./routes/api";


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//Middleware for routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SET UP VIEW ENGINE
configViewEngine(app);

//INIT Web, API ROUTES
initWebRoutes(app);
initAPIRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
