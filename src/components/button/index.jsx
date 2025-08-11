import "./index.scss";

export const Button = ({
  children,
  as = "button",   // "button" or "a"
  href,
  onClick,
  type = "button",
  variant = "primary", // primary, secondary;
  disabled = false,
  ...rest
}) => {
  const className = `btn btn--${variant} ${disabled ? "btn--disabled" : ""}`;

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
