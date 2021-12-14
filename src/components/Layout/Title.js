import PropTypes from 'prop-types';

import styles from './Layout.module.css';

const Title = ({ children }) => {
  return (
    <div>
      <h1 className={styles['title']}>{children}</h1>
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.array,
};

Title.defaultProps = {
  children: [],
};

export default Title;
