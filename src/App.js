import logo from './logo.svg';
import './App.css';
import Notesearch from './components/notesearch'
import Header from './components/Header';
import Chart from './components/Chart';
import Stats from './components/Stats';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Line } from "react-chartjs-2";
// import {CategoryScale} from 'react-chartjs-2';
import Noteslist from './components/Noteslist'
import Videos from './components/Videos';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js';
  
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<App/>} />
        <Route path = "/videos" element={<Videos/>} />
      </Routes>
    </BrowserRouter>
  )

}

function App() {
  const [notes,setNotes] = useState([
      {
        id: nanoid(),
        text: "Add note on videos that you are watching",
        date: "15/04/2021",
      },
      {
        id: nanoid(),
        text: "Or add notes from trends you are noticing on stock tickers",
        date: "15/04/2021",
      },
      {
        id: nanoid(),
        text: "Save and delete as you please!",
        date: "15/04/2021",
      }

]);

const [searchText, setSearchText] = useState('');


const addNote = (text) => {
   const date = new Date();
   const newNote = {
     id: nanoid(),
     text: text,
     date: date.toLocaleDateString() 
   }
   const newNotes = [...notes, newNote];
   setNotes(newNotes);
 }

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id );
  setNotes(newNotes);
}




  return (
    <div className="App">
      {/*Header */}
      <div className = "header">
       <Header/>
      </div>
      <br></br>
      <br></br>
      <div className = "body">
        <div className = "dashboardspace">
          <Chart />
          {/* <Line data={data} /> */}
          <Stats/>
      </div>
    </div>  
    <div className = "stickyNotes">
        <br/>
        <Notesearch handSearchNote= {setSearchText}/>
        <br/>
        <Noteslist 
          notes = {notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote = {deleteNote}
          />
          
      </div>
    </div>
  );
}

// export default App;
