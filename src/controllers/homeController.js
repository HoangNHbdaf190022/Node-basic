import pool from '../configs/connectDB';
import path from 'path';
import multer from 'multer';

const getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute('SELECT * FROM `users`');
  return res.render('index.ejs', { dataUser: rows })
}

const getDetailPage = async (req, res) => {
  let userId = req.params.userID;
  let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
  return res.send(JSON.stringify(user))
}

const handlePost = async (req, res) => {
  let {firstName, lastName, email, address} = req.body;

  await pool.execute(`insert into users (firstName, lastName, email, address) values (?, ?, ?, ?)`, 
    [firstName, lastName, email, address]);

  console.log(req.body)
  return res.redirect('/')
}

const handleEdit = async (req, res) => {
  let userId = req.params.userID;
  let [user] = await pool.execute(`select * from users where id = ?`, [userId]);
  return res.render('update.ejs', { dataUser: user[0] })
}

const handleUpdate = (req, res) => {
  let {firstName, lastName, email, address, id} = req.body;
  pool.execute(`update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ? `,
    [firstName, lastName, email, address, id]);
  return res.redirect('/');
}

const handleDelete = (req, res) => {
  let userId = req.body.userID;
  pool.execute(`delete from users where id = ?`, [userId]);
  return res.redirect('/');
}

const getUploadPage = async (req, res) => {
  return res.render('uploadFile.ejs')
}

const upload = multer().single('single_file');

const handleUploadFile = async (req, res) => {
  upload(req, res, function (err) {
    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }
    else if (err instanceof multer.MulterError) {
        return res.send(err);
    }
    else if (err) {
        return res.send(err);
    }
    res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`);
    });
}

// milti file
const handleUploadMultiFile = async (req, res) => {
  res.send('ok upload multi file')
}

module.exports = { 
  getHomepage, 
  getDetailPage, 
  handlePost, 
  handleEdit, 
  handleUpdate, 
  handleDelete, 
  getUploadPage, 
  handleUploadFile, 
  handleUploadMultiFile
};
