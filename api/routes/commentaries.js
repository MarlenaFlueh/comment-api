const express = require("express");
require("dotenv").config();

const Commentary = require("../model/commentary");

const router = express.Router();

router.delete("/", async (req, res, next) => {
  try {
    const commentaries = await Commentary.remove();
    res.json(commentaries);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/", async (req, res) => {
  try {
    const commentaries = await Commentary.find({});
    res.json(commentaries);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await Commentary.create({ comment: req.body.comment });
    res.json({
      message: "success created!",
      createdCommentaries: {
        comment: result.comment
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
