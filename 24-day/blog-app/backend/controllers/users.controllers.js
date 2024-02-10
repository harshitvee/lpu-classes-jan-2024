const User = require("../models/User.model");
async function signupUser(req, res) {
  const { email, password } = req.body;

  //   --------
  try {
    // document : row

    const user = await User.signup(email, password);
    res.status(201).json({ email: user.email, id: user._id });
  } catch (error) {
    res.status(400).json(error.message);
  }
}
module.exports = {
  signupUser,
};
