import { ResourceLoader } from "./js/base/ResourceLoader";
import { Director } from "./js/runtime/Director";
import { Background } from "./js/runtime/Background";
import { DataStore } from "./js/base/DataStore";

// 初始化整個遊戲,作為遊戲開始的入口
export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        const loader = ResourceLoader.create();

        loader.onLoaded(this.onResourceFirstLoaded.bind(this))

        Director.getInstance();

    }
    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.map = map;
        this.init();
    }
    init () {
       this.dataStore.put('background',new Background(this.ctx,this.dataStore.map.get('background')));
       Director.getInstance().run();
    }
}
