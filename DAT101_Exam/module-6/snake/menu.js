"use strict";

/* Use this file to create the menu for the snake game. */
 import {EGameStatus, GameProps, SheetData, newGame, loadGame} from "./game.mjs"
import { TSpriteNumber, TSpriteButtonHaptic, TSprite, TSpriteButton} from "libSprite";

import { TSoundEffects } from "./sound.js";   


export class TMenuSnake {
#scoreSprite;
#displayScore = 0;
#playBtn; 
#resumeBtn;
#gameOverScreen;
#gameOverScore;
#retryBtn;
#homeBtn;
#soundEffects;

constructor(aSpcvs, aSPI){
    this.#scoreSprite = new TSpriteNumber(aSpcvs, aSPI.Number, 20, 20, 0, 0); // create a sprite for score 
    this.#scoreSprite.value = 0;
    this.#scoreSprite.visible = false;
    this.#playBtn = new TSpriteButtonHaptic(aSpcvs, aSPI.Play, 350, 250); // create a play button
    this.#playBtn.addEventListener("click", this.playBtnClick.bind(this))
    this.#playBtn.hidden = false; 
    this.resumeBtn = new TSpriteButtonHaptic(aSpcvs, aSPI.Resume, 350,250); // resume button
    this.resumeBtn.addEventListener("click", this.resumeBtnClick.bind(this));
    this.resumeBtn.hidden = true;
    this.#gameOverScreen = new TSprite(aSpcvs, aSPI.GameOver, 30, 30); // game over screen 
    this.#gameOverScreen.hidden = true; 
    this.#gameOverScore = new TSpriteNumber(aSpcvs, aSPI.Number, 550, 240, 0, 0); // game over score 
    this.#gameOverScore.value = 0;
    this.#gameOverScore.visible = false;
    this.#retryBtn = new TSpriteButton(aSpcvs, aSPI.Retry, 645, 377); // retry button
    this.#retryBtn.addEventListener("click", this.retryBtnClick.bind(this));
    this.#retryBtn.hidden = true; 
    this.homeBtn = new  TSpriteButton(aSpcvs, aSPI.Home, 96, 377);// home button
    this.homeBtn.addEventListener("click", this.homeBtnClick.bind(this));
    this.homeBtn.hidden = true;
    
    this.#soundEffects = new TSoundEffects;

}

incScore(aScore){
    GameProps.score += aScore; // adiing baitscore to global score 
    this.#displayScore = GameProps.score; 
    this.#scoreSprite.value = this.#displayScore; // syncronising score with sprite
    console.log("Score: " + this.#scoreSprite.value); 
}

draw(){                                           //making sprites active during the game
        this.#scoreSprite.value = this.#displayScore; // syncronising score with sprite, debugging with ai
        this.#scoreSprite.draw(); 
        this.#playBtn.draw();
        this.resumeBtn.draw();
        this.#gameOverScreen.draw();
        this.#gameOverScore.draw();
        this.#retryBtn.draw();
        this.homeBtn.draw();
}

playBtnClick(){
//function for start the game, when thee button is clicked  
    newGame();
    GameProps.gameStatus = EGameStatus.Playing;
    this.#displayScore = 0; 
    this.#playBtn.hidden = true;  
    this.#scoreSprite.visible = true; 

    this.#soundEffects.soundPlaying();

    // this.sfPlaying = new TSoundFile(sfPlaying); 
    // this.sfPlaying.play();
}

resumeBtnClick(){
    GameProps.gameStatus = EGameStatus.Playing;
    this.resumeBtn.hidden = true;
    console.log("resumed");
}

GameOver(){
    this.#gameOverScreen.hidden = false; 
    this.#scoreSprite.visible = false;
    this.#gameOverScore.visible = true;
    this.#gameOverScore.value = this.#displayScore;
    this.#retryBtn.hidden = false;
    this.homeBtn.hidden = false;
    this.#soundEffects.soundPlayingStop();
   
}
retryBtnClick(){
console.log("retry game");
this.playBtnClick();
this.#retryBtn.hidden = true;
this.homeBtn.hidden = true; 
this.#gameOverScore.visible = false;
this.#gameOverScreen.hidden = true;
 
}
homeBtnClick(){
    console.log("home")
    GameProps.gameStatus = EGameStatus.Idle;
    this.#retryBtn.hidden = true;
    this.homeBtn.hidden = true; 
    this.#gameOverScore.visible = false;
    this.#gameOverScreen.hidden = true;
    this.#playBtn.hidden = false;
}
}