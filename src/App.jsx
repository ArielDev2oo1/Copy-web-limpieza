import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingCleaning from "./components/pages/LandingCleaning";
import "./assets/styles/index.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingCleaning />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
