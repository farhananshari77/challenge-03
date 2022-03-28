const express = require("express");
const app = express();
const Routes = require("./routes/Routes");
const {loadCars} = require("./utils/cars");

app.set("view engine", "ejs");

app.use("/", Routes);
app.use("/public", express.static("./public"));


app.get("/cars", (req, res) => {
    const cars = loadCars();
	res.status(200);
	res.render("cars", {title: "Cars", cars});
});

app.get("/cars/add", (req, res) => {
	res.status(200);
	res.render("add", {title: "Add Cars"});
});

app.get("/cars/edit", (req, res) => {
    res.status(200);
	res.render("add", {title: "Edit Cars"});
});

app.get("/cars/delete", (req, res) => {
    res.status(200);
	res.render("delete", {title: "Delete Cars"});
});

app.listen(8000, () => {
    console.log(`Server running on port 8000`)
})