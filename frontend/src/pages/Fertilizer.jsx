import { useState } from "react";
import API from "../services/api";

function Fertilizer() {

  const [crop, setCrop] = useState("");
  const [result, setResult] = useState(null);

  const search = async () => {

    try {

      const res = await API.get(`/fertilizer/${crop}`);

      setResult(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div>

      <h1>🧪 Fertilizer Recommendation</h1>

      <br />

      <input
        placeholder="Enter Crop"
        value={crop}
        onChange={(e) => setCrop(e.target.value)}
      />

      <button onClick={search}>
        Search
      </button>

      <br /><br />

      {result && (

        <div>

          <h2>Recommended Fertilizer</h2>

          <h3>{result.fertilizer}</h3>

          <h3>Dosage : {result.dosage}</h3>

        </div>

      )}

    </div>

  );

}

export default Fertilizer;