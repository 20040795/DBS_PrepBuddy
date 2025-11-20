import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Aiswarya",
    email: "aiswarya@example.com",
  });

  const [resumeFile, setResumeFile] = useState(null);

  const handleResumeUpload = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSave = () => {
    alert("Profile Updated (Backend connection will be added)");
  };

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Card sx={{ width: 500, p: 3, boxShadow: 3 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "#003366" }}>
            User Profile
          </Typography>

          <CardContent>
            <TextField
              label="Name"
              fullWidth
              sx={{ mb: 2 }}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />

            <TextField
              label="Email"
              fullWidth
              sx={{ mb: 2 }}
              value={user.email}
              disabled
            />

            {/* Resume Upload */}
            <Typography sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
              Upload Resume (PDF)
            </Typography>

            <input
              type="file"
              accept="application/pdf"
              onChange={handleResumeUpload}
              style={{ marginBottom: "20px" }}
            />

            {resumeFile && (
              <Typography sx={{ mb: 2 }}>
                Selected: {resumeFile.name}
              </Typography>
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
