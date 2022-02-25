// import React, {useState, useEffect} from 'react'
// import './Stats.css'
// import axios from 'axios'
// import StatsRow from './StatsRow'
// import './StatsRow.css'
// import { db } from './firebase'

// const TOKEN = 'c8a269iad3iasddf7isg'
// const BASEURL = 'https://finnhub.io/api/v1/quote?symbol='
// const KEY_URL = `&token=${TOKEN}`



// function Stats(props) {
//   const [myStocks, setMyStocks] = useState([])
//   const [stockData, setstockData] = useState ([])



// // const getMyStocks = () => {
// //   db
// //   .collection('myStocks')
// //   .onSnapshot(snapshot => {
// //       let promises = [];
// //       let tempData = []
// //       snapshot.docs.map((doc) => {
// //         promises.push(getStocksData(doc.data().ticker)
// //         .then(res => {
// //           tempData.push({
// //             id: doc.id,
// //             data: doc.data(),
// //             info: res.data
// //           })
// //         })
// //       )})
// //       Promise.all(promises).then(()=>{
// //         setMyStocks(tempData);
// //       })
// //   })
// // }
//   useEffect(() => {
//    let tempData = []
//    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
//    let promises = [];
//   //  getMyStocks();
//   stocksList.map((stock) => {
//     promises.push(
//       setstockData(stock)
//       .then((res) => {
//         tempData.push({
//           name: stock,
//           ...res.data
//         });
//       })
//     )
//   });

//     Promise.all(promises).then(()=>{
//       setstockData(tempData);
//       console.log(tempData);
//     })
//   }, [])


//   return (
//     <div className = 'stats'>
//       <div className = 'stats_contain'>
//         <div className = 'stats_header'>
//           <p>Stocks</p>
//         </div>
//         <div className = 'stats_content'>
//           <div className = 'stats_rows'>
//           {stockData.map((stock) => (
//               <StatsRow
//                 // key={stock.name}
//                 // name={stock.name}
//                 // openPrice={stock.o}
//                 // price={stock.info.c}
//               />
//             ))}

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Stats


import React, {useState, useEffect} from 'react'
import './Stats.css'
import axios from 'axios'
import StatsRow from './StatsRow'
import './StatsRow.css'

const TOKEN = 'c8a269iad3iasddf7isg'
const BASEURL = 'https://finnhub.io/api/v1/quote?symbol='
const KEY_URL = `&token=${TOKEN}`

function Stats() {
  const [stockData, setstockData] = useState ([])

  const getStocksData = (stock) => {
    return axios
      .get(`${BASEURL}${stock}${KEY_URL}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };
  useEffect(() => {
   let tempData = []
   const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
   let promises = [];
   stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
        console.log(res);
        tempData.push({
            name: stock,
            ...res.data
          });
        })
      )
    });

    Promise.all(promises).then(()=>{
      setstockData(tempData);
      console.log(tempData);
    })
  }, [])


  return (
    <div className = 'stats'>
      <div className = 'stats_contain'>
        <div className = 'stats_header'>
          <p>Stocks</p>
        </div>
        <div className = 'stats_content'>
          <div className = 'stats_rows'>
          {stockData.map((stock) => (
              <StatsRow
                // key={stock.data.ticker}
                // name={stock.data.ticker}
                // openPrice={stock.info.o}
                // volume={stock.data.shares}
                // price={stock.info.c}
              />
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats