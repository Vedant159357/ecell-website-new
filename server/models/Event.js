import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    shortDescription: { type: String },
    banner: { type: String }, // image URL
    date: { type: Date },
    price: { type: Number, default: 0 },
    isUpcoming: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
