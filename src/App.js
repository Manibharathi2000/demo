import React, { useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import { Modal } from 'react-bootstrap';
import { useAppContext } from './components/AppProvider';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './components/SearchBar';
import Product from './components/Product';
import './style.css'
import ViewProduct from './components/ViewProduct';

function App() {
  const { appContextValue } = useAppContext();

  return (
    <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/ViewProduct" element={<ViewProduct />} />
          </Routes>
        </HashRouter>
      <div>
        <Modal className='loader_modal' centered show={appContextValue.value}>
          <Triangle
            strokeColor="#659DBD"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={appContextValue.value}
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;