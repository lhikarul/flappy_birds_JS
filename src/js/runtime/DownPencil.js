import { Sprite } from "../base/Sprite";
import { Pencil } from "./Pencil";

export class DownPencil extends Pencil {
    constructor(top) {
        const image = Sprite.getImage('pencilDown');
        super(image,top);
    }
    draw () {
        const gap = window.innerHeight / 5;
        this.y = this.top + gap;
        super.draw();
    }
}