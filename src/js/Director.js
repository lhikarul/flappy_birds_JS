import { DataStore } from "./base/DataStore";
import { UpPencil } from "./runtime/UpPencil";
import { DownPencil } from "./runtime/DownPencil";

// 控制遊戲
export class Director {
    constructor() {
        this.dataStroe = DataStore.getInstance();
        this.moveSpeed = 2;
    }

    createPencil () {
        const miniTop = window.innerHeight / 8;
        const maxTop = window.innerHeight / 2;
        const top = miniTop + Math.random() * (maxTop - miniTop);

        this.dataStroe.get('pencils').push(new UpPencil(top));
        this.dataStroe.get('pencils').push(new DownPencil(top));
    }

    run () {
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

        let timer = requestAnimationFrame(() => this.run());
        this.dataStroe.put('timer',timer);
    }
    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }
}