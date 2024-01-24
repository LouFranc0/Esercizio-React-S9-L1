import "./App.css";
import Button from "react-bootstrap";
import ButtonComponents from "./Components/ButtonComponents";
import VideoComponents from "./Components/VideoComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponents label="Luffy GEAR 5" />
        <p>kaizoku ou ni ore wa naru</p>
        <VideoComponents />
      </header>
    </div>
  );
}

export default App;
