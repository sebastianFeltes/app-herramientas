import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import { EditarHerramienta, ObtenerDatosHerramienta } from "../services/editar-herramienta.services";
import ModalMessage from "../components/ModalMessage";
import {
  getCategorias,
  getEstados,
} from "../services/alta-herramientas.services";
import { data } from "autoprefixer";
// import { putEditHerramienta } from "../services/alta-herramientas.services";

function EditHerramientas() {
  //CREO LOS ESTADOS categorias Y estados QUE SE VA A LLENAR CON LOS DATOS QUE VENGAN DE LA DB
  const [categorias, setCategorias] = useState([]);
  const [estados, setEstados] = useState([]);
  const [idDocente, setIdDocente] = useState(null);
  const [idHerramienta,setIdHerramienta] = useState(1); 
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(undefined);

  let nombre = useRef();
  let marca = useRef();
  let categoria = useRef();
  let numSerie = useRef();
  let fechaCompra = useRef();
  let origenHerramienta = useRef();
  let estadoHerramienta = useRef();
  let vidaUtil = useRef();
  let cantidad = useRef();

  async function enviarDatos(e) {
    e.preventDefault();
    const herramientaEditada = {
      nombre: nombre.current.value,
      marca: marca.current.value,
      nro_serie: numSerie.current.value,
      id_categoria: parseInt(categoria.current.value),
      id_estado: parseInt(estadoHerramienta.current.value),
      cantidad,
      fecha_compra: fechaCompra.current.value.split("-").reverse().join("/"),
      fecha_carga: new Date().toLocaleDateString(),
      hora_carga: new Date().toLocaleTimeString(),
      origen_fondo_compra: origenHerramienta.current.value,
      vida_util: vidaUtil.current.value,
      id_docente: idDocente,
      consumible: parseInt(cantidad.current.value)
    };
    console.log(herramientaEditada);
    let res = await EditarHerramienta(idHerramienta,herramientaEditada)
    console.log(res);
    
  }

  //FUNCIÓN QUE OBTIENE LAS CATEGORÍAS DE QUE TENEMOS EN LA DB
  //Y SETEA categorias CON LOS DATOS QUE LLEGAN
  async function obtenerCategorias() {
    const res = await getCategorias();
    // console.log(res);
    return setCategorias(res);
  }

  //FUNCIÓN QUE OBTIENE LOS ESTADOS QUE TENEMOS EN LA DB
  //Y SETEA estados CON LOS DATOS QUE LLEGAN
  async function obtenerEstados() {
    const res = await getEstados();
    // console.log(res);
    return setEstados(res);
  }

  //SETEO ESTADO Y CATEGORÍA CUANDO SE RECARGA LA PÁGINA
  useEffect(() => {
    obtenerCategorias();
    obtenerEstados();
    // traigo el id del docente que carga la herr desde el localStorage
    localStorage.getItem("idDocente") &&
      setIdDocente(parseInt(localStorage.getItem("idDocente")));
  }, []);

  async function traerHerramienta() {
    let data = await ObtenerDatosHerramienta(idHerramienta);
    let res = await data[0];
    // console.log(res);
    if (res && res.nombre) {
      nombre.current.value = res.nombre;
      marca.current.value = res.marca;
      categoria.current.value = res.id_categoria;
      cantidad.current.value = res.cantidad;
      numSerie.current.value = res.nro_serie;
      fechaCompra.current.value = res.fecha_compra
        .split("-")
        .reverse()
        .join("-");
      origenHerramienta.current.value = res.origen_fondo;
      estadoHerramienta.current.value = res.id_estado;
      vidaUtil.current.value = res.vida_util;
    } else {
      setError("No se pudo obtener datos de la herramienta");
    }
  }

  useEffect(() => {
    traerHerramienta();
  }, []);

  return (
    <>
      <Navbar />
      <ModalMessage text={error || success} error={error ? true : false} />
      <div className="bg-white h-min-screen flex flex-col justify-center items-center w-full">
        <form
          onReset={(e) => {
            e.target.reset();
          }}
          onSubmit={(e) => enviarDatos(e)}
          className="w-3/4 bg-white shadow-2xl shadow-black rounded-lg py-5 px-16 my-8 flex flex-col items-center"
          action=""
        >
          <div className="w-full flex flex-row justify-evenly items-center">
            <div className="w-1/2 flex flex-col items-center justify-center">
              <StyledInput
                placeholder={"Ingrese el nombre"}
                type={"text"}
                TLLabel={"Nombre"}
                inputRef={nombre}
                textColor={"text-black"}
              />
              <StyledInput
                placeholder={"Ingrese la marca"}
                type={"text"}
                TLLabel={"Marca"}
                inputRef={marca}
                textColor={"text-black"}
              />

              <div className="flex flex-col justify-center pb-3 w-full max-w-xs">
                <label className="text-label text-black underline grey pb-1">
                  Categoría
                </label>
                <select
                  ref={categoria}
                  placeholder="Seleccione una categoría"
                  className={`input  input-bordered rounded-full bg-white border focus:border-none ring-1 ring-transparent focus:ring-1 focus:ring-blue-400 focus:outline-none 
                  `}
                >
                  <option value={categoria}>Seleccione una categoría</option>
                  {categorias
                    ? categorias.map((categoria, index) => (
                        <option key={index} value={categoria.id_categoria}>
                          {categoria.nombre}
                        </option>
                      ))
                    : false}
                </select>
              </div>

              <div className="flex flex-col justify-center pb-3 w-full max-w-xs">
                <label className="text-label text-black underline grey pb-1">
                  Consumible
                </label>
                <input
                  placeholder="Ingrese la cantidad"
                  type="number"
                  min={1}
                  className="input input-bordered rounded-full w-full bg-white border focus:border-none ring-1 ring-transparent focus:ring-1 focus:ring-blue-400 focus:outline-none"
                  ref={cantidad}
                />
                {/* {consumible ? (
                <span className="w-1/4">
                  <input
                    type="number"
                    min={1}
                    className="input input-bordered rounded-full w-full bg-white border focus:border-none ring-1 ring-transparent focus:ring-1 focus:ring-blue-400 focus:outline-none"
                    ref={cantidad}
                  />
                </span>
              ) : (
                false
              )} */}
              </div>
              <StyledInput
                placeholder={"Ingrese el núm. de serie"}
                type={"text"}
                TLLabel={"Número de serie"}
                inputRef={numSerie}
                textColor={"text-black"}
              />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center ">
              <StyledInput
                placeholder={"Ingrese la fecha de compra"}
                type={"date"}
                TLLabel={"Fecha de compra"}
                inputRef={fechaCompra}
                textColor={"text-black"}
              />
              <StyledInput
                placeholder={"Ingrese el origen"}
                type={"text"}
                TLLabel={"Origen de la herramienta"}
                inputRef={origenHerramienta}
                textColor={"text-black"}
              />
              <div className="flex flex-col justify-center pb-3 w-full max-w-xs">
                <label className="text-label text-black underline pb-2 ">
                  Estado al ingreso
                </label>
                <select
                  ref={estadoHerramienta}
                  className="input input-bordered rounded-full bg-white border focus:border-none ring-1 ring-transparent focus:ring-1 focus:ring-blue-400 focus:outline-none w-full"
                >
                  <option value={estadoHerramienta}>
                    Seleccione un estado
                  </option>
                  {estados
                    ? estados.map((estado, index) => (
                        <option key={index} value={estado.id_estado}>
                          {estado.nombre}
                        </option>
                      ))
                    : false}
                </select>
              </div>
              <StyledInput
                placeholder={"Ingrese la vida útil en años"}
                type={"number"}
                TLLabel={"Vida útil de la herramienta"}
                inputRef={vidaUtil}
                textColor={"text-black"}
              />
            </div>
          </div>
          <div className="w-full flex justify-around">
            <StyledButton accept btnType={"submit"} innerText={"Enviar"} />
            <StyledButton remove btnType={"reset"} innerText={"Cancelar"} />
          </div>
        </form>
      </div>
    </>
  );
}

export default EditHerramientas;
