import {ResourceLoader} from './js/base/ResourceLoader';
import { BackGround } from './js/runtime/BackGround';
import {Director} from './js/Director';
import { DataStore } from './js/base/DataStore';

export class Main {
    constructor() {
       this.canvas = document.getElementById('game_canvas');
       this.ctx = this.canvas.getContext('2d');
       this.dataStore = DataStore.getInstance();
    
       const loader = ResourceLoader.create();

       loader.onLoaded(map => this.onResourceFirstLoaded(map));

       Director.getInstance();

    }
    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }
    init () {
        this.dataStore.put('background',BackGround);

        Director.getInstance().run();

    }
}