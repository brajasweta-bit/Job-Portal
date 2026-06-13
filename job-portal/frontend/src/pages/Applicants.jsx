import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function Applicants() {
  const { jobId } = useParams();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      const res = await API.get(`/applications/job/${jobId}`);
      setApplications(res.data.applications || []);
    } catch (err) {
      console.log(err);
      alert("Failed to load applicants");
    }
  };

  return (
    <div className="container">

      {/* HEADER BANNER */}
      <div
        className="card"
        style={{
          marginBottom: "25px",
          background:
            "linear-gradient(135deg, #6366f1, #8b5cf6)",
          padding: "30px",
          borderRadius: "18px",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "32px",
            margin: "0 0 12px 0",
            lineHeight: "1.2",
          }}
        >
          👥 Job Applicants
        </h1>

        <p
          style={{
            color: "#ffffff",
            fontSize: "15px",
            lineHeight: "1.7",
            maxWidth: "700px",
            margin: "0",
            opacity: "0.95",
          }}
        >
          Review all candidates who applied for this position.
          Compare profiles, evaluate applications and identify
          the most suitable talent for your organization.
        </p>

        <div
          style={{
            marginTop: "18px",
            display: "inline-block",
            background: "rgba(255,255,255,0.18)",
            padding: "8px 18px",
            borderRadius: "30px",
            color: "#ffffff",
            fontWeight: "600",
          }}
        >
          Total Applicants: {applications.length}
        </div>
      </div>

      {/* NO APPLICANTS */}
      {applications.length === 0 ? (
        <div className="card">
          <h2>No Applicants Yet</h2>

          <p style={{ color: "#666" }}>
            Once candidates apply to this job,
            they will appear here.
          </p>
        </div>
      ) : (
        applications.map((app, index) => (
          <div
            key={app._id}
            className="card"
            style={{
              marginBottom: "18px",
              borderLeft: "5px solid #8b5cf6",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {/* LEFT */}
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    margin: 0,
                    color: "#6366f1",
                  }}
                >
                  Candidate #{index + 1}
                </h2>

                <h3
                  style={{
                    marginTop: "10px",
                    marginBottom: "8px",
                  }}
                >
                  👤 {app.applicant?.name || "Unknown"}
                </h3>

                <p>
                  📧 {app.applicant?.email}
                </p>

                <p style={{ marginTop: "8px" }}>
                  📌 Status:
                  <span
                    style={{
                      marginLeft: "8px",
                      fontWeight: "bold",
                      color: "#22c55e",
                    }}
                  >
                    {app.status || "Pending"}
                  </span>
                </p>

                <p
                  style={{
                    marginTop: "10px",
                    color: "#666",
                    lineHeight: "1.6",
                  }}
                >
                  This candidate has successfully submitted
                  an application and is interested in joining
                  your company.
                </p>
              </div>

              {/* RIGHT AVATAR */}
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#8b5cf6,#6366f1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "34px",
                  fontWeight: "bold",
                  flexShrink: 0,
                }}
              >
                {app.applicant?.name
                  ?.charAt(0)
                  ?.toUpperCase() || "U"}
              </div>
            </div>

            <hr
              style={{
                margin: "18px 0",
                opacity: 0.2,
              }}
            />

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <button className="btn-primary">
                Contact Candidate
              </button>

              <button className="btn-success">
                Shortlist
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Applicants;