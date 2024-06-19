import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { NavBar } from './components/navBar'
function App() {

  return (
    <div className='bg-gray08'>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
