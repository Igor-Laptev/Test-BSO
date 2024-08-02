import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Front/Route/Login';
import Register from './Front/Route/Register';
import ProductCatalog from './Front/Route/ProductCatalog';
import ShoppingCart from './Front/Route/ShoppingCart';

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <h1>Welcome to the Product Catalog</h1>
          <nav>
            <ul>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/products'>Product Catalog</Link>
              </li>
              <li>
                <Link to='/cart'>Shopping Cart</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<ProductCatalog />} />
          <Route path='/cart' element={<ShoppingCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
