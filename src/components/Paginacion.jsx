function Paginacion({
  paginaActual,
  totalPaginas,
  onPaginaAnterior,
  onPaginaSiguiente,
}) {
  return (
    <div className="h-14 w-full flex justify-center items-center gap-2 p-2 bg-white">
      <button
        /* DESACTIVA EL BOTÓN SI ESTOY EN LA PRIMER PÁGINA */
        disabled={paginaActual == 1 ? true : false}
        onClick={() => {
          onPaginaAnterior;
        }}
        className="btn min-h-0 h-full bg-blue-700 border border-slate-300 text-gray-300 hover:bg-blue-600 hover:border-slate-500 hover:text-white rounded-full"
      >
        «
      </button>
      <span className="text-black">
        Página {paginaActual} de {totalPaginas}
      </span>
      <button
        /* DESACTIVA EL BOTÓN SI ESTOY EN LA ÚLTIMA PÁGINA */
        disabled={paginaActual == totalPaginas ? true : false}
        onClick={() => {
          onPaginaSiguiente;
        }}
        className="btn min-h-0 h-full bg-blue-700 border border-slate-300 text-gray-300 hover:bg-blue-600 hover:border-slate-500 hover:text-white rounded-full"
      >
        »
      </button>
    </div>
  );
}

export default Paginacion;
