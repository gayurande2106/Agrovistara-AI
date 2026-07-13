import { useState } from "react";
import ReactMarkdown from "react-markdown";
import API from "../services/api";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await API.post("/chatbot/", {
        message: message,
      });

      setReply(res.data.reply);
    } catch (err) {
      setReply("❌ AI Server Error");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1>🤖 Agrovistara AI Chatbot</h1>

      <br />

      <textarea
        rows="5"
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "10px",
        }}
        placeholder="Ask any agriculture question..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={askAI}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      <br />
      <br />

      {reply && (
        <div
          style={{
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
          }}
        >
          <h3>🌾 AI Answer</h3>

          <ReactMarkdown>{reply}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default Chatbot;