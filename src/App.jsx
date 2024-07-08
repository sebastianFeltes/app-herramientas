import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inventario from "./pages/inventario";
import Login from "./pages/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
