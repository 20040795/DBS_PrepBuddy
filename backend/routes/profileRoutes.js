import express from "express";
import { uploadResume, resumeUploadMiddleware } from "../controllers/profileController.js";

const router = express.Router();

router.post("/resume/:id", resumeUploadMiddleware, uploadResume);

export default router;
