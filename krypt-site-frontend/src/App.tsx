import Dashboard from './pages/Dashboard'
import Menu from './pages/menu'
import Footer from './pages/footer'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Menu />
        <div className='flex-grow pt-16'> 
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>      
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App