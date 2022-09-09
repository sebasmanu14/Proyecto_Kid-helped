const express = require("express");
const app = express();
const port = 3001;

// Motor de plantilla
const hbs = require("hbs");
hbs.registerPartials(__dirname + "/src/layouts", function (err) {});
app.set("view engine", "hbs");
app.set("views", __dirname + "/src/pages");
app.use(express.static("public"));
     
   
//rutas de pagina
app.get("/", (req, res) => {
  res.render("core/main");
});  
  
app.get("/register", (req, res) => {
  res.render("auth/register");
});           
 
app.get("/login", (req, res) => {
  res.render("auth/login", {
    style: 'login.css'
  });  
});  

app.get("**", (req, res) => {
  res.render("common/not-found");
});
   
 
//inicio servidor 
app.listen(port, () => console.log(`App listening to port ${port}`));
