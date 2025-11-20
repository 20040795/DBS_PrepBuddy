import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Navbar from "../components/Navbar";

export default function CompanyDetails() {
  const { companySlug } = useParams();

  return (
    <>
      <Navbar />

      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ color: "#003366", fontWeight: "bold" }}>
          {companySlug.toUpperCase()} Interview Details
        </Typography>

        <Typography sx={{ mt: 2 }}>
          {companySlug.toUpperCase()} 
        </Typography>
      </Box>
    </>
  );
}
