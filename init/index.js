const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";

//Database Connection
async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

console.log(initData.data);

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => {
    ({ ...obj, owner: "669ea035fdfc38ea6f2c97b0" });
  });
  console.log(initData.data);
  // await Listing.insertMany(initData.data);
  console.log("Data was inserted");
};

// initDB();
