import logo from './logo.svg';
import './App.css';
import Header from './components/header'

function App() {
  return (
    <div className="App">
      {/*Header */}
      <div className = "header">
       <Header/>
      </div>
      <div className = "body">
        <div className = "dashboard"></div>
        
      </div>

    </div>
  );
}

export default App;
