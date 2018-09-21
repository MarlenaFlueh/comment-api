const mongoose = require("mongoose");

const commentarySchema = mongoose.Schema(
  {
    comment: { type: String, required: true },
    color: { type: Number }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Commentary", commentarySchema);
