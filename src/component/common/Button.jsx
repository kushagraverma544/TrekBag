const Button = ({ children, OnClick, btnType, isDisabled = false }) => {
  return (
    <button
      className={`btn ${btnType ? btnType : ""}`}
      onClick={OnClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
