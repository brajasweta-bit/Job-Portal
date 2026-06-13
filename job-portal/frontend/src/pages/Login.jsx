import { useState } from "react";
import API from "../services/api";
import images from "../config/images";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)"
      }}
    >
      <div className="card" style={{ width: "400px" }}>

        {/* LOGIN IMAGE */}
        <img
          src={images.login}
          alt="login"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "15px"
          }}
        />

        <h2 style={{ color: "white" }}>Login</h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button
          className="btn-primary"
          style={{ marginTop: "15px", width: "100%" }}
          onClick={handleSubmit}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;