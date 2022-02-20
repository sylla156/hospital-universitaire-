const express = require("express");
const app = express();
const bodyParser =require('body-parser')
const CreateRendezVous = require('./models/CreateRendezVous');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(express.static(__dirname + "/public/style/css"));
app.use(express.static(__dirname + "/public/img"));
app.use(express.static(__dirname + "/public/js"));
app.use(express.static(__dirname + "/src"));


app.set("views engine ", "ejs");

app.get("/", (request, response) => {
  response.render("index.ejs", { foo: "FOO" });

});
app.post('/render', (request , response) => {
  response.render("index.ejs", { foo: "FOO" });
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const phone = request.body.phone;
  const email = request.body.email;
  const message = request.body.message;

  CreateRendezVous.create(firstName, lastName , parseInt(phone) , email , message);

})

app.listen(3000);
