import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import LectorQr from "./pages/lector-qr";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/lector-qr" element={<LectorQr/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
