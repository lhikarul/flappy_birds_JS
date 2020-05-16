import { DataStore } from "../base/DataStore";
import { UpPencil } from "./UpPencil";
import { DownPencil } from "./DownPencil";

// 負責控制遊戲的邏輯
export class Director {
    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director()
        }
        return Director.instance;
    }
    static isStrike(bird,pencil) {
        let strike = false;
        if (bird.top > pencil.bottom || 
            bird.bottom < pencil.top || 
            bird.right < pencil.left || 
            bird.left > pencil.right) 
        {
            strike = true;
        }
        return !strike;
    }
    constructor() {
        this.dataStore = DataStore.getInstance();
        this.landSpeed = 2;
    }
    createPencil () {
        const minTop = window.innerHeight / 8;
        const maxTop = window.innerHeight / 2;
        const top = minTop + Math.random() * (maxTop - minTop);

        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pencils').push(new DownPencil(top));
    }
    check () {
        const bird = this.dataStore.get('birds')
        const land = this.dataStore.get('land')
        const pencils = this.dataStore.get('pencils');
        const score = this.dataStore.get('score');

        if (bird.birdsY[0] + bird.birdsHeight[0] >= land.y) {
            this.isGameOver = true;
            return;
        }
        const birdsBorder = {
            top: bird.y[0],
            bottom: bird.birdsY[0] + bird.birdsHeight[0],
            left: bird.birdsX[0],
            right: bird.birdsX[0] + bird.birdsWidth[0]
        }
        const length = pencils.length;
        
        for (let i=0; i < length; i++) {
            const pencil = pencils[i];
            const pencilBorder = {
                top: pencil.y,
                bottom: pencil.y + pencil.height,
                left: pencil.x,
                right : pencil.x + pencil.width
            }
          if (Director.isStrike(birdsBorder,pencilBorder)) {
              this.isGameOver = true;
              return;
          }
        }

        if (bird.birdsX[0] > pencils[0].x + pencils[0].width && score.isScore) {
            score.isScore = false;
            score.scoreNumber += 1;
        }

    }
    birdsEvent () {
        for (let i=0; i<=2; i++) {
            this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i];
        }
        this.dataStore.get('birds').time = 0;
    }
    run () {
        this.check();
        if (!this.isGameOver){
            this.dataStore.get('background').draw();

            const pencils = this.dataStore.get('pencils');

            if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
                pencils.shift()
                pencils.shift();
                this.dataStore.get('score').isScore = true;
            }
            
            if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 && pencils.length === 2) {
                this.createPencil();
            }

            this.dataStore.get('pencils').forEach(pencil => pencil.draw());
            this.dataStore.get('land').draw();
            this.dataStore.get('birds').draw();
            this.dataStore.get('score').draw();

            const timer = requestAnimationFrame(() => this.run())
            this.dataStore.put('timer',timer);
        }else {
            this.dataStore.get('startButton').draw();
            cancelAnimationFrame(this.dataStore.get('timer'));
            this.dataStore.destory();
        }
    }
}