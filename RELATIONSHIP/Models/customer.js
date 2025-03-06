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

//MODEL DEFINE
const Order = mongoose.model("Order", orderSchema); //Order MODEL 1.b
const Customer = mongoose.model("Customer", customerSchema); //CUSTOMER MODEL 2.b

//CUSTOMER FUNCTION 2.c....add customer
const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Rahul Kumar",
    //yaha krna chiye tha order pass/pushing by id  to customer
  });

  //extracting insted of object id from order...we extract whole data of order
  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });

  //pushing orders to customer--pushing child (whole order data) doc not id
  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let result = await cust1.save(); //saves to cusstomer ---SAVE ONLY ID ON DB
  console.log(result); //print---BUT PRINT WHOLE DATA ON TERMINAL
};

addCustomer();

//POPULATE
// const findCustomer = async () => {
//     let result = await Customer.find({}).populate("orders");//puri info of obj print insted of id...hence called populate method
//     console.log(result[0]);
//   };

//   findCustomer();

// ORDER funtion 2.c....(TO add data on data)
// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "Samosa", price: 12 },
//     { item: "Chips", price: 10 },
//     { item: "Chocolate", price: 40 },
//   ]);
//   console.log(res);
// };
// addOrders(); //call ORDER

////////////////////////////////////////////////////////////////
//Step 1......store order data to db 2.c---node customer.js
//phele order saves to db,, then pass it to as an reference id to customer name

//Step 2......After customer make save to dbb---node customer.js
