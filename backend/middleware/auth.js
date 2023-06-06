const jwt = require("jsonwebtoken");

const userAuth = (req, res, next) => {
  if (!("authorization" in req.headers)) {
    return res.json(400).json({ status: "error", msg: "not token fouynd" });
  }
  const token = req.headers["authorization"].replace("Bearer ", "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      if (decoded.role === "user") {
        req.decoded = decoded;
        next();
      } else {
        throw new Error();
      }
    } catch (error) {
      return res.status(401).json({
        status: "error",
        msg: "unauthorised",
      });
    }
  } else {
    return res.status(403).send({ status: "error", msg: "missing token" });
  }
};

const doctorAuth = (req, res, next) => {
  if (!("authorization" in req.headers)) {
    return res.json(400).json({ status: "error", msg: "not token found" });
  }
  const token = req.headers["authorization"].replace("Bearer ", "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      if (decoded.role === "doctor") {
        req.decoded = decoded;
        next();
      } else {
        throw new Error();
      }
    } catch (error) {
      return res.status(401).json({
        status: "error",
        msg: "unauthorised",
      });
    }
  } else {
    return res.status(403).send({ status: "error", msg: "missing token" });
  }
};

module.exports = { userAuth, doctorAuth };
// todo : export userAuth and doctorAuth after separating the two
