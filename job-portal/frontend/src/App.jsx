import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import CreateJob from "./pages/CreateJob";
import Apply from "./pages/Apply";
import MyApplications from "./pages/MyApplications";
import EmployerDashboard from "./pages/EmployerDashboard";
import JobDetails from "./pages/JobDetails";
import Applicants from "./pages/Applicants";

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/apply/:id" element={<Apply />} />
          <Route path="/my-applications" element={<MyApplications />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route
  path="/applicants/:jobId"
  element={<Applicants />}
/>
        </Routes>
      </div>
    </div>
  );
}

export default App;