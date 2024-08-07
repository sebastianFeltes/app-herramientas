import { post } from "./utils.services";

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
  if (!herramienta.numSerie) {
    return console.log("Ingrese el número de serie de la herramienta");
  }
  if (!herramienta.fechaCompra) {
    return console.log("Ingrese la fecha de compra de la herramienta");
  }

  if (herramienta.estadoHerramienta == "Estado de la herramienta") {
    return console.log("Ingrese el estado de la herramienta");
  }
  if (!herramienta.fechaCarga) {
    return console.log("Ingrese la fecha de carga de la herramienta");
  }

  let res = await post("/herramienta", herramienta);

  return res;
}
