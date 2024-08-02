import express from "express"
import { protectRoute } from "../middlewares/protectRoute.js";
import { followUnfollowUser, getSuggesteedUsers, getUserProfile, updateUser } from "../controllers/user.controller.js";
const router = express.Router();
router.get("/profile/:username",protectRoute, getUserProfile);
router.get("/suggested",protectRoute, getSuggesteedUsers);
router.post("/follow/:id",protectRoute, followUnfollowUser);
router.post("/update",protectRoute ,updateUser);



export default router;