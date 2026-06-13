import { useEffect, useState } from "react";
import API from "../services/api";
import images from "../config/images";

function MyApplications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await API.get("/applications/my");
      setApps(res.data.applications || []);
    } catch (err) {
      console.log(err);
      alert("Cannot load applications");
    }
  };

  return (
    <div className="container">

      {/* TOP BANNER */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={images.applications}
          alt="applications"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "14px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}
        />
      </div>

      {/* TITLE */}
      <h1 className="page-title">📄 My Applications</h1>

      {/* EMPTY STATE */}
      {apps.length === 0 ? (
        <div className="card">
          <p>No applications found yet.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px"
          }}
        >
          {apps.map((app) => (
            <div key={app._id} className="card">

              {/* JOB TITLE */}
              <h3 style={{ marginBottom: "8px" }}>
                {app.job?.title}
              </h3>

              {/* COMPANY + LOCATION */}
              <p>🏢 {app.job?.company}</p>
              <p>📍 {app.job?.location}</p>

              {/* STATUS BADGE */}
              <div
                style={{
                  marginTop: "10px",
                  display: "inline-block",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  background:
                    app.status === "accepted"
                      ? "#22c55e"
                      : app.status === "rejected"
                      ? "#ef4444"
                      : "#f59e0b",
                  color: "white",
                  fontSize: "12px"
                }}
              >
                {app.status}
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default MyApplications;