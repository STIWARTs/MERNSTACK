//MONOGOOSE MIDDLEWARE

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo"); //relationDemo is a DB name
}

//parent child relationship between 2 datas username and addresses inside a collection users

//1.a.ORDER SCHEMA
const orderSchema = new Schema({
  item: String,
  price: Number,
});

//2.a.CUSTOMER SCHEMA
const customerSchema = new Schema({
  name: String,
  orders: [
    //reference store, not actual order
    {
      type: Schema.Types.ObjectId, //object id as a type define
      ref: "Order", //ref kon se model se aayi
    },
  ],
});

//PRE AND POST MIDDLEWARE DEFINE
// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("PRE MIDDLEWARE");
// });
customerSchema.post("findOneAndDelete", async (customer) => {
  //   console.log(data);
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } }); //-->To matching field(id) with list(customer.ordrr) we use mongoose $in operator
    console.log(res);
  }
});

//MODEL DEFINE
const Order = mongoose.model("Order", orderSchema); //Order MODEL 1.b
const Customer = mongoose.model("Customer", customerSchema); //CUSTOMER MODEL 2.b

//POPULTATE
const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders"); //puri info of obj print insted of id...hence called populate method
  console.log(result[0]);
};

//CREATING 2 FUCTIONS
//1.TO ADD CUSTOMER IN DB

const addCust = async () => {
  let newCust = new Customer({
    name: "Karan Arjun",
  });

  let newOrder = new Order({
    item: "Pizza",
    price: 250,
  });
  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("added new customer");
};

//2.TO DELETE CUSTOMER FROM DB
const delCust = async () => {
  let data = await Customer.findByIdAndDelete("67b4297b4651ad998e481d8f");
  console.log(data);
};
// addCust();
delCust();

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//
//NOTE: DELETE KRNE PR ORDER KA DATA DELETE NHI HUA ONLY CUSTOMER KA HUA,,,,
////////DONO KA DELETE HO USKE LEYE MONGOOSE MIDDLEWARE USE KRTE
