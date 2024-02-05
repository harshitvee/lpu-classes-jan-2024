function getAllGuitars(req, res) {
  res.json("Hello from guitars route");
}
function getSingleGuitar(req, res) {
  const id = req.params.id;
  res.json(`Trying to get guitar with id ${id}`);
}
module.exports = { getAllGuitars, getSingleGuitar };
