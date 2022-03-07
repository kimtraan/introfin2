import React from 'react'
import Header from './Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function Videos() {
  return (
    <div>
      <Header/>

    <div className = 'vidcontainer'>
      <div className = 'container2'>
        <h1>Popular Youtube Financial Gurus</h1>

        </div>
    </div>  
    </div>

  )
}

export default Videos