import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import CodingPractice from "./pages/CodingPractice";
import Forum from "./pages/Forum";
import ForumDiscussion from "./pages/ForumDiscussion";
import AskQuestion from "./pages/AskQuestion";
import GraduatePrograms from "./pages/GraduatePrograms";
import AddExperience from "./pages/AddExperience";
import Register from "./pages/Register";



import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:companySlug" element={<CompanyDetails />} />
        <Route path="/coding" element={<CodingPractice />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:id" element={<ForumDiscussion />} />
        <Route path="/forum/ask" element={<AskQuestion />} />
        <Route path="/graduates" element={<GraduatePrograms />} />
        <Route path="/add-experience" element={<AddExperience />} />
        <Route path="/register" element={<Register />} />





      </Routes>
    </BrowserRouter>
  );
}
