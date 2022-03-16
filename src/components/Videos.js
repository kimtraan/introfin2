import React from 'react'
import './videos.css'
import Header from './Header'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import Noteslist from './Noteslist';
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@400;600&display=swap');
</style>
      <Header/>
      <h3>Popular Financial Gurus</h3>

    <div className = 'vidcontainer'>
      <div className = 'container2'>
        <div className = 'youtubeembed'>
          <div className='vid1'>
            <iframe className='vid1a' width="560" height="315" src="https://www.youtube.com/embed/TVwkPqoDInM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
             <div className = 'vid1text'>
               {/* <div className = 'rosebtn'> */}
               <h4>Investing with Rose</h4>
               {/* </div> */}
               <div>
                <p>Rose is a professional with a degree in finance, a former Wall Street trader, and now educator.
                 She now creates popular investing courses and runs a very popular Youtube channel. Rose is an inspiration to young
                 and beginner investors. She excels in simplifying complicated financial topics and has made it her life 
                 mission to provide world-class financial education for everyone.
               </p>
               </div>
               <Button  
               a href = 'https://www.youtube.com/channel/UCIbslwukNCyVp-XMz_2-gmw' target="_blank" 
               className = 'vidbutton' 
               variant="contained"
               style = {{backgroundColor: '#94B3A8'}}
               >Go To Rose's Channel
               </Button>
               {/* <Noteslist 
          notes = {notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote = {deleteNote}
          /> */}
              </div>
          </div>  
        </div>

        <div className='vid2'>
            <iframe className = 'vid2contain' width="560" height="315" src="https://www.youtube.com/embed/8e2miuoyDLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
            <div className = 'tfd'> The Financial Diet</div>
            <br/>
            <div className = 'para' > This is a premier destination for women to learn and talk about money.
              They have a highly engaged community on Youtube, their website, and social media. 
              They lead conversations with millions of women everyday. They aim to be honest about money and
              share narratives through a community-oriented approach.
              <br/>
              <br/>
              <Button  
               a href = 'https://www.youtube.com/channel/UCSPYNpQ2fHv9HJ-q6MIMaPw' target="_blank" 
               className = 'tfdbtn' 
               variant="contained"
               style = {{backgroundColor: '#94B3A8'}}
               >Go to TFD's Channel
               
               </Button>
              </div>

          
              {/* <h4>The Financial Diet</h4>  */}
              {/* <br/> */}

        </div> 
        

        <div className='vid3'>
            <iframe className = 'vid3v' width="560" height="315" src="https://www.youtube.com/embed/rdnQKHb8HWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='GH'>Graham Stephens</div>
            <div className='GHprof'>Graham is a real estate agent who has built success on Youtube as a finance content 
            creator. As of January 2022 he has almost four million subscribers. His content mainly consists of 
            stock market advice, wealth building tips, and general current events about
             financial trends.
             <br/>
             <br/>
             <Button  
               a href = 'https://www.youtube.com/channel/UCV6KDgJskWaEckne5aPA0aQ' target="_blank" 
               className = 'tfdbtn' 
               variant="contained"
               style = {{backgroundColor: '#94B3A8'}}
               >Go to Graham's Channel
               
               </Button>
             
             
              </div>

          </div>


        </div>
     </div>  
     <br/>
      <div className = 'rbff'>
        {/* <div className='square'> */}
        More Resources
        <br/>
        <br/>
        <br/>
        <Button  
               a href = 'https://www.yourrichbff.com/' target="_blank" 
               className = 'tfdbtn' 
               variant="contained"
               style = {{backgroundColor: '#B9D4E1'}}
               >Your Rich BFF
               
               </Button>
          {/* </div> */}
          <br/>
          <br/>
          <Button  
               a href = 'https://tinyurl.com/2tmsnree' target="_blank" 
               className = 'investopedia' 
               variant="contained"
               style = {{backgroundColor: '#B9D4E1'}}
               >Investopedia
               
               </Button>
               <br/>
               <br/>
          <Button  
               a href = 'https://www.ncua.gov/consumers/financial-literacy-resources' target="_blank" 
               className = 'NCUAResources' 
               variant="contained"
               style = {{backgroundColor: '#B9D4E1'}}
               >NCUA Resources
               
               </Button>




        </div>
        
 

    </div>

  )
}

export default Videos