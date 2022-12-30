import { useState } from 'react';
import Layout from './components/layout';
import ItemListContainer from './components/item-list-container';
import Navbar from './components/navbar';

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
