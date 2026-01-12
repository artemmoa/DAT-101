"use strict"
import {TSprite} from "libSprite";
export class THero extends TSprite{
#gravity;
#speed;
 constructor(aSpcvs, aSPI, aX, aY){
  super(aSpcvs, aSPI, 150, 200);
  this.animationSpeed = 20;
  this.#gravity = 9.81 / 100;
  this.#speed = 0;
}
animate(){
    if(this.y < 400- this.height){
    this.#speed += this.#gravity;
    this.y += this.#speed;
    if(this.rotation < 90){
    this.rotation = this.#speed*25;
    }
    }
  }

flap(){
    this.#speed = -3.5;
    this.rotation = 0;
}
}        