import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inventario from "./pages/inventario";
import Login from "./pages/Login";
import AltaHerramientas from "./pages/alta-herramientas";
import LectorQr from "./pages/lector-qr";
import Home from "./pages/home";
import HistorialHerramientas from "./pages/historial-herramientas";
function App() {  return (
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        <Route path="/alta-herramientas" element={<AltaHerramientas />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/lector-qr" element={<LectorQr />} />
          <Route path="/historial-herramientas" element={<HistorialHerramientas/>} />
        </Routes>      </BrowserRouter>
  );
}

export default App;
