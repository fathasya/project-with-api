import logo from './logo.svg';
import './App.css';

function App() {
  const nama = 'Fathasya Meyra Arliansyah';

  function btn(){
    return alert('This is from Event Handling!');
  }

  function btn2(msg){
    return alert(msg);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hallo, {nama} !</h1>
        <button onClick={btn}><h1>Click Me!</h1></button> <br />
        <button onClick={btn2.bind(this, 'Holaaa!')}><h1>Click Me!</h1></button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
