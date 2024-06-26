import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import { useRef } from "react";

function Login() {
  const inputRefs = { dni: useRef(null), pass: useRef(null) };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue1 = inputRefs.dni.current.value;
    const inputValue2 = inputRefs.pass.current.value;
    console.log(inputValue1, inputValue2);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <StyledInput
        placeholder="Ingrese su DNI"
        type="number"
        TLLabel="Nro de DNI"
        inputRef={inputRefs.dni}
      />
      <StyledInput
        placeholder="Ingrese su contraseña"
        type="password"
        TLLabel="Contraseña"
        inputRef={inputRefs.pass}
      />
      <StyledButton accept innerText={"Enviar"} btnType={"submit"} />
    </form>
  );
}

export default Login;
