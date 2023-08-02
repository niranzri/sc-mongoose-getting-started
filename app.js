const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();


// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// ROUTES
app.get('/', (req, res) => {
  console.log(req);
});
 

// START SERVER
app.listen(3000, () => console.log("App listening on port 3000!"));