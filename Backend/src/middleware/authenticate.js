// import jwt from "jsonwebtoken";
// import UserModel from "../../../DB/models/User.model.js";

// export const authenticate = async (req, res, next) => {
//   const token = req.header("Authorization").replace("Bearer ", "");

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await UserModel.findOne({ _id: decoded._id });

//     if (!user) {
//       throw new Error();
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Please authenticate" });
//   }
// };

// import jwt from "jsonwebtoken";
// import UserModel from "../../DB/models/User.model.js";

// export const authenticate = async (req, res, next) => {
//   const token = req
//     .header("Authorization")
//     .replace(`Bearer ${process.env.JWT_SECRET}`, "");

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use the secret from the environment variable
//     const user = await UserModel.findOne({ _id: decoded._id });

//     if (!user) {
//       throw new Error();
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Please authenticate" });
//   }
// };


// import jwt from "jsonwebtoken";
// import UserModel from "../../DB/models/User.model.js"; // Adjust the path to your User model

// export const authenticate = async (req, res, next) => {
//     const authHeader = req.header("Authorization");
//     console.log("auth header:", authHeader);

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   const token = authHeader.replace(`Bearer ${process.env.JWT_SECRET}`, "");

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await UserModel.findOne({ _id: decoded.userId });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token", error: error.message });
//   }
// };

import jwt from "jsonwebtoken";
import UserModel from "../../DB/models/User.model.js"; // Adjust the path to your User model

export const authenticate = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  console.log("authHeader:", authHeader); // Log the auth header for debugging

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.replace("Bearer ", "");
  console.log("token:", token); // Log the extracted token for debugging

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded:", decoded); // Log the decoded token for debugging

    const user = await UserModel.findOne({ _id: decoded.userId });
    console.log("user:", user); // Log the user for debugging

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("error:", error); // Log the error for debugging
    res.status(401).json({ message: "Invalid token", error: error.message });
  }
};