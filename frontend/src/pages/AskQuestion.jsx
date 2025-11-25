import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function AskQuestion() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = () => {
    if (!title || !desc) {
      alert("Please fill in both fields.");
      return;
    }

    alert("Your question has been submitted! (Backend will save this later)");

    // reset form
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <Navbar />

      <Box sx={{ p: 4 }}>
        <Card sx={{ p: 4, boxShadow: 3 }}>
          <Typography
            variant="h4"
            sx={{ mb: 3, fontWeight: "bold", color: "#003366" }}
          >
            Ask a Question
          </Typography>

          <CardContent>
            
            <TextField
              label="Question Title"
              fullWidth
              sx={{ mb: 3 }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
              label="Describe your question"
              fullWidth
              multiline
              rows={4}
              sx={{ mb: 3 }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            {/* Submit Button */}
            <Button
              variant="contained"
              sx={{ bgcolor: "#003366" }}
              onClick={handleSubmit}
            >
              Submit Question
            </Button>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
