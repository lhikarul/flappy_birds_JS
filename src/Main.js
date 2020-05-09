import {ResourceLoader} from './js/base/ResourceLoader';
import {Director} from './js/Director';
export class Main {
    constructor() {
       this.canvas = document.getElementById('game_canvas');
       this.ctx = this.canvas.getContext('2d');
    
       const loader = ResourceLoader.create();

       loader.onLoaded(map => this.onResourceFirstLoaded(map));

       Director.getInstance();

    }
    onResourceFirstLoaded(map) {
    
    }
}