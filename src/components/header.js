import React from 'react'
import './header.css'

function Header() {
  return (
    <div className = 'navbar'>
        {/**logo */}
        <div className = 'logo' >
        <img src='dumplinglogo.png' width={40}></img>
        </div>  
        <div className = 'searchbar'>
            <div className = 'h_searchcontainer'>
                <input placeholder = "Look up a stock!" type='text'></input>
            </div>
        </div>
        <div className = 'navbaritems'>
            < a href= '#'>VIDEOS</a>
            < a href= '#'>MY NOTES</a>
        </div>  
       

    </div>
  )
}

export default Header