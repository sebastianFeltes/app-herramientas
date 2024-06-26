import StyledInput from "../components/StyledInput";

    
    function HistorialHerramientas() {
        return (
            <div className="min-h-screen flex flex-col items-center">
            
             {/* Botones para agregar filtros */}
            <div>
                <StyledInput type={"text"} placeholder={"nombre de usuario"} TLLabel={"filtrar por usuario"}/>
            </div>
            {/* Paginación  */}
            <div role="tablist" className="tabs tabs-boxed ">
              <a role="tab" className="tab">Tab 1</a>
              <a role="tab" className="tab tab-active">Tab 2</a>
              <a role="tab" className="tab">Tab 3</a>
            </div>
      
            {/* Contenedor de la tabla */}
            <div className="flex-grow justify-center w-full mb-10">
              <table className="table table-zebra w-full">
                {/* cabecera */}
                <thead>
                  <tr>
                    <th ></th>
                    <th >Usuario</th>
                    <th >Herramienta</th>
                    <th >Fecha/Hora</th>
                    <th >Estado de herramienta</th>
                  </tr>
                </thead>
                <tbody>
                  {/* fila 1 */}
                  <tr>
                    <th >1</th>
                    <td >Cy Ganderton</td>
                    <td >Quality Control Specialist</td>
                    <td >3-03-2024/17:32</td>
                    <td >Rippio</td>
                  </tr>
                  {/* fila 2 */}
                  <tr>
                    <th >2</th>
                    <td >Jorge</td>
                    <td >Martillo</td>
                    <td >10-06-2024</td>
                    <td >Vive</td>
                  </tr>
                </tbody>
              </table>
      
              </div>
          </div>
        );
      }
  
export default HistorialHerramientas