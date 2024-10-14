/* eslint-disable no-unused-vars */
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import Logo from "../assets/logo-cfl.png";

function Login() {
  return (
    <div className="hero bg-[#132852] min-h-screen">
      <div className="hero-content text-center flex flex-col">
        <img
          src={Logo}
          alt="Logo CFL404"
          className="w-44 block drop-shadow-xl "
        />
        <form className="max-w-md" type="submit">
          <StyledInput
            placeholder={"Ingrese su DNI"}
            type="number"
            BRLabel={"Sin puntos"}
            textColor={"text-white"}
            inputRef={"dni"}
          />
          <StyledInput
            placeholder={"Ingrese su contraseña"}
            type="password"
            BRLabel={<a href="http://">Olvide mi Contraseña</a>}
            textColor={"text-white"}
            inputRef={"password"}
          />
          <div className="flex flex-col h-3"></div>
          <StyledButton accept innerText={"Ingresar"} btnType={"submit"} />
        </form>
      </div>
    </div>
  );
}

export default Login;
