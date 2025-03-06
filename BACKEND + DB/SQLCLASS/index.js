const { faker } = require('@faker-js/faker'); // request faker
const mysql = require('mysql2'); // request faker/GET THE CLIENT
const express = require("express");
const app = express();
const path = require("path");//templating
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));//to able to parse form data
// templating
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));


// create the connection object
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "10112003",
  });

  let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), //before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
};

 //HOME route
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", {count});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }    
});

// SHOW Route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      //console.log(result);
      //res.send(result);
      res.render("showusers.ejs", {users});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }    
});


//EDIT route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
      connection.query(q, (err, result) => {
       if (err) throw err;
       let user = result[0];
        res.render("edit.ejs", {user});  
      });
    }catch (err) {
    console.log(err);
    res.send("some error in DB");
    }
  });


//part2 Edit route..UPDATE (DB) Route
app.patch("/user/:id", (req, res) => {//patch req gives id pass userna
  let {id} = req.params;
  let {password: formPass, username: newUsername} = req.body;//2
  let q = `SELECT * FROM user WHERE id='${id}'`;//db se nikalne user info
  try {
    connection.query(q, (err, result) => {
     if (err) throw err;
     let user = result[0];
     if (formPass != user.password) { //2 check formpass = or not to db pass
      res.send("WRONG password");
     }else{ //3 if yes then update it
      let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;      
      connection.query(q2, (err, result) => {
        if(err) throw err;
        // res.send(result);
        res.redirect('/user'); //redirect to user page
      });
     }
    //  res.send(user);//1
   });
 } catch (err) {
   console.log(err);
   res.send("some error in DB");
 }    
});

  //start port..
  app.listen("8080", () => {
    console.log("server is listening to port 8080");
  
});

  



  ///comment out as ek bar use kr ke fake data la chuke ek bar or kr deye toh 200 hojayenge
  // //Inserting New Data
  // let q = "INSERT INTO user (id, username, email, password) VALUES ?";

  // let data = [];
  // for (let i = 1; i <= 100; i++) {
  //   data.push(getRandomUser()); // 100 fake data
  // }



//for use connection in data base / SIMPLY QUERY(method)
// let q = "SHOW TABLES"; // query in variable
// try {
// connection.query(q, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
    
//   })
// } catch (err) {
//     console.log(err);
// }




//Using SQL from CLI in Windows
//& "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p


//for getting password form data base of user
//SELECT * FROM user WHERE username="xyz"


// connection.end();

  

