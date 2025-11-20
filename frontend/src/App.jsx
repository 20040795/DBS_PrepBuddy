import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";

import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:companySlug" element={<CompanyDetails />} />


      </Routes>
    </BrowserRouter>
  );
}
