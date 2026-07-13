import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    try {
      const res = await API.post("/user/login", form);

      localStorage.setItem(
        "token",
        res.data.access_token
      );

      localStorage.setItem(
        "name",
        res.data.name
      );

      navigate("/");
    } catch (err) {
      alert("Invalid Login");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>
      <h1>🌾 Agrovistara Login</h1>

      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;