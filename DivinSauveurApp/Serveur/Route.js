const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '192.168.0.47',
  user     : 'root',
  password : 'root',
  database : 'DivinSauveurBDD',
  port: 8889
});

// We're still in routes.js! Right below everything else.

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.urlencoded({extended : true }))
  // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM Events', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:8888/phpMyAdmin/db_structure.php?server=1&db=DivinSauveurBDD so you can see the data.');
});