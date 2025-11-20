import multer from "multer";
import { User } from "../models/User.js";

// --- MULTER STORAGE ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    const uniqueName = "resume-" + Date.now() + ".pdf";
    cb(null, uniqueName);
  },
});

// Accept only PDF
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(new Error("Only PDFs allowed"));
  },
});

// --- UPLOAD RESUME FUNCTION ---
export const uploadResume = async (req, res) => {
  try {
    const userId = req.params.id;  
    const resumePath = req.file.path;

    await User.update({ resume: resumePath }, { where: { id: userId } });

    res.json({ message: "Resume uploaded successfully", resume: resumePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export multer middleware
export const resumeUploadMiddleware = upload.single("resume");
