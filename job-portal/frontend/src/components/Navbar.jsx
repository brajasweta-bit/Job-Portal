import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
    navigate("/login");
  };

  return (
    <div className="nav" style={{ display: "flex", gap: "10px" }}>
      
      <Link to="/">
        <button>Home</button>
      </Link>

       <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/create-job">
        <button>Create Job</button>
      </Link>


      <Link to="/jobs">
        <button>Jobs</button>
      </Link>

      <Link to="/employer-dashboard">
        <button>Employer</button>
      </Link>

      <Link to="/my-applications">
        <button>My Applications</button>
      </Link>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Navbar;