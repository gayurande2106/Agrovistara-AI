import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";

function Layout({ children }) {
  const token = localStorage.getItem("token");

if (!token) {
  return <Navigate to="/login" replace />;
}
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ width: "100%" }}>
        <Navbar />
        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;