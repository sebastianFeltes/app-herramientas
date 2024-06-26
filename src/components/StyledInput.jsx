import PropTypes from "prop-types";

function StyledInput({
  placeholder,
  type,
  TLLabel,
  TRLabel,
  BLLabel,
  BRLabel,
  inputRef,
  textColor
}) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className={`text-label underline ${textColor}`}>{TLLabel}</span>
        <span className={`text-label-alt ${textColor}`}>{TRLabel}</span>
      </div>
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs bg-white focus:border-none ring-1 ring-transparent focus:ring-1 focus:ring-blue-400 focus:outline-none"
      />
      <div className="label">
        <span className={`text-label-alt ${textColor}`}>{BLLabel}</span>
        <span className={`text-label-alt ${textColor}`}>{BRLabel}</span>
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
