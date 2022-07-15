import React ,{ useState } from 'react'
import ReactDOM from "react-dom/client";
import "./game.css"
import aiquestion from '../../images/question.png'; 
import airock from '../../images/AI-rock.png'; 
import aipaper from '../../images/AI-paper.png'; 
import aiscissor from '../../images/AI-scissors.png'; 


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
    var message = "";
    if(win === 0){
      message += "The game ends in a draw. ";
    }else if(win === 1){
      message += "You win the game. ";
    }else if(win === -1){
      message += "You lose the game. ";
    }
    alert(message+"Good luck in next round!");
    setRound(round+1);
    setPlayerGesture("");
    setAIGesture("");
    setWin(null);
  }

  function PlayerChooseGesture(playerChoose){
    var AIChoose = AIChooseGesture();
    var w = 0;
    setPlayerGesture(gestures[playerChoose]);
    setAIGesture(gestures[AIChoose]); 
    if(playerChoose === AIChoose){
      setWin(0)
      w=0;
    }else{
      var sub = playerChoose - AIChoose;
      if(sub === 1||sub === -2){
        setPWin(pWin+1)
        setWin(1)
        w=1;
      }else if(sub === -1||sub === 2){
        setRWin(rWin+1)
        setWin(-1)
        w=-1;
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
    setTimeout(()=>{update(w)},800);
  }

  return (
    //最外部的box
    <div className = 'gamebox'>
      <div className='title'>Rock Paper Scissors Game</div>
    {/* 游戏信息显示区 */}
      <div className='board'>
        <div className = "roundinfo">
          <div className = "round">
            Round {round}
          </div>

          <div className = "infobox">
            <Info people = 'You' g = {playerGesture}></Info>
            <Info people = 'AI Robot' g = {aiGesture}></Info>
            <div className = "info-result">
              {win===null?'':(win===0?'Tie':(win<0?"Lose":"Win"))}
            </div>
          </div>
        </div>

        <div className = "score">
          {pWin } : Player VS AI Robot : { rWin}
        </div>

      </div>
      {/* 游戏进行区 */}
      <div className = "play">

        <div className='imgbox'>
          <img src={require('../../images/player.png')} alt="player"className = "playerimg"/>
        </div>
        {/* 玩家区 */}
        <div className = "player">
          <div className = "gesture" onClick={() => PlayerChooseGesture(0)}>
            <img src={require('../../images/rock.png')} alt="Rock"/>
          </div>
          <div className = "gesture" onClick={() => PlayerChooseGesture(1)}>
            <img src={require('../../images/paper.png')} alt="Paper"/>
          </div>
          <div className = "gesture" onClick={() => PlayerChooseGesture(2)}>
            <img src={require('../../images/scissors.png')} alt="Scissors"/>
          </div>
        </div>

        {/* 机器人区 */}
        <RobotGesture w={win} aig = {aiGesture}/>

        <div className = "imgbox">
          <img src={require('../../images/robot.png')} alt="robot" className = "robotimg"/>
        </div>

      </div>

    </div>
  )
}

function RobotGesture(props){
  var pic = aiquestion;
  if(props.w === null){
    console.log()
  }else{
    if(props.aig === 'Rock'){
      pic = airock;
    }else if(props.aig === 'Papers'){
      pic = aipaper;
    }else{
      pic = aiscissor;
    }
  }
  return (
    <div className = "robot" >
      <img src={pic} alt="guess" className = 'gesture'/>
    </div>
    );
}

function Info(props){
  return (
    <div className = "info">
      {props.people+" choose"}
      <div className = 'colortext'>
        {": "+props.g}
        </div>
    </div>
  );
}

export default Game;