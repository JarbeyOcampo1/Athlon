import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Componentes
import LoginsForm from "./components/componentsLogin/LoginsForm";
import Client from "./components/componentsClient/Client";
import InicioSesionForm from "./components/componentsInicioS/inicioSesionForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route index element={<Client />} />

        {/* Rutas para login */}
        <Route path="/login/form" element={<LoginsForm />} />

        {/* Otra vista de inicio de sesión */}
        <Route path="/inicio" element={<InicioSesionForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
