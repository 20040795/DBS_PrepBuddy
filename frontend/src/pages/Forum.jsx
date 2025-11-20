import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Forum() {
  const navigate = useNavigate();

  // Temporary sample data
  const posts = [
    {
      id: 1,
      title: "How to prepare for Aptitude Round?",
      description:
        "I am struggling with quantitative aptitude for Deloitte. Any tips?",
      author: "Aiswarya",
      replies: 4,
    },
    {
      id: 2,
      title: "Google OA: What topics are important?",
      description:
        "I have Google Online Assessment soon. What should I focus on?",
      author: "John",
      replies: 7,
    },
    {
      id: 3,
      title: "Deloitte Case Study Round",
      description:
        "Anyone attended it? What type of questions do they ask?",
      author: "Megha",
      replies: 2,
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
          Student Forum
        </Typography>

        {/* Ask Question Button */}
        <Card
          sx={{
            p: 3,
            mb: 4,
            bgcolor: "#e3f2fd",
            boxShadow: 3,
            borderRadius: 3,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Have a doubt?
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Ask questions and get answers from other DBS students.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: "#003366" }}
            onClick={() => navigate("/forum/ask")}
          >
            Ask a Question
          </Button>
        </Card>

        {/* Forum Posts */}
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <Card
                sx={{
                  p: 2,
                  boxShadow: 3,
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "0.3s",
                  ":hover": { transform: "scale(1.01)" },
                }}
                onClick={() => navigate(`/forum/${post.id}`)}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {post.title}
                  </Typography>

                  <Typography sx={{ mb: 1 }}>{post.description}</Typography>

                  <Typography sx={{ fontSize: "14px", color: "gray" }}>
                    Posted by: <b>{post.author}</b> • {post.replies} replies
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
