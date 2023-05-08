import { Routes, Route } from 'react-router-dom'
import NotFoundBlock from './components/NotFoundBlock'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Cart from './pages/Cart'
import FullPizza from './pages/FullPizza'
import NotFound from './pages/NotFound'

import './App.scss'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path='' element={<Home />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='pizza/:id' element={<FullPizza />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default App
