import express from "express"
import { register } from "../controllers/authentication.js";

const router = express.Router();


router.post("/", register)

export default router