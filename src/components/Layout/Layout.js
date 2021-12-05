import Title from '../Title/Title';
import CantStays from '../CantStays/CantStays';
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container-title-cant-stays">
        <Title>Stays in Finland</Title>
        <CantStays>12+ stays</CantStays>
      </div>
      {children}
    </div>
  );
};

export default Layout;
