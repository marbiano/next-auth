export default (req, res) => {
  if (req.headers.authorization === "Bearer testing123") {
    res.statusCode = 200;
    res.json([{ title: "First post" }, { title: "Second post" }]);
  } else {
    res.statusCode = 403;
    res.json({ error: "Forbidden" });
  }
};
