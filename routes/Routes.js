const { Router } = require("express");
const router = Router();
const security = require("./../middlewares/AuthMiddlewares");

router.get("/", security, (req,res) => {
    res.render("dashboard", {title: "Dashboard"});
});

router.post("/login", (req,res) => {
    res.app.locals.token = "token123";
    res.redirect("/");
});

module.exports = router;