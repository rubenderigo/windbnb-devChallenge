import './Button.css';

const Button = ({ children, classButton ,...props }) => {
  return (
    <div className="button-search-container">
      <button className={classButton} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
