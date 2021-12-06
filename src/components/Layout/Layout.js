import Title from '../Title/Title';
import CantStays from '../CantStays/CantStays';
import './Layout.css';
import { StayContextProvider } from '../../context/StayContext';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container-title-cant-stays">
        <Title>Stays in Finland</Title>
        <StayContextProvider>
          <CantStays />
        </StayContextProvider>
      </div>
      {children}
    </div>
  );
};

export default Layout;
