import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Events from './Pages/Events';

import { CartProvider } from './Context/CartContext'
import FooterLazy from './Components/Footer/LazyFooter';
import NotFound from './Pages/NotFound';
import { LoadingProvider } from './Context/LoadingContext';
import PreLoader from './Components/PreLoader/PreLoader';
import { SkeletonTheme } from 'react-loading-skeleton';
const Header = React.lazy(() => import('./Components/Header/Header'))


function App() {

  return (
    <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <LoadingProvider>
        <PreLoader />
        <BrowserRouter>
          <CartProvider>
            <Header />
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route exact path='/' element={<Home />} />
              <Route exact path='/eventos' element={<Events />} />
            </Routes>
            <FooterLazy />
          </CartProvider>
        </BrowserRouter>
      </LoadingProvider>
    </SkeletonTheme>
  );
}



export default App;
