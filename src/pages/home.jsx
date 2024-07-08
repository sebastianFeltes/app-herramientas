import { Link } from "react-router-dom";
import StyledButton from "../components/StyledButton";
/* import Logo from '../assets/logo-cfl.png'; */

function Home() {
  return (

<div className="hero bg-white  w-full min-h-screen">
  <div className="hero-content text-center w-full">

    <div className="flex flex-col items-center justify-center h-3/4 w-1/2 p-4 rounded-lg  gap-8 border shadow-lg ">
     <h2 className="text-black text-3xl">
      Bienvenido Usuario!
     </h2>
      <Link  to={"/alta-herramienta"} className="tooltip" data-tip="Cargar herramienta">
        {/* <button className="btn tooltip tooltip-right bg-blue-600" data-tip="Click">Alta herramienta</button> */}
        <StyledButton innerText={"Alta herramienta"} link />
      </Link>
      <Link to={"/inventario"} className="tooltip" data-tip="Visualizar inventario">
        <StyledButton innerText={"Inventario"} link />
      </Link>
      <Link to={"/historial-herramientas"} className="tooltip" data-tip="Revisar Historial">
        <StyledButton innerText={"Historial"} link />
      </Link>
      <Link to={"/lector-qr"} className="tooltip" data-tip="QR Gestion">
        <StyledButton innerText={"Gestion QR"} link />
      </Link>
      {/*    <img src={Logo} alt="Logo CFL" /> */}
    </div>
    </div>

</div>

   
  );
}
export default Home;
