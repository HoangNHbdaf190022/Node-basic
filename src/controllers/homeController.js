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

module.exports = { getHomepage, getDetailPage, handlePost, handleEdit, handleUpdate, handleDelete };
