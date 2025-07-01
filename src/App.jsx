import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import HomePage from './pages/Inicio.jsx'
import ContactPage from './pages/Contacto.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="inicio" element={<HomePage />} />
      <Route path="contacto" element={<ContactPage />} />

      {/* Puedes agregar más rutas aquí */}
    </Routes>
  )
}

export default App
