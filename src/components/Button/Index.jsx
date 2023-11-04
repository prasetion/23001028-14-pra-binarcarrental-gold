import "./style.css";

const Button = ({ name, callback }) => {
  return (
    <div>
      <a onClick={callback} className="container-button">
        {name}
      </a>
    </div>
  );
};

export default Button;
