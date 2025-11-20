import { Box, Typography, Grid, Card } from "@mui/material";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const token = localStorage.getItem("token");
if (!token) {
  navigate("/");
  return null;
}

  const navigate = useNavigate();

  // Company list with online logo URLs (NO DOWNLOADS NEEDED)
  const companies = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Deloitte",
      logo: "https://logotyp.us/file/deloitte.svg",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Accenture",
      logo: "https://www.pngmart.com/files/23/Accenture-Logo-PNG-HD.png",
    },
    {
      name: "PwC",
      logo: "https://www.pngall.com/wp-content/uploads/15/PWC-Logo-PNG-Image.png",
    },
  ];

  return (
    <>
      <Navbar />

      <Box sx={{ p: 4 }}>
        {/* Welcome Heading */}
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold", color: "#003366" }}
        >
          Welcome, Student!
        </Typography>

        {/* Stats Section */}
        <Grid container spacing={3}>
          <Grid item>
            <StatsCard title="Companies Viewed" value="12" />
          </Grid>
          <Grid item>
            <StatsCard title="Coding Problems Solved" value="35" />
          </Grid>
          <Grid item>
            <StatsCard title="Experiences Submitted" value="5" />
          </Grid>
        </Grid>

        {/* Companies Section */}
        <Typography
          variant="h5"
          sx={{ mt: 5, mb: 2, fontWeight: "bold", color: "#003366" }}
        >
          Companies
        </Typography>

        <Grid container spacing={3}>
          {companies.map((c) => (
            <Grid item key={c.name}>
              <Card
                sx={{
                  p: 2,
                  width: 160,
                  textAlign: "center",
                  boxShadow: 3,
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "0.3s",
                  ":hover": { transform: "scale(1.05)" },
                }}
                onClick={() => navigate(`/companies/${c.name.toLowerCase()}`)}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  style={{
                    width: "60px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                />
                <Typography sx={{ fontWeight: 600 }}>{c.name}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Quick Actions */}
        <Typography
          variant="h5"
          sx={{ mt: 5, mb: 2, fontWeight: "bold", color: "#003366" }}
        >
          Quick Actions
        </Typography>

        <Grid container spacing={3}>
          {/* Add Experience */}
          <Grid item>
            <Card
              sx={{
                p: 2,
                width: 200,
                textAlign: "center",
                bgcolor: "#e3f2fd",
                boxShadow: 2,
                borderRadius: 2,
                cursor: "pointer",
                transition: "0.3s",
                ":hover": { boxShadow: 5, transform: "scale(1.03)" },
              }}
              onClick={() => navigate("/add-experience")}
            >
              <Typography sx={{ fontWeight: 600 }}>Add Experience</Typography>
            </Card>
          </Grid>

          {/* Forum */}
          <Grid item>
            <Card
              sx={{
                p: 2,
                width: 200,
                textAlign: "center",
                bgcolor: "#e8f5e9",
                boxShadow: 2,
                borderRadius: 2,
                cursor: "pointer",
                transition: "0.3s",
                ":hover": { boxShadow: 5, transform: "scale(1.03)" },
              }}
              onClick={() => navigate("/forum")}
            >
              <Typography sx={{ fontWeight: 600 }}>Join Forum</Typography>
            </Card>
          </Grid>

          {/* Graduate Programs */}
          <Grid item>
            <Card
              sx={{
                p: 2,
                width: 200,
                textAlign: "center",
                bgcolor: "#fff3e0",
                boxShadow: 2,
                borderRadius: 2,
                cursor: "pointer",
                transition: "0.3s",
                ":hover": { boxShadow: 5, transform: "scale(1.03)" },
              }}
              onClick={() => navigate("/graduates")}
            >
              <Typography sx={{ fontWeight: 600 }}>Graduate Programs</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
