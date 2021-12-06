import styles from './Button.module.css';

const Button = ({ children, classButton ,...props }) => {
  return (
    <div className={styles["button-container"]}>
      <button className={styles[classButton]} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
