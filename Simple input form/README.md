# Simple Input Form

A minimal React example demonstrating a controlled input form. This project shows how to keep an input's value in React state and use the `onChange` event to read and update that value.

## Features
- Controlled component pattern
- Single source of truth for form inputs
- Live input handling with `onChange`

## Prerequisites
- Node.js and npm
- Create React App or a similar React setup

## Installation
1. Clone or copy this project into your workspace.
2. In the project folder, run:
    ```
    npm install
    npm start
    ```

## Usage
Open the app in your browser (usually at `http://localhost:3000`). A simple input field will display and reflect the typed value.

## Example component
```jsx
import React, { useState } from "react";

export default function SimpleInput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
     setValue(e.target.value);
  };

  return (
     <div>
        <label>
          Enter text:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <p>Current value: {value}</p>
     </div>
  );
}
```

## Concept learned (brief)
- Controlled component: the input's `value` is bound to React state (`value`), making React the single source of truth for the input data.
- onChange event: used to detect user input and call a handler (`handleChange`) that updates state with `e.target.value`. This keeps the UI and state in sync and enables validation, formatting, or side effects whenever the input changes.

This pattern is the recommended way to manage form inputs in React for predictable and testable UI behavior.