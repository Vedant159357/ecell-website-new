import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String },
    department: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Faculty", facultySchema);
