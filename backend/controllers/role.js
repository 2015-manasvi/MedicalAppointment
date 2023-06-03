const RolesModel = require("../models/Roles");

const getRoles = async (req, res) => {
  try {
    const roles = await RolesModel.findOne();

    res.json(roles.role);
  } catch (error) {
    console.log(error.message);
    res.json({ status: "ok", msg: "cannot get roles" });
  }
};
module.exports = getRoles;
