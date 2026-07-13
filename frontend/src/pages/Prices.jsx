import { useState } from "react";
import API from "../services/api";

function Prices() {
  const [crop, setCrop] = useState("");
  const [result, setResult] = useState(null);

  const getPrice = async () => {
    try {
      const res = await API.get(`/prices/${crop}`);
      setResult(res.data);
    } catch (err) {
      console.log(err);
      alert("Unable to fetch price");
    }
  };

  return (
    <div>
      <h1>💰 Crop Prices</h1>

      <br />

      <input
        type="text"
        placeholder="Enter Crop Name"
        value={crop}
        onChange={(e) => setCrop(e.target.value)}
      />

      <button onClick={getPrice}>
        Search
      </button>

      <br />
      <br />

      {result && (
        <div>
          <h2>Crop : {result.crop}</h2>
          <h2>Price : ₹ {result.price}</h2>
        </div>
      )}
    </div>
  );
}

export default Prices;