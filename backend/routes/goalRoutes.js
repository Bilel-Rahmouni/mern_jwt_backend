const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");
//create
// router.get("/", (req, res) => {
//   //res.send("get goals");
//   res.json({ message: "Get goals" });
// });
router.get("/", protect, getGoals);
//read
router.post("/", protect, setGoals);
//update
router.put("/:id", protect, updateGoal);
//delete
router.delete("/:id", protect, deleteGoal);

module.exports = router;
