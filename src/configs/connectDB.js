// get the client
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'node_basic'
});

// simple query
connection.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
        console.log("\n----- Check mysql connection! ------\n")
    console.log(err ? err : "Connected MySQL!\n");
    console.log(results[1]); // results contains rows returned by server
  }
);

export default connection;
