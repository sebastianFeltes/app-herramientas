import { get } from "./utils.services"

export async function getHistorialHerramientas () {
try {
    const ruta = "/historial-herramientas"
    const res = await  get(ruta)
    return res
} catch (error) {
    throw new Error(error);
}
}