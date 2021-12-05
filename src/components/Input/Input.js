import { useField } from 'formik';
import './Input.css';

const Input = ({ label, classLabel, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label className={classLabel} htmlFor={field.name}>
        {label}
      </label>
      <input
        className="input-search"
        placeholder={props.placeholder}
        {...field}
      />
      {meta.initialTouched && console.log('hola')}
    </div>
  );
};

export default Input;
