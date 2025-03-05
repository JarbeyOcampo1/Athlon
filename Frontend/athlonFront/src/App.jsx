import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import LoginsForm from './componentsLogin/LoginsForm'
import Logins from './componentsLogin/Logins'
import Client from './componentsClient/Client'

function App() {
  

  return <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Client/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
