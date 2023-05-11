let getHomePage = (req, res) => {
    //login to reder page
    return res.render("index.ejs")
}
let getAboutPage = (req, res) => {
    return res.send("Hello, my name is Hoang")
}
let getExamplePage = (req, res) => {
    return res.send("Hello World!")
}

module.exports = { getHomePage, getAboutPage, getExamplePage }
