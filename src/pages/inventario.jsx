import React, { useEffect, useRef, useState } from "react";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import { get } from "../services/utils.services";

function Inventario() {
  const [inventario, setInventario] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(2);
  const [itemsPerPage] = useState(2);
  const [totalItems, setTotalItems] = useState(0);

  const term = useRef(); //referencia para el termino del filtro

  async function obtenerInventario() {
    const data = await get(
      "/inventario?page=" + currentPage + "&items=" + itemsPerPage
      // "/inventario?page=1&items=10"
    );
    // setInventario(data);
    console.log(data);
    setCurrentPage(data.page);
    setTotalItems(data.total_items);
  }

  useEffect(() => {
    obtenerInventario();
  }, []);

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      // console.log(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  async function filtrar() {
    // setTimeout(() => {
    // }, 1000);
    let termino = term.current.value;
    if (termino && termino.length >= 2) {
      console.log(termino.toLowerCase());
      get("/inventario?termino=" + termino + "&pagina=1");
      //let termino = req.query.termino
      //let pagina = req.query.pagina
    }
  }

  //paginacion

  return (
    <div className="hero bg-white min-h-screen w-full">
      <div className=" m-0 p-0 w-full">
        <div className="w-screen h-screen flex flex-col justify-start items-center gap-4 text-black ">
          <h1 className="text-5xl font-bold">Inventario</h1>
          <div className="w-full flex justify-evenly items-center gap-2 border bg-blue-700 p-2">
            <StyledInput
              inputRef={term}
              onChange={debounce(filtrar, 500, "user")}
              // onChange={() => filtrar()}
              type="text"
              textColor={"text-black"}
              placeholder={
                "Filtrar por nombre, categoria, marca, nro serie, estado"
              }
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
                {/* pagination */}
                <tfoot>
                  <p className="text-black text-xl">
                    Pagina: {currentPage}, Herramientas totales: {totalItems}
                  </p>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventario;
