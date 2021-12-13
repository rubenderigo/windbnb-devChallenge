import { ReactComponent as Logo } from 'assets/logo.svg';
import FormSearch from 'components/FilterForm/FilterForm';
import styles from './Header.module.css';

const Header = ({ showDrawer, setShowDrawer }) => {
  return (
    <div className={styles['header']}>
      <div className={styles['logo-container']}>
        <Logo className={styles['logo']} />
      </div>
      <FormSearch
        classButton="button"
        classForm="form-filter"
        showSearch={false}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
      />
    </div>
  );
};

export default Header;
