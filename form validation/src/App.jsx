import { useState } from "react";
import "./App.css";

function App() {
  // name state + error message
  const [name, setName] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");

  // country dropdown + error message
  const [country, setCountry] = useState("");
  const [countryErrorMessage, setCountryErrorMessage] = useState("");

  // password + error message
  const [password, setPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  // radio button state
  const [gender, setGender] = useState("");
  const [genderErrorMessage, setGenderErrorMessage] = useState("");

  // checkbox state
  const [skills, setSkills] = useState([]);
  const [skillsErrorMessage, setSkillsErrorMessage] = useState("");

  // date of birth + error
  const [dob, setDob] = useState("");
  const [dobErrorMessage, setDobErrorMessage] = useState("");

  // final submitted form data
  const [submittedFormData, setSubmittedFormData] = useState(null);

  // VALIDATE NAME
  function getNameError(value) {
    const trimmed = value.trim();

    if (trimmed.length === 0) return "Name is required.";
    if (trimmed.length < 3) return "Name must be at least 3 characters.";
    if (trimmed.length > 15) return "Name cannot exceed 15 characters.";

    return "";
  }

  // VALIDATE COUNTRY
  function getCountryError(value) {
    if (value === "") return "Please select a country.";
    return "";
  }

  // VALIDATE PASSWORD
  function getPasswordError(value) {
    if (value === "") return "Password is required.";
    if (value.length < 6) return "Password must be at least 6 characters.";
    if (value.length > 20) return "Password cannot exceed 20 characters.";
    if (!/[A-Z]/.test(value))
      return "Password must contain at least one uppercase letter.";
    if (!/[a-z]/.test(value))
      return "Password must contain at least one lowercase letter.";
    if (!/[0-9]/.test(value))
      return "Password must contain at least one digit.";
    if (!/[!@#$%^&*]/.test(value))
      return "Password must contain at least one special character (!@#$%^&*).";

    return "";
  }

  // validate radio button
  function getGenderError(value) {
    if (value === "") return "Please select a gender.";
    return "";
  }

  // validate date of birth
  function getDobError(value) {
    if (!value) return "Please select your date of birth.";

    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) return "Date of birth cannot be in the future.";

    return "";
  }

  // BLUR HANDLERS
  function handleNameBlur() {
    setNameErrorMessage(getNameError(name));
  }

  function handleCountryBlur() {
    setCountryErrorMessage(getCountryError(country));
  }

  function handlePasswordBlur() {
    setPasswordErrorMessage(getPasswordError(password));
  }

  function handleGenderBlur() {
    // This can be used if you want to show error on blur for radio buttons
    setGenderErrorMessage(getGenderError(gender));
  }

  function handleDobBlur() {
    setDobErrorMessage(getDobError(dob));
  }

  // validate skills
  function getSkillsError(skillsArray) {
    if (skillsArray.length === 0) return "Please select at least one skill.";
    return "";
  }

  // SUBMIT HANDLER
  function handleSubmit(e) {
    e.preventDefault();
    console.log(skills);
    // Validate everything
    const nameError = getNameError(name);
    const countryError = getCountryError(country);
    const passwordError = getPasswordError(password);
    const radioError = getGenderError(gender);
    const skillsError = getSkillsError(skills);
    const dobError = getDobError(dob);

    // Update errors
    setNameErrorMessage(nameError);
    setCountryErrorMessage(countryError);
    setPasswordErrorMessage(passwordError);
    setGenderErrorMessage(radioError);
    setSkillsErrorMessage(skillsError);
    setDobErrorMessage(dobError);

    // If ANY error exists → stop submission
    if (
      nameError ||
      countryError ||
      passwordError ||
      radioError ||
      skillsError ||
      dobError
    )
      return;

    // Save submitted form
    setSubmittedFormData({
      name: name.trim(),
      country,
      passwordMask: "*".repeat(password.length),
      gender,
      skills,
      dob,
    });

    // Clear form
    setName("");
    setCountry("");
    setPassword("");
    setGender("");
    setSkills([]);
    setDob("");
  }

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">User Form</h2>

        {/* NAME */}
        <label style={{ fontWeight: "bold" }}>Full Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
            if (nameErrorMessage) setNameErrorMessage("");
          }}
          onBlur={handleNameBlur}
          className={`input-field ${nameErrorMessage ? "input-error" : ""}`}
        />
        {nameErrorMessage && <p className="error-text">{nameErrorMessage}</p>}

        {/* COUNTRY */}
        <label
          style={{ fontWeight: "bold", marginTop: "15px", display: "block" }}
        >
          Country
        </label>
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            if (countryErrorMessage) setCountryErrorMessage("");
          }}
          onBlur={handleCountryBlur}
          className={`input-field ${countryErrorMessage ? "input-error" : ""}`}
        >
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>
        {countryErrorMessage && (
          <p className="error-text">{countryErrorMessage}</p>
        )}

        {/* PASSWORD */}
        <label
          style={{ fontWeight: "bold", marginTop: "15px", display: "block" }}
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          placeholder="Enter a strong password"
          onChange={(e) => {
            setPassword(e.target.value);
            if (passwordErrorMessage) setPasswordErrorMessage("");
          }}
          onBlur={handlePasswordBlur}
          className={`input-field ${passwordErrorMessage ? "input-error" : ""}`}
        />
        {passwordErrorMessage && (
          <p className="error-text">{passwordErrorMessage}</p>
        )}

        {/* Radio buttons */}
        <div style={{ marginTop: "15px" }}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => {
                setGender(e.target.value);
                if (genderErrorMessage) setGenderErrorMessage("");
              }}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => {
                setGender(e.target.value);
                if (genderErrorMessage) setGenderErrorMessage("");
              }}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={gender === "Other"}
              onChange={(e) => {
                setGender(e.target.value);
                if (genderErrorMessage) setGenderErrorMessage("");
              }}
            />
            Other
          </label>
        </div>

        {genderErrorMessage && (
          <p className="error-text">{genderErrorMessage}</p>
        )}

        {/* Checkboxes */}
        <label
          style={{ display: "block", marginBottom: "5px", marginTop: "15px" }}
        >
          Skills
        </label>

        <input
          type="checkbox"
          id="Java"
          name="skills"
          value="Java"
          checked={skills.includes("Java")}
          onChange={(e) => {
            const value = e.target.value;
            if (e.target.checked) {
              setSkills([...skills, value]);
            } else {
              setSkills(skills.filter((skill) => skill !== value));
            }
          }}
        />
        <label htmlFor="Java">Java</label>

        <input
          type="checkbox"
          id="JS"
          name="skills"
          value="JS"
          checked={skills.includes("JS")}
          onChange={(e) => {
            const value = e.target.value;
            if (e.target.checked) {
              setSkills([...skills, value]);
            } else {
              setSkills(skills.filter((skill) => skill !== value));
            }
          }}
        />
        <label htmlFor="JS">JS</label>

        <input
          type="checkbox"
          id="C++"
          name="skills"
          value="C++"
          checked={skills.includes("C++")}
          onChange={(e) => {
            const value = e.target.value;
            if (e.target.checked) {
              setSkills([...skills, value]);
            } else {
              setSkills(skills.filter((skill) => skill !== value));
            }
          }}
        />
        <label htmlFor="C++">C++</label>
        {skillsErrorMessage && (
          <p className="error-text">{skillsErrorMessage}</p>
        )}

        {/* date of birth */}
        <label
          htmlFor="dob"
          style={{ display: "block", marginTop: "15px", marginBottom: "5px" }}
        >
          Date of Birth
        </label>

        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
            if (dobErrorMessage) setDobErrorMessage("");
          }}
          onBlur={handleDobBlur}
          className={`input-field ${dobErrorMessage ? "input-error" : ""}`}
        />

        {dobErrorMessage && <p className="error-text">{dobErrorMessage}</p>}

        {/* SUBMIT BUTTON */}
        <button type="submit" className="submit-btn">
          Submit
        </button>

        {/* SUBMITTED DATA */}
        {submittedFormData && (
          <div className="submitted-section">
            <h3>Submitted Details:</h3>
            <p>
              <b>Name:</b> {submittedFormData.name}
            </p>
            <p>
              <b>Country:</b> {submittedFormData.country}
            </p>
            <p>
              <b>Password:</b> {submittedFormData.passwordMask}
            </p>
            <p>
              <b>Gender:</b> {submittedFormData.gender}
            </p>
            <p>
              <b>Skills:</b> {submittedFormData.skills.join(", ")}
            </p>

            <p>
              <b>Date of Birth:</b> {submittedFormData.dob}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
