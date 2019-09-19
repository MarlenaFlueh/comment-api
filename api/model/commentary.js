const mongoose = require("mongoose");

const commentarySchema = mongoose.Schema(
  {
    comment: { type: String, required: true },
    image: { data: Buffer }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Commentary", commentarySchema);
