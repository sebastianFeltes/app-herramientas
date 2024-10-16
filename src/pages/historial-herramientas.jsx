import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StyledInput from "../components/StyledInput";
import { getHistorialHerramientas } from "../services/historial-herramientas.service";
    
    function HistorialHerramientas() {
       const [herramientas , setHerramientas] = useState([]);
       async function obtenerHerramientas () {
          const res =await getHistorialHerramientas();
        console.log(res);
        
          setHerramientas(res)  
       } 

       useEffect(()=>{
        obtenerHerramientas()
       } ,[])
       
      return (
        <> <Navbar/>
        <div className="bg-white min-h-screen flex flex-col items-center ">
            <div className=" filtros-container gap-9 mb-3 flex w-25 ">
                <StyledInput textColor={"text-black"} type={"text"} placeholder={"Aplicar filtros"} />
            </div>
            {/* Contenedor de la tabla */}
            <div className="flex-grow justify-center w-full mb-10 mt-4">
              <table className="table text-black w-full ">
                {/* cabecera */}
                <thead className="text-gray-700 bg-gray-300 ">
                  <tr >
                    <th >USUARIO</th>
                    <th >HERRAMIENTA</th>
                    <th>MOVIMIENTO</th>
                    <th >FECHA</th>
                    <th>HORA</th>
                    <th >ESTADO DE HERRAMIENTA</th>
                  </tr>
                </thead>
                <tbody>
                 {herramientas.map((herramienta, index)=>(<tr key={index}>           
                  <td>{herramienta.nombre_alumno} {herramienta.apellido_alumno}</td>
                  <td>{herramienta.nombre_herramienta} </td>
                  <td>{herramienta.movimiento} </td>
                  <td>{herramienta.fecha} </td>
                  <td>{herramienta.hora} </td>
                  <td>{herramienta.estado} </td>
                 </tr>))}
                </tbody>
              </table>
              </div>
        
        </div>
        </>
        );
      }
  
export default HistorialHerramientas