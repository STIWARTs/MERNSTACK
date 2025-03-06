const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");//relationDemo is a DB name
}

//SCHEMA DEFINED
//parent child relationship between 2 datas username and addresses inside a collection users
const userSchema = new Schema({
  username: String,
  addresses: [
    {
      location: String,
      city: String,
    },
  ],
});

//MODEL CREATE
const User = mongoose.model("User", userSchema);

//for add data make funtion

const addUsers = async () => {
  let user1 = new User({
    username: "sherlockholmes",
    addresses: [
      {
        //_id: false,//not working why???
        location: "221B Baker Street",
        city: "London",
      },
    ],
  });
  user1.addresses.push({ location: "P32 WallStreet", city: "London" });
  let result = await user1.save();
  console.log(result);
};

addUsers(); //call
