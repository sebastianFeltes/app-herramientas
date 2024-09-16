/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { post, serverUrl } from "./utils.services";

export async function postLogin(dni, pass) {
  let ruta = "/login";
  let dataValidada = {};
  if (!dni || dni.length < 5) {
    return "Dni Invalido";
  } else if (!pass) {
    return "Password Invalido";
  } else {
    dataValidada = { dni: parseInt(dni), password: pass };
    // console.log(dataValidada);
    let res = await post(ruta, dataValidada);
    // console.log(res);
    
    return res
  }
}
