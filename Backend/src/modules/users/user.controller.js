import UserModel from "../../../DB/models/User.model.js";
import jwt from "jsonwebtoken";

export const addUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.create({
      username,
      password,
    });

    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    if (error.errors.username)
      return res
        .status(400)
        .json({ message: "The Username field is required" });

    if (error.errors.password)
      return res
        .status(400)
        .json({ message: "The Password field is required" });

    return res
      .status(500)
      .json({ message: "Internal server error", error: `${error}` });
  }
};

export const findUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username, password });

    if (!user) {
      return res.status(404).json({ message: "Invalid Username or Password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", error: error });
  }
};
