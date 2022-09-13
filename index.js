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
app.get("/principal", (req, res) => {
  res.render("core/principal", {
    style: "principal.css",
  }); 
});          
  
app.get("/adultos", (req, res) => {
  res.render("core/adultos", {
    style: "adultos.css",
  });  
});    
app.get("/adulto", (req, res) => {
  res.render("core/adulto", {
    style: "adultos2.css",  
  });  
});      
 
app.get("/informacion", (req, res) => {
  res.render("core/informacion", {
    style: "informacion.css",
  });
});

app.get("/register", (req, res) => {
  res.render("auth/register", {
    style: "register.css",
  });
});

app.get("/login", (req, res) => {
  res.render("auth/login", {
    style: "login.css",
  });
}); 

app.get("/videos_adultos", (req, res) => {
  res.render("core/videos_adultos", {
    style: "videos_adultos.css",
  })
}) 
app.get("/editor_video", (req, res) => {
  res.render("core/editor_video", {
    style: "editor_video.css", 
  });
}); 
  
app.get("**", (req, res) => { 
  res.render("common/not-found");
}); 
 
//inicio servidor 
app.listen(port, () => console.log(`App listening to port ${port}`));

