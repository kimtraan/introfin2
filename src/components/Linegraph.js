import React, {useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2';
import './Linegraph.css'
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
  
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          }
        ]
      };
function Linegraph() {


        return (
            <div className="App">
              <Line data={data} />
            </div>
          );
}

// function Linegraph() {
//     const [ graphData, setGraphData ] = useState ([]);
//     const data = 
//     [{
//         x:10,
//         y: 20
//     }, {
//         x:15,
//         y:10
//     }, {
//         x: 12,
//         y: 4,
//     }
// ]
  
//   const createMockData = () => {
//       let data = [];
//       let value = 50;
//       for(var i = 0; i< 366; i++) {
//           let date = new Date();
//           date.setHours(0,0,0,0);
//           date.setDate(i);
//           value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() *10);
//           data.push({x:date, y:value});
//       }
//       setGraphData(data);
//   }
//   useEffect (()=>{
//       createMockData();

//   }, [])
//   return (
//     <div className = 'linegraph'>
//         <Line
//             data = {{
//                 datasets: [
//                     {
//                         type: "line",
//                         data: graphData,
//                         backgroundColor: "black",
//                         borderColor: '#5AC53B',
//                         borderWidth: 2,
//                         pointBorderColor: 'rgba(0,0,0,0)',
//                         pointBackgroundColor: '#5AC53B',
//                         pointHoverBackgroundColor: '#000000',
//                         pointHoverBorderWidth: 4,
//                         pointHoverRadius: 6,
//                     }
//                 ]
//             }}
//             options = {{
//                 tooltips: {
//                     mode: "index",
//                     intersect: false
//                 },
//                 scales: {
//                     xAxes: [
//                         {
//                             type: "time",
//                             time: {
//                                 format: "MM/DD/YY",
//                                 tooltipFormat: "ll",
//                             },
//                             ticks: {
//                                 display: false,
//                             }
//                         },
//                     ],
//                     yAxes: [{
//                         ticks: {
//                             display: false
//                         }

//                     }]
//                 }
//             }}
//         />
//     </div>
//   )
// }

export default Linegraph