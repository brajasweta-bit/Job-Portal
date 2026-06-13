import { useNavigate } from "react-router-dom";
import images from "../config/images";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${images.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "850px",
          padding: "20px",
          color: "white",
        }}
      >
       <h1
  style={{
    fontSize: "48px",
    fontWeight: "700",
    color: "#ffffff",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.2",
    textShadow: "0 4px 15px rgba(0,0,0,0.6)",
    marginBottom: "20px",
  }}
>
  Find Your Dream Career 🚀
</h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            marginBottom: "30px",
            color: "#ffffff",
          }}
        >
          Welcome to our Job Portal, where talented professionals connect
          with top companies across various industries. Explore thousands
          of opportunities, apply instantly, manage your applications,
          and take the next step toward a successful career.
          <br /><br />
          Whether you're a fresh graduate looking for your first role or
          an experienced professional searching for new challenges, our
          platform helps you discover the right opportunities quickly and
          efficiently.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn-primary"
            onClick={() => navigate("/jobs")}
            style={{
              padding: "14px 28px",
              fontSize: "16px",
            }}
          >
            Browse Jobs
          </button>

          <button
            className="btn-success"
            onClick={() => navigate("/login")}
            style={{
              padding: "14px 28px",
              fontSize: "16px",
            }}
          >
            Login Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;