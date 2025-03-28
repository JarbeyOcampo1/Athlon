import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Major from './Major';
import InicioSesionForm from './components/componentsInicioS/InicioSesionForm';
import Logins from './components/componentsLogin/Logins';
import Client from './components/componentsClient/Client';
import Plan from './components/componentsPlan/Plan';
import Factura from './components/componentsFactura/Factura';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Major />} />
        <Route path='/Client' element={<Client />} />
        <Route path='/Logins' element={<Logins />} />
        <Route path='/Plan' element={<Plan />} />
        <Route path='/Factura' element={<Factura />} />
        <Route path='/inicioSesionForm' element={<InicioSesionForm />} /> 
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;