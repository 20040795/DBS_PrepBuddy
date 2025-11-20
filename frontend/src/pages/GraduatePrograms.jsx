import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import Navbar from "../components/Navbar";

export default function GraduatePrograms() {
  const programs = [
    {
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      role: "Software Engineer Graduate Program",
      link: "https://careers.google.com/jobs/results/",
    },
    {
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      role: "Graduate Software Developer",
      link: "https://www.amazon.jobs/en/",
    },
    {
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      role: "Explore Microsoft / SWE Graduate",
      link: "https://careers.microsoft.com/students/us/en",
    },
    {
      company: "Deloitte",
      logo: "https://logotyp.us/file/deloitte.svg",
      role: "Technology Analyst Graduate Program",
      link: "https://www2.deloitte.com/global/en/careers",
    },
    {
      company: "PwC",
      logo: "https://www.pngall.com/wp-content/uploads/15/PWC-Logo-PNG-Image.png",
      role: "Graduate Technology Consultant",
      link: "https://www.pwc.com/gx/en/careers",
    },
    {
      company: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      role: "IBM Consulting Graduate Program",
      link: "https://www.ibm.com/careers",
    },
    {
      company: "Accenture",
      logo: "https://www.pngmart.com/files/23/Accenture-Logo-PNG-HD.png",
      role: "Analyst / Technology Graduate Program",
      link: "https://www.accenture.com/ie-en/careers",
    },
  ];

  return (
    <>
      <Navbar />

      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold", color: "#003366" }}
        >
          Graduate Programs
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Explore top graduate roles available for students across Ireland and worldwide.
        </Typography>

        <Grid container spacing={3}>
          {programs.map((p) => (
            <Grid item key={p.company}>
              <Card
                sx={{
                  p: 2,
                  width: 300,
                  height: 260,
                  boxShadow: 3,
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <img
                      src={p.logo}
                      alt={p.company}
                      style={{ width: "70px", height: "auto", marginBottom: "10px" }}
                    />
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 600, textAlign: "center" }}>
                    {p.company}
                  </Typography>

                  <Typography sx={{ mt: 1, mb: 2, textAlign: "center" }}>
                    {p.role}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ bgcolor: "#003366", ":hover": { bgcolor: "#002244" } }}
                    onClick={() => window.open(p.link, "_blank")}
                  >
                    Apply
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
