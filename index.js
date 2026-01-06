//import Express browser to create a web server
const express = require("express")
//creating an  Express application instance
const app = express()

//serve all static files = allowing browser to acess files like index.html
app.use(express.static(__dirname + "/public"))

//handles get request for the root url "/" = when someone visits the homepage it sends them index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})


//handles the get request to "/valentine" = when someone visits /valentine, it will send them valentine.html 
app.get("/valentine", (req, res) => {
  res.sendFile(__dirname + "/public/valentine.html");
})

// starts server on port 3000
// allows the server to listen for incoming request
app.listen(3000, () => {
  console.log(`Holiday Server is Running!`)
});
