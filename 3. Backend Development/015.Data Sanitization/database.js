import dns from "node:dns";
import mongoose, { Schema } from "mongoose";
import "dotenv/config";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

await mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

const userSchema = new Schema({}, { strict: false });
export const User = mongoose.model("User", userSchema);
