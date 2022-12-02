import React from 'react'
import About from './About'
import Dashborad from './Dashborad'
import Home from './Home'
import "../styles/heaDer.css"

function Header() {
  return (
    <BrowserRouter>
    <header className='head'>
        <Navlink 
            to="home">
                <li>Home</li>
            </Navlink>
        <Navlink
            to="About">
                <li>About</li>
            </Navlink>    
        <Navlink 
            to="Dashboard">
                <li>Dashboard</li>
            </Navlink>
    </header>
    <Routers>
        <Route path='Home' element={ <Home/> } />
        <Route path='About' element={ <About/> } />
        <Route path='Dashboard' element={ <Dashborad/> } />
    </Routers>
    </BrowserRouter>
  )
}
export {Header}