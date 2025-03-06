const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path"); //views
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

//view folder ejs templates
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//To tell css & js files paths for server
app.use(express.static(path.join(__dirname, "public")));
//parse data
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//connection with mongoose
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

//connection with mongoose//db name whatsapp
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find(); //as chat.find() is async fuc..return promise
  //console.log(chats);
  // res.send("working");
  res.render("index.ejs", { chats }); //pass chats
});

//New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//Create Route
//DB crud operation all async process
//.then use krte toh async lekhane ki no zarurat
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body; //data have to be parse
  //create
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  //save..occur permanently as saves on db
  newChat
    .save()
    .then((res) => {
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  //async call back
  let { id } = req.params;
  //serach chat using find on db using id
  let chat = await Chat.findById(id); //as async fuc and not use then
  res.render("edit.ejs", { chat }); //chat pass on template
});

//Update Route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  //console.log(newMsg);
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

//root route
app.get("/", (req, res) => {
  res.send("root is working");
});

//server setup
app.listen(8080, () => {
  console.log("app is listening");
});

// fuction to insert model..but not save
// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheets",
//     created_at: new Date(), //time created acc UTC
// });

// //save data1(or )
// chat1.save().then((res) => {
//     console.log(res);
// });
