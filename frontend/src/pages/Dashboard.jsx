function Dashboard() {
  return (
    <div>

      <h1>Dashboard</h1>

      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        <div className="card">
          <h2>👨‍🌾 Farmers</h2>
          <h3>25</h3>
        </div>

        <div className="card">
          <h2>🌦 Weather</h2>
          <h3>28°C</h3>
        </div>

        <div className="card">
          <h2>🌱 Disease</h2>
          <h3>Healthy</h3>
        </div>

        <div className="card">
          <h2>🧪 Fertilizer</h2>
          <h3>NPK</h3>
        </div>

        <div className="card">
          <h2>💰 Crop Price</h2>
          <h3>₹2400</h3>
        </div>

        <div className="card">
          <h2>🤖 AI Chat</h2>
          <h3>Ready</h3>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;