/* eslint-disable no-unused-vars */
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import Logo from "../assets/logo-cfl.png";
import { useRef, useState } from "react";
import { postLogin } from "../services/login.services";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

function Login() {
  const inputDni = useRef();
  const inputPass = useRef();
  const navigate = useNavigate(); // Usa useNavigate para redirigir

  // Estado para manejar mensajes de error
  const [errorMessage, setErrorMessage] = useState("");

  async function intentarLogin(e) {
    e.preventDefault();
    setErrorMessage(""); // Limpia cualquier mensaje de error previo
    let dni = inputDni.current.value;
    let pass = inputPass.current.value;

    try {
      let data = await postLogin(dni, pass);

      // console.log(data);

      if (data.dni) {
        // Verifica si la respuesta es exitosa
        // Guarda los datos en localStorage
        localStorage.setItem("nombreUsuario", data.nombre);
        localStorage.setItem("apellidoUsuario", data.apellido);
        localStorage.setItem("dniUsuario", data.dni);
        localStorage.setItem("idDocente", data.id_docente);

        setErrorMessage("");
        // Redirige al usuario a /home
        navigate("/home");
      } else {
        // Establece el mensaje de error basado en la respuesta del servidor
        setErrorMessage(data.message || "Datos Invalidos");
        tiempoError()
      }
    } catch (error) {
      // Manejo de errores de red
      console.error("Error al intentar iniciar sesión:", error);
      setErrorMessage("Error de conexión. Inténtalo de nuevo más tarde.");
      tiempoError()

    }
  }
  function tiempoError() {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }
  return (
    <div className="hero bg-[#132852] min-h-screen">
      <div className="hero-content text-center flex flex-col">
        {errorMessage ? (
          <div className="w-screen h-screen absolute top-0 z-50 bg-white/50 flex items-center justify-center">
            <div className="w-1/2 h-1/4 bg-[#132852] border-2 border-white rounded-lg text-white text-3xl shadow-lg shadow-black flex items-center justify-center ">
              {errorMessage}
            </div>
          </div>
        ) : (
          false
        )}
        <img
          src={Logo}
          alt="Logo CFL404"
          className="w-44 block drop-shadow-xl "
        />
        <form className="max-w-md" onSubmit={(e) => intentarLogin(e)}>
          <StyledInput
            placeholder={"Ingrese su DNI"}
            type="number"
            BRLabel={"Sin puntos"}
            textColor={"text-white"}
            inputRef={inputDni}
          />
          <StyledInput
            placeholder={"Ingrese su contraseña"}
            type="password"
            BRLabel={"Olvide mi Contraseña"}
            textColor={"text-white"}
            inputRef={inputPass}
          />
          <div className="flex flex-col h-3"></div>
          <StyledButton accept innerText={"Ingresar"} btnType={"submit"} />
        </form>
      </div>
    </div>
  );
}

export default Login;
