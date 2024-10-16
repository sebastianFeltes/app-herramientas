import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import {
  postAltaHerramienta,
  getCategorias,
  getEstados,
} from "../services/alta-herramientas.services";
import ModalMessage from "../components/ModalMessage";

function AltaHerramientas() {
  //CREO EL ESTADO categorias QUE SE VA A LLENAR CON LAS CATEGORÍAS QUE VENGAN DE LA DB
  const [categorias, setCategorias] = useState([]);

  //CREO EL ESTADO estados QUE SE VA A LLENAR CON LOS ESTADOS QUE VENGAN DE LA DB
  const [estados, setEstados] = useState([]);

  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(undefined);

  /* //CREO EL ESTADO consumible PARA PODER IR AUMENTANDOLO
  const [consumible, setConsumible] = useState(false); */

  //CREO UNA REFERENCIA PARA CADA UNO DE LOS INPUTS
  let nombre = useRef();
  let marca = useRef();
  let categoria = useRef();
  let numSerie = useRef();
  let fechaCompra = useRef();
  let origenHerramienta = useRef();
  let estadoHerramienta = useRef();
  let vidaUtil = useRef();
  let cantidad = useRef();

  //FUNCIÓN QUE OBTIENE LAS CATEGORÍAS DE QUE TENEMOS EN LA DB
  //Y SETEA categorias CON LOS DATOS QUE LLEGAN
  async function obtenerCategorias() {
    const res = await getCategorias();
    return setCategorias(res);
  }

  //FUNCIÓN QUE OBTIENE LOS ESTADOS QUE TENEMOS EN LA DB
  //Y SETEA estados CON LOS DATOS QUE LLEGAN
  async function obtenerEstados() {
    const res = await getEstados();
    return setEstados(res);
  }

  //SETEO ESTADO Y CATEGORÍA CUANDO SE RECARGA LA PÁGINA
  useEffect(() => {
    obtenerCategorias();
    obtenerEstados();
  }, []);

  //FUNCIÓN QUE SE EJECUTA CUANDO HAGO EL SUBMIT
  //SETEA LOS DATOS DE LA HERRAMIENTA Y SE LOS ENVÍA A LA FUNCIÓN "postAltaHerramienta()"
  async function enviarDatos(e) {
    e.preventDefault();

    const nuevaHerramienta = {
      nombre: nombre.current.value,
      marca: marca.current.value,
      categoria: parseInt(categoria.current.value),
      consumible: parseInt(cantidad.current.value),
      numSerie: numSerie.current.value,
      fechaCompra: fechaCompra.current.value.split("-").reverse().join("/"),
      origenHerramienta: origenHerramienta.current.value,
      estadoHerramienta: parseInt(estadoHerramienta.current.value),
      fechaCarga: new Date().toLocaleDateString(),
      vidaUtil: vidaUtil.current.value,
    };

    let res = await postAltaHerramienta(nuevaHerramienta);
    console.log(res);

    // SI EL SERVIDOR RESPONDE CON "herramienta cargada" MUESTRO EL MODAL QUE DIGA HERRAMIENTA CARGADA
    // SINO UNO QUE DIGA ERROR
    if (res.message == "herramienta cargada") {
      setSuccess(res.message);
    } else {
      setError(res.message);
    }
    document.getElementById("my_modal_1").showModal();
    return res;
  }

  /*  //SI ELIJO CATEGORÍA CONSUMIBLE PUEDO AUMENTARLE LA CANTIDAD
  function hacerConsumible() {
    if (consumibleRef.current.value == "consumible") {
      return setConsumible(true);
    } else {
      return setConsumible(false);
    }
  } */

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
                  <option value={undefined}>Seleccione una categoría</option>
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
                  <option value={undefined}>Seleccione un estado</option>
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

export default AltaHerramientas;
