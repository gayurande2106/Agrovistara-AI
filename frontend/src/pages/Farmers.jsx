import { useEffect, useState } from "react";
import API from "../services/api";

function Farmers() {
  const [farmers, setFarmers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    village: "",
    district: "",
    crop: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadFarmers();
  }, []);

  const loadFarmers = async () => {
    try {
      const res = await API.get("/auth/farmers");
      setFarmers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerFarmer = async () => {
    try {
      if (editingId) {
        await API.put(`/auth/farmer/${editingId}`, form);
        setEditingId(null);
      } else {
        await API.post("/auth/register", form);
      }

      setForm({
        name: "",
        mobile: "",
        village: "",
        district: "",
        crop: "",
      });

      loadFarmers();
    } catch (err) {
      console.log(err);
    }
  };

  const editFarmer = (farmer) => {
    setEditingId(farmer.id);

    setForm({
      name: farmer.name,
      mobile: farmer.mobile,
      village: farmer.village,
      district: farmer.district,
      crop: farmer.crop,
    });
  };

  const deleteFarmer = async (id) => {
    if (!window.confirm("Delete this farmer?")) return;

    try {
      await API.delete(`/auth/farmer/${id}`);
      loadFarmers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>👨‍🌾 Farmers Management</h1>

      <br />

      <input
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        placeholder="Mobile"
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
      />

      <input
        placeholder="Village"
        name="village"
        value={form.village}
        onChange={handleChange}
      />

      <input
        placeholder="District"
        name="district"
        value={form.district}
        onChange={handleChange}
      />

      <input
        placeholder="Crop"
        name="crop"
        value={form.crop}
        onChange={handleChange}
      />

      <button onClick={registerFarmer}>
        {editingId ? "Update Farmer" : "Register Farmer"}
      </button>

      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Village</th>
            <th>District</th>
            <th>Crop</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {farmers.map((farmer) => (
            <tr key={farmer.id}>
              <td>{farmer.id}</td>
              <td>{farmer.name}</td>
              <td>{farmer.mobile}</td>
              <td>{farmer.village}</td>
              <td>{farmer.district}</td>
              <td>{farmer.crop}</td>

              <td>
                <button onClick={() => editFarmer(farmer)}>
                  Edit
                </button>

                <button
                  onClick={() => deleteFarmer(farmer.id)}
                  style={{
                    marginLeft: "10px",
                    background: "red",
                    color: "white",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Farmers;