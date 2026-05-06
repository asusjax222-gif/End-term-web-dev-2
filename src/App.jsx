

import React, { useState } from "react";  1

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "left", marginTop: "20px" }}>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default App;
