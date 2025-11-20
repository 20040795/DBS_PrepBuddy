import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import Navbar from "../components/Navbar";

export default function CompanyDetails() {
  const { companySlug } = useParams();

  // COMPANY LOGOS FROM INTERNET (NO DOWNLOADS)
  const companyData = {
    google: {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      rounds: [
        "Online Assessment",
        "Technical Round 1",
        "Technical Round 2",
        "HR Round",
      ],
      questions: [
        "Explain OOPs concepts.",
        "What is a deadlock in OS?",
        "Reverse a linked list.",
        "SQL: Write a query to find the second highest salary.",
      ],
    },
    amazon: {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      rounds: [
        "Aptitude Test",
        "Technical Interview",
        "Managerial Round",
        "HR Round",
      ],
      questions: [
        "Explain polymorphism.",
        "Difference between process & thread.",
        "Find missing number in array.",
        "What are Amazon Leadership Principles?",
      ],
    },
    microsoft: {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      rounds: ["MCQ Test", "System Design", "Technical", "HR Interview"],
      questions: [
        "Design a URL shortener.",
        "What is garbage collection?",
        "Implement binary search.",
        "Explain ACID properties.",
      ],
    },
    deloitte: {
      name: "Deloitte",
      logo: "https://logotyp.us/file/deloitte.svg",
      rounds: ["Communication Test", "Case Study", "Technical Interview"],
      questions: [
        "What is SDLC?",
        "Explain Agile.",
        "SQL joins explained.",
        "Tell me about a challenging project.",
      ],
    },

    ibm: {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      rounds: ["Cognitive Ability", "Technical Interview", "HR Discussion"],
      questions: [
        "Cloud vs On-premise?",
        "Normalize a database.",
        "What is recursion?",
        "Explain API testing.",
      ],
    },
  };

  const company = companyData[companySlug];

  if (!company) {
    return (
      <>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h4">Company Not Found</Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Box sx={{ p: 4 }}>
        {/* Company Heading */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <img
            src={company.logo}
            alt={company.name}
            style={{ width: "60px", marginRight: "20px" }}
          />
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#003366" }}
          >
            {company.name} Interview Process
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Interview Rounds */}
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Interview Rounds
        </Typography>

        <Grid container spacing={2}>
          {company.rounds.map((round, index) => (
            <Grid item key={index}>
              <Card sx={{ p: 2, width: 250, boxShadow: 3 }}>
                <CardContent>
                  <Typography sx={{ fontWeight: 600 }}>{round}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Common Interview Questions */}
        <Typography
          variant="h5"
          sx={{ mt: 5, mb: 2, fontWeight: "bold", color: "#003366" }}
        >
          Common Interview Questions
        </Typography>

        <Box sx={{ ml: 2 }}>
          {company.questions.map((q, i) => (
            <Typography key={i} sx={{ mb: 1 }}>
              • {q}
            </Typography>
          ))}
        </Box>

        {/* Student Experiences */}
        <Typography
          variant="h5"
          sx={{ mt: 5, mb: 2, fontWeight: "bold", color: "#003366" }}
        >
          Student Interview Experiences
        </Typography>

        <Card sx={{ p: 2, boxShadow: 3 }}>
          <Typography sx={{ fontWeight: 600 }}>
            ⭐ Example Experience:
          </Typography>
          <Typography sx={{ mt: 1 }}>
            “The technical interview focused on data structures, OOPs, and SQL.
            The interviewer was friendly and asked real-life problem scenarios.”
          </Typography>
        </Card>
      </Box>
    </>
  );
}
