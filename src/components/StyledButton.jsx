function StyledButton({ remove, accept, link, cancel, innerText }) {
  const styles = {
    remove:
      " bg-red-500 border border-red-700 text-gray-300 hover:bg-red-600 hover:border-red-500 hover:text-white",
    accept:
      " bg-blue-700 border border-slate-300 text-gray-300 hover:bg-blue-600 hover:border-slate-500 hover:text-white",
    link: " bg-blue-700 border border-gray-300 text-gray-200 hover:bg-blue-600 hover:text-white hover:underline hover:border-white hover:decoration-white",
    cancel:
      " bg-blue-700 border border-slate-300 text-gray-300 hover:bg-blue-600 hover:border-yellow-500 hover:text-white",
  };

  const btnClass = [
    remove && styles.remove,
    accept && styles.accept,
    link && styles.link,
    cancel && styles.cancel,
  ];

  return <button className={"btn min-w-56 "+btnClass}>{innerText}</button>;
}

export default StyledButton;
