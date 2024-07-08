import { Link } from "react-router-dom";
import logo from "../assets/logo-cfl.png";
import StyledButton from "./StyledButton";
function Navbar() {
  return (
    <div>
      <div className="navbar bg-blue-700">
        <div className="flex-1">
          <Link to={"/home"} className="w-16">
            <img className="w-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/inventario"}>
                <StyledButton
                  link
                  innerText={"Inventario"}
                  btnType={"sumbit"}
                />
              </Link>
            </li>
            <li>
              <Link to={"/historial-herramientas"}>
                <StyledButton
                  link
                  innerText={"Historial"}
                  btnType={"sumbit"}
                />
              </Link>
            </li>
            <li>
              <Link to={"/alta-herramientas"}>
                <StyledButton
                  link
                  innerText={"Alta Herramientas"}
                  btnType={"sumbit"}
                />
              </Link>
            </li>
            <li>
              <Link to={"/lector-qr"}>
                <StyledButton
                  link
                  innerText={"Lector QR"}
                  btnType={"sumbit"}
                />
              </Link>
            </li>
            
            { /* <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
