import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div>
      <label className={styles[props.classLabel]}>
        {props.label}
      </label>
      <input
        name={props.name}
        placeholder={props.placeholder}
        onClick={props.onClick}
        autoComplete="off"
        value={props.value}
        readOnly
      />
    </div>
  );
};

export default Input;
