import { DataStore } from "../base/DataStore";

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
    }
    run () {
        this.dataStore.get('background').draw();
        this.dataStore.get('land').draw();

        const timer = requestAnimationFrame(() => this.run())
        this.dataStore.put('timer',timer);
    }
}