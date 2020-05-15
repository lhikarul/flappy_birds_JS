import { ResourceLoader } from "./js/base/ResourceLoader";
import { Director } from "./js/runtime/Director";

// 初始化整個遊戲,作為遊戲開始的入口
export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');

        const loader = ResourceLoader.create();

        loader.onLoaded(this.onResourceFirstLoaded)

        Director.getInstance();
        Director.getInstance();
        Director.getInstance();

    }
    onResourceFirstLoaded(map) {
        console.log('map ',map)
    }
}
