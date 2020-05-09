import background from 'image/background.png';
import {ResourceLoader} from './js/base/ResourceLoader';
import {Director} from './js/Director';
export class Main {
    constructor() {
       this.canvas = document.getElementById('game_canvas');
       this.ctx = this.canvas.getContext('2d');
    
       const loader = ResourceLoader.create();

       loader.onLoaded(map => this.onResourceFirstLoaded(map));

       Director.getInstance();

       let image = new Image();
       image.src =  background;
       image.onload = () => {
        this.ctx.drawImage(image,0,0,image.width,image.height,0,0,image.width,image.height)
       }
    }
    onResourceFirstLoaded(map) {
    
    }
}