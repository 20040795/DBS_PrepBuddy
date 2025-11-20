import { Card, CardContent, Typography } from "@mui/material";

export default function StatsCard({ title, value }) {
  return (
    <Card sx={{ p: 2, minWidth: 200, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ mt: 1, color: "#003366" }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
