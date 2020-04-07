import React from "react";
import "./styles/App.css";
import Navbar from "./sections/Navbar/Navbar";
import Header from "./sections/Header/Header";
import Middle from "./sections/Middle/Middle";
import Floater from "./sections/Floater/Floater";
import Footer from "./sections/Footer/Footer";
import Shortener from "./components/Shoterner/Shortener";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Middle />
      <Floater />
      <Footer />
    </div>
  );
}

export default App;
