export function Login() {
  function tryLogin(e) {
    e.preventDefault();
    alert("hola " + e.target.name.value);
    alert("contraseña: " + e.target.password.value);
  }
  return (
    <>
      <form action="" onSubmit={(e) => tryLogin(e)}>
        <input
          id="name"
          type="text"
          placeholder="Ingrese su nombre de usuario"
        />
        <input
          id="password"
          type="password"
          placeholder="Ingrese su contraseña"
        />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
