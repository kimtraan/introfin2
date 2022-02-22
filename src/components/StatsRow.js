import React from "react";
import './StatsRow.css';
// import StockChart from './stock.svg'

function StatsRow(props) {
  //   console.log(props, "what is in props here?");
// (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

  const getModal = () => {

  }
  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>AAPL</h1>
        <p>200 SHARES</p>
    
      </div>
      <div className="row__chart">
        {/* <img src={StockChart} height={16}/> */}
      </div>
      <div className="row__numbers">
        <p className="row__price">$200</p>
        <p className="row__percentage">+200%</p>
      </div>
    </div>
  );
}

export default StatsRow;