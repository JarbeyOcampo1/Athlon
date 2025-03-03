import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import LoginsForm from './componentsLogin/LoginsForm'
import Logins from './componentsLogin/Logins'

function App() {
  

  return <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Logins/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
