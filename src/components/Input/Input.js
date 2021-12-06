import { useField } from 'formik';
import './Input.css';

const Input = ({ label, classLabel, onClick, value, placeholder, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <label className={classLabel} htmlFor={field.name}>
        {label}
      </label>
      <input
        className="input-search"
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        autocomplete="off"
        {...field}
      />
    </div>
  );
};

export default Input;
