import { Outlet } from "react-router-dom"
import {NavBar} from './components/navBar'
import {Footer} from './components/footer'


function Layout() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    
    </>
  )
}

export default Layout