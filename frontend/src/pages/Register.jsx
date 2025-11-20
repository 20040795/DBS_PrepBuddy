import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dbsLogo from "/dbs.png";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);

      // Auto-login after registration
      const loginRes = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", loginRes.data.token);

      navigate("/dashboard");
      
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Card sx={{ width: 430, p: 2, boxShadow: 4 }}>
        <CardContent>

          {/* Logo */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img src={dbsLogo} alt="DBS Logo" style={{ width: "70px" }} />
          </div>

          <Typography variant="h5" sx={{ mb: 3, textAlign: "center", fontWeight: "bold", color: "#003366" }}>
            Create an Account
          </Typography>

          {error && (
            <Typography sx={{ color: "red", mb: 1, textAlign: "center" }}>
              {error}
            </Typography>
          )}

          <TextField
            label="Full Name"
            name="name"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            sx={{ mb: 2 }}
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            fullWidth
            sx={{ mb: 3 }}
            value={formData.password}
            onChange={handleChange}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#003366", mb: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>

          <Typography
            sx={{ textAlign: "center", cursor: "pointer", color: "#003366" }}
            onClick={() => navigate("/")}
          >
            Already have an account? Login
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
}
