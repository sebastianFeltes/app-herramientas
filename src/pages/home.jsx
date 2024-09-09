import { Link } from "react-router-dom";
import StyledButton from "../components/StyledButton";

function Home() {
  return (
    <div className="hero bg-blue-700  w-full min-h-screen">
      <div className="hero-content text-center w-full">
        <div className="flex bg-white flex-col items-center justify-center h-3/4 w-1/2 p-4 rounded-lg  gap-8 border shadow-lg ">
          <h2 className="text-black text-3xl">Bienvenido Usuario!</h2>
          <Link
            to={"/alta-herramientas"}
            className="tooltip"
            data-tip="Cargar Herramienta"
          >
            {/* <button className="btn tooltip tooltip-right bg-blue-600" data-tip="Click">Alta Herramienta</button> */}
            <StyledButton innerText={"Alta Herramienta"} link />
          </Link>
          <Link
            to={"/inventario"}
            className="tooltip"
            data-tip="Visualizar inventario"
          >
            <StyledButton innerText={"Inventario"} link />
          </Link>
          <Link
            to={"/historial-herramientas"}
            className="tooltip"
            data-tip="Revisar Historial"
          >
            <StyledButton innerText={"Historial"} link />
          </Link>
          <Link to={"/lector-qr"} className="tooltip" data-tip="QR Gestion">
            <StyledButton innerText={"Gestion QR"} link />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
