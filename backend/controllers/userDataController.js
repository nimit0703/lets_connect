const UserData = require("../models/UserDataSchema");

const getUser = async (req, res) => {
  const { id } = req.body;
  const data = await UserData.findOne({ userId: id });
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

module.exports = {
  getUser,
};
