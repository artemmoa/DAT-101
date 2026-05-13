"use strict";
//creating a separate file for sound effects, for reaching sounds in different functions and files, separratly from menu//
import { TSoundFile } from "libSound";

const filePlaying ="./media/hitslab-retro-retro-synthwave-gaming-music-270173.mp3";
const fileGameOver = "./media/gameover.mp3";
const fileBait = "./media/bait sound.mp3";

export class TSoundEffects {

    #sfPlaying;
    #sfGameOver
    #sfBait;

constructor(){
    // this.#sfGameOver = null;
    // this.#sfPlaying = null;
     this.sfPlaying = new TSoundFile(filePlaying); 
     this.sfGameOver  = new TSoundFile(fileGameOver);
     this.sfBait = new TSoundFile(fileBait);
}

 soundBait(){
    this.sfBait.play();    //
    
    setTimeout(() => {   
    this.sfBait.stop();
}, 3000);
this.sfBait.stop();
 }

 soundPlaying(){
    this.sfPlaying.play();
 }

soundPlayingStop(){ 
    this.sfPlaying.stop();
 }
 

 soundGameOver(){
    this.sfGameOver.play();
 }  


}