const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
function createToken(id) {
  return jwt.sign({ _id: id }, process.env.SECRET);
}

async function signupUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    const token = createToken(user._id);

    res.status(201).json({ email, access_token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, access_token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
module.exports = {
  signupUser,
  loginUser,
};
