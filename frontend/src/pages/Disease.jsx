import { useState } from "react";
import API from "../services/api";

function Disease() {

  const [file, setFile] = useState(null);
  const [answer, setAnswer] = useState("");

  const detectDisease = async () => {

    if (!file) {
      alert("Select Image");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      const res = await API.post("/disease", formData);

      setAnswer(res.data.result);

    } catch (err) {
  console.log(err);

  console.log(err.response);

  alert(
    err.response?.data?.detail ||
    err.response?.data?.reply ||
    JSON.stringify(err.response?.data) ||
    err.message
  );
}

  };

  return (

    <div style={{ padding: "30px" }}>

      <h1>🌿 AI Disease Detection</h1>

      <br />

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={detectDisease}>
        Detect Disease
      </button>

      <br /><br />

      {answer && (

        <div
          style={{
            whiteSpace:"pre-wrap",
            padding:"20px",
            background:"#f4f4f4",
            borderRadius:"10px"
          }}
        >
          {answer}
        </div>

      )}

    </div>

  );

}

export default Disease;