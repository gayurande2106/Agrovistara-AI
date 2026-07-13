import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCloudSun,
  FaLeaf,
  FaFlask,
  FaMoneyBillWave,
  FaRobot,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🌾 Agrovistara</h2>

      <ul>
        <li>
          <Link to="/">
            <FaHome /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/farmers">
            <FaUser /> Farmers
          </Link>
        </li>

        <li>
          <Link to="/weather">
            <FaCloudSun /> Weather
          </Link>
        </li>

        <li>
          <Link to="/disease">
            <FaLeaf /> Disease
          </Link>
        </li>

        <li>
          <Link to="/fertilizer">
            <FaFlask /> Fertilizer
          </Link>
        </li>

        <li>
          <Link to="/prices">
            <FaMoneyBillWave /> Prices
          </Link>
        </li>

        <li>
          <Link to="/chatbot">
            <FaRobot /> AI Chat
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;