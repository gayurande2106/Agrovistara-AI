import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Farmers from "./pages/Farmers";
import Weather from "./pages/Weather";
import Disease from "./pages/Disease";
import Fertilizer from "./pages/Fertilizer";
import Prices from "./pages/Prices";
import Chatbot from "./pages/Chatbot";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />


      {/* Protected Routes */}
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/farmers" element={<Farmers />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/disease" element={<Disease />} />
              <Route path="/fertilizer" element={<Fertilizer />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/chatbot" element={<Chatbot />} />
              
            </Routes>
          </Layout>
        }
      />

    </Routes>
  );
}

export default App;