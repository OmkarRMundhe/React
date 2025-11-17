import { useState } from "react";
import "./App.css";

function App() {
  // name state + error
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  // dropdown state + error
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");

  // final submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // VALIDATE NAME
  function getNameError(value) {
    const trimmed = value.trim();

    if (trimmed.length === 0) return "Name is required";
    if (trimmed.length < 3) return "Name must be at least 3 characters";
    if (trimmed.length > 15) return "Name cannot exceed 15 characters";

    return "";
  }

  // VALIDATE DROPDOWN
  function validateDropdown() {
    if (country === "") return "Please select a country";
    return "";
  }

  // onBlur for name
  function handleNameBlur() {
    setNameError(getNameError(name));
  }

  // onBlur for dropdown
  function handleDropdownBlur() {
    setCountryError(validateDropdown());
  }

  // SUBMIT HANDLER
  function handleSubmit(e) {
    e.preventDefault();

    const nameValidation = getNameError(name);
    const countryValidation = validateDropdown();

    // handle both validations
    setNameError(nameValidation);
    setCountryError(countryValidation);

    if (nameValidation || countryValidation) return;

    // save submitted data
    setSubmittedData({
      name: name.trim(),
      country: country,
    });

    // clear form
    setName("");
    setCountry("");
  }

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">User Form</h2>

        {/* NAME INPUT */}
        <label style={{ fontWeight: "bold" }}>Full Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
            if (nameError) setNameError("");
          }}
          onBlur={handleNameBlur}
          className={`input-field ${nameError ? "input-error" : ""}`}
        />

        {nameError && <p className="error-text">{nameError}</p>}

        {/* DROPDOWN */}
        <label
          style={{ fontWeight: "bold", marginTop: "15px", display: "block" }}
        >
          Country
        </label>

        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            if (countryError) setCountryError("");
          }}
          onBlur={handleDropdownBlur}
          className={`input-field ${countryError ? "input-error" : ""}`}
        >
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>

        {countryError && <p className="error-text">{countryError}</p>}

        {/* SUBMIT BUTTON */}
        <button type="submit" className="submit-btn">
          Submit
        </button>

        {/* SUBMITTED DATA */}
        {submittedData && (
          <div className="submitted-section">
            <h3>Submitted Details:</h3>
            <p>
              <b>Name:</b> {submittedData.name}
            </p>
            <p>
              <b>Country:</b> {submittedData.country}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
