import "./App.css";
import Navbar from "./navbar";
import Candidates from "./Candiate";
import Scheduled from "./Scheduled";
function App() {
  return (
    <div>
      <Navbar />
      <div className="ViewPort">
        <Candidates />
        <Scheduled />
      </div>
    </div>
  );
}

export default App;
