import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import LoginsForm from './components/componentsLogin/LoginsForm'
import Logins from './components/componentsLogin/Logins'
import Client from './components/componentsClient/Client'

function App() {
  

  return <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Client/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
