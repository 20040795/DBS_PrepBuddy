import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ForumDiscussion() {
  const { id } = useParams();

  // Temporary sample data  
  const samplePosts = {
    1: {
      title: "How to prepare for Aptitude Round?",
      description:
        "I am struggling with quantitative aptitude for Deloitte. Any tips?",
      author: "Aiswarya",
      replies: [
        "Practice IndiaBix daily, it helps.",
        "Focus on percentages, ratios, and probability.",
      ],
    },
    2: {
      title: "Google OA: What topics are important?",
      description:
        "I have Google Online Assessment soon. What should I focus on?",
      author: "John",
      replies: ["Array problems", "Sliding window", "Hashmaps"],
    },
    3: {
      title: "Deloitte Case Study Round",
      description:
        "Anyone attended it? What type of questions do they ask?",
      author: "Megha",
      replies: ["Focus on communication", "They check critical thinking"],
    },
  };

  const post = samplePosts[id];
  const [reply, setReply] = useState("");

  const handleAddReply = () => {
    if (reply.trim() === "") return;
    post.replies.push(reply);
    setReply("");
  };

  return (
    <>
      <Navbar />

      <Box sx={{ p: 4 }}>
        {/* Main Post */}
        <Card sx={{ p: 3, boxShadow: 3, mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {post.title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{post.description}</Typography>
          <Typography sx={{ mt: 1, fontSize: "14px", color: "gray" }}>
            Posted by: {post.author}
          </Typography>
        </Card>

        {/* Replies */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 2, color: "#003366" }}
        >
          Replies
        </Typography>

        {post.replies.map((r, idx) => (
          <Card key={idx} sx={{ p: 2, mb: 2, boxShadow: 2 }}>
            {r}
          </Card>
        ))}

        {/* Add Reply */}
        <Card sx={{ p: 3, mt: 3, boxShadow: 3 }}>
          <Typography sx={{ fontWeight: "bold", mb: 2 }}>
            Add a Reply
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Write your reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            sx={{ bgcolor: "#003366" }}
            onClick={handleAddReply}
          >
            Submit Reply
          </Button>
        </Card>
      </Box>
    </>
  );
}
