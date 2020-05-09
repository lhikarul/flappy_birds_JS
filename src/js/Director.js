import { DataStore } from "./base/DataStore";

// 控制遊戲
export class Director {
    constructor() {
        this.dataStroe = DataStore.getInstance();
    }
    run () {
        const backgroundSprite = this.dataStroe.get('background');
        backgroundSprite.draw();
    }
    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }
}