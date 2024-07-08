import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inventario from "./pages/inventario";
import Login from "./pages/Login";
import AltaHerramientas from "./pages/alta-herramientas";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/alta-herramientas" element={<AltaHerramientas />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
