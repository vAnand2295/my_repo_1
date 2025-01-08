import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CustomNavbar from './Signup';
import Home from './pages/Home';
import CartList from './pages/Cartlist';
import Prouductdetails from './pages/Prouductdetails';
import { CartProvider } from './context/Cartcontext';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <CartProvider>
      <Router>
        <CustomNavbar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/cartlist" element={<CartList />} />
          <Route path="/productdetails/:id" element={<Prouductdetails />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);