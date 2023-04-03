import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Product from './components/Product';
import { Molecules, Organisms, Ecosystems } from './components';
import './App.css';
import ProductGrid from './components/ProductGrid';
import PlantCard from './components/PlantCard';
const links = ['ecosystem', 'atom', 'molecule', 'organism'];
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/apple' element={<PlantCard />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/molecules' element={<Molecules />} />
        <Route path='/organisms' element={<Organisms />} />
        <Route path='/ecosystems' element={<Ecosystems />} />
        <Route path='/products' element={<ProductGrid />} />
      </Routes>
    </Layout>
  );
}

export default App;
