import { Box, Typography, Card, CardContent, TextField, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AddExperience() {
  const companies = ["Google","Amazon","Microsoft","Deloitte","IBM","Accenture","PwC"];
  const difficulties = ["Easy","Medium","Hard"];

  const [formData, setFormData] = useState({
    company:"", role:"", difficulty:"", rounds:"", codingQuestions:"", hrQuestions:"", tips:""
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!formData.company || !formData.role || !formData.difficulty) {
      alert("Please fill at least company, role and difficulty."); return;
    }
    alert("Interview experience submitted! (Backend will be connected later)");
    setFormData({ company:"", role:"", difficulty:"", rounds:"", codingQuestions:"", hrQuestions:"", tips:"" });
  };

  return (
    <>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Card sx={{ p: 4, boxShadow: 3 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "#003366" }}>
            Add Interview Experience
          </Typography>

          <CardContent>

            <TextField select label="Company Name" name="company" fullWidth sx={{ mb: 3 }}
              value={formData.company} onChange={handleChange}>
              {companies.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
            </TextField>

            <TextField label="Role" name="role" fullWidth sx={{ mb: 3 }}
              value={formData.role} onChange={handleChange} />

            <TextField select label="Difficulty" name="difficulty" fullWidth sx={{ mb: 3 }}
              value={formData.difficulty} onChange={handleChange}>
              {difficulties.map(d => <MenuItem key={d} value={d}>{d}</MenuItem>)}
            </TextField>

            <TextField label="Interview Rounds (Describe each round)" name="rounds"
              fullWidth multiline rows={3} sx={{ mb: 3 }}
              value={formData.rounds} onChange={handleChange} />

            <TextField label="Coding Questions Asked" name="codingQuestions"
              fullWidth multiline rows={3} sx={{ mb: 3 }}
              value={formData.codingQuestions} onChange={handleChange} />

            <TextField label="HR Questions Asked" name="hrQuestions"
              fullWidth multiline rows={3} sx={{ mb: 3 }}
              value={formData.hrQuestions} onChange={handleChange} />

            <TextField label="Your Tips for Other Students" name="tips"
              fullWidth multiline rows={3} sx={{ mb: 3 }}
              value={formData.tips} onChange={handleChange} />

            <Button variant="contained" sx={{ bgcolor: "#003366", mt: 2 }} onClick={handleSubmit}>
              Submit Experience
            </Button>

          </CardContent>
        </Card>
      </Box>
    </>
  );
}
