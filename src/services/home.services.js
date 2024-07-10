import { get, post } from "./utils.services";

export async function postLogin(data) {
  let ruta = "/login";
  let dataValidada = {};
  let dni = data.dni;
  let password = data.password;

  if (!dni) {
    return;
  } else if (!password) {
    return;
  } else if (dni.lenght <= 4) {
    return;
  } else {
    console.log("servicio linea 16");
    console.log(data);
    let res = await post(ruta, dataValidada);
    return res;
  }
}

export async function traerInventario() {
  let ruta = "/inventario";
  let res = await get(ruta);
  return res;
}
