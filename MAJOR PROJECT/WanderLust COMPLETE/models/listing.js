const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

//SCHEMA
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId, //storing id or review in form of array
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"], //'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      requires: true,
    },
  },
});

//CREATE POST MONGOOSE MIDDLEWARE
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

//CREATING MODEL using schema
const Listing = mongoose.model("Listing", listingSchema);

//EXPORT
module.exports = Listing;
