const Button = ({ onClick, children, disabled = false,className = '' }) => (
  <button
    disabled={disabled}
    className={`bg-black text-white text-[16px] px-4 py-2 rounded mt-3 disabled:opacity-25 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;