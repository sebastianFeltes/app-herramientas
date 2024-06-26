import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StyledInput from "./components/StyledInput";
import Login from "./pages/Login";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
