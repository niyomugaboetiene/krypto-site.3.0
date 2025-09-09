import Dashboard from './pages/Dashboard'
import Menu from './pages/menu'
import Footer from './pages/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route element={<Menu />}>
               <Route path='/' element={<Dashboard />} />
          </Route>
        
       </Routes>
    </BrowserRouter>
  )
}

export default App
