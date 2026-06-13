import { useParams } from "react-router-dom";
import API from "../services/api";

function Apply() {
  const { id } = useParams();

  const applyJob = async () => {
    try {
      await API.post("/applications", {
        jobId: id,
      });

      alert("Applied successfully");
    } catch {
      alert("Already applied or failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Apply Page</h2>
      <p>Job ID: {id}</p>

      <button onClick={applyJob}>
        Apply
      </button>
    </div>
  );
}

export default Apply;