export default (req, res) => {
  console.log(req.headers.authorization);
  res.statusCode = 200;
  res.json([{ title: "First post" }, { title: "Second post" }]);
};
