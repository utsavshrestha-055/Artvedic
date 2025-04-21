const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 4000;
const productRoutes = require("./routes/products/api");

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🎉");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
