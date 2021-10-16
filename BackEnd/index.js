const express = require('express');
const db = require('./config/db')
const cors = require('cors')
const mysql = require('mysql')
const app = express();
const PORT = 8500;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.post("/login", (req, res) => {
    console.log(req.body)
    let selectQuerys = "SELECT * FROM users where email=" + mysql.escape(req.body.username)
    const searcha = db.query(selectQuerys,(err,resullt)=>{
        if(err){
            console.log(err)
        }
        console.log(resullt)
         if(resullt.length>0){
             return res.status(202).send("already Exist")
         }else if(resullt.length==0){
            return res.status(204).send("No user Found in Record")  
         }
});
})

// Route for creating the post
app.post('/signup', (req, res) => {
    let selectQuery= "SELECT * FROM users where email=" + mysql.escape(req.body.emailID)
   const search= db.query(selectQuery,(err,resullt)=>{
        if(err){
            console.log(err)
        }
         if(resullt.length>0){
             return res.status(403).send("already Exist")
         }else if(resullt.length==0){
            db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", [req.body.name,req.body.emailID,req.body.password], (err, result) => {
                if (err) {
                    console.log(err)
                }
                console.log("Inserted")
                return res.status(200).send("allok")
            });
         }
    } )

   
    
})



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})