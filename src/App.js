import "./App.css";
import Day from "./components/Day";
import Time from "./components/Time";
import Date from "./components/Date";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Day />
        <Time />
        <Date />
      </div>
    </div>
  );
}

export default App;
