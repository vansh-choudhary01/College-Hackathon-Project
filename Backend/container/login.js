const User = require("../db.js");

async function checkUser(req, res) {
    let {mobile, password} = req.query;
    if(!mobile || !password) throw Error("Wrong account");
    let result = await User.findOne(req.query);
    // console.log(result._id);
    if(result) {
        res.redirect(`https://www.iitb.ac.in/`);
    } else {
        let wrong = true;
        res.render("LoginPage/index.ejs", {wrong});
    }
}

module.exports = checkUser;