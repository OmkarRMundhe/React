import "./App.css";
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      style={{ backgroundColor: bgColor }} // default bg color in inline style
      className="min-h-screen flex flex-col relative"
    >
      {/* Content (Top area) */}
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-2xl">Main Content Area</h1>
      </div>

      {/* Bottom Buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-3xl"
          onClick={() => setBgColor("blue")}
        >
          Blue
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-3xl"
          onClick={() => setBgColor("green")}
        >
          green
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-3xl"
          onClick={() => setBgColor("red")}
        >
          Red
        </button>

        <button
          className="px-5 py-2 rounded-3xl text-white bg-orange-500"
          onClick={() => setBgColor("orange")}
        >
          Orange
        </button>

        <button
          className="px-5 py-2 rounded-3xl text-white bg-purple-600"
          onClick={() => setBgColor("purple")}
        >
          Purple
        </button>

        <button
          className="px-5 py-2 rounded-3xl text-white bg-teal-500"
          onClick={() => setBgColor("teal")}
        >
          Teal
        </button>
      </div>
    </div>
  );
}

export default App;
