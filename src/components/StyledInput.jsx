import PropTypes from "prop-types";

function StyledInput({
  placeholder,
  type,
  TLLabel,
  TRLabel,
  BLLabel,
  BRLabel,
  inputRef,
}) {
  return (
    <label className="form-control w-full max-w-xs text-black">
      <div className="label underline decoration-blue-400">
        <span className="label-text text-gray-800">{TLLabel}</span>
        <span className="label-text-alt text-gray-800">{TRLabel}</span>
      </div>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs bg-white focus:border-none ring-1 ring-transparent focus:ring-1 focus:ring-blue-400 focus:outline-none"
      />
      <div className="label">
        <span className="label-text-alt text-gray-800">{BLLabel}</span>
        <span className="label-text-alt text-gray-800">{BRLabel}</span>
      </div>
    </label>
  );
}

StyledInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  TLLabel: PropTypes.string,
  TRLabel: PropTypes.string,
  BLLabel: PropTypes.string,
  BRLabel: PropTypes.string,
  inputRef: PropTypes.object,
};

export default StyledInput;
