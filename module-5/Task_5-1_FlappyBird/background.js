"use strict";
import { TSprite } from "libSprite";

export class TBackground{
  #spriteBackground;
  #spriteGround;

  constructor(aSpcvs, aSPI){
    this.#spriteBackground = new TSprite(aSpcvs,aSPI.background,0,0);
    const groundPosY = aSPI.background.height - aSPI.ground.height;
    this.#spriteGround = new TSprite(aSpcvs, aSPI.ground, 0, groundPosY);
  }

  drawBackground(){
    this.#spriteBackground.draw();
  }
// night mode
  setNight(){
    this.#spriteBackground.index = 1;
  }
  setDay(){
    this.#spriteBackground.index = 0;
  }
  //end night mode
  drawGround(){
    this.#spriteGround.draw();
  }

  animate(){
    const x = this.#spriteGround.x + (this.#spriteGround.width / 2);
    if(x < 5){
      this.#spriteGround.x = 0;  
    }else{
      this.#spriteGround.x--;
    }
  }
}


