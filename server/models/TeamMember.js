import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String },
    image: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
    github: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("TeamMember", teamMemberSchema);
