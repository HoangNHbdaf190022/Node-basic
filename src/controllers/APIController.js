import pool from "../configs/connectDB"

const getUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}

const postUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;

    if(!firstName, !lastName, !email, !address)
    { return res.status(200).json({message: "missing data!"}) }

    await pool.execute(`insert into users (firstName, lastName, email, address) values (?, ?, ?, ?)`,
        [firstName, lastName, email, address]);

    console.log(req.body)
    return res.status(200).json({message: "Ok!"})
}

const putUser = async function (req, res) {
    let {firstName, lastName, email, address, id} = req.body;

    if(!firstName, !lastName, !email, !address, !id)
    { return res.status(200).json({message: "missing data!"}) }

    await pool.execute(`update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?`,
        [firstName, lastName, email, address, id]);

    return res.status(200).json({message: "update ok!"})
}

const deleteUser = async function (req, res) {  
    let userId = req.params.userID;

    if(!userId) { return res.status(200).json({message: "missing data!"}) }

    await pool.execute(`delete from users where id = ?`, [userId]);

    return res.status(200).json({message: "delete ok!"})
}
module.exports = { getUsers, postUser, putUser, deleteUser}