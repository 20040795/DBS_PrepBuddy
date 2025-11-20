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

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMsg("Please fill all fields");
      return;
    }

    try {
      const result = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save token
      localStorage.setItem("token", result.data.token);
      setErrorMsg("");

      // Redirect to dashboard
      navigate("/dashboard");

    } catch (err) {
      if (err.response) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg("Something went wrong. Try again.");
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
      <Card sx={{ width: 400, p: 2, boxShadow: 4 }}>
        <CardContent>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img src={dbsLogo} alt="DBS Logo" style={{ width: "70px" }} />
          </div>

          <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", textAlign: "center", color: "#003366" }}>
            DBS Interview Portal
          </Typography>

          {errorMsg && (
            <Typography sx={{ color: "red", mb: 2, textAlign: "center" }}>
              {errorMsg}
            </Typography>
          )}

          <TextField
            label="Email"
            fullWidth
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{ mb: 3 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: "#003366" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
