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
  //CREO LOS ESTADOS categorias Y estados QUE SE VA A LLENAR CON LOS DATOS QUE VENGAN DE LA DB
  const [categorias, setCategorias] = useState([]);
  const [estados, setEstados] = useState([]);

  // ESTADOS PARA MOSTRAR EL MODAL UNA VEZ QUE CARGO LA HERRAMIENTA
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(undefined);

  // ID DE QUIEN CARGA LA HERRAMIENTA
  const [idDocente, setIdDocente] = useState(null);

  // ESTADO QUE LE PASO A LA PROPIEDAD DISABLED DEL BOTON ENVIAR
  const [disabled, setDisabled] = useState(true);

  //CREO UNA REFERENCIA PARA CADA UNO DE LOS INPUTS
  let nombre = useRef();
  let marca = useRef();
  let categoria = useRef();
  let numSerie = useRef();
  let fechaCompra = useRef();
  let origenHerramienta = useRef();
  let estadoHerramienta = useRef();
  let vidaUtil = useRef();
  let consumible = useRef();
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
    // traigo el id del docente que carga la herr desde el localStorage
    localStorage.getItem("idDocente") &&
      setIdDocente(parseInt(localStorage.getItem("idDocente")));
  }, []);

  // CHEQUEA QUE TODOS LOS CAMPOS REQUERIDOS ESTEN LLENOS PARA ACTIVAR EL BOTON DE ENVIAR
  function checkFormComplete() {
    const formDataCompleted =
      nombre.current.value &&
      marca.current.value &&
      categoria.current.value &&
      cantidad.current.value &&
      numSerie.current.value &&
      fechaCompra.current.value &&
      origenHerramienta.current.value &&
      estadoHerramienta.current.value &&
      vidaUtil.current.value;

    // Si falta algún campo, deshabilita el botón
    setDisabled(!formDataCompleted);
  }

  //FUNCIÓN QUE SE EJECUTA CUANDO HAGO EL SUBMIT
  //SETEA LOS DATOS DE LA HERRAMIENTA Y SE LOS ENVÍA A LA FUNCIÓN "postAltaHerramienta()"
  async function enviarDatos(e) {
    e.preventDefault();

    const nuevaHerramienta = {
      nombre: nombre.current.value,
      marca: marca.current.value,
      categoria: parseInt(categoria.current.value),
      cantidad: parseInt(cantidad.current.value),
      consumible: consumible.current.checked,
      numSerie: numSerie.current.value,
      fechaCompra: fechaCompra.current.value.split("-").reverse().join("/"),
      origenHerramienta: origenHerramienta.current.value,
      estadoHerramienta: parseInt(estadoHerramienta.current.value),
      fechaCarga: new Date().toLocaleDateString(),
      horaCarga: new Date().toLocaleTimeString(),
      vidaUtil: vidaUtil.current.value,
      idDocente: idDocente,
    };

    let res = await postAltaHerramienta(nuevaHerramienta);

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
                onChange={checkFormComplete}
              />
              <StyledInput
                placeholder={"Ingrese la marca"}
                type={"text"}
                TLLabel={"Marca"}
                inputRef={marca}
                textColor={"text-black"}
                onChange={checkFormComplete}
              />

              <div className="flex flex-col justify-center pb-3 w-full max-w-xs">
                <label className="text-label text-black underline grey pb-1">
                  Categoría
                </label>
                <select
                  ref={categoria}
                  placeholder="Seleccione una categoría"
                  onChange={checkFormComplete}
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

              <StyledInput
                placeholder={"Ingrese la cantidad"}
                type={"number"}
                min={1}
                TLLabel={"Cantidad"}
                inputRef={cantidad}
                textColor={"text-black"}
                onChange={checkFormComplete}
              />

              <div className="flex flex-col justify-center pb-3 w-full max-w-xs">
                <label className="text-label text-black underline grey pb-1 pt-2">
                  Consumible
                </label>
                <div className="h-10 flex justify-start items-center gap-2 ml-2">
                  <span className="text-label text-black">No</span>
                  <input
                    defaultChecked={false}
                    type="checkbox"
                    className="toggle toggle-info"
                    ref={consumible}
                    onChange={checkFormComplete}
                  />
                  <span className="text-label text-black">Si</span>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center ">
              <StyledInput
                placeholder={"Ingrese el núm. de serie"}
                type={"text"}
                TLLabel={"Número de serie"}
                inputRef={numSerie}
                textColor={"text-black"}
                onChange={checkFormComplete}
              />
              <StyledInput
                placeholder={"Ingrese la fecha de compra"}
                type={"date"}
                TLLabel={"Fecha de compra"}
                inputRef={fechaCompra}
                textColor={"text-black"}
                onChange={checkFormComplete}
              />
              <StyledInput
                placeholder={"Ingrese el origen"}
                type={"text"}
                TLLabel={"Origen de la herramienta"}
                inputRef={origenHerramienta}
                textColor={"text-black"}
                onChange={checkFormComplete}
              />
              <div className="flex flex-col justify-center pb-3 w-full max-w-xs">
                <label className="text-label text-black underline pb-2 ">
                  Estado al ingreso
                </label>
                <select
                  onChange={checkFormComplete}
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
                min={1}
                TLLabel={"Vida útil de la herramienta"}
                inputRef={vidaUtil}
                textColor={"text-black"}
                onChange={checkFormComplete}
              />
            </div>
          </div>
          <div className="w-full flex justify-around">
            <StyledButton
              accept
              disabled={disabled}
              btnType={"submit"}
              innerText={"Enviar"}
            />
            <StyledButton remove btnType={"reset"} innerText={"Cancelar"} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AltaHerramientas;
