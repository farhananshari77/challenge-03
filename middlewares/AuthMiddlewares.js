const security = (req, res, next) => {
    const token = req.app.locals.token;

    if(!token) {res.render("login");}
    else {return next();}
}

module.exports = security;