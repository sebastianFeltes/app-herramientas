import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HistorialHerramientas from "./pages/historial-herramientas";
function App() {
  return (
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/historial-herramientas" element={<HistorialHerramientas/>} />
        </Routes>
      </BrowserRouter>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
>>>>>>> 96a49ffd5bcfe0aed3e5a94c18cad7dcf3030bb8
  );
}

export default App;
