import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Hello Azure Static Web App!</h1>
      <p>This React app is running on Azure SWA.</p>
      <p>Deployed on: {new Date().toLocaleString()}</p>
    </div>
  );
}

export default App;
