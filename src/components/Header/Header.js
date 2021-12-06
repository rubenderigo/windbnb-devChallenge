import { ReactComponent as Logo } from '../../assets/logo.svg';
import FormSearch from '../FormSearch/FormSearch';
import './Header.css';

const Header = ({showDrawer, setShowDrawer}) => {
  return (
    <div className="header">
      <Logo className="logo" />
      <FormSearch
        className="form-search"
        showSearch={false}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
      />
    </div>
  );
};

export default Header;
