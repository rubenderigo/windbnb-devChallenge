import { ReactComponent as Logo } from '../../assets/logo.svg';
import FormSearch from '../FormSearch/FormSearch';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Logo className="logo" />
      <FormSearch
        className="form-search"
        classLabel="label"
        classButton="button-search"
        showSearch={false}
      />
    </div>
  );
};

export default Header;
