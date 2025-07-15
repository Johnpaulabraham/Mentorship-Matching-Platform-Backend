import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/Mongodb.js";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const allowOrigin = [
	"https://mentorahub.vercel.app/",
	"http://http://localhost:5173/",
];
app.use(
	cors({
		origin: "",
		credentials: true,
		methods: ["GET", "PUT", "DELETE", "POST"],
		allowedHeaders: ["content-type", "Authorization"],
	})
);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// Connecting to Database
app.get("/", (req, res) => {
	res.json({ message: "Welcome to the Mentorship Matching Platform" });
});

connectDB();

app.listen(8000, () => {
	console.log("Server is running");
});
