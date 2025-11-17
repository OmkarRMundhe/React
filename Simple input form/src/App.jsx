import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Live Text Preview
        </h2>

        <input
          type="text"
          value={text}
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            outline: "none",
          }}
        />

        <p
          style={{
            padding: "10px",
            background: "#f9f9f9",
            borderRadius: "5px",
            border: "1px solid #ddd",
            minHeight: "40px",
            fontSize: "16px",
          }}
        >
          {text || "Nothing typed yet..."}
        </p>

        <button
          onClick={() => setText("")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Clear Text
        </button>
      </div>
    </div>
  );
}

export default App;
