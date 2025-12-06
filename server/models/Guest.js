import mongoose from "mongoose";

const guestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String },
    image: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
    website: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Guest", guestSchema);
