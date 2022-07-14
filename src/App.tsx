import { Link } from "react-router-dom";
import "./App.css"

function LinkButton(props){
  return (
      <div className = "chooseBox">
          <Link to={props.to}>{props.buttonLine}</Link> 
        </div>
  )
}
export default function App() {
  return (
    <div className = 'box'>
      <h1>Let's Play Rock Paper Scissors Game!</h1>
      <LinkButton to = '/game' buttonLine = "Play With AI Robot"></LinkButton>
      <LinkButton to = '/404' buttonLine = "Play With Players"></LinkButton>
      <LinkButton to = '/404' buttonLine = "Settings"></LinkButton>
      <LinkButton to = '/404' buttonLine = "About Us"></LinkButton>
      <LinkButton to = '/game' buttonLine = "Quit"></LinkButton>
        <div>
          <img src = {require('./images/gamelogo.png')}></img>
        </div>
    </div>
  );
}