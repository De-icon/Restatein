import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { NavBar } from './components/navBar'
import { Footer } from './components/footer'
function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
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
