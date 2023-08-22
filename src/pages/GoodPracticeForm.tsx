import "./GoodPracticeForm.css";
import { useNavigate } from "react-router-dom";

export function GoodPracticeForm() {
  const navigate = useNavigate();
  return (
    <div className="form-container">
      <form>
        <h1>Select Project</h1>
        <select>
          <option>PROJECT01</option>
          <option>PROJECT02</option>
        </select>
      </form>
      <form>
        <h1>Your Details</h1>
        <label>Full Name</label>
        <input></input>
        <label>Company Name</label>
        <input></input>
        <label>Email</label>
        <input></input>
        <label>Phone Number</label>
        <input></input>
      </form>
      <form>
        <h1>Your Observation</h1>
        <label>What did you see and what were the benefits?</label>
        <textarea></textarea>
        <label>What should be recognised</label>
        <textarea></textarea>
        <label>Location</label>
        <input></input>
        <div className="form-data-time">
          <div>
            <label>Date</label>
            <input type="date"></input>
          </div>
          <div>
            <label>Time</label>
            <input type="time"></input>
          </div>
        </div>
      </form>
      <div className="form-buttons">
        <button onClick={() => navigate("/")}>HOME</button>
        <button>SUBMIT</button>
      </div>
    </div>
  );
}
