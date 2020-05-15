// 負責控制遊戲的邏輯
export class Director {
    constructor() {
        console.log('construtro init')
    }
    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director()
        }
        return Director.instance;
    }
}