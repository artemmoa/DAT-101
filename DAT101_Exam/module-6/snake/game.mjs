"use strict";
// to do: figure out how to connect sprite to actual score 

//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import { TSpriteCanvas } from "libSprite";
import { TGameBoard, GameBoardSize, TBoardCell } from "./gameBoard.js";
import { TSnake, EDirection } from "./snake.js";
import { TBait } from "./bait.js";
// import { TMenu } from "../../../module-5/Task_5-1_FlappyBird/menu.js";
import { TMenuSnake } from "./menu.js";
//-----------------------------------------------------------------------------------------
//----------- variables and object --------------------------------------------------------
//-----------------------------------------------------------------------------------------
const cvs = document.getElementById("cvs");
const spcvs = new TSpriteCanvas(cvs);
let menuSnake = null; // variable for  menu
export let gameSpeed = 4; // Game speed multiplier;
let hndUpdateGame = null;
let baitsCounter = 0; 
export const EGameStatus = { Idle: 0, Playing: 1, Pause: 2, GameOver: 3 };




// prettier-ignore
export const SheetData = {
  Head:     { x:   0, y:   0, width:  38, height:  38, count:  4 },
  Body:     { x:   0, y:  38, width:  38, height:  38, count:  6 },
  Tail:     { x:   0, y:  76, width:  38, height:  38, count:  4 },
  Bait:     { x:   0, y: 114, width:  38, height:  38, count:  1 },
  Play:     { x:   0, y: 155, width: 202, height: 202, count: 10 },
  GameOver: { x:   0, y: 647, width: 856, height: 580, count:  1 },
  Home:     { x:  65, y: 995, width: 169, height: 167, count:  1 },
  Retry:    { x: 614, y: 995, width: 169, height: 167, count:  1 },
  Resume:   { x:   0, y: 357, width: 202, height: 202, count: 10 },
  Number:   { x:   0, y: 560, width:  81, height:  86, count: 10 },
};

export const GameProps = {
  gameBoard: null,
  gameStatus: EGameStatus.Idle,
  snake: null,
  bait: null,
  score: 0
};

//------------------------------------------------------------------------------------------
//----------- Exported functions -----------------------------------------------------------
//------------------------------------------------------------------------------------------

export function newGame() {
  GameProps.gameBoard = new TGameBoard();
  GameProps.snake = new TSnake(spcvs, new TBoardCell(5, 5)); // Initialize snake with a starting position
  GameProps.bait = new TBait(spcvs); // Initialize bait with a starting position 
  gameSpeed = 4; // Reset game speed
  GameProps.score = 0;
  increaseGameSpeed(); // using increaseGameSpeed to apply reset of speed to the game before bait will be eaten
}

export function baitIsEaten() {
  baitsCounter++;
  menuSnake.incScore(30);  // counter increasment 
  console.log("Bait eaten!");
  GameProps.bait.update(); 
  GameProps.snake.grow(); 
  /* Logic to increase the snake size and score when bait is eaten */
  increaseGameSpeed(); // Increase game speed

}


//------------------------------------------------------------------------------------------
//----------- functions -------------------------------------------------------------------
//------------------------------------------------------------------------------------------

export function loadGame() {
  cvs.width = GameBoardSize.Cols * SheetData.Head.width;
  cvs.height = GameBoardSize.Rows * SheetData.Head.height;

  GameProps.gameStatus = EGameStatus.Idle; // change game status to Idle


  /* Create the game menu here */ 
  menuSnake = new TMenuSnake(spcvs, SheetData); // variable for scores 
  requestAnimationFrame(drawGame);
  console.log("Game canvas is rendering!");
  gameSpeed = 4;
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Update game every 1000ms / gameSpeed
}

function drawGame() {
  // Clear the canvas
  spcvs.clearCanvas();

  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:  

    case EGameStatus.Pause:
      GameProps.bait.draw();
      GameProps.snake.draw();
      break;
  }
    menuSnake.draw(); // display menu for all statuses 
  // Request the next frame
  requestAnimationFrame(drawGame);
}

function updateGame() {
  // Update game logic here
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
    
      if (!GameProps.snake.update()) {    
        GameProps.gameStatus = EGameStatus.GameOver;
        console.log("Game over!");
      }
      break;
    case EGameStatus.GameOver:// game over screen calling
      menuSnake.GameOver(); 
  }
}

function increaseGameSpeed() {
  /* Increase game speed logic here */
  gameSpeed += 1; // snake speed increases 
  console.log("Game speed:" + gameSpeed);
  clearInterval(hndUpdateGame); // Clear the existing interval, helped with ai
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Update game every 1000ms / gameSpeed

}


//-----------------------------------------------------------------------------------------
//----------- Event handlers --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function onKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      GameProps.snake.setDirection(EDirection.Up);
      break;
    case "ArrowDown":
      GameProps.snake.setDirection(EDirection.Down);
      break;
    case "ArrowLeft":
      GameProps.snake.setDirection(EDirection.Left);
      break;
    case "ArrowRight":
      GameProps.snake.setDirection(EDirection.Right);
      break;
      // adding in pause button in key pressed listener for both  space and esc keys//
    case " ":
      console.log("Space key pressed!");
    case "Escape":                   
      //pause game code//
      console.log("esc pressed");
    if(GameProps.gameStatus === EGameStatus.Playing) {
      GameProps.gameStatus = EGameStatus.Pause;
      menuSnake.resumeBtn.hidden = false;
    }
      break;
    default:
      console.log(`Key pressed: "${event.key}"`);   
    
  }

  }

//-----------------------------------------------------------------------------------------
//----------- main -----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

spcvs.loadSpriteImage("./Media/spriteSheet.png", loadGame);
document.addEventListener("keydown", onKeyDown);
