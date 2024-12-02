import { get } from "./utils.services";

export async function obtenerInventario(paginaActual,itemsPorPagina) {
  const data = await get(`/inventario?page=${paginaActual}&items=${itemsPorPagina}`);
  return data;
}

export async function filtrarInventario(paginaActual,itemsPorPagina,filtro) {
  const data = await get(`/inventario-filtro?page=${paginaActual}&items=${itemsPorPagina}&filtro=${filtro}`);
  return data;
}