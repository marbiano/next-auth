export default (req, res) => {
  console.log(req.headers.authorization);
  if (req.headers.authorization === "Bearer testing123") {
    res.statusCode = 200;
    res.json({ firstName: "John", lastName: "Doe", email: "john@doe.com" });
  } else {
    res.statusCode = 403;
    res.json({ error: "Forbidden" });
  }
};
