function ModalMessage({ text, error }) {
  return (
    <dialog id="my_modal_1" className="modal">
      <div
        className={`modal-box border-2 bg-white ${
          error ? "border-red-500" : "border-blue-500"
        }`}
      >
        <p
          className={`py-4 font-semibold text-xl ${
            error ? "text-red-600" : "text-blue-600"
          }`}
        >
          {text ? text.toUpperCase() : false}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost bg-transparent border">
              Cerrar
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ModalMessage;
