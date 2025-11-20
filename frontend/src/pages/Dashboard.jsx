import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";

export default function Dashboard() {
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Deloitte_logo.svg",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Accenture.svg",
    },
    {
      name: "PwC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/PwC_logo.svg",
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
                ":hover": { boxShadow: 5 },
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>Add Experience</Typography>
            </Card>
          </Grid>

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
                ":hover": { boxShadow: 5 },
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>Join Forum</Typography>
            </Card>
          </Grid>

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
                ":hover": { boxShadow: 5 },
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>Graduate Programs</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
