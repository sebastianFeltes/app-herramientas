import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import Logo from "../assets/logo-cfl.png";

const iconoX = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 bg-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </span>
  );
};

function Login() {
  return (
    <div className="hero bg-[#132852] min-h-screen">
      <div className="hero-content text-center flex flex-col">
        <img
          src={Logo}
          alt="Logo CFL404"
          className="w-44 block drop-shadow-xl "
        />
        <form className="max-w-md">
          <StyledInput
            placeholder={"Ingrese su DNI"}
            type="number"
            BRLabel={"Sin puntos"}
            textColor={"text-white"}
          />
          {/* <div className="flex grow-0">{iconoX()}</div> */}
          <StyledInput
            placeholder={"Ingrese su contraseña"}
            type="password"
            BRLabel={<a href="http://">Olvide mi Contraseña</a>}
            textColor={"text-white"}
          />
          {/* <div className="flex flex-shrink-0">{iconoX()}</div> */}
          <div className="flex flex-col h-3"></div>
          <StyledButton accept innerText={"Ingresar"} btnType={"submit"} />
        </form>
      </div>
    </div>
  );
}

export default Login;
