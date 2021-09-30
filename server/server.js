const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const { errorHandler } = require("./middlewares/errormiddleware");

const products = require("./data/products");
const connectDB = require("./config/config");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require('./routes/orderRoutes')

const PORT = process.env.PORT||5000;
//connecting to mongodb database
const app = express();
app.use(express.json())
connectDB();

app.get("/", (req, res) => {
  res.send("<h1>HELLO</h1>");
});
app.use(errorHandler); 
app.use("/api", productRoutes);  
app.use("/api/user", userRoutes);  
app.use("/api/user", orderRoutes);  
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
