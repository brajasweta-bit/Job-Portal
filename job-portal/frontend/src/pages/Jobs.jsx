import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import images from "../config/images";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data.jobs || []);
    } catch (err) {
      console.log(err);
      alert("Cannot load jobs");
    }
  };

  const applyJob = async (jobId) => {
    try {
      await API.post("/applications", { jobId });
      alert("Applied successfully");
    } catch {
      alert("Already applied or failed");
    }
  };

  return (
    <div className="container">

      <h1 className="page-title">🔥 Find Your Dream Job</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px"
        }}
      >

        {jobs.map((job, index) => (
          <div key={job._id} className="card">

            {/* IMAGE SLIDES (IMPORTANT PART) */}
            <img
              src={
                index % 3 === 0
                  ? images.job1
                  : index % 3 === 1
                  ? images.job2
                  : images.job3
              }
              alt="job"
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "12px"
              }}
            />

            <h3>{job.title}</h3>

            <p>🏢 {job.company}</p>
            <p>📍 {job.location}</p>
            <p>💰 {job.salary}</p>

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button
                className="btn-primary"
                onClick={() => navigate(`/jobs/${job._id}`)}
              >
                View
              </button>

              <button
                className="btn-success"
                onClick={() => applyJob(job._id)}
              >
                Apply
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Jobs;