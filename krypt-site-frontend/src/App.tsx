import Dashboard from './pages/Dashboard'
import Menu from './pages/menu'
import Footer from './pages/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
       <div className='flex  flex-col min-h-screen'>
        <div className='flex-grow'>
           <Routes>
                <Route element={<Menu />}>
                    <Route path='/' element={<Dashboard />} />
                </Route>
           </Routes>      
        </div>

        <Footer />
       </div>
    
    </BrowserRouter>
  )
}

export default App
