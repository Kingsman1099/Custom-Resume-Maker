const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"cv_resume" 
})

module.exports = db;