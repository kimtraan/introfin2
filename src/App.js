import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Chart from './components/Chart';
import Stats from './components/Stats';
import { Line } from "react-chartjs-2";
// import {CategoryScale} from 'react-chartjs-2';

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




function App() {
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
    </div>
  );
}

export default App;
