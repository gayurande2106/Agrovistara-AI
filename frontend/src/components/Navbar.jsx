import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    navigate("/login");
  };

  return (
    <div className="navbar">

      <h2>🌾 Agrovistara AI Dashboard</h2>

      <div className="user">

        <span>Welcome, {name} 👋</span>

        <button
          onClick={logout}
          style={{
            marginLeft: "20px",
            padding: "8px 15px",
            background: "#d32f2f",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;