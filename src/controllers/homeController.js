import pool from '../configs/connectDB';

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

// single file
const handleUploadFile = async (req, res) => {
  if (req.fileValidationError) {
      return res.send(req.fileValidationError);
  }
  else if (!req.file) {
      return res.send('Please select an image to upload');
  }
  res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`);
}

// milti file
const handleUploadMultiFile = async (req, res) => {
    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.files) {
        return res.send('Please select at least an image to upload');
    }

    let result = "You have uploaded these images: <hr />";
    const files = req.files;
    let index, len;
    // Loop through all the uploaded images and display them on frontend
    for (index = 0, len = files.length; index < len; ++index) {
        result += `<img src="/image/${files[index].filename}" width="300" style="margin-right: 20px;">`;
    }
    result += '<hr/><a href="/upload">Upload more images</a>';
    res.send(result);
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
