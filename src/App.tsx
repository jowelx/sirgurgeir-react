import React from "react";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import Routes from "./routes/Router";
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes />
      </AppProvider>
    </div>
  );
}

export default App;
