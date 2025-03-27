import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginsForm from './componentsLogin/LoginsForm';
import Logins from './componentsLogin/Logins';
import Client from './componentsClient/Client';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route index element={<Client />} />

        {/* Rutas para login */}
        <Route path="/login/form" element={<LoginsForm />} />
        <Route path="/login" element={<Logins />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;