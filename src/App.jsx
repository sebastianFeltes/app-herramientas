import "./App.css";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";

function App() {

  return (
    <div>
      <Navbar/>
      <h1>Hola mundo con React</h1>
      <Login/>
    </div>
  );
}
export default App;
