const { Router } = require("express");
const userRoute = Router();
const { signup, login, getAllUser, getSearchedUsers } = require("../controllers/authControllers");

// Signup route
userRoute.post("/signup", signup);

// Login route
userRoute.post("/login", login);

// Get all user
userRoute.get("/user", getAllUser);

// Get search users
userRoute.get("/search", getSearchedUsers);

// userRoute.get("/router", (req, res) => {
//   res.status(200).json({
//     message: "User router",
//   });
// });

module.exports = userRoute;

