import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import dbsLogo from "/dbs.png";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#003366" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        
        {/* Left: DBS Logo */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
          <img 
            src={dbsLogo} 
            alt="DBS Logo" 
            style={{ width: "45px", marginRight: "10px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            DBS Portal
          </Typography>
        </Box>

        {/* Right: Navigation */}
        <Box sx={{ display: "flex", gap: 3, ml: "auto" }}>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/companies">Companies</Button>
          <Button color="inherit" component={Link} to="/coding">Coding Practice</Button>
          <Button color="inherit" component={Link} to="/forum">Forum</Button>
          <Button color="inherit" component={Link} to="/graduates">Graduate Programs</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
