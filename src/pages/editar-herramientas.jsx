import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import { ObtenerDatosHerramienta } from "../services/editar-herramienta.services";
// import { putEditHerramienta } from "../services/alta-herramientas.services";

function EditHerramientas() {
  const [herramienta, setHerramienta] = useState({
    nombre: "",
    marca: "",
    categoria: "",
    numSerie: "",
    fechaCompra: "",
    origenHerramienta: "",
    estadoHerramienta: "",
    vidaUtil: "",
    cantidad: "",
  });
  const categoria = undefined;
  const [consumible, setConsumible] = useState(categoria === "consumible");
  let nombreRef = useRef();
  let marcaRef = useRef();
  let categoriaRef = useRef();
  let numSerieRef = useRef();
  let fechaCompraRef = useRef();
  let origenHerramientaRef = useRef();
  let estadoHerramientaRef = useRef();
  let vidaUtilRef = useRef();
  let cantidadRef = useRef();

  async function enviarDatos(e) {
    e.preventDefault();

    const herramientaEditada = {
      nombre: nombreRef.current.value,
      marca: marcaRef.current.value,
      categoria: categoriaRef.current.value,
      numSerie: numSerieRef.current.value,
      fechaCompra: fechaCompraRef.current.value.split("-").reverse().join("/"),
      origenHerramienta: origenHerramientaRef.current.value,
      estadoHerramienta: estadoHerramientaRef.current.value,
      fechaCarga: new Date().toLocaleDateString(),
      vidaUtil: vidaUtilRef.current.value,
    };

    // let res = await putEditHerramienta(herramientaEditada);
    // console.log(res);
    // return res;
  }

  function hacerConsumible() {
    if (categoriaRef.current.value == "consumible") {
      setConsumible(true);
    } else {
      setConsumible(false);
    }
  }

  async function traerHerramienta() {
    let res = await ObtenerDatosHerramienta(1);
    console.log(res);
    if (res){
      nombreRef.current.value = res.nombre
    }
  }

  useEffect(() => {
    traerHerramienta();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white h-screen flex flex-col justify-center items-center w-full ">
        <h1 className="text-black font-bold text-3xl mb-2">
          Edición de herramientas
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
              inputRef={nombreRef}
            />
            <StyledInput
              placeholder={"Ingrese la marca"}
              type={"text"}
              TLLabel={"Marca"}
              inputRef={marcaRef}
            />

            <div className="flex flex-col justify-center pb-3 w-full max-w-xs">
              <label className="text-label underline grey pb-1">
                Categoría
              </label>
              <div className="flex gap-1 max-w-xs ">
                <select
                  onChange={hacerConsumible}
                  ref={categoriaRef}
                  defaultValue={categoria}
                  placeholder="Seleccione una categoría"
                  className={`input  input-bordered rounded-full bg-white border focus:border-none ring-1 ring-transparent focus:ring-1 focus:ring-blue-400 focus:outline-none 
                    ${consumible ? "w-full" : "w-full"}`}
                >
                  <option value={undefined}>Seleccione una categoría</option>
                  <option value={"cat1"} className="text-black">
                    Categoría 1
                  </option>
                  <option value={"cat2"} className="text-black">
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
                      ref={cantidadRef}
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
              inputRef={numSerieRef}
            />
            <StyledButton accept btnType={"submit"} innerText={"Enviar"} />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center ">
            <StyledInput
              placeholder={"Ingrese la fecha de compra"}
              type={"date"}
              TLLabel={"Fecha de compra"}
              inputRef={fechaCompraRef}
            />
            <StyledInput
              placeholder={"Ingrese el origen"}
              type={"text"}
              TLLabel={"Origen de la herramienta"}
              inputRef={origenHerramientaRef}
            />
            <div className="flex flex-col justify-center pb-3 w-full max-w-xs">
              <label className="text-label underline grey pb-2 ">
                Estado al ingreso
              </label>
              <select
                ref={estadoHerramientaRef}
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
              inputRef={vidaUtilRef}
            />
            <StyledButton remove btnType={""} innerText={"Cancelar"} />
          </div>
        </form>
      </div>
    </>
  );
}

export default EditHerramientas;
