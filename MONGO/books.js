const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazone");
}

//define schema/model  before to form collection
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    aurthor:{
        type: String,
    },
    price: {
        type: Number,
    },

});

//create model
const Book = mongoose.model("Book", bookSchema);

//Create book1 to insert data
let book1 = new Book({
    title: "Mathematics XII",
    author: "RD Sharma",
    price: 1200,
});

//save book1 in db
book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});