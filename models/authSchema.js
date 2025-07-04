import mongoose from "mongoose";
const authSchema = new mongoose.Schema(
	{
		name: { type: String, require: true },
		email: { type: String, require: true, unique: true },
		password: { type: String, require: true, unique: true },
		role: {
			type: String,
			require: true,
			unique: "email",
			enum: ["admin", "mentor", "mentee"],
			default: "mentee",
		},
	},
	{ timestamps: true },
	{ minimize: false }
);
const authModel = mongoose.model.users || mongoose.model("users", authSchema);

export default authModel;
