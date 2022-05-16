import logo from "./logo.svg";
import "./App.css";
import Incrementers from "./components/Incrementers";
import IncrementedValue from "./components/IncrementedValue";

function App() {
  return (
    <div className="App">
      <IncrementedValue />
      <Incrementers />
    </div>
  );
}

export default App;
