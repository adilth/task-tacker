import PropTypes from "prop-types";
const Button = ({ BackColor, text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: BackColor, color: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
