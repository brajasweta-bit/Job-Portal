import { useState } from "react";
import API from "../services/api";
import images from "../config/images";

function CreateJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await API.post("/jobs", form);
      alert("Job created successfully");

      setForm({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed to create job");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundImage: `url(${images.createjob || images.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      ></div>

      {/* FORM CARD */}
      <div
        className="card"
        style={{
          width: "420px",
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        {/* TITLE (FIXED) */}
        <h2
          style={{
            color: "white",
            marginBottom: "15px",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          Create Job
        </h2>

        <input
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <input
          name="salary"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <button
          className="btn-primary"
          style={{ marginTop: "15px", width: "100%" }}
          onClick={handleSubmit}
        >
          Create Job
        </button>
      </div>
    </div>
  );
}

export default CreateJob;