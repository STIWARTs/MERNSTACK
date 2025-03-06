const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/test");
// insted above use below

//connection stablish using mongoose
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name:String,
    email: String,
    age: Number,
});

//creates collection name *users noted..when run using node index.js..check using terminal
const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);


//INSERT IN MONOGOOSE..instance created which is become a doc
// const user1 = new User({
//     name: "eva",
//     email: "eva123@yahoo.in",
//     age: 48,
// });

// //asyn fuc that return promise
// user1.save();//....saves docs in db


const user2 = new User({
    name: "boi",
    email: "boii@yahoo.in",
    age: 32,
});

user2.save().then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });


    