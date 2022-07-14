import { Link } from "react-router-dom";
import "./App.css"
export default function App() {
  return (
    <div className = 'box'>
      <h1>Let's Play Rock Paper Scissors Game!</h1>
        <div className = "chooseBox">
          <Link to="/game">Play With AI Robot</Link> 
        </div>
        <div className = "chooseBox">
          <Link to="/404">Play With Players</Link>
        </div>
        <div className = "chooseBox">
          <Link to="/404">Settings</Link>
        </div>
        <div className = "chooseBox">
          <Link to="/404">Quit</Link>
        </div>
        <div>
          <img src = {require('./images/gamelogo.png')}></img>
        </div>
    </div>
  );
}