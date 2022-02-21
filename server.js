const express = require("express");
const app = express();
const bodyParser =require('body-parser');
const CreateRendezVous = require('./models/CreateRendezVous');
const ConnectAdmis = require('./models/ConnectAdmis');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(express.static(__dirname + "/public/style/css"));
app.use(express.static(__dirname + "/public/img"));
app.use(express.static(__dirname + "/public/js"));
app.use(express.static(__dirname + "/src"));


app.set("views engine ", "ejs");

app.get("/", (request, response) => {
  response.render("index.ejs", { dashboard: "false" });

});
app.post('/render', (request , response) => {
  response.render("index.ejs", { dashboard: "false" });
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const phone = request.body.phone;
  const email = request.body.email;
  const message = request.body.message;

  CreateRendezVous.create(firstName, lastName , parseInt(phone) , email , message);

})

app.post('/admis', (request, response) => {
  ConnectAdmis.check(request.body.email, request.body.password, () => {
    response.render('index.ejs',{dashboard: 'true'})
  },() => {
    response.render("index.ejs", { dashboard: "false" });
  });
})

app.listen(3000);
