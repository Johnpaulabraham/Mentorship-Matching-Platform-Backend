import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// Database Connection
const connectDB = async () => {
	try {
		mongoose.connection.on("error", (error) => {
			console.error("MongoDB Connection error:", error);
		});

		const url = `${process.env.MONGODB_URL}/Mentorship-Platform`;
		await mongoose.connect(url);
		console.log("Database connected successfully");
	} catch (error) {
		console.log(error);
	}
};

export default connectDB;
