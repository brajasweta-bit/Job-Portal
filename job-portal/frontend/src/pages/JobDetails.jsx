import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const res = await API.get(`/jobs/${id}`);
      setJob(res.data.job);
    } catch {
      alert("Failed to load job");
    }
  };

  const applyJob = async () => {
    try {
      await API.post("/applications", { jobId: id });
      alert("Applied successfully");
    } catch {
      alert("Already applied or failed");
    }
  };

  if (!job) {
    return (
      <div style={{ padding: "30px", color: "white" }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={styles.page}>

      <div style={styles.hero}></div>

      <div style={styles.card}>

        <h1 style={styles.title}>
          {job.title}
        </h1>

        <div style={styles.info}>
          <p>🏢 {job.company}</p>
          <p>📍 {job.location}</p>
          <p>💰 {job.salary}</p>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            margin: "20px 0",
          }}
        />

        <h3 style={{ color: "white" }}>
          Job Description
        </h3>

        <p style={styles.desc}>
          {job.description}
        </p>

        <button
          style={styles.button}
          onClick={applyJob}
        >
          🚀 Apply Now
        </button>

      </div>

    </div>
  );
}

const styles = {
  page: {
    background:
      "linear-gradient(135deg, #7c3aed, #a78bfa)",
    minHeight: "100vh",
    paddingBottom: "50px",
    color: "white",
  },

  hero: {
    height: "300px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  card: {
    maxWidth: "850px",
    margin: "-90px auto 0",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
    color: "white",
  },

  title: {
    fontSize: "32px",
    color: "#ffffff",
    marginBottom: "15px",
  },

  info: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
    color: "#ffffff",
    marginBottom: "15px",
    fontWeight: "500",
  },

  desc: {
    lineHeight: "1.8",
    color: "#ffffff",
    fontSize: "15px",
    marginTop: "10px",
  },

  button: {
    marginTop: "25px",
    width: "100%",
    padding: "14px",
    background: "#ffffff",
    color: "#7c3aed",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default JobDetails;