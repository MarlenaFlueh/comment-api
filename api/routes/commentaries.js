const express = require("express");
const fs = require("fs")
const imgPath = "./../assets/test.jpg"

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
	console.log("IMG" + imgPath)
	const image = fs.readFileSync(imgPath)
	console.log(image)
  try {
    const result = await Commentary.create({
      comment: req.body.comment,
      image: image
    });
    res.json({
      message: "success created!",
      createdCommentaries: {
        comment: result.comment,
        image: result.image
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
