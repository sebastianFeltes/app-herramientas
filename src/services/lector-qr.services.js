import { get, post } from "./utils.services";

//Persona scanea su QR
export async function getHerramientasUso(id_alumno) {
  const path = `/uso/${id_alumno}`;
  if (!id_alumno) {
    return "Codigo de alumno invalido";
  }
  try {
    const response = await get(path);
    return response;
  } catch (error) {
    console.log(error);
    return "Error del servidor";
  }
}
//Persona scanea Herramienta
export async function getHerramienta(id_herramienta) {
  const path = `/herramienta/${id_herramienta}`;
  if (!id_herramienta) {
    return "Codigo de herramienta invalido";
  }
  try {
    const response = await get(path);
    return response;
  } catch (error) {
    console.log(error);
    return "Error del servidor";
  }
}
export async function returnHerramienta(data) {
  const path = `/devolver-herramientas`;
  if (!data) {
    return "herramientas invalidas";
  } else {
    const response = await post(path, data);
    return response;
  }
}

export async function postHerramientasAAsignar(data){
  const path = `/asignar-herramientas`;
  if (!data) {
    return "herramientas invalidas";
  } else {
    const response = await post(path, data);
    return response;
  }
}