import { useEffect, useRef, useState } from "react";
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
  const [hora, setHora] = useState(null);
  const [err, setErr] = useState("");
  const [succes, setSucces] = useState("");
  function getHora() {
    let date = new Date().toLocaleTimeString();
    setHora(date);
  }
  useEffect(() => {
    setInterval(() => {
      getHora();
    }, 1000);
  }, []);
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
      code.current.value = "";
    }

    //Se fija si el ultimo elemento del array es "_" y si es trae los datos
    if (cadena[cadena.length - 1] == "_" && paso == 2) {
      cadena.pop();
      let idHerramienta = parseInt(cadena.join(""));
      //Si la herramienta está, entonces la devuelve
      let Asignadas = herramientasAsignadas.some(
        (herramienta) => idHerramienta == herramienta.id_herramienta
      );

      if (Asignadas) {
        let nuevasHerramientasAsignadas = herramientasAsignadas.filter(
          (herramienta) => idHerramienta != herramienta.id_herramienta
        );
        let response = await returnHerramienta({
          id_alumno: alumno,
          id_herramienta: idHerramienta,
        });
        console.log(response);

        setHerramientasAsignadas(nuevasHerramientasAsignadas);
      } else {
        let isAssigned = herramientasAAsignar.some(
          (herramienta) => idHerramienta == herramienta.id_herramienta
        );
        //Valida si la herramienta está asignada, si no es así continua el flujo
        if (!isAssigned) {
          const response = await getHerramienta(idHerramienta);
          //Valida si response recibe herramientas
          if (response.length > 0) {
            setHerramientasAAsignar([...herramientasAAsignar, response[0]]);
          } else {
            setErr("No se encontró la herramienta")
          }
        }
      }
      code.current.value = "";
    }
    //Cierre del ciclo
    if (cadena[cadena.length - 1] == "." && paso == 2) {
      let alumnoActual = parseInt(cadena.join(""));
      console.log(alumno);
      console.log(alumnoActual);
      //Verifica si el alumno que cierra el ciclo es el mismo
      if (alumnoActual != alumno) {
        setErr("Alumno distinto")
      } else {
        // eslint-disable-next-line no-unused-vars
        let response = await postHerramientasAAsignar({
          id_alumno: alumno,
          herramientas: herramientasAAsignar,
        });
        setPaso(1);
        setHerramientasAsignadas([]);
        setHerramientasAAsignar([]);
        setAlumno(null);
      }
      code.current.value = "";
    }
  }

  return (
    /* body */
    <div className="flex flex-col justify-center items-center bg-white h-screen w-full p-8 ">
      {/* secuence list */}

      {/* <div className="flex justify-center mb-4">
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
        </div>*/}

      {/* input codigo QR */}

      {/*  <div className="text-black text-2xl border w-full border-cyan-500">
        <div className="flex justify-center ">
          {paso == 1 ? (
            <p className="underline decoration-orange-500">
              Ingrese su QR de alumno
            </p>
          ) : paso == 2 ? (
            <div>
              <p className="underline decoration-orange-500">
                Ingrese el QR de la herramienta
              </p>
            </div>
          ) : (
            false
          )}
        </div>
      </div> */}
      {/*  div madre de las table y info alumno */}
      <div className="flex justify-center items-start gap-2 border rounded-md shadow-sm w-full h-3/4">
        {/* tabla de herramientas a asignar */}
        <div className="flex gap-4 flex-col items-center w-1/3">
          <span className="text-blue-700 text-lg font-semibold  underline decoration-blue-400">
            Herramientas a asignar
          </span>
          <table className="table">
            <thead className="text-blue-400">
              <tr>
                <td>Nombre</td>
                <td>Marca</td>
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
        <div className=" flex flex-col items-center w-1/3 shadow-lg self-center h-3/4 justify-start">
          <form className="flex justify-center w-full text-black">
            <StyledInput
              placeholder={
                paso == 1
                  ? "Escanee su código de alumno"
                  : "Escanee el código de la herramienta"
              }
              type={"password"}
              TLLabel={"Código"}
              inputRef={code}
              focus={true}
              onChange={(e) => LecturaQr(e)}
            />
          </form>
          <div className="flex flex-col justify-center items-center text-black">
            <span className="underline text-gray-600 decoration-blue-700 ">
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
            <span className="italic text-lg">Curso</span>
            <span className="underline text-gray-600 decoration-blue-700">
              Horario
            </span>
            <span className="italic text-lg">{hora}</span>
          </div>
          <div className="flex justify-center ">
            {herramientasAAsignar.length > 0 ? (
              <p className="underline decoration-orange-500">
                Para finalizar el ciclo ingrese su QR de alumno
              </p>
            ) : (
              false
            )}
          </div>
        </div>
        {/* tabla de herramientas asignadas */}
        <div className="flex gap-4 flex-col items-center w-1/3 shadow-sm">
          <span className="text-neutral-700 text-lg font-semibold underline decoration-gray-400">
            Herramientas asignadas
          </span>
          <table className="table">
            <thead className="text-blue-400">
              <tr>
                <td>Nombre</td>
                <td>Marca</td>
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
  );
}

export default LectorQr;
