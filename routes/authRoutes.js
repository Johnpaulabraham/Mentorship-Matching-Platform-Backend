import { register, login, logout, getUserData } from "../controller/Auth.js";
import express from "express";

const authRoutes = express.Router();

// User Registration Route
authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.get("/logout", getUserData);

export default authRoutes;
