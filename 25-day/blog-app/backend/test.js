const jwt = require("jsonwebtoken");
const id = "65c70b7ce02df72bb2932dc5";
const secret = "jfkhjsdguiweyruiywerbvhjk";
console.log(jwt.sign({ _id: id }, secret));
