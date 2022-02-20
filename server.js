const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public/style/css"));
app.use(express.static(__dirname + "/public/img"));
app.use(express.static(__dirname + "/public/js"));

app.set("views engine ", "ejs");

app.get("/", (request, response) => {
  response.render("index.ejs", { foo: "FOO" });
});


app.listen(3000);
