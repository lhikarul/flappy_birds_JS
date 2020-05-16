import { ResourceLoader } from "./js/base/ResourceLoader";
import { Director } from "./js/runtime/Director";
import { Background } from "./js/runtime/Background";
import { DataStore } from "./js/base/DataStore";
import { Land } from "./js/runtime/Land";
import { Birds } from "./js/player/Birds";
import { StartButton } from "./js/player/StartButton";

// 初始化整個遊戲,作為遊戲開始的入口
export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();

        loader.onLoaded(this.onResourceFirstLoaded.bind(this))

    }
    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.map = map;
        this.init();
    }
    init () {
        window.innerWidth = 375;
        this.director.isGameOver = false;
       this.dataStore
       .put('background',Background)
       .put('land',Land)
       .put('pencils',[])
       .put('birds',Birds)
       .put('startButton',StartButton)
       this.registerEvent();
       this.director.createPencil();
       this.director.run();
    }
    registerEvent() {
        this.canvas.addEventListener('click',(e) => {
            e.preventDefault();
            if (this.director.isGameOver) {
                this.init();
            }else {
                this.director.birdsEvent();
            }
        })
    }
}
