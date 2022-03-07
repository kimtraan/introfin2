import React from 'react'
import {MdSearch} from 'react-icons/md'
function Notesearch() {
  return (
    <div className='search'>
        <MdSearch className = 'search-icons' size = '1.3em' />
        <input type = 'text' placeholder = 'type to search a note...'></input>


    </div>
  )
}

export default Notesearch