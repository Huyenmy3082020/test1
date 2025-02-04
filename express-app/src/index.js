const express = require("express");
const mongoose = require("mongoose"); // Khai báo mongoose không cần destructuring
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();
const port = 2000;

app.use(express.json());
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

const MONGO_DB = "DDZleMPJY4GL7Vsp";
mongoose
  .connect(
    `mongodb+srv://Hahuyenmy:${MONGO_DB}@cluster0.lcgny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Success !!");
  })
  .catch((err) => {
    console.log(err);
  });

// Bắt đầu server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
