import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ movieId }) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    vote: "1",
    text: "",
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // new Date()orario corrente;.toISOString()converte in ISO 8601;.slice()estrae i primi 19 elementi;.replace()sostituisce la "T" con " "
    const now = new Date().toISOString().slice(0, 19).replace("T", " "); // compatibile con mySQL
    const backEndApiUrl = import.meta.env.VITE_BACKEND_API_URL;

    const formDataWithtDate = {
      ...formData,
      created_at: now,
      updated_at: now,
    };

    // Qui devo inviare i dati via axios
    axios.post(`${backEndApiUrl}/movies/${movieId}`, formDataWithtDate).then((res) => {
      console.log("Dati inviati:", res.data);
    });
    // reset del form (stato di partenza)
    setFormData({
      name: "",
      lastname: "",
      email: "",
      vote: "1",
      text: "",
      accepted: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow row">
      <div className="mb-3 col-3">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3 col-3">
        <label>Cognome:</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3 col-3">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3 col-3">
        <label>Voto:</label>
        <select
          name="vote"
          value={formData.vote}
          onChange={handleChange}
          className="form-select"
          required
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label>Recensione:</label>
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          className="form-control"
          rows="3"
        />
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          name="accepted"
          checked={formData.accepted}
          onChange={handleChange}
          className="form-check-input"
          id="accetta"
          required
        />
        <label className="form-check-label" htmlFor="accetta">
          Accetto i termini e condizioni
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Invia recensione
      </button>
    </form>
  );
}
