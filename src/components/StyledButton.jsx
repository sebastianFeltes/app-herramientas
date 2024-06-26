import PropTypes from "prop-types";

function StyledButton({
  remove,
  accept,
  link,
  cancel,
  innerText,
  btnType,
  ...props
}) {
  const styles = {
    remove:
      "bg-red-500 border border-red-700 text-gray-300 hover:bg-red-600 hover:border-red-500 hover:text-white",
    accept:
      "bg-blue-700 border border-slate-300 text-gray-300 hover:bg-blue-600 hover:border-slate-500 hover:text-white",
    link: "bg-blue-700 border border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white hover:underline hover:border-white hover:decoration-white",
    cancel:
      "bg-blue-700 border border-slate-300 text-gray-300 hover:bg-blue-600 hover:border-yellow-500 hover:text-white",
  };

  const btnClass = `btn min-w-56 ${
    remove
      ? styles.remove
      : accept
      ? styles.accept
      : link
      ? styles.link
      : cancel
      ? styles.cancel
      : ""
  }`;

  return (
    <button type={btnType} className={btnClass} {...props}>
      {innerText}
    </button>
  );
}

StyledButton.propTypes = {
  remove: PropTypes.bool,
  accept: PropTypes.bool,
  link: PropTypes.bool,
  cancel: PropTypes.bool,
  innerText: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
};

export default StyledButton;
