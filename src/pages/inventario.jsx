import React, { useEffect, useRef, useState } from "react";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import {
  filtrarInventario,
  obtenerInventario,
} from "../services/inventario.services";

function Inventario() {
  const [inventario, setInventario] = useState(undefined);
  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPorPagina] = useState(10);
  const termino = useRef();

  async function fetchInventario() {
    const res = await obtenerInventario(paginaActual, itemsPorPagina);
    // console.log(res);

    if (res) {
      setInventario(res.herramientas);
      setPaginaActual(res.page);
    }
  }

  useEffect(() => {
    fetchInventario();
  }, []);

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  async function filtrar() {
    console.log(termino.current.value);
    let filtro = termino.current.value;

    if (filtro && filtro.length >= 2) {
      let res = await filtrarInventario(paginaActual, itemsPorPagina, filtro);
      if (res) {
        setInventario(res.herramientas);
        setPaginaActual(res.page);
        filtro = ""
      }
    }
  }
  // console.log(inventario);

  return (
    <div className="hero bg-white min-h-screen w-full">
      <div className=" m-0 p-0 w-full">
        <div className="w-screen h-screen flex flex-col justify-start items-center gap-4 text-black ">
          <h1 className="text-5xl font-bold">Inventario</h1>
          <div className="w-full flex justify-evenly items-center gap-2 border bg-blue-700 p-2">
            <StyledInput
              onChange={debounce(filtrar, 300)}
              inputRef={termino}
              type={"text"}
              textColor={"text-black"}
              placeholder={"Filtrar por nombre, marca, categoria, etc"}
            />
            {/* <StyledInput
              textColor={"text-black"}
              placeholder={"Filtrar por marca"}
            />

           
            <StyledInput
              textColor={"text-black"}
              placeholder={"Filtrar por estado"}
            /> */}
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
                    <th>Fecha Compra</th>
                    <th>Vida Util</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {inventario
                    ? inventario.map((herramienta, index) => (
                        <tr key={index}>
                          <td></td>
                          <td>
                            {herramienta.nombre
                              ? herramienta.nombre
                              : "sin dato"}
                          </td>
                          <td>
                            {herramienta.marca ? herramienta.marca : "sin dato"}
                          </td>
                          <td>
                            {herramienta.categoria
                              ? herramienta.categoria
                              : "sin dato"}
                          </td>
                          <td>
                            {herramienta.nro_serie
                              ? herramienta.nro_serie
                              : "sin dato"}
                          </td>
                          <td>
                            {herramienta.estado
                              ? herramienta.estado
                              : "sin dato"}
                          </td>
                          <td>
                            {herramienta.fecha_compra
                              ? herramienta.fecha_compra
                              : "sin dato"}
                          </td>
                          <td>
                            {herramienta.vida_util
                              ? herramienta.vida_util
                              : "sin dato"}
                          </td>
                          <td></td>
                        </tr>
                      ))
                    : null}
                  {/*  <tr>
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
                  </tr> */}
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
