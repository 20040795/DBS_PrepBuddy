import { Box, Grid, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Companies() {
  const navigate = useNavigate();

  const companies = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      slug: "google",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      slug: "amazon",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      slug: "microsoft",
    },
    {
      name: "Deloitte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Deloitte_logo.svg",
      slug: "deloitte",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      slug: "ibm",
    },
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Accenture.svg",
      slug: "accenture",
    },
    {
      name: "PwC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/PwC_logo.svg",
      slug: "pwc",
    },
  ];

  return (
    <>
      <Navbar />

      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: "#003366", fontWeight: "bold" }}>
          All Companies
        </Typography>

        <Grid container spacing={3}>
          {companies.map((company) => (
            <Grid item key={company.name}>
              <Card
                onClick={() => navigate(`/companies/${company.slug}`)}
                sx={{
                  p: 2,
                  width: 180,
                  height: 180,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow: 3,
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "0.3s",
                  ":hover": { transform: "scale(1.05)" },
                }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{
                    width: "60px",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                />
                <Typography sx={{ fontWeight: 600 }}>{company.name}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
