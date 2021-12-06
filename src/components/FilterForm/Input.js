import { useField } from 'formik';
import styles from './Input.module.css';

const Input = (props) => {
  const [field] = useField(props);

  return (
    <div>
      <label className={styles[props.classLabel]} htmlFor={field.name}>
        {props.label}
      </label>
      <input
        placeholder={props.placeholder}
        onClick={props.onClick}
        autoComplete="off"
        {...field}
        value={props.value}
      />
    </div>
  );
};

export default Input;
