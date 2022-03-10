import React from 'react'
import Notesearch from './notesearch'
import './Header.css'
import Videos from './Videos'
import {MdSearch} from 'react-icons/md'
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
      {/* <Router> */}
        {/**logo */}
        <div className = 'logo' >
       < a href='/'> <img  src='dumplinglogo.png'  width={60}></img></a>
        </div>  
        <div className = 'searchbar'>
            <div className = 'h_searchcontainer'>
                {/* <input placeholder = "Look up a stock!" type='text'></input>
                 */}
                 <MdSearch className = 'search-icons' size = '1.3em' />
                 <input type = 'text' placeholder='Look up a stock ticker'>
                   </input>
                 {/* <Notesearch/> */}
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


