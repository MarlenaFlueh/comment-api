const express = require("express");
require("dotenv").config();
const Twit = require("twit");

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
    const oldCommentary = await Commentary.find();
    if (oldCommentary.length > 5) {
      await Commentary.findByIdAndRemove(oldCommentary[0]._id);
    }
    res.json({
      message: "success created!",
      createdCommentaries: {
        comment: result.comment
      }
    });
    T.post(
      "statuses/update",
      {
        status: `${tweeds(result.comment)[Math.round(Math.random() * 10)]}`
      },
      (error, data, response) => {
        console.log(data);
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
