import { DataStore } from "./base/DataStore";

// 控制遊戲
export class Director {
    constructor() {
        this.dataStroe = DataStore.getInstance();
    }
    run () {
        this.dataStroe.get('background').draw();
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