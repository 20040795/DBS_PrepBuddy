import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Profile() {
  // TEMP USER ID (replace later with logged-in user ID)
  const userId = 1;

  const [user, setUser] = useState({
    name: "",
    email: "",
    resume: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch user profile data from backend (Day C)
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/profile/${userId}`)
      .then((res) => setUser(res.data))
      .catch(() => {});
  }, []);

  // Handle Resume Upload
  const handleResumeUpload = (e) => {
    setResumeFile(e.target.files[0]);
    setMessage("");
    setErrorMsg("");
  };

  // Save profile
  const handleSave = async () => {
    try {
      let resumePath = user.resume;

      // Upload resume only if a new file is selected
      if (resumeFile) {
        const formData = new FormData();
        formData.append("resume", resumeFile);

        const uploadRes = await axios.post(
          `http://localhost:5000/api/profile/resume/${userId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        resumePath = uploadRes.data.resume;
      }

      setUser({ ...user, resume: resumePath });
      setMessage("Profile Updated Successfully ✔");
      setErrorMsg("");
    } catch (error) {
      console.log(error);
      setErrorMsg("Failed to upload resume ❌");
    }
  };

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: 500, p: 3, boxShadow: 4 }}>
          <Typography
            variant="h4"
            sx={{ mb: 3, fontWeight: "bold", color: "#003366" }}
          >
            User Profile
          </Typography>

          <CardContent>
            {message && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {message}
              </Alert>
            )}
            {errorMsg && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMsg}
              </Alert>
            )}

            <TextField
              label="Name"
              fullWidth
              sx={{ mb: 2 }}
              value={user.name}
              onChange={(e) =>
                setUser({ ...user, name: e.target.value })
              }
            />

            <TextField
              label="Email"
              fullWidth
              sx={{ mb: 2 }}
              value={user.email}
              disabled
            />

            <Typography sx={{ mt: 3, mb: 1, fontWeight: "bold" }}>
              Upload Resume (PDF)
            </Typography>

            <input
              type="file"
              accept="application/pdf"
              onChange={handleResumeUpload}
              style={{ marginBottom: "20px" }}
            />

            {resumeFile && (
              <Typography sx={{ mb: 1 }}>
                Selected: {resumeFile.name}
              </Typography>
            )}

            {/* VIEW RESUME BUTTON */}
            {user.resume && (
              <Button
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                onClick={() =>
                  window.open(
                    `http://localhost:5000/${user.resume}`,
                    "_blank"
                  )
                }
              >
                View Uploaded Resume
              </Button>
            )}

            <Button
              variant="contained"
              fullWidth
              sx={{ bgcolor: "#003366" }}
              onClick={handleSave}
            >
              Save Profile
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
