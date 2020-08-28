export default (req, res) => {
  res.statusCode = 200;
  res.json([{ title: "First post" }, { title: "Second post" }]);
};
