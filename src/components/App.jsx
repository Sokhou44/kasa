import Header from "./Header";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PageError from "./pages/PageError";





const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      </Router>
  );
};

export default App;
