import { useState } from 'react';
import ContainerStays from './components/ContainerStays/ContainerCard';
import DrawerFilter from './components/DrawerFilter/DrawerFilter';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { StayContextProvider } from './context/StayContext';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      {showDrawer && <DrawerFilter />}
      <Header setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
      <Layout>
        <StayContextProvider>
          <ContainerStays />
        </StayContextProvider>
      </Layout>
    </>
  );
}

export default App;
