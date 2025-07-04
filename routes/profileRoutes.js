import express from "express";
import { getUserData, editUserProfile } from "../controller/profile.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const profileRoutes = express.Router();

profileRoutes.get("/getUserData/:id", authMiddleware, getUserData);
profileRoutes.put("/editUserProfile/:id", authMiddleware, editUserProfile);

export default profileRoutes;
