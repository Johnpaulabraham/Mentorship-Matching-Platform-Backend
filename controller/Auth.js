// User Authetication
import authModel from "../models/authSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
	const salt = 10;
	try {
		const { name, email, password, role } = req.body;
		if (!name || !email || !password || !role) {
			return res.status(400).json({ message: "All fields are required" });
		}

		// Checking if user already exist
		const userExist = await authModel.findOne({ email });
		if (userExist) {
			return res.status(400).json({ message: "User Already Exist" });
		}

		// Hashing User password
		const hashpassword = await bcrypt.hash(password, salt);

		// Creating User into the Database
		const user = new authModel({
			name,
			email,
			password: hashpassword,
			role,
		});

		// Saving a user to the Database
		await user.save();

		// Generating token for the frontend
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
			expiresIn: "3d",
		});
		res.cookie("token", token, {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
			maxAge: 3 * 24 * 60 * 1000, //3days
		});
		return res.status(201).json({
			message: "User Registered Successfully",
			user: { id: user._id, name, email, role },
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server Error" });
	}
};

// User Login Auth
const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res
				.status(400)
				.json({ message: "Email and Password are required" });
		}
		const user = await authModel.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "Invalid Credentials" });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid Credentials" });
		}
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
			expiresIn: "3d",
		});
		res.cookie("token", token, {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
			maxAge: 3 * 24 * 60 * 1000, //3days
		});
		return res.status(200).json({
			message: "Login Successfully",
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server error" });
	}
};

// User Logout Controller
// const logout = async (req, res) => {
// 	try {
// 		res.clearCookies("token", token, {
// 			httpOnly: true,
// 			secure: true,
// 			sameSite: "strict",
// 		});
// 		return res.status(200).json({
// 			message: "Logout Successfully",
// 		});
// 	} catch (error) {
// 		res.json({ message: "Server error" });
// 		console.log(error);
// 	}
// };
const logout = async (req, res) => {
	try {
		res.clearCookie("token", {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
		});
		return res.status(200).json({
			message: "Logout Successfully",
		});
	} catch (error) {
		res.json({ message: "Server error" });
		console.log(error);
	}
};

// Get users' data
const getUserData = async (req, res) => {
	try {
		const { id } = req.params;
		const userData = authModel.findById(id).select("-password");
		if (!userData) {
			return res.status(404).json({ message: "User not found" });
		}
		return res.status(200).json({ userData });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server error" });
	}
};

export { register, login, logout, getUserData };
