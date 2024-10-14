import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import StyledInput from "../components/StyledInput";
import {
  getHerramienta,
  getHerramientasUso,
  postHerramientasAAsignar,
  returnHerramienta,
} from "../services/lector-qr.services";

function LectorQr() {
  const code = useRef();
  const [herramientasAsignadas, setHerramientasAsignadas] = useState([]);
  const [paso, setPaso] = useState(1);
  const [herramientasAAsignar, setHerramientasAAsignar] = useState([]);
  const [alumno, setAlumno] = useState(null);
  async function LecturaQr() {
    let codigo = code.current.value;
    let cadena = codigo.split("");
    //Se fija si el ultimo elemento del array es "." y si es trae los datos. Setea el paso en 2
    if (cadena[cadena.length - 1] == "." && paso == 1) {
      cadena.pop();
      let idAlumno = parseInt(cadena.join(""));
      setAlumno(idAlumno);
      const res = await getHerramientasUso(idAlumno);
      setHerramientasAsignadas(res);
      setPaso(2);
    }

    //Se fija si el ultimo elemento del array es "_" y si es trae los datos
    if (cadena[cadena.length - 1] == "_" && paso == 2) {
      cadena.pop();
      let idHerramienta = parseInt(cadena.join(""));
      //Si la herramienta está, entonces la devuelve
      if (
        herramientasAsignadas.some(
          (herramienta) => idHerramienta == herramienta.id_herramienta
        )
      ) {
        let nuevasHerramientasAsignadas = herramientasAsignadas.filter(
          (herramienta) => idHerramienta != herramienta.id_herramienta
        );
        let response = await returnHerramienta({
          id_alumno: alumno,
          id_herramienta: idHerramienta,
        });
        console.log(response);

        return setHerramientasAsignadas(nuevasHerramientasAsignadas);
      } else {
        let isAssigned = herramientasAAsignar.some(
          (herramienta) => idHerramienta == herramienta.id_herramienta
        );
        if (isAssigned) {
          return console.log("ya está asignada");
        }
        const response = await getHerramienta(idHerramienta);
        //Valida si response recibe herramientas
        if (response.length > 0) {
          return setHerramientasAAsignar([
            ...herramientasAAsignar,
            response[0],
          ]);
        } else {
          return console.log("No se encontró la herramienta");
        }
      }
    }
    //Cierre del ciclo
    if (cadena[cadena.length - 1] == "." && paso == 2) {
      let alumnoActual = parseInt(cadena.join(""));
      console.log(alumno);
      console.log(alumnoActual);

      if (alumnoActual != alumno) {
        console.log("alumno distinto");
      } else {
        let response = await postHerramientasAAsignar({
          id_alumno: alumno,
          herramientas: herramientasAAsignar,
        });
        setPaso(1);
        setHerramientasAsignadas([]);
        setHerramientasAAsignar([]);
        setAlumno(null);
        console.log(herramientasAsignadas);
        console.log(herramientasAAsignar);
      }
    }

    // code.current.value = ""
  }

  return (
    /* body */
    <>
      <Navbar />
      <div className="bg-white h-screen w-full p-2">
        {/* secuence list */}
        <div className="flex justify-center mb-4">
          <ul className="w-1/2 flex justify-center items-center gap-4">
            <li
              className={`p-2 w-1/3 flex flex-col items-center h-12 border-t ${
                paso == 2 ? " border-green-700 " : " border-gray-600"
              }`}
            >
              {paso == 2 ? (
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
              ) : (
                <div className="text-transparent w-6 h-6 border-2 border-gray-600 rounded-full">
                  x
                </div>
              )}
              <span className="text-black text-xs">Obtener herramientas</span>
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
            inputRef={code}
            onChange={LecturaQr}
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
                  <td>Marca</td>
                  <td>Nombre</td>
                  <td>Nro serie</td>
                </tr>
              </thead>
              <tbody className="text-black font-semibold">
                {herramientasAAsignar.length > 0
                  ? herramientasAAsignar.map((herramienta, index) => (
                      <tr key={index}>
                        <td>{herramienta.marca}</td>
                        <td>{herramienta.nombre}</td>
                        <td>{herramienta.nro_serie}</td>
                      </tr>
                    ))
                  : false}
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
              <span className="italic text-lg">
                {herramientasAsignadas.length > 0
                  ? herramientasAsignadas[0].nombre_alumno +
                    " " +
                    herramientasAsignadas[0].apellido_alumno
                  : "Alumno"}
              </span>
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
                  <td>Marca</td>
                  <td>Nombre</td>
                  <td>Nro serie</td>
                </tr>
              </thead>
              <tbody className="text-black font-semibold">
                {herramientasAsignadas.length > 0
                  ? herramientasAsignadas.map((herramienta, index) => (
                      <tr key={index}>
                        <td>{herramienta.marca}</td>
                        <td>{herramienta.nombre}</td>
                        <td>{herramienta.nro_serie}</td>
                      </tr>
                    ))
                  : false}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default LectorQr;
