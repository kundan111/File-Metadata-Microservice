
// requiring all modules
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var multer =  require("multer");
var upload = multer({ dest: 'uploads/' });


//instantiating ..
var app = express();


//using the required module
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.post('/upload', upload.single('file'), function (req, res, next) {
return res.json(req.file);
});





//listening to the port
app.listen("3000",function(err){
  if(err){
    console.log("Error!!");
    }
    else{
      console.log("Connected to the port 3000!");
    }
});
