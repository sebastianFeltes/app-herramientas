import { get } from "./utils.services"

export async function ObtenerDatosHerramienta(id) {
    const path = `/herramienta/${id}`
    const response = await get(path)
    return response
}