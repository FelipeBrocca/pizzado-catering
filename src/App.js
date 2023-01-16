import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Events from './Pages/Events';

import {CartProvider} from './Context/CartContext'



function App() {
  return (
    <CartProvider>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/eventos' element={<Events />} />
    </Routes>
    </CartProvider>
  );
}

export default App;
