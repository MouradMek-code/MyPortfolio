import "./App.css";
import Contact from "./components/Contact";
import Cv from "./components/Cv";
import Projets from "./components/Projects";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//https://fr.wix.com/website-template/view/html/2846?originUrl=https%3A%2F%2Ffr.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv&tpClick=view_button&esi=c0e1b3d5-ce6e-4ac5-b975-78593aef5d6d
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="cv" element={<Cv />} />
        <Route path="projects" element={<Projets />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
