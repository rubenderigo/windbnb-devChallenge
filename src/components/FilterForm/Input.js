import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = ({ classLabel, label, ...props }) => {
  return (
    <div>
      <label className={styles[classLabel]}>{label}</label>
      <input autoComplete="off" readOnly {...props} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onclick: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  classLabel: 'label-none',
  name: '',
  onclick: () => {},
  placeholder: '',
  value: '',
};

export default Input;
