import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Chart from './components/Chart';
import Stats from './components/Stats'


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
          <Stats/>
      </div>
    </div>
    </div>
  );
}

export default App;
