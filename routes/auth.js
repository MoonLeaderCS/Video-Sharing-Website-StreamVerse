// import mongoose from "mongoose";
import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router();

// CREATE A NEW USER
router.post("signup", signup);

// SIGN IN A USER
// router.post("/signin", signin);

// GOOGLE AUTH
// router.post("/google", google); 

export default router ;