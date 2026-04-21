"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";
export class TMenu {
    #spTitle;
    #spPlayBtn;
    #spCountDown;
    #sfCountDown;
    #sfRunning;
    #spGameScore;
    #spGameOver;
    #spMedal;
    #spScoreBoardFinal;
    #spScoreBoardHigh;
    #highScores;
    constructor(aSpcvs, aSPI) {
        this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 230, 250);
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
        this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 260, 160);
        this.#spCountDown.visible = false;
        this.#sfCountDown = null;
        this.#sfRunning = null;
        this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
        this.#spGameScore.alpha = 0.5;
        this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 200, 150);
        this.#spGameOver.visible = false;
        this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 225, 195);
        this.#spMedal.visible = false;
        this.#spScoreBoardFinal = new TSpriteNumber(aSpcvs, aSPI.numberBig, 320, 160);
        this.#spScoreBoardFinal.visible = false;
        this.#spScoreBoardHigh = new TSpriteNumber(aSpcvs, aSPI.numberBig, 320, 210);
        this.#spScoreBoardHigh.visible = false;
        this.#highScores = [0];
    }
    incGameScore(aScore) {
        this.#spGameScore.value += aScore;
    }
    stopSound() {
        if (this.#sfRunning !== null) {
            this.#sfRunning.stop();
        }
    }
    isMuted() {
        return chkMuteSound.checked;
    }
    draw() {
        this.#spTitle.draw();
        this.#spCountDown.draw();
        this.#spGameScore.draw();
        this.#spGameOver.draw();
        this.#spPlayBtn.draw();
        this.#spMedal.draw();
        this.#spScoreBoardFinal.draw();
        this.#spScoreBoardHigh.draw();
    }
    mute() {
        if (this.#sfRunning !== null) {
            this.#sfRunning.stop();
        }
        if (this.#sfCountDown !== null) {
            this.#sfCountDown.pause();
        }
    };
    unmute() {
        if (this.#sfRunning !== null) {
            this.#sfRunning.play();
        }
    };
    setSoundMute(aIsMuted) {
       if (aIsMuted === true) {
            if (this.#sfRunning !== null) {
                this.#sfRunning.pause();
            }
            if (this.#sfCountDown !== null) {
                this.#sfCountDown.pause();
            }
        } else {
            if (this.#spCountDown.visible && this.#sfCountDown !== null) {
                this.#sfCountDown.play();
            } else if (this.#spPlayBtn.hidden && this.#sfRunning !== null) {
                this.#sfRunning.play();
            }
        }
    };
    countDown() {
        this.#spCountDown.value--;
        if (this.#spCountDown.value > 0) {
            setTimeout(this.countDown.bind(this), 1000);
        } else {
            this.#spCountDown.visible = false;
            this.#spTitle.hidden = true;
            if (this.#sfRunning !== null) {
                this.#sfRunning.stop();
            }
            this.#sfRunning = new TSoundFile(fnRunning);

            if (chkMuteSound.checked) {
                this.#sfRunning.pause();
            } else {
                this.#sfRunning.play();
            }
            startGame()
        }


    }
    spPlayBtnClick() {
        console.log("Click!");
        this.#spPlayBtn.hidden = true;
        this.#spGameScore.visible = true;
        this.#spGameScore.value = 0;
        this.#spGameOver.hidden = true;
        this.#spMedal.hidden = true;
        this.#spScoreBoardFinal.visible = false;
        this.#spScoreBoardHigh.visible = false;
        this.#spCountDown.visible = true;
        this.#spCountDown.value = 3;

        if (this.#sfRunning !== null) {
            this.#sfRunning.stop();
        }
            if (this.#sfCountDown !== null) {
                this.#sfCountDown.stop();
            }
            if (chkMuteSound.checked) {
        } else {
            this.#sfCountDown = new TSoundFile(fnCountDown);
            this.#sfCountDown.play();
        };
        setTimeout(this.countDown.bind(this), 1000);
    }
    showGameOver(aFinalScore, aHighScore) {
        if (this.#sfRunning != null) {
            this.#sfRunning.stop();
        }
        this.#spTitle.hidden = false;
        this.#spGameScore.visible = false;
        this.#spGameOver.visible = true;
        this.#spScoreBoardFinal.value = aFinalScore;
        this.#spScoreBoardFinal.visible = true;
        this.#spPlayBtn.hidden = false;
        this.#sfRunning.stop();
        if (this.#spGameScore.value > this.#highScores.at(-1)) {
            this.#highScores.push(this.#spGameScore.value);
            aHighScore = this.#highScores.at(-1);
        }
        this.#spScoreBoardHigh.value = this.#highScores.at(-1);
        this.#spScoreBoardHigh.visible = true;
        if (aFinalScore >= 10) {
            this.#spMedal.index = 1;

        } else if (aFinalScore >= 5) {
            this.#spMedal.index = 2;

        } else if (aFinalScore >= 2) {
            this.#spMedal.index = 3;

        } else {
            this.#spMedal.index = 0;
        }
        this.#spMedal.hidden = false;

    }
}
