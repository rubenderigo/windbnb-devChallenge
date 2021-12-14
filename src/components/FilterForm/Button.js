import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ children, classButton, ...props }) => {
  return (
    <div className={styles['button-container']}>
      <button className={styles[classButton]} {...props}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.array,
  classButton: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  classButton: 'button',
  children: [],
  type: 'submit',
};

export default Button;
