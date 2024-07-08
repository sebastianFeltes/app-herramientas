import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";

function AltaHerramientas() {
  return (
    <>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="text-black font-bold text-3xl mb-2">
          Alta de herramientas
        </h1>
        <form
          className="bg-white shadow-2xl shadow-black rounded-lg pb-3 pt-5 px-16 grid grid-rows-5 grid-flow-col gap-x-20 justify-evenly items-center"
          action=""
        >
          <StyledInput
            placeholder={"Ingrese el nombre"}
            type={"text"}
            TLLabel={"Nombre"}
          />
          <StyledInput
            placeholder={"Ingrese la marca"}
            type={"text"}
            TLLabel={"Marca"}
          />

          <div className="flex flex-col justify-center items-center pb-3">
            <label className="form-control w-full max-w-xs text-gray-800 px-1 py-2 label-text underline decoration-blue-400">
              Categoría
            </label>
            <select
              placeholder="Seleccione una categoría"
              className="select input-bordered w-full max-w-xs px-4 bg-white text-black focus:border-none ring-1 ring-transparent focus:ring-1 focus:ring-blue-400 focus:outline-none"
            >
              <option disabled selected>
                Seleccione una categoría
              </option>
              <option className="text-black">Categoría 1</option>
              <option className="text-black">Categoría 2</option>
              <option className="text-black">Categoría 3</option>
              <option className="text-black">Categoría 4</option>
              <option className="text-black">Categoría 5</option>
            </select>
          </div>

          <StyledInput
            placeholder={"Ingrese núm de serie"}
            type={"number"}
            TLLabel={"Número de serie"}
          />
          <StyledButton accept btnType={"submit"} innerText={"Enviar"} />
          <StyledInput
            placeholder={"Ingrese la fecha de compra"}
            type={"date"}
            TLLabel={"Fecha de compra"}
          />
          <StyledInput
            placeholder={"Ingrese el origen"}
            type={"text"}
            TLLabel={"Origen de la herramienta"}
          />
          <StyledInput
            placeholder={"Ingrese el estado"}
            type={"select"}
            TLLabel={"Estado de la herramienta"}
          />
          <StyledInput
            placeholder={"Ingrese la fecha de carga"}
            type={"date"}
            TLLabel={"Fecha de carga"}
          />
          <StyledButton remove btnType={"submit"} innerText={"Cancelar"} />
        </form>
      </div>
    </>
  );
}

export default AltaHerramientas;
