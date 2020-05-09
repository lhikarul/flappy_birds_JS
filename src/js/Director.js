import { DataStore } from "./base/DataStore";
import { UpPencil } from "./runtime/UpPencil";
import { DownPencil } from "./runtime/DownPencil";

// 控制遊戲
export class Director {
    constructor() {
        this.dataStroe = DataStore.getInstance();
        this.moveSpeed = 2;
    }
    birdsEvent() {
        for (let i=0; i<=2; i++) {
            this.dataStroe.get('birds').y[i] = this.dataStroe.get('birds').birdsY[i];
        }
        this.dataStroe.get('birds').time = 0;
    }

    createPencil () {
        const miniTop = window.innerHeight / 8;
        const maxTop = window.innerHeight / 2;
        const top = miniTop + Math.random() * (maxTop - miniTop);

        this.dataStroe.get('pencils').push(new UpPencil(top));
        this.dataStroe.get('pencils').push(new DownPencil(top));
    }

    run () {
        if (!this.isGameOver) {
            this.dataStroe.get('background').draw();

            const pencils = this.dataStroe.get('pencils');

            if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
                pencils.shift();
                pencils.shift();
            }

            if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2  && pencils.length === 2) {
                this.createPencil();
            }

            this.dataStroe.get('pencils').forEach(function(value){
                value.draw();
            })

            this.dataStroe.get('land').draw();
            this.dataStroe.get('birds').draw();
            
            let timer = requestAnimationFrame(() => this.run());
            this.dataStroe.put('timer',timer);
        }else {
            cancelAnimationFrame(this.dataStroe.get('timer'));
            this.dataStroe.destory();
        }
    }
    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }
}