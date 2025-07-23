import "./Button.css";

function Button({ buttonStyle, children }) {
  return <button className={`${buttonStyle}`}>{children}</button>;
}

export default Button;
