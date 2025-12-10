import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Planos from "./Pages/Planos";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <HashRouter>
      <Routes>
        

        <Route path="/" element={<Home />} />
        <Route path="/Planos" element={<Planos />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
