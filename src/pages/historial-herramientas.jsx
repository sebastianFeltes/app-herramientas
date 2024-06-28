import StyledInput from "../components/StyledInput";

    
    function HistorialHerramientas() {
        return (
            <div className="bg-white min-h-screen flex flex-col items-center ">
             {/* Botones para agregar filtros */}
            <div className=" filtros-container gap-9 mb-3 flex w-25 ">
                <StyledInput  textColor={"text-black"} type={"text"} placeholder={"filtrar por usuario"} />
                <StyledInput textColor={"text-black"} type={"text"} placeholder={"filtrar por herramienta"} />
                <StyledInput textColor={"text-black"} type={"text"} placeholder={"filtrar por fecha"} />
            </div>
            {/* Paginación  */}
            <div role="tablist" className="tabs tabs-boxed bg-gray-700 text-black">
              <a role="tab" className="tab">Tab 1</a>
              <a role="tab" className="tab tab-active">Tab 2</a>
              <a role="tab" className="tab">Tab 3</a>
            </div>
            {/* Contenedor de la tabla */}
            <div className="flex-grow justify-center w-full mb-10 mt-4">
              <table className="table text-black w-full ">
                {/* cabecera */}
                <thead className="text-gray-700 bg-gray-300 ">
                  <tr >
                    <th ></th>
                    <th >Usuario</th>
                    <th >Herramienta</th>
                    <th>movimiento</th>
                    <th >Fecha</th>
                    <th>Hora</th>
                    <th >Estado de herramienta</th>
                  </tr>
                </thead>
                <tbody>
                  {/* fila 1 */}
                  <tr>
                    <th >1</th>
                    <td >Cy Ganderton</td>
                    <td >Quality Control Specialist</td>
                    <td>prestada</td>
                    <td >3-03-2024</td>
                    <td>17:32</td>
                    <td >Rippio</td>
                  </tr>
                  {/* fila 2 */}
                  <tr>
                    <th >2</th>
                    <td >Jorge</td>
                    <td >Martillo</td>
                    <td>prestada</td>
                    <td >10-06-2024</td>
                    <td>19:23</td>
                    <td >Vive</td>
                  </tr>
                  {/*fila 3*/}
                  <tr>
                    <th >1</th>
                    <td >Cy Ganderton</td>
                    <td >rusa</td>
                    <td>devuelta</td>
                    <td >3-03-2024</td>
                    <td>17:32</td>
                    <td >Rippio</td>
                  </tr>
                </tbody>
              </table>
              </div>
          </div>
        );
      }
  
export default HistorialHerramientas