import React, { use, useRef, useState } from 'react'
import './App.css'

function App() {


  const userRef = useRef(null)
  const compRef = useRef(null)
  const result = useRef(null)


  const[userScore, setUserScore] = useState(0)
  const[compScore, setCompScore] = useState(0)


  function game(user){
      let ai;
      let num = Math.random()*10
      
      if(num>=0 && num<=3){
        ai = "rock"
      }
      else if(num>3 && num<=6){
        ai="scissor"
      }
      else{
        ai = "paper"
      }

      if(user==ai){
          userRef.current.innerHTML = "You have choosen " +user
          compRef.current.innerHTML = "Computer has choosen "+ ai
          result.current.innerHTML = "Game Drawn"
      }
      else if((user=="paper"&&ai=="rock")|| (user=="rock"&& ai=="scissor")|| (user=="scissor"&& ai=="paper")){
          userRef.current.innerHTML = "You have choosen " +user
          compRef.current.innerHTML = "Computer has choosen "+ ai
          result.current.innerHTML = "You won"
          setUserScore(userScore+1)
      }
      else{
        userRef.current.innerHTML = "You have choosen " +user
          compRef.current.innerHTML = "Computer has choosen "+ ai
          result.current.innerHTML = "Computer won"
          setCompScore(compScore+1)
      }
  }


  return (
    <>
      <div id="main">
        <div>
          <img src="rock.jpg" alt="" width="200" onClick={()=> game('rock')}/>
          <img src="paper.jpg" alt="" width="200" onClick={()=> game('paper')}/>
          <img src="scissor.jpg" alt="" width="200" onClick={()=> game('scissor')}/>
        </div>

        <div>
            <h2 ref={userRef}></h2>
            <h2 ref={compRef}></h2>
            <h2 ref={result}></h2>
        </div>

        <div>
            <h1>User: {userScore}</h1>
            <h1>Computer: {compScore}</h1>
        </div>


      </div>
    </>
  )
}

export default App