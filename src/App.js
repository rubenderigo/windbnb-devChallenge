import { useState } from 'react';
import ContainerStays from 'components/StaysContainer/StaysContainer';
import FilterDrawer from 'components/FilterDrawer/FilterDrawer';
import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import { StayContextProvider } from 'context/StayContext';
import Footer from 'components/Footer/Footer';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const closeDrawer = () => setShowDrawer(false)

  return (
    <StayContextProvider>
      {showDrawer && <FilterDrawer closeDrawer={closeDrawer}/>}
      <Header setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
      <Layout>
        <ContainerStays />
      </Layout>
      <Footer />
    </StayContextProvider>
  );
}

export default App;
