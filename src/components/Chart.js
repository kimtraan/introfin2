import React from 'react'
import './Chart.css';
import Linegraph from './Linegraph';

function Chart() {
  return (
    <div className = "chart">
        <div className = 'graphic'>
            <div className = 'graphic__price'>
                <h1>$200.29</h1>
                <p>amount changed today</p>
            </div>
            <div className = "graphic__chart">
              <Linegraph />
              Test
            </div>
        </div>
    </div>
  )
}

export default Chart