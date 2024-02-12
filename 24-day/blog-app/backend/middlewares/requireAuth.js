const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
async function requireAuth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Auth token missing" });
  }
  // "Bearer kjfldkjlkfdlkjdf"
  const [bearerString, token] = authorization.split(" ");
  if (bearerString !== "Bearer") {
    return res.status(401).json({ error: "Bearer tokken missing" });
  }
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({ error: "You are not authorized." });
  }
}
module.exports = requireAuth;
