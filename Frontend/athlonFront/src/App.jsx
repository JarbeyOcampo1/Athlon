import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Major from './Major';
import InicioSesionForm from './components/componentsInicioS/InicioSesionForm';
import Client from './components/componentsClient/Client';
import Plan from './components/componentsPlan/Plan';
import Factura from './components/componentsFactura/Factura';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index  element={<InicioSesionForm/>} /> 
        <Route path="/Major" element={<Major />} />
        <Route path='/Client' element={<Client />} />
        <Route path='/Plan' element={<Plan />} />
        <Route path='/Factura' element={<Factura />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;