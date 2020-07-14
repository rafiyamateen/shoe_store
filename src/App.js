import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { ProductItems } from './components/ProductItems';

function App() {
  return (
    <Router>
      <div className='nav-links'>
        <Link to='/'>
          HOME
            </Link>{' | '}
        <Link to='products'>
          PRODUCTS
            </Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="products" element={<Products />} >
          <Route exact path="/" element={<ProductItems />} />
          <Route path=":item" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;