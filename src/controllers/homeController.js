import connection from '../configs/connectDB';

let getHomePage = (req, res) => {
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
        console.log("\n----- Check mysql connection! ------\n")
        console.log(err ? err : "Connected MySQL!\n");
        console.log(results);
        data = results.map((row) => {return row})

        return res.render("index.ejs", {dataUser: data, test: "Hello World!"});
        }
    );
}

module.exports = { getHomePage }
