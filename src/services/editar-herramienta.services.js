import { get, post } from "./utils.services"

export async function ObtenerDatosHerramienta(id) {
    const path = `/herramienta/${id}`
    const response = await get(path)
    return response
}
export async function EditarHerramienta(id,data) {
    const path = `/herramienta/${id}`
    const response = await post(path,data)
    return response
}