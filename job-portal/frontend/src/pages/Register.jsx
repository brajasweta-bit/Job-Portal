import { useState } from "react";
import API from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/auth/register", form);

      alert(res.data.message);

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="card">
      <h1>Register</h1>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="role"
        onChange={handleChange}
      >
        <option value="candidate">
          candidate
        </option>

        <option value="employer">
          employer
        </option>
      </select>

      <br /><br />

      <button onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}

export default Register;