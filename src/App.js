import ContainerStays from './components/ContainerStays/ContainerCard';
import DrawerFilter from './components/DrawerFilter/DrawerFilter';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { stays } from './data/stays';

function App() {
  return (
    <>
      <DrawerFilter />
      <Header />
      <Layout>
        <ContainerStays stays={stays} />
      </Layout>
    </>
  );
}

export default App;
