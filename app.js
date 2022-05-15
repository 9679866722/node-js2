let express = require("express");
let path = require("path");
let app = express();
let port = process.env.port || 8000;

//EXPRESS SPECIFIC STUFF
app.use("/static",express.static("static"));
app.use(express.urlencoded());


//PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set("views",path.join(__dirname,"views"));


//ENDPOINTS
app.get("/",(req ,res)=>{
    let params = { };
    res.status(200).render("index.pug",params);
  })
  

  app.get("/contact",(req ,res)=>{
    let params = { };
    res.status(200).render("contact.pug",params);
  })
  
  //START THE SERVER
 app.listen(port,()=>{
      console.log(`the application strted on port ${port}`);
  })
