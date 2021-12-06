import { useState } from 'react';
import ContainerStays from './components/StaysContainer/StaysContainer';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { StayContextProvider } from 'context/StayContext';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <StayContextProvider>
      {showDrawer && <FilterDrawer />}
      <Header setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
      <Layout>
        <ContainerStays />
      </Layout>
    </StayContextProvider>
  );
}

export default App;
