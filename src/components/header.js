import React from 'react'
import './Header.css'
import Videos from './Videos'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function Header() {
  return (
    <div className = 'navbar'>
      
      {/* <Router> */}
        {/**logo */}
        <div className = 'logo' >
       < a href='/'> <img  src='dumplinglogo.png'  width={40}></img></a>
        </div>  
        <div className = 'searchbar'>
            <div className = 'h_searchcontainer'>
                <input placeholder = "Look up a stock!" type='text'></input>
            </div>
        </div>
        <div className = 'navbaritems'>
        < a href= '/videos'>VIDEOS</a>
        {/* Videos */}
        {/* <Routes>
        
        <Route path="/videos" component={Videos}>Videos</Route>

            {/* < a href= '#'>MY NOTES</a>  */}
            {/* {/* <Route path ="/Videos" exact component = {Videos}/> */}
          {/* </Routes> */}
        </div>  
       
        {/* </Router> */}
    </div>
  )
}

export default Header