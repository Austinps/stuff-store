import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Atoms, Molecules, Organisms, Biomes } from './components';
import './App.css';
import ProductGrid from './components/ProductGrid';
import Shop from './components/Shop';
import PlantCard from './components/PlantCard';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/apple' element={<PlantCard />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/' element={<Atoms />} />
        <Route path='/molecules' element={<Molecules />} />
        <Route path='/organisms' element={<Organisms />} />
        <Route path='/biomes' element={<Biomes />} />
        <Route path='/products' element={<ProductGrid />} />
      </Routes>
    </Layout>
  );
}

export default App;
