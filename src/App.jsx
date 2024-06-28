import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HistorialHerramientas from "./pages/historial-herramientas";
function App() {  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/historial-herramientas" element={<HistorialHerramientas/>} />
        </Routes>      </BrowserRouter>
  );
}

export default App;
