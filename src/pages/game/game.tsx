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
const [playerGesture,setPlayerGesture] = useState("");
const [aiGesture,setAIGesture] = useState("");
const [win,setWin] = useState(null)

var gestures = ['Rock','Papers','Scissors']

function AIChooseGesture(){
  var ret = Math.floor(Math.random() * 3);	//return 0 1 2
  setGAI(ret);
  return ret;
} 

function update(win){
  alert("Next round!");
  setRound(round+1);
  setPlayerGesture("");
  setAIGesture("");
  setWin(null);
}


function PlayerChooseGesture(playerChoose){
  var AIChoose = AIChooseGesture();
  setPlayerGesture(gestures[playerChoose]);
  setAIGesture(gestures[AIChoose]); 
  if(playerChoose === AIChoose){
    setWin(0)
  }else{
    var sub = playerChoose - AIChoose;
    if(sub === 1||sub === -2){
      setPWin(pWin+1)
      setWin(1)
    }else if(sub === -1||sub === 2){
      setRWin(rWin+1)
      setWin(-1)
    }
  }
  if(playerChoose === 0){
    setG1(0);
  }else if(playerChoose === 1){
    setG2(0)
  }else{
    setG3(0);
  }
  setGAI(0);
  setTimeout(()=>{update(win)},300);
}

  return (
    <div className = 'gamebox'>
      <div className='title'>Rock Paper Scissors Game</div>
      <div className='board'>
        <div className = "roundinfo">
          <div className = "round">
            Round {round}:
          </div>
          <div className = "infobox">
            <div className = "info">
              You choose {playerGesture}
            </div>
            <div className = "info">
              AI Robot chooses {aiGesture}
            </div>
            <div className = "info-result">
              {win===null?'':(win===0?'Tie':(win<0?"Lose":"Win"))}
            </div>
          </div>
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