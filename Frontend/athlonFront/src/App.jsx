import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Client from './componentsClient/Client'
import Plan from './componentsPlan/Plan'
import Major from './Major'
import Factura from './componentsFactura/Factura'

function App() {
  

  return <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Major/>}/>
      <Route path='/Client' element={<Client/>}/>
      <Route path='/Plan' element={<Plan/>}/>
      <Route path='/Factura' element={<Factura/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
