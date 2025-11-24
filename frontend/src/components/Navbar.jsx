import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import dbsLogo from "/dbs.png";
export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {localStorage.removeItem("token");   
  navigate("/");                    
  };
  return (
    <AppBar position="static" sx={{ bgcolor: "#003366" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        
        {}
        <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
          <img 
            src={dbsLogo}
            alt="DBS Logo"
            style={{ width: "40px", marginRight: "10px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            DBS Portal
          </Typography>
        </Box>
        {}
        <Box sx={{ display: "flex", gap: 3, ml: "auto", mr: 3 }}>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/companies">Companies</Button>
          <Button color="inherit" component={Link} to="/coding">Coding Practice</Button>
          <Button color="inherit" component={Link} to="/forum">Forum</Button>
          <Button color="inherit" component={Link} to="/graduates">Graduates</Button>
        </Box>
        {}
        <Button 
          variant="outlined" 
          sx={{ color: "white", borderColor: "white" }}
          onClick={handleLogout}
        >
          Logout
        </Button>

      </Toolbar>
    </AppBar>
  );
}
