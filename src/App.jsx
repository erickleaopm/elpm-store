import { useState } from 'react';
import Layout from './components/containers/Layout/Layout.component';
import ItemListContainer from './components/molecules/ItemListContainer/ItemListContainer.component';
import Navbar from './components/molecules/Navbar/Navbar.component';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Layout>
        <ItemListContainer greeting="Bienvenido a mi tienda!" />
      </Layout>
    </>
  );
}

export default App;
