import background from 'image/background.png';
import {ResourceLoader} from './js/base/ResourceLoader';
import {Director} from './js/Director';
import { BackGround } from './js/runtime/BackGround';
export class Main {
    constructor() {
       this.canvas = document.getElementById('game_canvas');
       this.ctx = this.canvas.getContext('2d');
    
       const loader = ResourceLoader.create();

       loader.onLoaded(map => this.onResourceFirstLoaded(map));

       Director.getInstance();

    }
    onResourceFirstLoaded(map) {
        let background = new BackGround(this.ctx,map.get('background'));
        console.log(background)
        background.draw();
    }
}