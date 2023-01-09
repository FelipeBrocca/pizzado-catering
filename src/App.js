import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'

import {CartProvider} from './Context/CartContext'



function App() {
  return (
    <CartProvider>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </CartProvider>
  );
}

export default App;
