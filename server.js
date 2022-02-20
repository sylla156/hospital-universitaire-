const app = require("express")();

app.set("views engine ", 'ejs');

app.get("/", (request, response) => {
  response.render('index.ejs', {foo: 'FOO'});
});

app.listen(3000)
