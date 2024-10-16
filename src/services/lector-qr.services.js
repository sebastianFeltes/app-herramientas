import { get } from "./utils.services";

//Persona scanea su QR
export async function getHerramientasPorUsuario(id_alumno) {
  const url = "http://localhost:4000/";
  const path = `herramientas-en-uso/${id_alumno}`;
  if (!id_alumno) {
    return "Codigo de alumno invalido";
  }
  try {
    const response = await get(url + path);
    return response;
  } catch (error) {
    console.log(error);
    return "Error del servidor";
  }
}
//Persona scanea Herramienta

//Persona scanea su QR para finalizar
