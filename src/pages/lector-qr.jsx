import Navbar from "../components/Navbar";
import StyledInput from "../components/StyledInput";

function LectorQr() {
  return (
    /* body */
    <>
      <Navbar />
      <div className="bg-white h-screen w-full p-2">
        {/* secuence list */}
        <div className="flex justify-center mb-4">
          <ul className="w-1/2 flex justify-center items-center gap-4">
            <li className="border-t border-green-700 p-2 w-1/3 flex flex-col items-center h-12">
              <div className="w-6 h-6 border-2 border-green-400 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="lime"
                  className="w-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <span className="text-black">Registrar QR</span>
            </li>
            <li className="border-t border-gray-700 border-dotted p-2 w-1/3 flex flex-col items-center h-12">
              <div className="text-transparent w-6 h-6 border-2 border-gray-600 rounded-full">
                x
              </div>
              <span className="text-gray-700">Registrar herramienta</span>
            </li>
            <li className="w-1/3 flex flex-col items-center h-12">
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
              <span className="">Registrar tipo</span>
            </li>
          </ul>
        </div>
        {/* input codigo QR */}
        <div className="flex justify-center">
          <StyledInput
            placeholder={"Escanee su código"}
            type={"password"}
            TLLabel={"Código"}
          />
        </div>
        {/*  div madre de las table y info alumno */}
        <div className="flex justify-around gap-2 ">
          {/* tabla de herramientas a asignar */}
          <div className="border shadow-md p-2 rounded-lg flex gap-4 flex-col items-center w-1/3">
            <span className="text-blue-700 text-lg font-semibold  underline decoration-blue-400">
              Herramientas a asignar
            </span>
            <table className="table">
              <thead className="text-blue-400">
                <tr>
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Categoría</th>
                </tr>
              </thead>
              <tbody className="text-black font-semibold">
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*info del alumno */}
          <div className="border shadow-md p-2 rounded-lg flex gap-4 flex-col items-center w-1/3">
            <p className="text-blue-500 underline decoration-orange-500 font-bold text-2xl">
              Ingrese su código QR de alumno
            </p>
            <div className="flex flex-col justify-center items-center text-black">
              <span className="underline text-gray-600 decoration-blue-700">
                Alumno
              </span>
              <span className="italic text-lg"></span>
              <span className="underline text-gray-600 decoration-blue-700">
                Curso
              </span>
              <span className="italic text-lg"></span>
              <span className="underline text-gray-600 decoration-blue-700">
                Horario
              </span>
              <span className="italic text-lg"></span>
            </div>
          </div>
          {/* tabla de herramientas asignadas */}
          <div className="border shadow-md p-2 rounded-lg flex gap-4 flex-col items-center w-1/3">
            <span className="text-neutral-700 text-lg font-semibold underline decoration-gray-400">
              Herramientas asignadas
            </span>
            <table className="table">
              <thead className="text-blue-400">
                <tr>
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Categoría</th>
                </tr>
              </thead>
              <tbody className="text-black font-semibold">
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default LectorQr;
