import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import { postAltaHerramienta } from "../services/alta-herramientas.services";

function AltaHerramientas() {
  //CONSTANTE CONSUMIBLE PARA PODER IR AUMENTANDOLO
  const [consumible, setConsumible] = useState(false);
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

  //FUNCIÓN QUE SE EJECUTA CUANDO HAGO EL SUBMIT
  //SETEA LOS DATOS DE LA HERRAMIENTA Y SE LOS ENVÍA A LA FUNCIÓN "postAltaHerramienta()"
  async function enviarDatos(e) {
    e.preventDefault();

    const nuevaHerramienta = {
      nombre: nombre.current.value,
      marca: marca.current.value,
      categoria: categoria.current.value,
      numSerie: numSerie.current.value,
      fechaCompra: fechaCompra.current.value.split("-").reverse().join("/"),
      origenHerramienta: origenHerramienta.current.value,
      estadoHerramienta: estadoHerramienta.current.value,
      fechaCarga: new Date().toLocaleDateString(),
      vidaUtil: vidaUtil.current.value,
    };

    let res = await postAltaHerramienta(nuevaHerramienta);
    console.log(res);
    return res;
  }

  //SI ELIJO CATEGORÍA CONSUMIBLE PUEDO AUMENTARLE LA CANTIDAD
  function hacerConsumible() {
    if (categoria.current.value == "consumible") {
      return setConsumible(true);
    } else {
      return setConsumible(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-white h-screen flex flex-col justify-center items-center w-full ">
        <h1 className="text-black font-bold text-3xl mb-2">
          Alta de herramientas
        </h1>
        <form
          onSubmit={(e) => enviarDatos(e)}
          className="w-3/4  bg-white shadow-2xl shadow-black rounded-lg pb-3 pt-5 px-16 flex flex-row justify-evenly items-center"
          action=""
        >
          <div className="w-1/2 flex flex-col items-center justify-center">
            <StyledInput
              placeholder={"Ingrese el nombre"}
              type={"text"}
              TLLabel={"Nombre"}
              inputRef={nombre}
            />
            <StyledInput
              placeholder={"Ingrese la marca"}
              type={"text"}
              TLLabel={"Marca"}
              inputRef={marca}
            />

            <div className="flex flex-col justify-center pb-3 w-full max-w-xs">
              <label className="text-label underline grey pb-1">
                Categoría
              </label>
              <div className="flex gap-1 max-w-xs ">
                <select
                  onChange={hacerConsumible}
                  ref={categoria}
                  placeholder="Seleccione una categoría"
                  className={`input  input-bordered rounded-full bg-white border focus:border-none ring-1 ring-transparent focus:ring-1 focus:ring-blue-400 focus:outline-none 
                    ${consumible ? "w-full" : "w-full"}`}
                >
                  <option value={undefined}>Seleccione una categoría</option>
                  <option value={"categoria 1"} className="text-black">
                    Categoría 1
                  </option>
                  <option value={"categoria 2"} className="text-black">
                    Categoría 2
                  </option>
                  <option value={"consumible"} className="text-black">
                    Consumible
                  </option>
                </select>
                {consumible ? (
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
                )}
              </div>
            </div>

            <StyledInput
              placeholder={"Ingrese el núm. de serie"}
              type={"number"}
              TLLabel={"Número de serie"}
              inputRef={numSerie}
            />
            <StyledButton accept btnType={"submit"} innerText={"Enviar"} />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center ">
            <StyledInput
              placeholder={"Ingrese la fecha de compra"}
              type={"date"}
              TLLabel={"Fecha de compra"}
              inputRef={fechaCompra}
            />
            <StyledInput
              placeholder={"Ingrese el origen"}
              type={"text"}
              TLLabel={"Origen de la herramienta"}
              inputRef={origenHerramienta}
            />
            <div className="flex flex-col justify-center pb-3 w-full max-w-xs">
              <label className="text-label underline grey pb-2 ">
                Estado al ingreso
              </label>
              <select
                ref={estadoHerramienta}
                className="input  input-bordered rounded-full bg-white border focus:border-none ring-1 ring-transparent focus:ring-1 focus:ring-blue-400 focus:outline-none w-full"
              >
                <option value={undefined}>Seleccione un estado</option>
                <option value={"Nuevo"} className="text-black">
                  Nuevo
                </option>
                <option value={"Usado"} className="text-black">
                  Usado
                </option>
                <option value={"Dañado"} className="text-black">
                  Dañado
                </option>
              </select>
            </div>
            <StyledInput
              placeholder={"Ingrese la vida útil"}
              type={"text"}
              TLLabel={"Vida útil de la herramienta"}
              inputRef={vidaUtil}
            />
            <StyledButton remove btnType={""} innerText={"Cancelar"} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AltaHerramientas;
