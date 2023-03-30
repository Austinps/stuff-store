import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Beach, Coral, Glacier, Savanna } from './components';
import './App.css';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/shop' element={<ProductGrid />} />
        <Route path='/' element={<Beach />} />
        <Route path='/coral' element={<Coral />} />
        <Route path='/glacier' element={<Glacier />} />
        <Route path='/savanna' element={<Savanna />} />
      </Routes>
    </Layout>
  );
}

export default App;
