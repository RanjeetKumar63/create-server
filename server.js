// Server Instantiate

const express = require("express");
const app = express();

// used to parse req.body in express -> PUT or POST
const bodyParser = require("body-parser");

// specifically parse JSOn data & add it to the request.body object
app.use(bodyParser.json());

// activate the server on 8000 port
app.listen(8000, () => {
  console.log("server started at Port no 8000 ");
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello Jee, Kaise ho Sare");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car Submitted Successfully");
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDatebase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log("Received an Error");
  });
