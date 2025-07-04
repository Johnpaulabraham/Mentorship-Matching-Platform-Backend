import jwt from "jsonwebtoken";
import authModel from "../models/authSchema.js";

const authMiddleware = async (req, res, next) => {
	try {
		const token = req.cookies?.token;
		if (!token) {
			return res
				.status(401)
				.json({ message: "Unauthorized access, no token found" });
		}

		let decodedToken;
		try {
			decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
		} catch (error) {
			console.log(error);
			return res
				.status(401)
				.json({ message: "Invalid token or token has expired" });
		}
		const user = await authModel.findById(decodedToken.id);
		if (!user) {
			return res
				.status(404)
				.json({ message: "User not found, please login again" });
		}
		req.user = user;

		next();
	} catch (error) {}
};

export { authMiddleware };
