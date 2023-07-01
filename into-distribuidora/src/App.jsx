import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer'
import {NavBar} from './componentes/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Error404 from './componentes/Error404'
import Nosotros from './componentes/Nosotros'
import { CartProvider } from './componentes/CartContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/productos/' element={<ItemListContainer />}/>
          <Route path='/productos/:categoriaId' element={<ItemListContainer />}/>
          <Route path='/producto/:itemId' element={<ItemDetailContainer />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
  )
}

export default App
