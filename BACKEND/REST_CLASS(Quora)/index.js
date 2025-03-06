const express = require("express");
const app = express();
const port =8080;
const path = require("path");//to run folders here acquring paths
const { v4: uuidv4 } = require('uuid');// Create a uuid of version 4
//uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'--give an unique id
const methodOverride = require("method-override");// 

app.use(express.urlencoded({ extended: true }));//for undersand/parse all date form apis requests
app.use(methodOverride("_method"));//


app.set("view engine", "ejs");//set view engine
app.set("views", path.join(__dirname, "views"));//set path for views

//for public folder
app.use(express.static(path.join(__dirname, "public")));

//Creating array to store all post data as we dont have data base
let posts = [
  {
    id : uuidv4(),
    username : "apnacollege",
    content : "I love coding!"
  } ,
  {
    id: uuidv4(),
    username : "stiwart",
    content : "Hard work is important to achieve success"
  } ,
  {
    id : uuidv4(),
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
  //console.log(req.body);//this api accepts form data from /posts/new path/api..as data comes in the form of querry in get request but in post request dataorinfo comes inside body........................
 // res.send("post request working");
  // add above data in post wale array pr(data base)
  let {username, content} = req.body;
  let id = uuidv4();
  posts.push({id, username, content});
  //res.send("post request working");
  res.redirect("/posts");// connecting all pagest /posts ,  /posts/new,   /posts....using REDIRECT
});


app.get("/posts/:id",  (req, res) => {
  let {id} = req.params; //retrieve id //console.log(id);
  console.log(id);
  let post = posts.find((p) => id === p.id);//using find fuction of array --to find post using id // console.log(post);
  res.render("show.ejs", {post});
});

app.patch("/posts/:id",  (req, res) => { //using hoppscotch..body>..content type..application/x-form-urlencoded..para1-content value-i love apna college
  let {id} = req.params; 
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent; //post content reset/edited form patchbody para value
  console.log(post);
  res.redirect("/posts");
});

//creating new get request for edit
app.get("/posts/:id/edit", (req, res) => {
  let {id} = req.params; 
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", {post});
});

//MAKE DELETE ROUTE
app.delete("/posts/:id", (req, res) => {
  let {id} = req.params; 
  posts = posts.filter((p) => id  !== p.id); //post filter
  res.redirect("/posts");
});


app.listen(port, () => {
  console.log("listening to port : 8080");
});

