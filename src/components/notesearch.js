import React from 'react'
import {MdSearch} from 'react-icons/md'
function Notesearch({handleSearchNote}) {
  return (
    <div className='search'>
        <MdSearch className = 'search-icons' size = '1.3em' />
        <input 
        onChange={(event)=> handleSearchNote(event.target.value)}
        type = 'text' placeholder = 'type to search a note...'></input>


    </div>
  )
}

export default Notesearch