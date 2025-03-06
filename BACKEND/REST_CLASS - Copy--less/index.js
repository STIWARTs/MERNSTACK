const express = require("express");
const app = express();
const port =8080;
const path = require("path");//to run folders here acquring paths



app.use(express.urlencoded({ extended: true }));//for undersand/parse all date form apis requests


app.set("view engine", "ejs");//set view engine
app.set("views", path.join(__dirname, "views"));//set path for views

//for public folder
app.use(express.static(path.join(__dirname, "public")));

//Creating array to store all post data as we dont have data base
let posts = [
  {
    id : "1a",
    username : "apnacollege",
    content : "I love coding!"
  } ,
  {
    id : "2b",
    username : "stiwart",
    content : "Hard work is important to achieve success"
  } ,
  {
    id : "3c",
    username : "xyzkumar",
    content : "I got selected for my 1st internship"
  } ,
];


app.get("/posts",  (req, res) => { //creating a restful api which get request...which render a route /posts which is index.ejs 
  res.render("index.ejs", {posts}); //posts an array k form me data bhej rahe
});


//creating a new restfulapi for creating new posts../posts/new path me get req se data le kr ek form aayega
app.get("/posts/new",  (req, res) => {
  res.render("new.ejs"); //render data from form
});
app.post("/posts", (req, res) => {
 let {username, content} = req.body; 
 posts.push({ username, content});
 res.redirect("/posts");
});

app.get("/posts/:id",  (req, res) => {
  let {id} = req.params; //retrieve id //console.log(id);
  let post = posts.find((p) => id === p.id);
  console.log(post);
  res.send("request working");
});



app.listen(port, () => {
  console.log("listening to port : 8080");
});

