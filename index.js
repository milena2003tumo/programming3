var express = require("express");
var app = express();

app.use(express.static("game"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(7000, function(){
   console.log("Example is running on port 7000");
});
