import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Product from './components/Product';
import Landing from './components/Landing/Landing';
import './App.css';
import Background from './components/Background';

const links = ['ecosystem', 'atom', 'molecule', 'organism'];
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Background />} />
        {/* <Route path='/' element={<Landing />} /> */}
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </Layout>
  );
}

export default App;
