import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser)
router.get("/", (req, res) => {
    res.json({ message: "Users route working 🚀" });
});

export default router