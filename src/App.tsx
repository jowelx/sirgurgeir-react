import React from "react";
import "./App.css";
import Home from "./views/Home/Home";
import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
