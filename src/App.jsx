import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Planos from "./Pages/Planos";
import Dashboard from "./Pages/Dashboard";
import "./App.css";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página inicial */}
        <Route path="/" element={<Home />} />
        

        {/* Outras páginas */}
        <Route path="/Planos" element={<Planos />} />
        <Route path="/Dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
