import React from "react";

function CustomBtn({ text, type, accept, error, info }) {
  const styles = {
    accept: "btn bg-green-500 border border-lime-700",
    info: "btn bg-sky-500 border border-blue-700",
    error: "btn bg-red-500 border border-red-900",
  };

  const btnStyle = [accept && styles.accept, error && styles.error, info && styles.info];

  return (
    <button className={"btn " + btnStyle} type={type}>
      {text}
    </button>
  );
}

export default CustomBtn;
