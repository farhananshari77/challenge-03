const express = require("express");
const app = express();
const Routes = require("./routes/Routes");

app.set("view engine", "ejs");

app.use("/", Routes);
app.use("/public", express.static("./public"));

app.listen(8000, () => {
    console.log(`Server running on port 8080`)
})