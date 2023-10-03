import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema(
  {
    title: String,
    scholarshiphours: String,
    datetime: String,
    location: String,
    details: String,
    qualifcation: String,
    contacts: String

  },
  { strict: false }
);

module.exports = mongoose.models.work || mongoose.model("work", WorkSchema);
