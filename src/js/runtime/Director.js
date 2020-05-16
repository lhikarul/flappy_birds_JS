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
    run () {
        this.dataStore.get('background').draw();
        this.dataStore.get('land').draw();

        this.dataStore.get('pencils').forEach(pencil => pencil.draw());

        const timer = requestAnimationFrame(() => this.run())
        this.dataStore.put('timer',timer);
    }
}