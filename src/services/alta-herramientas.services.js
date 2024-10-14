import { post, get } from "./utils.services";

//HACE UN GET DE LAS CATEGORÍAS QUE HAY EN LA DB
export async function getCategorias() {
  const data = await get("/categorias");
  return data;
}

//HACE UN GET DE LOS ESTADOS QUE HAY EN LA DB
export async function getEstados() {
  const data = await get("/estados");
  return data;
}

//VALIDA LOS DATOS DE LA HERRAMIENTA CARGADA Y HACE EL POST DE LA HERRAMIENTA
export async function postAltaHerramienta(herramienta) {
  if (!herramienta.nombre) {
    return console.log("Ingrese el nombre de la herramienta");
  }
  if (!herramienta.marca) {
    return console.log("Ingrese la marca de la herramienta");
  }
  if (herramienta.categoria == "Seleccione una categoría") {
    return console.log("Seleccione una categoría");
  }
  if (herramienta.categoria == "Seleccione un consumible") {
    return console.log("Seleccione un consumible");
  }
  if (!herramienta.numSerie) {
    return console.log("Ingrese el número de serie de la herramienta");
  }
  if (!herramienta.fechaCompra) {
    return console.log("Ingrese la fecha de compra de la herramienta");
  }
  if (herramienta.estadoHerramienta == "Seleccione un estado") {
    return console.log("Ingrese el estado de la herramienta");
  }
  if (!herramienta.fechaCarga) {
    return console.log("Ingrese la fecha de carga de la herramienta");
  }

  let res = await post("/herramienta", herramienta);

  return res;
}
