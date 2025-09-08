import Dashboard from './pages/Dashboard'
import Menu from './pages/menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/menu' element={<Menu />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
