let getHomePage = (req, res) => {
    //login to reder page
    return res.render("index.ejs")
}
let getAboutPage = (req, res) => {
    res.send("Hello, my name is Hoang")
}
let getExamplePage = (req, res) => {
    res.send("Hello World!")
}

module.exports = { getHomePage, getAboutPage, getExamplePage }
