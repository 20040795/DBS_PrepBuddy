import dbsLogo from "/dbs.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export default function Login() {
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
 <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <img 
    src={dbsLogo} 
    alt="DBS Logo" 
    style={{ width: "90px" }}
  />
  <Typography variant="h5" sx={{ color: "#003366", fontWeight: "bold" }}>
    DBS Interview Portal
  </Typography>
</div>



          <TextField
            label="Email"
            type="email"
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#003366",
              ":hover": { bgcolor: "#002244" },
              py: 1,
            }}
          >
            Login
          </Button>

          <Typography sx={{ textAlign: "center", mt: 2, fontSize: "14px" }}>
            Forgot password?
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
