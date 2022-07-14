import React ,{ useState } from 'react'
import ReactDOM from "react-dom/client";
import "./game.css"

function AIChooseGesture(){
  return Math.floor(Math.random() * 3);	
} 


function Game () {
const [g1, setG1] = useState(0);
const [g2, setG2] = useState(0);
const [g3, setG3] = useState(0);
const [gAI, setGAI] = useState(0);
const [round,setRound] = useState(1);
const [pWin,setPWin] = useState(0);
const [rWin,setRWin] = useState(0);

function AIChooseGesture(){
  var ret = Math.floor(Math.random() * 3);	//return 0 1 2
  setGAI(ret);
  return ret;
} 

function PlayerChooseGesture(Pg){
  var AIg = AIChooseGesture();
  var win = true;
  if(Pg === AIg){
    alert("try again");
  }else{
    var sub = Pg - AIg;
    if(sub === 1||sub === -2){
      alert('You win!');
      setPWin(pWin+1)
    }else if(sub === -1||sub === 2){
      alert('AI Robot win!');
      setRWin(rWin+1)
    }
  }
  if(Pg === 0){
    setG1(0);
  }else if(Pg === 1){
    setG2(0)
  }else{
    setG3(0);
  }
  setGAI(0);
  setRound(round+1)
}

  return (
    <div className = 'gamebox'>
      <div className='title'>Rock Paper Scissors Game</div>
      <div className='board'>
        <div className = "roundrecord">
          Round {round}:
          <p>Papers wrap Rock <br />Rock smash Scissors <br />Scissors cut Papers <br /> You win! <br />AI Robot win!</p>
        </div>
        <div className = "score">
          {pWin } : Player VS AI Robot : { rWin}
        </div>
      </div>

      <div className = "play">
        <div className='imgbox'>
          <img src={require('../../images/player.png')} alt="player"className = "playerimg"/>
        </div>
        <div className = "player">
          <div className = "gesture" onClick={() => PlayerChooseGesture(0)}>
            <img src={require('../../images/rock.png')} alt="Rock"/ >
          </div>
          <div className = "gesture" onClick={() => PlayerChooseGesture(1)}>
            <img src={require('../../images/paper.png')} alt="Paper"/>
          </div>
          <div className = "gesture" onClick={() => PlayerChooseGesture(2)}>
            <img src={require('../../images/scissors.png')} alt="Scissors"/>
          </div>
        
        </div>

        <div className = "robot">
          <img src={require('../../images/question.png')} alt="guess" className = 'gesture'/>
        </div>
        <div className = "imgbox">
          <img src={require('../../images/robot.png')} alt="robot" className = "robotimg"/>
        </div>

      </div>
      <div>
      </div>
    </div>
  )
}
 
 export default Game;