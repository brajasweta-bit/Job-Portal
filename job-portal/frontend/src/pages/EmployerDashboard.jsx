import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import images from "../config/images";

function EmployerDashboard() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs/my");
      setJobs(res.data.jobs || []);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteJob = async (jobId) => {
    try {
      await API.delete(`/jobs/${jobId}`);

      setJobs((prev) =>
        prev.filter((job) => job._id !== jobId)
      );

      alert("Job deleted successfully");
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT */}
        <div style={{ flex: 2 }}>
          <h2 className="page-title">
            💼 Employer Dashboard
          </h2>

          {jobs.length === 0 ? (
            <div className="card">
              <h3>No Jobs Posted Yet</h3>
            </div>
          ) : (
            jobs.map((job) => (
              <div
                key={job._id}
                className="card"
                style={{ marginBottom: "15px" }}
              >
                <h3>{job.title}</h3>

                <p>🏢 {job.company}</p>
                <p>📍 {job.location}</p>
                <p>💰 {job.salary}</p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "15px",
                  }}
                >
                  <button
                    className="btn-primary"
                    onClick={() =>
                      navigate(`/applicants/${job._id}`)
                    }
                  >
                    View Applicants
                  </button>

                  <button
                    className="btn-danger"
                    onClick={() => deleteJob(job._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1 }}>
          <div
            className="card"
            style={{
              position: "sticky",
              top: "20px",
            }}
          >
            <img
              src={images.employer}
              alt="employer"
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "10px",
              }}
            />

            <h3>Welcome Employer 👋</h3>

            <p className="sub-text">
              Manage jobs, review applicants and
              grow your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerDashboard;