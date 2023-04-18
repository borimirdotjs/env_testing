import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_MY_STRING}</h1>
    </div>
  );
}

export default App;
