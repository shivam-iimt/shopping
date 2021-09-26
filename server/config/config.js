const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/b2bazaar', {
      // useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useFindAndModify: false,
    });
    console.log("mongodb connected");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDB;
