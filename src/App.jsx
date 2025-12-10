import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Planos from "./Pages/Planos";
import Dashboard from "./Pages/Dashboard";
import "./App.css";



function App() {
  return (
    <HashRouter>
      <Routes>

        {/* Página inicial */}
        <Route path="/" element={<Home />} />
        

        {/* Outras páginas */}
        <Route path="/Planos" element={<Planos />} />
        <Route path="/Dashboard" element={<Dashboard />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
