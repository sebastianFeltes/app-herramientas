import React, { useState } from "react";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import { get } from "../services/utils.services";

function Inventario() {
  const [inventario, setInventario] = useState(undefined);

  async function obtenerInventario() {
    const data = await get("/inventario");
    setInventario(data);
  }

  return (
    <div className="hero bg-white min-h-screen w-full">
      <div className=" m-0 p-0 w-full">
        <div className="w-screen h-screen flex flex-col justify-start items-center gap-4 text-black ">
          <h1 className="text-5xl font-bold">Inventario</h1>
          <div className="w-full flex justify-evenly items-center gap-2 border bg-blue-700 p-2">
            <StyledInput
              textColor={"text-black"}
              placeholder={"Filtrar por nombre"}
            />
            <StyledInput
              textColor={"text-black"}
              placeholder={"Filtrar por marca"}
            />
            <StyledInput
              textColor={"text-black"}
              placeholder={"Filtrar por categoria"}
            />
            <StyledInput
              textColor={"text-black"}
              placeholder={"Filtrar por estado"}
            />
          </div>
          <div className="w-full grow-1 border">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="text-gray-700">
                  <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Categoria</th>
                    <th>Nro Serie</th>
                    <th>Estado</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th></th>
                    <th>Martillo</th>
                    <td>Bullit</td>
                    <td>Manual</td>
                    <td>65484</td>
                    <td>Bueno</td>
                    <td>
                      <StyledButton
                        innerText={"Editar"}
                        btnType="submit"
                        accept
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventario;
