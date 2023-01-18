import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Events from './Pages/Events';

import { CartProvider } from './Context/CartContext'
import Header from './Components/Header/Header'
import FooterLazy from './Components/Footer/LazyFooter';
import PreLoader from './Components/PreLoader/PreLoader'




function App() {

  const [loading, setLoading]=useState(true)

  setTimeout(() => {
     setLoading(false)
  }, 3000)

  if(loading){
    return (
    <PreLoader />
  )
  } else { 
    return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='*' element={<App />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/eventos' element={<Events />} />
        </Routes>
        <FooterLazy />
      </CartProvider>
    </BrowserRouter>
  );
  }
}


export default App;
